<template>
	<div>
		<!-- <h1>Tareas por hacer</h1>

		<ul>
			<li v-for="tarea in tareasPendientes">
				<a href="#" v-on:click.prevent="actualizarTarea(tarea)" v-text="tarea.name"></a>
			</li>
		</ul>
		
	
		<h1>Tareas por finalizadas</h1>
		<ul>
			<li v-for="tarea in tareasFinalizadas">
				<a href="#" v-on:click.prevent="actualizarTarea(tarea)" v-text="tarea.name"></a>
			</li>
		</ul> -->
		
		<h1>Tareas Vuex</h1>

		<ul>
			<li v-for="tarea in tareas">
				{{ tarea.nombre }}
			</li>
		</ul>

		<h1>Tareas restantes</h1>

		<tareasrestantes></tareasrestantes>

	</div>
</template>



<script>
	import {mapState} from 'vuex'
	import tareasrestantes from './tareasrestantes.vue'
	export default {
		// props: ['tareas'],
		components: {tareasrestantes},
		data(){
			return {
				// tareas: [
				// 	{name: 'hacer la cama', complete: false},
				// 	{name: 'hacer la cena', complete: false},
				// 	{name: 'hacer la tarea', complete: false},
				// 	{name: 'hacer la bien', complete: false},


				// ],
				
				// Vuex

			}


		},
		methods: {
			actualizarTarea: function (tarea) {
				tarea.complete = !tarea.complete
			}
		},
		computed: mapState(['tareas'])
			// {
			// tareasPendientes(){
			// 	return this.tareas.filter((tarea) => !tarea.complete)
			// },
			// tareasFinalizadas(){
			// 	return this.tareas.filter((tarea) => tarea.complete)


			// },
			// vuex
			// tareas(){

			// 	return this.$store.state.tareas
			// }
		// }
	}
	

</script>


<style scoped>
	li a {
		color:red;
	}

</style>