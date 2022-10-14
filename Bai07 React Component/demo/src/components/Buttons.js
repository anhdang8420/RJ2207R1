export default function Buttons(props){
    return(
        <button className={props.className} onClick={props.onClick}> {props.label} </button>
    )
}