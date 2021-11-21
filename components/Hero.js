import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  
  
  handleClick = () => {
    const shibSlap = new Audio('/sounds/baffe.wav')
    shibSlap.play()
  }
  
  render() {
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
                  We won't tell you how to buy it, because you already bonk, you already know how. Don't miss out. #shibaslap $SLAP
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-5 mt-lg-0" >
              <Image
                className='shib-slap'
                onClick={this.handleClick}
                src="/images/shibaslaplogo.png" // Route of the image file
                height={546} // Desired size with correct aspect ratio
                width={546} // Desired size with correct aspect ratio
                alt="Shib Crypto Slap DogeBonk"
              />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Hero;
