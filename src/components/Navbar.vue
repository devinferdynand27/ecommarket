<template>
    <div>
        <nav style="background: white;"
            class="bg-white shadow dark:bg-white-900 w-full top-0 left-0 border-b border-gray-200 dark:border-white-600 bg-opacity-[.6] backdrop-blur-sm dark:bg-opacity-[.7]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                   
                    <img src="../assets/logo.jpeg" style="width: 180px;" alt="">

                    <!-- <span style="color: orange;" class="self-center text-xl font-semibold whitespace-nowrap dark:text-orange">ECOMARKET </span> -->
                </a>
                <div class="flex md:order-2">
                    <div v-if="isAuthenticated"  class="mr-8 relative">
                       
                        <router-link to="/cart">
                            <button   style="background: orange;"
                            class="h-full flex flex-wrap px-3 justify-center items-center align-middle hover:bg-slate-400 hover:bg-opacity-50 dark:text-white rounded-xl transition-all">
                            <i class="bi bi-cart text-xl font-semibold" v-if=" cart.cart_items != undefined"> {{ cart.cart_items.data.length }} </i>
                        </button>
                        </router-link>
                    
                        <div  style="background: orange;" v-if="cart.cart_items != undefined && cart.cart_items.data.length > 0"
                            class="absolute text-sm bottom-full left-full -translate-x-[50%] translate-y-[50%] bg-yellow-500 dark:bg-yellow-500 dark:bg-opacity-80 text-white px-2 rounded-md">
                        </div>
                    </div>
                    <router-link to="/login" v-if="isAuthenticated != true"
                    style="background: orange;"   class="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Masuk
                    </router-link>
                    <router-link  style="background: orange;" to="/register" v-if="isAuthenticated != true"
                        class="hidden md:block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Daftar
                    </router-link>
                    <button  style="background: orange;" v-on:click="_logout()" v-if="isAuthenticated"
                        class="hidden md:block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Keluar
                    </button>
                    <button  style="background: orange;" type="button" id="nav-btn-toggle" @click="navToggle"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
               
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li  style="color: black;" class="mt-2">
                            <RouterLink to="/" :class="setActivedNavClass(rl[2])">
                                Produk
                            </RouterLink>
                        </li>
                        <li  style="color: black;" class="mt-2">
                            <RouterLink to="/category" :class="setActivedNavClass(rl[3])">
                                Kategori
                            </RouterLink>
                        </li>
                        
                        <li  style="color: black;" class="mt-2">
                            <RouterLink to="/brand" :class="setActivedNavClass(rl[4])">
                                Brand
                            </RouterLink>
                        </li>
                        
                        <li  style="color: black;" class="mt-2" v-if="isAuthenticated">
                            <RouterLink to="/profile" :class="setActivedNavClass(rl[5])">
                                Profile
                            </RouterLink>
                        </li>
                        <li class="mt-2">
                            
                            <router-link  to="/login" v-if="isAuthenticated != true"
                                class="visible md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </router-link>
                            
                            <router-link to="/register" v-if="isAuthenticated != true"
                                class="visible md:hidden text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                SignUp
                            </router-link>
                            
                            <button v-on:click="_logout()" v-if="isAuthenticated"
                                class="visible md:hidden text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    {{ getcartdata }}
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import $ from "jquery";

export default {
    props: {
        idMenu: Number
    },
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
        ...mapState('cart', ['cart']),
    },
    mounted() {
        this.$store.dispatch("cart/getcartdata", localStorage.getItem('token'))
        // console.log(localStorage.getItem('token'))
    },
    methods: {
        ...mapActions('auth', ['logout']),
        ...mapActions('cart', ['toggle_cartside']),
        _logout() {
            let cnfrm = confirm('Apakah Anda yakin ingin melakukan logout?');
            if (cnfrm) {
                this.logout();
                this.$router.push('/login');
            }
        },
        cart(){
            // this.$router.push('/cart');
            console.log('apa')
        },
        navToggle() {
            $("#navbar-sticky").slideToggle();
        },
        // toggle_cartSide(){
        //     $('#cart-side').toggle();
        // }
    },
    setup(props) {
        const rl = ref([
            false,
            false,
            false,
            false,
            false
        ]);

        if (props.idMenu == 0) {
            rl.value[0] = true;
        }
        if (props.idMenu == 1) {
            rl.value[1] = true;
        }
        if (props.idMenu == 2) {
            rl.value[2] = true;
        }
        if (props.idMenu == 3) {
            rl.value[3] = true;
        }
        if (props.idMenu == 4) {
            rl.value[4] = true;
        }
        if (props.idMenu == 5) {
            rl.value[5] = true;
        }

        return {
            rl
        }
    },
    data() {
        return {
            setActivedNavClass(e) {
                let txtClass = '';
                try {
                    if (e) {
                        txtClass = "block py-2 pl-3 pr-4 text-white bg-orange-400 rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-400";
                    } else {
                        txtClass = "text-orange";
                    }
                }
                catch (err) {
                    console.log(err);
                    return 0;
                }
                finally {
                    return txtClass;
                }
            }
        }
    }
}
</script>