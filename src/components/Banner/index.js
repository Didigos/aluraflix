
import styles from "./Banner.module.css"


function Banner() {


    return (
        <section className={styles.container}>
            <h1 className={styles.titulo}>We're Gamers!</h1>
            <div className={styles.destaque}>
                <iframe
                    width="600"
                    height="435"
                    src="https://www.youtube.com/embed/5IYDokBNKiw?si=7Qu5CpSjWR9PW5mm&amp;controls=0&amp;start=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>                
            </div>
        </section>
    )
}

export default Banner