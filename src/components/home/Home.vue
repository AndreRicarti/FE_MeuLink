<template>
  <div>
    <h1 class="centralizados">{{ titulo }}</h1>

    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do título.">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate.reverse="1.2" :url="foto.url" :titulo="foto.titulo" />
          <meu-botao 
            tipo="button" 
            rotulo="REMOVER" 
            @botaoAtivado="remove($event, foto)"
            :confirmacao="false"
            estilo="padrao"/>
        </meu-painel>  

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

// importou  diretiva. Tem que adicionar na propriedade directives logo abaixo!
import transform from '../../directives/Transform';

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao' : Botao
  },

  directives: {
    'meu-transform': transform
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

  methods: {
    remove($event, foto) {
      alert($event);
      alert('Remover a foto! ' + foto.titulo);
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
