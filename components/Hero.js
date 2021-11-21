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
                Shiba Slap 
                <a className="span-link" href="https://poocoin.app/tokens/0xbc30d59aff36d7ade2faf8152fb1a66757410fee" target="_blank"> ($SLAP) </a> 
                is a new community-driven DeFi token on the Binance Smart Chain that is an automatic liquidity providing protocol that pays out static rewards to holders.
              </p>
              <p className="text-muted mb-4 pb-2"> 
                $SLAP is a community driven, meme powered crypto, available for all, but purchased by only the finest coin connoisseurs aka - slappers. 
                Missed out on Shiba? Missed out on Dogebonk? Don’t miss out on $SLAP. 
                <a className="span-link" href="https://poocoin.app/tokens/0xbc30d59aff36d7ade2faf8152fb1a66757410fee"> Find out how to purchase your ticket to the moon here.</a>
              </p>
              <a className="btn btn-gradient" href="https://poocoin.app/tokens/0xbc30d59aff36d7ade2faf8152fb1a66757410fee">Buy now</a>
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
