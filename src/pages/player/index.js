import { useParams } from "react-router-dom";
import styles from "./Player.module.css"
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
    const [video, setVideo] = useState();

    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Didigos/aluraflix.api/videos?id=${parametros.id}`)
            .then(response => response.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [parametros.id])




    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <section className={styles.container}>
                <iframe
                    width="1280"
                    height="720"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            </section>
        </>
    )
}

export default Player;