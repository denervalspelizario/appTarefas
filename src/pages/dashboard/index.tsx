import {  ChangeEvent, FormEvent, useState, useEffect } from 'react'
import styles from './styles.module.css'
import Head from 'next/head' // esse head é o texto que fica na aba da pagina
import { getSession } from 'next-auth/react' // importando o getSession para verificar se a sessão ativa
import { Textarea } from '../../components/textArea'
import { db } from '../../services/firebaseConnection' // importando dados do db
import Link from 'next/link'
import { 
    addDoc, // gerar key aleatoria
    collection,
    query,
    orderBy, // para ordernar
    where,  // para filtrar 
    onSnapshot, // trabalhar com realtime
    doc, //
    deleteDoc // deletando doc
    } from 'firebase/firestore' // importando os metodos do firestore

import { FiShare2 } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'

interface HomeProps { // homeProps  tem uma propriedade user que dentro é um objeto email que é uma string
  user: {
    email: string
  }
}

interface TarefaProps{
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}


// comando para instalar icons yarn add react-icons

export default function Dashboard({ user }: HomeProps){ // user usando a estrutura da interface HomeProps 

  const [input, setInput] = useState("") // 
  const [checkbox, setCheckbox ] = useState(false) // state que armazenará click da checkbox iniciará como false
  const [tarefas, setTarefas] = useState<TarefaProps[]>([]) // tipando que a state tarefaProps tenha a estrutura da interface tarefaProps



  // FUNCAO QUE ADICINA NA STATE CHECKBOX A ÇAO DO CLICK NA CHECKBOX
  function dadoCheckbox(event: ChangeEvent<HTMLInputElement>){ // ChangeEvent<HTMLInputElement> é a tipagem,  event é o dado recebido do checkbox no caso um boolean  
    setCheckbox(event.target.checked)

  }

  //FUNÇÃO QUE REGISTRA DADOS DO USER NO BANCO DE DADOS - CRIA UMA CHILD 'tarefas' E ADICONA UM OBJETO COM /EMAIL DO USER/DATA DO REGISTRO/SE REGISTO É PUBLICO OU NÃO/TAREFA DIGITADA NA TEXTAREA   
  async function registrandoTarefas(event: FormEvent){ // lembrando tipagem do event FormEvent, como essa funcao tem que esperar dados do firebase então é assincrona
     event.preventDefault(); // garantindo que ao clicar não sera atualizada a pagina 

     if (input === '') return; // ao clicar se estiver vazio return nada   

     // DEU CERTO
     try{ // deu certo usuario ta logado && tem dados digitados no input do textarea entao vamos registrar no banco de dados 
        await addDoc(collection(db, 'tarefas'), { // tarefas é o child do usuario logado la no direbase e db é o banco de dados que vai ser registrado, o addDoc gera a key aleatoria
          tarefa : input, // registarndo a tarefa com a state input( dados digitados na textarea)
          created: new Date(),  // registrando a data que foi criado a tarefa
          user: user?.email, // registrando o email do usuario logado 
          public: checkbox // registrando se é publica ou não com dados da state checkbox 
        });

      setInput('');  // após o registro limpa  a state 
      setCheckbox(false) // e altera a checkbox para desmarcada/false  

     // DEU ERRO   
     } catch(err){ // se der erro mostre o erro
      console.log(err)
     }
  }

/* FUNCAO QUE ACESSA TAREFAS DO FIREBASE, FILTRA APENAS TAREFAS DO USUARIO LOGADO DEPOIS JOGA OS DADOS EM UM SNAPSHOT QUE CONTEM UMA LISTA ESTRUTURA POR UMA INTERFACE
   E APOS ADICIONAR POR LOOPING(FOREACH) TODAS AS TAREFAS 1 POR 1 EM LISTA ATUALIZA A STATE TAREFAS COM ESSES DADOS*/
  useEffect(() => {
    async function loadTarefas(){

      //ACESSANDO TAREFAS DE DB
      const tarefasRef = collection(db, "tarefas") // acessando tarefas de db e jogando em tarefasRef (Estou referenciando as tarefas que estao no database e jogando no tarefasRef)

      // FILTRANDO TAREFAS DE USUARIO LOGADO
      const q = query( // criando filtro
        tarefasRef, // jogando aqui as tarefas do user
        orderBy("created", "desc"), // criando uma ordem descrecente
        where("user", "==",user?.email) // filtrando tarefas apenas de usuario logado
      )
      /* Usando o where é necessario criar indice la no banco indices>adicionar indice> em Código do conjunto adicione tarefas, em caminho de campo user e crescente, 
         no segundo campo adicionar created Decrescente, e adiconao em coleção.. isto feito vc vai criar um segundo campo mas invertendo
         tb tarefas mas campo user sera descrecente e created sera crescente e adicionar colecao obs demora um pouco para criar e ficar com o status de ativado 
         OBS SE DER ERRO CRIAR IGUAL MAS AO INVES DE COLEÇÃO FAZ COM GRUPO DE COLEÇOES
      */

      /* PEGANDO OS DADOS FILTRADOS( Q ) JOGANDO ESSES DADOS NO SNAPSHOT  DEPOIS ESSES DADOS SERÃO PERCORRIDOS PELO FOREACH E ADICIONADOS NA LISTA ESTA LISTA NO FINAL 
         SERÁ ADICIONADA NA STATE TAREFAS, ESSE OnSnapshot É UMA FUNCAO QUE FICA ATUALIZANDO AUTOMATICAMENTE SEMPRE OLHANDO NO FIREBASE DE MANEIRA REALTIME SE MUDAR LA MUDA AQUI*/   
      onSnapshot(q, (snapshot) =>{ 
        let lista = [] as TarefaProps[]; // esta lista recebe a tipagem da interface TarefaProps
        snapshot.forEach((doc) => { // adicionando esses dados percorridos em doc
          lista.push({             // como foi dito acima que lista recebe tipagem da interface tarefaProps ela TEM QUE SER IGUAL EM SUA ESTRUTURA
            id: doc.id,            // doc adicionando item por item em lista respeitando a tipagem 
            tarefa: doc.data().tarefa,
            created: doc.data().created,
            user: doc.data().user,
            public: doc.data().public
          });
        });
      
        setTarefas(lista) 
      });
    }
    loadTarefas() // chamando a funcao 
  
  },[user?.email]) // A FUNÇÃO SOMENTE VAI FUNCIONAR QUANDO USER?.EMAILE STIVER ATIVO OU SEJA QUANDO USUAIO ESTIVER LOGADO

  // FUNCAO QUE É CHAMADA AO CLICLAR O ICON(BUTTON) DE COMPARTILHAR COPIA URL DA TAREFA PARA PODER COMPARTILHAR
  async function compartilharURL(id: string){ // id tipada em string
      await navigator.clipboard.writeText( // acessando funcao javascript de copiar texto
        `${process.env.NEXT_PUBLIC_URL}/task/${id}`  // copiando url da tarefa que se vai compartilhar(NEXT_PUBLIC_URL = http://localhost:3000  olhar em .env)
      )

      alert('URL Copiado com sucesso')
  }

  //
  async function deletarTarefa(id: string){
    const referenciarTerfa = doc(db, "tarefas", id)
    await deleteDoc(referenciarTerfa)
  }

  return(
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            
            <h1 className={styles.title}>Qual a sua tarefa?</h1>

            <form  onSubmit={registrandoTarefas}>
              <Textarea
                placeholder="Digite qual a sua tarefa.."
                value={input}
                onChange={(event:ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)} //repassando dado digitado a state input
                                                                                                    // estamos usando typescript entao event: esta usando a interface ChengeEvent e tipo HTMLTextAreaElement       
              />                                                                                      
              <div className={styles.checkboxArea}>
                <input 
                  type="checkbox" 
                  className={styles.checkbox} 
                  checked={checkbox} // marcação se inicia com false pois state se inica como false - obs o checked indica true/marcado - false/desmarcado 
                  onChange={dadoCheckbox} // funçao que pega o dado true/false de checkbox
                />
                <label className={styles.label}>Deixar tarefa publica </label>
              </div>

              <button className={styles.button} type="submit">
                Registrar
              </button>
            </form>

          </div>
        </section>

        <section className={styles.taskContainer}>
          <h1>Minhas tarefas</h1>
           
           {/* STATE TAREFAS CONTEM AS TAREFAS DIGITADAS PELO USER, SE USER ESTIVER LOGADO E 
              CONTER TAREFAS LA NO DB SERÁ PERCORRIDA PELO MAP ADICIONADAS NO ITEMRECEBIDOTAREFAS PARA SER ULTILIZADA*/}
          {tarefas.map((itemRecebidoTarefas) =>(
            <article  key={itemRecebidoTarefas.id} className={styles.task}>{/*ADICIONANDO ID AO ARTICLE OU SEJA VARI REDERIZAR TODAS SEQUENCIADAS PELO ID*/}
             
            {/* SE TAREFA FOR PUBLIC ALÉM DA TAREFA SERA RENDERIZADA O ESTILO ABAIXO*/}
            {itemRecebidoTarefas.public && ( // se o dado recebido o public estiver true então renderiza a div tagContainer
              <div className={styles.tagContainer}>
              <label className={styles.tag}>
                PUBLICO
              </label>
              <button className={styles.shareButton} onClick={() => compartilharURL(itemRecebidoTarefas.id)}>
                <FiShare2 size={22} color='#3183FF'/>
              </button>
            </div>
            )}
              
            {/* RENDERIZACAO DA TAREFA INDEPENDENTE SE FOR PUBLIC OU NÃO*/}
              <div className={styles.taskContent}>
              
              {/* Se tarefa for publica renderiza tarefa dentro de um link que leva ate pagina indicada senão(for privada) então renderiza apenas tarefa normal */}  
                {itemRecebidoTarefas.public ? (
                  <Link href={`/task/${itemRecebidoTarefas.id}`}> 
                    <p>
                      {itemRecebidoTarefas.tarefa}
                    </p>
                  </Link>
                ) : (
                  <p>
                    {itemRecebidoTarefas.tarefa}
                  </p>
                )}

                <button className={styles.trashButton} onClick={() => deletarTarefa(itemRecebidoTarefas.id)}>
                  <FaTrash size={24} color='#ea3140' />
                </button>
              </div>

            </article>
          ))}

        </section>
      
      </main>
    </div>
  )
}


// VERIFICANDO SE TEM USUARIO E SE NÃO TIVER BLOQUEANDO TODAS A ROTA E REDIRECIONANDO PARA HOME COM RETORNO DE EMAIL DO USUARIO
export const getServerSideProps = async ({ req }) => {  // fica dando erro no vscode mais funciona

  const session = await getSession({ req })
  //console.log(session)
  if(!session?.user){  //se não tem usuario logado vamos redirecionar para '/' que é a home
    return{
      redirect: {
        destination: '/', //redirecionando para home
        permanent: false // false pq queremos somente redirecionar quando o user não esta logado
      },
    };
    
  }
  return{
    props: {
      user: { // esse user que sera retornado será usado la em cima no dashboad
        email: session?.user.email  // se estiver logado retorna o email do usuario logado
      }
    },
  };
};