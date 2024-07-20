import "./Resume.css";
import { lazy, Suspense } from "react";
import Button from "../../components/button/Button";
import pdf from "./xu-zhusheng.pdf";

const PdfViewer = lazy(() => import("./PdfViewer"));

export default function Resume() {
    return (
        <div id="resume">
            <Button
                text="Download Resume"
                href={pdf}
                download="Resume-xuzhusheng.pdf"
            />
            <Suspense fallback={<p>Loading Resume...</p>}>
                <PdfViewer
                    loadWorker={import("pdfjs-dist/build/pdf.worker.min.mjs")}
                    pdf={pdf}
                />
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
