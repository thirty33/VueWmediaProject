<template>
	<div>
		<h1>Tareas por hacer</h1>

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
		</ul>


	</div>
</template>



<script>

	export default {
		data(){
			return {
				tareas: [
					{name: 'hacer la cama', complete: false},
					{name: 'hacer la cena', complete: false},
					{name: 'hacer la tarea', complete: false},
					{name: 'hacer la bien', complete: false},


				],
				
			}


		},
		methods: {
			actualizarTarea: function (tarea) {
				tarea.complete = !tarea.complete
			}
		},
		computed: {
			tareasPendientes(){
				return this.tareas.filter((tarea) => !tarea.complete)
			},
			tareasFinalizadas(){
				return this.tareas.filter((tarea) => tarea.complete)


			}
		}
	}
	

</script>


<style scoped>
	li a {
		color:red;
	}

</style>