import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
 
  return (
    <section className="footer section">
      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">Disclaimer: deployers of ShibaSlap/SLAP are not liable for any loss when trading this cryptocurrency token. Nothing on this page is financial advice.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;