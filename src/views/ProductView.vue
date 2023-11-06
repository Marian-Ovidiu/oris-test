<template>
	<div class="home">
		<MainMenu></MainMenu>
		
		<Footer></Footer>
	</div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';


export default {
	name: 'ProductView',
	data() {
		return {

		};
	},
	components: {
		MainMenu,
		Footer
	},
	mounted() {

	},
	methods: {

	},
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'); */

</style>
