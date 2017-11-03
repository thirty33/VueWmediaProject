

<template>
  <div>
    <h1>shadow Dom</h1>
    <input type="range">
    <!-- <persona></persona> -->

    <!-- <elemento tipo="footer">Hola Mundo</elemento> -->
    <tareas></tareas>

    <h1>menu principal</h1>
    <ul>
      
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
    </ul>
  </div>
</template>

<script>
  // import persona from './components/persona.vue'
  // import elemento from './components/elemento.vue'
  import Tareas from './components/tareas.vue'
export default {
  components: { Tareas },
  // components: { elemento },
  // components: { persona },
  
}
</script>

<style lang="scss">


  li a {
    color: black;
  }
</style>
  
