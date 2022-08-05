"use strict";(self.webpackChunknearpay_donate=self.webpackChunknearpay_donate||[]).push([[470],{5781:function(e,n,r){r.r(n),r.d(n,{default:function(){return ee}});var a=r(9824),t=r.n(a),i=r(8214),c=r(5861),s=r(8963),l=r(2645),o=function(){var e,n=window.near,r=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(r,a,t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.signAndSendTransaction({receiverId:a,actions:[{methodName:"ft_transfer",args:{receiver_id:t,amount:r},gas:s.DEFAULT_FUNCTION_CALL_GAS,deposit:1}]}));case 1:case"end":return e.stop()}}),e)})));return function(n,r,a){return e.apply(this,arguments)}}(),a=function(e,n){if(e.response.error){var r,a;(0,l.A)(null!==(r=null===(a=e.response.error.kind)||void 0===a?void 0:a.ExecutionError)&&void 0!==r?r:"Contract error")}else{var t="".concat(window.location.origin,"/payment/").concat(n.paymentId,"/pending");window.location.href=t}};return{isAvailable:null!==(e=null===n||void 0===n?void 0:n.isSender)&&void 0!==e&&e,pay:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t,c){var s,o,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n&&!1!==n.isSender){e.next=2;break}return e.abrupt("return");case 2:if(!1!==n.isSignedIn()){e.next=5;break}return e.next=5,n.requestSignIn({contractId:"gopaywith.near"});case 5:e.t0=t.ticker,e.next="NEAR"===e.t0?8:"USN"===e.t0?13:19;break;case 8:return e.next=10,n.sendMoney({receiverId:c.address,amount:c.amount});case 10:return s=e.sent,a(s,c),e.abrupt("return");case 13:return o=(1e18*+c.displayAmountUsd).toString(),e.next=16,r(o,"usn",c.address);case 16:return d=e.sent,a(d,c),e.abrupt("return");case 19:return(0,l.A)("This ticker is not supported yet"),e.abrupt("return");case 21:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}},d=function(){var e=function(e){return"NEAR"===e.ticker&&function(){var e,n=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(n=!0),n}()};return{isAvailable:e,pay:function(){var n=(0,c.Z)((0,i.Z)().mark((function n(r,a){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!1!==e(r)){n.next=3;break}return(0,l.A)("Trust Wallet is not support for current platform or currency"),n.abrupt("return");case 3:"c397","https://link.trustwallet.com/send",window.location.href="".concat("https://link.trustwallet.com/send","?asset=").concat("c397","&address=").concat(a.address,"&amount=").concat(a.displayAmount);case 6:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}},u=r(8767),p=r(4443),m=r(184),h=t()("pay-with-near-agreement"),f=function(e){var n=e.className;return(0,m.jsxs)("div",{className:h.mix(n),children:["By continuing, you agree to this"," ",(0,m.jsx)("a",{href:"https://nearpay.co/privacy_policy",target:"_blank",rel:"noopener noreferrer",children:"privacy policy"})," ","and"," ",(0,m.jsx)("a",{href:"https://nearpay.co/terms_of_use",target:"_blank",rel:"noopener noreferrer",children:"terms of service"})]})},v=r(885),y=r(8683),x=r(4925),b=r(1694),g=r.n(b),w=r(2791),k=["disabled","children","loading","className","withArrow","loadingText","icon"];function j(e){var n=e.disabled,r=e.loading;return n?"ProceedButton--disabled":r?"ProceedButton--loading":"ProceedButton--active"}var N=(0,w.forwardRef)((function(e,n){var r=e.disabled,a=void 0!==r&&r,t=e.children,i=e.loading,c=void 0!==i&&i,s=e.className,l=(e.withArrow,e.loadingText),o=e.icon,d=(0,x.Z)(e,k),u=j({disabled:a,loading:c});return(0,m.jsxs)("button",(0,y.Z)((0,y.Z)({ref:n,className:g()("ProceedButton",u,s),disabled:a},d),{},{children:[c&&l?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{children:l}),(0,m.jsx)("span",{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{children:t}),(0,m.jsx)("span",{})]}),o&&(0,m.jsx)("div",{className:"ProceedButton__icon",children:o})]}))})),_=r(948),C=["label","slotAfterInput","slotRight","slotAfterLabel","children","error","size","textSize","className","placeholder"];function S(e){var n=e.label,r=e.slotAfterInput,a=e.slotRight,t=e.slotAfterLabel,i=e.children,c=e.error,s=(e.size,e.textSize,e.className),l=(e.placeholder,(0,x.Z)(e,C));if(r&&a)throw Error("Only one of after input slots can be used");return(0,m.jsxs)("label",(0,y.Z)((0,y.Z)({className:g()("Input",c?"Input--hasError":"",s)},l),{},{children:[(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsxs)("div",{className:"flex-grow",children:[(0,m.jsxs)("div",{className:"Input__header",children:[(0,m.jsx)("div",{className:"Input__label",children:n}),t]}),(0,m.jsxs)("div",{className:"Input__wrapper",children:["function"===typeof i?i({inputClass:"Input__input"}):i,r?(0,m.jsx)("div",{className:"Input__after",children:r}):null]})]}),a?(0,m.jsx)("div",{className:"Input__afterCentered",children:a}):null]}),c?(0,m.jsx)("div",{className:"Input__error",children:c}):null]}))}var A=["icon","className","transform","size","children"];function Z(e){e.icon;var n=e.className,r=e.transform,a=e.size,t=e.children,i=(0,x.Z)(e,A),c=function(e){if(!e)return"";for(var n=[],r=0,a=Object.entries(e);r<a.length;r++){var t=(0,v.Z)(a[r],2),i=t[0],c=t[1];n.push("".concat(i,"(").concat(c,")"))}return n.join(",")}(r||{});return(0,m.jsx)("i",(0,y.Z)((0,y.Z)({className:g()("pay-with-near-icon",n),style:{transform:c,width:a,height:a}},i),{},{children:t}))}var I=["currency","options","className","disabled","onCurrencySelectClick"];function E(e){var n=e.currency,r=e.options,a=e.className,t=e.disabled,i=e.onCurrencySelectClick,c=(0,x.Z)(e,I),s=(0,w.useState)(!1),l=(0,v.Z)(s,2),o=l[0],d=l[1],u=(0,w.useCallback)((function(){d((function(e){return!e}))}),[]),h=(0,w.useCallback)((function(e){u(),i(e)}),[]);return(0,m.jsx)("div",(0,y.Z)((0,y.Z)({className:g()("CurrencySelect",t?"CurrencySelect--disabled":"",a)},c),{},{children:Boolean(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iPhone/i))?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{className:"CurrencySelect__icon",children:(0,m.jsx)("img",{src:n.logoUrl,alt:n.viewedTicker})}),(0,m.jsx)("select",{className:"CurrencySelect__select",onChange:function(e){return i(e.target.value)},children:null===r||void 0===r?void 0:r.map((function(e){return(0,m.jsx)("option",{value:e.ticker,children:e.ticker},e.ticker)}))})]}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"CurrencySelect__container",children:[(0,m.jsxs)("button",{className:"CurrencySelect__button",onClick:u,children:[(0,m.jsx)(Z,{className:"CurrencySelect__icon",children:(0,m.jsx)("img",{src:n.logoUrl,alt:n.viewedTicker})}),(0,m.jsx)("div",{className:"CurrencySelect__text",children:n.ticker}),(0,m.jsx)(Z,{size:20,className:"CurrencySelect__arrow",children:(0,m.jsx)(p.UL,{})})]}),o&&(0,m.jsx)("ul",{className:"CurrencySelect__list",children:null===r||void 0===r?void 0:r.map((function(e){return(0,m.jsxs)("li",{className:"CurrencySelect__item",onClick:function(){return h(e.ticker)},children:[(0,m.jsx)(Z,{className:"CurrencySelect__icon",children:(0,m.jsx)("img",{src:e.logoUrl,alt:e.ticker})}),e.ticker]},e.ticker)}))})]})})}))}var z=["onInput","value","label","onValueChange","onCurrencySelectClick","error","selectDisabled","inputDisabled","currency","currencies","isLoading"];function P(e){var n=e.onInput,r=e.value,a=e.label,t=e.onValueChange,i=e.onCurrencySelectClick,c=e.error,s=e.selectDisabled,l=e.inputDisabled,o=e.currency,d=e.currencies,u=e.isLoading,p=void 0!==u&&u,h=(0,x.Z)(e,z),f=o.symbol;return(0,m.jsx)(S,(0,y.Z)((0,y.Z)({label:a,error:c,slotAfterInput:(0,m.jsx)(E,{currency:o,onCurrencySelectClick:s?function(){}:i,disabled:!!s,options:d})},h),{},{children:p?(0,m.jsx)("input",{disabled:!0,readOnly:!0}):(0,m.jsx)(_.Z,{thousandSeparator:!1,prefix:f,onValueChange:t,allowLeadingZeros:!0,decimalScale:o.roundOff,onInput:n,value:r,placeholder:"0.00",readOnly:l})}))}var T=["className"];function U(e){var n=e.className,r=(0,x.Z)(e,T);return(0,m.jsx)("div",(0,y.Z)({className:g()("WidgetContainer",n)},r))}var L=r(7892),R=r.n(L),W=(0,a.block)("pay-with-near-pay-timer"),D=function(e){var n=e.expiryAt,r=e.onExpired,a=(0,w.useState)(B(n)),t=(0,v.Z)(a,2),i=t[0],c=t[1];return(0,w.useEffect)((function(){B(n)<0&&r();var e=setTimeout((function(){c(B(n))}),1e3);return function(){return clearTimeout(e)}}),[i,n,r]),B(n)<0?null:(0,m.jsx)("div",{className:W(),children:q(i)})},B=function(e){var n=R()(e),r=R().utc();return n.diff(r)},q=function(e){var n=Math.floor(e/6e4),r=e%6e4,a=Math.floor(r/1e3);return"".concat(n,":").concat(a>9?a:"0".concat(a))},O=r(6009),F=(0,a.block)("pay-with-near-pay-widget"),M=(0,a.block)("pay-with-near-pay-widget-description"),V=function(e){var n,r=e.payment,a=e.defaultCurrency,t=e.onPay,i=e.onExpired,c=e.currencies,s=e.onSenderWallet,l=e.hasSenderWallet,o=e.hasTrustWallet,d=e.onTrustWallet,u=(0,w.useState)(),h=(0,v.Z)(u,2),f=h[0],y=h[1],x=(0,w.useCallback)((function(e){var n=null===c||void 0===c?void 0:c.find((function(n){return n.ticker===e}));y(n)}),[c]);return(0,m.jsxs)(U,{className:F(),children:[(0,m.jsx)("div",{className:F("title"),children:r.name}),(0,m.jsx)("div",{className:F("description"),children:r.description}),(0,m.jsxs)("div",{className:M(),children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:M("label"),children:"Payment: "}),(0,m.jsx)("div",{children:r.paymentId})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:M("label"),children:"Recipient: "}),(0,m.jsx)("div",{className:M("address"),children:r.address})]})]}),(0,m.jsx)(D,{expiryAt:r.expiryAt,onExpired:i}),(0,m.jsx)(P,{label:"Amount to Pay",value:r[(n=(null===f||void 0===f?void 0:f.parameter)||(null===a||void 0===a?void 0:a.parameter),n.toLowerCase().replace(/([-_][a-z])/g,(function(e){return e.toUpperCase().replace("-","").replace("_","")})))],currency:f||a,onValueChange:function(){},onCurrencySelectClick:x,selectDisabled:!1,currencies:c,className:"mb-4"}),(0,m.jsx)(N,{onClick:function(){return t(f||a)},children:"Pay with NEAR wallet"}),l&&(0,m.jsx)(N,{onClick:function(){return s(f||a)},children:"Pay with Sender Wallet"}),o(f||a)&&(0,m.jsx)(N,{onClick:function(){return d(f||a)},children:"Pay with Trust Wallet"}),(0,m.jsx)("div",{className:F("or"),children:"or"}),(0,m.jsx)("div",{className:F("qr-code-container"),children:(0,m.jsx)(O.tv,{value:"".concat(r.address,"?amount=").concat(r.displayAmount)})}),(0,m.jsx)("div",{className:F("payment-method-text"),children:"Scan following\xa0QR code with your wallet or\xa0enter Account\xa0ID\xa0and amount manually."}),(0,m.jsxs)("a",{href:"http://nearpay.co",target:"_blank",rel:"noopener noreferrer",className:g()(F("link-nearpay")),children:[(0,m.jsx)("span",{className:F("link-nearpay_gray"),children:"Powered by"}),"  ",(0,m.jsx)(p.v5,{className:F("link-nearpay_icon"),width:"20",height:"15"}),"  ",(0,m.jsx)("span",{children:"NearPay"})]})]})},X=r(6871),G=r(2419),Q=r(9933),H=r(4967),J=r(1591),K="".concat(window.location.origin,"/payment"),Y=function(e){var n=e.near,r=e.payment;return r?n.isAuthorized?function(e){switch(e.ticker){case"NEAR":var a=(0,H.M)(+r.displayAmount);if(!a||!r.address)throw new Error("Data is empty");n.send(a,r.address,"".concat(K,"/").concat(r.paymentId,"/pending"));break;case"USN":var t=1e18*+r.displayAmountUsd;if(!t||!r.address)throw new Error("Data is empty");n.ftTransfer(""+t,"usn",r.address,"".concat(K,"/").concat(r.paymentId,"/pending"));break;default:throw new Error("Unsupported currency")}}:function(){return n.login({successUrl:"".concat(K,"/").concat(r.paymentId,"/send"),failureUrl:"".concat(K,"/").concat(r.paymentId,"/failure")})}:function(){throw new Error("Payment is empty")}},$=(0,a.block)("pay-with-near-payment-page");var ee=function(){var e=function(){var e=(0,X.UO)().id,n=(0,G.ZP)("currencies",(function(){return Q.i6.fetchCurrencies(e)})),r=(0,J.V)(),a=r.payment,t=r.isExpired,i=r.handleExpired,c=(0,H.T)(),s=Y({near:c,payment:null!==a&&void 0!==a?a:null}),l=(0,w.useMemo)((function(){var e;return null===(e=n.data)||void 0===e?void 0:e.find((function(e){return e.ticker===u.N.defaultCurrency}))}),[n]);return{isExpired:t,isLoaded:!!n.data&&(!!a||t)&&c.isReady,payment:a,currencies:n.data,defaultCurrency:l,handlerPay:s,handleExpired:i}}(),n=e.defaultCurrency,r=e.payment,a=e.isLoaded,t=e.isExpired,i=e.handlerPay,c=e.handleExpired,s=e.currencies,l=o(),h=d();return a?t?(0,m.jsxs)(p.RX,{className:$(),children:[(0,m.jsx)("span",{className:$("message"),children:"This payment link is expired"}),(0,m.jsx)("a",{className:$("link"),href:u.N.payWithNearUrl,children:"Back to shop"})]}):r&&n?(0,m.jsxs)(p.RX,{children:[(0,m.jsx)(V,{payment:r,hasTrustWallet:h.isAvailable,hasSenderWallet:l.isAvailable,onTrustWallet:function(e){return h.pay(e,r)},onSenderWallet:function(e){return l.pay(e,r)},defaultCurrency:n,currencies:s,onExpired:c,onPay:i}),(0,m.jsx)(f,{})]}):null:(0,m.jsx)(p.RX,{children:(0,m.jsx)(p.zL,{children:(0,m.jsx)(p.aN,{})})})}}}]);
//# sourceMappingURL=470.f2da24e2.chunk.js.map