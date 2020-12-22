import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HashRouter } from 'react-router-dom';
import {CovidApp} from "./components/covid-app";
import { CasesProvider, SearchProvider } from './context';

export const App = () =>  {
  return (
    //  TODO: Added because of gh-pages, verify if it works with standard BrowserRouter
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Container>
          <Row>
            <Col>
              <CasesProvider>
                <SearchProvider>
                <CovidApp />
                </SearchProvider>
              </CasesProvider>
            </Col>
         </Row>
      </Container>
  </HashRouter>
  );
}
