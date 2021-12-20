import style from '../styles/header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Btn from '../components/btn'

export default function Header() {
    return (
        <>
            <div className={style.header}>

                <div className={style.header_content}>

                <div className={style.header_menu}>
                <Image
                        priority
                        src="/images/logo.svg"
                        alt="Logo"
                        width={"100%"}
                        height={"60vh"} />
                    <Link href="/" >
                    <a className={style.link} >Curiosidades</a>
                    </Link>
                    <Link href="/" >
                    <a className={style.link} >Produtos</a>
                    </Link>
                    <Link href="/" >
                    <a className={style.link} >Fale Conosco</a>
                    </Link>
                    <Link href="/" >
                    <a className={style.link} >Blog</a>
                    </Link>    
                </div>
                
                <div className={style.entrar}>
                    <Btn 
                    value="experimente grátis"/>
                    <Link href="/" >
                    <a className={style.link} >Entrar</a>
                    </Link> 
                </div>
                </div>
                    
                
            </div>
        </>
    )
}