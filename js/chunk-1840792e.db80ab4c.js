(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1840792e"],{"1e5e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABs1BMVEUAAAD///+A//9V/6pAv78zzJkq1aogv585xqou0aIqv5UnxJ0kyKQgv58ew5YrxpwoyZQkwp4jxZcgv5UfwpknxJMjwZUiw5khxZQew5Yjv5Uiw5QhxJYgv5Mewpgjv5cgv5Uew5Ygw5Qgv5YewpMhwJIev5IhwZUgwpMgv5UfwpIhwZMfwJQfwpMev5UhwZQgwZMfwZUev5MewJQfwZMfv5QewZQfwZQfv5IewJMgv5QgwJMfwJQgwJQfwJIfwZMfv5IewJQewZMgwJIfwZQfwJQewJMev5IfwJQfwZMfv5Qev5MfwJMfwZMfv5IfwJMewZMev5QewJMfwJMfv5MfwJIewJMfwJIfwJMfwJMewJIewJMfwJIfv5MewJMewJIfwJMfv5MfwJIewJMfv5IfwJMfwJIfwJMewJMfwJIewJIewJMev5IfwJMfv5MewJMewJIev5MfwJMfv5IewJMfwJMfv5MfwJIev5MewJMfwJIfwJMfwJMfwJIewJIewJIewJMfwJIfv5MfwJIfwJIewJMev5IewJMfwJMfv5IfwJIfwJMewJIev5MewJIewJMev5Lt6vi+AAAAkHRSTlMAAQIDBAUGCAkLDA0OEBESExUWGBkaHR4fIiQmJygqLDAzNzg7PURGR0hLTlFTVFZXW1xdY2Rma2xtcHFyeXp7fH5/gYOFhoiKi4yQkpOUlZeYmZqcnaGio6WpqqussbKztLe6vL2+v8HHysvMzdDS09TX2Nve4OHk5ebn6err7e7v8PHy8/T19/j5+vv8/f4qSoISAAAB40lEQVQYGY3BiT+TAQDH4d8765xjokwtVDp0SumabuWojBSVWqQQ3Yc0KsnGZsf3T+7d8HmH930/nkeFjIN3IhNTyen3gx2Hi+SoqiuK5ffjoGyVdibIi0/Ok5fqrtBGDbNAeixUWyxp5/6Lw0tAvFHrhdKQ6qmUxd+ZAFoNrREGRoNaK/ASeOZRgRYg7NV6RivQJktDGlpk51wWmrSqbBbCsncLFgNa0QmjXtkzXkC/lgUSpIJyUhEnW6e8MHTL2W14rhwjSrpSznwxFrbLdAjG5GYATsh0F0JycxYeyRSBWrnZBW9lmoBiuVrkh0w/icvdd5YMSUkm5W4cSiRFicndNzJFkt6BT67i/JJpEGrkpgw+ytQOl+WmEXplqoc3ctMPZ2TyzJAql7Mdf8j4ldML9+TsGgwob+8SyWo5KZmFA1r2AF555OApDGtF+Ty0y94ViFVr1cksXJCd2hQ0y3IDaPNoo0sQ360CfcBQlTbwT8JnvyzGzSwkOkpl8R0tkbRvBsZ9KnAqBiwONQe8krx7miIJPhiS6uZgZJsKVPakyMlMf4pmyJkukql+ASJeFQr2/cUy11ejvGNJeGJojS1H7o98/cf8l9cPj2/VqtNp6JKNrVrnPHBVm9ECU9qU0NT1/4Y6s9b8uvKrAAAAAElFTkSuQmCC"},"4a7a":function(e,t,a){},6133:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')},"6e13":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"snapshot-container"},[n("div",{staticClass:"table-wrap"},[n("div",{staticClass:"table-title"},[n("span",{staticClass:"title"},[e._v("Snap Shot")]),n("el-button",{attrs:{type:"success",round:""},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("Airdrop")])],1),n("div",{staticClass:"input-box"},[n("el-input",{attrs:{placeholder:"Search tokens"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchTableData(t)}},model:{value:e.inputData,callback:function(t){e.inputData=t},expression:"inputData"}},[n("img",{attrs:{slot:"suffix",src:a("1e5e"),alt:""},on:{click:e.searchTableData},slot:"suffix"})])],1),n("div",{staticClass:"table-box"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading.lock",value:e.loading,expression:"loading",modifiers:{lock:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"btswap_id",label:"ID",width:"220",sortable:""}}),n("el-table-column",{attrs:{prop:"address",label:"Address"}}),n("el-table-column",{attrs:{prop:"balance",label:"Balance"}})],1),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.page_size,total:e.total},on:{"current-change":e.currentChangeHandler}})],1)],1)]),n("el-dialog",{attrs:{title:"",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeDialog}},[n("p",[e._v("Enter an address to trigger a BT claim. If the address has any claimable BT it will be sent to them on submission.")]),n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"Address"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" Available quantity："+e._s(e.amount/1e18)+" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{loading:e.buttonLoading},on:{click:e.checkAddress}},[e._v("Check")]),n("el-button",{attrs:{type:"primary",disabled:0==e.amount},on:{click:e.claim}},[e._v("Withdraw")])],1)],1)],1)},s=[],o=(a("96cf"),a("1da1")),r=a("bc3a"),i=a.n(r),l=a("6e11"),c=a.n(l),d=a("6133"),u=(a("b4ba"),"0xd9efeda217049d0693b60d148dc7c93da8202112"),p={name:"snapshot",components:{},data:function(){return{address:"",tableData:[],page:1,page_size:15,last_page:0,total:0,loading:!1,inputData:"",index:0,proof:[],dialogFormVisible:!1,form:{address:""},amount:0,buttonLoading:!1}},beforeCreate:function(){window.ethereum?(window.web3=new Web3(ethereum),c.a.setProvider(ethereum)):window.web3?(window.web3=new Web3(web3.currentProvider),c.a.setProvider(web3.currentProvider)):console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")},created:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.MerkleContract=new c.a(d,u);case 1:case"end":return e.stop()}}),e)})))()},mounted:function(){if(web3){var e=web3.eth;this.ETH=e,this.getInfo()}this.getTableData(this.page,this.page_size)},methods:{getTableData:function(e,t){var a=this;this.loading=!0,i()({method:"post",url:"https://api.btswap.com/btserver/v1/btswap/holders",data:{page:e,page_size:t},responseType:"json"}).then((function(e){a.loading=!1;var t=e.data;console.log(t),0==t.code&&(a.tableData=t.result.data,a.last_page=t.result.last_page,a.total=t.result.total)})).catch((function(e){a.loading=!1,console.log(e)}))},currentChangeHandler:function(e){console.log(e),this.getTableData(e,this.page_size)},claim:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("this.address: ",e.address),t.next=4,MerkleContract.methods.claim(e.index,e.form.address,e.amount,e.proof).call();case 4:e.closeDialog(),e.$message.success("claim success"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("claim error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ethereum.enable();case 2:return console.log("this.ETH: ",e.ETH),t.next=5,e.ETH.accounts;case 5:a=t.sent,a&&a.length&&(e.address=a[0]);case 7:case"end":return t.stop()}}),t)})))()},searchTableData:function(){var e=this;this.loading=!0,i()({method:"post",url:"https://api.btswap.com/btserver/v1/btswap/holders",data:{address:this.inputData},responseType:"json"}).then((function(t){e.loading=!1;var a=t.data;console.log(a),0==a.code&&(e.tableData=a.result.data,e.last_page=a.result.last_page,e.total=a.result.total)})).catch((function(t){e.loading=!1,console.log(t)}))},checkAddress:function(){var e=this;console.log(MerkleContract.methods),0!=this.form.address.length?(this.buttonLoading=!0,i()({method:"post",url:"https://api.btswap.com/btserver/v1/merkle/list",data:{address:this.form.address},responseType:"json"}).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.buttonLoading=!1,n=a.data,console.log(n),0==n.code&&n.result.data.length>0&&(e.amount=n.result.data[0].claim_data.amount,e.index=n.result.data[0].claim_data.index,e.proof=n.result.data[0].claim_data.proof);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.buttonLoading=!1,console.log(t)}))):this.$message.error("address is needed")},closeDialog:function(){this.dialogFormVisible=!1,this.form.address="",this.amount=0}}},w=p,f=(a("f9a7"),a("2877")),m=Object(f["a"])(w,n,s,!1,null,null,null);t["default"]=m.exports},f9a7:function(e,t,a){"use strict";var n=a("4a7a"),s=a.n(n);s.a}}]);