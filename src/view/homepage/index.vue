<template>
	<div class="hello">
		<div class="container">
			<a href="/">
				<h1 class="title">
					<span style="font-size: 50px;">静曦</span>
					<span>张生念的个人博客</span>
				</h1>
			</a>
		</div>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
		 text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="1" style="margin-left: 62px;">首页</el-menu-item>
			<el-submenu index="2">
				<template slot="title">技术杂谈</template>
				<el-menu-item index="2-1">Java</el-menu-item>
				<el-menu-item index="2-2">Python</el-menu-item>
				<el-menu-item index="2-3">HTML</el-menu-item>
				<el-menu-item index="2-4">JS</el-menu-item>
				<el-menu-item index="2-5">Other</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">生活笔记</template>
				<el-menu-item index="3-1">个人随笔</el-menu-item>
				<el-menu-item index="3-2">个人日记</el-menu-item>
				<el-menu-item index="3-3">个人展示</el-menu-item>
			</el-submenu>
			<el-menu-item index="4">福利专区</el-menu-item>
			<el-menu-item index="5">给我留言</el-menu-item>
			<el-menu-item index="6">赞助作者</el-menu-item>
			<el-menu-item index="7">技术交流</el-menu-item>
			<el-menu-item index="8">项目合作</el-menu-item>
			<el-menu-item index="9" style="float: right;margin-right: 62px;"><svg class="icon" aria-hidden="true">
				<use xlink:href="#iconsousuo"></use>
			</svg></el-menu-item>
		</el-menu>
		<div class="welcome"><svg class="icon hint" aria-hidden="true">
				<use xlink:href="#iconshengyin"></use>
			</svg>
			<span style="color: #666666;margin-top: 10px;">欢迎来访~</span>
			<span style="float: right;">
				<el-input v-show="search_input" v-model="input" @change="search" ></el-input>
				<i v-show="!search_input" style="margin-top: 10px;" class="el-icon-user-solid" ></i>
				<span v-show="!search_input" style="color:rgb(69,133,245);margin-top: 10px;margin-right: 18px;">投稿</span>
			</span>
			</div>
			<div class="content">
				<div class="adv">
          <template>
            <el-carousel >
              <el-carousel-item  v-for="item in img" :key="item">
                <el-image :src="item" style="width: 100%;height: 100%;"></el-image>
              </el-carousel-item>
            </el-carousel>
          </template>
        </div>
				<contented></contented>
				<h1>kjklk</h1>
			</div>


	</div>
</template>
<script>
	import {adminaudit} from '@/api/homepage'
	import contented from '../../components/content.vue'
	export default {
		components:{
			contented
		},
		data() {
			return {
				activeIndex: '1',
				input:'',
				search_input:false,
        img:['http://zhangshengnian.xyz/40d2d27aef5bb881dc094bd509c2dbca.jpg',
        'http://zhangshengnian.xyz/3ac984589ce189cb95a5e47cc2088f34.jpg',
        'http://zhangshengnian.xyz/d92f88c3617b1d8a0cf09aa9bbca2a27.jpeg',
        'http://zhangshengnian.xyz/6f7c5b7f51d2eb91668dc71831d61a37.jpeg',
        'http://zhangshengnian.xyz/9a752a10213a24cf2fd74e0ab387e781.jpeg'],
			}
		},
		methods: {
		      handleSelect(key, keyPath) {
		        console.log(key, keyPath);
				if(key==9){
					this.search_input=true;

				}else{
					this.search_input=false;
				}
		      },
			  search(){
				  console.log(111)
				  // console.log(input)
				  adminaudit().then(response => {
				    console.log(response.data)
				  })
			  },
        handleSelect(key, keyPath) {
                console.log(key, keyPath);
              }

		    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
	.hint{
		/* margin-left: 18px;
		margin-top: 10px; */
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		margin-left: 18px;
		margin-top: 10px;
			}

	h1 {
		text-align: center;
		color: white;
	}

	a {
		text-decoration: none;
	}

	.container {
		height: 108px;
		background-color: rgb(213, 100, 100);
		margin-left: 0px;
		margin-top: 0px;
		width: 100%;
		padding: 20px;

	}

	.title {
		margin-top: 30px;
	}

	.el-menu-demo {
		font-family: "blackadder itc";
		font-weight: 800;
		font-size: x-large;
	}

	.welcome {
		background-color: white;
		height: 40px;
		margin-left: 62px;
		margin-right: 62px;
	}
	.content{
		margin-left: 62px;
		margin-right: 62px;
		background-color: #0000FF;
	}
	.adv{
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
