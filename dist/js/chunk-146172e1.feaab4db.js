(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-146172e1"],{1663:function(e,t,n){},"5ed4":function(e,t,n){"use strict";var r=n("1663"),a=n.n(r);a.a},"73d2":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("el-form",{ref:"centerForm",attrs:{"status-icon":"",model:e.centerForm,rules:e.rules,"label-width":"80px"}},[n("h1",[e._v("个人中心")]),n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{model:{value:e.centerForm.name,callback:function(t){e.$set(e.centerForm,"name",t)},expression:"centerForm.name"}})],1),n("el-form-item",{attrs:{label:"性别",prop:"gender"}},[n("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.centerForm.gender,callback:function(t){e.$set(e.centerForm,"gender",t)},expression:"centerForm.gender"}},[n("el-option",{attrs:{label:"男",value:"m"}}),n("el-option",{attrs:{label:"女",value:"f"}})],1)],1),n("el-form-item",{attrs:{label:"班级",prop:"clazz"}},[n("el-select",{attrs:{placeholder:"请选择年级"},model:{value:e.centerForm.clazz,callback:function(t){e.$set(e.centerForm,"clazz",t)},expression:"centerForm.clazz"}},e._l(e.clazzOptions,(function(e){return n("el-option",{key:e.id,attrs:{label:e.year+e.major+e.clazz,value:e.id}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateInfo("centerForm")}}},[e._v("确认修改")]),n("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},a=[];function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={data:function(){return{centerForm:{name:null,gender:null,year:null,major:null,clazz:null,clazz_id:null,user:null},clazzOptions:[],rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 8 个字符",trigger:"blur"}],gender:[{required:!0,message:"请选择性别",trigger:"change"}],clazz:[{required:!0,message:"请选择班级",trigger:"change"}]}}},methods:{updateInfo:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.centerForm.clazz_id=t.centerForm.clazz,t.$axios.patch("/api/students/".concat(t.centerForm.id,"/?format=json"),t.centerForm).then((function(e){console.log(e),200==e.status?(t.$message({message:"更新个人信息成功",type:"success"}),t.$store.commit("sestStudent",t.centerForm)):t.$message(l({type:"更新个人信息失败"},"type","error"))})).catch((function(e){console.log(e)})))}))},getClazzInfo:function(){var e=this;this.$axios("/api/clazzs/?format=json",{}).then((function(t){console.log(t.data),e.clazzOptions=t.data})).catch((function(e){console.log(e)}))},cancel:function(){this.$router.push("/")}},created:function(){this.centerForm=this.$store.state.student,this.getClazzInfo()}},c=o,s=(n("5ed4"),n("2877")),i=Object(s["a"])(c,r,a,!1,null,"19eda324",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-146172e1.feaab4db.js.map