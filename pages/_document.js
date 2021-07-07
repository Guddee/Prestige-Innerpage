import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="https://www.prestigeconstructions.com/favicon.png"
            sizes="32x32"
          />

          <link
            href="assest/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="assest/css/magnific-popup.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
          />
          <link
            href="assest/css/style.css"
            rel="stylesheet"
            type="text/css"
            id="theme-opt"
          />
          <link
            href="assest/css/theme.css"
            rel="stylesheet"
            id="color-opt"
          />

          <link
            rel="stylesheet"
            href="assest/css/images-grid.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="assest/css/jquery.typeahead.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
         <script src="assest/js/jquery.min.js"></script>
         <script src="assest/js/isotope.js"></script>
         <script src="assest/js/jquery.magnific-popup.min.js"></script>
         <script src="assest/js/imagesloaded.pkgd.min.js"></script>
         <script src="assest/js/bootstrap.bundle.min.js"></script>
         <script src="assest/js/bundle.js"></script>
         <script src="assest/js/scrollspy.min.js"></script>
         <script src="assest/js/jquery.easing.min.js"></script>
        <script src="assest/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
