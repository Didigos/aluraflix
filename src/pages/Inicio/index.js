import Banner from "components/Banner";
import Card from "components/card";
import styles from "./Inicio.module.css"
import { useEffect, useState } from "react";
import Formulario from "components/Formulario";

function Inicio() {
    const [videos, setVideos] = useState([]);
    const [usuarioVideos, setUsuarioVideos] = useState([]);

    useEffect(() => {
        const storedVideos = localStorage.getItem("usuarioVideos");
        if (storedVideos) {
            setUsuarioVideos(JSON.parse(storedVideos));
        }
    }, []);

    const aoNovoVideoAdicionado = (novoVideo) => {
        setUsuarioVideos([...usuarioVideos, novoVideo])
        localStorage.setItem("usuarioVideos", JSON.stringify(usuarioVideos))
    }


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Didigos/aluraflix.api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])


    function deletarVideo(id){
        console.log('video deletado!')
        setVideos(videos.filter(video => video.id !== id))
        setUsuarioVideos(usuarioVideos.filter(novoVideo => novoVideo.id !== id))
    }

    return (
        <>
            <Banner />
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} aoDeletar={deletarVideo} />
                })}
                {usuarioVideos.map((usuarioVideo) => {
                    return <Card {...usuarioVideo} key={usuarioVideo.id} aoDeletar={deletarVideo} />
                })}
            </section>
            <Formulario aoColaboradorCadastrado={novoVideo => aoNovoVideoAdicionado(novoVideo)} />

        </>
    )
}

export default Inicio;