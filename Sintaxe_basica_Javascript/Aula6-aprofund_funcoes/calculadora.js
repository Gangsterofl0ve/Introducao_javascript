function calc(){
  const oper = Number(prompt('Escolha uma operação \n 1 - Soma [+] \n 2 - Subtração [-] \n 3 - Multiplicação[*] \n 4 - Divisão real [/] \n 5 - Divisão inteira [%] \n 6 - Potenciação [**]'));
  console.log(oper)

  if (!oper || oper >= 7 || oper <= 0){
    alert('Erro, operação inválida');
    calc();
  }else {

  let n1 = Number(prompt('Insira o primeiro valor'));
  let n2 = Number(prompt('Insira o segundo valor'));
  let result;

  if (!n1 || !n2){
    alert('Erro, parametros invalidos')
    calc();
  } else {function soma() {
    result = n1 + n2;
    alert(`${n1} + ${n2} = ${result}`)
    novaoper();
  }  
  function subtracao() {
    result = n1 - n2;
    alert(`${n1} - ${n2} = ${result}`)
    novaoper();
  }  
  function multiplicacao() {
    result = n1 * n2;
    alert(`${n1} * ${n2} = ${result}`)
    novaoper();
  }  
  function divisaoReal() {
    result = n1 / n2;
    alert(`${n1} / ${n2} = ${result}`)
    novaoper();
  }  
  function divisaoInteira() {
    result = n1 % n2;
    alert(`O resto da divisão ${n1} % ${n2} = é igual a ${result}`)
    novaoper();
  }  
  function potenciacao() {
    result = n1 ** n2;
    alert(`${n1} elevado a  ${n2} = ${result}`)
    novaoper();
  }
  function novaoper() {
    let opcao = prompt('Deseja fazer nova operação?\n 1 - Sim \n 2 - Não');
    if (opcao == 1){
      calc();
    }else if (opcao == 2){
      alert('Até mais')
    }else {
      alert('Digite uma opção válida')
      novaoper();
    }
  }
}/* pode ser feito com If ou Switch/Case
    if (oper == 1){
      soma();
    }else if (oper == 2){
      subtracao();
    }else if (oper == 3){
      multiplicacao();
    }else if (oper == 4){
      divisaoReal();
    }else if (oper == 5){
      divisaoInteira();
    }else if(oper == 6){
      potenciacao();
    }*/
    switch(oper){
      case 1: soma();
        break;
      case 2: subtracao();
        break;
      case 3: multiplicacao();
        break;
      case 4: divisaoReal();
        break;
      case 5: divisaoInteira();
        break;
      case 6: potenciacao();
        break;
    } 
  }
}
  calc();

