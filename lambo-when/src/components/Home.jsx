import { Link } from "react-router-dom";
import ProgressButton from "./ProgressButton";
export default function Home(props){
  
  const handleLinkClick=(e)=>{
    if(props.goal>0){
      console.log(props.goal);
    }else{
      console.log("Goal is too small");
      e.preventDefault();
    }
  }

  const handleChange = (e)=>{
    let goal = e.target.value;
    props.setGoal(goal)
    console.log(goal)
  }
  return(
    <main>
      <div className="sectionWrapper">
      <form>
        <label htmlFor="goal"><h2>Enter the target US dollar value amount for your portfolio goal.</h2></label>
        <input type="number" name="goal" id="goal" onChange={handleChange} placeholder={props.goal}></input>
      </form>
      </div>
      <section className="btnWrapper">
      {/* <Link className={(props.goal>0) ? "clickable btn":"notClickable btn"} to="/selectcoins" onClick={handleLinkClick}><div id="addCoins">Set goal</div><div id="allSet">All set?</div></Link> */}
      <ProgressButton 
        className={(props.goal>0) ? "clickable btn":"notClickable btn"} handleLinkClick={handleLinkClick}
        href='/selectcoins'
        disabledMessage="Set goal"
        engagedMessage="All set?" />
      </section>
    </main>
  )  

}