webpackJsonp([1],{"6PeI":function(t,e,n){"use strict";var i=n("mtWM"),s=n.n(i),o=n("M4fF"),u=n.n(o);e.a={name:"AutoComplete",data:function(){return{value:"",suggestions:[],open:!1,current:0}},methods:{debounceInput:u.a.debounce(function(){var t=this;if(this.value){var e="https://beta.monarchinitiative.org/autocomplete/{term}.json",n=e.replace("{term}",this.value);s.a.get(n).then(function(e){t.suggestions=e.data,t.open=!0}).catch(function(t){console.log(t)})}else this.suggestions=[]},500,{leading:!1,trailing:!0}),updateValue:function(t){!1===this.open&&(this.current=0),this.$emit("input",t)},enter:function(){this.value=this.suggestions[this.current].label[0],this.selection=this.suggestions[this.current],this.open=!1;var t=this.suggestions[this.current].category,e=this.suggestions[this.current].id;window.location="https://monarchinitiative.org/"+t+"/"+e},up:function(){this.current>0&&(this.current-=1)},down:function(){this.current<this.suggestions.length-1&&(this.current+=1)},isActive:function(t){return t===this.current},mouseOver:function(t){this.current=t},suggestionClick:function(t){this.value=this.suggestions[t].label[0],this.open=!1;var e=this.suggestions[t].category,n=this.suggestions[t].id;window.location="https://monarchinitiative.org/"+e+"/"+n}},watch:{value:function(){this.value||(this.open=!1)}}}},BHSi:function(t,e){},M93x:function(t,e,n){"use strict";function i(t){n("MeCq")}var s=n("xJD8"),o=n("Wj9o"),u=n("VU/8"),a=i,c=u(s.a,o.a,!1,a,null,null);e.a=c.exports},MeCq:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=n("M93x");i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:s.a}})},Wj9o:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-md-8"},[n("h2",[t._v("Monarch Autocomplete")]),t._v(" "),n("autocomplete",{model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})],1),t._v(" "),n("div",{staticClass:"col-md-2"})])},s=[],o={render:i,staticRenderFns:s};e.a=o},XdR7:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autocomplete",class:{open:t.open},staticStyle:{position:"relative"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"search..."},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){t.updateValue(e.target.value)},t.debounceInput],keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.enter(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key))return null;t.down(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key))return null;t.up(e)}]}}),t._v(" "),n("div",{staticClass:"dropdown-menu list-group",staticStyle:{width:"100%"}},t._l(t.suggestions,function(e,i){return n("ul",[n("li",{staticClass:"list-group-item list-group-item-action list-group-item-light",class:{active:t.isActive(i)},on:{click:function(e){t.suggestionClick(i)},mouseover:function(e){t.mouseOver(i)}}},[n("strong",[t._v(t._s(e.label[0]))]),n("br"),t._v(" "),n("small",[t._v(t._s(e.category))]),t._v(" "),n("small",[t._v(t._s(e.id))])])])}))])},s=[],o={render:i,staticRenderFns:s};e.a=o},nObl:function(t,e,n){"use strict";function i(t){n("BHSi")}var s=n("6PeI"),o=n("XdR7"),u=n("VU/8"),a=i,c=u(s.a,o.a,!1,a,"data-v-6c13aa8e",null);e.a=c.exports},xJD8:function(t,e,n){"use strict";var i=n("nObl");e.a={name:"app",components:{autocomplete:i.a},data:function(){return{selection:""}}}}},["NHnr"]);
//# sourceMappingURL=app.aee0e03778d71d75f885.js.map