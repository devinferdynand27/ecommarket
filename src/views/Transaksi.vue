<template>
    <div v-if="user_order.user == undefined && user_order.shipping_address == undefined && user_order.orders == undefined && user_order.billing_address == undefined">
        <center>
            <br /><br /><br /><br />
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </center>
    </div>
    <div v-else>
        <center>
            <br><br>
            <div class="container">
                <img src="https://cdn-icons-png.flaticon.com/512/5253/5253540.png" width="100"><br>
                <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                    <span class="font-medium">Transaksi Success ! </span> Transaksi Anda Berhasil
                </div>
            </div>
        </center>
        <div class="dark:text-white flex flex-col">
            <div class="w-full md:max-w-5xl md:mx-auto">
                <div class="my-5">
                    <div class="grid md:grid-cols-2">
                        <div class="p-4">
                            <div class="grid grid-cols-2 py-3">
                                <div>
                                    <b>
                                        Kode Pesanan :
                                    </b>
                                </div>
                                <div>
                                    <p> {{ order_code }}</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 py-3">
                                <div>
                                    <b>
                                        Nama :
                                    </b>
                                </div>
                                <div>
                                    <p v-if="!!user_order.user">{{user_order.user.name}}</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 py-3">
                                <div>
                                    <b>
                                        Email :
                                    </b>
                                </div>
                                <div>
                                    <p v-if="!!user_order.user">{{user_order.user.email}}</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 py-3">
                                <div>
                                    <b>
                                        Alamat Pengiriman :
                                    </b>
                                </div>
                                <div>
                                    <p v-if="!!user_order.shipping_address">
                                         {{ user_order.shipping_address.address }} ,
                                         {{ user_order.shipping_address.city }} , <br>
                                         {{ user_order.shipping_address.state }}, 
                                         {{ user_order.shipping_address.country }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="grid grid-cols-2 py-3">
                                <div><b> Total Jumlah pesanan : </b></div>
                                <div v-if="!!user_order.orders">
                                    <p v-for="item in user_order.orders" :key="item.id">
                                    <span v-for="items in item.products.data" :key="items.id">
                                        {{ items.name }} , Rp.  {{ items.price }} <br> Total Belanja {{ item.products.data.length }}
                                    </span>
                                    </p>
                               </div>
                            </div>
                            <div class="grid grid-cols-2 py-3">
                                <div><b> Metode Pembayaran : </b></div>
                                <div><p v-if="!!user_order.orders">{{user_order.orders[0].delivery_status}}</p></div>
                            </div>
                            <div class="grid grid-cols-2 py-3">
                                <div><b> Jenis Pengiriman : </b></div>
                                <div><p v-if="!!user_order.orders">{{user_order.orders[0].delivery_type}}</p></div>
                            </div>
                            <div class="grid grid-cols-2 py-3">
                                <div><b> Alamat Penagihan : </b></div>
                                <div v-if="!!user_order.billing_address ">
                                    <p>
                                        {{ user_order.billing_address.address }} ,
                                        {{ user_order.billing_address.city }} , <br>
                                        {{ user_order.billing_address.state }}, 
                                        {{ user_order.billing_address.country }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <center>
       <router-link to="/">
        <button style="background: orange; width: 90%;" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Kembali 
        </button>
       </router-link>
       </center>
    </div>
</template>
<script>
import { mapState , mapActions} from 'vuex'
export default {
    props:['order_code'],
    computed:{
        ...mapState('ordertransaksi', ['user_order']),
    },
    methods:{
        ...mapActions('ordertransaksi', ['fetch_userOrder']),
    },
    mounted(){
        this.fetch_userOrder(this.order_code);
    }
}
</script>