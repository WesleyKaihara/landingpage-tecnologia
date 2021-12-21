import style from '../styles/btn.module.css'

export default function Btn(props){
    return (
        <>
            <input type="button" value={props.value} className={style.btn} onClick={props.link}></input>
        </>
    )
}