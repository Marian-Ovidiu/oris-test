<template>
    <div class="nav-menu" :class="this.showMobileMenu ? 'change-bg-black' : 'black-logo'">
        <div class="menu-bars">
            <div class="logo-desktop" :class="{ 'white-logo': showMobileMenu }"></div>
            <div class="icon">
                <font-awesome-icon icon="fas fa-bars" class="bars" @click="showMenu()" style=" font-size: 24px;" />
            </div>
        </div>

        <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
            <div class="logo"></div>
            <ul class="nav-items">
                <li class="menu-item">
                    <router-link to="/" class="menu-button" style="text-decoration: none;">
                        <a style="text-decoration: none;"
                            class="relative w-7 px-3 py-2 overflow-hidden font-medium text-sm text-gray-600 rounded-lg group border-none">
                            <span
                                class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span
                                class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span
                                class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span
                                class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span
                                class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span
                                class="text-size relative transition-colors duration-300 delay-200 group-hover:text-white ease">Home</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link to="/products" class="menu-button" style="text-decoration: none;">
                        <a style="text-decoration: none;"
                            class="relative w-7 px-3 py-2 overflow-hidden font-medium text-sm text-gray-600 rounded-lg group border-none">
                            <span
                                class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span
                                class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span
                                class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span
                                class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span
                                class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span
                                class="text-size relative transition-colors duration-300 delay-200 group-hover:text-white ease">Catalogo</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link to="/about" class="menu-button" style="text-decoration: none;">
                        <a style="text-decoration: none;"
                            class="relative w-7 px-3 py-2 overflow-hidden font-medium text-sm text-gray-600 rounded-lg group border-none">
                            <span
                                class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span
                                class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span
                                class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span
                                class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span
                                class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span
                                class="text-size relative transition-colors duration-300 delay-200 group-hover:text-white ease">Su
                                di noi</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link to="/contact" class="menu-button" style="text-decoration: none;">
                        <a style="text-decoration: none;"
                            class="relative w-7 px-3 py-2 overflow-hidden font-medium text-sm text-gray-600 rounded-lg group border-none">
                            <span
                                class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span
                                class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span
                                class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span
                                class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span
                                class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span
                                class="text-size relative transition-colors duration-300 delay-200 group-hover:text-white ease">Contatti</span>
                        </a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import '../assets/css/MainMenuButtons.css';

.change-bg-black {
    /* background-color: black !important; */
    background: radial-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 100%) !important;
    transition: all 0.3s ease-out;
    color: white;

}

.white-logo {
  background-image: url('../assets/imgs/Bianco.png') !important;
  color: white !important;
}

.logo-desktop {
    background-image: url('../assets/imgs/Nero.png');
}

.logo {
    background-image: url('../assets/imgs/Bianco.png');
}

.logo-desktop,
.logo {
    color: black;
    /* background-size: 250%; */
    background-size: 300%;
    background-position-x: center;
    background-position-y: 55%;
    width: 100px;
    height: 50px;
}

.change-bg-white {
    background-color: white;
}

.relative {
    position: relative;
}

.menu-bars {
    display: none;
}

.nav-menu {
    height: 100px;
    background-color: white;
    position: relative;
    font-family: 'Playfair Display', serif;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transform: translate(0, 50%);
}

.nav-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 5px;

}

.nav-items>li {
    padding: 0 10px;
}

i {
    display: none;
}

.icon {
    display: flex;
    justify-content: end;
    align-items: center;
    width: calc(100% - 150px);
}

.text-size {
    font-size: 13px;
}

@media screen and (min-width: 768px) {
    .nav-content {
        transform: translate(0, 0);
        margin: 25px 0;

    }

    .logo {
        background-image: url('../assets/imgs/Nero.png');
    }
}

@media screen and (max-width: 768px) {
    .logo {
        display: none;
    }

    .menu-bars {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 30px;
    }

    .nav-menu {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .nav-content {
        flex-direction: column;
        display: flex;
        align-items: center;
        z-index: 100;
        position: absolute;
        transition: all 0.5s ease-out;
    }

    .open-menu {
        opacity: 1;
        background-color: white;
        border-bottom: 1px solid lightgray;
    }

    .closed-menu {
        opacity: 0;
        height: 0;
        padding: 0;
    }


    .nav-items {
        flex-direction: column;
    }

    .nav-items>li {
        margin: 10px;
    }

    i {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
    }
}</style>