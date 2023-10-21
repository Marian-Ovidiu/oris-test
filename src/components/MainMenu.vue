<template>
    <div class="nav-menu" :class="this.showMobileMenu ? 'change-bg-black' : ''">
        <div class="menu-bars">
            <div class="logo-desktop"></div>
            <div class="icon">
                <font-awesome-icon icon="fas fa-bars" class="bars" @click="showMenu()" style=" font-size: 24px;" />
            </div>
        </div>

        <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
            <div class="logo"></div>
            <ul class="nav-items">
                <li class="menu-item">
                    <router-link to="/" class="menu-button" style="text-decoration: none;">
                        <a  style="text-decoration: none;" class="relative w-10 px-5 py-3 overflow-hidden font-medium text-gray-600 rounded-lg group border-none">
                            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200   group-hover:w-full ease border-none"></span>
                            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Home</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link to="/about" class="menu-button" style="text-decoration: none;">
                        <a style="text-decoration: none;" class="relative w-10 px-5 py-3 overflow-hidden font-medium text-gray-600 rounded-lg group border-none">
                            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200   group-hover:w-full ease border-none"></span>
                            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Su di noi</span>
                        </a>
                    </router-link>
                </li>
                <li class="menu-item">
                    <router-link to="/contact" class="menu-button" style="text-decoration: none;">
                        <a style="text-decoration: none;" class="relative w-10 px-5 py-3 overflow-hidden font-medium text-gray-600 rounded-lg group border-none">
                            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease border-none"></span>
                            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200   group-hover:w-full ease border-none"></span>
                            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Contatti</span>
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
    background-color: rgba(0, 0, 0, 1) !important;
    transition: all 0.3s ease-out;
    color:white;

}

.logo-desktop, .logo {
    background-image: url('../assets/imgs/oris-logo-text.png');
    color: black;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 150px;
    height: 100px;
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
    top:0;
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

.nav-items > li {
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

/* .bars {
    position: absolute;
    top:0;
    left:0;
    transform: translate(50%, 50%);
} */
@media screen and (min-width: 768px) {
    .nav-content {
        transform: translate(0, 0);
    }

}


@media screen and (max-width: 768px) {
    .logo {
        display: none;
    }
    .menu-bars {
        display: flex;
        justify-content: space-between;
        justify-items: center;
        width: 100%;
        padding: 10px 30px;
    }

    .nav-menu {
        padding: 10px 25px;
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

    .nav-items > li {
        margin: 20px;
    }

    i {
        display: block;
        text-align: right;
        padding: 0 10px 10px 0;
    }
}
</style>