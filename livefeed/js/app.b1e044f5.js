(function(e){function t(t){for(var a,i,c=t[0],o=t[1],u=t[2],h=0,d=[];h<c.length;h++)i=c[h],n[i]&&d.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("c21b"),n=s.n(a);n.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._m(0),s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"columns is-mobile is-desktop is-widescreen is-fullhd"},[s("div",{staticClass:"column in-one-half",class:{hidden:e.priceHidden}},[s("ChartComponent")],1),s("div",{staticClass:"column in-one-quarter",class:{hidden:!e.priceHidden}}),s("div",{staticClass:"column in-one-half"},[s("TwitterComponent")],1),s("div",{staticClass:"column in-one-quarter",class:{hidden:!e.priceHidden}})])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header-bar"},[s("img",{staticClass:"logo-img",attrs:{src:"https://p-u.popcdn.net/attachments/images/000/010/730/large/Pizza_Hackathon_Logo.png?1532094493"}}),s("span",{staticClass:"hashtag"},[e._v("#PIZZAHACKATHON")])])}],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"is-fluid"},[s("div",{staticClass:"box"},[s("h3",{staticClass:"price-header"},[e._v("BTC Price - "),s("span",{staticClass:"price"},[e._v(e._s(e.btcCurrentPrice))]),s("span",{staticClass:"price-diff gain",class:{lost:e.btcPercentChange24h<0}},[e._v("("+e._s(e.btcPercentChange24h)+"%)")])]),s("canvas",{attrs:{id:"btc-chart"}})]),s("div",{staticClass:"box"},[s("h3",{staticClass:"price-header"},[e._v("ETH Price - "),s("span",{staticClass:"price"},[e._v(e._s(e.ethCurrentPrice))]),s("span",{staticClass:"price-diff gain",class:{lost:e.ethPercentChange24h<0}},[e._v("("+e._s(e.ethPercentChange24h)+"%)")])]),s("canvas",{attrs:{id:"eth-chart"}})])])},c=[],o=s("8afe"),u=(s("ac6a"),s("96cf"),s("3040")),l=s("5b20"),h=s.n(l),d=s("bc3a"),f=s.n(d),p=!1,b={queryParam:["pizzahackathon","pizzahack","pizzahackaton"],endPoint:"https://pzctwitterapi.afourleaf.com/loadTweets/"},m={endPoint:"https://api.coinmarketcap.com/v2/ticker/",btcMin:6424,btcMax:6425,ethMin:275,ethMax:276},j={isProd:p,twitter:b,chart:m},v=s("c1df"),g=s.n(v),y={name:"ChartComponent",data:function(){return{samples:0,speed:0,timeout:0,values:[],charts:[],value:0,scale:1,btcValues:[],ethValues:[],instance:null,btcMinPrice:j.chart.btcMin,btcMaxPrice:j.chart.btcMax,ethMinPrice:j.chart.ethMin,ethMaxPrice:j.chart.ethMax,btcCurrentPrice:0,ethCurrentPrice:0,btcPercentChange24h:0,ethPercentChange24h:0}},mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.instance=f.a.create({baseURL:j.chart.endPoint,headers:{"Content-Type":"application/json"}}),this.samples=2e3,this.speed=2e3,this.btcValues=this.loadBTCPriceListFromStorage(),0===this.btcValues.length&&this.addEmptyValues(this.btcValues,this.samples),this.updateBTCMinMax(),this.ethValues=this.loadETHPriceListFromStorage(),0===this.ethValues.length&&this.addEmptyValues(this.ethValues,this.samples),this.updateETHMinMax(),this.initialize(),j.isProd?this.runChartPriceProd():this.runChartPriceDev();case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{runChartPriceDev:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<100)){e.next=8;break}return this.advance(),e.next=5,this.sleep(10);case 5:t++,e.next=1;break;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),runChartPriceProd:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.advance(),e.next=3,this.sleep(10);case 3:e.next=0;break;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),initialize:function(){this.charts.push(new h.a(document.getElementById("btc-chart"),{type:"line",data:{datasets:[{data:this.btcValues,backgroundColor:"rgba(255, 99, 132, 0.1)",borderColor:"rgb(255, 99, 132)",borderWidth:2}]},options:{responsive:!0,animation:{duration:.15*this.speed,easing:"linear"},legend:!1,scales:{xAxes:[{type:"time",display:!0}],yAxes:[{ticks:{max:this.btcMaxPrice,min:this.btcMinPrice,maxTicksLimit:10}}]}}}),new h.a(document.getElementById("eth-chart"),{type:"line",data:{datasets:[{data:this.ethValues,backgroundColor:"rgba(0, 71, 187, 0.1)",borderColor:"rgb(0, 71, 187)",borderWidth:2}]},options:{responsive:!0,animation:{duration:.15*this.speed,easing:"linear"},legend:!1,scales:{xAxes:[{type:"time",display:!0}],yAxes:[{ticks:{max:this.ethMaxPrice,min:this.ethMinPrice,maxTicksLimit:10}}]}}}))},addEmptyValues:function(e,t){for(var s=0;s<t;s++)e.push({x:g()().subtract((t-s)*this.speed,"milliseconds").toDate(),y:null})},updateCharts:function(){var e=this;this.charts.forEach(function(t){"btc-chart"===t.canvas.id?(t.config.options.scales.yAxes[0].ticks.max=1.01*e.btcMaxPrice,t.config.options.scales.yAxes[0].ticks.min=.99*e.btcMinPrice):"eth-chart"===t.canvas.id&&(t.config.options.scales.yAxes[0].ticks.max=1.01*e.ethMaxPrice,t.config.options.scales.yAxes[0].ticks.min=.99*e.ethMinPrice),t.update()})},progressBTCPrice:function(){var e=this;this.loadData("1/").then(function(t){var s=t.quotes.USD.price;e.btcValues.push({x:new Date,y:s}),e.btcCurrentPrice=s,e.updateBTCMinMax(),e.btcValues.shift(),e.btcPercentChange24h=t.quotes.USD.percent_change_24h}),this.saveBTCPriceListToStorage()},updateBTCMinMax:function(){this.btcMaxPrice=Math.max.apply(Math,Object(o["a"])(this.btcValues.map(function(e){return e.y}))),this.btcMinPrice=Math.min.apply(Math,Object(o["a"])(this.btcValues.filter(function(e){return null!==e.y&&0!==e.y}).map(function(e){return e.y}))),console.log("btcMaxPrice ".concat(this.btcMaxPrice)),console.log("btcMinPrice ".concat(this.btcMinPrice))},updateETHMinMax:function(){this.ethMaxPrice=Math.max.apply(Math,Object(o["a"])(this.ethValues.map(function(e){return e.y}))),this.ethMinPrice=Math.min.apply(Math,Object(o["a"])(this.ethValues.filter(function(e){return null!==e.y&&0!==e.y}).map(function(e){return e.y}))),console.log("ethMaxPrice ".concat(this.ethMaxPrice)),console.log("ethMinPrice ".concat(this.ethMinPrice))},progressETHPrice:function(){var e=this;this.loadData("1027/").then(function(t){var s=t.quotes.USD.price;e.ethValues.push({x:new Date,y:s}),e.ethCurrentPrice=s,e.updateETHMinMax(),e.ethValues.shift(),e.ethPercentChange24h=t.quotes.USD.percent_change_24h}),this.saveETHPriceListToStorage()},advance:function(){null!==this.values[0]&&this.scale<4&&this.updateCharts(),this.progressBTCPrice(),this.progressETHPrice(),this.updateCharts()},sleep:function(e){return new Promise(function(t){return setTimeout(t,1e3*e)})},loadData:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.instance.get(t);case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),saveBTCPriceListToStorage:function(){localStorage.setItem("BTCPriceList",JSON.stringify(this.btcValues))},saveETHPriceListToStorage:function(){localStorage.setItem("ETHPriceList",JSON.stringify(this.ethValues))},loadBTCPriceListFromStorage:function(){return localStorage.getItem("BTCPriceList")?JSON.parse(localStorage.getItem("BTCPriceList")):[]},loadETHPriceListFromStorage:function(){return localStorage.getItem("ETHPriceList")?JSON.parse(localStorage.getItem("ETHPriceList")):[]}}},P=y,x=(s("6628"),s("2877")),C=Object(x["a"])(P,i,c,!1,null,null,null);C.options.__file="Charts.vue";var w=C.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"is-fluid"},e._l(e.twitterDatas,function(t){return e.twitterDatas?s("div",{key:t.id,staticClass:"box "},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:t.user.profile_image_url_https,alt:"Placeholder image"}})])]),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[e._v(e._s(t.user.name))]),s("p",{staticClass:"subtitle is-6"},[e._v("@"+e._s(t.user.name))])]),s("div",{staticClass:"media-right"},[s("a",{staticClass:"button is-danger",attrs:{href:"#"},on:{click:function(s){e.deleteTweet(t)}}},[e._v("\n                X\n              ")])])]),s("div",{staticClass:"content has-text-left"},[e._v("\n            "+e._s(t.text)+"\n            "),t.entities.urls?s("div",e._l(t.entities.urls,function(e){return s("div",{key:e.expanded_url},[s("youtube",{attrs:{"video-id":e.videosId}})],1)})):e._e(),t.entities.media?s("div",e._l(t.entities.media,function(e){return s("div",{key:e.media_url_https},[s("img",{attrs:{src:e.media_url_https}})])})):e._e(),s("br"),s("time",[e._v(e._s(e._f("formatDate")(t.created_at)))])])]):e._e()}))},_=[],M=s("2ef0"),T=s.n(M),O=s("3d20"),S=s.n(O),z={name:"TwitterComponent",data:function(){return{twitterDatas:[],videosId:null,instance:null,queryString:""}},mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.instance=f.a.create({baseURL:j.twitter.endPoint,headers:{"Content-Type":"application/json"}}),this.prepareQueryString(),j.isProd?this.runTweetProd():this.runTweetDev();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{prepareQueryString:function(){var e=this;T.a.forEach(j.twitter.queryParam,function(t,s,a){e.queryString+="%23"+t,s!==a.length-1&&(e.queryString+="%20OR%20")})},runTweetDev:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<=1)){e.next=8;break}return this.loadTweets(this.instance),e.next=5,this.sleep(10);case 5:t++,e.next=1;break;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),runTweetProd:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loadTweets(this.instance),e.next=3,this.sleep(10);case 3:e.next=0;break;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),loadTweets:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var s,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get(this.queryString);case 2:s=e.sent,this.twitterDatas=s.data.statuses,T.a.forEach(this.twitterDatas,function(e){e.entities.urls&&T.a.forEach(e.entities.urls,function(e){e.videosId=a.$youtube.getIdFromURL(e.expanded_url)})});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),sleep:function(e){return new Promise(function(t){return setTimeout(t,1e3*e)})},deleteTweet:function(e){var t=this;S()({title:"ยืนยันการทำรายการ",type:"warning",showCancelButton:!0,confirmButtonText:"ตกลง",cancelButtonText:"ยกเลิก"}).then(function(s){s.value&&(T.a.remove(t.twitterDatas,function(t){return t.id===e.id}),t.twitterDatas=t.twitterDatas.slice())})}}},E=z,D=Object(x["a"])(E,k,_,!1,null,null,null);D.options.__file="Twitter.vue";var L=D.exports,V={name:"app",components:{ChartComponent:w,TwitterComponent:L},data:function(){return{priceHidden:!0}},methods:{showPrice:function(){this.priceHidden=!1},hidePrice:function(){this.priceHidden=!0}},mounted:function(){var e=this;window.addEventListener("keyup",function(t){49==t.keyCode?e.showPrice():50==t.keyCode&&e.hidePrice()})}},H=V,R=(s("034f"),Object(x["a"])(H,n,r,!1,null,null,null));R.options.__file="App.vue";var B=R.exports,q=s("3fa7"),I=s.n(q),A=(s("8e0a"),s("1fca")),U=s("f6dd");a["a"].config.productionTip=!1,a["a"].use(I.a),a["a"].use(A["a"]),a["a"].use(U["a"]),a["a"].filter("formatDate",function(e){if(e)return g()(String(e)).format("LLL")}),new a["a"]({render:function(e){return e(B)}}).$mount("#app")},6628:function(e,t,s){"use strict";var a=s("6e43"),n=s.n(a);n.a},"6e43":function(e,t,s){},c21b:function(e,t,s){}});
//# sourceMappingURL=app.b1e044f5.js.map