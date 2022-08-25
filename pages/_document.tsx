import Document, {
    Html, Head, Main, NextScript,
  } from 'next/document';
  
  class MyDocument extends Document {
    static async getInitialProps(ctx:any) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
      return (
        <Html lang="en">
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Coiny&family=Open+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" /> 
          </Head>
          <body className="bg-gray-900">
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  