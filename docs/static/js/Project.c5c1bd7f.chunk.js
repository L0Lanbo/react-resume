(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[27],{1393:function(e,t,n){"use strict";n.r(t);n(575);var a=n(608),r=(n(490),n(489)),o=(n(22),n(848),n(548),n(180),n(152),n(0)),i=n.n(o),l=n(1),c=n(2),u=n.n(c),s=n(14),f=n(113),p=n(32),m=n(176),d=n(137);function y(e){if(!o.isValidElement(e))return e;for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return o.cloneElement.apply(o,[e].concat(n))}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=j(e);if(t){var r=j(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function x(e,t){return e[t]&&Math.floor(24/e[t])}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(i,e);var t,n,a,r=S(i);function i(){var e;return b(this,i),(e=r.apply(this,arguments)).renderItem=function(t){var n=t.getPrefixCls,a=e.context,r=a.grid,i=a.itemLayout,l=e.props,c=l.prefixCls,s=l.children,f=l.actions,p=l.extra,m=l.className,g=C(l,["prefixCls","children","actions","extra","className"]),b=n("list",c),v=f&&f.length>0&&o.createElement("ul",{className:"".concat(b,"-item-action"),key:"actions"},f.map((function(e,t){return o.createElement("li",{key:"".concat(b,"-item-action-").concat(t)},e,t!==f.length-1&&o.createElement("em",{className:"".concat(b,"-item-action-split")}))}))),E=r?"div":"li",S=o.createElement(E,w({},g,{className:u()("".concat(b,"-item"),m,h({},"".concat(b,"-item-no-flex"),!e.isFlexMode()))}),"vertical"===i&&p?[o.createElement("div",{className:"".concat(b,"-item-main"),key:"content"},s,v),o.createElement("div",{className:"".concat(b,"-item-extra"),key:"extra"},p)]:[s,v,y(p,{key:"extra"})]);return r?o.createElement(d.a,{span:x(r,"column"),xs:x(r,"xs"),sm:x(r,"sm"),md:x(r,"md"),lg:x(r,"lg"),xl:x(r,"xl"),xxl:x(r,"xxl")},S):S},e}return t=i,(n=[{key:"isItemContainsTextNodeAndNotSingular",value:function(){var e,t=this.props.children;return o.Children.forEach(t,(function(t){"string"===typeof t&&(e=!0)})),e&&o.Children.count(t)>1}},{key:"isFlexMode",value:function(){var e=this.props.extra;return"vertical"===this.context.itemLayout?!!e:!this.isItemContainsTextNodeAndNotSingular()}},{key:"render",value:function(){return o.createElement(p.a,null,this.renderItem)}}])&&v(t.prototype,n),a&&v(t,a),i}(o.Component);function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=A(e);if(t){var r=A(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}P.Meta=function(e){return o.createElement(p.a,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,r=e.className,i=e.avatar,l=e.title,c=e.description,s=C(e,["prefixCls","className","avatar","title","description"]),f=n("list",a),p=u()("".concat(f,"-item-meta"),r),m=o.createElement("div",{className:"".concat(f,"-item-meta-content")},l&&o.createElement("h4",{className:"".concat(f,"-item-meta-title")},l),c&&o.createElement("div",{className:"".concat(f,"-item-meta-description")},c));return o.createElement("div",w({},s,{className:p}),i&&o.createElement("div",{className:"".concat(f,"-item-meta-avatar")},i),(l||c)&&m)}))},P.contextTypes={grid:l.any,itemLayout:l.string};var T=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},Q=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(l,e);var t,n,r,i=D(l);function l(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=i.call(this,e)).defaultPaginationProps={current:1,total:0},t.keys={},t.onPaginationChange=t.triggerPaginationEvent("onChange"),t.onPaginationShowSizeChange=t.triggerPaginationEvent("onShowSizeChange"),t.renderItem=function(e,n){var a,r=t.props,o=r.renderItem,i=r.rowKey;return o?((a="function"===typeof i?i(e):"string"===typeof i?e[i]:e.key)||(a="list-item-".concat(n)),t.keys[n]=a,o(e,n)):null},t.renderEmpty=function(e,n){var a=t.props.locale;return o.createElement("div",{className:"".concat(e,"-empty-text")},a&&a.emptyText||n("List"))},t.renderList=function(e){var n,r=e.getPrefixCls,i=e.renderEmpty,l=t.state,c=l.paginationCurrent,p=l.paginationSize,d=t.props,y=d.prefixCls,g=d.bordered,h=d.split,b=d.className,v=d.children,E=d.itemLayout,S=d.loadMore,O=d.pagination,j=d.grid,w=d.dataSource,C=void 0===w?[]:w,x=d.size,P=d.header,k=d.footer,_=d.loading,z=T(d,["prefixCls","bordered","split","className","children","itemLayout","loadMore","pagination","grid","dataSource","size","header","footer","loading"]),L=r("list",y),D=_;"boolean"===typeof D&&(D={spinning:D});var R=D&&D.spinning,A="";switch(x){case"large":A="lg";break;case"small":A="sm"}var Q=u()(L,b,(M(n={},"".concat(L,"-vertical"),"vertical"===E),M(n,"".concat(L,"-").concat(A),A),M(n,"".concat(L,"-split"),h),M(n,"".concat(L,"-bordered"),g),M(n,"".concat(L,"-loading"),R),M(n,"".concat(L,"-grid"),j),M(n,"".concat(L,"-something-after-last-item"),t.isSomethingAfterLastItem()),n)),V=I(I(I({},t.defaultPaginationProps),{total:C.length,current:c,pageSize:p}),O||{}),F=Math.ceil(V.total/V.pageSize);V.current>F&&(V.current=F);var H,J=O?o.createElement("div",{className:"".concat(L,"-pagination")},o.createElement(a.a,I({},V,{onChange:t.onPaginationChange,onShowSizeChange:t.onPaginationShowSizeChange}))):null,U=N(C);if(O&&C.length>(V.current-1)*V.pageSize&&(U=N(C).splice((V.current-1)*V.pageSize,V.pageSize)),H=R&&o.createElement("div",{style:{minHeight:53}}),U.length>0){var Y=U.map((function(e,n){return t.renderItem(e,n)})),K=[];o.Children.forEach(Y,(function(e,n){K.push(o.cloneElement(e,{key:t.keys[n]}))})),H=j?o.createElement(m.a,{gutter:j.gutter},K):o.createElement("ul",{className:"".concat(L,"-items")},K)}else v||R||(H=t.renderEmpty(L,i));var W=V.position||"bottom";return o.createElement("div",I({className:Q},Object(s.a)(z,["rowKey","renderItem","locale"])),("top"===W||"both"===W)&&J,P&&o.createElement("div",{className:"".concat(L,"-header")},P),o.createElement(f.a,D,H,v),k&&o.createElement("div",{className:"".concat(L,"-footer")},k),S||("bottom"===W||"both"===W)&&J)};var n=e.pagination,r=n&&"object"===k(n)?n:{};return t.state={paginationCurrent:r.defaultCurrent||1,paginationSize:r.defaultPageSize||10},t}return t=l,(n=[{key:"getChildContext",value:function(){return{grid:this.props.grid,itemLayout:this.props.itemLayout}}},{key:"triggerPaginationEvent",value:function(e){var t=this;return function(n,a){var r=t.props.pagination;t.setState({paginationCurrent:n,paginationSize:a}),r&&r[e]&&r[e](n,a)}}},{key:"isSomethingAfterLastItem",value:function(){var e=this.props,t=e.loadMore,n=e.pagination,a=e.footer;return!!(t||n||a)}},{key:"render",value:function(){return o.createElement(p.a,null,this.renderList)}}])&&z(t.prototype,n),r&&z(t,r),l}(o.Component);Q.Item=P,Q.childContextTypes={grid:l.any,itemLayout:l.string},Q.defaultProps={dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1};n(239);var V=n(177),F=(n(255),n(213)),H=(n(88),n(28)),J=(n(519),n(518)),U=(n(238),n(70)),Y=(n(237),n(143)),K=(n(69),n(6)),W=(n(142),n(50)),$=n(17),q=n(42),B=n(43),G=n(56),X=n(55),Z=(n(549),n(574)),ee=n(38);function te(e){return Object(ee.a)({url:"/project/list",method:"post",data:e})}function ne(e){return Object(ee.a)({url:"/project/delete",method:"post",data:e})}function ae(e){return Object(ee.a)({url:"/project/edit",method:"post",data:e})}n(850);var re=Z.a.Panel,oe={active:{label:"\u5185\u7f51\u4e0a\u7ebf",color:"blue"},published:{label:"\u5df2\u4e0a\u7ebf",color:"green"},close:{label:"\u5df2\u4e0b\u7ebf",color:""}},ie={react:{label:"React",color:"#61dafb"},vue:{label:"Vue",color:"#4fc08d"},antd:{label:"antd",color:"#0170fe"},iView:{label:"iView",color:"#2d8cf0"},vux:{label:"Vux",color:"#35495e"},elementUI:{label:"ElementUI",color:"#409efe"},vueElementAdmin:{label:"vue-element-admin",color:"#4caf50"},weex:{label:"Weex",color:"#3aabf4"},singleSpa:{label:"single-spa",color:"#ee689f"},ice:{label:"ice",color:"#6047de"},echarts:{label:"echarts",color:"#e43961"},cloudCharts:{label:"cloud-charts",color:"#ff8200"},formilyjs:{label:"formilyjs",color:"#4d1db5"},html:{label:"HTML5",color:"#f60"},css:{label:"CSS3",color:"#f90"},js:{label:"js",color:"#ffda3f"},jsp:{label:"JSP",color:"#2952a4"},angular:{label:"angular",color:"#eb5a5c"},fuse:{label:"Fuse-angular",color:"#2877c1"},emotion:{label:"emotion",color:"#c43bad"},tggLargeScreen:{label:"tgg-large-screen",color:"#612aaa"}},le=function(e){Object(G.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(q.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r)))._isMounted=!1,e.state={list:[],loading:!1,total:0,listQuery:{pageNumber:1,pageSize:10,title:"",star:"",status:""},editModalVisible:!1,editModalLoading:!1,currentRowData:{id:0,author:"",date:"",readings:0,star:"\u2605",status:"published",title:""}},e.fetchData=function(){e.setState({loading:!0}),te(e.state.listQuery).then((function(t){e.setState({loading:!1});var n=t.data.data.items,a=t.data.data.total;e._isMounted&&e.setState({list:n,total:a})}))},e.filterTitleChange=function(t){var n=t.target.value;e.setState((function(e){return{listQuery:Object($.a)({},e.listQuery,{title:n})}}))},e.filterStatusChange=function(t){e.setState((function(e){return{listQuery:Object($.a)({},e.listQuery,{status:t})}}))},e.filterTagsChange=function(t){e.setState((function(e){return{listQuery:Object($.a)({},e.listQuery,{tags:t})}}))},e.changePage=function(t,n){e.setState((function(e){return{listQuery:Object($.a)({},e.listQuery,{pageNumber:t})}}),(function(){e.fetchData()}))},e.changePageSize=function(t,n){e.setState((function(e){return{listQuery:Object($.a)({},e.listQuery,{pageNumber:1,pageSize:n})}}),(function(){e.fetchData()}))},e.handleDelete=function(t){ne({id:t.id}).then((function(t){W.a.success("\u5220\u9664\u6210\u529f"),e.fetchData()}))},e.handleEdit=function(t){e.setState({currentRowData:Object.assign({},t),editModalVisible:!0})},e.handleOk=function(t){var n=e.formRef.props.form;n.validateFields((function(t,a){if(!t){var r=Object($.a)({},a,{star:"".padStart(a.star,"\u2605"),date:a.date.format("YYYY-MM-DD HH:mm:ss")});e.setState({editModalLoading:!0}),ae(r).then((function(t){n.resetFields(),e.setState({editModalVisible:!1,editModalLoading:!1}),W.a.success("\u7f16\u8f91\u6210\u529f!"),e.fetchData()})).catch((function(e){W.a.success("\u7f16\u8f91\u5931\u8d25,\u8bf7\u91cd\u8bd5!")}))}}))},e.handleCancel=function(t){e.setState({editModalVisible:!1})},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=function(e){var t=e.type,n=e.text;return i.a.createElement("span",null,i.a.createElement(K.a,{type:t,style:{marginRight:8}}),n)};return i.a.createElement("div",{className:"app-container project-container"},i.a.createElement(Z.a,{defaultActiveKey:["1"]},i.a.createElement(re,{header:"\u7b5b\u9009",key:"1"},i.a.createElement(U.a,{layout:"inline"},i.a.createElement(U.a.Item,{label:"\u6807\u9898:"},i.a.createElement(Y.a,{onChange:this.filterTitleChange,allowClear:!0,placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"})),i.a.createElement(U.a.Item,{label:"\u6807\u7b7e:"},i.a.createElement(J.a,{style:{width:220},onChange:this.filterTagsChange,allowClear:!0,placeholder:"\u8bf7\u9009\u62e9\u6807\u7b7e"},Object.keys(ie).map((function(e){return i.a.createElement(J.a.Option,{value:e,key:e},ie[e].label)})))),i.a.createElement(U.a.Item,{label:"\u72b6\u6001:"},i.a.createElement(J.a,{style:{width:120},onChange:this.filterStatusChange,allowClear:!0,placeholder:"\u8bf7\u9009\u62e9\u72b6\u6001"},Object.keys(oe).map((function(e){return i.a.createElement(J.a.Option,{value:e,key:e},oe[e].label)})))),i.a.createElement(U.a.Item,null,i.a.createElement(H.a,{type:"primary",icon:"search",onClick:this.fetchData},"\u641c\u7d22"))))),i.a.createElement("br",null),i.a.createElement(r.a,null,i.a.createElement(Q,{itemLayout:"vertical",size:"large",pagination:!1,dataSource:this.state.list,loading:this.state.loading,renderItem:function(t){return i.a.createElement(Q.Item,{key:t.title,actions:[i.a.createElement(e,{type:"star-o",text:"156",key:"list-vertical-star-o"}),i.a.createElement(e,{type:"like-o",text:"156",key:"list-vertical-like-o"}),i.a.createElement(e,{type:"message",text:"2",key:"list-vertical-message"})],extra:t.img&&i.a.createElement("img",{width:272,alt:"logo",src:t.img})},i.a.createElement(Q.Item.Meta,{avatar:t.company.src?i.a.createElement(F.a,{src:t.company.src}):i.a.createElement(F.a,{style:{backgroundColor:t.company.color,verticalAlign:"middle",opacity:.8},src:t.company.src},t.company.name),title:i.a.createElement(i.a.Fragment,null,t.href?i.a.createElement("a",{href:t.href},t.title):i.a.createElement("span",null,t.title),i.a.createElement("span",{className:"status-wrapper"}," (",oe[t.status].label,")")),description:i.a.createElement(i.a.Fragment,null,t.tags.map((function(e){return i.a.createElement(V.a,{color:ie[e].color,key:e},ie[e].label)})),i.a.createElement("span",{className:"date-wrapper"},t.date))}),t.description.map((function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement("ul",{className:"content-wrapper"},t.content.map((function(e,t){return i.a.createElement("li",{key:t},e)}))))}})),i.a.createElement("br",null),i.a.createElement(a.a,{total:this.state.total,pageSizeOptions:["10","20","40"],showTotal:function(e){return"\u5171".concat(e,"\u6761\u6570\u636e")},onChange:this.changePage,current:this.state.listQuery.pageNumber,onShowSizeChange:this.changePageSize,showSizeChanger:!0,showQuickJumper:!0,hideOnSinglePage:!1}))}}]),n}(o.Component);t.default=le},848:function(e,t,n){},850:function(e,t,n){}}]);