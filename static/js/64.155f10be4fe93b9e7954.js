webpackJsonp([64],{"26NZ":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("center",{staticClass:"row justify-content-center d-none d-lg-block"},[n("router-link",{staticClass:"link",attrs:{to:{name:"gogoboard"}}},[n("img",{attrs:{src:"static/Logo-Remote-Lab.png",width:"120",height:"120"}})])],1),t._v(" "),n("h2",[t._v(t._s(t._f("translate")("auth.welcome")))]),t._v(" "),n("form",{on:{submit:function(e){e.preventDefault(),t.onSignin(e)}}},[n("div",{staticClass:"form-group with-icon-left"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("i",{staticClass:"fa fa-envelope icon-left input-icon"}),t._v(" "),n("label",{staticClass:"control-label",attrs:{for:"email"}},[t._v(t._s(t._f("translate")("auth.email")))]),n("i",{staticClass:"bar"})])]),t._v(" "),n("div",{staticClass:"form-group with-icon-left"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",required:"required"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("i",{staticClass:"fa fa-lock icon-left input-icon"}),t._v(" "),n("label",{staticClass:"control-label",attrs:{for:"password"}},[t._v(t._s(t._f("translate")("auth.password")))]),n("i",{staticClass:"bar"})])]),t._v(" "),t.error?n("vuestic-alert",{attrs:{type:"warning",withCloseBtn:!0},on:{dismissed:t.onDismissed}},[t._v("\n      "+t._s(t.error?t.error.message:"")+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n        "+t._s(t._f("translate")("auth.login"))+"\n      ")]),t._v(" "),n("router-link",{staticClass:"link",attrs:{to:{name:"signup"}}},[t._v(t._s(t._f("translate")("auth.createAccount")))])],1)],1),t._v(" "),n("div")],1)},s=[],a={render:i,staticRenderFns:s};e.a=a},"86EH":function(t,e,n){var i=n("wmBn");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("c907bfb6",i,!0)},"e/5P":function(t,e,n){"use strict";e.a={name:"login",data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/profile")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onResetPassword:function(){if(""===this.email)return this.$store.dispatch("setError",{message:"Email can not be blnak"});this.$store.dispatch("resetPasswordWithEmail",{email:this.email})},onDismissed:function(){this.$store.dispatch("clearError")}}}},mEJK:function(t,e,n){"use strict";function i(t){n("86EH")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("e/5P"),a=n("26NZ"),r=n("VU/8"),o=i,l=r(s.a,a.a,!1,o,null,null);e.default=l.exports},wmBn:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".login{width:21.375rem}@media (max-width:991.98px){.login{width:100%;padding-right:2rem;padding-left:2rem}.login .down-container .link{margin-top:2rem}}.login h2{text-align:center}.login .down-container{margin-top:3.125rem}","",{version:3,sources:["C:/xampp/htdocs/gogotest2/src/components/auth/login/Login.vue"],names:[],mappings:"AACA,OACE,eAAiB,CAClB,AACD,4BACA,OACM,WAAY,AACZ,mBAAoB,AACpB,iBAAmB,CACxB,AACD,6BACQ,eAAiB,CACxB,CACA,AACD,UACI,iBAAmB,CACtB,AACD,uBACI,mBAAqB,CACxB",file:"Login.vue",sourcesContent:["\n.login {\n  width: 21.375rem;\n}\n@media (max-width: 991.98px) {\n.login {\n      width: 100%;\n      padding-right: 2rem;\n      padding-left: 2rem;\n}\n.login .down-container .link {\n        margin-top: 2rem;\n}\n}\n.login h2 {\n    text-align: center;\n}\n.login .down-container {\n    margin-top: 3.125rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=64.155f10be4fe93b9e7954.js.map