<template>
    <div class="footer-container">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-6 col-md-4 col-xl-4 col-xxl-4 footer-logo-section justify-align-flex">
					<div class="logo-desktop"></div>
				</div>
				<div class="col-6 col-sm-6 col-md-4 col-xl-4 col-xxl-4 footer-menu-section">
					<div class="menu-section justify-align-flex ">
						<div class="title-menu-section">Menu</div>
						<div class="content-menu-section justify-align-flex">
							<div class="item">
								<router-link to="/" style="text-decoration: none; color: white;">
									<span class="">Home</span>
								</router-link>
							</div>
							<div class="item">
								<router-link to="/about" style="text-decoration: none; color: white;">
									<span class="">Su di noi</span>
								</router-link>
							</div>
							<div class="item">
								<router-link to="/contact" style="text-decoration: none; color: white;">
									<span class="">Contatti</span>
								</router-link>
							</div>
						</div>
					</div>
				</div>
				<div class="col-6 col-sm-12 col-md-4 col-xl-4 col-xxl-4 footer-social-section">
					<div class="social-section">
						<div class="title-social-section">Social media</div>
						<div class="content-social-section justify-align-flex">
							<a class="item" href="https://instagram.com/da_oris?igshid=MzRlODBiNWFlZA==" target="_blank">
								<font-awesome-icon icon="fa-brands fa-instagram" class="fa-2x fa-brands" />
							</a>
							<a class="item" href="https://www.facebook.com/liliana.abrate.14?locale=it_IT" target="_blank">
								<font-awesome-icon icon="fa-brands fa-facebook" class="fa-2x fa-brands" />
							</a>
							<a class="item" href="https://www.tiktok.com/@oris.bra" target="_blank">
								<font-awesome-icon icon="fa-brands fa-tiktok" class="fa-2x fa-brands" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>	

			
		</div>

</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {

		};
	},
	components: {
	},
	mounted() {

	},
	methods: {

	},
}
</script>

<style scoped>

.justify-align-flex {
	display: flex;
	justify-content: center;
	align-items: center;
}

.footer-container {
	width: 100vw;
	background-color: black;
	/* padding: 10px 0 5px 0; */
}

.footer-logo-section {
	color: white;
	font-size: 35px;
	height: 100%;
}

.social-section {
	display: flex;
	align-items: center;
}

.footer-menu-section,
.footer-social-section,
.footer-logo-section {
	min-height: 150px;
}

.menu-section,
.social-section {
	width: 100%;
	flex-direction: column;
	justify-content: center;
}

.social-section,
.menu-section {
	height: 100%;
}

.title-menu-section,
.title-social-section {
	font-weight: bolder;
	color: white;
	margin: 7px 0;
	font-size: 13px;
}

.content-menu-section {
	width: 100%;
	flex-direction: column;
}

.content-social-section {
	width: 100%;
}

.content-social-section >.item {
	margin: 10px;
}

.item {
	margin: 8px 0;
	font-size: 11px;
}

.fa-brands {
	color: white;
}

.content-social-section >.item {
	background-color: #5C5C5C;
	padding: 9px 13px;
}


@media screen and (max-width: 768px) {
	.footer-social-section {
		min-height: 70px;
	}

	.social-section {
		flex-direction: column;
		justify-content: center;
		margin: auto;
	}

	.content-social-section {
		width: 50%;
	}

}

@media screen and (max-width: 576px) {
	.footer-logo-section {
		display: none;
	}

	.social-section {
		width: 100%;
		flex-direction: column;
		justify-content: center;
	}	
}
</style>