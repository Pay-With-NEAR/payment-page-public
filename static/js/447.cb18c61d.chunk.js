"use strict";(self.webpackChunknearpay_donate=self.webpackChunknearpay_donate||[]).push([[447],{3945:function(e,n,r){r.r(n),r.d(n,{default:function(){return G}});var a=r(9824),c=r.n(a),i=r(184),s=c()("pay-with-near-agreement"),t=function(e){var n=e.className;return(0,i.jsxs)("div",{className:s.mix(n),children:["By continuing, you agree to this"," ",(0,i.jsx)("a",{href:"https://nearpay.co/privacy_policy",target:"_blank",rel:"noopener noreferrer",children:"privacy policy"})," ","and"," ",(0,i.jsx)("a",{href:"https://nearpay.co/terms_of_use",target:"_blank",rel:"noopener noreferrer",children:"terms of service"})]})},l=r(885),o=r(4443),d=r(8683),u=r(4925),h=r(1694),p=r.n(h),m=r(2791),x=["disabled","children","loading","className","withArrow","loadingText","icon"];function f(e){var n=e.disabled,r=e.loading;return n?"ProceedButton--disabled":r?"ProceedButton--loading":"ProceedButton--active"}var y=(0,m.forwardRef)((function(e,n){var r=e.disabled,a=void 0!==r&&r,c=e.children,s=e.loading,t=void 0!==s&&s,l=e.className,o=(e.withArrow,e.loadingText),h=e.icon,m=(0,u.Z)(e,x),y=f({disabled:a,loading:t});return(0,i.jsxs)("button",(0,d.Z)((0,d.Z)({ref:n,className:p()("ProceedButton",y,l),disabled:a},m),{},{children:[t&&o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{children:o}),(0,i.jsx)("span",{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{children:c}),(0,i.jsx)("span",{})]}),h&&(0,i.jsx)("div",{className:"ProceedButton__icon",children:h})]}))})),v=r(948),j=["label","slotAfterInput","slotRight","slotAfterLabel","children","error","size","textSize","className","placeholder"];function N(e){var n=e.label,r=e.slotAfterInput,a=e.slotRight,c=e.slotAfterLabel,s=e.children,t=e.error,l=(e.size,e.textSize,e.className),o=(e.placeholder,(0,u.Z)(e,j));if(r&&a)throw Error("Only one of after input slots can be used");return(0,i.jsxs)("label",(0,d.Z)((0,d.Z)({className:p()("Input",t?"Input--hasError":"",l)},o),{},{children:[(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsxs)("div",{className:"flex-grow",children:[(0,i.jsxs)("div",{className:"Input__header",children:[(0,i.jsx)("div",{className:"Input__label",children:n}),c]}),(0,i.jsxs)("div",{className:"Input__wrapper",children:["function"===typeof s?s({inputClass:"Input__input"}):s,r?(0,i.jsx)("div",{className:"Input__after",children:r}):null]})]}),a?(0,i.jsx)("div",{className:"Input__afterCentered",children:a}):null]}),t?(0,i.jsx)("div",{className:"Input__error",children:t}):null]}))}var g=["icon","className","transform","size","children"];function b(e){e.icon;var n=e.className,r=e.transform,a=e.size,c=e.children,s=(0,u.Z)(e,g),t=function(e){if(!e)return"";for(var n=[],r=0,a=Object.entries(e);r<a.length;r++){var c=(0,l.Z)(a[r],2),i=c[0],s=c[1];n.push("".concat(i,"(").concat(s,")"))}return n.join(",")}(r||{});return(0,i.jsx)("i",(0,d.Z)((0,d.Z)({className:p()("pay-with-near-icon",n),style:{transform:t,width:a,height:a}},s),{},{children:c}))}var C=["currency","options","className","disabled","onCurrencySelectClick"];function _(e){var n=e.currency,r=e.options,a=e.className,c=e.disabled,s=e.onCurrencySelectClick,t=(0,u.Z)(e,C),h=(0,m.useState)(!1),x=(0,l.Z)(h,2),f=x[0],y=x[1],v=(0,m.useCallback)((function(){y((function(e){return!e}))}),[]),j=(0,m.useCallback)((function(e){v(),s(e)}),[]);return(0,i.jsx)("div",(0,d.Z)((0,d.Z)({className:p()("CurrencySelect",c?"CurrencySelect--disabled":"",a)},t),{},{children:Boolean(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iPhone/i))?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{className:"CurrencySelect__icon",children:(0,i.jsx)("img",{src:n.logoUrl,alt:n.viewedTicker})}),(0,i.jsx)("select",{className:"CurrencySelect__select",onChange:function(e){return s(e.target.value)},children:null===r||void 0===r?void 0:r.map((function(e){return(0,i.jsx)("option",{value:e.ticker,children:e.ticker},e.ticker)}))})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"CurrencySelect__container",children:[(0,i.jsxs)("button",{className:"CurrencySelect__button",onClick:v,children:[(0,i.jsx)(b,{className:"CurrencySelect__icon",children:(0,i.jsx)("img",{src:n.logoUrl,alt:n.viewedTicker})}),(0,i.jsx)("div",{className:"CurrencySelect__text",children:n.ticker}),(0,i.jsx)(b,{size:20,className:"CurrencySelect__arrow",children:(0,i.jsx)(o.UL,{})})]}),f&&(0,i.jsx)("ul",{className:"CurrencySelect__list",children:null===r||void 0===r?void 0:r.map((function(e){return(0,i.jsxs)("li",{className:"CurrencySelect__item",onClick:function(){return j(e.ticker)},children:[(0,i.jsx)(b,{className:"CurrencySelect__icon",children:(0,i.jsx)("img",{src:e.logoUrl,alt:e.ticker})}),e.ticker]},e.ticker)}))})]})})}))}var k=["onInput","value","label","onValueChange","onCurrencySelectClick","error","selectDisabled","inputDisabled","currency","currencies","isLoading"];function w(e){var n=e.onInput,r=e.value,a=e.label,c=e.onValueChange,s=e.onCurrencySelectClick,t=e.error,l=e.selectDisabled,o=e.inputDisabled,h=e.currency,p=e.currencies,m=e.isLoading,x=void 0!==m&&m,f=(0,u.Z)(e,k),y=h.symbol;return(0,i.jsx)(N,(0,d.Z)((0,d.Z)({label:a,error:t,slotAfterInput:(0,i.jsx)(_,{currency:h,onCurrencySelectClick:l?function(){}:s,disabled:!!l,options:p})},f),{},{children:x?(0,i.jsx)("input",{disabled:!0,readOnly:!0}):(0,i.jsx)(v.Z,{thousandSeparator:!1,prefix:y,onValueChange:c,allowLeadingZeros:!0,decimalScale:h.roundOff,onInput:n,value:r,placeholder:"0.00",readOnly:o})}))}var S=["className"];function Z(e){var n=e.className,r=(0,u.Z)(e,S);return(0,i.jsx)("div",(0,d.Z)({className:p()("WidgetContainer",n)},r))}var A=r(7892),I=r.n(A),E=(0,a.block)("pay-with-near-pay-timer"),P=function(e){var n=e.expiryAt,r=e.onExpired,a=(0,m.useState)(U(n)),c=(0,l.Z)(a,2),s=c[0],t=c[1];return(0,m.useEffect)((function(){U(n)<0&&r();var e=setTimeout((function(){t(U(n))}),1e3);return function(){return clearTimeout(e)}}),[s,n,r]),U(n)<0?null:(0,i.jsx)("div",{className:E(),children:R(s)})},U=function(e){var n=I()(e),r=I().utc();return n.diff(r)},R=function(e){var n=Math.floor(e/6e4),r=e%6e4,a=Math.floor(r/1e3);return"".concat(n,":").concat(a>9?a:"0".concat(a))},z=r(6009),L=(0,a.block)("pay-with-near-pay-widget"),T=(0,a.block)("pay-with-near-pay-widget-description"),B=function(e){var n,r=e.payment,a=e.defaultCurrency,c=e.onPay,s=e.onExpired,t=e.currencies,d=(0,m.useState)(),u=(0,l.Z)(d,2),h=u[0],x=u[1],f=(0,m.useCallback)((function(e){var n=null===t||void 0===t?void 0:t.find((function(n){return n.ticker===e}));x(n)}),[]);return(0,i.jsxs)(Z,{className:L(),children:[(0,i.jsx)("div",{className:L("title"),children:r.name}),(0,i.jsx)("div",{className:L("description"),children:r.description}),(0,i.jsxs)("div",{className:T(),children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:T("label"),children:"Payment: "}),(0,i.jsx)("div",{children:r.paymentId})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:T("label"),children:"Recipient: "}),(0,i.jsx)("div",{className:T("address"),children:r.address})]})]}),(0,i.jsx)(P,{expiryAt:r.expiryAt,onExpired:s}),(0,i.jsx)(w,{label:"Amount to Pay",value:r[(n=(null===h||void 0===h?void 0:h.parameter)||(null===a||void 0===a?void 0:a.parameter),n.toLowerCase().replace(/([-_][a-z])/g,(function(e){return e.toUpperCase().replace("-","").replace("_","")})))],currency:h||a,onValueChange:function(){},onCurrencySelectClick:f,selectDisabled:!1,currencies:t,className:"mb-4"}),(0,i.jsx)(y,{onClick:function(){return c(h||a)},children:"Pay with NEAR wallet"}),(0,i.jsx)("div",{className:L("or"),children:"or"}),(0,i.jsx)("div",{className:L("qr-code-container"),children:(0,i.jsx)(z.tv,{value:"".concat(r.address,"?amount=").concat(r.displayAmount)})}),(0,i.jsx)("div",{className:L("payment-method-text"),children:"Scan following\xa0QR code with your wallet or\xa0enter Account\xa0ID\xa0and amount manually."}),(0,i.jsxs)("a",{href:"http://nearpay.co",target:"_blank",rel:"noopener noreferrer",className:p()(L("link-nearpay")),children:[(0,i.jsx)("span",{className:L("link-nearpay_gray"),children:"Powered by"}),"  ",(0,i.jsx)(o.v5,{className:L("link-nearpay_icon"),width:"20",height:"15"}),"  ",(0,i.jsx)("span",{children:"NearPay"})]})]})},D=r(9933),O=r(8767),V=r(4967),F=r(1591),M=r(2419),X=r(6871),W="".concat(window.location.origin,"/payment"),q=function(e){var n=e.near,r=e.payment;return r?n.isAuthorized?function(e){switch(e.ticker){case"NEAR":var a=(0,V.M)(+r.displayAmount);if(!a||!r.address)throw new Error("Data is empty");n.send(a,r.address,"".concat(W,"/").concat(r.paymentId,"/pending"));break;case"USN":var c=1e8*+r.displayAmountUsd;if(!c||!r.address)throw new Error("Data is empty");n.ftTransfer(""+c,"usn",r.address);break;default:throw new Error("Unsupported currency")}}:function(){return n.login({successUrl:"".concat(W,"/").concat(r.paymentId,"/send"),failureUrl:"".concat(W,"/").concat(r.paymentId,"/failure")})}:function(){throw new Error("Payment is empty")}},Q=(0,a.block)("pay-with-near-payment-page");var G=function(){var e=function(){var e=(0,X.UO)().id,n=(0,M.ZP)("currencies",(function(){return D.i6.fetchCurrencies(e)})),r=(0,F.V)(),a=r.payment,c=r.isExpired,i=r.handleExpired,s=(0,V.T)(),t=q({near:s,payment:null!==a&&void 0!==a?a:null}),l=(0,m.useMemo)((function(){var e;return null===(e=n.data)||void 0===e?void 0:e.find((function(e){return e.ticker===O.N.defaultCurrency}))}),[n]);return{isExpired:c,isLoaded:!!n.data&&(!!a||c)&&s.isReady,payment:a,currencies:n.data,defaultCurrency:l,handlerPay:t,handleExpired:i}}(),n=e.defaultCurrency,r=e.payment,a=e.isLoaded,c=e.isExpired,s=e.handlerPay,l=e.handleExpired,d=e.currencies;return a?c?(0,i.jsxs)(o.RX,{className:Q(),children:[(0,i.jsx)("span",{className:Q("message"),children:"This payment link is expired"}),(0,i.jsx)("a",{className:Q("link"),href:O.N.payWithNearUrl,children:"Back to shop"})]}):r&&n?(0,i.jsxs)(o.RX,{children:[(0,i.jsx)(B,{payment:r,defaultCurrency:n,onPay:s,onExpired:l,currencies:d}),(0,i.jsx)(t,{})]}):null:(0,i.jsx)(o.RX,{children:(0,i.jsx)(o.zL,{children:(0,i.jsx)(o.aN,{})})})}}}]);
//# sourceMappingURL=447.cb18c61d.chunk.js.map