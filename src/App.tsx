import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CovidCases} from "./features";

import { CasesProvider, ModeProvider, SearchProvider } from './context';

//  TODO: Refactor handling mulitple contexts
export const App = () =>  {
  return (
      <Container>
          <Row>
            <Col>
              <CasesProvider>
                <SearchProvider>
                  <ModeProvider>
                  < CovidCases/>
                  </ModeProvider>
                </SearchProvider>
              </CasesProvider>
            </Col>
         </Row>
      </Container>
  );
}
