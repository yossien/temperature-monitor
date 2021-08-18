import { AppProps } from 'next/app'
import '../styles/style.scss'
import withDarkMode from 'next-dark-mode'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default withDarkMode(App)
