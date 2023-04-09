import styles from './styles.module.css'
import Link from 'next/link' // importando link do next (cuidado para não chamar o do react-router-dom)
import { useSession, signIn, signOut  } from 'next-auth/react' // importando os metodos do next 


export default function Header(){

  const { data: session, status } = useSession()  
  /* atravez da useSession temos acesso a data: session que podemos ter acesso se usuario esta logando, se está carregando
     se tem as info dos usuario 
  */  

  return(
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          
          <Link 
            href='/'  // toda vez que clicado vai até home 
          >
            <h1 className={styles.logo}>
              Tarefas<span>+</span> 
            </h1>
          </Link>
          { session?.user && ( // se esta logado com usuario mostra o link do painel, SENÃO TIVER não mostra nada 
            <Link href='/dashboard' className={styles.link}>
              Meu painel
            </Link>
          )}

        </nav>
        { status === 'loading' ? (              // se status estiver loading
          <></> // nao mostra nada
        
          ) : session ? (   // se não esta em loading mas está em session ou seja ESTA LOGADO então

            <button 
              className={styles.loginButton} 
              onClick={() => signOut()}   // btn que ao clicar da logout e seu conteudo é ola nomeUsuario
            >
              Olá {session?.user?.name} 
            </button>
        
          ) : (   // agora se ele não esta em loading e nem em session então PRECISA LOGAR

            <button 
              className={styles.loginButton} 
              onClick={() => signIn("google")}   // btn que ao clicar vai para logar usando o provider que neste caso é o do google
                                                 // ao cliclar ele direciona para logar com gmail e depois retorna a pagina ja com seu nome     
            >
            Acessar 
            </button>
          )   
        } 
      </section>
    </header>
  )
}