(function(t){function n(n){for(var o,i,a=n[0],c=n[1],u=n[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(n);while(f.length)f.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],o=!0,a=1;a<e.length;a++){var c=e[a];0!==r[c]&&(o=!1)}o&&(s.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},s=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"30db":function(t,n,e){"use strict";var o=e("caf9"),r=e.n(o);r.a},3956:function(t,n,e){"use strict";var o=e("3b52"),r=e.n(o);r.a},"3a4a":function(t,n,e){"use strict";var o=e("5768"),r=e.n(o);r.a},"3b52":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("controls",{attrs:{selectedTorrent:t.selectedTorrent}}),e("transmission",{attrs:{selectedTorrent:t.selectedTorrent}}),e("modal")],1)},s=[],i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"controls",on:{click:function(n){return n.target!==n.currentTarget?null:t.deselectTorrents()}}},[o("div",{staticClass:"status-bar"},[o("div",{staticClass:"vpnStatus indicator"},[t._v("\n      VPN\n      "),o("div",{class:{statusLight:!0,active:"ACTIVE"===t.vpnStatus}})]),t.isLoading?o("div",{staticClass:"loading-indicator indicator"},[o("img",{attrs:{src:e("5c3d"),width:"25"}})]):t._e()]),o("button",{on:{click:function(n){return t.toggleVPN()}}},[t._v("Toggle VPN")]),o("button",{attrs:{disabled:t.disabled},on:{click:function(n){return t.getTVFolder()}}},[t._v("\n    Move to TV Shows\n    "),o("img",{attrs:{src:e("6596"),width:"25"}})]),o("button",{attrs:{disabled:t.disabled},on:{click:function(n){return t.moveMovie()}}},[t._v("\n    Move to Movies\n    "),o("img",{attrs:{src:e("6596"),width:"25"}})]),t.selectedTorrent.id?o("button",{attrs:{disabled:t.disabled},on:{click:function(n){return t.handleStartStop()}}},[t._v("\n    "+t._s(t.playPauseText)+"\n  ")]):t._e()])},a=[],c=(e("7f7f"),e("96cf"),e("3b8d"));function u(t){return l.apply(this,arguments)}function l(){return l=Object(c["a"])(regeneratorRuntime.mark((function t(n){var e,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://".concat("localhost:3000").concat(n));case 2:return e=t.sent,t.next=5,e.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(t,n){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(regeneratorRuntime.mark((function t(n,e){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://".concat("localhost:3000").concat(n),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return o=t.sent,t.next=5,o.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function p(t,n){return h.apply(this,arguments)}function h(){return h=Object(c["a"])(regeneratorRuntime.mark((function t(n,e){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://".concat("localhost:3000").concat(n),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return o=t.sent,t.next=5,o.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}var v={STOPPED:0,CHECK_WAIT:1,CHECK:2,DOWNLOAD_WAIT:3,DOWNLOAD:4,SEED_WAIT:5,SEED:6,ISOLATED:7},m=new o["a"]({data:{selectedTorrent:{id:null},torrents:[]},methods:{getTorrentData:function(){var t=this;u("/torrents").then((function(n){t.torrents=n.torrents,J.$emit("torrentsDidChange",t.torrents)}))}},created:function(){var t=this;this.$on("openModal",(function(t){J.$emit("openEmit",t),console.log(t)})),this.$on("torrentSelect",(function(n){t.selectedTorrent=n,J.$emit("changeSelectedTorrent",n)})),this.$on("torrentListShouldChange",(function(){console.log("torrent list should change"),u("/torrents").then((function(n){console.log("got fresh torrent data"),t.torrents=n.torrents})),J.$emit("torrentsDidChange",t.torrents)})),this.getTorrentData(),setInterval((function(){t.getTorrentData()}),7e3)}}),g={props:["selectedTorrent"],data:function(){return{vpnStatus:"-",playPauseText:"Start",isLoading:!1}},computed:{disabled:function(){return!this.selectedTorrent.id||this.isLoading}},methods:{toggleVPN:function(){var t,n=this;t="ACTIVE"==this.vpnStatus?"stop":"start",d("/vpn",{action:t}).then((function(t){t.success&&(console.log("vpn start: success"),u("/vpn-status").then((function(t){n.vpnStatus=t.status})))}))},deselectTorrents:function(){m.$emit("torrentSelect",{id:null})},openModal:function(){m.$emit("openModal",{msg:"Start torrent"})},getTVFolder:function(){var t=this;d("/guess-tv-show",{torrentName:this.selectedTorrent.name}).then((function(n){console.log("response from /guess-tv-show",n);var e=n.show,o=n.season,r=(n.error,"Move to ".concat(e," - ").concat(o," folder?"));console.log(r),m.$emit("openModal",{msg:r,show:e,season:o,handleConfirm:function(){t.moveTVShow(t.selectedTorrent,e,o)}})}))},moveMovie:function(){var t=this;this.isLoading=!0,d("/move-movie",this.selectedTorrent).then((function(n){console.log(n),n.success&&t.removeFromList(t.selectedTorrent)}))},moveTVShow:function(t,n,e){var o=this;this.isLoading=!0,console.log("Controls will move TV Show"),console.log(t,n,e),d("/move-tv-show",{torrent:t,show:n,season:e}).then((function(t){t.success&&o.removeFromList(o.selectedTorrent)}))},removeFromList:function(t){var n=this;this.isLoading=!0,p("/torrents",{id:t.id}).then((function(t){console.log("removing torrents from list."),console.log(t),m.$emit("torrentListShouldChange"),n.isLoading=!1}))},handleStartStop:function(){d("/pause",{id:this.selectedTorrent.id,action:this.playPauseText.toLowerCase()}).then((function(t){console.log("start/stop response",t),m.$emit("torrentListShouldChange")}))}},watch:{selectedTorrent:{deep:!0,handler:function(t){t.status===v.DOWNLOAD||t.status===v.SEED?this.playPauseText="Stop":this.playPauseText="Start"}}},created:function(){var t=this;u("/vpn-status").then((function(n){t.vpnStatus=n.status})),setInterval((function(){u("/vpn-status").then((function(n){t.vpnStatus=n.status}))}),6e4)}},b=g,T=(e("c386"),e("2877")),w=Object(T["a"])(b,i,a,!1,null,null,null),_=w.exports,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"transmission",on:{click:function(n){return n.target!==n.currentTarget?null:t.deselectTorrents()}}},t._l(t.torrents,(function(n){return e("torrent",{key:n.id,attrs:{torrent:n,selected:t.selectedTorrent.id===n.id}})})),1)},y=[],C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:{torrent:!0,selected:t.selected,paused:0==t.torrent.status},on:{click:function(n){return t.select(t.torrent)}}},[e("div",{staticClass:"inner-container"},[e("p",{staticClass:"name"},[t._v(t._s(t._f("cleanup")(t.torrent.name)))]),e("div",{staticClass:"meta"},[t._v("\n      "+t._s(t._f("toPercentage")(t.torrent.percentDone))+" of\n      "+t._s(t._f("toHuman")(t.torrent.sizeWhenDone))+"\n      "),t.torrent.rateDownload?e("span",{staticClass:"download-rate"},[t._v("\n        ↓ "+t._s(t._f("toHuman")(t.torrent.rateDownload))+"/s\n      ")]):t._e()])]),e("div",{staticClass:"progress-bar",class:t.isDone?"done":"",style:{width:t.percentDone(t.torrent.percentDone)}})])},D=[],O=(e("a481"),{props:["torrent","selected"],data:function(){return{}},computed:{isDone:function(){return 1==this.torrent.percentDone}},filters:{toHuman:function(t){if(!t)return"unknown";var n=Math.floor(Math.log(t)/Math.log(1024));return 1*(t/Math.pow(1024,n)).toFixed(2)+" "+["B","kB","MB","GB","TB"][n]},toPercentage:function(t){return(100*t).toFixed(2)+"%"},cleanup:function(t){return t.replace(/(web?(rip|dl)|\[[a-z]+\]|((h|x)\.?26(4|5))|(hdtv)|(\d{3,4}p)|(-)|(a?ac(\d\.\d)?)|(www\.(.+)\.(com|org|net))|(HEVCs?|10.?bit)|(bluray)|(dvd(rip)?))/gi,"").replace(/((megusta)|(deflate)|(crimson)|(avs)|(btw)|(spik)|(internal)|(web)|(trump)|(yts\.lt)|(yts\.am)|(rarbg))/gi,"").replace(/(mkv)|(avi)|(mp4)/gi,"").replace(/(\(\))|(\[\])/gi,"").replace(/\./g," ")}},methods:{percentDone:function(t){return 100*t+"%"},select:function(t){m.$emit("torrentSelect",t)}}}),x=O,$=(e("3956"),Object(T["a"])(x,C,D,!1,null,null,null)),E=$.exports,j={components:{Torrent:E},props:["selectedTorrent"],data:function(){return{torrents:[]}},methods:{deselectTorrents:function(){m.$emit("torrentSelect",{id:null})}},mounted:function(){var t=this;this.$root.$on("torrentsDidChange",(function(n){t.torrents=n}))}},k=j,M=(e("3a4a"),Object(T["a"])(k,S,y,!1,null,null,null)),P=M.exports,L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:{modal:!0,open:t.isOpen},on:{openEmit:function(n){return t.showDialog()}}},[e("dialog",{ref:"dialog"},[e("button",{staticClass:"exit",on:{click:function(n){return t.hideDialog()}}},[t._v("×")]),e("div",{staticClass:"modal-content"},[t._v("\n      "+t._s(t.msg)+"\n    ")]),e("div",{staticClass:"actions"},[e("button",{on:{click:function(n){return t.hideDialog()}}},[t._v("Cancel")]),e("button",{staticClass:"primary",on:{click:function(n){return t.confirmAction()}}},[t._v("Confirm")])])])])},A=[],V={name:"Modal",data:function(){return{msg:"",isOpen:!1,handleConfirm:function(){console.log("no confirm action taken")}}},methods:{showDialog:function(){this.isOpen=!0,this.$refs.dialog.showModal()},hideDialog:function(){this.isOpen=!1,this.$refs.dialog.close()},confirmAction:function(){this.handleConfirm(),this.hideDialog()}},mounted:function(){var t=this;this.$root.$on("openEmit",(function(n){t.msg=n.msg,"function"==typeof n.handleConfirm&&(t.handleConfirm=n.handleConfirm),t.showDialog()}))}},N=V,I=(e("30db"),Object(T["a"])(N,L,A,!1,null,null,null)),F=I.exports,W=o["a"].extend({name:"app",components:{Controls:_,Transmission:P,Modal:F},data:function(){return{selectedTorrent:{id:null}}},mounted:function(){var t=this;this.$root.$on("changeSelectedTorrent",(function(n){t.selectedTorrent=n}))}}),H=W,R=(e("5c0b"),Object(T["a"])(H,r,s,!1,null,null,null)),B=R.exports;e.d(n,"Application",(function(){return J})),o["a"].config.productionTip=!1,window.AppState=m;var J=new o["a"]({render:function(t){return t(B)}}).$mount("#app")},5768:function(t,n,e){},"5c0b":function(t,n,e){"use strict";var o=e("e332"),r=e.n(o);r.a},"5c3d":function(t,n,e){t.exports=e.p+"img/spinner.81974792.svg"},6596:function(t,n,e){t.exports=e.p+"img/plextv-icon.e2583e1a.svg"},c386:function(t,n,e){"use strict";var o=e("d03c"),r=e.n(o);r.a},caf9:function(t,n,e){},d03c:function(t,n,e){},e332:function(t,n,e){}});
//# sourceMappingURL=app.f22e9bfa.js.map