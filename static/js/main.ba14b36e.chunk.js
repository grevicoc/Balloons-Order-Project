(this["webpackJsonpballoons-order-project"]=this["webpackJsonpballoons-order-project"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(2),r=s(3),a=s(5),n=s(4),i=s(1),o=s.n(i),l=s(7),d=s.n(l),j=(s(12),s.p+"static/media/Balloon.1930849d.svg"),p=s.p+"static/media/Vector 3.2a3c06a6.svg",m=s.p+"static/media/Ellipse 3.4903df8a.svg",b=s.p+"static/media/Ellipse 4.1e1199cf.svg",u=s.p+"static/media/balon-kaktus.254c5da8.jpg",h=s.p+"static/media/balon-pesta.906e5c6f.jpg",g=s.p+"static/media/balon-langit.473bf3e1.jpg",O=s.p+"static/media/balon-bintang2.2de1f268.jpg",f=s.p+"static/media/balon-rame.3c7caba1.jpg",x=s(0),y=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"main-container",children:[Object(x.jsx)(v,{}),Object(x.jsx)(k,{}),Object(x.jsx)(C,{})]})}}]),s}(o.a.Component),v=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).orderByClick=function(e){if("popular"===e.target.className)e.target.style.cssText="font-weight: bold; color: black;",r.setState({orderBy:"popular"}),document.querySelector(".price").style.cssText="font-weight: normal; color: #D1D2BC;",document.querySelector(".choosing-logo").style.cssText="left: none;",r.setState({itemsShown:r.state.items});else if("price"===e.target.className){if(e.target.style.cssText="font-weight: bold; color: black;",r.setState({orderBy:"price"}),document.querySelector(".popular").style.cssText="font-weight: normal; color: #D1D2BC;",document.querySelector(".choosing-logo").style.cssText="left: 7.8em;","asc"===r.state.ordering){var t=r.state.items.sort(r.descendingSort);r.setState({itemsShown:t})}else if("desc"===r.state.ordering){var s=r.state.items.sort(r.ascendingSort);r.setState({itemsShown:s})}}},r.state={orderBy:"popular",ordering:"desc",items:[Object(x.jsx)(B,{src:u,name:"Custom Party Balloons",price:15,description:"Bagus!"},1),Object(x.jsx)(B,{src:h,name:"Colorful Balloons",price:5,description:"Wow!"},2),Object(x.jsx)(B,{src:f,name:"So Many Balloons",price:50,description:"Awesome!"},3),Object(x.jsx)(B,{src:g,name:"Beatiful Ballons",price:20,description:"Magnificent!"},4),Object(x.jsx)(B,{src:O,name:"Star Ballons",price:25,description:"Cool!"},5)],itemsShown:[Object(x.jsx)(B,{src:u,name:"Custom Party Balloons",price:15,description:"Bagus!"},1),Object(x.jsx)(B,{src:h,name:"Colorful Balloons",price:5,description:"Wow!"},2),Object(x.jsx)(B,{src:f,name:"So Many Balloons",price:50,description:"Awesome!"},3),Object(x.jsx)(B,{src:g,name:"Beatiful Ballons",price:20,description:"Magnificent!"},4),Object(x.jsx)(B,{src:O,name:"Star Ballons",price:25,description:"Cool!"},5)]},r}return Object(r.a)(s,[{key:"ascendingSort",value:function(e,t){return e.props.price-t.props.price}},{key:"descendingSort",value:function(e,t){return t.props.price-e.props.price}},{key:"orderingClick",value:function(){console.log(this);var e=document.querySelector(".ordering-logo");if("desc"===this.state.ordering){if(this.setState({ordering:"asc"}),"price"===this.state.orderBy){var t=this.state.items.sort(this.descendingSort);this.setState({itemsShown:t})}e.style.cssText="transform : rotate(180deg)"}else if("asc"===this.state.ordering){if(this.setState({ordering:"desc"}),"price"===this.state.orderBy){var s=this.state.items.sort(this.ascendingSort);this.setState({itemsShown:s})}e.style.cssText="transform : none"}}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"left-container",children:[Object(x.jsxs)("div",{className:"top-sub-container",children:[Object(x.jsxs)("div",{className:"name-logo",children:[Object(x.jsx)("span",{children:"ballo"}),Object(x.jsx)("img",{src:j,alt:"shape-of-balloon"}),Object(x.jsx)("span",{children:" nn"})]}),Object(x.jsxs)("div",{className:"balloon-and-sort-ordering",children:[Object(x.jsx)("span",{children:"Balloons"}),Object(x.jsx)("img",{src:p,alt:"ordering-logo",className:"ordering-logo",onClick:function(){return e.orderingClick()}})]}),Object(x.jsxs)("div",{className:"sort-selection",children:[Object(x.jsx)(S,{}),Object(x.jsx)("span",{className:"popular",onClick:this.orderByClick,children:"by Popular"}),Object(x.jsx)("span",{className:"price",onClick:this.orderByClick,children:"by Price"})]})]}),Object(x.jsx)("div",{className:"bot-sub-container",children:this.state.itemsShown})]})}}]),s}(o.a.Component),S=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"choosing-logo",children:[Object(x.jsx)("img",{src:m,alt:"part-of-choosing-logo"}),Object(x.jsx)("img",{className:"white-dot",src:b,alt:"part-of-choosing-logo"})]})}}]),s}(o.a.Component),B=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(e){var r;return Object(c.a)(this,s),(r=t.call(this,e)).state={imgSrc:e.src,name:e.name,price:e.price,details:e.details},r}return Object(r.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"item-container",children:[Object(x.jsx)("img",{src:this.state.imgSrc,alt:this.state.name+"picture"}),Object(x.jsx)("span",{className:"item-name",children:this.state.name}),Object(x.jsxs)("span",{className:"item-price",children:["From $",this.state.price]})]})}}]),s}(o.a.Component),k=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"mid-container"})}}]),s}(o.a.Component),C=function(e){Object(a.a)(s,e);var t=Object(n.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"right-container"})}}]),s}(o.a.Component);d.a.render(Object(x.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ba14b36e.chunk.js.map