(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f2e8628"],{"43fe":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"password"}},[t("el-form",{ref:"pwdForm",attrs:{"status-icon":"",model:e.pwdForm,rules:e.rules}},[t("h1",[e._v("修改密码")]),t("el-form-item",{attrs:{label:"原密码",prop:"oldpwd"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.pwdForm.oldpwd,callback:function(r){e.$set(e.pwdForm,"oldpwd",r)},expression:"pwdForm.oldpwd"}})],1),t("el-form-item",{attrs:{label:"新密码",prop:"newpwd"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.pwdForm.newpwd,callback:function(r){e.$set(e.pwdForm,"newpwd",r)},expression:"pwdForm.newpwd"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"checkpwd"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.pwdForm.checkpwd,callback:function(r){e.$set(e.pwdForm,"checkpwd",r)},expression:"pwdForm.checkpwd"}})],1),t("el-button",{attrs:{type:"primary"},nativeOn:{click:function(r){return r.preventDefault(),e.updatePwd("pwdForm")}}},[e._v("确认更改")]),t("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)},s=[],n={data:function(){var e=this,r=function(r,t,o){""===t?o(new Error("请输入密码")):(""!==e.pwdForm.checkpwd&&e.$refs.pwdForm.validateField("checkpwd"),o())},t=function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.pwdForm.newpwd?o(new Error("两次输入密码不一致!")):o()};return{pwdForm:{oldpwd:null,newpwd:null,checkpwd:null,userid:null},rules:{oldpwd:[{required:!0,message:"请输入原密码",trigger:"blur"}],newpwd:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:10,message:"长度在 6 到 15 个字符",trigger:"blur"},{validator:r,trigger:"blur"}],checkpwd:[{required:!0,message:"请再次输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 10 个字符",trigger:"blur"},{validator:t,trigger:"blur"}]}}},computed:{getType:function(){return this.$route.params.type}},methods:{updatePwd:function(e){var r=this;this.$refs[e].validate((function(e){e&&r.$axios.patch("/api/update-pwd/?format=json",r.pwdForm).then((function(e){console.log(e),200==e.status&&"success"==e.data.msg?r.$message({message:"更新密码成功",type:"success"}):r.$message({message:"原密码不正确，更新失败",type:"error"})})).catch((function(e){console.log(e)}))}))},cancel:function(){this.$router.push("/")}},created:function(){this.pwdForm.userid=this.$route.params.student.user}},a=n,p=(t("623b"),t("2877")),d=Object(p["a"])(a,o,s,!1,null,"0539a5b7",null);r["default"]=d.exports},"623b":function(e,r,t){"use strict";var o=t("8d55"),s=t.n(o);s.a},"8d55":function(e,r,t){}}]);
//# sourceMappingURL=chunk-7f2e8628.359e905e.js.map