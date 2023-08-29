<template>


  <body>
    <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/10">
            <div class="pt-12 md:pt-0 2xl:ps-7 " style="width: 350px;">
                <h2 class="text-xl font-bold">Order Summary
                </h2>
                <div class="mt-8">
                    <div class="flex flex-col space-y-4">
                      
                       
<center>
  <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flow-root">
         <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
             <li class="py-3 sm:py-4" v-for="item in getcart.cart_items.data" :key="item.id">
                 <div class="flex items-center space-x-4">
                     <div class="flex-shrink-0">
                         <img class="w-8 h-8 rounded-full" src="https://disk.mediaindonesia.com/files/news/2022/12/30/WhatsApp%20Image%202022-12-22%20at%2017.06.28.jpg" alt="Neil image">
                     </div>
                     <div class="flex-1 min-w-0">
                         <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                             {{ item.name }}
                         </p>
                         <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Stock : {{ item.stock }}
                         </p>
                     </div>
                     <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       {{ item.regular_price*item.qty }}
                     </div>
                 </div>
             </li>
   
         </ul>
    </div>
   </div>
</center>


                    </div>
                </div>
                <div class="flex p-4 mt-4">
                    <h2 class="text-xl font-bold">ITEMS 2</h2>
                </div>
            </div>
        </div>
          <div class="px-4 w-full xl:max-w-7xl xl:mx-auto">
            <button v-if="showdev == false" @click="show" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Tambah Alamat
            </button>
            <button v-if="showdev == true"  @click="tutupshow" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Close
            </button>
            

            <div v-show="showdev == true">
                <form @submit.prevent="tambah">
                 <div class="flex flex-col">
                   <div class="p-5 rounded-xl bg-white dark:bg-slate-900 sm:w-[620px] my-auto sm:mx-auto">
                       <h2 class="text-center font-semibold text-lg mb-6">Tambah Alamat</h2>
                       <div>
                           <div class="mb-6">
                               <label for="address"
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
     
                       </div>
     
                       <div class="flex justify-end">
                           <button
                               class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                               Tambah Alamat
                           </button>
                       </div>
                       <!-- {{ addAddress }} -->
                   </div>
               </div>
                </form>
            </div>
   
   
           <form v-show="showdev == false" @submit.prevent="orderadd">
             <h2 class="text-center text-2xl my-4 font-semibold">Checkout</h2>
             <div v-if="!!address" class="my-6">
               <h2 class="font-semibold text-lg">Alamat Pengiriman</h2>
               <div class="">
                 <div
                   class=""
                   v-for="addressData in address"
                   :key="addressData.id"
                 >
                   <input
                     v-model="shipping_address_id"
                     type="radio"
                     name="shipping_address_id"
                     :id="'shipping_address_' + addressData.id"
                     :value="addressData.id"
                     class="hidden"
                   />
                   <label :for="'shipping_address_' + addressData.id">
                     <div
                       class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                       :class="{
                         'border-4': shipping_address_id == addressData.id,
                         'border-blue-400': shipping_address_id == addressData.id,
                         'dark:border-blue-600':
                           shipping_address_id == addressData.id,
                         'bg-blue-600': shipping_address_id == addressData.id,
                         'bg-opacity-20': shipping_address_id == addressData.id,
                       }"
                     >
                       <div>
                         {{ addressData.address }}, {{ addressData.postal_code }}
                         <br />
                         {{ addressData.city }}, {{ addressData.state }},
                         {{ addressData.country }} <br />
                         {{ addressData.phone }}
                       </div>
                     </div>
                   </label>
                 </div>
               </div>
             </div>
   
             <div v-if="!!address" class="my-6">
               <h2 class="font-semibold text-lg">Alamat Penagihan</h2>
               <div class="">
                 <div
                   class=""
                   v-for="addressData in address"
                   :key="addressData.id"
                 >
                   <input
                     v-model="billing_address_id"
                     type="radio"
                     name="billing_address"
                     :id="'billing_address_' + addressData.id"
                     :value="addressData.id"
                     class="hidden"
                   />
                   <label :for="'billing_address_' + addressData.id">
                     <div
                       class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                       :class="{
                         'border-4': billing_address_id == addressData.id,
                         'border-blue-400': billing_address_id == addressData.id,
                         'dark:border-blue-600':
                           billing_address_id == addressData.id,
                         'bg-blue-600': billing_address_id == addressData.id,
                         'bg-opacity-20': billing_address_id == addressData.id,
                       }"
                     >
                       <div>
                         {{ addressData.address }}, {{ addressData.postal_code }}
                         <br />
                         {{ addressData.city }}, {{ addressData.state }},
                         {{ addressData.country }} <br />
                         {{ addressData.phone }}
                       </div>
                     </div>
                   </label>
                 </div>
               </div>
             </div>
             <div class="flex flex-col"></div>
             <div class="my-6">
               <h2 class="font-semibold text-lg">Opsi Pengiriman</h2>
               <div class="">
                 <div class="">
                   <input
                     v-model="delivery_type"
                     type="radio"
                     name="delivery_type"
                     id="standard"
                     value="standard"
                     class="hidden"
                   />
                   <label for="standard">
                     <div
                       class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                       :class="{
                         'border-4': delivery_type == 'standard',
                         'border-blue-400': delivery_type == 'standard',
                         'dark:border-blue-600': delivery_type == 'standard',
                         'bg-blue-600': delivery_type == 'standard',
                         'bg-opacity-20': delivery_type == 'standard',
                       }"
                     >
                       <div>
                         <h2 class="font-semibold text-lg">Standard</h2>
                       </div>
                     </div>
                   </label>
                 </div>
                 <div class="">
                   <input
                     v-model="delivery_type"
                     type="radio"
                     name="delivery_type"
                     id="express"
                     value="express"
                     class="hidden"
                   />
                   <label for="express">
                     <div
                       class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                       :class="{
                         'border-4': delivery_type == 'express',
                         'border-blue-400': delivery_type == 'express',
                         'dark:border-blue-600': delivery_type == 'express',
                         'bg-blue-600': delivery_type == 'express',
                         'bg-opacity-20': delivery_type == 'express',
                       }"
                     >
                       <div>
                         <h2 class="font-semibold text-lg">Express</h2>
                       </div>
                     </div>
                   </label>
                 </div>
               </div>
             </div>
             <div class="my-6">
               <h2 class="font-semibold text-lg">Opsi Pembayaran</h2>
               <div class="flex flex-wrap">
                 <div class="">
                   <input
                     v-model="payment_type"
                     type="radio"
                     name="payment_type"
                     id="cash_on_delivery"
                     value="cash_on_delivery"
                     class="hidden"
                   />
                   <label for="cash_on_delivery">
                     <div
                       class="m-3 border dark:border-gray-600 p-4 rounded-lg"
                       :class="{
                         'border-4': payment_type == 'cash_on_delivery',
                         'border-blue-400': payment_type == 'cash_on_delivery',
                         'dark:border-blue-600':
                           payment_type == 'cash_on_delivery',
                         'bg-blue-600': payment_type == 'cash_on_delivery',
                         'bg-opacity-20': payment_type == 'cash_on_delivery',
                       }"
                     >
                       <div class="w-full flex">
                         <img
                           class="w-28 mx-auto"
                           src="https://5minvideo.id/images/cod-logo.png"
                           alt="Cash on Delivery"
                         />
                       </div>
                       <div>
                         <h2 class="font-semibold text-lg">Cash on Delivery</h2>
                       </div>
                     </div>
                   </label>
                 </div>
               </div>
             </div>
             <div class="flex flex-wrap" v-if="cart.cart_items">
               <div class="border p-2 bg-gray-200 dark:bg-gray-900"
               style="background: orange; color: white;">
                 Jumlah yang harus dibayar
               </div>
               <div class="border p-2 bg-gray-100 dark:bg-gray-800"
               style="background: blue; color: white;">
                 {{ "Rp. " + totalPrice(cart.cart_items.data) }}
               </div>
             </div>
             <div class="my-4">
               <button
                 type="submit" style="width: 100%;"
                 class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                 Pesan sekarang
               </button>
             </div>
           </form>
           <!-- {{ cart_item_ids }} -->
         </div>
            
        </div>
    </div>
</body>

  <div class="dark:text-white">
    <div class="flex flex-col">
      <div class="flex flex-col">




        <button  v-show="showdev == false" @click="show">
          Submit
        </button>


      </div>
   
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      showdev : false,
      showAddAddress: null,

      addAddress: {
        id: null,
        address: null,
        postal_code: null,
        country: null,
        state: null,
        city: null,
        phone: null,
      },
      // form data
      shipping_address_id: null,
      billing_address_id: null,
      delivery_type: "",
      payment_type: "",
      // cart_item_ids: [],
      transactionId: null,
      receipt: null,
    };
  },
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["getcart"]),
    ...mapState("checkout", [
      "address",
      "countries",
      "states",
      "cities",
      "cart_item_ids",
    ]),
  },
  methods: {
    ...mapActions("checkout", [
      "fetchAddress",
      "fetchAllCountries",
      "fetchAllStates",
      "fetchAllCities",
      "fetch_cart_item_ids",
      "order",
      "addalamat",
    ]),

    tambah(){
     this.addalamat(this.addAddress)
    },
    show(){
      this.showdev = true
    },
     tutupshow(){
      this.showdev = false
    },
    totalPrice(param) {
      let total = 0;
      param.forEach((e) => {
        total += e.regular_price * e.qty;
      });

      return total;
    },
    orderadd() {
      this.order({
        shipping_address_id: this.shipping_address_id,
        billing_address_id: this.billing_address_id,
        delivery_type: this.delivery_type,
        payment_type: this.payment_type,
        cart_item_ids: this.cart_item_ids,
        transactionId: this.transactionId,
        receipt: this.receipt,
      });
    },
  },
  beforeMount() {
    this.fetchAddress();
    this.fetchAllCountries();
    this.fetch_cart_item_ids();
  },
  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 0);
      } catch (error) {
        console.log(error);
      }
    });
  },
};
</script>
