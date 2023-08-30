<template>
<center>
    <div class="container">
        <section class="h-screen">
            <div class="h-full">
              <!-- Left column container with background-->
              <div
                class="g-6 flex flex-wrap items-center justify-center">
                <div
                  class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                  <img
                    src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1693363977~exp=1693364577~hmac=06b7e5e649fc4a233f71c7750775985563bc6414c5b4b446de12a2bd6382e99c"
                    class="w-full"
                    alt="Sample image" />
                </div>
          
                <!-- Right column container -->
                <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <br><br>
                  <center>
                    <div style="width: 90%;" class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <span class="font-medium">Login!</span> Yuk Login Terlebih Demi Keamanan Bersama
                      </div>
                  </center>
                    <form @submit.prevent="performLogin">
                       <center>
                        <div class="mb-7 container" style="width: 90%;">
                            <div>
                                <div class="mb-3">
                                    <label style="float: left;" for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input type="text" id="email" v-model="email" style="width: 100%;"
                                        class="bg--50 border border--300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5    dark:placeholder-gray-400 dark:bg-opacity-75 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        placeholder="Masukkan Email ..." required>
                                </div>
                                <div class="mb-3">
                                    <label style="float: left;" for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input type="password" id="password" v-model="password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5    dark:placeholder-gray-400 dark:bg-opacity-75 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        placeholder="Masukkan Password ..." required>
                                </div>
                            </div>
                            <div class="mt-6">
                                <button type="submit" style="width: 100%; background: orange;"
                                    class="text-white transition-all bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Submit</button>
                            </div>
                            <div class="my-2">
                                <RouterLink
                                    class="text-orange-400 hover:underline hover:dark:text-orange-400 dark:text-orange-200 rounded-lg transition-all"
                                    to="/register">
                                    Belum punya Akun?
                                </RouterLink>
                            </div>
                        </div>
                       </center>
                    </form>
                </div>
              </div>
            </div>
          </section>
     </div>
</center>
</template>

<script>
import { onMounted } from "vue";
import { mapActions } from "vuex";

export default {
    props:['slug'],
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                email: this.email,
                password: this.password,
            };

            const success = await this.login(credentials);
            if (success == true) {
                if(this.slug){
                    this.$router.push('/product/detailproduct/' + this.slug);
                }else{
                   this.$router.push('/')
                }
            }
            else {
                alert("Login failed")
            }
        }
    },

    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 0)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>