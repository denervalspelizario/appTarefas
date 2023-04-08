import '../../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header'
import { SessionProvider } from 'next-auth/react'  // importando session do next-auth


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider               // Com o next-auth o <> deixa de abraçar os components e agora o SessionProvider faz esse papel não esquecer de  session={}
      session={pageProps.session} 
    >
    <>
    {/* Usando <> </>   Tudo que fica dentro dela será renderizado em todas as paginas neste caso HEADER estará em todas as o paginas */}
    <Header/>       
    <Component {...pageProps} />
    </>
    </SessionProvider>
  )
}
