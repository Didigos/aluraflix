import Button from "components/Buttom";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa, aoDeletar }) {
    return (
        <div className={styles.cardBox}>
            <div className={styles.cardContainer}>
                <Link className={styles.link} to={`/${id}`}>
                    <img src={capa} alt={titulo} />
                </Link>
                <div className={styles.btnBox}>
                    <Button className="btnCard" onClick={() => aoDeletar(id)}>DELETAR</Button>
                </div>
            </div>
        </div>
    )
}

export default Card