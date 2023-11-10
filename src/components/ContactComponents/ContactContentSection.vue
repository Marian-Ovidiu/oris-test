<template>
    <div class="contact-content-container">
            <!-- <div class="pre-row">
                <div class="row contact-pre-content-row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ratione doloremque aut, iste
                        officia enim
                        nulla aspernatur, neque aperiam adipisci possimus accusantium eos voluptate assumenda harum officiis
                        veniam
                        deserunt consequuntur.
                    </div>
                </div>
            </div> -->
            <div class="pre-row">
                <div class="row contact-content-row">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 item">
                        <div class="contact-box">
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-map-marker" class="fa-brands" />
                            </div>
                            <div class="contact-content">
                                <span>Corso Garibaldi, 16, 12042 Bra CN</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 item">
                        <div class="contact-box">
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-envelope" class="fa-brands" />
                            </div>
                            <div class="contact-content">
                                <span>orisbra@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 item">
                        <div class="contact-box">
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-phone" class="fa-brands" />
                            </div>
                            <div class="contact-content">
                                <a :href="'tel:0172 431560'">0172 431560</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
</template>

<script>
export default {
    name: 'ContactContentSection',
    components: {
    }
}
</script>

<style scoped>

.contact-content-container {
    font-family: 'Playfair Display', serif;
    width: 100vw;
    margin: auto;
}
.pre-row {
    width: 100%;
}

.contact-content-row, .contact-pre-content-row {
    width: 100%;
    padding: 30px 0;
    margin: auto;
}

.contact-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 125px;
    margin: auto;
}

.icon-container {
    text-align: center;
    padding: 15px 0;
}

.contact-content {
    font-size: 12px;
    padding: 15px 0;
    text-align: center;
}
.contact-content > a {
    text-decoration: none;
    color: black;
}
</style>