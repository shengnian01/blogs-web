<template>
 <div class="content">
   <div class="adv">
     <template>
       <el-carousel>
         <el-carousel-item v-for="item in img" :key="item">
           <el-image :src="item" style="width: 100%;height: 100%;"></el-image>
         </el-carousel-item>
       </el-carousel>
     </template>
   </div>
   <contented></contented>
   <h1>kjklk</h1>
 </div>
</template>

<script>
  import contented from '../../components/content.vue'
  export default {
    components: {
      contented
    },
    data() {
      return {
        activeIndex: '1',
        input: '',
        search_input: false,
        img: ['http://zhangshengnian.xyz/40d2d27aef5bb881dc094bd509c2dbca.jpg',
          'http://zhangshengnian.xyz/3ac984589ce189cb95a5e47cc2088f34.jpg',
          'http://zhangshengnian.xyz/d92f88c3617b1d8a0cf09aa9bbca2a27.jpeg',
          'http://zhangshengnian.xyz/6f7c5b7f51d2eb91668dc71831d61a37.jpeg',
          'http://zhangshengnian.xyz/9a752a10213a24cf2fd74e0ab387e781.jpeg'
        ],
      }
    },
    methods: {
  //     handleSelect(key, keyPath) {
  //       console.log(key, keyPath);
  //       if (key == 9) {
  //         this.search_input = true;

  //       } else {
  //         this.search_input = false;
  //       }
  //     },
  //     search() {
  //       console.log(111)
  //       // console.log(input)
  //       adminaudit().then(response => {
  //         console.log(response.data)
  //       })
  //     },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }

    }
  }
</script>

<style>
  .content {
    margin-left: 42px;
    margin-right: 42px;
    background-color: #0000FF;
  }

  .adv {
    height: 300px;
    width: 860px;
    background-color: #0086B3;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
