<template>
	<section>
		<h1>Anadir un producto</h1>
		<form @submit.prevent="anadir">
			<input type="text" placeholder="Nombre" v-model="nombre" required>
			<input type="number" placeholder="Precio" v-model="precio" required>
			<input type="submit" value="Anadir">
		</form>
		<hr>
		<ul>
			<li v-for="(producto,index) in productos ">
				{{ producto.nombre }} - {{ producto.precio + '$' }}
				<button @click="comprarProducto(index)">+</button>
			</li>
		</ul>
	</section>
</template>


<script>
	import {mapState,mapMutations} from 'vuex'

	export default {
		data(){
			return {
				nombre: '',
				precio: 0
			}
		},
		computed: mapState(['productos']),
		methods: {
			...mapMutations(['comprarProducto']),
			anadir() {
				this.$store.commit('anadirProducto', {
					nombre: this.nombre,
					precio: Number(this.precio),
				})
				this.nombre = ''
				this.precio = 0
			}

		}

	}
</script>


<style>
	

</style>