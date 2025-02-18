import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import pdf from '../../Assets/EnricoBonatoCV.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page , pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Border from '../Border';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Border>
            <Button  variant="primary" href={pdf} target="_blank" style={{ maxWidth: '250px', margin: 'auto' }}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Border>
        </Row>

        <Row className="resume">
          <Document onLoadError={console.error} file={pdf}  className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
        <Border style={{ justifyContent: 'center' }}>
            <Button  variant="primary" href={pdf} target="_blank" style={{ maxWidth: '250px', margin: 'auto' }}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Border>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
