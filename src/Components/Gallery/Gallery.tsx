import React from 'react'
import styles from './Gallery.module.css';
import mauri1 from '../../assets/img/1maurisofi.jpeg';
import mauri2 from '../../assets/img/2maurisofi.jpeg'
import mauri3 from '../../assets/img/3maurisofi.jpeg'
import mauri4 from '../../assets/img/4maurisofi.jpeg'
import mauri5 from '../../assets/img/5maurisofi.jpeg'
import mauri6 from '../../assets/img/6maurisofi.jpeg'






const Gallery = () => {
    return (
        <span className={styles.background}>
            <section className={styles.gallery}>
                <article className={styles.card}>
                    <figure>
                        <img
                            src={mauri1}
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={styles.card}>
                    <figure>
                        <img
                            src={mauri4}
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={styles.card}>
                    <figure>
                        <img
                            src={mauri2}
                            alt="Preview"
                            title="Preview"
                        />
                    </figure>
                </article>
                <article className={styles.card}>
                    <img
                            src={mauri3}
                            alt="Preview"
                        title="Preview"
                    />
                </article>
            </section>
        </span>
    )
}

export default Gallery