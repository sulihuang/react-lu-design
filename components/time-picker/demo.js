webpackJsonp([21,129],{70:function(n,s,a){"use strict";a(11),a(196),a(22)},101:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(7),p=t(e),o=a(8),c=t(o),u=a(3),l=t(u),i=a(5),k=t(i),r=a(4),d=t(r),m=a(1),f=t(m),h=a(335),g=t(h),v=a(6),b=t(v),y=a(9),C=t(y),w=a(102),z=t(w),H=function(n){function s(a){(0,l["default"])(this,s);var t=(0,k["default"])(this,n.call(this,a));return t.handleChange=function(n){"value"in t.props||t.setState({value:n});var s=t.props,a=s.onChange,e=s.format,p=void 0===e?"HH:mm:ss":e;a&&a(n,n&&n.format(p)||"")},t.state={value:a.value||a.defaultValue},t}return(0,d["default"])(s,n),s.prototype.componentWillReceiveProps=function(n){"value"in n&&this.setState({value:n.value})},s.prototype.getLocale=function(){var n=this.context.antLocale,s=n&&n.TimePicker||z["default"];return s},s.prototype.render=function(){var n,s=(0,C["default"])({format:"HH:mm:ss"},this.props);delete s.defaultValue;var a=(0,b["default"])((n={},(0,c["default"])(n,s.className,!!s.className),(0,c["default"])(n,s.prefixCls+"-"+s.size,!!s.size),n));return f["default"].createElement(g["default"],(0,p["default"])({},s,{className:a,value:this.state.value,placeholder:s.placeholder||this.getLocale().placeholder,showHour:s.format.indexOf("HH")>-1,showMinute:s.format.indexOf("mm")>-1,showSecond:s.format.indexOf("ss")>-1,onChange:this.handleChange,addon:function(n){return s.addon?f["default"].createElement("div",{className:s.prefixCls+"-panel-addon"},s.addon(n)):null}}))},s}(f["default"].Component);s["default"]=H,H.defaultProps={prefixCls:"ant-time-picker",align:{offset:[0,-2]},disabled:!1,disabledHours:void 0,disabledMinutes:void 0,disabledSeconds:void 0,hideDisabledOptions:!1,placement:"bottomLeft",transitionName:"slide-up"},H.contextTypes={antLocale:f["default"].PropTypes.object},n.exports=s["default"]},102:function(n,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4"};s["default"]=a,n.exports=s["default"]},196:function(n,s){},1019:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(70),a(101)),p=t(e),o=(a(14),a(13)),c=t(o),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:{"zh-CN":[["p","\u5728 TimePicker \u9009\u62e9\u6846\u5e95\u90e8\u663e\u793a\u81ea\u5b9a\u4e49\u7684\u5185\u5bb9\u3002"]],"en-US":[["p","Render addon contents to timepicker panel's bottom."]]},meta:{order:6,title:{"zh-CN":"\u9644\u52a0\u5185\u5bb9","en-US":"Addon"},filename:"components/time-picker/demo/addon.md",id:"components-time-picker-demo-addon"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span>\n    <span class="token attr-name" >addon</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>panel <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n      <span class="token operator" >&lt;</span>Button size<span class="token operator" >=</span><span class="token string" >"small"</span> type<span class="token operator" >=</span><span class="token string" >"primary"</span> onClick<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> panel<span class="token punctuation" >.</span><span class="token function" >close</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        Ok\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n  <span class="token operator" >/</span><span class="token operator" >></span><span class="token punctuation" >,</span>\n mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return l["default"].createElement(p["default"],{addon:function(n){return l["default"].createElement(c["default"],{size:"small",type:"primary",onClick:function(){return n.close()}},"Ok")}})}}},1020:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(70),a(101)),p=t(e),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:{"zh-CN":[["p","\u70b9\u51fb TimePicker\uff0c\u7136\u540e\u53ef\u4ee5\u5728\u6d6e\u5c42\u4e2d\u9009\u62e9\u6216\u8005\u8f93\u5165\u67d0\u4e00\u65f6\u95f4\u3002"]],"en-US":[["p","Click ",["code","TimePicker"],", and then we could select or input a time in panel."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/time-picker/demo/basic.md",id:"components-time-picker-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>time<span class="token punctuation" >,</span> timeString<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>time<span class="token punctuation" >,</span> timeString<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,s){console.log(n,s)}return c["default"].createElement(p["default"],{onChange:n})}}},1021:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(70),a(101)),p=t(e),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u4f7f\u7528 ",["code","disabledHours"]," ",["code","disabledMinutes"]," ",["code","disabledSeconds"]," \u7ec4\u5408\u7981\u6b62\u7528\u6237\u9009\u62e9\u67d0\u4e2a\u65f6\u95f4\uff0c\u914d\u5408 ",["code","hideDisabledOptions"]," \u53ef\u4ee5\u76f4\u63a5\u628a\u4e0d\u53ef\u9009\u62e9\u7684\u9879\u9690\u85cf\u3002"]],"en-US":[["p","Make part of time unselectable by ",["code","disabledHours"]," ",["code","disabledMinutes"]," ",["code","disabledSeconds"],", and we even can hide those unselectable options by ",["code","hideDisabledOptions"],"."]]},meta:{order:5,title:{"zh-CN":"\u7981\u6b62\u9009\u9879","en-US":"Disabled Time"},filename:"components/time-picker/demo/disable-options.md",id:"components-time-picker-demo-disable-options"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >range</span><span class="token punctuation" >(</span>start<span class="token punctuation" >,</span> end<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> result <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> start<span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> end<span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    result<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>i<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> result<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >disabledHours</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> hours <span class="token operator" >=</span> <span class="token function" >range</span><span class="token punctuation" >(</span><span class="token number" >0</span><span class="token punctuation" >,</span> <span class="token number" >60</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  hours<span class="token punctuation" >.</span><span class="token function" >splice</span><span class="token punctuation" >(</span><span class="token number" >20</span><span class="token punctuation" >,</span> <span class="token number" >4</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >return</span> hours<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >disabledMinutes</span><span class="token punctuation" >(</span>h<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>h <span class="token operator" >===</span> <span class="token number" >20</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token function" >range</span><span class="token punctuation" >(</span><span class="token number" >0</span><span class="token punctuation" >,</span> <span class="token number" >31</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token keyword" >if</span> <span class="token punctuation" >(</span>h <span class="token operator" >===</span> <span class="token number" >23</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token function" >range</span><span class="token punctuation" >(</span><span class="token number" >30</span><span class="token punctuation" >,</span> <span class="token number" >60</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span>\n      <span class="token attr-name" >disabledHours</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledHours<span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >disabledMinutes</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledMinutes<span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Just</span> <span class="token attr-name" >Disabled"</span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span>\n      <span class="token attr-name" >disabledHours</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledHours<span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >disabledMinutes</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledMinutes<span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >hideDisabledOptions</span>\n      <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Hide</span> <span class="token attr-name" >Directly"</span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,s){for(var a=[],t=n;t<s;t++)a.push(t);return a}function s(){var s=n(0,60);return s.splice(20,4),s}function a(s){return 20===s?n(0,31):23===s?n(30,60):[]}return c["default"].createElement("div",null,c["default"].createElement(p["default"],{disabledHours:s,disabledMinutes:a,placeholder:"Just Disabled"}),c["default"].createElement(p["default"],{disabledHours:s,disabledMinutes:a,hideDisabledOptions:!0,placeholder:"Hide Directly"}))},style:"\n#components-time-picker-demo-disable-options .ant-time-picker {\n  width: 120px;\n}\n#components-time-picker-demo-disable-options .ant-time-picker .ant-time-picker-input {\n  width: 120px;\n  margin-right: 8px;\n}\n"}},1022:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(70),a(101)),p=t(e),o=a(1),c=t(o),u=a(2),l=(t(u),a(21)),i=t(l);n.exports={content:{"zh-CN":[["p","\u7981\u7528\u65f6\u95f4\u9009\u62e9\u3002"]],"en-US":[["p","A disabled state of the ",["code","TimePicker"],"."]]},meta:{order:3,title:{"zh-CN":"\u7981\u7528","en-US":"disabled"},filename:"components/time-picker/demo/disabled.md",id:"components-time-picker-demo-disabled"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> moment <span class="token keyword" >from</span> <span class="token string" >\'moment\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >moment</span><span class="token punctuation" >(</span><span class="token string" >\'12:08:23\'</span><span class="token punctuation" >,</span> <span class="token string" >\'HH:mm:ss\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >disabled</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(p["default"],{defaultValue:(0,i["default"])("12:08:23","HH:mm:ss"),disabled:!0})}}},1023:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(70),a(101)),p=t(e),o=a(1),c=t(o),u=a(2),l=(t(u),a(21)),i=t(l);n.exports={content:{"zh-CN":[["p","TimePicker \u6d6e\u5c42\u4e2d\u7684\u5217\u4f1a\u968f\u7740 ",["code","format"]," \u53d8\u5316\uff0c\u5f53\u7565\u53bb ",["code","format"]," \u4e2d\u7684\u67d0\u90e8\u5206\u65f6\uff0c\u6d6e\u5c42\u4e2d\u5bf9\u5e94\u7684\u5217\u4e5f\u4f1a\u6d88\u5931\u3002"]],"en-US":[["p","While part of ",["code","format"]," is omitted, the corresponding column in panel will disappear, too."]]},meta:{order:4,title:{"zh-CN":"\u9690\u85cf\u67d0\u5217","en-US":"Hide Column"},filename:"components/time-picker/demo/hide-options.md",id:"components-time-picker-demo-hide-options"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> moment <span class="token keyword" >from</span> <span class="token string" >\'moment\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> format <span class="token operator" >=</span> <span class="token string" >\'HH:mm\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >moment</span><span class="token punctuation" >(</span><span class="token string" >\'12:08\'</span><span class="token punctuation" >,</span> format<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >format</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>format<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n="HH:mm";return c["default"].createElement(p["default"],{defaultValue:(0,i["default"])("12:08",n),format:n})}}},1024:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(70),a(101)),p=t(e),o=a(1),c=t(o),u=a(2),l=(t(u),a(21)),i=t(l);n.exports={content:{"zh-CN":[["p","\u4e09\u79cd\u5927\u5c0f\u7684\u8f93\u5165\u6846\uff0c\u5927\u7684\u7528\u5728\u8868\u5355\u4e2d\uff0c\u4e2d\u7684\u4e3a\u9ed8\u8ba4\u3002"]],"en-US":[["p","The input box comes in three sizes. large is used in the form, while the medium size is the default."]]},meta:{order:2,title:{"zh-CN":"\u4e09\u79cd\u5927\u5c0f","en-US":"Three Sizes"},filename:"components/time-picker/demo/size.md",id:"components-time-picker-demo-size"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> moment <span class="token keyword" >from</span> <span class="token string" >\'moment\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >moment</span><span class="token punctuation" >(</span><span class="token string" >\'12:08:23\'</span><span class="token punctuation" >,</span> <span class="token string" >\'HH:mm:ss\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >moment</span><span class="token punctuation" >(</span><span class="token string" >\'12:08:23\'</span><span class="token punctuation" >,</span> <span class="token string" >\'HH:mm:ss\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >moment</span><span class="token punctuation" >(</span><span class="token string" >\'12:08:23\'</span><span class="token punctuation" >,</span> <span class="token string" >\'HH:mm:ss\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],{defaultValue:(0,i["default"])("12:08:23","HH:mm:ss"),size:"large"}),c["default"].createElement(p["default"],{defaultValue:(0,i["default"])("12:08:23","HH:mm:ss")}),c["default"].createElement(p["default"],{defaultValue:(0,i["default"])("12:08:23","HH:mm:ss"),size:"small"}))}}},1025:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(a(70),a(101)),p=t(e),o=a(3),c=t(o),u=a(5),l=t(u),i=a(4),k=t(i),r=a(1),d=t(r),m=a(2);t(m);n.exports={content:{"zh-CN":[["p","value \u548c onChange \u9700\u8981\u914d\u5408\u4f7f\u7528\u3002"]],"en-US":[["p",["code","value"]," and ",["code","onChange"]," should be used together,"]]},meta:{order:1,title:{"zh-CN":"\u53d7\u63a7\u7ec4\u4ef6","en-US":"Under Control"},filename:"components/time-picker/demo/value.md",id:"components-time-picker-demo-value"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >Demo</span> <span class="token keyword" >extends</span> <span class="token class-name" >React<span class="token punctuation" >.</span>Component</span> <span class="token punctuation" >{</span>\n  state <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  onChange <span class="token operator" >=</span> <span class="token punctuation" >(</span>time<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>time<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> time <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){function s(){var a,t,e;(0,c["default"])(this,s);for(var p=arguments.length,o=Array(p),u=0;u<p;u++)o[u]=arguments[u];return a=t=(0,l["default"])(this,n.call.apply(n,[this].concat(o))),t.state={value:null},t.onChange=function(n){console.log(n),t.setState({value:n})},e=a,(0,l["default"])(t,e)}return(0,k["default"])(s,n),s.prototype.render=function(){return d["default"].createElement(p["default"],{value:this.state.value,onChange:this.onChange})},s}(d["default"].Component);return d["default"].createElement(n,null)}}},1270:function(n,s,a){n.exports={addon:a(1019),basic:a(1020),"disable-options":a(1021),disabled:a(1022),"hide-options":a(1023),size:a(1024),value:a(1025)}}});