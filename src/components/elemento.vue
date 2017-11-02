<!-- <template>

	<div>
		<section v-if="tipo == 'section'">
			<slot></slot>
		</section>

		<section v-if="tipo == 'aside'">
			<slot></slot>
		</section>

	</div>
	
</template>
 -->

<script>
	export default {
		props: ['tipo'],
		render(createdElement) {
			return createdElement(
					this.tipo,
					this.$slots.default

				)


		}




		
	}
	
</script>


<style>
	

</style>