const conteudo = document.getElementById("conteudo");

function abrirLivro(url){
  window.open(url, "_blank");
}

/* =========================
   TELAS PRINCIPAIS
========================= */

const telaInicio = `
  <div class="section">
    <h1>Bem-vindo ao Portal Escolar 📚</h1>
    <p>Selecione "Apostilas" no menu para acessar o conteúdo por ano.</p>
  </div>
`;

const telaApostilas = `
  <div class="sub-menu">
    <button onclick="mostrarNivel('fundamental')" id="btnFund" class="active">Ensino Fundamental</button>
    <button onclick="mostrarNivel('medio')" id="btnMed">Ensino Médio</button>
  </div>

  <div id="nivelConteudo"></div>
`;

/* =========================
   ENSINO FUNDAMENTAL
========================= */

const fundamental = `
<div class="section">
<h2>6º Ano</h2>
<div class="grid">
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-6ano-lingua-portuguesa-matematica.pdf')">Português e Matemática</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-6ano-ciencias-historia-geografia-lingua-inglesa-projeto-de-vida.pdf')">Ciências, História, Geografia, Língua Inglesa e Projeto de Vida</div>
</div>
</div>

<div class="section">
<h2>7º Ano</h2>
<div class="grid">
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-7ano-lingua-portuguesa-matematica.pdf')">Português e Matemática</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-7ano-ciencias-historia-geografia-lingua-inglesa-projeto-de-vida.pdf')">Ciências, História, Geografia, Língua Inglesa e Projeto de Vida</div>
</div>
</div>

<div class="section">
<h2>8º Ano</h2>
<div class="grid">
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-8ano-lingua-portuguesa-matematica.pdf')">Português e Matemática</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-8ano-ciencias-historia-geografia-lingua-inglesa-projeto-de-vida.pdf')">Ciências, História, Geografia, Língua Inglesa e Projeto de Vida</div>
</div>
</div>

<div class="section">
<h2>9º Ano</h2>
<div class="grid">
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-9ano-lingua-portuguesa-matematica.pdf')">Português e Matemática</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-9ano-ciencias-historia-geografia-lingua-inglesa-projeto-de-vida.pdf')">Ciências, História, Geografia, Língua Inglesa e Projeto de Vida</div>
</div>
</div>
`;

/* =========================
   ENSINO MÉDIO
========================= */

const medio = `
<div class="section">
<h2>1º Ensino Médio</h2>
<div class="grid">
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-1ano-historia-geografia-lingua-inglesa.pdf')">História, Geografia e Língua Inglesa</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-1ano-lingua-portuguesa-matematica.pdf')">Língua Portuguesa e Matemática</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-1ano-biologia-fisica-quimica.pdf')">Biologia, Física e Química</div>
</div>
</div>

<div class="section">
<h2>2º Ensino Médio</h2>
<div class="grid">
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-2ano-historia-geografia-lingua-inglesa.pdf')">História, Geografia e Língua Inglesa</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-2ano-lingua-portuguesa-matematica.pdf')">Língua Portuguesa e Matemática</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-2ano-biologia-fisica-quimica.pdf')">Biologia, Física e Química</div>
</div>
</div>

<div class="section">
<h2>3º Ensino Médio</h2>
<div class="grid">
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-3ano-historia-geografia-lingua-inglesa.pdf')">História, Física e Língua Inglesa</div>
<div class="card" onclick="abrirLivro('https://r2.cupiditys.lol/v1-3ano-lingua-portuguesa-matematica.pdf')">Língua Portuguesa e Matemática</div>
</div>
</div>
`;

/* =========================
   FUNÇÕES
========================= */

function mudarTela(tela){
  document.getElementById("btnInicio").classList.remove("active");
  document.getElementById("btnApostilas").classList.remove("active");

  if(tela === "inicio"){
    conteudo.innerHTML = telaInicio;
    document.getElementById("btnInicio").classList.add("active");
  } else {
    conteudo.innerHTML = telaApostilas;
    document.getElementById("btnApostilas").classList.add("active");
    mostrarNivel("fundamental");
  }
}

function mostrarNivel(nivel){
  document.getElementById("btnFund").classList.remove("active");
  document.getElementById("btnMed").classList.remove("active");

  const nivelConteudo = document.getElementById("nivelConteudo");

  if(nivel === "fundamental"){
    nivelConteudo.innerHTML = fundamental;
    document.getElementById("btnFund").classList.add("active");
  } else {
    nivelConteudo.innerHTML = medio;
    document.getElementById("btnMed").classList.add("active");
  }
}

/* Inicializa */
mudarTela("inicio");
