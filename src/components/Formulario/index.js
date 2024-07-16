import CampoTexto from "components/CampoTexto"
import styles from "./Formulario.module.css"
import Botao from "components/Botao"
import { useState } from "react"

function Formulario(props) {

    const [id, setTitulo] = useState('');
    const [capa, setImagem] = useState('');
    const [video, setVideo] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            id,
            capa,
            video
        })
    }

    return (
        <section className={styles.campoTextoContainer}>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar seu card.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Titulo'
                    placeholder='Digite um Titulo'
                    valor={id}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={capa}
                    aoAlterado={valor=> setImagem(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Vídeo'
                    placeholder='Digite o endereço do Vídeo'
                    valor={video}
                    aoAlterado={valor=> setVideo(valor)}

                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )
}

export default Formulario