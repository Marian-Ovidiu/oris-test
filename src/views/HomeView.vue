<template>
	<div class="home">
		<MainMenu></MainMenu>
		<HomeSlider></HomeSlider>
		<ContactSection></ContactSection>
		<CategorySection></CategorySection>
		<ProductSection></ProductSection>
		<SocialSection></SocialSection>
		<Footer></Footer>
	</div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';
import HomeSlider from '@/components/HomeComponents/HomeSlider.vue';
import ContactSection from '@/components/HomeComponents/ContactSection.vue';
import CategorySection from '@/components/HomeComponents/CategorySection.vue';
import ProductSection from '@/components/HomeComponents/ProductSection.vue';
import SocialSection from '@/components/HomeComponents/SocialSection.vue';


export default {
	name: 'HomeView',
	data() {
		return {

		};
	},
	components: {
		MainMenu,
		Footer,
		HomeSlider,
		ContactSection,
		CategorySection,
		ProductSection,
		SocialSection
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
