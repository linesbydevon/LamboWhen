import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function Results(props){
  let portfolio={...props.portfolio};
  let coins= [...props.coins];
  let goal= parseFloat(portfolio.goal)
  const getPercentage=(num1,num2)=>(num1/num2)*100;
  return(
    <main>
      <section className="results">
        <h2>Your portfolio</h2>
        <div className="sectionWrapper">
        <div className={portfolio.sparkline[24]>portfolio.sparkline[0]? "portfolioResults isUp":"portfolioResults isDown"}>
          <p className="change">24HR: <span className="indicator"></span>{(100-getPercentage(portfolio.sparkline[0],portfolio.sparkline[24])).toFixed(2)}%</p>

          <h3 className="value">${portfolio.value.toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<br/><span>{coins.filter(elem=>elem.selected).length} assets</span></h3>


          <div className="sparkBox">
            <div className="highLow">
              <p className="high"><strong>High:</strong> {Math.max(...portfolio.sparkline).toFixed(2)}</p>
              <p className="low"><strong>Low:</strong> {Math.min(...portfolio.sparkline).toFixed(2)}</p>
            </div>
            <Sparklines className={portfolio.sparkline[24]>portfolio.sparkline[0]? "isUp":"isDown"} data={portfolio.sparkline}>
              <SparklinesLine color={portfolio.sparkline[24]>portfolio.sparkline[0]? "green":"red"} />
            </Sparklines>
          </div>
          <div className="portfolioSpecificInfo">
          <div className="percentage">
            <div className="pieChart" style={{background: `conic-gradient(rgba(8, 10, 12,1) ${getPercentage(portfolio.value, portfolio.goal).toFixed(0)}%, rgba(8, 10, 12,.5) ${getPercentage(portfolio.value, portfolio.goal).toFixed(0)}%)`}}>
              <div className="innerChart"></div>
            </div>
            <p><strong>{getPercentage(portfolio.value, portfolio.goal).toFixed(2)}%</strong> of your <strong>${goal.toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> goal.</p>
          </div>
          </div>
        </div>
        <h2 className="assetHeadline">Asset Performance</h2>
        <section className="assetResults">
          {
            coins.map(
              (coin,index)=> coin.selected ?
              <div className={parseFloat(coin.price)>coin.sparkline[0]? "card resultsCard isUp": parseFloat(coin.price)===coin.sparkline[0] ? "card resultsCard isSame" : "card resultsCard isDown"} key={coin.symbol}>
               
              <div className="coinInfo">
                <div className="iconContainer">
                  <img src={coin.iconUrl} alt={`Logo for ${coin.name}`}/> 
                </div>
                <h3>{coin.name==="Internet Computer (DFINITY)"? "ICP DFINITY ": coin.name} | <span>{coin.symbol}</span></h3>
              </div>
             
              


              
              <div className="assetDetails">
              <p className="change">24HR: <span className="indicator"></span>{(100-getPercentage(coin.sparkline[0],coin.sparkline[24])).toFixed(2)}%</p>
                <h4 className="value">${parseFloat(coin.price).toFixed(2)}<br/><span>per coin</span></h4>
                <div className="highLow">
                <p className="low"><strong>Low:</strong><br/>${Math.min(...coin.sparkline).toFixed(2)}</p>
                  <p className="high"><strong>High:</strong><br/>${Math.max(...coin.sparkline).toFixed(2)}</p>
                </div>
        <Sparklines className={coin.sparkline[24]>coin.sparkline[0]? "isUp":"isDown"} data={coin.sparkline}>
          <SparklinesLine color={coin.sparkline[24]>coin.sparkline[0]? "green":"red"} />
        </Sparklines>
        <div className={`portfolioSpecificInfo`}>
          <div className="qtyValue">
            <h4 className="value">${coin.holdingsValue.toFixed(2)}<br/><span>{coin.qty} {coin.symbol}</span></h4>
            
            <div className="percentage">
              <div className="pieChart" style={{background: `conic-gradient(rgba(8, 10, 12,1) ${getPercentage(coin.holdingsValue, portfolio.value).toFixed(0)}%, rgba(8, 10, 12,.5) ${getPercentage(coin.holdingsValue, portfolio.value).toFixed(0)}%)`}}>
                <div className="innerChart">
                </div>
              </div>
              <p><strong>{getPercentage(coin.holdingsValue, portfolio.value).toFixed(0)}%</strong> of your portfolio value</p>
            </div>
        </div>
        
        
        
        </div>
               
              </div>
              
            </div> : false
              )
            }
            </section>
      </div>
      </section>
    </main>
  )  
}