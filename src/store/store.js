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
		profesion: 'Developer'
	}
})

