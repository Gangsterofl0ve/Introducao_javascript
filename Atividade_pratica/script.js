function compNum(num1, num2){
  if(!num1 || !num2) return 'Defina dois números'
  const primeiraFrase = criaPrimeiraFrase(num1, num2); 
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}
function criaPrimeiraFrase(num1, num2) {
  let saoIguais = '';
  if (num1 !== num2){
    saoIguais = 'não';    
  }
  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};
function criaSegundaFrase(num1, num2){
   const soma = num1 + num2;
   let resultadoQue10 = 'menor';
   let resultadoQue20 = 'menor';
   const compara10 = soma > 10 ;
   const compara20 = soma > 20;

   if(compara10){
     resultadoQue10 = 'maior'
   }
   if(compara20){
    resultadoQue20 = 'maior'
   }
   return `Sua soma é ${soma}, que é ${resultadoQue10} que 10 e ${resultadoQue20} que 20.`;
}
console.log(compNum(1,1));