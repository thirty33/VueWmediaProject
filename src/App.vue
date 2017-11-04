

<template>
  <div>
   <!--  <h1>shadow Dom</h1>
    <input type="range"> -->
    <!-- <persona></persona> -->

    <!-- <elemento tipo="footer">Hola Mundo</elemento> -->
    <!-- <tareas></tareas>

    <h1>menu principal</h1>
    <ul>
      
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
      <li><a href="">enlace</a> </li>
    </ul> -->

    <!-- <h1 :class="[$style.rojo]" >Hola css Modules</h1>
    <h1 :class="{[$style.subrayado] : subrayo}" >Hola css Modules</h1> -->

  <!-- Antes de Vuex -->
  <!-- <contador :cantidad="cantidad"
            @aumentar="cantidad++"
            @reducir="cantidad--">
              
  </contador>  -->

  <!-- Despues de vuex -->
  <contador>
              
  </contador> 
  
  </div>
</template>

<script>
  // import persona from './components/persona.vue'
  // import elemento from './components/elemento.vue'
  import Tareas from './components/tareas.vue'
  import Contador from './components/contador.vue'
  
  // components: { elemento },
  // components: { persona },
  // components: { Tareas },
export default {
  components: { Contador },
  data(){
    return {
      // cantidad: 0,
      // subrayo: false,

    },
    
  }
  
}
</script>

<style lang="scss" module>


  li a {
    color: black;
  }

  .subrayado {
    text-decoration: underline;
  }

  .rojo {
    color: red;
  }
</style>
  
