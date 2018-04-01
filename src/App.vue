<template>
  <div class="corpo">
    <nav>
      <ul>
        <li v-for="route in routes" :key="route">
          <router-link :to="route.path ? route.path : '/'">{{ route.titulo }} </router-link>
        </li>
      </ul>
    </nav>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      routes
    }
  }
}

import { routes } from './routes';

</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter, .pagina-enter-active {
      opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
      transition: opacity .4s;
  } 
</style>
