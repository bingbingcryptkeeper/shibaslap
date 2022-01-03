import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slapper: 'shibaslaplogo' }
  }
  


  downMousy = (e) => {
    e.preventDefault()
    this.setState({ slapper: 'shibaslaplogoslapped' })
    const shibSlap = new Audio('/sounds/baffe.wav')
    shibSlap.play()
  }

  upMousy = (e) => {
    e.preventDefault()
    this.setState({ slapper: 'shibaslaplogo' })
  }
  
  render() {
    const slapper = this.state.slapper

    return (
      <section id="hero-section" className="section position-relative">
        <Container className="container-slap">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="pr-lg-5 div-text">
                <h1 className="hero-header">SHIBA SLAP</h1>
                <h2 className="mb-4 font-weight-normal line-height-1_4">ANTI-MEME MEME TOKEN</h2>
                <p className="mb-4 pb-2">
                  Shiba Slap 
                  <a className="span-link" href="https://poocoin.app/tokens/0xbc30d59aff36d7ade2faf8152fb1a66757410fee" target="_blank"> ($SLAP) </a> 
                  is a new community-driven DeFi token on the Binance Smart Chain.
                </p>
                <p className=""> 
                  $SLAP was born to slab the shib out of so called 'meme' coins that have no memes. We meme, we slap, and we combine the two to produce a paw to be reckoned with.
                </p>
                <p className=""> 
                  $SLAP is available to all, and all initiaties are designed to reward our token holders - not paid promoters and not the developers.
                </p>
                <p className=""> 
                  So what are you waiting for? Pick yourself up a bag of slap, come join us on tele, reddit or twitter,  and don't miss out on being a foundational slapper.
                </p>
                <p className=""> 
                  Contract address: 0xBC30d59aFF36D7AdE2faF8152fb1a66757410fEE
                </p>
                <p className=""> 
                  #shibaslap $SLAP
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-5 mt-lg-0" >
              <Image
                // className={`shib-slap`}
                src={`/images/transslapper.png`} // Route of the image file
                height={546} // Desired size with correct aspect ratio
                width={546} // Desired size with correct aspect ratio
                alt="Shib Crypto Slap DogeBonk"
              />
              {/* <Image
                className={`shib-slap ${slapper ? 'slapper' : ''}`}
                onMouseDown={this.downMousy}
                onMouseUp={this.upMousy}
                onTouchStart={this.downMousy}
                onTouchEnd={this.upMousy}
                onAnimationEnd={() => this.setState({ slapper: false })}
                src={`/images/${this.state.slapper}.png`} // Route of the image file
                height={546} // Desired size with correct aspect ratio
                width={546} // Desired size with correct aspect ratio
                alt="Shib Crypto Slap DogeBonk"
              /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Hero;
