import Vue from 'vue'
import Vuex from 'vuex'

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
	},
	getters: {
		tareasCompletadas: (state) => {
			return state.tareas.filter((tarea) => tarea.completado).length
		}
	},
	mutations: {
		aumentar: (state) => state.cantidad++,
		reducir: (state) => state.cantidad-- 
	}

})

