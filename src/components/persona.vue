


<template>
	<div>
		<template v-if="usuario">
			
			<h1 v-text="datosPersona.nombre"></h1>
			<h2 v-text="datosPersona.correo"></h2>
			<img :src="datosPersona.foto" >
		</template>

		<template v-else >
			<span>cargando usuario</span>
		</template>
	</div>
</template>
		





<script>
	import axios from 'axios'

export default {
	mounted() {
		axios.get('https://randomuser.me/api/')
			.then((respuesta) => {
				this.usuario = respuesta.data.results[0]	
			})
	},
	data() {
		return {usuario: null}
	},
	computed: {
		datosPersona() {
				return {

					nombre: `${this.usuario.name.first} ${this.usuario.name.last}`,
					foto: this.usuario.picture.large,
					correo: this.usuario.email,
				}		
		},
	}


}
	
</script>
		


<style>
	

</style>