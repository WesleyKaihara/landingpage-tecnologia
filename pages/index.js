import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import Btn from '../components/btn'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <div className={style.banner}>
        <Link href="/"><a className={style.banner_link}>Portfólio</a></Link>
      </div>
      <div className={style.content}>
        <div className={style.content_img}>
          <Image
            src="/images/1.jpg"
            width="300px"
            height="300px"
            className={style.card_img} />
        </div>
        <div className={style.content_txt}>
          <h1>O que é <span className={style.span}>Tecnologia</span> ?</h1>
          <p> <span className={style.span}>Tecnologia</span> é um produto da ciência e da engenharia que envolve um conjunto
            de instrumentos, métodos e técnicas que visam a resolução de problemas.</p>
          <Btn value="Saiba Mais..." />
        </div>

        <div className={style.content_txt}>
          <h1><span className={style.span}>Inteligência Artificial</span> </h1>
          <p> <span className={style.span}>Inteligência artificial (IA) </span> refere-se a sistemas ou
            máquinas que imitam a inteligência humana para executar tarefas e podem se aprimorar iterativamente
            com base nas informações que coletam..</p>
          <Btn value="Saiba Mais..." />
        </div>
        <div className={style.content_img}>
          <Image
            src="/images/2.jpg"
            width="300px"
            height="300px"
            className={style.card_img2} />
        </div>

        <div className={style.content_img}>
          <Image
            src="/images/valesilicio.jpg"
            width="300px"
            height="300px"
            className={style.card_img} />
        </div>
        <div className={style.content_txt}>
          <h1><span className={style.span}>Vale do Silício</span> </h1>
          <p> O <span className={style.span}> Vale do Silício</span>, 
          ou<span className={style.span}>Silicon Valley </span>, é o nome dado ao agrupamento de 
          cidades ao sul de São Francisco, na Califórnia, Estados Unidos. Nessa região estão 
          localizadas as sedes das principais empresas de tecnologia do mundo.

          </p>
          <Btn value="Saiba Mais..." />
        </div>

      </div>
    </div>
  )
}
