import "./Resume.css";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Button from "../../conponents/button/Button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const RESUME_URL = "/xu-zhusheng.pdf"
export default function Resume() {
    const [numOfPages, setNumOfPages] = useState();

    const onDocumentLoadSuccess = (pdf) => {
        setNumOfPages(pdf.numPages);
    };

    return (
        <div id="resume">
            <Button text="Download Resume" href={RESUME_URL} download />
            <Document file={RESUME_URL} onLoadSuccess={onDocumentLoadSuccess}>
                {Array(numOfPages)
                    .fill()
                    .map((item, index) => (
                        <Page className="page" key={index} pageNumber={index + 1}>
                        </Page>
                    ))}
            </Document>
            <Button text="Download Resume" href={RESUME_URL} download />
        </div>
    );
}
