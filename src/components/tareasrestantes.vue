<template>
	<h1>{{ tareasCompletadas}} tareas completadas </h1>

</template>

<script>
import {mapGetters} from 'vuex'
// Getters con Vuex
export default {

	// computed: {
	// 	tareasCompletadas(){
	// 		// return this.$store.state.tareas.filter((tarea) => tarea.completado).length

	// 		// con vuex getters

	// 		return this.$store.getters.tareasCompletadas
	// 	}
	// }
	// con vuex mapGetters
	computed: mapGetters(['tareasCompletadas'])
}

</script>

<style></style>