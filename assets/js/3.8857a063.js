(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{336:function(e,t,s){},360:function(e,t,s){"use strict";s(336)},371:function(e,t,s){"use strict";s.r(t);var o={name:"CodeFormat",data:()=>({qrCodeDialog:!1,hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null}),computed:{lang(){return this.$route.path.split("/")[1]},iconClass(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText(){return this.isExpanded?"隐藏代码":"显示代码"},codeArea(){return this.$el.getElementsByClassName("meta")[0]}},watch:{isExpanded(e){if(this.setCodeAreaHeight(),!e)return this.fixedControl=!1,void this.removeScrollHandler();setTimeout(()=>{this.scrollParent=window,this.scrollParent&&this.scrollParent.addEventListener("scroll",this.scrollHandler),this.scrollHandler()},200)}},beforeDestroy(){this.removeScrollHandler()},methods:{getCodeAreaHeight(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("highlight")[0].clientHeight+20:this.$el.getElementsByClassName("highlight")[0].clientHeight},setCodeAreaHeight(){this.codeArea.style.height=this.isExpanded?this.getCodeAreaHeight()+1+"px":"0"},copyCode(){const e=this.$el.querySelectorAll("pre")[0];e.setAttribute("contenteditable","true"),e.focus(),document.execCommand("selectAll",!1,null);document.execCommand("copy")?(e.removeAttribute("contenteditable"),this.$message.success("复制成功！")):this.$message.error("复制失败！")},scrollHandler(){const{top:e,bottom:t,left:s}=this.$refs.meta.getBoundingClientRect();this.fixedControl=t>document.documentElement.clientHeight&&e+44<=document.documentElement.clientHeight},removeScrollHandler(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},i=(s(360),s(20)),n=Object(i.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-format",class:{hover:e.hovering},on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}},[s("div",{staticClass:"source"},[e._t("source")],2),e._v(" "),s("div",{ref:"meta",staticClass:"meta"},[e.$slots.default?s("div",{staticClass:"description"},[e._t("default")],2):e._e(),e._v(" "),s("div",{staticClass:"highlight"},[e._t("highlight")],2)]),e._v(" "),s("div",{ref:"control",staticClass:"code-format-control",class:{"is-fixed":e.fixedControl},on:{click:function(t){e.isExpanded=!e.isExpanded}}},[s("transition",{attrs:{name:"arrow-slide"}},[s("i",{class:[e.iconClass,{hovering:e.hovering}]})]),e._v(" "),s("transition",{attrs:{name:"text-slide"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.hovering,expression:"hovering"}]},[e._v(e._s(e.controlText))])]),e._v(" "),s("div",{staticClass:"control-button-container"},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.isExpanded,expression:"isExpanded"}],ref:"copyButton",staticClass:"control-button copy-button",attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.copyCode.apply(null,arguments)}}},[e._v("复制代码")])],1)],1)])}),[],!1,null,null,null);t.default=n.exports}}]);