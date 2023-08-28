<template>
  <!-- <div v-for="item in getaddress" :key="item.user_id">
         {{ item.address }}
    </div> -->

  <div class="container px-5 py-6 mx-auto">
    <b>Checkout</b><br/><br/>
    <body class="p-4 flex shadow-md bordered justify-center bg-white-100">

      <div v-show="valuesmodal == false">
        <button @click="tutup()" style="background: red; float: right;" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <i class="bi bi-x"></i>
        </button>
        <br>
        <div>
          <form @submit.prevent="submit">
          <div class="mb-6">
              <label for="address" style="width:300px;"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
              <textarea id="address" v-model="addAddress.address"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  cols="30" rows="2"></textarea>
          </div>
          <div class="mb-6">
              <label for="postal_code"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kode Pos</label>
              <input type="text" id="postal_code" v-model="addAddress.postal_code"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div class="mb-6">
              <label for="country"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Negara</label>
              <!-- <input type="text" id="country" v-model="addAddress.country"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
              <select id="country" v-model="addAddress.country" @change="fetchAllStates(addAddress.country)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="country in countries" :key="country.id" :value="country.id">
                      {{ country.name }}
                  </option>
              </select>
          </div>
          <div class="mb-6">
              <label for="state"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provinsi</label>
              <!-- <input type="text" id="state" v-model="addAddress.state"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
              <select id="state" v-model="addAddress.state" @change="fetchAllCities(addAddress.state)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="state in states" :key="state.id" :value="state.id">
                      {{ state.name }}
                  </option>
              </select>
          </div>
          <div class="mb-6">
              <label for="city"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kota</label>
              <!-- <input type="text" id="city" v-model="addAddress.city"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
              <select id="city" v-model="addAddress.city"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="city in cities" :key="city.id" :value="city.id">
                      {{ city.name }}
                  </option>
              </select>
          </div>
          <div class="mb-6">
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor
                  Telepon</label>
              <input type="text" id="phone" v-model="addAddress.phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <button>kirim</button>
        </form>
      </div>

      </div>

      <form v-show="valuesmodal == true" class="w-full max-w-screen-md mx-auto">
        <fieldset class="">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-300"
          >
            <a href="#" class="font-medium text-gray-500 hover:text-gray-700"
              >Alamat Pengirim</a
            >
          </div>
          <br />
          <div class="grid sm:grid-cols-4 gap-6">
            <label
              :for="item.id"
              v-for="item in address"
              :key="item.id"
              class="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
            >
              <span
                style="font-size: 10px"
                class="font-semibold text-gray-500 leading-tight uppercase mb-3"
                >{{ item.address }}</span
              >
              <span
                style="font-size: 10px"
                class="font-semibold text-gray-500 leading-tight uppercase mb-3"
                >{{ item.city }} , {{ item.state }} , {{ item.country }}
              </span>
              <span
                style="font-size: 10px"
                class="font-semibold text-gray-500 leading-tight uppercase mb-3"
                >{{ item.phone }}</span
              >
              <input
                @click="show(item.id)"
                type="radio"
                :checked="item.default_shipping == 1"
                name="plan"
                :id="item.id"
                value="hobby"
                class="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
              >
                <span
                  class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5 text-green-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </label>
          </div>
        </fieldset>
      </form>
    </body>
    <br />
    <center>
      <button
        @click="modalshow" style="width: 100%; background: green;"
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Tambah Alamat Pengirim
      </button>
    </center>
    <fieldset class="">
      <div
        class="flex items-center justify-between py-4 border-b border-gray-300"
      >
        <a href="#" class="font-medium text-gray-500 hover:text-gray-700"
          >Alamat Penerima</a
        >
      </div>
      <br />
      <div class="grid sm:grid-cols-4 gap-6">
        <label

          class="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
        >
          <span
            style="font-size: 10px"
            class="font-semibold text-gray-500 leading-tight uppercase mb-3"
            >deimde</span
          >
          <span
            style="font-size: 10px"
            class="font-semibold text-gray-500 leading-tight uppercase mb-3"
            >bandung
          </span>
          <span
            style="font-size: 10px"
            class="font-semibold text-gray-500 leading-tight uppercase mb-3"
            >devin</span
          >
          <input
            @click="show()"
            type="radio"
  
            name="plan"
  
            value="hobby"
            class="absolute h-0 w-0 appearance-none"
          />
          <span
            aria-hidden="true"
            class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
          >
            <span
              class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5 text-green-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </span>
        </label>
      </div>
    </fieldset><br>


    <br><br>
    <b class="mb-2">Metode Pembayaran</b><br><br>
    <hr class="mb-2">
    <label
    style="width: 150px;"
    class="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer"
  >
  <img style="width: 150px;" src="https://i.pinimg.com/474x/b9/d8/84/b9d884233c66866745d0879bf459585a.jpg" alt="">
    
    <input
      @click="show()"
      type="radio"

      name="plan"

      value="hobby"
      class="absolute h-0 w-0 appearance-none"
    />
    <span
      aria-hidden="true"
      class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
    >
      <span
        class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5 text-green-600"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </span>
  </label>
  <br>
  <button
  @click="modalshow" style="width: 100%; background: green;"
  data-modal-target="authentication-modal"
  data-modal-toggle="authentication-modal"
  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
>
  Proses
</button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            valuesmodal : true,
            showAddAddress: null,
            addAddress: {
                id: null,
                address: null,
                postal_code: null,
                country: null,
                state: null, 
                city: null, 
                phone: null
            },
        }
    },
    computed: {
        ...mapState('checkout', ['address', 'countries', 'states', 'cities'])
    },
    methods: {

      async submit() {
          const alamat = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                password: this.password,
                confirm_password: this.confirm_password
            };
        },

        ...mapActions('checkout', ['fetchAddress']),
        ...mapActions('checkout', ['fetchAllCountries']),
        ...mapActions('checkout', ['fetchAllStates']),
        ...mapActions('checkout', ['fetchAllCities']),
       
        modalshow(){
         this.valuesmodal = false
        },
        tutup(){
         this.valuesmodal = true
        }
    },
    beforeMount() {
        this.fetchAddress();
        this.fetchAllCountries();
    },
    created() {
    },
    setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 0)
            } catch (error) {
                console.log(error)
            }
        })
    },
}
</script>
<style>
input[type="radio"]:checked + span {
  display: block;
}
</style>

<!-- // shiping adres
biling adress
delivery option
payment -->
