import Head from 'next/head' // importando a tag de head que será o cabeçario
import styles from './styles.module.css'
import { GetServerSideProps } from 'next' // importando o getserver para acessar o lado do cliente sider
import { db } from '../../services/firebaseConnection'
import { Textarea } from '../../components/textArea'
import { ChangeEvent, useState, FormEvent } from 'react' 
import {useSession } from 'next-auth/react' // Hook para saber qual usuario esta logado
import {
  doc, //O "doc" no Firestore se refere a um documento individual dentro de uma coleção. Cada documento contém uma chave única (ID) e um conjunto de campos, que podem ser valores simples (como strings ou números) 
  getDoc,
  collection,
  query, 
  addDoc,
  where // para filtrar
} from 'firebase/firestore'


// o componente foi criado com [id] pois o id sera dinamico de acordo com id que foi clicada logo esse componente sera dinamico e url tambem será dinamica
/* Em ReactJS, quando um componente é criado dentro de colchetes, como em [id], 
   isso geralmente significa que o componente está sendo utilizado em conjunto com a propriedade "props" de outro componente.
   Essa notação indica que o componente está recebendo uma propriedade chamada "id" do componente pai, que será utilizada dentro do componente filho.
   Por exemplo, se o componente pai passar uma propriedade "id" com o valor "123", o componente filho [id] usará esse valor dentro do seu próprio código.
   Essa notação de colchetes é comumente usada para permitir que um componente reutilizável aceite diferentes valores para uma mesma propriedade. 
   Em vez de ter que definir uma nova propriedade para cada valor possível, o componente pode simplesmente receber uma única propriedade que pode ter diferentes valores a cada uso.
*/

interface TaskProps { // criando a tipagem de  item( obejto que formata dados da tarefa do usuario la da funcao getServerSideProps)
  item: {
    tarefa: string,
    created: string,
    public: boolean,
    user: string,
    taskId: string
  }
}

export default function Task({ item }: TaskProps){  // recendo item(objeto com dados da tarefa formatado) la da funcao abaixo getServerSideProps

  const { data: session  } = useSession() ; // data = dados firebase    session = true/logado  false/deslogado
  /*O useSession é um hook fornecido pela biblioteca Next.js que permite acessar informações de sessão do usuário em páginas ou componentes React.
    O useSession retorna um array com dois elementos: o primeiro é um objeto contendo informações da sessão do usuário 
    (como o ID do usuário, o email, o token de acesso, etc.), e o segundo é um valor booleano que indica se o usuário está autenticado ou não.
  */

  const [input, setInput] = useState("")  


  async function tratarComentarios(event: FormEvent){ // O objeto FormEvent é utilizado para representar eventos que ocorrem em um formulário HTML.
    event.preventDefault(); // prevenindo que não se atualize sonho

    if(input === ''){ // se user clicar o envio com com o form vazio não retorna nada 
      return;
    } 

    if(!session?.user?.email || !session?.user?.name){ // se user não estiver logado ele clicar no comentario tb não retorna nada
      return;
    }

    try{ // deu certo
      const docRef = await addDoc(collection(db, "comments"), {
        comment: input,
        created: new Date(),
        user: session?.user?.email,
        name: session?.user?.name,
        taskId: item?.taskId
      }) 

      setInput("") // esvaziando o input  
    
    } catch(err){ // deu erro
      console.log(err) // clg do erro
    }

  }

  return(
    <div className={styles.container}>
      <Head>
        <title>Tarefa - Detalhes da Tarefa</title>
      </Head>

      <main className={styles.main}>
        <h1>Tarefa</h1>
        <article className={styles.task}>
          <p>{item.tarefa}</p>
        </article>
      </main>

      <section className={styles.commentsContainer}> 
        <h2>Deixar comentarios</h2>
        <form onSubmit={tratarComentarios}>
          <Textarea 
            value={input} // seu valor inicial sera state input
            placeholder='digite seu comentário....'
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)} 
          />
          <button className={styles.button} disabled={!session?.user}>
            Enviar comentário
          </button>
        </form>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {  // recebendo os params(id da tarefa do usuario logado) do servidor que esta rodando
/* GetServerSideProps que permite buscar dados em tempo de execução no servidor e, em seguida, passar esses dados para a página antes que ela seja renderizada no cliente.
   Essa função é executada no servidor sempre que uma página é acessada e permite que você faça requisições a uma API externa ou a um banco de dados, por exemplo, 
   para buscar os dados necessários para a renderização da página. Depois que os dados são obtidos, eles são passados para a página como props, que podem ser utilizados na renderização da mesma.
   O uso do getServerSideProps é uma forma eficiente de se obter dados atualizados em tempo de execução para cada requisição de página, 
   ao invés de obter todos os dados de uma vez só e enviá-los para o cliente, o que pode tornar a aplicação mais lenta.  
*/

  const id = params?.id as string;  // garantindo e ja tipando que este id da tarefa será uma string

  const docRef = doc(db, "tarefas", id) // docRef é referenciando por db > tarefas > id  para poder chegar na id exata da tarefa ou seja pega um doc especifico

  const snapshot = await getDoc(docRef) // repassando o doc para o snapshot

  // CONDICIONAL  SE ELE DIGITAR UMA URL QUE NÃO EXISTE SERÁ REDIRECIONANDO PARA HOME
  if(snapshot.data() === undefined){ // se no snapshot não tiver dado estiver undefined
    return{
      redirect:{
        destination: '/',  // vai ser redirecionando para '/'
        permanent: false // apenas um vez
      }
    }
  }

  //CONDICIONAL QUE PERMITE ACESSAR URL APENAS DE TAREFAS PUBLICAS
  if(!snapshot.data()?.public){ // se no snapshot o dado for diferente(!) de public ou seja privado
    return { 
      redirect: {
        destination: '/',  // será redirecionando para home
        permanent: false // apenas 1 vez
      }
    }
  }

  const miliseconds = snapshot.data()?.created?.seconds * 1000  // adicionando em milisecods o valor de seconds * 1000 virando milisegundos msm

  // task esse objeto vai recber todos os dados de maneira organizada 
  const task = {
    tarefa: snapshot.data()?.tarefa,
    public: snapshot.data()?.public,
    created: new Date(miliseconds).toLocaleDateString(), // transformando os milisegundos em data
    user: snapshot.data()?.user,
    taskId: id,
  }
  console.log(task)

  // RETORNANDO A TAREFA TODA FORMATADA
  return {
    props: {
      item: task
    }
  }
}