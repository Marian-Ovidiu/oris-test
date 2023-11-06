<template>
	<div class="home">
		<MainMenu></MainMenu>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="not-found">
						<h6>404 Page not found</h6>
						<div class="content-not-found">
							Oops! Sembra che tu abbia raggiunto una zona inesplorata. Torna alla sicurezza della tua
							homepage!
						</div>
						<div class="contact-button c-section">
							<router-link to="/" class="inner-contact-button" style="text-decoration: none;">
								<a style="text-decoration: none;"
									class="relative w-10 px-5 py-3 overflow-hidden font-medium text-gray-600 rounded-lg group border-none">
									<span
										class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
									<span
										class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200   group-hover:w-full ease border-none"></span>
									<span
										class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
									<span
										class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
									<span
										class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
									<span
										class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Torna alla Home</span>
								</a>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.not-found {
	width: 100%;
	height: calc(100vh - 225px);
	font-family: 'Playfair Display', serif;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-top: 1px solid lightgray;
	border-bottom: 1px solid lightgray;
}

.content-not-found {
	width: 60%;
	font-size: 15px;
	text-align: center;
	margin: 25px 0;
}

.contact-button {
    display: flex;
    justify-content: center;
    padding: 10px 0;
}

.inner-contact-button > a {
    text-decoration:none
}

.inner-contact-button {
    padding: 10px 0;
    border-top: 1px solid #374151;
    border-bottom: 1px solid #374151;
}
</style>
