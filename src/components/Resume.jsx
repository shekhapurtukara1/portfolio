import React from 'react';
// import PDFViewer from './PDFViewer';
import PDFDownloadLink from './PDFDownload';
import "../componentStyling/Resume.css";

const Resume = () => {
  const pdfUrl = 'https://orange-cherrita-39.tiiny.site';

  return (
    <div className="resume-section">
      <h1>Resume</h1>
      <p>View or download my resume to know more:</p>
      {/* <PDFViewer pdfUrl={pdfUrl} /> */}
      <PDFDownloadLink pdfUrl={pdfUrl} />
    </div>
  );
};

export default Resume;
