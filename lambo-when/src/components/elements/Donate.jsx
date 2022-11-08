import QR_BTC from '../../QR_BTC.jpg';

export default function Donate(){
  const copyToClipboard = (e)=>{
    let target= e.currentTarget;
    navigator.clipboard.writeText(target.innerText)
    target.setAttribute("class","copied");
    setTimeout(
      ()=>{target.removeAttribute("class")
      console.log(e.currentTarget)
    }
    ,1600)
  };
  return(
    <div className="donate">
    <h3><span>Did you find this app helpful?</span><br/>Consider making a donation today!</h3>
    <img className="QRcode" src={QR_BTC} alt=""/>
    <code onClick={copyToClipboard}>1BjvqJ3XGpvSB5Gex5ZY26yLgdy83P3xo2</code>
  </div>
  )
}