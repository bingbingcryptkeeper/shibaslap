import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tokenomics from "../components/Tokenomics";
import Footer from "../components/footer";
import Script from 'next/script'
import Community from "../components/Community";
import Docs from "../components/Docs";
import Memes from '../components/Memes';
import { getMemes } from '../lib/api';

const randomIntFromInterval = (max) => {
  return Math.floor(Math.random() * max);
}

const Index = ( props ) => {
  const [memes, setMemes] =  useState('/images/ogmeme.gif');

  const handleClick = () => {
    setMemes(props.data[randomIntFromInterval(props.data.length)].link);
  }

  useEffect(() => {
    if (process.browser) {
      var configuration = {
        from: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        to: "0xBC30d59aFF36D7AdE2faF8152fb1a66757410fEE",
        fromChain: "BSC",
        toChain: "BSC",
        amount: 1,
        iframe: "flex",
        hideSelectionFrom: false,
        hideSelectionTo: true,
        theme: "light",
        background: "#FFFFFF",
        injectTokens: {
          bsc: [
            "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            "0xBC30d59aFF36D7AdE2faF8152fb1a66757410fEE"
          ]
        }
      }

      // prevent accidental changes to the object, for example, when re-creating a widget for another theme
      Object.freeze(configuration);

      // create widget
      rubicWidget.init(configuration);
    }
  });
  return (
    <Layout pageTitle="Shiba Slap">
      <Header />
      <Hero />
      <Memes memes={memes} handleClick={handleClick} />
      <section className="pubic-rubic">
        <div id="rubic-widget-root"></div>
      </section>
      <Tokenomics />
      <Community />
      <Docs />
      <Footer />
      <div class="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K0TEWSKYGF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K0TEWSKYGF');
        `}
      </Script>
    </div>
    </Layout>
  )
}
export default Index;
export async function getServerSideProps() {
  const data = await getMemes();
  return {
    props: {
      data,
    },
  };
}