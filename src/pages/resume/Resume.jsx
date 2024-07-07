import "./Resume.css";
import { Suspense, useEffect, useState, lazy } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Button from "../../conponents/button/Button";
import pdf from "./xu-zhusheng.pdf";
const loadDocument = import("react-pdf").then(module => ({ default: module.Document}))
const Document = lazy(() => loadDocument);
const loadPage = import("react-pdf").then(module => ({ default: module.Page }))
const Page = lazy(() => loadPage);

export default function Resume() {
    const [numOfPages, setNumOfPages] = useState(0);
    const [loadedPage, setLoadedPage] = useState(0);
    const [worker, setWorker] = useState(null)
    const [pdfData, setPdfData] = useState(null);

    const onDocumentLoadSuccess = (pdf) => {
        setNumOfPages(pdf.numPages);
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
        import("pdfjs-dist/build/pdf.worker.min.mjs").then(module => setWorker(module));
        (async () => {
            const response = await fetch(pdf);
            const resumeData = new Uint8Array(await response.arrayBuffer());
            setPdfData({ data: resumeData });
        })();
    }, []);


    return (
        <div id="resume">
            <Button
                text="Download Resume"
                href={pdf}
                download="Resume-xuzhusheng.pdf"
            />
            <Suspense>
                {worker && (
                    <Document
                        file={pdfData}
                        onLoadSuccess={onDocumentLoadSuccess}
                        worker={worker}
                    >
                        <Suspense>{pages}</Suspense>
                    </Document>
                )}
            </Suspense>
            <Button
                text="Download Resume"
                href={pdf}
                download="Resume-xuzhusheng.pdf"
            />
            <p />
        </div>
    );
}
