<template>
    <center> 
        <div class="container">
          <b  style="float: left; padding-left: 30px;">Kategori</b>
          <router-link to="/category">
            <a style="float: right; padding-right: 30px;"> Semua Kategori &nbsp; <i class="bi bi-arrow-right-square-fill"></i> </a>
          </router-link>
        </div>
        <br>  <br>
        <div class="container">
          <div class="flex flex-col " data-controller="slider">
            <div class="flex overflow-x-scroll  no-scollbar" data-slider-target="scrollContainer">
              <div v-for="item in getKategoriHome" :key="item.name" class="px-4 flex-shrink-0" data-slider-target="image">
                <img style="width: 150px; border-radius: 20px;" :src="item.banner" />
              </div>
            </div>
          </div>
        </div>
      </center>
</template>
<script>
import { onMounted } from "vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("category", ["getKategori"]),
  },
  mounted() {
    this.$store.dispatch("category/fetchKategori");
  },
  setup(props, context) {
      onMounted(() => {
          try {
              context.emit("id-menu", 3)
          } catch (error) {
              console.log(error)
          }
      })
  }
};
</script>
<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  padding-left: 40px;
}
</style>
