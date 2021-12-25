import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { whitepaper } from 'files/whitepaper.pdf'
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

class Docs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Container>
          <div className="header">
            <h1>Documents</h1>
          </div>
          <div className="wrapper">
            <a
              href="files/whitepaper.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="docs-cards">
                <div className="mb-5">
                  <FontAwesomeIcon
                    className="svg-tokenomics"
                    icon={faFileAlt}
                    color="#FB943E"
                  />
                </div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  Whitepaper
                </h5>
              </div>
            </a>

            <a
              href="files/audit.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="docs-cards">
                <div className="mb-5">
                  <FontAwesomeIcon
                    className="svg-tokenomics"
                    icon={faFileAlt}
                    color="#FB943E"
                  />
                </div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  Audit
                </h5>
              </div>
            </a>

            <a
              href="files/shibaslapflier.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="docs-cards">
                <div className="mb-5">
                  <FontAwesomeIcon
                    className="svg-tokenomics"
                    icon={faFileAlt}
                    color="#FB943E"
                  />
                </div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  Flier
                </h5>
              </div>
            </a>
          </div>
        </Container>
      </section>
    );
  }
}

export default Docs;
