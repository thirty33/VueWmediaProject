

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
  <!-- <contador>
              
  </contador>  -->

  <!-- Uso de Map State  -->
  <!-- <h1> Uso de mamState</h1>
  <h1>Hola me llamo {{nombre}} {{apellidos}} y me dedico a {{profesion}} </h1> -->

  <!-- Vuex Getters -->
  <h1>Tareas con Vuex</h1>
  <tareas></tareas>


  <!-- Vuex mutations -->
  <h2>Contador vuex mutations</h2>
  <contador></contador>





  
  
  </div>
</template>

<script>
  // import persona from './components/persona.vue'
  // import elemento from './components/elemento.vue'
  import Tareas from './components/tareas.vue'
  import Contador from './components/contador.vue'

  // usando mapState
  import {mapState} from 'vuex'
  
  // components: { elemento },
  // components: { persona },
  // components: { Tareas },
export default {
  components: { Contador },

  // computed: {
  //   nombre(){
  //     return this.$store.state.nombre
  //   }
  // }
  // computed: mapState({
  //   nombre: (state) =>  state.nombre, 
  //   apellidos: (state) =>  state.apellidos
  // })
  // computed: mapState(['nombre', 'apellidos', 'profesion'])

  // data(){
  //   return {
  //     // cantidad: 0,
  //     // subrayo: false,

  //   },
    
  // }
  
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
  
