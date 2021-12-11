import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

const Memes = ({ memes, handleClick }) => {
  return (
    <section>
      <Container>
        <h1>ANTI-MEME MEME CHAMBER</h1>
        <div>
          <Image
            className="image-container"
            onClick={handleClick}
            src={memes} // Route of the image file
            height={500} // Desired size with correct aspect ratio
            width={500} // Desired size with correct aspect ratio
            alt="Shib Crypto Slap DogeBonk Make Money Crypto"
          />
          <figcaption>
            touch the meme to get more meme
          </figcaption>
        </div>
      </Container>
    </section>
  );
};

export default Memes;
