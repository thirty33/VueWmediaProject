export const mutations =  {
	aumentar: (state, cantidad) => state.cantidad += cantidad,
	reducir: (state, cantidad) => state.cantidad -= cantidad,
	// anadirProducto: (state, producto) => state.productos.unshift(producto),
	comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
	eliminarProducto: (state, indice) => state.carro.splice(indice,1),

}