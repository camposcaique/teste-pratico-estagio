document.getElementById('menu-icon').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('show');
});

/* Máscaras */

$(document).ready(function(){
  $('#cpf').inputmask('999.999.999-99'); // Substitua '99/99/9999' pela máscara desejada
});

/* Telefone */

$(document).ready(function(){
  $('#campoComMascara').inputmask('(99)99999-9999'); // Substitua '99/99/9999' pela máscara desejada
});

/* Ver telefone */

function alternarConteudo(idConteudo) {
    var conteudo = document.getElementById(idConteudo);
    
    if (conteudo.style.display === "none" || conteudo.style.display === "") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

/* Alerta do formulário */

  function exibirAlerta() {
    alert("Mensagem enviada!");
  }

  /* Formulário Regra de três */

  function calcularRegraDeTres() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var proporcao1 = parseFloat(document.getElementById('proporcao1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(proporcao1) || isNaN(valor2)) {
      alert('Por favor, insira valores numéricos válidos.');
      return;
    }

    var resultado = (valor2 * proporcao1) / valor1;
    document.getElementById('resultado').value = resultado.toFixed(2);
  }

  /* Modal */

  function openModal() {
    document.getElementById('modal-container').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-container').style.display = 'none';
}

/* html2canvas */

function capture() {
  html2canvas(document.getElementById('capture')).then(function(canvas) {
      var image = canvas.toDataURL('image/png');

      var link = document.createElement('a');
      link.href = image;
      link.download = 'card5.png';
      link.click();
  });
}
