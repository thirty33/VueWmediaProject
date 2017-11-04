export const getters = {
	tareasCompletadas: (state) => {
		return state.tareas.filter((tarea) => tarea.completado).length
	},
	totalCompra: (state) => {
		return state.carro.reduce((total, producto) => total + producto.precio,0)
	}
}