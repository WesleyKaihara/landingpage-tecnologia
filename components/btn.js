import style from '../styles/btn.module.css'

export default function Btn(props){
    return (
        <>
            <input type="submit" value={props.value} className={style.btn}></input>
        </>
    )
}