import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/999040?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Vinnicyus Gracindo</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title="20 de Agosto de 2022 às 17:35" dateTime="2022-08-20 17:35:04">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate hic fugit. Ad tenetur impedit unde, id accusamus laboriosam minus optio, nobis molestiae earum atque quas perspiciatis at, nihil ea.
                </p>
                <a href="#">#RocketSeat</a>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}