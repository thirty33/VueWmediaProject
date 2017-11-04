<template>
	<section>
		
		<h2> Carro de la compra</h2>
		<h3> Total compra: {{ totalCompra }} $</h3>

		<ul>
			<li v-for="(producto, index) in carro">
				{{ producto.nombre }}
				<button @click="eliminarProducto(index)">X</button>
			</li>
		</ul>
	</section>
	
</template>

<script>
	import {mapState, mapGetters, mapMutations} from 'vuex'
	export default {
		computed: {
			...mapState(['carro']),
			...mapGetters(['totalCompra']),
		},
		methods: mapMutations(['eliminarProducto'])

	}
</script>

<style></style>