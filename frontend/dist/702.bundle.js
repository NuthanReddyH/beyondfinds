(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[702],{3702:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(7294),s=n(9250),a=n(5998),i=n(6984),o=n(7063),c=n(5725),u=n(2658),l=n(7666),p=n(7920),f=n(8748),g=n(6492),d=n(2191),m=n(3379),b=n.n(m),h=n(7795),y=n.n(h),v=n(569),_=n.n(v),w=n(3565),E=n.n(w),k=n(9216),x=n.n(k),j=n(4589),O=n.n(j),S=n(3139),Z={};Z.styleTagTransform=O(),Z.setAttributes=E(),Z.insert=_().bind(null,"head"),Z.domAPI=y(),Z.insertStyleElement=x(),b()(S.Z,Z),S.Z&&S.Z.locals&&S.Z.locals;var P=n(4648),A=n(5890),T=n(202);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){var r,s,a;r=e,s=t,a=n[t],(s=function(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===I(t)?t:String(t)}(s))in r?Object.defineProperty(r,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[s]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,a,i,o=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,s=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw s}}return o}}(e,t)||U(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(){var e=(0,s.UO)(),t=e.categoryName,n=e.categoryId,m=(0,a.I0)(),b=N((0,r.useState)("recommend"),2),h=b[0],y=b[1],v=N((0,r.useState)(1),2),_=v[0],w=v[1],E=N((0,r.useState)([]),2),k=E[0],x=E[1],j=(0,a.v9)((function(e){return e.products})),O=j.subcategories,S=j.products,Z=j.loading,I=j.error;console.log({products:S});var L=function(e){for(var t=F(e),n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),s=[t[r],t[n]];t[n]=s[0],t[r]=s[1]}return t};(0,r.useEffect)((function(){n&&(m((0,i.hv)(n)),m((0,i.an)(n)))}),[n,m]),(0,r.useEffect)((function(){if(S){var e;switch(h){case"priceLowToHigh":e=F(S).sort((function(e,t){return e.price-t.price}));break;case"priceHighToLow":e=F(S).sort((function(e,t){return t.price-e.price}));break;case"recommend":e=L(S);break;default:e=S}x(e)}}),[S,h]),console.log({shuffledProducts:k});var U=18*_,H=U-18,D=k.map((function(e){return{id:e._id,name:e.title,price:e.price,imageURL:e.productImage}})).slice(H,U);return Z?r.createElement(A.Z,null):I?r.createElement(T.Z,null):r.createElement("div",null,r.createElement("div",{className:"banner-img"},r.createElement("img",{src:d.default,alt:"Banner"}),r.createElement("h1",null,t)),r.createElement("div",{className:"subcategories-section"},r.createElement(u.Z,{variant:"h4",component:"h2",style:{marginBottom:"16px"}},"Subcategories"),r.createElement(c.ZP,{container:!0,spacing:2,justifyContent:"space-evenly"},O.map((function(e){return r.createElement(c.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,key:e.id,className:"no-shadow"},r.createElement("div",{className:"subcategory-item",onClick:function(){return t=e._id,console.log({subcategories:O}),void m((0,i.nr)(t));var t}},r.createElement("div",{className:"icon"},r.createElement("img",{src:(0,P.g)(e.imageUrl),alt:e.name})),r.createElement(u.Z,{variant:"h6"},e.name)))})))),r.createElement("div",{style:{marginTop:"8rem",marginBottom:"8rem",textAlign:"left"}},r.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}},r.createElement(u.Z,{variant:"h4",component:"h2"},"Products"),r.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.createElement(l.Z,{id:"sort-products-label"},"Sort By:"),r.createElement(p.Z,{labelId:"sort-products-label",id:"sort-products",value:h,onChange:function(e){var t,n=e.target.value;switch(y(n),n){case"priceLowToHigh":t=F(S).sort((function(e,t){return e.price-t.price}));break;case"priceHighToLow":t=F(S).sort((function(e,t){return t.price-e.price}));break;case"recommend":t=L(S);break;default:t=S}x(t)},style:{marginLeft:"8px"}},r.createElement(f.Z,{value:"recommend"},"Recommend"),r.createElement(f.Z,{value:"priceLowToHigh"},"Price: Low to High"),r.createElement(f.Z,{value:"priceHighToLow"},"Price: High to Low")))),r.createElement(c.ZP,{container:!0,spacing:2},null==D?void 0:D.map((function(e){return r.createElement(c.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,key:e.id},r.createElement(o.Z,{product:C(C({},e),{},{imageURL:(0,P.g)(e.imageURL)})}))}))),r.createElement("div",{className:"flex justify-center my-14"},r.createElement(g.Z,{count:Math.ceil(k.length/18),shape:"rounded",page:_,onChange:function(e,t){w(t)}}))))}},7063:function(e,t,n){"use strict";var r=n(7294),s=n(5295),a=n(2643),i=n(4962),o=n(2658),c=n(4648);t.Z=function(e){var t=e.product,n=e.height,u=e.showDesc;return r.createElement(s.Z,{style:{height:n},className:"no-shadow"},r.createElement("a",null,r.createElement("div",{className:"common-img"},r.createElement(i.Z,{component:"img",alt:t.name,height:"200",image:t.imageURL,title:t.name})),r.createElement(a.Z,null,r.createElement(o.Z,{variant:"h6",component:"div"},t.name),r.createElement(o.Z,{variant:"subtitle1",color:"text.secondary"},u?t.price:(0,c.T)(t.price)))))}},4648:function(e,t,n){"use strict";n.d(t,{T:function(){return a},g:function(){return s}});var r=n(2594),s=function(e){try{return r("./".concat(e)).default}catch(t){return console.error("Image not found: ".concat(e),t),""}},a=function(e){return"CA $".concat(parseFloat(e).toFixed(2))}},3139:function(e,t,n){"use strict";var r=n(8081),s=n.n(r),a=n(3645),i=n.n(a)()(s());i.push([e.id,".no-shadow{\r\n    box-shadow: none;\r\n    border: 1px solid #F7F9FA;\r\n    transition: 0.6s ease all;\r\n}\r\n\r\n.no-shadow:hover{\r\n    box-shadow: 0px 1px 6px rgba(1, 1, 6, 0.08);\r\n}\r\n\r\n.no-shadow .common-img{\r\n    height: 200px;\r\n    padding: 10px 15px;\r\n}\r\n.no-shadow .common-img img{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n}\r\n\r\n.banner-img{\r\n    width: 100%;\r\n    height: 40vh;\r\n    position: relative;\r\n}\r\n\r\n.banner-img img{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    object-position: center;\r\n}\r\n\r\n.banner-img h1{\r\n    left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-size: 44px;\r\n}\r\n.subcategories-section {\r\n    margin-top: 2rem; /* Adds space above the subcategories heading */\r\n  }\r\n  \r\n  .subcategory-item {\r\n    display: flex;\r\n    flex-direction: column; /* Stack the image and name vertically */\r\n    align-items: center; /* Center the content */\r\n    text-align: center; /* Center the text */\r\n    height: 100%; /* Full height of the parent */\r\n    padding: 1rem; /* Space around each item */\r\n  }\r\n  .sub-container {\r\n    justify-content: space-evenly;\r\n  }\r\n  .subcategory-item .icon {\r\n    height: 150px; /* Fixed height for the image container */\r\n     /* Full width */\r\n    margin-bottom: 1rem; /* Space between image and text */\r\n  }\r\n  \r\n  .subcategory-item img {\r\n    max-height: 100%; /* Ensures images fill the container height */\r\n    max-width: 100%; /* Ensures images fill the container width */\r\n    object-fit: cover; /* Ensures images cover the area without distortion */\r\n  }\r\n  \r\n  /* Apply no-shadow styles on hover */\r\n  .subcategory-item:hover {\r\n    box-shadow: 0px 1px 6px rgba(1, 1, 6, 0.08);\r\n    border: 1px solid #F7F9FA;\r\n  }\r\n  ",""]),t.Z=i},4796:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/Account-rafiki.png"},5202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/Ecommerce web page-amico.png"},8109:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/Ecommerce web page-bro.png"},4879:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/Ecommerce web page-rafiki.png"},9922:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/In no time-cuate.png"},1717:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/Tablet login-bro.png"},1443:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/Video upload-pana.png"},3722:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/accessory.png"},3749:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/ankle_boots.png"},9078:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/arrow.png"},4471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/ballet_flats.png"},7005:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/banner.jpg"},9641:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/banner.png"},7253:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/baseball_cap.png"},2473:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/bg.png"},2191:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/bg2.png"},7690:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/bifold_wallet.png"},6989:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/braided_belt.png"},361:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/bucket_hat.png"},6880:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/canvas_belt.png"},2918:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/canvas_wallet.png"},814:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/card1.png"},1447:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/card2.png"},3503:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/cargo_pants.png"},7540:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/clothing.png"},6716:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/dad_cap.png"},5201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/denim_jacket.png"},9582:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/dress1.png"},4818:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/dress2.png"},1764:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/dress3.png"},7743:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/espadrilles.png"},5835:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/fedora_hat.png"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/high_top_sneakers.png"},2635:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/knitted_sweater.png"},7524:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/leather_belt.png"},9671:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/leather_boots.png"},7592:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/leather_wallet.png"},9088:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/linen_blouse.png"},989:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/login.png"},4705:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/logo.png"},8018:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/logo2.png"},326:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/logo3.png"},8368:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/next.png"},1079:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/panama_hat.png"},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/plaid_shirt.png"},6174:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/pleated_skirt.png"},2239:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/polka_dress.png"},2623:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/popular1.png"},3197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/popular2.png"},2271:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/popular3.png"},4281:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/popular4.png"},7271:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/previous.png"},6969:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/recent1.png"},610:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/recent2.png"},5164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/recent3.png"},639:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/recent4.png"},4820:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/recent5.png"},5747:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/recent6.png"},570:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/register.png"},3954:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/running_sneakers.png"},9825:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/sell1.png"},5133:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/sell2.png"},4166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/sell3.png"},7163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/shoes.png"},680:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/slipon_loafers.png"},6939:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/snapback_cap.png"},4220:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/stiletto_heels.png"},6266:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/striped_tshirt.png"},9681:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/studded_belt.png"},162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/summer_sandals.png"},2051:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/sun_hat.png"},367:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/trucker_cap.png"},4410:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/wedge_heels.png"},4122:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/zip_wallet.png"},2594:function(e,t,n){var r={"./Account-rafiki.png":4796,"./Ecommerce web page-amico.png":5202,"./Ecommerce web page-bro.png":8109,"./Ecommerce web page-rafiki.png":4879,"./In no time-cuate.png":9922,"./Tablet login-bro.png":1717,"./Video upload-pana.png":1443,"./accessory.png":3722,"./ankle_boots.png":3749,"./arrow.png":9078,"./ballet_flats.png":4471,"./banner.jpg":7005,"./banner.png":9641,"./baseball_cap.png":7253,"./bg.png":2473,"./bg2.png":2191,"./bifold_wallet.png":7690,"./braided_belt.png":6989,"./bucket_hat.png":361,"./canvas_belt.png":6880,"./canvas_wallet.png":2918,"./card1.png":814,"./card2.png":1447,"./cargo_pants.png":3503,"./clothing.png":7540,"./dad_cap.png":6716,"./denim_jacket.png":5201,"./dress1.png":9582,"./dress2.png":4818,"./dress3.png":1764,"./espadrilles.png":7743,"./fedora_hat.png":5835,"./high_top_sneakers.png":195,"./knitted_sweater.png":2635,"./leather_belt.png":7524,"./leather_boots.png":9671,"./leather_wallet.png":7592,"./linen_blouse.png":9088,"./login.png":989,"./logo.png":4705,"./logo2.png":8018,"./logo3.png":326,"./next.png":8368,"./panama_hat.png":1079,"./plaid_shirt.png":171,"./pleated_skirt.png":6174,"./polka_dress.png":2239,"./popular1.png":2623,"./popular2.png":3197,"./popular3.png":2271,"./popular4.png":4281,"./previous.png":7271,"./recent1.png":6969,"./recent2.png":610,"./recent3.png":5164,"./recent4.png":639,"./recent5.png":4820,"./recent6.png":5747,"./register.png":570,"./running_sneakers.png":3954,"./sell1.png":9825,"./sell2.png":5133,"./sell3.png":4166,"./shoes.png":7163,"./slipon_loafers.png":680,"./snapback_cap.png":6939,"./stiletto_heels.png":4220,"./striped_tshirt.png":6266,"./studded_belt.png":9681,"./summer_sandals.png":162,"./sun_hat.png":2051,"./trucker_cap.png":367,"./wedge_heels.png":4410,"./zip_wallet.png":4122};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=2594}}]);