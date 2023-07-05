import React from 'react'
import styles from './MainPage.module.css'
import image from './../../assets/img/invitationCard.jpeg'
import image1 from './../../assets/img/1maurisofi.jpeg'
import image2 from './../../assets/img/2maurisofi.jpeg'
import image3 from './../../assets/img/3maurisofi.jpeg'
import image4 from './../../assets/img/4maurisofi.jpeg'
import image5 from './../../assets/img/5maurisofi.jpeg'
import church from './../../assets/img/svg/church.svg'
import party from './../../assets/img/party.png';
import tie from './../../assets/img/svg/tie.svg'
import woman from './../../assets/img/woman.png'
import box from './../../assets/img/svg/box.svg'
import corazon from './../../assets/img/svg/corazon.svg'
import music from './../../assets/img/svg/music.svg'
import agenda from './../../assets/img/svg/agenda.svg'
import instagram from './../../assets/img/svg/instagram.svg'
import confirmar from './../../assets/img/svg/confirmar.svg'










import { Carousel } from 'react-bootstrap'

const MainPage = () => {
    return (
        <>
            <div className={styles.mainDiv}>
                <img src={image} alt='imagenboda' className={styles.invitationCardStyle}></img>
            </div>
            <div className={styles.ourHistory}>
                <div className={styles.specialFont}>
                    Nuestra Historia
                </div>
                <div>
                    "Si te caes te levanto y si no me acuesto contigo".
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={styles.ceremony}>
                <div className={styles.ceremonyDiv}>
                    <img src={church} alt='church' style={{ width: '60px', color: 'white' }} />
                    <div className={styles.specialFont}>
                        Ceremonia Religiosa
                    </div>
                    <hr className={styles.linea} />
                    <div className={styles.infoText}>
                        Te esperamos el dia
                        14 de Octubre de 2023
                        a las 19.00 hs. en
                    </div>
                    <div className={styles.specialFont}>
                        Convento San Alfonso
                    </div>
                    <div className={styles.infoText}>
                        San Clemente 1900 <br></br>
                        Villa Allende | Córdoba
                    </div>
                    <a href="https://www.google.com/maps/place/Convento+San+Alfonso/@-31.3048362,-64.2981096,17z/data=!3m1!4b1!4m6!3m5!1s0x94329d06c7decc7f:0x6e0f738ff3e315db!8m2!3d-31.3048408!4d-64.2955347!16s%2Fg%2F11ckqszv2v?entry=ttu" target="_blank">
                        <button className={styles.whiteButtom}>
                            Cómo llegar
                        </button>
                    </a>
                    <hr className={styles.linea} />
                    <div>
                        <img src={party} alt='party' style={{ width: '60px', color: 'white' }} />
                    </div>
                    <div className={styles.specialFont}>
                        La Fiesta
                    </div>
                    <div className={styles.infoText}>
                        Luego de la ceremonia, seguiremos festejando en
                    </div>
                    <div className={styles.specialFont}>
                        Agua Canta
                    </div>
                    <div className={styles.infoText}>
                        Av. Amadeo Sabattini 30
                        Unquillo | Córdoba
                    </div>
                    <a style={{ marginBottom: '2rem' }} href="https://www.google.com/maps/place/Agua+Canta+Sal%C3%B3n+Fiestas/@-31.2181232,-64.3027607,17z/data=!3m1!4b1!4m6!3m5!1s0x94328250b7d5c68d:0xf79dee7eebdbef3c!8m2!3d-31.2181278!4d-64.3001858!16s%2Fg%2F11clyh0bxl?hl=es&entry=ttu
" target="_blank">
                        <button className={styles.whiteButtom}>
                            Cómo llegar
                        </button>
                    </a>
                </div>
            </div>
            <div className={styles.dressCode}>
                <div style={{ marginTop: '2rem' }} className={styles.ceremonyDiv}>
                    <div>
                        <img src={woman} alt='woman' style={{ width: '60px' }} />
                        <img src={tie} alt='man' style={{ width: '60px' }} />
                    </div>
                    <div className={styles.specialFont}>
                        Dress Code
                    </div>
                    <hr className={styles.linea} />
                    <div className={styles.vestimenta} style={{ marginBottom: '2rem' }}>
                        Nuestro código de vestimenta será:
                        <br></br>
                        <b style={{ marginTop: '1rem' }}>Elegante Sport</b>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '2rem', paddingBottom: '2rem' }} className={styles.regalo}>
                <div className={styles.ceremonyDiv}>
                    <div>
                        <img src={box} alt='box' style={{ width: '60px', color: 'white', stroke: 'white' }} />
                    </div>
                    <div className={styles.infoText}>
                        Para nosotros nuestro mejor regalo
                        siempre será su presencia,
                        pero en el caso que deseen hacernos un presente, pueden ayudarnos con nuestra                    </div>
                    <div className={styles.specialFont}>
                        Luna de Miel
                    </div>
                    <hr className={styles.linea} />
                    <div className={styles.infoText}>
                        CBU:0000000000000000
                        Alias : boda.sofiymauri
                    </div>
                    <div>
                        <img src={corazon} alt='corazon' style={{ width: '20px', color: 'white', stroke: 'white' }} />
                    </div>
                </div>
            </div>
            <div className={styles.musica} style={{ padding: '2rem' }}>
                <div className={styles.ceremonyDiv}>
                    <div>
                        <img src={music} alt='music' style={{ width: '60px', color: 'white', stroke: 'white' }} />
                    </div>
                    <div className={styles.infoText}>
                        ¡La fiesta la hacemos entre todos!
                    </div>
                    <div className={styles.specialFont}>
                        Que tema no puede faltar?
                    </div>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSf_PFZDGaQlhhScBPZ8-ePmMEc8WVsoif3UA_tc5DKX-PFH5Q/viewform?usp=sf_link' target='_blank'>
                        <button className={styles.greenBottom}>
                            Recomendar Canción
                        </button>
                    </a>
                </div>
            </div>
            <div style={{ paddingTop: '2rem', paddingBottom: '2rem' }} className={styles.saveTheDate}>
                <div className={styles.ceremonyDiv}>
                    <div className={styles.specialFont}>
                        Save the Date
                    </div>
                    <div>
                        <img src={agenda} alt='agenda' style={{ width: '60px', color: 'white', stroke: 'white' }} />
                    </div>
                    <div className={styles.infoText}>
                        ¡Guardá esta fecha en tu google calendar!
                    </div>
                    <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Casamiento%20Sofi%20y%20Mauri&dates=20231014T190000/20231014T200000&details=Descripción%20del%20Evento&location=Lugar%20del%20Evento" target="_blank">
                        <button style={{ width: '120px' }} className={styles.whiteButtom}>
                            Agendar
                        </button>
                    </a>
                </div>
            </div>
            <div className={styles.instagram}>
                <div className={styles.ceremonyDiv}>
                    <div className={styles.infoText}>
                        Si vas a subir fotos a Instagram
                    </div>
                    <div className={styles.specialFont}>
                        Usa nuestro Hashtag
                    </div>
                    <div className={styles.tagInstagram}>
                        #SofiYMau
                    </div>
                    <a href='https://www.instagram.com/sofibartoletti/?hl=es-la' target='_blank' style={{ cursor: 'pointer' }}>
                        <img src={instagram} alt='agenda' style={{ width: '25px', color: 'white', stroke: 'white' }} />
                    </a>
                </div>
            </div>
            <div style={{paddingTop:'8rem',paddingBottom:'6rem'}}className={styles.venis}>
                <div className={styles.ceremonyDiv} style={{ marginBottom: '4rem' }}>
                    <div>
                        <img src={confirmar} alt='confirmar' style={{ width: '60px', color: 'white', stroke: 'white' }} />
                    </div>
                    <div style={{ color: '#2F6D6B' }} className={styles.specialFont}>
                        ¿Venís?
                    </div>
                    <div className={styles.infoText}>
                        Para nosotros es fundamental saber si contamos o no con tu presencia.
                        ¡No te olvides de confirmarnos!
                    </div>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfjh4Mj95-19T658yI0oyAbEam8op41ZVlm6Wv85cjxZohO4Q/viewform?usp=sf_link' target='_blank'>
                        <button className={styles.greenBottom}>Confirmar Asistencia</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default MainPage