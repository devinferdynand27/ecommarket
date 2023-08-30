<template>
 
  <div v-if="getid.data == undefined">
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
     <section class="text-gray-700 body-font overflow-hidden bg-white">
         <div class="container px-5 py-6 mx-auto">
           <div class="lg:w-4/5 mx-auto flex flex-wrap">
             <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="../assets/produck.jpeg" width="100px">
             <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
               <!-- <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> -->
               <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{getid.data.name}}</h1>
               <br>
               <div class="flex mb-4">
                 <span class="flex items-center">
                   <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                   </svg>
                   <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                   </svg>
                   <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                   </svg>
                   <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                   </svg>
                   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                   </svg>
                   <!-- <span class="text-gray-600 ml-3">4 Reviews</span> -->
                 </span>
               </div>
               <p class="leading-relaxed" >Belanja merupakan pemerolehan barang atau jasa dari penjual dengan tujuan membeli pada waktu itu. Belanja adalah aktivitas pemilihan dan/atau membeli. Dalam beberapa hal dianggap sebagai sebuah aktivitas kesenggangan juga ekonomi.</p>
               <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                
               </div>
               <div class="flex">
                 <span class="title-font font-medium text-2xl text-gray-900">{{getid.data.base_price * counter}}</span>
                 <div class="flex items-center">
                   &nbsp;
                   <button v-on:click="kurang" class="border rounded-md py-2 px-4 mr-2">-</button>
                    <input type="text" v-model="counter" hidden>
                    <span>{{counter}}</span>
                   <button v-on:click="tambah" class="border rounded-md py-2 px-4 ml-2">+</button>
                 </div> &nbsp;
                 <button v-if="token"  @click="addtocart({variation_id : getid.data.variations[0].id,qty:counter})" on class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Keranjang</button>
                 <button v-else  v-on:click="nontifikasi" class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Keranjang</button>
               </div>
               <br><br><br>
             
             </div>
           </div>
         </div>
       </section>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
 data(){
   return{
     counter : 1
     
   }
 },
 props:[
     'slug'
 ],
 mounted() {
     this.$store.dispatch("product/fetchProductById", this.slug)
 },
 computed: {
     ...mapState('product', ['getid']),
     ...mapGetters('auth', ['isAuthenticated']),
     ...mapState('auth',['token']),
 },
 methods:{
   ...mapActions('cart',['addtocart']),
   nontifikasi(){
     alert('Mohon Login terlebih dahulu ');
     this.$router.push('/login/terlebihdahulu/'+this.slug);
   },
   tambah(){
         this.counter++
     },
   kurang(){
       if(this.counter > 1){
             this.counter--;
       }
     }
 },
 setup(props, context) {
        onMounted(() => {
            try {
                context.emit("id-menu", 2)
            } catch (error) {
                console.log(error)
            }
        })
    }
}
</script>



