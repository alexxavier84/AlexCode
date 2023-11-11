import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <title>Alex Code</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <link rel='icon' href='/favicon.png'/>
          <meta name='description' content='Web application that contains Alex Code'/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}
