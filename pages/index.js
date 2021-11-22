
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tokenomics from "../components/Tokenomics";
import Footer from "../components/footer";
import Reflections from "../components/Reflection";
import Script from 'next/script'
import Community from "../components/Community";
import Docs from "../components/Docs";


const Index = () => {
  return (
    <Layout pageTitle="Shiba Slap">
      <Header />
      <Hero />
      <Tokenomics />
      <Reflections />
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