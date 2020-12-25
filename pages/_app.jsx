import '../styles/index.css'

import Head from 'next/head'

export default function MainApp({ Component, pagesProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Next JS - Tailwind</title>
        <meta key="description" name="description" content="Contactame!" />
      </Head>
      <Component {...pagesProps} />
    </>
  )
}
