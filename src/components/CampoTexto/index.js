
import styles from "./Formulario.module.css"

function CampoTexto(props) {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className={styles.campoTexto}>
      <label>
        {props.label}
      </label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto