webpackJsonp([1],{"2IjT":function(t,e){},"9fS8":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("GQaK"),o={data:function(){return{chosedBrand:"all"}},computed:{brandList:function(){return this.$store.getters.brandList}},methods:{changeBrand:function(t){var e=this.$route.name,s=this.$route.params.brandId;"brandDetail"==e&&s==t||"all"==e&&"all"==t||("all"==t?this.$router.push({name:"all"}):this.$router.push({name:"brandDetail",params:{brandId:t}}),this.chosedBrand=t,console.log(this.chosedBrand))},init_sc:function(){var t=this;this.$nextTick(function(){t.scroll=new a.a(t.$refs.wrapper,{click:!0,preventDefault:!1})})}},watch:{brandList:function(t){t.length&&(this.scroll&&this.scroll.destroy(),this.init_sc())},$route:function(t){var e=t.params.brandId;this.chosedBrand=e||"all"}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-wrapper"},[s("div",{staticClass:"all-button",on:{click:function(e){t.changeBrand("all")}}},[s("span",{class:{"active-brand":"all"==t.chosedBrand}},[t._v("全部")])]),t._v(" "),s("div",{ref:"wrapper",staticClass:"bs-wrapper"},[t.brandList.length?s("ul",{staticClass:"brand-list content"},[s("li",{staticClass:"item-area"},[t._v("品牌区")]),t._v(" "),t._l(t.brandList,function(e){return s("li",{class:{"active-brand":t.chosedBrand==e.brandId},on:{click:function(s){t.changeBrand(e.brandId)}}},[t._v(t._s(e.brandName))])})],2):t._e()]),t._v(" "),s("button",{staticClass:"join-btn"},[t._v("我要入驻")])])},staticRenderFns:[]};var c=s("VU/8")(o,i,!1,function(t){s("9fS8")},null,null).exports,r={components:{"brand-list":c},watch:{$route:function(t){console.log("route",t)}},created:function(){var t=this.$store.state.sellerList;console.log("获取商家列表 home",t),t.length||this.$store.dispatch("getSellerList")}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"main"}}),this._v(" "),e("router-view",{attrs:{name:"nav"}})],1)},staticRenderFns:[]};var d=s("VU/8")(r,l,!1,function(t){s("d6J5")},null,null).exports,h=s("/ocq"),u=s("mtWM"),p=s.n(u),g=s("NYxO");n.a.use(g.a);var f=new g.a.Store({state:{sellerData:null,seller:"all",sellerList:[],sellerDetail:[]},getters:{brandList:function(t){var e=t.seller,s=t.sellerDetail;if("all"==e&&s&&s.length){console.log("seller为all");var n=[];return s.forEach(function(t){n=n.concat(t.brands)}),n}return"all"!==e&&s&&s.length?(console.log("seller 为",e),s.filter(function(t){return t.sellerId==e})[0].brands):[]},seriesList:function(t,e){return function(t){var s=e.brandList;return s.length?s.filter(function(e){return e.brandId==t})[0].seriesList:[]}}},mutations:{getSellerInfo:function(t,e){t.sellerData=e,console.log(t.sellerData)},setSellerList:function(t,e){t.sellerList=e},setSellerDetail:function(t,e){t.sellerDetail=e},setSeller:function(t,e){t.seller=e}},actions:{getSellerList:function(t){t.commit,t.state;return new Promise(function(t,e){m({url:"/sellerList"}).then(function(t){return console.log("获取商家列表",t),f.commit("setSellerList",t.data.sellerList),t.data.sellerList}).catch(function(t){console.log("获取商家列表失败！",t)}).then(function(t){return console.log("actions res",t),e=t,console.log("detail 开始"),p.a.all((s=e,s.map(function(t){return m({url:"/seller/"+t})}))).then(p.a.spread(function(){for(var t=arguments.length,e=Array(t),s=0;s<t;s++)e[s]=arguments[s];var n=e.map(function(t){return t.data});f.commit("setSellerDetail",n),console.log("sellerDetail",f.state.sellerDetail)})).catch(function(t){console.log("all 错误",t)});var e,s})})}}}),m=p.a.create({baseURL:"http://api.lm2ar.com/api",timeout:15e3});function v(t){return console.log("params",t),m({url:"/products",params:t})}m.interceptors.response.use(function(t){var e=t.data;return e.code>300?Promise.reject(e.msg):t.data},function(t){return console.log("err"+t),Promise.reject(t)});var C={props:["seriesId","brandId"],data:function(){return{onSpaceChosing:!1,onCategoryChosing:!1,onSpaceChosed:!1,onCategoryChosed:!1,gettingPages:!1,total:0,curPage:0,pageY:0,onloadingPage:!1,categorys:[],spaces:[],products:[],perPage:30,chosedSpace:"all",chosedCategory:"all",_scroll:""}},created:function(){console.log("selectlist created",this.conditions),this.getSelectList(this.conditions)},methods:{toggleSpace:function(){this.onCategoryChosing=!1,this.onSpaceChosing?this.onSpaceChosing=!1:this.onSpaceChosed?(this.onSpaceChosed=!1,this.changeSpace("all")):this.onSpaceChosing=!0},toggleCategory:function(){this.onSpaceChosing=!1,this.onCategoryChosing?this.onCategoryChosing=!1:this.onCategoryChosed?(this.onCategoryChosed=!1,this.changeCategory("all")):this.onCategoryChosing=!0},getSelectList:function(t){var e=this,s=this;v(t).then(function(t){s.total=+t.data.total,s.curPage=+t.data.page;var n=t.data.spaces,a=t.data.categorys;s.categorys=a,s.spaces=n,s.products=t.data.products,console.log("select products",e.products),e.init_select_scroll(!1)}).catch(function(t){console.log("获取数据失败",t)})},getNextPage:function(t){var e=this,s=this;v(t).then(function(t){console.log(t.data),s.total=+t.data.total,s.curPage=+t.data.page,s.onloadingPage=!1;var n=t.data.products;s.products=s.products.concat(n),e.init_select_scroll(!0)}).catch(function(t){console.log("获取数据失败",t)})},loadNewPage:function(){if(this.moreData){var t=this.conditions,e={};Object.keys(t).forEach(function(s){e[s]="page"==s?t[s]+1:t[s]}),this.getNextPage(e)}},changeSpace:function(t){this.chosedSpace=t,this.curPage=0,this.getSelectList(this.conditions)},changeCategory:function(t){this.chosedCategory=t,this.curPage=0,this.getSelectList(this.conditions)},spaceChose:function(t){this.onSpaceChosing=!1,"all"!==t&&(this.onSpaceChosed=!0),this.changeSpace(t)},categoryChose:function(t){this.onCategoryChosing=!1,"all"!==t&&(this.onCategoryChosed=!0),this.changeCategory(t)},init_select_scroll:function(t){var e=this,s=this;this.$nextTick(function(){e._scroll?t?e._scroll.refresh():(e._scroll.destroy(),e._scroll=new a.a(e.$refs.select_wrapper,{click:!0,bounce:!1,momentum:!1,probeType:2}),e._scroll.on("scroll",function(t){s.moreData&&!s.onloadingPage&&e._scroll.y-100<s._scroll.maxScrollY&&(s.onloadingPage=!0,s.loadNewPage())})):(e._scroll=new a.a(e.$refs.select_wrapper,{click:!0,bounce:!1,momentum:!1,probeType:2}),e._scroll.on("scroll",function(t){s.moreData&&!s.onloadingPage&&e._scroll.y-100<s._scroll.maxScrollY&&(s.onloadingPage=!0,s.loadNewPage())}))})}},computed:{moreData:function(){return this.products.length<this.total},selectList:function(){return this.$store.state.selectList},spaceList:function(){return this.$store.state.spaceList},categoryList:function(){return this.$store.state.categoryList},seller:function(){return this.$store.state.seller},conditions:function(){var t=this.perPage,e=this.curPage,s=this.seriesId,n=this.brandId,a=this.$store.state.seller,o=this.chosedCategory,i=this.chosedSpace,c={};return c.perPage=t,c.page=e,s&&(c.seriesId=s),n&&(c.brandId=n),"all"!==a&&(c.sellerId=a),"all"!==o&&(c.categoryId=o),"all"!==i&&(c.spaceId=i),c}},watch:{seller:function(t){this.onSpaceChosing=!1,this.onCategoryChosing=!1,this.onSpaceChosed=!1,this.onCategoryChosed=!1,this.gettingPages=!1,this.total=0,this.curPage=1,this.onloadingPage=!1,this.categorys=[],this.spaces=[],this.products=[],this.perPage=30,this.chosedSpace="all",this.chosedCategory="all",this.getSelectList(this.conditions)}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select-wrapper"},[s("div",{staticClass:"select-btn"},[s("div",{staticClass:"space-btn",class:{"active-select":t.onSpaceChosing,"condition-chosed":t.onSpaceChosed},on:{click:t.toggleSpace}},[t._v("空间\n    ")]),t._v(" "),s("div",{staticClass:"category-btn",class:{"active-select":t.onCategoryChosing,"condition-chosed":t.onCategoryChosed},on:{click:t.toggleCategory}},[t._v("品类\n    ")])]),t._v(" "),s("div",{ref:"select_wrapper",staticClass:"select-list-wrapper"},[s("ul",{staticClass:"select-list"},t._l(t.products,function(e){return s("li",{staticClass:"select-item"},[s("img",{attrs:{src:e.avatar,alt:""}}),t._v(" "),s("span",[t._v(t._s(e.productName))])])}))]),t._v(" "),s("div",{staticClass:"space-wrapper select-conditions",class:{"active-conditions":t.onSpaceChosing}},[s("ul",{staticClass:"condition-list"},[s("li",{staticClass:"condition-item",class:{"chosed-codition-item":"all"===t.chosedSpace},on:{click:function(e){t.spaceChose("all")}}},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"condition-name"},[t._v("全部")])]),t._v(" "),t._l(t.spaces,function(e){return s("li",{staticClass:"condition-item",class:{"chosed-codition-item":t.chosedSpace===e.spaceId},on:{click:function(s){t.spaceChose(e.spaceId)}}},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"condition-name"},[t._v(t._s(e.spaceName))])])}),t._v(" "),s("li",{staticClass:"condition-item",class:{"chosed-codition-item":""===t.chosedSpace},on:{click:function(e){t.spaceChose("")}}},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"condition-name"},[t._v("其它")])])],2)]),t._v(" "),s("div",{staticClass:"category-wrapper select-conditions",class:{"active-conditions":t.onCategoryChosing}},[s("ul",{staticClass:"condition-list"},[s("li",{staticClass:"condition-item",class:{"chosed-codition-item":"all"===t.chosedCategory},on:{click:function(e){t.categoryChose("all")}}},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"condition-name"},[t._v("全部")])]),t._v(" "),t._l(t.categorys,function(e){return s("li",{staticClass:"condition-item",class:{"chosed-codition-item":t.chosedCategory===e.categoryId},on:{click:function(s){t.categoryChose(e.categoryId)}}},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"condition-name"},[t._v(t._s(e.categoryName))])])}),t._v(" "),s("li",{staticClass:"condition-item",class:{"chosed-codition-item":""===t.chosedCategory},on:{click:function(e){t.categoryChose("")}}},[s("span",{staticClass:"icon"}),t._v(" "),s("span",{staticClass:"condition-name"},[t._v("其它")])])],2)]),t._v(" "),s("div",{attrs:{id:"more"},on:{click:t.loadNewPage}},[t._v(t._s(t.moreData?"加载更多":"无更多数据")+","+t._s(t.onloadingPage?"正在加载":"没有加载"))])])},staticRenderFns:[]};var y=s("VU/8")(C,_,!1,function(t){s("riVf")},null,null).exports,S={props:["brandId"],data:function(){return{}},computed:{seriesList:function(){return this.$store.getters.seriesList(this.brandId)}},methods:{changeSeries:function(t){this.$router.push({name:"seriesDetail",params:{seriesId:t,brandId:this.brandId}})},init_serieScroll:function(){var t=this;this.$nextTick(function(){t.scroll=new a.a(t.$refs.wrapper,{click:!0})})}},watch:{seriesList:function(t){t.length&&this.init_serieScroll()}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"wrapper",staticClass:"series-wrapper"},[s("ul",{},t._l(t.seriesList,function(e){return s("li",{staticClass:"series-card",on:{click:function(s){t.changeSeries(e.seriesId)}}},[s("img",{attrs:{src:e.avatar,alt:""}}),t._v(" "),s("span",{staticClass:"series-name"},[t._v(t._s(e.seriesName))])])}))])},staticRenderFns:[]};var w=s("VU/8")(S,b,!1,function(t){s("ysQY")},null,null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var P=s("VU/8")({},L,!1,function(t){s("xSPW")},null,null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var $=s("VU/8")({},I,!1,function(t){s("2IjT")},null,null).exports;n.a.use(h.a);var k={base:"/modules/main",routes:[{path:"/",redirect:"/home"},{path:"/home",components:{main:$,nav:c},children:[{path:"",name:"all",component:y},{path:":brandId",component:P,props:!0,children:[{path:"",name:"brandDetail",component:w,props:!0},{path:":seriesId",name:"seriesDetail",component:y,props:!0}]}]}]},D=new h.a(k);n.a.config.productionTip=!1,n.a.prototype.$http=p.a,window.setSellerId=function(t){t!==f.state.seller&&(f.commit("setSeller",t),D.push("/home/"))},new n.a({el:"#app",router:D,store:f,template:"<App/>",components:{App:d}}),D.push("/home")},d6J5:function(t,e){},riVf:function(t,e){},xSPW:function(t,e){},ysQY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a00c5a953d4c8c5cac82.js.map