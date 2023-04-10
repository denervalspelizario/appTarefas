import { HtmlProps } from "react";
import styles from './styles.module.css'
 
/* Vou pegar todos os dados que a pessoa jogar neste textarea e jogar no rest
   E eu só posso receber do tipo HTMLprops e dentro do HTMLprops só posso receber 
   o tipo HTMLTextAreaElement
   depois dentro de textarea adicionando o ...rest para repassar  as propriedades que o usuario ultilizou
*/

export function Textarea({...rest}: HtmlProps<HTMLTextAreaElement>){
  return <textarea className={styles.textarea} {...rest} ></textarea>;
}