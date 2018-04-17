<template>
  <div>
    <header>
    <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Trabi</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link menuA" href="#">Torna-se em um prestador <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuA" href="#">Ajuda <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuA" href="#">Cadastra-se <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuA" href="#">Entrar <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <body class="text-center">
      <main role="main" class="inner cover">
          <h1 class="cover-heading">Escolha seu serviço.</h1>
          <p class="lead">Tenha a experiência de conhecer o Everton nosso CEO e Murilinho dos Teclados nosso estágiario .</p>
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-lg">Pesquisar</span>
            </div>
            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
          </div>
      </main>
    </body>
  </div>
</template>

<script>
</script>

<style>
  .menuA {
    font-size: 14px;
  }
</style>
