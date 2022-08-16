import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
export const FileView = () => {
  return <div className="pt-16 pdfmodal h-[500px]"><Viewer fileUrl="sample.pdf" /></div>;
};
