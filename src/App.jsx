import React from 'react'
import './App.css'
import {marked} from 'marked';
import {testText} from './testText';
import DOMPurify from 'dompurify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [outputText, setOutputText] = React.useState(marked(testText));

  function handleChange(event){
    //do this DOMPuruify for xss site scripting, so nobody can put bad stuff in there, e.g redirect
    let dirty = marked(event.target.value); 
    let clean = DOMPurify.sanitize(dirty);
    setOutputText(clean);
  }

  return (
    <>
      <h1 id="header">Markdown Practice Editor</h1>
      <Container id="md-display-box">
        <Row>
          <Col xs={5} id="markdown-heading">
          <h3>Markdown Editor</h3>
          </Col>
          <Col xs={7} id="preview-heading">
          <h3>Document Display</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={5} id="markdown-col">
            <textarea id="editor" onChange={handleChange} defaultValue={testText}></textarea>
          </Col>
          <Col xs={7} id="preview">
            <div dangerouslySetInnerHTML={{__html: marked(outputText)}}></div>
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default App
