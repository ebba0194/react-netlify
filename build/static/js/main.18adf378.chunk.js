(this["webpackJsonpreact-netlify"]=this["webpackJsonpreact-netlify"]||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var c=o(1),n=o(4),l=o.n(n),a=o(5),s=o(6),i=o(8),r=o(7),m=o(2),h=o(0),d=function(e){var t=e.active,o=e.close,n=e.project,l="fixed transition duration-500 w-full h-full top-0 left-0 bg-gray-900 bg-opacity-80 md:flex items-center justify-center z-10 overflow-y-scroll max-h-screen p-4 md:p-16",a=Object(c.useState)("hidden ".concat(l)),s=Object(m.a)(a,2),i=s[0],r=s[1];return Object(c.useEffect)((function(){t?(r("".concat(l," opacity-0")),setTimeout((function(){r("".concat(l," opacity-100"))}),10)):(r("".concat(l," opacity-0")),setTimeout((function(){r("".concat(l," hidden"))}),201))}),[t]),Object(c.useEffect)((function(){window.addEventListener("keydown",(function(e){"Escape"===e.key&&t&&o()}))}),[t,o]),Object(h.jsxs)("div",{className:i,children:[Object(h.jsx)("div",{className:"absolute top-0 left-0 h-full w-full",onClick:o}),Object(h.jsxs)("div",{className:"md:max-w-4xl bg-white p-8 md:p-16 rounded-2xl shadow-4xl z-10 relative",children:[Object(h.jsx)("button",{onClick:o,className:"absolute top-4 right-4 w-8",children:Object(h.jsxs)("svg",{viewBox:"0 0 50 50",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 cuLlVI",children:[Object(h.jsx)("title",{children:"Close icon"}),Object(h.jsx)("path",{d:"M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"}),Object(h.jsx)("path",{d:"M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"})]})}),Object(h.jsxs)("div",{className:"container grid md:grid-cols-5",children:[Object(h.jsxs)("div",{className:"md:col-start-1\tmd:col-end-4",children:[Object(h.jsx)("div",{className:"flex flex-col items-center justify-center md:px-8 py-4 text-center w-full",children:Object(h.jsxs)("h3",{className:"font-title text-xl font-light tracking-wide text-gray-700",children:["Client: ",n.title]})}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(n.content?n.content:"")},className:"font-body text-gray-700 grid auto-rows-auto md:px-8 py-4 w-full gap-2"})]}),Object(h.jsxs)("div",{className:"md:col-start-4 md:col-end-6",children:[Object(h.jsx)("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"block font-title text-xl font-light tracking-wide text-gray-700 border-b border-gray-500 pb-2",children:"Visit the Site"}),Object(h.jsx)("div",{className:"shadow w-full my-4",children:Object(h.jsx)("a",{className:"block transition border border-transparent duration-200 hover:border-current",href:n.url,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{className:"w-full",width:"300",height:"200",loading:"lazy",src:n.img,alt:n.title})})}),Object(h.jsx)("h3",{className:"font-title text-xl font-light tracking-wide text-gray-700 border-b border-gray-500 pb-2",children:"Technologies"}),Object(h.jsx)("div",{className:"flex flex-wrap justify-center items-end text-gray-700 w-full py-2",children:n.logos.map((function(e,t){return Object(h.jsx)("div",{className:"m-2 w-8",children:Object(h.jsx)(e.component,{})},"logo-".concat(t))}))})]})]})]})]})},p=function(e){var t=e.project,o=Object(c.useState)(!1),n=Object(m.a)(o,2),l=n[0],a=n[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("button",{onClick:function(){return a(!0)},className:"bg-gray-50 p-4 h-full flex flex-col justify-between rounded-2xl shadow-xl relative origin-center md:transform duration-200 hover:scale-105 w-full ".concat(l?"scale-105":""),children:[Object(h.jsx)("div",{className:"absolute right-4 top-4 w-5 text-gray-400 hover:text-gray-800 transition duration-200",children:Object(h.jsxs)("svg",{viewBox:"0 0 16 16",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 cuLlVI",children:[Object(h.jsx)("title",{children:"ArrowsAngleExpand icon"}),Object(h.jsx)("path",{fillRule:"evenodd",d:"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"})]})}),Object(h.jsx)("div",{className:"flex flex-col items-center justify-center px-8 py-2 md:py-4 text-center w-full",children:Object(h.jsxs)("h3",{className:"transform duration-200 font-title text-xl font-light tracking-wide text-gray-700",children:["Client: ",t.title]})}),Object(h.jsx)("div",{className:"shadow w-full",children:Object(h.jsx)("img",{className:"w-full",width:"300",height:"200",loading:"lazy",src:t.img,alt:t.title})}),Object(h.jsx)("div",{className:"flex flex-wrap justify-center items-end text-gray-700 h-full w-full",children:t.logos.map((function(e,t){return Object(h.jsx)("div",{className:"m-2 w-8",children:Object(h.jsx)(e.component,{})},"logo-".concat(t))}))})]}),Object(h.jsx)(d,{active:l,close:function(){return a(!1)},project:t})]})},g=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"ReactLogo icon"}),Object(h.jsx)("circle",{cx:"12",cy:"11.245",r:"1.785"}),Object(h.jsx)("path",{d:"M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 001.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 01-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 00-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 01-.987 2.542z"}),Object(h.jsx)("path",{d:"M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 00-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 00-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 011.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 002.021-2.477l.112-.16.194-.019a19.473 19.473 0 003.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 01-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 01-1.71 2.124z"}),Object(h.jsx)("path",{d:"M17.58 8.695l-.395-.099a19.477 19.477 0 00-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0011.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 01-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 01-1.713-2.123 20.692 20.692 0 01-2.696-.419z"}),Object(h.jsx)("path",{d:"M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 01-1.126-1.769 26.028 26.028 0 01-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 014.198 0l.194.019.113.16a25.136 25.136 0 012.1 3.628l.083.179-.083.177a24.742 24.742 0 01-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 001.832-3.168 23.916 23.916 0 00-1.832-3.168 23.877 23.877 0 00-3.667 0 23.743 23.743 0 00-1.832 3.168 24.82 24.82 0 001.832 3.168z"})]})},u=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Redux icon"}),Object(h.jsx)("path",{d:"M15.661 15.549a1.315 1.315 0 001.185-1.386 1.363 1.363 0 00-1.35-1.302h-.048a1.352 1.352 0 00-1.303 1.397c.024.379.179.687.391.911-.827 1.609-2.07 2.794-3.954 3.788-1.266.663-2.604.912-3.905.734-1.089-.153-1.94-.64-2.463-1.421-.78-1.185-.852-2.462-.201-3.74a5.597 5.597 0 011.658-1.931 7.88 7.88 0 01-.331-1.218c-3.506 2.51-3.148 5.942-2.084 7.564.794 1.184 2.415 1.941 4.19 1.941.474 0 .972-.035 1.457-.154 3.077-.592 5.409-2.438 6.747-5.16l.011-.023z"}),Object(h.jsx)("path",{d:"M19.887 12.589c-1.834-2.154-4.533-3.337-7.611-3.337h-.403c-.2-.438-.661-.711-1.183-.711h-.036c-.744 0-1.325.64-1.301 1.385.023.71.627 1.302 1.35 1.302h.059a1.332 1.332 0 001.183-.828h.439c1.824 0 3.551.532 5.126 1.574 1.206.792 2.072 1.834 2.557 3.077.425 1.019.402 2.013-.035 2.843-.675 1.302-1.812 1.988-3.314 1.988-.947 0-1.871-.296-2.345-.509-.283.235-.758.626-1.102.863 1.042.473 2.096.746 3.113.746 2.309 0 4.023-1.302 4.676-2.557.709-1.422.651-3.813-1.161-5.859l-.012.023z"}),Object(h.jsx)("path",{d:"M7.647 15.975c.023.71.626 1.302 1.35 1.302h.048a1.334 1.334 0 001.302-1.397c0-.71-.616-1.301-1.338-1.301h-.048c-.048 0-.118 0-.178.022-.982-1.657-1.397-3.434-1.242-5.349.094-1.445.567-2.7 1.42-3.742.71-.888 2.048-1.326 2.96-1.35 2.556-.048 3.622 3.138 3.704 4.404l1.184.354C16.536 5.036 14.122 3 11.813 3 9.647 3 7.647 4.574 6.842 6.884c-1.102 3.077-.379 6.036.971 8.404-.118.154-.189.426-.166.687z"})]})},j=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"StyledComponents icon"}),Object(h.jsx)("path",{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261a1.4 1.4 0 00-.189.411c-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217v1.973l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"})]})},w=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Bootstrap icon"}),Object(h.jsx)("path",{d:"M18.002 2.997H5.999A3.011 3.011 0 002.997 6v12.002a3.012 3.012 0 003.002 3.001h12.003a3.012 3.012 0 003.001-3.001V6a3.012 3.012 0 00-3.001-3.003zm-1.64 12.647c-.152.36-.389.68-.693.927a3.594 3.594 0 01-1.206.614c-.49.151-1.074.229-1.75.229H7.888V6.909h5.103c.943 0 1.7.213 2.267.646.569.436.854 1.082.854 1.958 0 .528-.13.983-.389 1.357-.259.373-.63.664-1.111.868v.034c.642.135 1.137.438 1.464.912.327.473.493 1.069.493 1.789 0 .405-.078.788-.225 1.147l.02.021v.003zm-2.084-2.589c-.309-.282-.739-.419-1.297-.419H9.737v3.276h3.253c.554 0 .991-.144 1.298-.435.308-.289.464-.701.464-1.229-.005-.518-.156-.919-.464-1.193h-.014.004zm-.451-2.119c.299-.251.444-.613.444-1.084 0-.526-.131-.902-.397-1.116-.264-.214-.646-.326-1.146-.326H9.727v2.898h3.001c.436.001.81-.127 1.099-.372z"})]})},f=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 640 512",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Docker icon"}),Object(h.jsx)("path",{fill:"currentColor",d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"})]})},b=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Webpack icon"}),Object(h.jsx)("path",{d:"M21.016 18.12L12.35 23v-3.8l5.399-2.957 3.266 1.877zm.592-.534V7.38l-3.17 1.821v6.56l3.17 1.824zm-18.682.534L11.59 23v-3.8l-5.398-2.957-3.266 1.877zm-.593-.534V7.38l3.17 1.821v6.56l-3.17 1.824zM2.704 6.72l8.886-5.005v3.674L5.897 8.507l-.043.025-3.15-1.812zm18.534 0L12.35 1.715v3.674l5.693 3.118.043.025 3.15-1.812zM11.59 18.335l-5.327-2.916V9.642l5.326 3.062v5.63zm.76 0l5.326-2.916V9.642l-5.326 3.062v5.63zM6.625 8.973l5.347-2.928 5.347 2.928-5.347 3.075-5.347-3.075z"})]})},x=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Shopify icon"}),Object(h.jsx)("path",{d:"M14.49 20.937l5.381-1.166S17.93 6.633 17.914 6.546c-.016-.086-.086-.144-.158-.144s-1.439-.101-1.439-.101-.949-.949-1.064-1.05c-.027-.029-.057-.043-.086-.058l-.677 15.744zm.446-15.772c-.016 0-.043.014-.057.014-.016 0-.217.059-.533.158-.318-.919-.879-1.768-1.871-1.768h-.086c-.289-.361-.633-.519-.936-.519-2.316 0-3.426 2.892-3.77 4.359-.892.275-1.538.476-1.613.505-.504.158-.517.172-.574.648-.057.344-1.367 10.489-1.367 10.489l10.117 1.899.69-15.785zm-2.635.704v.102c-.559.173-1.178.36-1.783.547.346-1.323.992-1.972 1.553-2.217.146.375.23.878.23 1.568zm-.92-2.2c.1 0 .201.028.303.102-.732.344-1.539 1.222-1.871 2.978a59.11 59.11 0 01-1.411.432c.389-1.339 1.325-3.512 2.979-3.512zm.402 7.812s-.604-.315-1.322-.315c-1.08 0-1.123.676-1.123.849 0 .921 2.418 1.28 2.418 3.453 0 1.712-1.08 2.806-2.547 2.806-1.756 0-2.648-1.094-2.648-1.094l.475-1.554s.922.792 1.697.792a.693.693 0 00.721-.69c0-1.209-1.986-1.268-1.986-3.252 0-1.669 1.195-3.295 3.627-3.295.936 0 1.395.272 1.395.272l-.707 2.028zm.922-7.281c.518.06.85.648 1.064 1.311-.258.087-.547.173-.863.273v-.187c0-.561-.072-1.022-.201-1.397z"})]})},v=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Magento icon"}),Object(h.jsx)("path",{d:"M12 22.019l-3.717-2.146V9.863l2.479-1.43v10.01l1.238.753 1.238-.753V8.434l2.479 1.43v10.01L12 22.019zm8.666-15.014v10.009l-2.475 1.43V8.434L12 4.861 5.807 8.434v10.01l-2.473-1.43V7.005L12 2l8.666 5.005z"})]})},y=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Wordpress icon"}),Object(h.jsx)("path",{d:"M19.891 7.788a8.966 8.966 0 011.099 4.313 8.986 8.986 0 01-4.47 7.771l2.746-7.939c.513-1.282.684-2.309.684-3.219a7.165 7.165 0 00-.059-.926m-6.651.087a14.14 14.14 0 001.026-.088c.485-.063.428-.775-.056-.749 0 0-1.463.112-2.4.112-.887 0-2.375-.125-2.375-.125-.487-.024-.55.713-.061.738 0 0 .449.052.938.075l1.399 3.838-1.975 5.899-3.274-9.724c.541-.026 1.028-.083 1.028-.083.487-.063.43-.775-.055-.747 0 0-1.455.115-2.395.115-.167 0-.365-.007-.575-.013C6.093 4.726 8.862 3.113 12 3.113c2.341 0 4.471.894 6.071 2.36-.038-.002-.076-.008-.117-.008-.883 0-1.51.77-1.51 1.596 0 .741.427 1.369.883 2.108.343.601.742 1.37.742 2.481 0 .763-.295 1.662-.685 2.899l-.896 2.987-3.25-9.675.002.014zM12 21.087a8.983 8.983 0 01-2.54-.364l2.697-7.838 2.763 7.572c.021.044.042.085.065.124a9.016 9.016 0 01-2.985.508m-8.99-8.988a8.94 8.94 0 01.778-3.658l4.287 11.749a8.993 8.993 0 01-5.065-8.091m8.99-10c-5.513 0-10 4.487-10 10s4.487 10 10 10 10-4.487 10-10-4.487-10-10-10"})]})},O=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Graphql icon"}),Object(h.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})]})},z=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Apollographql icon"}),Object(h.jsx)("path",{d:"M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 6.627 0 12-5.372 12-12a12.014 12.014 0 00-.473-3.343.6.6 0 00-1.127.409h-.002c.265.943.402 1.928.402 2.934a10.73 10.73 0 01-3.163 7.637A10.729 10.729 0 0112 22.8a10.73 10.73 0 01-7.637-3.163A10.728 10.728 0 011.2 12a10.73 10.73 0 013.163-7.637A10.728 10.728 0 0112 1.2c2.576 0 5.013.896 6.958 2.54a1.466 1.466 0 10.862-.84A11.953 11.953 0 0012 0zm-1.44 5.88l-4.2 10.902h2.63l.687-1.848h3.969l-.719-2.042h-2.613l1.7-4.691 3.024 8.58h2.631L13.47 5.88z"})]})},B=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 cuLlVI",children:[Object(h.jsx)("title",{children:"Figma icon"}),Object(h.jsx)("path",{d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"})]})},M=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 cuLlVI",children:[Object(h.jsx)("title",{children:"Javascript icon"}),Object(h.jsx)("path",{d:"M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"})]})},N=function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Sass icon"}),Object(h.jsx)("path",{d:"M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10S2 17.522 2 12 6.478 2 12 2zm-1.987 13.332c.146.537.13 1.039-.021 1.493l-.054.15a2.803 2.803 0 01-.527.821c-.582.633-1.394.872-1.742.671-.375-.219-.188-1.112.487-1.825.726-.765 1.766-1.258 1.766-1.258v-.002l.091-.05zm8.258-9.051c-.452-1.777-3.397-2.362-6.185-1.371-1.656.589-3.453 1.515-4.743 2.723-1.536 1.434-1.78 2.684-1.68 3.206.355 1.843 2.881 3.048 3.92 3.942v.005c-.307.149-2.548 1.274-3.072 2.438-.563 1.225.088 2.101.513 2.212 1.313.363 2.662-.3 3.388-1.374.699-1.051.638-2.4.337-3.063.413-.112.899-.162 1.524-.086 1.751.199 2.101 1.3 2.024 1.75-.074.449-.436.711-.561.786-.126.076-.163.101-.151.151.013.074.076.074.175.063.138-.025.914-.375.951-1.227.037-1.074-.988-2.273-2.813-2.25-.75.014-1.226.076-1.563.214a.295.295 0 00-.088-.088c-1.125-1.213-3.213-2.063-3.125-3.675.025-.588.237-2.137 4-4.012 3.088-1.538 5.551-1.112 5.977-.175.61 1.336-1.314 3.825-4.526 4.187-1.225.138-1.862-.337-2.026-.513-.174-.188-.198-.2-.261-.161-.101.05-.038.212 0 .313.1.249.487.688 1.163.912.587.188 2.024.299 3.75-.375 1.937-.749 3.449-2.838 3.012-4.588l.06.056z"})]})},k=o.p+"static/media/Ambaum.7e69b9b5.png",C=o.p+"static/media/Anova.a1cbf317.png",S=o.p+"static/media/Beekman.260fdedb.png",I=o.p+"static/media/Biocidin.791c5faf.png",H=o.p+"static/media/Cloudpaper.179959c8.png",L=o.p+"static/media/Dewey.4344b28d.png",T=o.p+"static/media/EarthBreeze.f0acb986.png",V=o.p+"static/media/Forti.429a6cd2.png",A=o.p+"static/media/Freedom.0502858a.png",D=o.p+"static/media/Hammerhead.39c97f70.png",R=o.p+"static/media/HankyPanky.07c06335.png",K=o.p+"static/media/Hanz.75a9a6c9.png",W=o.p+"static/media/Lobstergram.8a6a6132.png",q=o.p+"static/media/Luwa.780f1a08.png",E=o.p+"static/media/Perigee.34f65661.png",F=o.p+"static/media/Premier.c06c8c17.png",G=o.p+"static/media/RMG.bff88ed1.png",P=o.p+"static/media/Seven.f9c48193.png",J=o.p+"static/media/Singer.5129ff27.png",_=[{title:"Hammerhead",url:"https://www.hammerhead.io/",content:"<p>TBD</p>",img:D,logos:[{component:x},{component:N},{component:B},{component:M}]},{title:"Luwa Luxury",url:"https://luwaluxury.com/",content:"<p>TBD</p>",img:q,logos:[{component:x},{component:N},{component:M}]},{title:"Ultimate Bark Control",url:"https://ultimatebarkcontrol.com/",content:"<p>TBD</p>",img:o.p+"static/media/Ultimate.2b0f4cb5.png",logos:[{component:x},{component:b},{component:N},{component:M}]},{title:"Cloudpaper",url:"https://cloudpaper.co/",content:"<p>TBD</p>",img:H,logos:[{component:x},{component:N},{component:M}]},{title:"Biocidin",url:"https://biocidin.com/",content:"<p>TBD</p>",img:I,logos:[{component:x},{component:N},{component:M}]},{title:"Freedom Hill Coffee",url:"https://freedomhillcoffee.com/",content:"<p>TBD</p>",img:A,logos:[{component:x},{component:N},{component:M}]},{title:"EarthBreeze",url:"https://www.earthbreeze.com/",content:"<p>TBD</p>",img:T,logos:[{component:x},{component:N},{component:M}]},{title:"Dewey Crush",url:"https://deweycrush.com/",content:"<p>TBD</p>",img:L,logos:[{component:x},{component:N},{component:B},{component:M}]},{title:"The Singer Featherweight Shop",url:"https://fortigoods.com/",content:"<p>TBD</p>",img:J,logos:[{component:x},{component:N},{component:M}]},{title:"Forti Goods",url:"https://fortigoods.com/",content:"<p>TBD</p>",img:V,logos:[{component:x},{component:N},{component:M}]},{title:"Premier Catch",url:"https://www.premiercatch.com/",content:"<p>TBD</p>",img:F,logos:[{component:x},{component:N},{component:M}]},{title:"Hanz de Fuko",url:"https://www.hanzdefuko.com/",content:"<p>TBD</p>",img:K,logos:[{component:x},{component:N},{component:M}]},{title:"Seven Coffee Roasters",url:"https://sevencoffeeroasters.com/",content:"<p>TBD</p>",img:P,logos:[{component:x},{component:N},{component:B},{component:M}]},{title:"Perigee Fund",url:"https://perigeefund.org",content:"<p>TBD</p>",img:E,logos:[{component:y},{component:N},{component:B},{component:M}]},{title:"Ambaum Labs",url:"https://www.ambaum.com",content:"<p>TBD</p>",img:k,logos:[{component:y},{component:g},{component:function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 cuLlVI",children:[Object(h.jsx)("title",{children:"Gatsby icon"}),Object(h.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(h.jsx)("path",{d:"M11.751 21.997c-5.221-.128-9.45-4.257-9.736-9.438l-.012-.313 9.748 9.751zM12 2a9.988 9.988 0 018.193 4.265l-1.638 1.148A8.003 8.003 0 004.534 9.12L14.88 19.466A8.018 8.018 0 0019.748 14H15.5v-2H22c0 4.726-3.279 8.686-7.685 9.73L2.269 9.686C3.314 5.28 7.274 2 12 2z"})]})}},{component:B}]},{title:"Lobstergram",url:"https://www.lobstergram.com",content:"<p>TBD</p>",img:W,logos:[{component:b},{component:g},{component:u},{component:w},{component:v},{component:f},{component:O},{component:j}]},{title:"Hanky Panky",url:"https://www.hankypanky.com/",content:"<p>Hanky Panky is an older, established lingerie brand - and their outdated Magento website was showing it's age. We gave their site an upgrade and a spiffy new React front end as well. This was quite a complicated site; they have their own reward points system, a large catalog of products, and they used Magento's Pagebuilder throughout  to manage their frequently updated messaging and content. </p><p>We introduced Styled Components to our best practices in this project, and also refined further some thoughts around code organization and SEO. This project was ideal to really identify and address pain points around scaling a react app to a larger, more complicated implementation while keeping up performance benchmarks.<p>Some of the technologies used: </p><ul><li><strong>React</strong></li><li><strong>Redux</strong></li><li><strong>Bootstrap</strong></li><li><strong>Magento</strong></li><li><strong>Docker</strong></li><li><strong>Graphql and Apollo</strong></li><li><strong>Styled Components</strong></li></ul>",img:R,logos:[{component:g},{component:u},{component:w},{component:v},{component:f},{component:O},{component:z},{component:j}]},{title:"Beekman 1802",url:"https://beekman1802.com/",content:"<p>Beekman 1802 is a lifestyle brand based on a goat farm in upstate new York. They wanted a site that was simple to manage, and yet highly customized. They chose Shopify, a platform used by many high-profile brands, such as Kylie Cosmetics. </p><p>I learned Shopify's custom templating language, liquid, over the course of this project. The Ruby-like syntax was a departure from my previous experience, but integrating custom code with Shopify's page builder was very cool; the users could end up making their own design changes based from our templates. We used a combination of technologies: </p><ul><li><strong>Bootstrap</strong></li><li><strong>JQuery</strong></li><li><strong>Sass</strong></li><li><strong>Liquid</strong></li></ul>",img:S,logos:[{component:x},{component:w},{component:N},{component:function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Jquery icon"}),Object(h.jsx)("path",{d:"M3.345 6.935c-1.756 2.523-1.538 5.806-.196 8.487l.098.19c.021.04.041.082.063.121.012.024.026.047.039.069a7.842 7.842 0 00.198.344l.073.12a9.14 9.14 0 00.211.33 10.179 10.179 0 00.221.319l.036.049c.063.088.129.175.196.261l.074.094.182.223.069.082c.082.097.167.194.252.289l.005.005c.004.004.007.006.01.011.083.091.17.181.256.271l.083.083.205.201.084.08c.092.087.186.172.281.256l.004.004.049.041c.083.073.169.145.255.215l.105.084a11.03 11.03 0 00.565.424c.029.021.057.042.087.062l.024.017c.076.053.154.103.231.153.033.022.066.045.101.067a10.975 10.975 0 00.886.509c.065.034.129.068.195.101l.045.022.08.039c.102.048.205.097.308.143l.066.029c.119.052.239.102.36.149l.088.035a13.895 13.895 0 00.382.142c.125.044.252.085.38.124l.092.028c.128.039.256.085.39.11 8.492 1.548 10.958-5.102 10.958-5.102-2.072 2.698-5.748 3.41-9.232 2.618-.132-.03-.261-.071-.39-.109l-.097-.029a10.929 10.929 0 01-.755-.264l-.093-.036c-.12-.047-.239-.097-.356-.148l-.071-.031a11.932 11.932 0 01-.301-.14l-.087-.042c-.078-.038-.155-.079-.232-.118-.051-.027-.104-.053-.155-.082a8.294 8.294 0 01-.278-.156l-.094-.052a11.4 11.4 0 01-.363-.223l-.098-.065a10.557 10.557 0 01-.259-.172l-.083-.059c-.082-.058-.164-.116-.244-.176a11.921 11.921 0 01-.328-.255l-.099-.079c-.092-.076-.184-.152-.274-.231a12.01 12.01 0 01-.319-.288c-.028-.026-.055-.051-.081-.078a7.985 7.985 0 01-.208-.203l-.081-.081a10.76 10.76 0 01-.254-.269l-.012-.012a11.75 11.75 0 01-.258-.293l-.067-.081a10.313 10.313 0 01-.254-.313 11.855 11.855 0 01-.215-.286C3.864 11.825 3.17 8.186 4.715 5.198"}),Object(h.jsx)("path",{d:"M8.794 4.809c-1.27 1.827-1.2 4.273-.21 6.205.166.324.353.639.561.938.191.273.401.597.654.816.092.101.187.199.284.295l.076.074c.094.092.19.182.291.271l.011.01.003.002c.111.097.224.19.34.281l.078.06a8.281 8.281 0 00.366.268c.053.037.108.072.161.107.026.017.051.035.078.051a7.14 7.14 0 00.301.184c.076.044.155.087.233.13.026.015.055.029.082.043.055.028.108.057.163.083a9.645 9.645 0 00.365.171l.074.031c.093.039.186.077.281.113l.117.044c.086.032.171.06.256.089l.117.037c.121.038.243.085.37.107 6.556 1.086 8.068-3.961 8.068-3.961-1.364 1.964-4.006 2.902-6.825 2.17a7.866 7.866 0 01-.743-.232l-.118-.043a7.629 7.629 0 01-.353-.145 8.79 8.79 0 01-.344-.159c-.057-.028-.113-.058-.17-.087l-.099-.051a9.352 9.352 0 01-.533-.313l-.08-.053a7.65 7.65 0 01-.602-.435c-1.234-.974-2.213-2.306-2.678-3.815-.488-1.566-.382-3.323.462-4.75"}),Object(h.jsx)("path",{d:"M13.379 3.221c-.749 1.102-.823 2.469-.304 3.686.548 1.292 1.671 2.304 2.981 2.785a3.85 3.85 0 00.234.079c.077.024.152.053.233.067 3.62.699 4.601-1.857 4.862-2.234-.86 1.239-2.306 1.536-4.078 1.105a5.403 5.403 0 01-.939-.344 5.39 5.39 0 01-.895-.545c-1.585-1.204-2.573-3.501-1.536-5.372"})]})}}]},{title:"Anova Furnishings",url:"https://www.anovafurnishings.com/",content:"<p>Anova Furnishings is a commercial outdoor furniture company based in Missouri. They had an existing site, but it was in an outdated version of Magento and in serious need of a performance upgrade. We brought them current on their Magento version - and while we were at it, we created a fully custom React front end to sit on top of the new back end.</p><p>We incorporated some new technologies to hook this front end up to Magento. I learned how to utilize Graphql to fetch data for our custom components, and some techniques for efficiently sharing data throughout a larger, more complicated web app. It was also necessary to use virtualization to create a local version of the Magento admin panel to use during testing. We used many of the technologies I was already familiar with, but some new ones as well: </p><ul><li><strong>React</strong></li><li><strong>Redux</strong></li><li><strong>Bootstrap</strong></li><li><strong>Magento</strong></li><li><strong>Docker</strong></li><li><strong>Graphql and Apollo</strong></li></ul>",img:C,logos:[{component:g},{component:u},{component:w},{component:v},{component:f},{component:O},{component:z},{component:function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Css3 icon"}),Object(h.jsx)("path",{d:"M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"})]})}}]},{title:"RMG Media",url:"https://www.rmgmedia.com/",content:"<p>This is RMG's own website. It was my initial project with the company, and my focus over the course of my internship. </p><p>As a digital agency, we needed a really beautiful, snappy website to show to clients. We chose a bleeding-edge tech stack and created our own best practices as we went, utilizing a variety of technologies, including: <ul><li><strong>Reactjs</strong></li><li><strong>Redux (with Immutablejs)</strong></li><li><strong>React-Router</strong></li><li><strong>GSAP animation library</strong></li></ul>",img:G,logos:[{component:g},{component:u},{component:w},{component:f},{component:function(){return Object(h.jsxs)("svg",{viewBox:"0 0 24 24",height:"100%",width:"100%",focusable:"false",role:"img",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:"StyledIconBase-ea9ulj-0 iKhrnw",children:[Object(h.jsx)("title",{children:"Invision icon"}),Object(h.jsx)("path",{d:"M19.361 3.008H4.638c-.901 0-1.63.729-1.63 1.63v14.724c0 .9.729 1.631 1.63 1.631h14.724c.9 0 1.631-.73 1.631-1.631V4.638a1.63 1.63 0 00-1.632-1.63zM9.018 6.505c.597 0 1.098.472 1.098 1.078 0 .616-.501 1.08-1.098 1.08v.022c-.604 0-1.09-.486-1.09-1.088 0-.605.486-1.092 1.09-1.092zm7.354 10.352c-1.112 0-1.651-.662-1.651-1.566 0-.26.033-.533.114-.812l.528-1.906c.068-.208.086-.405.086-.581 0-.615-.375-.984-.971-.984-.761 0-1.26.543-1.52 1.598l-1.033 4.146h-1.811l.327-1.303c-.534.873-1.271 1.412-2.183 1.412-1.102 0-1.617-.632-1.617-1.584a4.02 4.02 0 01.096-.811l.826-3.366H6.285l.388-1.43h3.075l-1.216 4.804c-.08.309-.11.559-.11.738 0 .307.148.396.385.452.146.03 1.295.011 1.918-1.376l.798-3.188h-1.294l.391-1.404h2.787l-.359 1.617c.484-.899 1.452-1.762 2.406-1.762 1.012 0 1.855.728 1.855 2.111 0 .4-.063.796-.18 1.18l-.52 1.858a2.286 2.286 0 00-.075.492c0 .326.136.484.368.484.238 0 .553-.181.899-1.172l.708.272c-.414 1.473-1.182 2.081-2.137 2.081z"})]})}}]}],U=function(e){Object(i.a)(o,e);var t=Object(r.a)(o);function o(){return Object(a.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"bg-gray-900",children:Object(h.jsxs)("div",{className:"container max-w-6xl mx-auto",children:[Object(h.jsx)("div",{className:"px-4 md:px-16 pt-16 text-gray-50",children:Object(h.jsx)("h3",{className:"font-title text-4xl font-light",children:"Here's some of my work."})}),Object(h.jsx)("div",{className:"p-4 md:p-16 grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4 md:gap-8",children:_.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(p,{project:e})},e.title)}))})]})})}}]),o}(c.Component);o(14);l.a.render(Object(h.jsx)(U,{}),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[15,1,2]]]);
//# sourceMappingURL=main.18adf378.chunk.js.map