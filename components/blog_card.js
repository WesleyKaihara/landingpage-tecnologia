import style from '../styles/blog_card.module.css'
import Image from 'next/image'
import Btn from '../components/btn'
export default function BlogCard(props){
    return (
        <> 
        <div className={style.blog_card}>
            <Image 
            src={props.src}
            width={150}
            height={150}
            className={style.blog_img}/>
            <div className={style.blog_txt}>
            <h2>{props.title}</h2>
            
               <Btn value="Saiba Mais..."/>
            
            </div>
            
        </div>  
        </>
    )
}