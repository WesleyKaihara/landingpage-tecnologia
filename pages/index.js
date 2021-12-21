import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import Btn from '../components/btn'
import Link from 'next/link'
import React from "react";
import BlogCard from '../components/blog_card'

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div >
      <div className={style.banner}>
        <Link href="https://github.com/WesleyKaihara?tab=repositories" ><a className={style.banner_link}>Portfólio</a></Link>
      </div>
      <div className={style.content}>
        <div className={style.content_layout}>
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
        <div className={style.content_layout}>
        <div className={style.content_img}>
          <Image
            src="/images/valesilicio.jpg"
            width="300px"
            height="300px"
            className={style.card_img} />
        </div>
        <div className={style.content_txt}>
          <h1><span className={style.span}>Vale do Silício</span> </h1>
          <p> O <span className={style.span}> Vale do Silício </span>
            ou <span className={style.span}> Silicon Valley </span>, é o nome dado ao agrupamento de
            cidades ao sul de São Francisco, na Califórnia, Estados Unidos. Nessa região estão
            localizadas as sedes das principais empresas de tecnologia do mundo.

          </p>
          <Btn value="Saiba Mais..." />
        </div>

        </div>
       
       
      </div>
      <div className={style.blog}>
          <h1>Última notícias do Blog</h1>
          <div className={style.blog_content}>
            <div className={style.blog_card}>
              <BlogCard
                src="/images/ia.jpg"
                title="IAs estariam imitando processos de cognição humana por conta própria" />
            </div>
            <div  className={style.blog_card}>
              <BlogCard
                src="/images/medicamentos.jpg"
                title="Câmara aprova projeto que institui a bula digital de medicamentos" />
            </div>
            <div  className={style.blog_card}>
              <BlogCard
                src="/images/astronauta.jpg"
                title="Turista que visitou a Estação Internacional Espacial volta à Terra"/>
            </div>
            <div  className={style.blog_card}>
              <BlogCard
                src="/images/tesla.jpg"
                title="Tesla está localizando e recuperando veículos com pagamentos atrasados " />
            </div>
          </div>
        </div>
        <div>
          <div className={style.nextjs_content}>
            <h1>NextJs</h1>
            <Image 
            src="/images/nextjs.png"
            width={600}
            height={400}
            className={style.nextjs}/>
            <p>Next.js oferece a melhor experiência de desenvolvedor com todos os recursos de que você precisa para produção: renderização híbrida estática e de servidor, suporte a TypeScript, agrupamento inteligente, pré-busca de rota e muito mais. Nenhuma configuração necessária.</p>
            <Btn value="Documentaçao"/>
          </div>
        </div>
    </div>
  )
}



