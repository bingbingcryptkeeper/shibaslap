import React from 'react';
import Image from 'next/image'

import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container className="container-slap">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5 div-text">
              <h1 className="mb-4 font-weight-normal line-height-1_4">SHIBA SLAP</h1>
              <h2 className="mb-4 font-weight-normal line-height-1_4">ANTI-MEME MEME TOKEN</h2>
              <p className="text-muted mb-4 pb-2">
                Missed doge? Missed shiba? Missed dogebonk?
                <a className="span-link" href="https://poocoin.app/tokens/0xbc30d59aff36d7ade2faf8152fb1a66757410fee" target="_blank"> $SLAP</a> is a community driven crypto currency, with real world use. We seek to maximize the benefits for coin holders. Don't miss out. 
              </p>
              <a class="btn btn-gradient" href="https://poocoin.app/tokens/0xbc30d59aff36d7ade2faf8152fb1a66757410fee">Buy now</a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
            <Image
              src="/images/shibaslaplogo.png" // Route of the image file
              height={546} // Desired size with correct aspect ratio
              width={546} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;