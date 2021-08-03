import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NextJS Image src test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          NextJS Image src test
        </h1>

        <p className="description">
          A test for issue <a href="https://github.com/vercel/next.js/issues/19668">vercel/next.js#19668</a>
        </p>

        <div className="gallery">
          <div className="imageContainer">
            <label>stor.jpg</label>
            <Image src="/img/stor.jpg" width="300" height="400" />
          </div>
          <div className="imageContainer">
            <label>jättestor.jpg</label>
            <Image src="/img/jättestor.jpg" width="300" height="400" />
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .gallery {
          display: flex;
        }
        .imageContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
        }

        .imageContainer label {
          margin-bottom: 0.5rem;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
