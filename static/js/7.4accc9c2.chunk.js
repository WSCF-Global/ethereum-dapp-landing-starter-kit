(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{1247:function(e,r,t){var n=t(213),i=t(22).Buffer,a=t(144),o=t(879),u=t(1248),c=i.from("Bitcoin seed","utf8"),s=2147483648,p={private:76066276,public:76067358};function l(e){this.versions=e||p,this.depth=0,this.index=0,this._privateKey=null,this._publicKey=null,this.chainCode=null,this._fingerprint=0,this.parentFingerprint=0}function d(e,r,t){var n=i.allocUnsafe(78);n.writeUInt32BE(r,0),n.writeUInt8(e.depth,4);var a=e.depth?e.parentFingerprint:0;return n.writeUInt32BE(a,5),n.writeUInt32BE(e.index,9),e.chainCode.copy(n,13),t.copy(n,45),n}function f(e){var r=a.createHash("sha256").update(e).digest();return a.createHash("ripemd160").update(r).digest()}Object.defineProperty(l.prototype,"fingerprint",{get:function(){return this._fingerprint}}),Object.defineProperty(l.prototype,"identifier",{get:function(){return this._identifier}}),Object.defineProperty(l.prototype,"pubKeyHash",{get:function(){return this.identifier}}),Object.defineProperty(l.prototype,"privateKey",{get:function(){return this._privateKey},set:function(e){n.equal(e.length,32,"Private key must be 32 bytes."),n(!0===u.privateKeyVerify(e),"Invalid private key"),this._privateKey=e,this._publicKey=i.from(u.publicKeyCreate(e,!0)),this._identifier=f(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0)}}),Object.defineProperty(l.prototype,"publicKey",{get:function(){return this._publicKey},set:function(e){n(33===e.length||65===e.length,"Public key must be 33 or 65 bytes."),n(!0===u.publicKeyVerify(e),"Invalid public key"),this._publicKey=i.from(u.publicKeyConvert(e,!0)),this._identifier=f(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0),this._privateKey=null}}),Object.defineProperty(l.prototype,"privateExtendedKey",{get:function(){return this._privateKey?o.encode(d(this,this.versions.private,i.concat([i.alloc(1,0),this.privateKey]))):null}}),Object.defineProperty(l.prototype,"publicExtendedKey",{get:function(){return o.encode(d(this,this.versions.public,this.publicKey))}}),l.prototype.derive=function(e){if("m"===e||"M"===e||"m'"===e||"M'"===e)return this;var r=e.split("/"),t=this;return r.forEach((function(e,r){if(0!==r){var i=e.length>1&&"'"===e[e.length-1],a=parseInt(e,10);n(a<s,"Invalid index"),i&&(a+=s),t=t.deriveChild(a)}else n(/^[mM]{1}/.test(e),'Path must start with "m" or "M"')})),t},l.prototype.deriveChild=function(e){var r,t=e>=s,o=i.allocUnsafe(4);if(o.writeUInt32BE(e,0),t){n(this.privateKey,"Could not derive hardened child key");var c=this.privateKey,p=i.alloc(1,0);c=i.concat([p,c]),r=i.concat([c,o])}else r=i.concat([this.publicKey,o]);var d=a.createHmac("sha512",this.chainCode).update(r).digest(),f=d.slice(0,32),h=d.slice(32),y=new l(this.versions);if(this.privateKey)try{y.privateKey=i.from(u.privateKeyTweakAdd(i.from(this.privateKey),f))}catch(v){return this.deriveChild(e+1)}else try{y.publicKey=i.from(u.publicKeyTweakAdd(i.from(this.publicKey),f,!0))}catch(v){return this.deriveChild(e+1)}return y.chainCode=h,y.depth=this.depth+1,y.parentFingerprint=this.fingerprint,y.index=e,y},l.prototype.sign=function(e){return i.from(u.ecdsaSign(e,this.privateKey).signature)},l.prototype.verify=function(e,r){return u.ecdsaVerify(Uint8Array.from(r),Uint8Array.from(e),Uint8Array.from(this.publicKey))},l.prototype.wipePrivateData=function(){return this._privateKey&&a.randomBytes(this._privateKey.length).copy(this._privateKey),this._privateKey=null,this},l.prototype.toJSON=function(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}},l.fromMasterSeed=function(e,r){var t=a.createHmac("sha512",c).update(e).digest(),n=t.slice(0,32),i=t.slice(32),o=new l(r);return o.chainCode=i,o.privateKey=n,o},l.fromExtendedKey=function(e,r){var t=new l(r=r||p),i=o.decode(e),a=i.readUInt32BE(0);n(a===r.private||a===r.public,"Version mismatch: does not match private or public"),t.depth=i.readUInt8(4),t.parentFingerprint=i.readUInt32BE(5),t.index=i.readUInt32BE(9),t.chainCode=i.slice(13,45);var u=i.slice(45);return 0===u.readUInt8(0)?(n(a===r.private,"Version mismatch: version does not match private"),t.privateKey=u.slice(1)):(n(a===r.public,"Version mismatch: version does not match public"),t.publicKey=u),t},l.fromJSON=function(e){return l.fromExtendedKey(e.xpriv)},l.HARDENED_OFFSET=s,e.exports=l},1248:function(e,r,t){e.exports=t(1249)(t(1250))},1249:function(e,r,t){var n=t(93),i="Impossible case. Please create issue.",a="The tweak was out of range or the resulted private key is invalid",o="The tweak was out of range or equal to zero",u="Unknow error on context randomization",c="Private Key is invalid",s="Public Key could not be parsed",p="Public Key serialization error",l="The sum of the public keys is not valid",d="Signature could not be parsed",f="The nonce generation function failed, or the private key was invalid",h="Public key could not be recover",y="Scalar was invalid (zero or overflow)";function v(e,r){if(!e)throw new Error(r)}function w(e,r,t){if(v(r instanceof Uint8Array,"Expected ".concat(e," to be an Uint8Array")),void 0!==t)if(Array.isArray(t)){var n=t.join(", "),i="Expected ".concat(e," to be an Uint8Array with length [").concat(n,"]");v(t.includes(r.length),i)}else{var a="Expected ".concat(e," to be an Uint8Array with length ").concat(t);v(r.length===t,a)}}function b(e){v("Boolean"===m(e),"Expected compressed to be a Boolean")}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return new Uint8Array(e)},r=arguments.length>1?arguments[1]:void 0;return"function"===typeof e&&(e=e(r)),w("output",e,r),e}function m(e){return Object.prototype.toString.call(e).slice(8,-1)}e.exports=function(e){return{contextRandomize:function(r){switch(v(null===r||r instanceof Uint8Array,"Expected seed to be an Uint8Array or null"),null!==r&&w("seed",r,32),e.contextRandomize(r)){case 1:throw new Error(u)}},privateKeyVerify:function(r){return w("private key",r,32),0===e.privateKeyVerify(r)},privateKeyNegate:function(r){switch(w("private key",r,32),e.privateKeyNegate(r)){case 0:return r;case 1:throw new Error(i)}},privateKeyTweakAdd:function(r,t){switch(w("private key",r,32),w("tweak",t,32),e.privateKeyTweakAdd(r,t)){case 0:return r;case 1:throw new Error(a)}},privateKeyTweakMul:function(r,t){switch(w("private key",r,32),w("tweak",t,32),e.privateKeyTweakMul(r,t)){case 0:return r;case 1:throw new Error(o)}},publicKeyVerify:function(r){return w("public key",r,[33,65]),0===e.publicKeyVerify(r)},publicKeyCreate:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;switch(w("private key",r,32),b(t),n=g(n,t?33:65),e.publicKeyCreate(n,r)){case 0:return n;case 1:throw new Error(c);case 2:throw new Error(p)}},publicKeyConvert:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;switch(w("public key",r,[33,65]),b(t),n=g(n,t?33:65),e.publicKeyConvert(n,r)){case 0:return n;case 1:throw new Error(s);case 2:throw new Error(p)}},publicKeyNegate:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;switch(w("public key",r,[33,65]),b(t),n=g(n,t?33:65),e.publicKeyNegate(n,r)){case 0:return n;case 1:throw new Error(s);case 2:throw new Error(i);case 3:throw new Error(p)}},publicKeyCombine:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2?arguments[2]:void 0;v(Array.isArray(r),"Expected public keys to be an Array"),v(r.length>0,"Expected public keys array will have more than zero items");var a,o=n(r);try{for(o.s();!(a=o.n()).done;){var u=a.value;w("public key",u,[33,65])}}catch(c){o.e(c)}finally{o.f()}switch(b(t),i=g(i,t?33:65),e.publicKeyCombine(i,r)){case 0:return i;case 1:throw new Error(s);case 2:throw new Error(l);case 3:throw new Error(p)}},publicKeyTweakAdd:function(r,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3?arguments[3]:void 0;switch(w("public key",r,[33,65]),w("tweak",t,32),b(n),i=g(i,n?33:65),e.publicKeyTweakAdd(i,r,t)){case 0:return i;case 1:throw new Error(s);case 2:throw new Error(a)}},publicKeyTweakMul:function(r,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3?arguments[3]:void 0;switch(w("public key",r,[33,65]),w("tweak",t,32),b(n),i=g(i,n?33:65),e.publicKeyTweakMul(i,r,t)){case 0:return i;case 1:throw new Error(s);case 2:throw new Error(o)}},signatureNormalize:function(r){switch(w("signature",r,64),e.signatureNormalize(r)){case 0:return r;case 1:throw new Error(d)}},signatureExport:function(r,t){w("signature",r,64);var n={output:t=g(t,72),outputlen:72};switch(e.signatureExport(n,r)){case 0:return t.slice(0,n.outputlen);case 1:throw new Error(d);case 2:throw new Error(i)}},signatureImport:function(r,t){switch(w("signature",r),t=g(t,64),e.signatureImport(t,r)){case 0:return t;case 1:throw new Error(d);case 2:throw new Error(i)}},ecdsaSign:function(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;w("message",r,32),w("private key",t,32),v("Object"===m(n),"Expected options to be an Object"),void 0!==n.data&&w("options.data",n.data),void 0!==n.noncefn&&v("Function"===m(n.noncefn),"Expected options.noncefn to be a Function");var o={signature:a=g(a,64),recid:null};switch(e.ecdsaSign(o,r,t,n.data,n.noncefn)){case 0:return o;case 1:throw new Error(f);case 2:throw new Error(i)}},ecdsaVerify:function(r,t,n){switch(w("signature",r,64),w("message",t,32),w("public key",n,[33,65]),e.ecdsaVerify(r,t,n)){case 0:return!0;case 3:return!1;case 1:throw new Error(d);case 2:throw new Error(s)}},ecdsaRecover:function(r,t,n){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4?arguments[4]:void 0;switch(w("signature",r,64),v("Number"===m(t)&&t>=0&&t<=3,"Expected recovery id to be a Number within interval [0, 3]"),w("message",n,32),b(a),o=g(o,a?33:65),e.ecdsaRecover(o,r,t,n)){case 0:return o;case 1:throw new Error(d);case 2:throw new Error(h);case 3:throw new Error(i)}},ecdh:function(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;switch(w("public key",r,[33,65]),w("private key",t,32),v("Object"===m(n),"Expected options to be an Object"),void 0!==n.data&&w("options.data",n.data),void 0!==n.hashfn?(v("Function"===m(n.hashfn),"Expected options.hashfn to be a Function"),void 0!==n.xbuf&&w("options.xbuf",n.xbuf,32),void 0!==n.ybuf&&w("options.ybuf",n.ybuf,32),w("output",i)):i=g(i,32),e.ecdh(i,r,t,n.data,n.hashfn,n.xbuf,n.ybuf)){case 0:return i;case 1:throw new Error(s);case 2:throw new Error(y)}}}}},1250:function(e,r,t){var n=new(0,t(104).ec)("secp256k1"),i=n.curve,a=i.n.constructor;function o(e){var r=e[0];switch(r){case 2:case 3:return 33!==e.length?null:function(e,r){var t=new a(r);if(t.cmp(i.p)>=0)return null;var o=(t=t.toRed(i.red)).redSqr().redIMul(t).redIAdd(i.b).redSqrt();return 3===e!==o.isOdd()&&(o=o.redNeg()),n.keyPair({pub:{x:t,y:o}})}(r,e.subarray(1,33));case 4:case 6:case 7:return 65!==e.length?null:function(e,r,t){var o=new a(r),u=new a(t);if(o.cmp(i.p)>=0||u.cmp(i.p)>=0)return null;if(o=o.toRed(i.red),u=u.toRed(i.red),(6===e||7===e)&&u.isOdd()!==(7===e))return null;var c=o.redSqr().redIMul(o);return u.redSqr().redISub(c.redIAdd(i.b)).isZero()?n.keyPair({pub:{x:o,y:u}}):null}(r,e.subarray(1,33),e.subarray(33,65));default:return null}}function u(e,r){for(var t=r.encode(null,33===e.length),n=0;n<e.length;++n)e[n]=t[n]}e.exports={contextRandomize:function(){return 0},privateKeyVerify:function(e){var r=new a(e);return r.cmp(i.n)<0&&!r.isZero()?0:1},privateKeyNegate:function(e){var r=new a(e),t=i.n.sub(r).umod(i.n).toArrayLike(Uint8Array,"be",32);return e.set(t),0},privateKeyTweakAdd:function(e,r){var t=new a(r);if(t.cmp(i.n)>=0)return 1;if(t.iadd(new a(e)),t.cmp(i.n)>=0&&t.isub(i.n),t.isZero())return 1;var n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},privateKeyTweakMul:function(e,r){var t=new a(r);if(t.cmp(i.n)>=0||t.isZero())return 1;t.imul(new a(e)),t.cmp(i.n)>=0&&(t=t.umod(i.n));var n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},publicKeyVerify:function(e){return null===o(e)?1:0},publicKeyCreate:function(e,r){var t=new a(r);return t.cmp(i.n)>=0||t.isZero()?1:(u(e,n.keyFromPrivate(r).getPublic()),0)},publicKeyConvert:function(e,r){var t=o(r);return null===t?1:(u(e,t.getPublic()),0)},publicKeyNegate:function(e,r){var t=o(r);if(null===t)return 1;var n=t.getPublic();return n.y=n.y.redNeg(),u(e,n),0},publicKeyCombine:function(e,r){for(var t=new Array(r.length),n=0;n<r.length;++n)if(t[n]=o(r[n]),null===t[n])return 1;for(var i=t[0].getPublic(),a=1;a<t.length;++a)i=i.add(t[a].pub);return i.isInfinity()?2:(u(e,i),0)},publicKeyTweakAdd:function(e,r,t){var n=o(r);if(null===n)return 1;if((t=new a(t)).cmp(i.n)>=0)return 2;var c=n.getPublic().add(i.g.mul(t));return c.isInfinity()?2:(u(e,c),0)},publicKeyTweakMul:function(e,r,t){var n=o(r);return null===n?1:(t=new a(t)).cmp(i.n)>=0||t.isZero()?2:(u(e,n.getPublic().mul(t)),0)},signatureNormalize:function(e){var r=new a(e.subarray(0,32)),t=new a(e.subarray(32,64));return r.cmp(i.n)>=0||t.cmp(i.n)>=0?1:(1===t.cmp(n.nh)&&e.set(i.n.sub(t).toArrayLike(Uint8Array,"be",32),32),0)},signatureExport:function(e,r){var t=r.subarray(0,32),n=r.subarray(32,64);if(new a(t).cmp(i.n)>=0)return 1;if(new a(n).cmp(i.n)>=0)return 1;var o=e.output,u=o.subarray(4,37);u[0]=0,u.set(t,1);for(var c=33,s=0;c>1&&0===u[s]&&!(128&u[s+1]);--c,++s);if(128&(u=u.subarray(s))[0])return 1;if(c>1&&0===u[0]&&!(128&u[1]))return 1;var p=o.subarray(39,72);p[0]=0,p.set(n,1);for(var l=33,d=0;l>1&&0===p[d]&&!(128&p[d+1]);--l,++d);return 128&(p=p.subarray(d))[0]||l>1&&0===p[0]&&!(128&p[1])?1:(e.outputlen=6+c+l,o[0]=48,o[1]=e.outputlen-2,o[2]=2,o[3]=u.length,o.set(u,4),o[4+c]=2,o[5+c]=p.length,o.set(p,6+c),0)},signatureImport:function(e,r){if(r.length<8)return 1;if(r.length>72)return 1;if(48!==r[0])return 1;if(r[1]!==r.length-2)return 1;if(2!==r[2])return 1;var t=r[3];if(0===t)return 1;if(5+t>=r.length)return 1;if(2!==r[4+t])return 1;var n=r[5+t];if(0===n)return 1;if(6+t+n!==r.length)return 1;if(128&r[4])return 1;if(t>1&&0===r[4]&&!(128&r[5]))return 1;if(128&r[t+6])return 1;if(n>1&&0===r[t+6]&&!(128&r[t+7]))return 1;var o=r.subarray(4,4+t);if(33===o.length&&0===o[0]&&(o=o.subarray(1)),o.length>32)return 1;var u=r.subarray(6+t);if(33===u.length&&0===u[0]&&(u=u.slice(1)),u.length>32)throw new Error("S length is too long");var c=new a(o);c.cmp(i.n)>=0&&(c=new a(0));var s=new a(r.subarray(6+t));return s.cmp(i.n)>=0&&(s=new a(0)),e.set(c.toArrayLike(Uint8Array,"be",32),0),e.set(s.toArrayLike(Uint8Array,"be",32),32),0},ecdsaSign:function(e,r,t,o,u){if(u){var c=u;u=function(e){var n=c(r,t,null,o,e);if(!(n instanceof Uint8Array&&32===n.length))throw new Error("This is the way");return new a(n)}}var s,p=new a(t);if(p.cmp(i.n)>=0||p.isZero())return 1;try{s=n.sign(r,t,{canonical:!0,k:u,pers:o})}catch(l){return 1}return e.signature.set(s.r.toArrayLike(Uint8Array,"be",32),0),e.signature.set(s.s.toArrayLike(Uint8Array,"be",32),32),e.recid=s.recoveryParam,0},ecdsaVerify:function(e,r,t){var u={r:e.subarray(0,32),s:e.subarray(32,64)},c=new a(u.r),s=new a(u.s);if(c.cmp(i.n)>=0||s.cmp(i.n)>=0)return 1;if(1===s.cmp(n.nh)||c.isZero()||s.isZero())return 3;var p=o(t);if(null===p)return 2;var l=p.getPublic();return n.verify(r,u,l)?0:3},ecdsaRecover:function(e,r,t,o){var c,s={r:r.slice(0,32),s:r.slice(32,64)},p=new a(s.r),l=new a(s.s);if(p.cmp(i.n)>=0||l.cmp(i.n)>=0)return 1;if(p.isZero()||l.isZero())return 2;try{c=n.recoverPubKey(o,s,t)}catch(d){return 2}return u(e,c),0},ecdh:function(e,r,t,u,c,s,p){var l=o(r);if(null===l)return 1;var d=new a(t);if(d.cmp(i.n)>=0||d.isZero())return 2;var f=l.getPublic().mul(d);if(void 0===c)for(var h=f.encode(null,!0),y=n.hash().update(h).digest(),v=0;v<32;++v)e[v]=y[v];else{s||(s=new Uint8Array(32));for(var w=f.getX().toArray("be",32),b=0;b<32;++b)s[b]=w[b];p||(p=new Uint8Array(32));for(var g=f.getY().toArray("be",32),m=0;m<32;++m)p[m]=g[m];var K=c(s,p,u);if(!(K instanceof Uint8Array&&K.length===e.length))return 2;e.set(K)}return 0}}},825:function(e,r,t){var n=t(219);e.exports=n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},879:function(e,r,t){"use strict";var n=t(105),i=t(880);e.exports=i((function(e){var r=n("sha256").update(e).digest();return n("sha256").update(r).digest()}))},880:function(e,r,t){"use strict";var n=t(825),i=t(22).Buffer;e.exports=function(e){function r(r){var t=r.slice(0,-4),n=r.slice(-4),i=e(t);if(!(n[0]^i[0]|n[1]^i[1]|n[2]^i[2]|n[3]^i[3]))return t}return{encode:function(r){var t=e(r);return n.encode(i.concat([r,t],r.length+4))},decode:function(e){var t=r(n.decode(e));if(!t)throw new Error("Invalid checksum");return t},decodeUnsafe:function(e){var t=n.decodeUnsafe(e);if(t)return r(t)}}}},992:function(e,r,t){"use strict";t.r(r),t.d(r,"generateAddresses",(function(){return s})),t.d(r,"isValidPath",(function(){return p}));var n=t(1247),i=t.n(n),a=t(877),o=t(11),u=a.publicToAddress,c=a.toChecksumAddress;function s(e,r){var t=e.publicKey,n=e.chainCode,a=e.path,s=new i.a;s.publicKey=new o.Buffer(t,"hex"),s.chainCode=new o.Buffer(n,"hex");for(var p=[],l=r;l<5+r;l++){var d=s.deriveChild(l),f=u(d.publicKey,!0).toString("hex");p.push({dPath:"".concat(a,"/").concat(l),address:c("0x".concat(f))})}return p}function p(e){var r=e.split("/");if("m"!==r[0])return!1;if("44'"!==r[1])return!1;if("60'"!==r[2]&&"1'"!==r[2])return!1;if(void 0===r[3])return!0;var t=Number(r[3][0]);if(isNaN(t)||t<0||"'"!==r[3][1])return!1;if(void 0===r[4])return!0;var n=Number(r[4][0]);if(isNaN(n)||n<0)return!1;if(void 0===r[5])return!0;var i=Number(r[5][0]);return!(isNaN(i)||i<0)}}}]);
//# sourceMappingURL=7.4accc9c2.chunk.js.map