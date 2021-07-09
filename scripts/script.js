/**
 * Função que cria uma mascara no input do CPF a medida que o usuário entra com os números
 */

function maskCpf() {
   var cpf = document.getElementById('cpf');

   if(cpf.value.length == 3 || cpf.value.length == 7) {
      cpf.value += '.';
   } else if(cpf.value.length == 11) {
      cpf.value += '-';
   }
}