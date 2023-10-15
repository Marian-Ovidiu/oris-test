<template>
    <div class="social-custom-container">
        <div class="inner-custom-container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 follow-us-text-container">
                    <div class="follow-us-text">Seguici sui social</div>
                    <div class="follow-us-description">Per rimanere sempre aggiornato sulle ultime tendenze, ispirazioni
                        e offerte esclusive.</div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="follow-us-icons-container">
                        <a href="https://instagram.com/da_oris?igshid=MzRlODBiNWFlZA==" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-instagram" class="fa-2x fa-brands" />
                            <font-awesome-icon icon="fa-brands fa-facebook" class="fa-2x fa-brands" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'SocialSection',
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
.social-custom-container {
    font-family: serif;
    width: 100%;
    padding: 20px;
    background-color: #E0E0E0;
}

.social-custom-container>.inner-custom-container {
    width: 80%;
    margin: auto;
    text-align: center;
}

.follow-us-text-container,
.follow-us-icons-container {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.follow-us-text-container {
    flex-direction: column;
}

.follow-us-icons-container>a {
    color: black;
}

.follow-us-text {
    font-size: 30px;
    margin-bottom: 10px;
}

.fa-brands {
    margin: 0 10px;
}

@media screen and (max-width: 576px) {
    .follow-us-text-container {
        height: 125px;
    }

    .follow-us-icons-container {
        height: 50px;
    }

    .follow-us-text {
        font-size: 25px;
    }

}
</style>