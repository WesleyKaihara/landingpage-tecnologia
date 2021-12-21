import Link from 'next/link'
import style from '../styles/login.module.css'

export default function Login() {
    return (
        <>
            <div className={style.login}>
                <h1 className={style.title}>Minha conta</h1>
                <div className={style.login_content}>
                    <div className={style.login_text}>
                        <h1 className={style.login_title}>Utilize seu usuário e senha para acessar o sistema.</h1>
                        <div className={style.login_input}>
                            <p>Usuário ou e-mail</p>
                            <input type="text" className={style.campo} />
                            <p>Senha</p>
                            <input type="password" className={style.campo} />
                            <p className={style.senha}><Link href="/"><a>Esqueceu sua senha?</a></Link></p>
                            <p><input type="button" value="Entrar" className={style.btn} /></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}