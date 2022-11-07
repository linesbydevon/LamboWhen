export const getPercentage = (num1, num2) => (num1 / num2) * 100;

export const isUp = (num1,num2)=>(num1>num2) ? "isUp" : (num1===num2) ? "noChange" : "isDown";