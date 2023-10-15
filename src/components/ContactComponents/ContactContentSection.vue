<template>
    <div class="contact-content-container">
            <div class="pre-row">
                <div class="row contact-pre-content-row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ratione doloremque aut, iste
                        officia enim
                        nulla aspernatur, neque aperiam adipisci possimus accusantium eos voluptate assumenda harum officiis
                        veniam
                        deserunt consequuntur.
                    </div>
                </div>
            </div>
            <div class="pre-row">
                <div class="row contact-content-row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 item">
                        <div class="contact-box">
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-map-marker" class="fa-2x fa-brands" />
                            </div>
                            <div class="contact-content">
                                <span>Corso Garibaldi, 16, 12042 Bra CN</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 item">
                        <div class="contact-box">
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-envelope" class="fa-2x fa-brands" />
                            </div>
                            <div class="contact-content">
                                <span>test-oris@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 item">
                        <div class="contact-box">
                            <div class="icon-container">
                                <font-awesome-icon icon="fa-phone" class="fa-2x fa-brands" />
                            </div>
                            <div class="contact-content">
                                <span>0172 431560</span>
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
.pre-row:nth-child(2){
    background-color: #E0E0E0;
}

.contact-content-row, .contact-pre-content-row {
    width: 80%;
    padding: 30px 0;
    margin: auto;
}

.contact-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 125px;
    width: 85%;
    margin: auto;
}

.icon-container {
    text-align: center;
}

.contact-content {
    padding: 15px;
    text-align: center;
}
</style>