import React, { useEffect } from "react";
import Head from "next/head";
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="images/favicon.png" />
        <script type="text/javascript" src="https://widgets.rubic.exchange/iframe/bundle.min.js"></script>
      </Head>
      <div>{props.children}</div>
    </div>
  );
};
export default Layout;
