<template>

	<div>
		<h1> Contador: {{ cantidad }}</h1>
		<button @click="aumentarAsync(12)"> Aumentar</button>
		<button @click="reducirAsync({cantidad: 15})"> Reducir</button>
	</div>
	
</template>

<!--  -->
<script>
	import {mapState, mapMutations, mapActions} from 'vuex'
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
		// methods: mapMutations(['aumentar', 'reducir']),

		// uso de actions en Vuex
		methods: mapActions(['aumentarAsync', 'reducirAsync']),
		//  {
		// 	aumentar() {
		// 		// this.$emit('aumentar')

		// 		// con vuex
		// 		// this.$store.state.cantidad++

		// 		// Con mutations
		// 		// this.$store.commit('aumentar')

		// 		// con actions Vuex
		// 		this.$store.dispatch('aumentarAsync')
		// 	},
		// 	reducir() {
		// 		// this.$emit('reducir')
		// 		// con vuex
		// 		// this.$store.state.cantidad--

		// 		//con mutations 
		// 		// this.$store.commit('reducir')

		// 		// con actions Vuex
		// 		this.$store.dispatch('reducirAsync')
		// 	}

		// },
		computed: mapState(['cantidad']),
		// {
		// 	cantidad(){
		// 		return this.$store.state.cantidad
		// 	}

		




		
	}
	
</script>


<style>
	

</style>