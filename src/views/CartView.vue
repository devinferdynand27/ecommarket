<template>

  <div v-if="getcart.cart_items.data.length == 0">
    <br>
    <center>
      <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        <span class="font-medium">Barang Tidak Ada</span>  Masukan Barang Belanjaan Anda Sekarang
      </div>
    </center>
     <center>
      <img src="../assets/nobarang.png" style="width: 40%;">
     </center>
  <center>
    <br>
    <button @click="belanja"  style="background: orange;" type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Yuk Belanja Sekarang</button>
  </center>
  </div>

  <div class="container mx-auto px-4 py-8">
    <center>
      <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span class="font-medium">Keranjang</span> Keranjang Anda Yuk Segara Checkout dan Beli Sekarang
      </div>
    </center>
    <div class="mt-8">
        <div v-for="carts in getcart.cart_items" :key="carts.cart_id">
          <div   v-for="allcart in carts"
          :key="allcart.cart_id" class="flex flex-wrap  md:flex-row border-b border-gray-400 py-4">
            <div class="flex-shrink-0">
                <img src="https://picsum.photos/id/237/150/150" style="border-radius: 20px;" alt="Product image" class="w-32 h-32 object-cover">
            </div>
            <div class="mt-4 md:mt-0 md:ml-6 pl-4">
                <h2 class="text-lg font-bold">{{allcart.name}}</h2>
                <p class="mt-2 text-gray-600">stok : {{allcart.qty}}</p>
                <div class="mt-4 flex items-center">
                    <span class="mr- text-gray-600">Quantity:</span> &nbsp; &nbsp; &nbsp;
                    <div class="flex items-center">
                      &nbsp;
                      <button style="border: 1px solid orange;"
                        class="border rounded-md py-2 px-4 mr-2"
                        v-on:click="editkuantiti({cart_id: allcart.cart_id , type:'minus'})"
                      >
                        -
                      </button>
                      <span vclass="text-center w-8" >{{
                         allcart.qty+counter
                      }}</span>
                      <button style="border: 1px solid orange;"
                        class="border rounded-md py-2 px-4 ml-2"
                        v-on:click="editkuantiti({cart_id: allcart.cart_id , type:'plus'})"
                      >
                        +
                      </button>
                    </div>
                </div><br>
                <span style="float: right;" class="ml-auto font-bold ">Rp . {{allcart.regular_price*allcart.qty}}</span>
            </div>
             <span style="padding-left: 50%;"> <br> <button @click="deletecart(allcart.cart_id)"
              style="background: orange; color: white; width: 120px;"
              class="bg-transparentfont-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
            >
              Hapus
            </button></span>
        </div>
        </div>
    </div>
    
    <div v-if="getcart.cart_items.data.length != 0" class="flex justify-end items-center mt-8">
      <button type="button" @click="checkout" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style="width: 100%; background: green;">Beli Sekarang</button>
        <span class="text-gray-600 mr-4">Subtotal:</span>
        <span class="text-xl font-bold">{{ show(getcart.cart_items) }}</span>
    </div>
</div>
</template>
<script>
import checkout from "@/store/modules/checkout";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      counter: 0,
      pilihs :[],
      pilihiid : "",
    };
  },
  computed: {
    ...mapGetters("cart", ["getcart"]),
    ...mapGetters('checkout',['getaddress'])
  },
  methods: {
    ...mapActions('cart',['deletecart','editkuantiti','belicheckout']),
    show(items){
      let total = 0
       items.data.forEach(element => {
            total += element.regular_price * element.qty
      });
      return total
    },
    belanja(){
      this.$router.push('/');
    },
    checkout(){
      this.$router.push('/checkout');
    }
  },
};
</script>
