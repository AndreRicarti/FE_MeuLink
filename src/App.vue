<template>
  <div class="corpo">
    <h1 class="centralizados">{{ titulo }}</h1>

    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do título.">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </meu-painel>  

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva.vue';
export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva
  },

  data() {
    return {
      titulo: 'Everton Gostoso',
      fotos: []
        /*{
          url: 'https://s.aficionados.com.br/imagens/x-personagens-da-marvel-assassinados-por-thanos_f.jpg',
          titulo: 'Thano'
        },
        {
          url: 'https://s.aficionados.com.br/imagens/x-personagens-da-marvel-assassinados-por-thanos_f.jpg',
          titulo: 'Thano'
        }*/
      ,
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  created() {
    let promise = this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizados {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
