(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[52],{709:function(n,e,t){"use strict";t.r(e);var r=t(19),o=t.n(r),i=(t(126),t(214));t(51),t(106),t(169);function a(n,e,t,r,o,i,a){try{var c=n[i](a),s=c.value}catch(u){return void t(u)}c.done?e(s):Promise.resolve(s).then(r,o)}e.default=function(n){var e=n.apiKey,r=n.networkId,c=n.preferred,s=n.label,u=n.iconSrc;return{name:s||"Squarelink",svg:n.svg||'\n  <svg width="40px" height="40px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g id="Identity" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="Artboard" transform="translate(-11.000000, -220.000000)">\n          <g id="Group" transform="translate(11.508925, 220.556971)">\n              <circle id="Oval" fill="#313D53" cx="43.4910749" cy="43.4910749" r="43.4910749"></circle>\n              <path d="M26.9807751,53.5120539 L26.9807751,56.7049531 C26.9807751,58.9140921 28.7716361,60.7049531 30.9807751,60.7049531 L56.0422363,60.7049531 C58.2513753,60.7049531 60.0422363,58.9140921 60.0422363,56.7049531 L60.0422363,30.2473297 C60.0422363,28.0381907 58.2513753,26.2473297 56.0422363,26.2473297 L26.9807751,26.2473297 L26.9807751,47.8897807 L26.9807751,53.5120539 Z M20.4910749,20.4430293 L56.4910749,20.4430293 C62.0139224,20.4430293 66.4910749,24.9201818 66.4910749,30.4430293 L66.4910749,56.5391205 C66.4910749,62.061968 62.0139224,66.5391205 56.4910749,66.5391205 L30.4910749,66.5391205 C24.9682274,66.5391205 20.4910749,62.061968 20.4910749,56.5391205 L20.4910749,20.4430293 Z M33.9720552,26.2473297 L40.419051,26.2473297 L40.419051,41.0316245 L40.419051,49.5120539 C40.419051,51.7211929 38.62819,53.5120539 36.419051,53.5120539 L26.9807751,53.5120539 L26.9807751,47.8897807 L33.9720552,47.8897807 L33.9720552,26.2473297 Z M33.9720552,26.2473297 L40.419051,26.2473297 L33.9720552,26.2473297 Z M53.0509562,60.7049531 L46.6039605,60.7049531 L46.6039605,45.9206584 L46.6039605,37.4402289 C46.6039605,35.2310899 48.3948215,33.4402289 50.6039605,33.4402289 L60.0422363,33.4402289 L60.0422363,39.0625021 L53.0509562,39.0625021 L53.0509562,60.7049531 Z M46.6039605,60.7049531 L53.0509562,60.7049531 L46.6039605,60.7049531 Z M60.0422363,39.0625021 L60.0422363,33.4402289 L60.0422363,39.0625021 Z" id="Icon-Blue" fill="#E8EEFF"></path>\n          </g>\n      </g>\n  </g>\n  </svg>\n',iconSrc:u,wallet:function(){var n,c=(n=o.a.mark((function n(a){var c,s,u,l,p;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(23).then(t.t.bind(null,1008,7));case 2:return c=n.sent,s=c.default,u=new s(e,Object(i.h)(r),{useSync:!0}),l=u.getProviderSync(),p=a.BigNumber,n.abrupt("return",{provider:l,instance:u,interface:{name:"Squarelink",connect:l.enable,disconnect:function(){return l.stop()},address:{get:function(){return Promise.resolve(u.accounts[0])}},network:{get:function(){return Promise.resolve(Object(i.a)(u.network))}},balance:{get:function(){return new Promise((function(n){u.accounts.length?l.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[u.accounts[0],"latest"],id:1},(function(e,t){n(p(t.result).toString(10))})):n(null)}))}},dashboard:function(){return Object(i.i)("https://app.squarelink.com/")}}});case 8:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function c(n){a(i,r,o,c,s,"next",n)}function s(n){a(i,r,o,c,s,"throw",n)}c(void 0)}))});return function(n){return c.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:c}}}}]);
//# sourceMappingURL=52.14ae00cd.chunk.js.map