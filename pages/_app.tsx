import "./styles.scss"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="mainApp"><Component {...pageProps} /></div>
}

export default MyApp
