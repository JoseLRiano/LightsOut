(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(23)},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),i=(n(15),n(2)),s=n(3),u=n(4),l=n(5),f=n(1),p=n(9),h=n(6);n(17);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t){Object(u.a)(n,t);var e=d(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).handleClick=r.handleClick.bind(Object(h.a)(r)),r}return Object(s.a)(n,[{key:"handleClick",value:function(t){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var t="Cell"+(this.props.isLit?" Cell-lit":"");return a.a.createElement("td",{className:t,onClick:this.handleClick})}}]),n}(r.Component);n(19);function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var b=function(t){Object(u.a)(n,t);var e=m(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).state={hasWon:!1,board:r.createBoard()},r}return Object(s.a)(n,[{key:"createBoard",value:function(){for(var t=[],e=0;e<this.props.nrows;e++){for(var n=[],r=0;r<this.props.ncols;r++)n.push(Math.random()<this.props.chanceLightStartsOn);t.push(n)}return t}},{key:"flipCellsAround",value:function(t){var e=this.props,n=e.ncols,r=e.nrows,a=this.state.board,c=t.split("-").map(Number),o=Object(p.a)(c,2),i=o[0],s=o[1];function u(t,e){e>=0&&e<n&&t>=0&&t<r&&(a[t][e]=!a[t][e])}u(i,s),u(i,s-1),u(i,s+1),u(i-1,s),u(i+1,s);var l=a.every(function(t){return t.every(function(t){return!t})});this.setState({board:a,hasWon:l})}},{key:"render",value:function(){var t=this;if(this.state.hasWon)return a.a.createElement("div",{className:"Board-title"},a.a.createElement("div",{className:"winner"},a.a.createElement("span",{className:"neon-orange"},"YOU"),a.a.createElement("span",{className:"neon-blue"},"WIN!")));for(var e=[],n=0;n<this.props.nrows;n++){for(var r=[],c=function(e){var c="".concat(n,"-").concat(e);r.push(a.a.createElement(v,{key:c,isLit:t.state.board[n][e],flipCellsAroundMe:function(){return t.flipCellsAround(c)}}))},o=0;o<this.props.ncols;o++)c(o);e.push(a.a.createElement("tr",{key:n},r))}return a.a.createElement("div",null,a.a.createElement("div",{className:"Board-title"},a.a.createElement("div",{className:"neon-orange"},"Lights"),a.a.createElement("div",{className:"neon-blue"},"Out")),a.a.createElement("table",{className:"Board"},a.a.createElement("tbody",null,e)))}}]),n}(r.Component);b.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var y=b;n(21);function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t){Object(u.a)(n,t);var e=O(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(y,null))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.67a791aa.chunk.js.map