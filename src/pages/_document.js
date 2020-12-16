import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        
          <meta
            name="Description"
            content="Jellyfish Ecommerce"
          />
          <link rel="icon" href="/fav.png" />
          <link
            href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cambay:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M844MVL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}

        </Head>
        <body>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M844MVL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
 */}
          <Main />
          <div id="nav-full" />
          <div id="nav-sidebar" />
          <div id="cart-sidebar" />
          <div id="overlay" />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
