this._s=this._s||{};(function(_){var window=this;
try{
_.m("Ah7cLd");
var sA=function(a){_.A.call(this,a.Ka);var b=this;this.Sa=this.Ta=null;this.containerHeight=this.Da=-1;this.oa=this.getRoot().getData("eb").number();this.Ba=this.getRoot().getData("mt").number();this.Va=this.getRoot().getData("quie").Fb();this.kb=this.getRoot().getData("li").Fb();this.wa=this.getData("ead").number(1);this.Ia=this.getData("npd").number(1);this.ka=this.getRoot().getData("ie").Fb()?this.wa:0;this.Aa=this.getRoot().getData("cmh").number(0);if((this.wga=2!==this.oa&&(4===this.Ba||!this.Va&&
0!==this.Ba))||0<this.Aa)a=this.xd()&&1!==this.oa||!this.xd()&&0!==this.oa,ZAd(this,a);this.La=this.getRoot().getData("cav").Fb();this.Ua=_.Lm(this.getRoot().getData("wcn"),"");this.Na=_.hp(this,"zXitYb");this.La&&(0,_.ud)(function(){return b.yFb()})};_.B(sA,_.A);sA.Ea=_.A.Ea;_.l=sA.prototype;_.l.Pe=function(){this.trigger(_.bSc);_.YAd(this)};_.l.toggle=function(){this.ka+1<this.wa?this.ka+=1:this.ka+1>this.Ia?this.collapse():this.expand()};
_.l.expand=function(){this.ka+=1;this.ka<this.wa||2!==this.oa&&this.hb(1!==this.oa)};_.l.collapse=function(){this.ka=0;2!==this.oa&&this.hb(0!==this.oa)};_.l.xd=function(){return this.ka>=this.wa};_.l.WDf=function(){return this.ka===this.wa};
_.l.yFb=function(){var a=this.getRoot().el().clientWidth,b=this.getRoot().el().clientHeight;if(null!=this.Na&&(this.Da!==a||this.containerHeight!==b)){this.Da=a;this.containerHeight=b;var c=_.z.getPosition(this.getRoot().el()),d=c.x,e=c.y,f=!1;c=this.Na.el();if(this.Ua){var g=c.querySelector("[jsname="+this.Ua+"]");g&&(c=g)}_.Sa(c.children,function(h){if(f)h.setAttribute("aria-hidden","true");else{var k=_.z.getPosition(h),n=k.x;k.y-e>=b||n-d>=a?(h.setAttribute("aria-hidden","true"),f=!0):h.setAttribute("aria-hidden",
"false")}})}};_.l.hb=function(a){var b=this;this.wga||0<this.Aa?ZAd(this,a):this.getRoot().toggle(a);this.La?this.wga?((0,_.ao)(this.Sa),this.Sa=(0,_.Je)(function(){b.yFb()},300)):this.yFb():_.Lo(this.getRoot(),"aria-hidden",!a);a&&this.kb&&this.notify(_.bw)};
var ZAd=function(a,b){(0,_.ao)(a.Ta);b?(a.getRoot().show(),b=a.getRoot().el().scrollHeight,a.getRoot().setStyle("max-height",b+"px")):0<a.Aa?a.getRoot().setStyle("max-height",a.Aa+"px"):(a.getRoot().setStyle("max-height","0"),2>a.Ia&&(a.Ta=(0,_.Je)(function(){a.getRoot().hide()},300)))};_.l=sA.prototype;_.l.Ppa=function(){return this.Ba};_.l.Zia=function(){return this.oa};_.l.zqd=function(a){var b=a.actionElement.el();_.ve(b,_.ozd,{ax:a.event})};
_.l.Aqd=function(a){var b=a.actionElement.el();_.ve(b,_.$z,{ax:a.event})};_.l.zAf=function(a){var b=a.actionElement.el();_.ve(b,_.pzd,{ax:a.event})};_.M(sA.prototype,"tqtx9d",function(){return this.zAf});_.M(sA.prototype,"jI69Ud",function(){return this.Aqd});_.M(sA.prototype,"vzWA1d",function(){return this.zqd});_.M(sA.prototype,"NKNxqb",function(){return this.Zia});_.M(sA.prototype,"OhQQnd",function(){return this.Ppa});_.M(sA.prototype,"BH9qHd",function(){return this.yFb});
_.M(sA.prototype,"CEcPCf",function(){return this.WDf});_.M(sA.prototype,"sMVRZe",function(){return this.xd});_.M(sA.prototype,"vhaaFf",function(){return this.collapse});_.M(sA.prototype,"KoToPc",function(){return this.expand});_.M(sA.prototype,"ornU0b",function(){return this.toggle});_.M(sA.prototype,"npT2md",function(){return this.Pe});_.xs(_.s8a,sA);
_.p();
}catch(e){_._DumpException(e)}
try{
_.m("Qqt3Gf");
var soi=function(a){_.wo.call(this,a.Ka)};_.B(soi,_.wo);soi.ob=_.wo.ob;soi.Ea=_.wo.Ea;soi.prototype.Ivb=function(){var a=this;return new Promise(function(b){_.ig(_.cf(a,{service:{W3e:_.sjb}}).addCallback(function(c){b(c.service.W3e)}),function(){b(a)})})};_.yo(_.pjb,soi);
_.p();
}catch(e){_._DumpException(e)}
try{
_.m("UBXHI");
_.eBd=function(a){_.A.call(this,a.Ka);this.loaded=!1;this.root=this.getRoot()};_.B(_.eBd,_.A);_.eBd.Ea=_.A.Ea;_.eBd.prototype.ka=function(){if(!this.loaded){var a=_.Km(this.root.getData("src"));a&&(_.Lo(this.root,"src",a),this.root.setData("src",null));this.loaded=!0}};_.M(_.eBd.prototype,"QT8fkf",function(){return this.ka});_.xs(_.B7a,_.eBd);
_.p();
}catch(e){_._DumpException(e)}
try{
var xC,w6d,x6d,A6d,v6d;_.wC=function(a,b){this.oa=a|0;this.ka=b|0};_.l=_.wC.prototype;_.l.toNumber=function(){return 4294967296*this.ka+(this.oa>>>0)};
_.l.toString=function(a){a=a||10;if(2>a||36<a)throw Error("bb`"+a);var b=this.ka>>21;if(0==b||-1==b&&(0!=this.oa||-2097152!=this.ka))return b=this.toNumber(),10==a?""+b:b.toString(a);b=14-(a>>2);var c=Math.pow(a,b),d=xC(c,c/4294967296);c=this.div(d);d=Math.abs(this.subtract(c.multiply(d)).toNumber());var e=10==a?""+d:d.toString(a);e.length<b&&(e="0000000000000".slice(e.length-b)+e);d=c.toNumber();return(10==a?d:d.toString(a))+e};_.l.tG=function(){return this.ka};_.l.rL=function(){return this.oa};
_.l.isZero=function(){return 0==this.oa&&0==this.ka};_.l.isNegative=function(){return 0>this.ka};_.l.equals=function(a){return this.oa==a.oa&&this.ka==a.ka};_.l.compare=function(a){return this.ka==a.ka?this.oa==a.oa?0:this.oa>>>0>a.oa>>>0?1:-1:this.ka>a.ka?1:-1};_.l.negate=function(){var a=~this.oa+1|0;return xC(a,~this.ka+!a|0)};
_.l.add=function(a){var b=this.ka>>>16,c=this.ka&65535,d=this.oa>>>16,e=a.ka>>>16,f=a.ka&65535,g=a.oa>>>16;a=(this.oa&65535)+(a.oa&65535);g=(a>>>16)+(d+g);d=g>>>16;d+=c+f;return xC((g&65535)<<16|a&65535,((d>>>16)+(b+e)&65535)<<16|d&65535)};_.l.subtract=function(a){return this.add(a.negate())};
_.l.multiply=function(a){if(this.isZero())return this;if(a.isZero())return a;var b=this.ka>>>16,c=this.ka&65535,d=this.oa>>>16,e=this.oa&65535,f=a.ka>>>16,g=a.ka&65535,h=a.oa>>>16;a=a.oa&65535;var k=e*a;var n=(k>>>16)+d*a;var r=n>>>16;n=(n&65535)+e*h;r+=n>>>16;r+=c*a;var t=r>>>16;r=(r&65535)+d*h;t+=r>>>16;r=(r&65535)+e*g;t=t+(r>>>16)+(b*a+c*h+d*g+e*f)&65535;return xC((n&65535)<<16|k&65535,t<<16|r&65535)};
_.l.div=function(a){if(a.isZero())throw Error("eb");if(this.isNegative()){if(this.equals(v6d)){if(a.equals(w6d)||a.equals(x6d))return v6d;if(a.equals(v6d))return w6d;var b=this.ka;b=xC(this.oa>>>1|b<<31,b>>1);b=b.div(a).shiftLeft(1);if(b.equals(_.y6d))return a.isNegative()?w6d:x6d;var c=this.subtract(a.multiply(b));return b.add(c.div(a))}return a.isNegative()?this.negate().div(a.negate()):this.negate().div(a).negate()}if(this.isZero())return _.y6d;if(a.isNegative())return a.equals(v6d)?_.y6d:this.div(a.negate()).negate();
var d=_.y6d;for(c=this;0<=c.compare(a);){b=Math.max(1,Math.floor(c.toNumber()/a.toNumber()));var e=Math.ceil(Math.log(b)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);for(var f=_.z6d(b),g=f.multiply(a);g.isNegative()||0<g.compare(c);)b-=e,f=_.z6d(b),g=f.multiply(a);f.isZero()&&(f=w6d);d=d.add(f);c=c.subtract(g)}return d};_.l.not=function(){return xC(~this.oa,~this.ka)};_.l.and=function(a){return xC(this.oa&a.oa,this.ka&a.ka)};_.l.or=function(a){return xC(this.oa|a.oa,this.ka|a.ka)};
_.l.xor=function(a){return xC(this.oa^a.oa,this.ka^a.ka)};_.l.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.oa;return 32>a?xC(b<<a,this.ka<<a|b>>>32-a):xC(0,b<<a-32)};_.z6d=function(a){return 0<a?0x7fffffffffffffff<=a?A6d:new _.wC(a,a/4294967296):0>a?-0x7fffffffffffffff>=a?v6d:(new _.wC(-a,-a/4294967296)).negate():_.y6d};xC=function(a,b){return new _.wC(a,b)};_.y6d=xC(0,0);w6d=xC(1,0);x6d=xC(-1,-1);A6d=xC(4294967295,2147483647);v6d=xC(0,2147483648);
}catch(e){_._DumpException(e)}
try{
var B6d=function(a){this.ka=0;this.oa=_.wh(a)};B6d.prototype.read=function(a){if(this.isAvailable(a)){for(var b=0,c=0;c<a;++c){var d=1&this.oa[this.ka>>3]>>(this.ka&7);this.ka++;b|=d<<c}return b}return 0};var C6d=function(a,b){if(a.isAvailable(b)){var c=0;if(32<b){var d=a.read(32);c=a.read(b-32)}else d=a.read(b);return new _.wC(d,c)}return null};B6d.prototype.isAvailable=function(a){return 0<=a&&a<=this.available()};B6d.prototype.available=function(){return 8*this.oa.length-this.ka};var D6d=function(a){this.wa=a;this.oa=[];this.ka=0};D6d.prototype.encode=function(){return _.Ua(this.oa,4)};D6d.prototype.write=function(a,b){if(this.isAvailable(b))for(var c=0;c<b;++c)this.oa[this.ka>>3]|=(a&1)<<(this.ka&7),this.ka++,a>>=1};var E6d=function(a,b,c){a.isAvailable(c)&&(32<c?(a.write(b.rL(),32),a.write(b.tG(),c-32)):a.write(b.toNumber(),c))};D6d.prototype.isAvailable=function(a){return 0<=a&&a<=this.available()};D6d.prototype.available=function(){return this.wa-this.ka};var F6d=function(){this.ka=[];this.version=0;this.oa=_.y6d},G6d=function(a){this.ka=a;this.timestamp=null};var H6d=function(){this.data=new F6d};_.l=H6d.prototype;_.l.decode=function(a){var b=new B6d(a),c=b.read(4);this.data.version=c;this.data.oa=C6d(b,64);c=b.read(2===c?5:8);for(var d=null,e=0;e<c;++e){var f=new G6d(C6d(b,64));this.data.ka.push(f);var g=0===e?42:30;b.isAvailable(g)&&(g=C6d(b,g),0===e?(d=g,f.timestamp=g):f.timestamp=d.subtract(g))}if(0!==b.available()&&0!==b.read(b.available()))throw Error("pg`"+a);};
_.l.encode=function(){var a=76,b=this.data.ka.length;0<b&&(a+=94*b+12);a=new D6d(a);a.write(this.getVersion(),4);E6d(a,this.data.oa,64);a.write(b,8);b=this.data.ka;b.sort(function(f,g){return g.timestamp.compare(f.timestamp)});for(var c,d=0;d<b.length;++d)if(E6d(a,b[d].ka,64),0===d)c=b[d].timestamp,E6d(a,c,42);else{var e=c.subtract(b[d].timestamp);E6d(a,e,30)}return a.encode()};
_.l.merge=function(a){if(a instanceof H6d&&a.data.oa.equals(this.data.oa))for(var b=0;b<a.data.ka.length;++b){var c=a.data.ka[b];if(c)a:{for(var d=0;d<this.data.ka.length;++d){var e=this.data.ka[d];if(e.ka.equals(c.ka)){0>e.timestamp.compare(c.timestamp)&&(e.timestamp=c.timestamp);break a}}this.data.ka.push(c)}}};_.l.getVersion=function(){return 3};_.l.getData=function(){return this.data};_.I6d=function(){this.cookie=null};_.I6d.prototype.encode=function(){return this.cookie.encode()};_.I6d.prototype.merge=function(a){this.cookie.merge(a.cookie)};_.I6d.prototype.decode=function(a){switch((new B6d(a)).read(4)){case 2:case 3:this.cookie=new H6d}this.cookie.decode(a)};
}catch(e){_._DumpException(e)}
try{
_.m("ZQOCxe");
var T3q=function(a){_.A.call(this,a.Ka);if(a=_.Km(this.getData("dvCookie"))){var b=a,c=_.ld.get("DV");if(c&&c!==a){b=new _.I6d;b.decode(c);var d=new _.I6d;d.decode(a);b.merge(d);b=b.encode()}b!==c&&_.ld.set("DV",b,{maxAge:600})}};_.B(T3q,_.A);T3q.Ea=function(){return{}};_.xs(_.G6a,T3q);
_.p();
}catch(e){_._DumpException(e)}
try{
_.m("ALJqWb");
var Kni=function(a){_.wo.call(this,a.Ka);this.ka=[];this.oD=a.service.R5;this.Pc=null};_.B(Kni,_.wo);Kni.ob=_.wo.ob;Kni.Ea=function(){return{service:{R5:_.rni}}};Kni.prototype.K7c=function(a,b,c){var d=this;_.Xd(a,["click","auxclick"],function(){var e=_.Ini(new _.Hni,b);e=(new _.KO).yc(_.Jni,e);Lni(d,e,2,a,c)})};Kni.prototype.E7c=function(a,b,c){var d=this;_.Xd(a,["click","auxclick"],function(){var e=new _.zni;e=_.rf(e,2,b);e=(new _.KO).yc(_.Ani,e);Lni(d,e,3,a,c)})};
Kni.prototype.J7c=function(a,b){var c=this;_.Xd(a,["click","auxclick"],function(){var d=new _.Fni;d=_.rf(d,1,_.D(b,1));d=_.Pb(d,_.Dni,2,b);d=(new _.KO).yc(_.Gni,d);Lni(c,d,4,a);0<c.ka.length&&Mni(c,b)})};var Mni=function(a,b){a.ka.forEach(function(c){c(b,void 0)})},Lni=function(a,b,c,d,e){e=null!=e?e:new _.LO;var f=Date.now();_.Cf(e,2,f);if(d=_.Oc(d))if(d=_.$ga(d))d=_.qi(d,2),_.hj(e,6,d);e=(new _.KO).yc(_.Cni,e);a.oD.dNa(c,[b,e])};_.yo(_.M2a,Kni);
_.p();
}catch(e){_._DumpException(e)}
try{
_.m("R3fhkb");
var fBd=function(a){_.eBd.call(this,a.Ka);this.window=a.service.window;this.oa()};_.B(fBd,_.eBd);fBd.Ea=function(){return{service:{window:_.xo}}};
fBd.prototype.oa=function(){if(!this.loaded){var a=this.root.Db();if((0!==a.offsetHeight||0!==a.offsetWidth)&&"hidden"!==_.z.getComputedStyle(a,"visibility")&&_.z.tL(a.parentElement)){var b;(a=null==(b=a.parentElement)?void 0:b.getBoundingClientRect())&&(a.left>this.window.get().scrollX+this.window.get().innerWidth||a.left+a.width<this.window.get().scrollX)||this.ka()}}};_.M(fBd.prototype,"iSvHDf",function(){return this.oa});_.xs(_.C7a,fBd);
_.p();
}catch(e){_._DumpException(e)}
try{
_.T0d=function(a){this.Ja=_.u(a)};_.B(_.T0d,_.v);_.T0d.prototype.nb="T2y0jb";
}catch(e){_._DumpException(e)}
try{
_.m("WOJjZ");
var U0d=function(a){_.A.call(this,a.Ka);this.oa=this.getData("npd").number(1);this.VWb=this.getData("dl").Fb();this.ka=_.oi(a.jsdata.Ise,1)?this.oa:0;this.root=this.getRoot().el();this.Tb=a.service.Tb;this.trigger(_.bSc);_.XAd(this)};_.B(U0d,_.A);U0d.Ea=function(){return{jsdata:{Ise:_.T0d},service:{Tb:_.Gu}}};_.l=U0d.prototype;_.l.toggle=function(){this.Qja()?this.collapse():this.expand()};_.l.Qja=function(){return this.ka>=this.oa};
_.l.expand=function(){this.ka>=this.oa||(this.ka+=1,this.update(this.ka===this.oa))};_.l.collapse=function(){this.ka<this.oa||(this.ka=0,this.update(!0))};
_.l.update=function(a){var b=this.Ca("OrQHOc"),c=this.Ca("Elsoj"),d=b.el(),e=c.el(),f=this.getData("isPill").Fb();a&&(a=!b.hasClass("nfoSTb"),b.toggleClass("nfoSTb",a),b.toggleClass("xKXaGf",!a),c.toggleClass("nfoSTb",!a),c.toggleClass("xKXaGf",a),f&&this.Ca("O9JAA").setStyle("transform",a?"none":"rotateZ(180deg)"),this.root.setAttribute("aria-labelledby",this.xd()?e.getAttribute("id"):d.getAttribute("id")),this.root.setAttribute("aria-expanded",String(this.Qja())));this.VWb||_.Oc(this.root)&&this.Tb.ka().ka(this.root).log()};
_.l.G1b=function(a){return a?Array.from(_.im(_.jm(this.Ca("Elsoj").el()))):Array.from(_.im(_.jm(this.Ca("OrQHOc").el())))};_.l.xd=function(){return 0<this.ka};_.l.crd=function(){this.trigger(_.pzd)};_.M(U0d.prototype,"yELBLe",function(){return this.crd});_.M(U0d.prototype,"sMVRZe",function(){return this.xd});_.M(U0d.prototype,"vhaaFf",function(){return this.collapse});_.M(U0d.prototype,"KoToPc",function(){return this.expand});_.M(U0d.prototype,"ZhEbuc",function(){return this.Qja});
_.M(U0d.prototype,"ornU0b",function(){return this.toggle});_.xs(_.u8a,U0d);
_.p();
}catch(e){_._DumpException(e)}
try{
_.m("R2kc8b");
_.Nni=new _.to(_.N2a);
_.p();
}catch(e){_._DumpException(e)}
try{
_.m("dLlj2");
_.Moi=new _.to(_.qjb);
_.p();
}catch(e){_._DumpException(e)}
try{
_.m("hezEbd");
_.gDv=function(a){_.iw.call(this,a.Ka)};_.B(_.gDv,_.iw);_.gDv.ob=_.iw.ob;_.gDv.Ea=_.iw.Ea;_.gDv.prototype.Q8b=function(a,b){var c=this;_.Cs(this).measure(function(d){var e=c.A9(a,b);e&&(d.WA=e)}).Yb(function(d){d.WA&&c.ka(d.WA)}).build()()};_.gDv.prototype.A9=function(a,b){return _.Jo(_.NVc(this,a),function(c){return c.equals(b)}).isEmpty()?_.mw(this,a).first():b};_.gDv.prototype.ka=function(a){a.focus({preventScroll:!0})};_.yo(_.szb,_.gDv);
_.p();
}catch(e){_._DumpException(e)}
try{
_.m("G6wU6e");
_.fDv=new _.to(_.tzb);
_.p();
}catch(e){_._DumpException(e)}
try{
_.vse=_.K("lJSrC");_.wse=_.K("tErFub");_.xse=_.K("R7Jh9d");_.yse=_.K("fRiDjd");
}catch(e){_._DumpException(e)}
try{
_.K("mUFPpd");_.K("tuz4af");_.K("nptbHe");_.iDv=_.K("qWWJ8e");_.jDv=_.K("cEfxe");_.kDv=_.K("Kc2lDe");
}catch(e){_._DumpException(e)}
try{
_.m("Um3BXb");
var NDv,LDv,N2;_.MDv=function(a){LDv.push({construct:a.construct})};NDv=_.Yb(_.DG);LDv=[];
N2=function(a){_.A.call(this,a.Ka);this.oa=!this.getData("ni").Fb();this.maa=a.Uf.Ndc;this.Vsa=this.getData("esw").Fb();this.Da=this.getData("sd").Fb();this.Ba=this.getData("sli").Fb();this.Ia=this.getData("ri").Fb();this.Na=this.getData("twc").Fb();this.wa=!1;if((this.La=this.getData("au").Fb())&&this.maa){var b=(b=this.getRoot().closest(_.Eo("uK8Ylc")).el())?_.Pc(b,"ved"):null;var c=NDv(this.maa.serialize());if(b&&c&&c.Ho()){var d;null!=(d=c.Ue())&&_.rf(d,5,b)}this.maa=c}a.model.uG.Ip(this.getRoot().el(),
this.maa);_.tD(this);var e;(d=null==(e=this.maa)?void 0:e.Ue())&&this.trigger(_.jDv,null==d?void 0:d.getUniqueId());e=_.$a(LDv);for(d=e.next();!d.done;d=e.next())d.value.construct(this,a);this.DF=a.service.DF;this.Vsa&&_.vo(this,this.lra());this.Aa=a.service.jea;this.Ia&&(a=_.Lm(this.getData("refDocid"),""),0!==a.length&&(e=this.getRoot().el(),d=_.Bni(new _.LO,this.Na),this.Aa.E7c(e,a,d)))};_.B(N2,_.A);N2.Ea=function(){return{model:{uG:_.EG},Uf:{Ndc:_.DG},service:{DF:_.Moi,jea:_.Nni}}};_.l=N2.prototype;
_.l.h0=function(){if(this.Vsa){var a,b;null==(b=(a=this.DF).Afc)||b.call(a,this.Ba);a=this.Ca("IOBa3c").el();var c,d;null==(d=(c=this.DF).Sbd)||d.call(c,this.Da);var e,f;null==(f=(e=this.DF).bTb)||f.call(e,a)}};_.l.lra=function(){var a=this;return this.DF.Ivb().then(function(b){a.DF=b})};
_.l.OOd=function(a){var b=a.targetElement.parent();a=_.Ol("srrRv",this.getRoot().el());b=_.us(this,b.eq(0),"YsWoif").el();_.Kw([new _.Tn(b,"show")],{triggerElement:b,userAction:9});_.Ve(b,_.bw);null==a&&_.z.setStyle(b,"display","inline-block")};_.l.POd=function(a){var b=a.targetElement;a=a.targetElement.parent();a=_.us(this,a.eq(0),"YsWoif").el();_.Kw([new _.Tn(a,"hide")],{triggerElement:b.eq(0).el(),userAction:9});_.z.setStyle(a,"display","none")};
_.l.Ic=function(a){if(this.maa&&this.maa.getId()){_.Uo(a.event);_.To(a.event);this.trigger(_.DHc,{ax:a.event});var b;(a=null==(b=this.maa)?void 0:b.Ue())&&this.trigger(_.kDv,null==a?void 0:a.getUniqueId())}};_.l.Ld=function(){this.notify(_.bw)};_.l.Ed=function(){this.oa||(_.Kw([new _.Tn(this.getRoot().el(),"show")]),this.oa=!0)};_.l.hidden=function(){};
_.l.NOd=function(a){var b;a=null==(b=a.data)?void 0:b.getElementsByClassName("tsvjJe")[0];_.af(this.getRoot().el(),a)&&(null==a||a.classList.remove("b1Zhoc"),!this.wa&&a&&(_.Ve(a,_.vse),_.Kw([new _.Tn(a,"show")])),this.wa=!0)};_.l.MOd=function(a){var b;a=null==(b=a.data)?void 0:b.getElementsByClassName("tsvjJe")[0];_.af(this.getRoot().el(),a)&&(null==a||a.classList.add("b1Zhoc"))};_.l.fX=function(){this.notify(_.bw);this.getRoot().setStyle("display","inline-flex");this.Ed()};
_.M(N2.prototype,"bNsLWe",function(){return this.fX});_.M(N2.prototype,"a15Fhc",function(){return this.MOd});_.M(N2.prototype,"kTV1ed",function(){return this.NOd});_.M(N2.prototype,"L6cTce",function(){return this.hidden});_.M(N2.prototype,"TSZdd",function(){return this.Ed});_.M(N2.prototype,"AwdEqd",function(){return this.Ld});_.M(N2.prototype,"h5M12e",function(){return this.Ic});_.M(N2.prototype,"XEuVS",function(){return this.POd});_.M(N2.prototype,"RrAr1",function(){return this.OOd});
_.M(N2.prototype,"SfpNW",function(){return this.h0});_.xs(_.Azb,N2);
_.ODv=function(a){return a.getRoot().el()};_.MDv({construct:function(a){var b=null,c=a.getRoot();if(a=_.ODv(a))a.addEventListener("mouseenter",function(){null===b&&(b=(0,_.Je)(function(){c.toggleClass("dB3j8",!0);b=null},50))}),a.addEventListener("mouseleave",function(){b&&((0,_.ao)(b),b=null);c.toggleClass("dB3j8",!1)})}});
var PDv=function(a,b,c,d){var e=_.hp(a,"tdeeNb");e.isEmpty()||(d=new _.Bn(_.Dm(d.url)),c=d.get("imgrc")===c&&!d.get("imgdii")||d.get("vhid")===c,c||(a=a.getRoot(),e.hasClass("srrRv")&&(d=e.prev(),b.Q8b(a,d))),e.toggleClass("srrRv",c))},RDv=function(a,b){if(!a.closest(function(g){return QDv.some(function(h){return g.classList.contains(h)})}).isEmpty()){var c=a.el().getBoundingClientRect(),d=a.parent().el().getBoundingClientRect();a=c.top===d.top;var e=8>d.bottom-c.bottom,f=c.left===d.left;c=8>d.right-
c.right;b.toggleClass("Xn9Tkc",a&&f);b.toggleClass("oGwWse",a&&c);b.toggleClass("y0jvId",e&&c);b.toggleClass("lM9tvf",e&&f)}},QDv=["DhGrzc","l5X1Ye","o6uAG","OXEsB"];
_.MDv({construct:function(a){var b=_.Km(a.getData("docid"));b&&_.cf(a,{service:{x$a:_.dH,focus:_.fDv}}).then(function(c){var d=c.service.focus;c=c.service.x$a;c.addListener(function(e){PDv(a,d,b,e)});PDv(a,d,b,c.getState())},function(c){return void _.$c(c)});_.xe(a.getRoot().el(),_.iDv,function(){RDv(a.getRoot(),_.hp(a,"tdeeNb"))});RDv(a.getRoot(),_.hp(a,"tdeeNb"))}});
_.ODv=function(a){return _.hp(a,"qQjpJ").el()};
_.p();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
