import style from '../styles/footer.module.css'
export default function Footer() {
    return (
        <>
            <div className={style.footer_contato} >
                <h1>Novidades exclusivas!!</h1>
                <div className={style.footer_content}>
                    <input type="text" placeholder="Seu Nome" className={style.campo} />
                    <input type="text" placeholder="Nome@email.com" className={style.campo} />
                    <input type="submit" className={style.btn} />
                </div>
                <div className={style.footer_content}>
                <p>Não se preocupe, também não gostamos de spam ;) Ao assinar a newsletter,
                        declaro que conheço a Política de privacidade e autorizo a utilização de 
                        minhas informações do Site!.</p>
                </div>
               
            </div>
        </>
    )
}