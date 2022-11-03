import { Link } from "react-router-dom";
export default function Home(props){
  const handleChange = (e)=>{
    let goal = e.target.value;
    props.setGoal(goal)
    console.log(goal)
  }
  return(
    <main>
      <form>
        <label htmlFor="goal">Enter the target US dollar value amount for your portfolio goal.</label>
        <input type="number" name="goal" id="goal" onChange={handleChange}></input>
      </form>
      <Link to="/selectcoins">
        Get Started
      </Link>
    </main>
  )  

}