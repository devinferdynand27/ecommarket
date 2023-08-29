<template>
    <h2 style="color: black; padding-left: 100px;" class="text-2xl font-bold tracking-tight text-gray-900"> keranjang    </h2>
 <div class="h-screen bg-white-100 pt-20">
  <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div v-for="carts in getcart.cart_items" :key="carts.cart_id">
          <div
            class="bg-white rounded-lg shadow-md p-6 mb-4"
            v-for="allcart in carts"
            :key="allcart.cart_id"
          >
            <table class="w-full">
              <thead>
                <tr>
                  <th class="text-left font-semibold">produk</th>
                  <th class="text-left font-semibold">Harga</th>
                  <th class="text-left  font-semibold">Jumlah</th>
                  <th class="text-left font-semibold">stock</th>
                  <th class="text-left  font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td class="py-4">
                    <img
                      class="h-16 w-16 mr-4"
                      src="https://via.placeholder.com/150"
                      alt="Product image"
                    />
                    <br />
                    <span class="font-semibold mb-9">
                      {{ allcart.name }}
                    </span>
                  </td>
                  <td class="py-4">{{ allcart.regular_price }}</td>
                  <td class="py-4">
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
                  </td>
                  <td class="py-4"> &nbsp; {{ allcart.stock }}</td>
                  <td class="py-4">
                    <button @click="deletecart(allcart.cart_id)"
                      style="background: orange; color: white"
                      class="bg-transparentfont-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Sub total -->
      <div  class="mt-6 h-full rounded-lg border bg-white p-12 shadow-md md:mt-0 md:w-1/3">
          <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal :  </p>
              <p class="text-gray-700">{{ show(getcart.cart_items) }}</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                  <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                  <p class="text-sm text-gray-700">including VAT</p>
              </div>
          </div>
          <button style="background: orange;" @click="belicheckout"
              class="mt-6 w-full rounded-md bg-slate-800 py-1.5 font-medium text-blue-50 hover:bg-slate-900">Check
              out</button>
      </div>
  </div>
</div>
</template>
<script>
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
  },
};
</script>
