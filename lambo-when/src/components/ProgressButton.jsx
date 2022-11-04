import { Link } from "react-router-dom";

export default function ProgressButton(props){
  return(
    <Link className={props.className} onClick={props.handleLinkClick} to={props.href}><div id="addCoins">{props.disabledMessage}</div><div id="allSet">{props.engagedMessage}</div></Link>
  )
}