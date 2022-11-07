export const getPercentage = (num1, num2) => (num1 / num2) * 100;

export const getPercentageChange = (num1, num2)=>100-getPercentage(num1,num2);

export const isUp = (num1,num2)=>(num1>num2) ? "isUp" : (num1===num2) ? "noChange" : "isDown";

export const formatNum = num => (num<.01) ? num.toLocaleString(navigator.language, {
  minimumFractionDigits: 6,
  maximumFractionDigits: 6,
}) : num.toLocaleString(navigator.language, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

// export const handleLinkClicks = e => {
//   let target = e.target.id;
//   if(target === "toSelection"){
//       if (coins.some((coin) => coin.selected === true)) {
//       } else {
//         e.preventDefault();
//       }
//   } else if(target === "toQuantity"){
//     if(coins.filter(coin=>coin.selected===true).every(coin=>coin.qty>0)){
//       let localState = [...coins];
//       localState.filter(coin=>coin.selected===true).forEach(coin=>coin.holdingsValue=parseFloat(coin.price)*coin.qty);
//       localState.filter(coin=>coin.selected===true).forEach(coin=>coin.holdingsSparkline=coin.sparkline.map(elem=>elem*coin.qty));
//       setCoins(localState);
//       //
//       let localPortfolio= {...portfolio};
//       localPortfolio.value=0;
//       localPortfolio.sparkline.fill(0,0,25);
//       localState.filter(coin=>coin.selected===true).forEach(coin=>localPortfolio.value+=coin.holdingsValue);
//       localState.filter(coin=>coin.selected===true).forEach(coin=>{
//             for(let i=0; i < coin.sparkline.length; i++){
//               localPortfolio.sparkline[i]+=coin.holdingsSparkline[i];
//             }
//           }
//         );
//       console.log(localState);
//       console.log(localPortfolio);
//       setPortfolio(localPortfolio);
//     }else{
//       console.log("QTY not set")
//       e.preventDefault();
//     }
//   } else{
//     if (portfolio.goal > 0) {
//     } else {
//       console.log("Goal is too small");
//       e.preventDefault();
//     }
//   }
// }