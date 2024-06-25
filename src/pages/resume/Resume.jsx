import "./Resume.css";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { useEffect, useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Button from "../../conponents/button/Button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const RESUME_URL = "/xu-zhusheng.pdf";

export default function Resume() {
    const [numOfPages, setNumOfPages] = useState(0);
    const [loadedPage, setLoadedPage] = useState(0);
    const [pdfData, setPdfData] = useState(null);

    const onDocumentLoadSuccess = (pdf) => {
        setNumOfPages(pdf.numPages);
    };

    const onPageLoadSuccess = (page) => {
        setLoadedPage(page.pageNumber);
    };

    useEffect(() => {
        (async () => {
            const response = await fetch(RESUME_URL);
            const resumeData = new Uint8Array(await response.arrayBuffer());
            setPdfData({ data: resumeData });
        })();
    }, []);

    return (
        <div id="resume">
            <Button text="Download Resume" href={RESUME_URL} download />
                <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array(numOfPages)
                        .fill()
                        .map(
                            (_item, index) =>
                                index <= loadedPage && (
                                    <Page
                                        className="page"
                                        key={index}
                                        pageNumber={index + 1}
                                        onLoadSuccess={onPageLoadSuccess}
                                    />
                                )
                        )}
                </Document>
            <Button text="Download Resume" href={RESUME_URL} download />
        </div>
    );
}
