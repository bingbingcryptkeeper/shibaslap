import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

class Community extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  communityUpper = [
    { name: "Cal", avatar: "placeholder.gif", desc: "Dev & marketing", telegram: "@Slapmaster" },
    { name: "Josh", avatar: "placeholder.gif", desc: "Dev & marketing", telegram: "@Thisisnotatestmeme" },
  ];

  
  communityLower = [
    { name: "Jesse", avatar: "placeholder.gif", desc: "Community & marketing",  telegram: "@HitEmWitaPoopSok" },
    { name: "bingbingbongbing", avatar: "bingbingavatar.png", desc: "Web dev & design",  telegram: "@bingbingcryptkeeper" },
    { name: "Gizzard Biscuit", avatar: "placeholder.gif", desc: "Community & marketing",  telegram: "@Gizzard Biscuit" },
  ];


  handleClick = () => {
    const shibSlap = new Audio("/sounds/baffe.wav");
    shibSlap.play();
  };

  render() {
    return (
      <section className="section position-relative">
        <Container>
          <div className="header">
            <h1>Community Slappers</h1>
            <p>We're the slappers slapping off 0's every day for you</p>
          </div>
          <div className="community-wrapper">
            <div className="community-upper">
              {this.communityUpper.map((member, key) => (
                <div className="community-card pulse">
                  <div class="card-trip">
                    <div class="card-avatar">
                      <Image
                        className="shib-avatar"
                        src={`/images/${member.avatar}`} // Route of the image file
                        height={144} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Shib Crypto Slap DogeBonk"
                      />
                    </div>
                    <div class="card-trip-infos">
                      <div>
                        <h5 className="text-dark font-weight-normal pt-1 mb-4">
                          {member.name}
                        </h5>                        
                        <p>{member.desc}</p>
                        <p>{member.telegram}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="community-lower">
              {this.communityLower.map((member, key) => (
                <div className="community-card pulse">
                  <div class="card-trip">
                    <div class="card-avatar">
                      <Image
                        className="shib-avatar"
                        src={`/images/${member.avatar}`} // Route of the image file
                        height={144} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="Shib Crypto Slap DogeBonk"
                      />
                    </div>
                    <div class="card-trip-infos">
                      <div>
                        <h5 className="text-dark font-weight-normal pt-1 mb-4">
                          {member.name}
                        </h5>
                        <p>{member.desc}</p>
                        <p>{member.telegram}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>
    );
  }
}

export default Community;
