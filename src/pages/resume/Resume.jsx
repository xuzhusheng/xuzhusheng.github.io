import "./Resume.css";
// import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { Suspense, useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Button from "../../conponents/button/Button";
// import Worker from "pdfjs-dist/build/pdf.worker.min.js";
import pdf from "./xu-zhusheng.pdf";

// eslint-disable-next-line react/prop-types
export default function Resume({worker}) {
    const [numOfPages, setNumOfPages] = useState(0);
    const [loadedPage, setLoadedPage] = useState(0);

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

    return (
        <div id="resume">
            <Button
                text="Download Resume"
                href={pdf}
                download="Resume-xuzhusheng.pdf"
            />
            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                workerSrc={worker}
            >
                <Suspense>{pages}</Suspense>
            </Document>
            <Button
                text="Download Resume"
                href={pdf}
                download="Resume-xuzhusheng.pdf"
            />
        </div>
    );
}
