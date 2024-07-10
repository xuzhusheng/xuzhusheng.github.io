import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Suspense, useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function PdfViewer({ loadWorker, pdf }) {
    const [numOfPages, setNumOfPages] = useState(0);
    const [loadedPage, setLoadedPage] = useState(0);
    const [worker, setWorker] = useState(null);
    const [pdfData, setPdfData] = useState(null);

    const onDocumentLoadSuccess = (file) => {
        setNumOfPages(file.numPages);
    };

    const onPageLoadSuccess = (page) => {
        setLoadedPage(page.pageNumber);
    };

    const pages = Array(Math.min(loadedPage + 1, numOfPages))
        .fill()
        .map((_item, index) => (
            <Page
                className="page"
                key={index}
                pageNumber={index + 1}
                onLoadSuccess={onPageLoadSuccess}
            />
        ));

    useEffect(() => {
        (async () => {
            setWorker(await loadWorker);
        })();

        (async () => {
            const response = await fetch(pdf);
            const resumeData = new Uint8Array(await response.arrayBuffer());
            setPdfData({ data: resumeData });
        })();
    }, [loadWorker, pdf]);
    return (
        <>
            {(!worker || !pdfData) && <p>Loading Resume...</p>}

            {worker && pdfData && (
                <Document
                    file={pdfData}
                    onLoadSuccess={onDocumentLoadSuccess}
                    worker={worker}
                >
                    <Suspense>{pages}</Suspense>
                </Document>
            )}
        </>
    );
}
