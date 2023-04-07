import styles from './styles.module.css'
import Link from 'next/link' // importando link do next (cuidado para não chamar o do react-router-dom)


export default function Header(){
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
          <Link href='/dashboard' className={styles.link}>
            Meu painel
          </Link>

        </nav>

        <button className={styles.loginButton}>Acessar</button>
      </section>
    </header>
  )
}