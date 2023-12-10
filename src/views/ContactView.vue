<template>
    <div class="contact">
        <MainMenu></MainMenu>
        <Header :title="'Contatti'" :image="'../../assets/imgs/header-imgs/header-3.jpeg'"></Header>
        <ContactContentSection></ContactContentSection>
        <!-- <div class="contact-form-container">
            <div class="row">
                <div class="col-12">
                    <div class="title-form">
                        Hai dei dubbi? Scrivici!
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="contact-form-wrapper d-flex justify-content-center">
                    <form action="#" class="contact-form">
                        <div>
                            <input type="text" class="form-control rounded border-white mb-3 form-input" id="name"
                                placeholder="Name" required>
                        </div>
                        <div>
                            <input type="email" class="form-control rounded border-white mb-3 form-input"
                                placeholder="Email" required>
                        </div>
                        <div>
                            <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="2"
                                cols="30" placeholder="Message" required></textarea>
                        </div>
                        <div class="submit-button-wrapper">
                            <input type="submit" value="Send">
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div> -->
        <ContactMapSection></ContactMapSection>
        <Footer></Footer>
    </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/GlobalComponents/Header.vue';
import ContactContentSection from '@/components/ContactComponents/ContactContentSection.vue';
import ContactMapSection from '@/components/ContactComponents/ContactMapSection.vue';


export default {
    name: 'ContactView',
    components: {
        MainMenu,
        Footer,
        Header,
        ContactContentSection,
        ContactMapSection
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.contact-form-container {
    width: 100vw;
    padding: 5px 0;
    margin: 5px 0;
    background-color: lightgray;
}

.title-form {
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 10px 0;
}

.contact-form-wrapper {
  padding: 10px 0;
}

.contact-form {
  padding: 30px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 400px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .form-input,
.form-text-area {
  background-color: #f0f4f5;
  height: 25px;
  padding-left: 16px;
}

.contact-form .form-text-area {
  background-color: #f0f4f5;
  height: auto;
  padding-left: 16px;
}

.contact-form .form-control::placeholder {
  color: #aeb4b9;
  font-weight: 500;
  opacity: 1;
}

.contact-form .form-control:-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .form-control::-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .form-control:focus {
  border: none;
  /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.07), 0 0 8px #f33fb0; */
}

.contact-form .submit-button-wrapper {
  text-align: center;
}

.contact-form .submit-button-wrapper input {
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  padding: 10px 60px;
  font-weight: 500;
  letter-spacing: 2px;
}

.contact-form .submit-button-wrapper input:hover {
  background-color: lightgray;
  color: white;
}

</style>