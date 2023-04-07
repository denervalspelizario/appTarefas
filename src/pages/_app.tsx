import '../../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* Usando <> </>   Tudo que fica dentro dela será renderizado em todas as paginas neste caso HEADER estará em todas as o paginas */}
    <Header/>       
    <Component {...pageProps} />
    </>
  )
}
