import style from '../styles/contato.module.css'
import Image from 'next/image'

export default function Contato() {
    return (
        <>
            <div className={style.contato}>
                <h1 className={style.title}>Entre em <span className={style.span}>Contato</span></h1>
                <div className={style.contato_content}>
                    <div >
                        <Image
                            src="/images/computador.jpg"
                            width={300}
                            height={300}
                            alt='Telefone'
                            className={style.contato_img}/>
                    </div>

                    <div className={style.contato_text}>
                        <h1><span className={style.span}>E-mail</span></h1>
                        <p>Site@email.com</p>
                        <h1><span className={style.span}>Telefone</span></h1>
                        <p>+11 (00)1234-5678<br/>Horário comercial das 9:00 às 18:00</p>
                        <h1><span className={style.span}>Linkedin</span></h1>
                        <p>@nome</p>
                    </div>
                </div>

            </div>

        </>
    )
}