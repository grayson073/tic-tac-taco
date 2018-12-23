(function(t){function e(e){for(var i,o,l=e[0],s=e[1],u=e[2],d=0,m=[];d<l.length;d++)o=l[d],a[o]&&m.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={index:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"08d2":function(t,e,n){"use strict";var i=n("d512"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Game")],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"game"},[i("h1",{on:{click:function(e){t.game.active=!1}}},[t._v("Tic-Tac-Taco")]),t.game.active?t._e():i("p",{staticClass:"game-mode",on:{click:t.startGame}},[t._v("PLAYER VS PLAYER")]),i("section",[t.game.active?i("GameBoard",{attrs:{tiles:t.tiles,onPlay:t.handlePlay,currentPlayer:t.currentPlayer,reset:t.reset}}):t._e()],1),i("section",{staticClass:"message"},[t.game.active?i("p",[t._v(t._s(!t.game.winner&&t.game.active?t.currentTurnMessage:t.gameOverMessage))]):t._e(),t.game.winner?i("p",{staticClass:"game-mode",on:{click:t.startGame}},[t._v("NEW GAME")]):t._e(),t.game.active?t._e():i("img",{attrs:{src:n("daac")}})])])},l=[],s=(n("ac6a"),n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-board"},[n("div",{staticClass:"game-grid"},t._l(t.tiles,function(e,i){return n("PlayTile",{key:i,staticClass:"game-tile",attrs:{position:t.tiles[i],onPlay:t.handlePlay,currentPlayer:t.currentPlayer,reset:t.reset}})}),1)])}),u=[],c=(n("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.value?t._e():i("div",{staticClass:"play-tile pre-click",on:{click:t.handlePlay}}),t.value?i("div",{staticClass:"play-tile"},[i("div",{staticClass:"fadeIn"},[i("div",{staticClass:"icon"},[1===t.value?i("img",{attrs:{src:n("8d2a")}}):t._e(),-1===t.value?i("img",{attrs:{src:n("c131")}}):t._e()])])]):t._e()])}),d=[],m={data:function(){return{value:null}},props:{onPlay:Function,position:String,currentPlayer:Number,reset:Boolean},methods:{handlePlay:function(){1===this.currentPlayer&&(this.value=1),2===this.currentPlayer&&(this.value=-1),this.onPlay(this.position)}},watch:{reset:function(t,e){!0===t&&!1===e&&(this.value=null)}}},h=m,p=(n("08d2"),n("2877")),f=Object(p["a"])(h,c,d,!1,null,"4092289c",null);f.options.__file="PlayTile.vue";var g=f.exports,v={props:{tiles:Array,onPlay:Function,currentPlayer:Number,reset:Boolean},components:{PlayTile:g},methods:{handlePlay:function(t){this.onPlay(t)}}},y=v,b=(n("6e33"),Object(p["a"])(y,s,u,!1,null,null,null));b.options.__file="GameBoard.vue";var P=b.exports;function _(){return{active:!1,plays:{topLeft:null,topMid:null,topRight:null,middleLeft:null,middleMid:null,middleRight:null,bottomLeft:null,bottomMid:null,bottomRight:null},winner:null}}function w(){return Object.keys(_().plays)}var M={data:function(){return{game:_(),currentPlayer:null,gameOverMessage:null,player1:"Carne Asada",player2:"Chorizo",reset:!1,playCount:0}},components:{GameBoard:P},methods:{handlePlay:function(t){this.reset=!1,this.playCount++;var e=this.game.plays;1===this.currentPlayer?e[t]=1:e[t]=-1,1===this.currentPlayer?this.currentPlayer=2:this.currentPlayer=1,this.checkGameStatus()},getRandomPlayer:function(){return Math.floor(Math.random()*Math.floor(2)+1)},startGame:function(){this.reset=!0,this.game=_(),this.tiles=w(),this.game.active=!0,this.currentPlayer=this.getRandomPlayer()},checkGameStatus:function(){var t=this.game.plays,e=this.player1,n=this.player2;t.topLeft+t.topMid+t.topRight===3&&(this.game.winner=e),t.middleLeft+t.middleMid+t.middleRight===3&&(this.game.winner=e),t.bottomLeft+t.bottomMid+t.bottomRight===3&&(this.game.winner=e),t.topLeft+t.middleMid+t.bottomRight===3&&(this.game.winner=e),t.bottomLeft+t.middleMid+t.topRight===3&&(this.game.winner=e),t.topLeft+t.middleLeft+t.bottomLeft===3&&(this.game.winner=e),t.topMid+t.middleMid+t.bottomMid===3&&(this.game.winner=e),t.topRight+t.middleRight+t.bottomRight===3&&(this.game.winner=e),t.topLeft+t.topMid+t.topRight===-3&&(this.game.winner=n),t.middleLeft+t.middleMid+t.middleRight===-3&&(this.game.winner=n),t.bottomLeft+t.bottomMid+t.bottomRight===-3&&(this.game.winner=n),t.topLeft+t.middleMid+t.bottomRight===-3&&(this.game.winner=n),t.bottomLeft+t.middleMid+t.topRight===-3&&(this.game.winner=n),t.topLeft+t.middleLeft+t.bottomLeft===-3&&(this.game.winner=n),t.topMid+t.middleMid+t.bottomMid===-3&&(this.game.winner=n),t.topRight+t.middleRight+t.bottomRight===-3&&(this.game.winner=n),null!==this.game.winner&&(this.gameOverMessage=this.game.winner+" wins!"),9===this.playCount&&null===this.game.winner&&(this.game.winner="draw",this.gameOverMessage="Stalemate!")}},computed:{currentTurnMessage:function(){var t=this.currentPlayer,e="'s turn!";return 1===t?this.player1+e:this.player2+e}}},R=M,L=(n("7023"),Object(p["a"])(R,o,l,!1,null,"760e3890",null));L.options.__file="Game.vue";var O=L.exports,C={components:{Game:O}},x=C,j=(n("034f"),Object(p["a"])(x,a,r,!1,null,null,null));j.options.__file="App.vue";var k=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(k)}}).$mount("#app")},"6e33":function(t,e,n){"use strict";var i=n("993c"),a=n.n(i);a.a},7023:function(t,e,n){"use strict";var i=n("8317"),a=n.n(i);a.a},8317:function(t,e,n){},"85ec":function(t,e,n){},"8d2a":function(t,e,n){t.exports=n.p+"img/x.1eaff716.png"},"993c":function(t,e,n){},c131:function(t,e,n){t.exports=n.p+"img/o.12a4f50a.png"},d512:function(t,e,n){},daac:function(t,e,n){t.exports=n.p+"img/taco.973fb845.png"}});
//# sourceMappingURL=index.0571b90a.js.map