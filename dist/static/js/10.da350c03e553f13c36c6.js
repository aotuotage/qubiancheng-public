webpackJsonp([10],{UGdr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("m4jk"),s=a("alfv"),o=a.n(s),i={name:"Articlebs",data:()=>({title:"",editor:null,isShow:!1,id:"",type:[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"},{value:"jQuery",label:"jQuery"},{value:"Photoshop",label:"Photoshop"},{value:"Vue",label:"Vue"},{value:"Vue3",label:"Vue3"},{value:"HTML5",label:"HTML5"},{value:"CSS3",label:"CSS3"},{value:"Node",label:"Node"},{value:"Express",label:"Express"},{value:"React",label:"React"},{value:"Git",label:"Git"},{value:"ElementUI",label:"ElementUI"},{value:"TypeScript",label:"TypeScript"},{value:"Angular",label:"Angular"},{value:"小程序",label:"小程序"},{value:"编辑器",label:"编辑器"},{value:"Other",label:"Other"}],typeValue:"JavaScript"}),methods:{dateFormat(e,t){var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var l in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+l+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[l]:("00"+a[l]).substr((""+a[l]).length)));return t},btn(){let e=this.editor.txt.html(),t=this.dateFormat(new Date,"yyyy/MM/dd");var a=this;Object(l.a)({url:"/article",method:"post",data:{title:a.title,ehtml:e,time:t,authentication:localStorage.getItem("authentication"),type:a.typeValue}}).then(function(e){"请登录"==e.data.msg&&a.$router.push("/qubianchengadmin"),"success"==e.data.status?(a.$message({message:"新增成功",type:"success"}),document.body.scrollTop=0,document.documentElement.scrollTop=0):a.$message.error("新增失败")}).catch(function(e){console.log(e)})},btnTwo(){let e=this.editor.txt.html(),t=this.dateFormat(new Date,"yyyy/MM/dd");var a=this;Object(l.a)({url:"/article/change",method:"post",data:{title:a.title,ehtml:e,time:t,id:a.id,authentication:localStorage.getItem("authentication"),type:a.typeValue}}).then(function(e){"请登录"==e.data.msg&&a.$router.push("/qubianchengadmin"),"success"==e.data.status?(a.$message({message:"修改成功",type:"success"}),document.body.scrollTop=0,document.documentElement.scrollTop=0):a.$message.error("修改失败")}).catch(function(e){console.log(e)})}},created(){if(this.$route.query.key){var e=this;e.isShow=!e.isShow,Object(l.a)({url:"/article/getext",method:"get",params:{key:e.$route.query.key,authentication:localStorage.getItem("authentication")}}).then(function(t){"请登录"==t.data.msg&&e.$router.push("/qubianchengadmin"),e.title=t.data[0].title,e.editor.txt.html(t.data[0].ehtml),e.id=t.data[0]._id,e.typeValue=t.data[0].type}).catch(function(e){console.log(e)})}},mounted(){const e=new o.a(this.$refs.editorElem);e.config.onchange=(e=>{this.editorData=e}),e.create(),this.editor=e},beforeDestroy(){this.editor.destroy(),this.editor=null}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit"},[a("el-row",{staticClass:"edit_content"},[a("el-col",{staticClass:"addmp4",attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[a("div",{staticClass:"to_black"},[a("router-link",{attrs:{to:"/adminpage"}},[a("i",{staticClass:"el-icon-arrow-left"},[e._v("返回")])])],1),e._v(" "),a("el-input",{staticClass:"title",attrs:{placeholder:"请输入标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}},[a("template",{slot:"prepend"},[e._v("标题")])],2),e._v(" "),a("p",{staticClass:"type"},[e._v("\n      类型:\n      "),a("el-select",{attrs:{"popper-append-to-body":!1,filterable:"",placeholder:"请选择"},model:{value:e.typeValue,callback:function(t){e.typeValue=t},expression:"typeValue"}},e._l(e.type,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",{attrs:{id:"wangeditor"}},[a("div",{ref:"editorElem",staticStyle:{"text-align":"left"}})]),e._v(" "),a("br"),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"btn",attrs:{type:"primary",round:""},on:{click:e.btn}},[e._v("确定")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"btn",attrs:{type:"primary",round:""},on:{click:e.btnTwo}},[e._v("确定")])],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(i,n,!1,function(e){a("f/7V")},"data-v-676a4bda",null);t.default=r.exports},"f/7V":function(e,t){}});