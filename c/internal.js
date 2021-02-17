(()=>{var t={133:()=>{new class{constructor(){this.initChevrons()}initChevrons(){document.querySelectorAll(".top10 > footer > a > span:last-of-type").forEach((t=>{t.parentNode.appendChild(t.cloneNode()),t.parentNode.appendChild(t.cloneNode())}))}}},693:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",s="day",r="week",a="month",o="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},m={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,a),r=n-s<0,o=e.clone().add(i+(r?-1:1),a);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:u,w:r,d:s,D:c,h:i,m:n,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",p={};p[y]=h;var v=function(t){return t instanceof S},$=function(t,e,n){var i;if(!t)return y;if("string"==typeof t)p[t]&&(i=t),e&&(p[t]=e,i=t);else{var s=t.name;p[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},g=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},M=m;M.l=$,M.i=v,M.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function h(t){this.$L=$(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var l=this,d=!!M.u(o)||o,h=M.p(t),f=function(t,e){var n=M.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?n:n.endOf(s)},m=function(t,e){return M.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},y=this.$W,p=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case u:return d?f(1,0):f(31,11);case a:return d?f(1,p):f(0,p+1);case r:var g=this.$locale().weekStart||0,S=(y<g?y+7:y)-g;return f(d?v-S:v+(6-S),p);case s:case c:return m($+"Hours",0);case i:return m($+"Minutes",1);case n:return m($+"Seconds",2);case e:return m($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,o){var l,d=M.p(r),h="set"+(this.$u?"UTC":""),f=(l={},l[s]=h+"Date",l[c]=h+"Date",l[a]=h+"Month",l[u]=h+"FullYear",l[i]=h+"Hours",l[n]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[d],m=d===s?this.$D+(o-this.$W):o;if(d===a||d===u){var y=this.clone().set(c,1);y.$d[f](m),y.init(),this.$d=y.set(c,Math.min(this.$D,y.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[M.p(t)]()},f.add=function(t,o){var c,l=this;t=Number(t);var d=M.p(o),h=function(e){var n=g(l);return M.w(n.date(n.date()+Math.round(e*t)),l)};if(d===a)return this.set(a,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===s)return h(1);if(d===r)return h(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[d]||1,m=this.$d.getTime()+t*f;return M.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$locale(),r=this.$H,a=this.$m,o=this.$M,u=s.weekdays,c=s.months,l=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].substr(0,r)},h=function(t){return M.s(r%12||12,t,"0")},f=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:l(s.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,u,2),ddd:l(s.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:M.s(r,2,"0"),h:h(1),hh:h(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return n.replace(d,(function(t,e){return e||m[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var d,h=M.p(c),f=g(t),m=6e4*(f.utcOffset()-this.utcOffset()),y=this-f,p=M.m(this,f);return p=(d={},d[u]=p/12,d[a]=p,d[o]=p/3,d[r]=(y-m)/6048e5,d[s]=(y-m)/864e5,d[i]=y/36e5,d[n]=y/6e4,d[e]=y/1e3,d)[h]||y,l?p:M.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=$(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),w=S.prototype;return g.prototype=w,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",s],["$M",a],["$y",u],["$D",c]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,S,g),t.$i=!0),g},g.locale=$,g.isDayjs=v,g.unix=function(t){return g(1e3*t)},g.en=p[y],g.Ls=p,g.p={},g}()},1:function(t){t.exports=function(){"use strict";var t,e,n=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,i=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,s={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},r=function(t){return t instanceof d},a=function(t,e,n){return new d(t,n,e.$l)},o=function(t){return e.p(t)+"s"},u=function(t){return t<0},c=function(t){return u(t)?Math.ceil(t):Math.floor(t)},l=function(t,e){return t?u(t)?{negative:!0,format:""+function(t){return Math.abs(t)}(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},d=function(){function u(t,e,n){var r=this;if(this.$d={},this.$l=n,e)return a(t*s[o(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){r.$d[o(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var u=t.match(i);if(u)return this.$d.years=u[2],this.$d.months=u[3],this.$d.weeks=u[4],this.$d.days=u[5],this.$d.hours=u[6],this.$d.minutes=u[7],this.$d.seconds=u[8],this.calMilliseconds(),this}return this}var d=u.prototype;return d.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*s[n]}),0)},d.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=c(t/31536e6),t%=31536e6,this.$d.months=c(t/2592e6),t%=2592e6,this.$d.days=c(t/864e5),t%=864e5,this.$d.hours=c(t/36e5),t%=36e5,this.$d.minutes=c(t/6e4),t%=6e4,this.$d.seconds=c(t/1e3),t%=1e3,this.$d.milliseconds=t},d.toISOString=function(){var t=l(this.$d.years,"Y"),e=l(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=l(n,"D"),s=l(this.$d.hours,"H"),r=l(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=l(a,"S"),u=t.negative||e.negative||i.negative||s.negative||r.negative||o.negative,c=s.format||r.format||o.format?"T":"",d=(u?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+o.format;return"P"===d||"-P"===d?"P0D":d},d.toJSON=function(){return this.toISOString()},d.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return i.replace(n,(function(t,e){return e||String(s[t])}))},d.as=function(t){return this.$ms/s[o(t)]},d.get=function(t){var e=this.$ms,n=o(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?c(e/s[n]):this.$d[n],0===e?0:e},d.add=function(t,e,n){var i;return i=e?t*s[o(e)]:r(t)?t.$ms:a(t,this).$ms,a(this.$ms+i*(n?-1:1),this)},d.subtract=function(t,e){return this.add(t,e,!0)},d.locale=function(t){var e=this.clone();return e.$l=t,e},d.clone=function(){return a(this.$ms,this)},d.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},d.milliseconds=function(){return this.get("milliseconds")},d.asMilliseconds=function(){return this.as("milliseconds")},d.seconds=function(){return this.get("seconds")},d.asSeconds=function(){return this.as("seconds")},d.minutes=function(){return this.get("minutes")},d.asMinutes=function(){return this.as("minutes")},d.hours=function(){return this.get("hours")},d.asHours=function(){return this.as("hours")},d.days=function(){return this.get("days")},d.asDays=function(){return this.as("days")},d.weeks=function(){return this.get("weeks")},d.asWeeks=function(){return this.as("weeks")},d.months=function(){return this.get("months")},d.asMonths=function(){return this.as("months")},d.years=function(){return this.get("years")},d.asYears=function(){return this.as("years")},u}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return a(t,{$l:n},e)},s.isDuration=r;var o=i.prototype.add,u=i.prototype.subtract;i.prototype.add=function(t,e){return r(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)},i.prototype.subtract=function(t,e){return r(t)&&(t=t.asMilliseconds()),u.bind(this)(t,e)}}}()},492:t=>{!function(e,n){var i=function(t,e,n){"use strict";var i,s;if(function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in s=t.lazySizesConfig||t.lazysizesConfig||{},n)e in s||(s[e]=n[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:s,noSupport:!0};var r=e.documentElement,a=t.HTMLPictureElement,o="addEventListener",u="getAttribute",c=t[o].bind(t),l=t.setTimeout,d=t.requestAnimationFrame||l,h=t.requestIdleCallback,f=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],y={},p=Array.prototype.forEach,v=function(t,e){return y[e]||(y[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),y[e].test(t[u]("class")||"")&&y[e]},$=function(t,e){v(t,e)||t.setAttribute("class",(t[u]("class")||"").trim()+" "+e)},g=function(t,e){var n;(n=v(t,e))&&t.setAttribute("class",(t[u]("class")||"").replace(n," "))},M=function(t,e,n){var i=n?o:"removeEventListener";n&&M(t,e),m.forEach((function(n){t[i](n,e)}))},S=function(t,n,s,r,a){var o=e.createEvent("Event");return s||(s={}),s.instance=i,o.initEvent(n,!r,!a),o.detail=s,t.dispatchEvent(o),o},w=function(e,n){var i;!a&&(i=t.picturefill||s.pf)?(n&&n.src&&!e[u]("srcset")&&e.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[e]})):n&&n.src&&(e.src=n.src)},b=function(t,e){return(getComputedStyle(t,null)||{})[e]},z=function(t,e,n){for(n=n||t.offsetWidth;n<s.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},D=($t=[],gt=[],Mt=$t,St=function(){var t=Mt;for(Mt=$t.length?gt:$t,pt=!0,vt=!1;t.length;)t.shift()();pt=!1},wt=function(t,n){pt&&!n?t.apply(this,arguments):(Mt.push(t),vt||(vt=!0,(e.hidden?l:d)(St)))},wt._lsFlush=St,wt),_=function(t,e){return e?function(){D(t)}:function(){var e=this,n=arguments;D((function(){t.apply(e,n)}))}},C=function(t){var e,i=0,r=s.throttleDelay,a=s.ricTimeout,o=function(){e=!1,i=n.now(),t()},u=h&&a>49?function(){h(o,{timeout:a}),a!==s.ricTimeout&&(a=s.ricTimeout)}:_((function(){l(o)}),!0);return function(t){var s;(t=!0===t)&&(a=33),e||(e=!0,(s=r-(n.now()-i))<0&&(s=0),t||s<9?u():l(u,s))}},A=function(t){var e,i,s=99,r=function(){e=null,t()},a=function(){var t=n.now()-i;t<s?l(a,s-t):(h||r)(r)};return function(){i=n.now(),e||(e=l(a,s))}},k=(Z=/^img$/i,V=/^iframe$/i,Q="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),G=0,K=0,X=0,tt=-1,et=function(t){X--,(!t||X<0||!t.target)&&(X=0)},nt=function(t){return null==J&&(J="hidden"==b(e.body,"visibility")),J||!("hidden"==b(t.parentNode,"visibility")&&"hidden"==b(t,"visibility"))},it=function(t,n){var i,s=t,a=nt(t);for(P-=n,U+=n,R-=n,j+=n;a&&(s=s.offsetParent)&&s!=e.body&&s!=r;)(a=(b(s,"opacity")||1)>0)&&"visible"!=b(s,"overflow")&&(i=s.getBoundingClientRect(),a=j>i.left&&R<i.right&&U>i.top-1&&P<i.bottom+1);return a},st=function(){var t,n,a,o,c,l,d,h,f,m,y,p,v=i.elements;if((W=s.loadMode)&&X<8&&(t=v.length)){for(n=0,tt++;n<t;n++)if(v[n]&&!v[n]._lazyRace)if(!Q||i.prematureUnveil&&i.prematureUnveil(v[n]))ht(v[n]);else if((h=v[n][u]("data-expand"))&&(l=1*h)||(l=K),m||(m=!s.expand||s.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:s.expand,i._defEx=m,y=m*s.expFactor,p=s.hFac,J=null,K<y&&X<1&&tt>2&&W>2&&!e.hidden?(K=y,tt=0):K=W>1&&tt>1&&X<6?m:G),f!==l&&(F=innerWidth+l*p,q=innerHeight+l,d=-1*l,f=l),a=v[n].getBoundingClientRect(),(U=a.bottom)>=d&&(P=a.top)<=q&&(j=a.right)>=d*p&&(R=a.left)<=F&&(U||j||R||P)&&(s.loadHidden||nt(v[n]))&&(Y&&X<3&&!h&&(W<3||tt<4)||it(v[n],l))){if(ht(v[n]),c=!0,X>9)break}else!c&&Y&&!o&&X<4&&tt<4&&W>2&&(T[0]||s.preloadAfterLoad)&&(T[0]||!h&&(U||j||R||P||"auto"!=v[n][u](s.sizesAttr)))&&(o=T[0]||v[n]);o&&!c&&ht(o)}},rt=C(st),at=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(et(t),$(e,s.loadedClass),g(e,s.loadingClass),M(e,ut),S(e,"lazyloaded"))},ot=_(at),ut=function(t){ot({target:t.target})},ct=function(t,e){var n=t.getAttribute("data-load-mode")||s.iframeLoadMode;0==n?t.contentWindow.location.replace(e):1==n&&(t.src=e)},lt=function(t){var e,n=t[u](s.srcsetAttr);(e=s.customMedia[t[u]("data-media")||t[u]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},dt=_((function(t,e,n,i,r){var a,o,c,d,h,m;(h=S(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(n?$(t,s.autosizesClass):t.setAttribute("sizes",i)),o=t[u](s.srcsetAttr),a=t[u](s.srcAttr),r&&(d=(c=t.parentNode)&&f.test(c.nodeName||"")),m=e.firesLoad||"src"in t&&(o||a||d),h={target:t},$(t,s.loadingClass),m&&(clearTimeout(B),B=l(et,2500),M(t,ut,!0)),d&&p.call(c.getElementsByTagName("source"),lt),o?t.setAttribute("srcset",o):a&&!d&&(V.test(t.nodeName)?ct(t,a):t.src=a),r&&(o||d)&&w(t,{src:a})),t._lazyRace&&delete t._lazyRace,g(t,s.lazyClass),D((function(){var e=t.complete&&t.naturalWidth>1;m&&!e||(e&&$(t,s.fastLoadedClass),at(h),t._lazyCache=!0,l((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&X--}),!0)})),ht=function(t){if(!t._lazyRace){var e,n=Z.test(t.nodeName),i=n&&(t[u](s.sizesAttr)||t[u]("sizes")),r="auto"==i;(!r&&Y||!n||!t[u]("src")&&!t.srcset||t.complete||v(t,s.errorClass)||!v(t,s.lazyClass))&&(e=S(t,"lazyunveilread").detail,r&&E.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,X++,dt(t,e,r,i,n))}},ft=A((function(){s.loadMode=3,rt()})),mt=function(){3==s.loadMode&&(s.loadMode=2),ft()},yt=function(){Y||(n.now()-I<999?l(yt,999):(Y=!0,s.loadMode=3,rt(),c("scroll",mt,!0)))},{_:function(){I=n.now(),i.elements=e.getElementsByClassName(s.lazyClass),T=e.getElementsByClassName(s.lazyClass+" "+s.preloadClass),c("scroll",rt,!0),c("resize",rt,!0),c("pageshow",(function(t){if(t.persisted){var n=e.querySelectorAll("."+s.loadingClass);n.length&&n.forEach&&d((function(){n.forEach((function(t){t.complete&&ht(t)}))}))}})),t.MutationObserver?new MutationObserver(rt).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[o]("DOMNodeInserted",rt,!0),r[o]("DOMAttrModified",rt,!0),setInterval(rt,999)),c("hashchange",rt,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e[o](t,rt,!0)})),/d$|^c/.test(e.readyState)?yt():(c("load",yt),e[o]("DOMContentLoaded",rt),l(yt,2e4)),i.elements.length?(st(),D._lsFlush()):rt()},checkElems:rt,unveil:ht,_aLSL:mt}),E=(O=_((function(t,e,n,i){var s,r,a;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),f.test(e.nodeName||""))for(r=0,a=(s=e.getElementsByTagName("source")).length;r<a;r++)s[r].setAttribute("sizes",i);n.detail.dataAttr||w(t,n.detail)})),N=function(t,e,n){var i,s=t.parentNode;s&&(n=z(t,s,n),(i=S(t,"lazybeforesizes",{width:n,dataAttr:!!e})).defaultPrevented||(n=i.detail.width)&&n!==t._lazysizesWidth&&O(t,s,i,n))},H=A((function(){var t,e=x.length;if(e)for(t=0;t<e;t++)N(x[t])})),{_:function(){x=e.getElementsByClassName(s.autosizesClass),c("resize",H)},checkElems:H,updateElem:N}),L=function(){!L.i&&e.getElementsByClassName&&(L.i=!0,E._(),k._())};var x,O,N,H;var T,Y,B,W,I,F,q,P,R,j,U,J,Z,V,Q,G,K,X,tt,et,nt,it,st,rt,at,ot,ut,ct,lt,dt,ht,ft,mt,yt;var pt,vt,$t,gt,Mt,St,wt;return l((function(){s.init&&L()})),i={cfg:s,autoSizer:E,loader:k,init:L,uP:w,aC:$,rC:g,hC:v,fire:S,gW:z,rAF:D}}(e,e.document,Date);e.lazySizes=i,t.exports&&(t.exports=i)}("undefined"!=typeof window?window:{})},840:function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function o(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,o)}u((i=i.apply(t,e||[])).next())}))},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=s(n(693)),a=s(n(1));r.default.extend(a.default);class o{constructor(){this.element=o.createElement(),this.blink=0}start(t){if(!t)return this.showBuilding();this.nextBuild=r.default(t).add(1,"day");const e=r.default();this.nextBuild<=e&&(this.nextBuild=this.nextBuild.add(r.default.duration(e.diff(this.nextBuild)).days()+1,"days")),this.monitor()}static createElement(){const t=document.createElement("div");return t.classList.add("countdown"),t.innerHTML="Initializing...",document.querySelector(".body").appendChild(t),t}monitor(){this.timer=window.setInterval((()=>this.showNextUpdate()),500),this.showNextUpdate()}showNextUpdate(){const t=this.calculateDuration();if(t.asMilliseconds()<=0)return clearInterval(this.timer),this.showReady();const e=t.format("[<span>]HH:mm.ss[</span>]");this.element.innerHTML="Next update in "+((this.blink^=1)?e:e.replace(/:/," "))}showBuilding(){this.element.classList.add("building"),this.element.innerHTML="Building update"+"<span>.</span>".repeat(3)}showReady(){this.element.classList.add("ready"),this.element.innerHTML='<a onclick="location.reload()">Ready for launch</a>'}calculateDuration(){return r.default.duration(this.nextBuild.diff(r.default()))}}e.default=o,function(){i(this,void 0,void 0,(function*(){const t=new o,e=yield(yield fetch("https://api.github.com/repos/250/Steam-250/actions/workflows/Build.yml/runs?actor=Azure-bot&per_page=1")).json();t.start("completed"===e.workflow_runs[0].status?e.workflow_runs[0].updated_at:null)}))}()},293:()=>{"use strict";new class{constructor(){var t;this.form=document.querySelector(".ranking .filter form"),this.filtersButton=null===(t=this.form)||void 0===t?void 0:t.previousElementSibling,this.checks=[],this.form&&(this.checks=[...this.form.querySelectorAll("input[type=checkbox]")],this.initFilterForm(),this.loadState())}initFilterForm(){this.filtersButton.addEventListener("click",(t=>this.form.classList.toggle("open"))),this.form.querySelector("form > button.ok").addEventListener("click",(t=>{this.saveState(),this.form.classList.remove("open"),t.preventDefault()})),this.form.querySelector("form > button.cancel").addEventListener("click",(t=>{this.loadState(),this.form.classList.remove("open"),t.preventDefault()})),this.form.querySelector("form > button.reset").addEventListener("click",(t=>{setTimeout((()=>this.filterApps()))})),this.checks.forEach((t=>t.addEventListener("change",(t=>this.filterApps()))))}filterApps(){const t=document.querySelectorAll(".ranking > div[id]"),e=this.checks.filter((t=>t.checked));let n=0;this.filtersButton.getAttribute("data-filtered")||e.length<this.checks.length?t.forEach((t=>{let i=e.some((e=>"vr"===e.name?!!t.querySelector(".platforms > .vive, .platforms > .rift, .platforms > .wmr, .platforms > .index"):!!t.querySelector(".platforms > ."+e.name)));t.classList.toggle("filtered",!i),i&&(t.classList.remove("primary","secondary"),t.classList.add(1&++n?"primary":"secondary"))})):n=t.length;const i=t.length-n;this.filtersButton.setAttribute("data-filtered",i?`[-${i}]`:"")}saveState(){let t={};return this.checks.forEach((e=>t[e.name]=e.checked)),localStorage.setItem("filter",JSON.stringify(t)),t}loadState(){let t;(t=this.validateState())||(t=this.saveState());for(const[e,n]of Object.entries(t))this.form[e].checked=n;this.filterApps()}validateState(){try{return JSON.parse(localStorage.getItem("filter"))}catch(t){return!1}}}},239:function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const s=i(n(492));new class{constructor(){this.initImageLazyloading()}initImageLazyloading(){s.default.init()}}}},e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n(239),n(840),n(293),n(133)})();