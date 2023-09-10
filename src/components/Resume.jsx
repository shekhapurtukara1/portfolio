import React from 'react';
// import PDFViewer from './PDFViewer';
import PDFDownloadLink from './PDFDownload';
import "../componentStyling/Resume.css";

const Resume = () => {
  const pdfUrl = 'https://drive.google.com/file/d/1GfQuBzWUMY2Lqwg1XzxmslifAIokNJFi/view?usp=sharing';

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
