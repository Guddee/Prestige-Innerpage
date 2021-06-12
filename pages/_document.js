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
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="GRMgJMNA3MAKvUV7BLTGkvpXa9tVc4WrJAN29TOdeOU"
          />
          <meta
            name="facebook-domain-verification"
            content="hp8wmd5hotpv2bzybp65ujm9dun42j"
          />
          <link rel="profile" href="http://gmpg.org/xfn/11" />
          <link
            rel="icon"
            href="https://www.prestigeconstructions.com/favicon.png"
            sizes="32x32"
          />
          <title>
            1/2/3 BHK Flats in Old Mahabalipuram Road, Chennai – Prestige
            Courtyards
          </title>
          <meta
            name="description"
            content="1/2/3 BHK Residential Apartments for sale near OMR, Chennai City. Real estate properties and developers in Chennai."
          />
          <link
            rel="canonical"
            href="https://www.prestigeconstructions.com/projects/prestige-courtyards/"
          />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="1/2/3 BHK Flats in Old Mahabalipuram Road, Chennai – Prestige Courtyards"
          />
          <meta
            property="og:description"
            content="1/2/3 BHK Residential Apartments for sale near OMR, Chennai City. Real estate properties and developers in Chennai."
          />
          <meta
            property="og:url"
            content="https://www.prestigeconstructions.com/projects/prestige-courtyards/"
          />
          <meta
            property="og:site_name"
            content="https://www.prestigeconstructions.com"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="1/2/3 BHK Residential Apartments for sale near OMR, Chennai City. Real estate properties and developers in Chennai."
          />
          <meta
            name="twitter:title"
            content="1/2/3 BHK Flats in Old Mahabalipuram Road, Chennai – Prestige Courtyards"
          />
          <meta name="twitter:site" content="@prestigegroup" />
          <meta name="twitter:creator" content="@prestigegroup" />

          <link
            href="https://www.prestigeconstructions.com/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://www.prestigeconstructions.com/css/magnific-popup.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://www.prestigeconstructions.com/css/materialdesignicons.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
          />
          <link
            rel="stylesheet"
            href="https://www.prestigeconstructions.com/css/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="https://www.prestigeconstructions.com/css/owl.theme.default.min.css"
          />
          <link
            href="https://www.prestigeconstructions.com/css/swiper.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="assest/css/style.css"
            rel="stylesheet"
            type="text/css"
            id="theme-opt"
          />
          <link
            href="https://www.prestigeconstructions.com/css/colors/theme.css"
            rel="stylesheet"
            id="color-opt"
          />
          <link
            rel="stylesheet"
            href="https://www.prestigeconstructions.com/css/intlTelInput.css"
          />

          <link
            rel="stylesheet"
            href="https://www.prestigeconstructions.com/css/images-grid.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://www.prestigeconstructions.com/css/jquery.typeahead.css"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://www.prestigeconstructions.com/js/jquery.min.js"></script>
          <script src="https://www.prestigeconstructions.com/js/bootstrap.bundle.min.js"></script>
          <script src="https://www.prestigeconstructions.com/js/jquery.easing.min.js"></script>
          <script src="https://www.prestigeconstructions.com/js/scrollspy.min.js"></script>
          <script src="https://www.prestigeconstructions.com/js/mobilemenu.js"></script>
          <script src="https://www.prestigeconstructions.com/js/owl.carousel.min.js "></script>
          <script src="https://www.prestigeconstructions.com/js/owl.init.js "></script>
          <script src="https://www.prestigeconstructions.com/js/swiper.min.js"></script>
          <script src="https://www.prestigeconstructions.com/js/swiper.init.js"></script>
          <script src="https://www.prestigeconstructions.com/js/jquery.magnific-popup.min.js"></script>
          <script src="https://www.prestigeconstructions.com/js/magnific.init.js"></script>
          <script src="https://www.prestigeconstructions.com/js/isotope.js"></script>
          <script src="https://www.prestigeconstructions.com/js/portfolio.init.js"></script>
          <script src="https://www.prestigeconstructions.com/js/imagesloaded.pkgd.min.js"></script>
          <script
            defer
            src="https://www.prestigeconstructions.com/js/jquery.scrollbar.js"
          ></script>
          <script src="https://www.prestigeconstructions.com/js/feather.min.js"></script>
          <script src="https://www.prestigeconstructions.com/js/bundle.js"></script>
          <script src="https://www.prestigeconstructions.com/js/app.js"></script>
          <script src="https://www.prestigeconstructions.com/js/intlTelInput.js"></script>
          <script src="https://www.prestigeconstructions.com/js/utils.js"></script>
          <script src="https://www.prestigeconstructions.com/js/jquery.waypoints.min.js"></script>
          <script src="https://www.prestigeconstructions.com/js/jquery.typeahead.js"></script>
          <script src="assest/js/api.js"></script>
          <script src="assest/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
