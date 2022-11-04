import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function Results(props){
  let portfolio={...props.portfolio};
  let coins= [...props.coins];
  let goal= parseFloat(portfolio.goal)
  const getPercentage=(num1,num2)=>(num1/num2)*100;
  return(
    <main>
      <section className="results">
      <h2>Results</h2>
      <div className="sectionWrapper">
        <h3>Portfolio at a glance</h3>
        <p>Your current portfolio value of ${portfolio.value.toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} is {getPercentage(portfolio.value,goal).toFixed(2)}% of your ${goal.toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} goal.</p>
        <div className={portfolio.sparkline[24]>portfolio.sparkline[0]? "isUp":"isDown"}>
          <h4>Past 24 hours: up {(100-getPercentage(portfolio.sparkline[0],portfolio.sparkline[24])).toFixed(2)}%</h4>
          <p className="high"><strong>High:</strong> {Math.max(...portfolio.sparkline).toFixed(2)}</p>
          <p className="low"><strong>Low:</strong> {Math.min(...portfolio.sparkline).toFixed(2)}</p>
        <Sparklines className={portfolio.sparkline[24]>portfolio.sparkline[0]? "isUp":"isDown"} data={portfolio.sparkline}>
          <SparklinesLine color={portfolio.sparkline[24]>portfolio.sparkline[0]? "green":"red"} />
        </Sparklines>
        </div>

      </div>
      </section>
    </main>
  )  
}