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