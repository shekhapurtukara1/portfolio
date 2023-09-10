import React from 'react';
import { Link } from 'react-router-dom';
import "../componentStyling/PDFDownload.css"
const PDFDownloadLink = ({ pdfUrl }) => {
  return (
    <div className='PDFDownload-container'>
      <Link to={pdfUrl} style={{"backgroundColor":"yellow"}} target="_blank" className='pdfDownloadLink' download>
        Download PDF
      </Link>
    </div>
  );
};

export default PDFDownloadLink;
