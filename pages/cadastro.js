import style from '../styles/cadastro.module.css'
import Image from 'next/image'

export default function Cadastro() {
    return (
        <>
            <div className={style.cadastro}>
                <h1 className={style.cadastro_title}>Experimente grátis!</h1>
                <div className={style.cadastro_content}>
                    <div className={style.cadastro_img}>
                        <Image
                            src="/images/robo.png"
                            width={300}
                            height={300} />
                    </div>
                    <div className={style.cadastro_input}>
                        <p className={style.title}>Usuário (Sem espaço e caracteres especiais)</p>
                        <input type="text" placeholder="Digite o nome para seu usuário" className={style.campo} />
                        <p className={style.title}>E-mail</p>
                        <input type="email" placeholder="Digite o seu e-mail" className={style.campo} />
                        <p className={style.title}>Senha</p>
                        <input type="password" placeholder="6 ou mais caracteres" className={style.campo} />
                        <p className={style.politicas}><input type="checkbox" />Declaro ter lido e aceito os termos de serviço e as políticas</p>
                        <p><input type="button" value="Avançar" className={style.btn} /></p>
                    </div>
                </div>
            </div>
        </>
    )
}