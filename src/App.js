import {useState} from 'react';
import './App.css';
import {generate_data} from './functions'
import Results from './Results';
import GetData from './GetData'
import { Container, Row, Col, Navbar } from 'react-bootstrap';


function App() {
  const [form_data, set_form_data] = useState({});
 

  return (
    <>
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Time keeper pro</Navbar.Brand>
      </Container>
    </Navbar>
    <Container>
      <Row>
        <Col>
          <GetData form_data={form_data} set_form_data={set_form_data}/>
          <hr />
          { 'coworkers' in form_data ?
          <Results generated_data={generate_data(form_data)}/>
          : ''
          }
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
