import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Tokenomics = () => {
  const upperServices = [
    { title : "100 Year Liquidity Locked", desc : "Locked And Burned. Our based dev has locked liquidity for 100 years." },
    { title : "Renounced Ownership", desc : "With ownership renounced there can be no manipulation of tax fees or anything else." },
  ]
  const lowerServices = [
    { title : "Supply", desc : " 1,000,000,000,000,000 made, 4,00,000,000,000,000 (40% Burned)" },
    { title : "Low Tax", desc : "5% fee on each tx, distributed to all holders, 5% fee on each tx, added to the liquidity pool." },
    { title : "Whale Proof", desc : "1%  Maximum Transaction to stop the whales from dumping" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Tokenomics</span></h3>
              <p className="text-muted">Our tokenomics are safe, sound, secure and RENOUNCED. You can be assured that your investment will be fine for decades to come.</p>
            </div>
          </Col>
        </Row>
        <Row className="upper-services">
          {
            upperServices.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div className="service-card">
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
        <Row>
        {
            lowerServices.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div className="service-card">
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Tokenomics;