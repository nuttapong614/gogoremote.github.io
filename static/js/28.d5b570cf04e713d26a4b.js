webpackJsonp([28],{"2bON":function(a,t,e){t=a.exports=e("FZ+f")(!0),t.push([a.i,".spacehead[data-v-02cd8d88]{margin-top:20px;margin-bottom:60px}.space[data-v-02cd8d88]{padding-top:20px;padding-bottom:20px}.block[data-v-02cd8d88]{padding-left:30px;padding-right:30px;color:#4ab2e3}.mac a[data-v-02cd8d88]{color:#db3f8d}.windows a[data-v-02cd8d88]{color:#4ab2e3}","",{version:3,sources:["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/dashboard-elements/HeaderDetail.vue"],names:[],mappings:"AACA,4BACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,wBACE,iBAAkB,AAClB,mBAAqB,CACtB,AACD,wBACE,kBAAmB,AACnB,mBAAoB,AACpB,aAAe,CAChB,AACD,wBACE,aAAe,CAChB,AACD,4BACE,aAAe,CAChB",file:"HeaderDetail.vue",sourcesContent:["\n.spacehead[data-v-02cd8d88] {\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\n.space[data-v-02cd8d88] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.block[data-v-02cd8d88] {\n  padding-left: 30px;\n  padding-right: 30px;\n  color: #4ab2e3;\n}\n.mac a[data-v-02cd8d88] {\n  color: #db3f8d;\n}\n.windows a[data-v-02cd8d88] {\n  color: #4ab2e3;\n}\n"],sourceRoot:""}])},FgVb:function(a,t,e){"use strict";var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"header-detail"},[e("vuestic-modal",{ref:"labDetailAlert",attrs:{show:a.show,large:!0,okClass:"none",okText:a._f("translate")("modal.confirm"),cancelClass:"none",cancelText:a._f("translate")("modal.cancel"),headerBgColor:"#3298a8"},on:{"update:show":function(t){a.show=t}}},[e("div",{attrs:{slot:"title"},slot:"title"},[e("i",{staticClass:"fa fa-car"}),a._v(" "+a._s(a._f("translate")("gogoboard.labdetail_panel.lab"+a.isLab)))]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 text-right",staticStyle:{"background-color":"lightcyan"}},[e("h5",[e("img",{attrs:{src:"/static/gogo-img/demo-carControl.png",width:"150",height:"160"}})])]),a._v(" "),e("div",{staticClass:"col-sm-3 text-right space",staticStyle:{"background-color":"lightcyan"}},[e("h5",[e("p",[a._v(a._s(a._f("translate")("gogoboard.labdetail_panel.lab1_detail.head"))+" :")])])]),a._v(" "),e("div",{staticClass:"col-sm-6 space",staticStyle:{"background-color":"lavender"}},[e("h6",[e("p",[a._v(a._s(a._f("translate")("gogoboard.labdetail_panel.lab1_detail.head1")))])])]),a._v(" "),e("div",{staticClass:"col-sm-6 text-right space",staticStyle:{"background-color":"lightcyan"}},[e("h5",[e("p",[a._v(a._s(a._f("translate")("gogoboard.labdetail_panel.lab1_detail.tool"))+" :")])])]),a._v(" "),e("div",{staticClass:"col-sm-6 space",staticStyle:{"background-color":"lavender"}},[e("h6",[e("p",[a._v(a._s(a._f("translate")("gogoboard.labdetail_panel.lab1_detail.tool1"))),e("br"),a._v("\n          "+a._s(a._f("translate")("gogoboard.labdetail_panel.lab1_detail.tool2")))])])])]),a._v(" "),e("hr",{attrs:{width:"50%"}})])],1)},s=[],l={render:o,staticRenderFns:s};t.a=l},LOE1:function(a,t,e){var o=e("2bON");"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);e("rjj0")("20f6183a",o,!0)},dQjH:function(a,t,e){var o=e("sii2");"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);e("rjj0")("74882ec1",o,!0)},gmLl:function(a,t,e){"use strict";e("NYxO"),e("JYMF");t.a={name:"header-detail",props:{isOpen:{type:Boolean,required:!1},isLab:{required:!1}},data:function(){return{show:!1,macUrl:"https://github.com/LILCMU/gogo-plugin/releases/download/v0.9.4/gogo-plugin-0.9.4.dmg",winUrl:"https://github.com/gogoremote/remotelab-plugin/releases/download/1.0.0/GoGo.Plugin-Remote.Lab.msi"}},watch:{isOpen:function(a){console.log(a+":"+this.isLab),this.showLargeModal()}},mounted:function(){},methods:{showLargeModal:function(){this.$refs.labDetailAlert.open()},hideLargeModal:function(){this.$refs.labDetailAlert&&this.$refs.labDetailAlert.clickMask()}},computed:{}}},l1Sf:function(a,t,e){"use strict";function o(a){e("LOE1"),e("dQjH")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("gmLl"),l=e("FgVb"),n=e("VU/8"),d=o,i=n(s.a,l.a,!1,d,"data-v-02cd8d88",null);t.default=i.exports},sii2:function(a,t,e){t=a.exports=e("FZ+f")(!0),t.push([a.i,".vuestic-modal .modal-content{border-radius:12px}","",{version:3,sources:["C:/xampp/htdocs/gogotest2/src/components/gogoboard/gogo-elements/dashboard-elements/HeaderDetail.vue"],names:[],mappings:"AACA,8BACE,kBAAoB,CACrB",file:"HeaderDetail.vue",sourcesContent:["\n.vuestic-modal .modal-content {\n  border-radius: 12px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=28.d5b570cf04e713d26a4b.js.map