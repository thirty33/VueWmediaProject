<template>

	<div>
		<h1> Contador: {{ cantidad }}</h1>
		<button @click="aumentar"> Aumentar</button>
		<button @click="reducir"> Reducir</button>
	</div>
	
</template>


<script>
	import {mapState, mapMutations} from 'vuex'
	export default {
		// props: ['cantidad'],
		// methods: {
		// 	aumentar() {
		// 		// this.$emit('aumentar')

		// 		// con vuex
		// 		// this.$store.state.cantidad++

		// 		// Con mutations
		// 		this.$store.commit('aumentar')
		// 	},
		// 	reducir() {
		// 		// this.$emit('reducir')
		// 		// con vuex
		// 		// this.$store.state.cantidad--

		// 		//con mutations 
		// 		this.$store.commit('reducir')
		// 	}
		// },
		// Uso de mapmutations con Vuex
		methods: mapMutations(['aumentar', 'reducir']),
		computed: mapState(['cantidad']),
		// {
		// 	cantidad(){
		// 		return this.$store.state.cantidad
		// 	}
		




		
	}
	
</script>


<style>
	

</style>