const productos = [
	{nombre: 'jabon', precio: 50},
	{nombre: 'jabon', precio: 50},
	{nombre: 'jabon', precio: 50},
]


		
const mutations = {
	anadirProducto: (state, producto) => state.productos.unshift(producto),
}



export default {
	state: productos,
	mutations,
}