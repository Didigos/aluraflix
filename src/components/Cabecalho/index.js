// import Button from "components/Buttom"
import Button from "components/Buttom"
import styles from "./Cabecalho.module.css"
import logo from "./Logo.svg"
import { useNavigate } from "react-router-dom"

function Cabecalho() {
    const Navigate = useNavigate();

    function retorno(){
        Navigate('/')

    }
    return (
        <header className={styles.cabecalho}>
            <a className={styles.link} href="/"> {/* Use o elemento 'a' com o atributo 'href' */}
                <img className={styles.imagem} src={logo} alt='logo alura' />
            </a>
            <div className={styles.botoes}>
                <Button className='botao'onClick={retorno}>HOME</Button>
            </div>
        </header>
    )
}

export default Cabecalho