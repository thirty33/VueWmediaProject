import Vue from 'vue'
import Vuex from 'vuex'

// Separando la data de store

import productos from './modules/productos'


// getters
import {getters} from './getters'
import {mutations} from './mutations'

Vue.use(Vuex)


// leccion basica de Vuex
// export const store = new Vuex.Store({
// 	state: {
// 		cantidad: 0,
// 	}
// })

// Vuex state tree 

export const store = new Vuex.Store({

	state: {
		nombre: 'joel suarez',
		apellidos: 'suarez',
		profesion: 'Developer',
		tareas: [
		{nombre: 'hacer la cama', completado: false},
		{nombre: 'hacer la cama', completado: true},
		{nombre: 'hacer la cama', completado: false},
		{nombre: 'hacer la cama', completado: false},
		{nombre: 'hacer la cama', completado: true},

		],
		cantidad: 0,
		// productos: [
		// 	{nombre: 'jabon', precio: 50},
		// 	{nombre: 'jabon', precio: 50},
		// 	{nombre: 'jabon', precio: 50},
		// ],
		carro: []
	},

		

	getters, 
	// {
	// 	tareasCompletadas: (state) => {
	// 		return state.tareas.filter((tarea) => tarea.completado).length
	// 	},
	// 	totalCompra: (state) => {
	// 		return state.carro.reduce((total, producto) => total + producto.precio,0)
	// 	}
	// },
	mutations,
	// {
	// 	aumentar: (state, cantidad) => state.cantidad += cantidad,
	// 	reducir: (state, cantidad) => state.cantidad -= cantidad,
	// 	// anadirProducto: (state, producto) => state.productos.unshift(producto),
	// 	comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
	// 	eliminarProducto: (state, indice) => state.carro.splice(indice,1),

	// },
	// Cambios asincronos
	actions: {
		// Acceso al context
		aumentarAsync: (context, cantidad) => {
			setTimeout(() => context.commit('aumentar',cantidad), 2000)
		},
		// reduciendo elementos pasados a la funcion
		reducirAsync: ({commit}, {cantidad}) => {
			setTimeout(() => commit('reducir', cantidad), 2000)
		},

	},
	modules: {
		productos,
	}

})

