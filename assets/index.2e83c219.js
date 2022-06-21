const Yl=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};Yl();function te(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function z(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function fe(t){z(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function zl(t,e){z(2,arguments);var n=fe(t).getTime(),i=te(e);return new Date(n+i)}function Kl(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function Xl(t){return z(1,arguments),t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ql(t){if(z(1,arguments),!Xl(t)&&typeof t!="number")return!1;var e=fe(t);return!isNaN(Number(e))}var Jl={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Zl=function(t,e,n){var i,s=Jl[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i},eh=Zl;function Ke(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,i=t.formats[n]||t.formats[t.defaultWidth];return i}}var th={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},nh={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ih={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},sh={date:Ke({formats:th,defaultWidth:"full"}),time:Ke({formats:nh,defaultWidth:"full"}),dateTime:Ke({formats:ih,defaultWidth:"full"})},rh=sh,oh={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ah=function(t,e,n,i){return oh[t]},lh=ah;function le(t){return function(e,n){var i=n||{},s=i.context?String(i.context):"standalone",r;if(s==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=i.width?String(i.width):o;r=t.formattingValues[a]||t.formattingValues[o]}else{var l=t.defaultWidth,h=i.width?String(i.width):t.defaultWidth;r=t.values[h]||t.values[l]}var u=t.argumentCallback?t.argumentCallback(e):e;return r[u]}}var hh={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ch={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},uh={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dh={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},fh={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ph={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gh=function(t,e){var n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},mh={ordinalNumber:gh,era:le({values:hh,defaultWidth:"wide"}),quarter:le({values:ch,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:le({values:uh,defaultWidth:"wide"}),day:le({values:dh,defaultWidth:"wide"}),dayPeriod:le({values:fh,defaultWidth:"wide",formattingValues:ph,defaultFormattingWidth:"wide"})},_h=mh;function he(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],r=e.match(s);if(!r)return null;var o=r[0],a=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?yh(a,function(c){return c.test(o)}):vh(a,function(c){return c.test(o)}),h;h=t.valueCallback?t.valueCallback(l):l,h=n.valueCallback?n.valueCallback(h):h;var u=e.slice(o.length);return{value:h,rest:u}}}function vh(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function yh(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function ao(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(t.matchPattern);if(!i)return null;var s=i[0],r=e.match(t.parsePattern);if(!r)return null;var o=t.valueCallback?t.valueCallback(r[0]):r[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(s.length);return{value:o,rest:a}}}var wh=/^(\d+)(th|st|nd|rd)?/i,Eh=/\d+/i,Ch={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Th={any:[/^b/i,/^(a|c)/i]},Sh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},bh={any:[/1/i,/2/i,/3/i,/4/i]},Ih={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ah={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Dh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Rh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ph={ordinalNumber:ao({matchPattern:wh,parsePattern:Eh,valueCallback:function(t){return parseInt(t,10)}}),era:he({matchPatterns:Ch,defaultMatchWidth:"wide",parsePatterns:Th,defaultParseWidth:"any"}),quarter:he({matchPatterns:Sh,defaultMatchWidth:"wide",parsePatterns:bh,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:he({matchPatterns:Ih,defaultMatchWidth:"wide",parsePatterns:Nh,defaultParseWidth:"any"}),day:he({matchPatterns:Ah,defaultMatchWidth:"wide",parsePatterns:Dh,defaultParseWidth:"any"}),dayPeriod:he({matchPatterns:Rh,defaultMatchWidth:"any",parsePatterns:kh,defaultParseWidth:"any"})},Oh=Ph,Mh={code:"en-US",formatDistance:eh,formatLong:rh,formatRelative:lh,localize:_h,match:Oh,options:{weekStartsOn:0,firstWeekContainsDate:1}},xh=Mh;function Lh(t,e){z(2,arguments);var n=te(e);return zl(t,-n)}var Fh=864e5;function Uh(t){z(1,arguments);var e=fe(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),s=n-i;return Math.floor(s/Fh)+1}function tn(t){z(1,arguments);var e=1,n=fe(t),i=n.getUTCDay(),s=(i<e?7:0)+i-e;return n.setUTCDate(n.getUTCDate()-s),n.setUTCHours(0,0,0,0),n}function lo(t){z(1,arguments);var e=fe(t),n=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var s=tn(i),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var o=tn(r);return e.getTime()>=s.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function Wh(t){z(1,arguments);var e=lo(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var i=tn(n);return i}var Bh=6048e5;function Hh(t){z(1,arguments);var e=fe(t),n=tn(e).getTime()-Wh(e).getTime();return Math.round(n/Bh)+1}function nn(t,e){z(1,arguments);var n=e||{},i=n.locale,s=i&&i.options&&i.options.weekStartsOn,r=s==null?0:te(s),o=n.weekStartsOn==null?r:te(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var a=fe(t),l=a.getUTCDay(),h=(l<o?7:0)+l-o;return a.setUTCDate(a.getUTCDate()-h),a.setUTCHours(0,0,0,0),a}function ho(t,e){z(1,arguments);var n=fe(t),i=n.getUTCFullYear(),s=e||{},r=s.locale,o=r&&r.options&&r.options.firstWeekContainsDate,a=o==null?1:te(o),l=s.firstWeekContainsDate==null?a:te(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,l),h.setUTCHours(0,0,0,0);var u=nn(h,e),c=new Date(0);c.setUTCFullYear(i,0,l),c.setUTCHours(0,0,0,0);var d=nn(c,e);return n.getTime()>=u.getTime()?i+1:n.getTime()>=d.getTime()?i:i-1}function jh(t,e){z(1,arguments);var n=e||{},i=n.locale,s=i&&i.options&&i.options.firstWeekContainsDate,r=s==null?1:te(s),o=n.firstWeekContainsDate==null?r:te(n.firstWeekContainsDate),a=ho(t,e),l=new Date(0);l.setUTCFullYear(a,0,o),l.setUTCHours(0,0,0,0);var h=nn(l,e);return h}var $h=6048e5;function Gh(t,e){z(1,arguments);var n=fe(t),i=nn(n,e).getTime()-jh(n,e).getTime();return Math.round(i/$h)+1}function T(t,e){for(var n=t<0?"-":"",i=Math.abs(t).toString();i.length<e;)i="0"+i;return n+i}var Vh={y:function(t,e){var n=t.getUTCFullYear(),i=n>0?n:1-n;return T(e==="yy"?i%100:i,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):T(n+1,2)},d:function(t,e){return T(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return T(t.getUTCHours()%12||12,e.length)},H:function(t,e){return T(t.getUTCHours(),e.length)},m:function(t,e){return T(t.getUTCMinutes(),e.length)},s:function(t,e){return T(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,i=t.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,n-3));return T(s,e.length)}},Ee=Vh,Ve={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},qh={G:function(t,e,n){var i=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var i=t.getUTCFullYear(),s=i>0?i:1-i;return n.ordinalNumber(s,{unit:"year"})}return Ee.y(t,e)},Y:function(t,e,n,i){var s=ho(t,i),r=s>0?s:1-s;if(e==="YY"){var o=r%100;return T(o,2)}return e==="Yo"?n.ordinalNumber(r,{unit:"year"}):T(r,e.length)},R:function(t,e){var n=lo(t);return T(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return T(n,e.length)},Q:function(t,e,n){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return T(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return T(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){var i=t.getUTCMonth();switch(e){case"M":case"MM":return Ee.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){var i=t.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return T(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){var s=Gh(t,i);return e==="wo"?n.ordinalNumber(s,{unit:"week"}):T(s,e.length)},I:function(t,e,n){var i=Hh(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):T(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Ee.d(t,e)},D:function(t,e,n){var i=Uh(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):T(i,e.length)},E:function(t,e,n){var i=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){var s=t.getUTCDay(),r=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(r);case"ee":return T(r,2);case"eo":return n.ordinalNumber(r,{unit:"day"});case"eee":return n.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(s,{width:"short",context:"formatting"});case"eeee":default:return n.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){var s=t.getUTCDay(),r=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(r);case"cc":return T(r,e.length);case"co":return n.ordinalNumber(r,{unit:"day"});case"ccc":return n.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(s,{width:"narrow",context:"standalone"});case"cccccc":return n.day(s,{width:"short",context:"standalone"});case"cccc":default:return n.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,n){var i=t.getUTCDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return T(s,e.length);case"io":return n.ordinalNumber(s,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){var i=t.getUTCHours(),s=i/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,n){var i=t.getUTCHours(),s;switch(i===12?s=Ve.noon:i===0?s=Ve.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,n){var i=t.getUTCHours(),s;switch(i>=17?s=Ve.evening:i>=12?s=Ve.afternoon:i>=4?s=Ve.morning:s=Ve.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var i=t.getUTCHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Ee.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Ee.H(t,e)},K:function(t,e,n){var i=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):T(i,e.length)},k:function(t,e,n){var i=t.getUTCHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):T(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ee.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Ee.s(t,e)},S:function(t,e){return Ee.S(t,e)},X:function(t,e,n,i){var s=i._originalDate||t,r=s.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Xs(r);case"XXXX":case"XX":return Ae(r);case"XXXXX":case"XXX":default:return Ae(r,":")}},x:function(t,e,n,i){var s=i._originalDate||t,r=s.getTimezoneOffset();switch(e){case"x":return Xs(r);case"xxxx":case"xx":return Ae(r);case"xxxxx":case"xxx":default:return Ae(r,":")}},O:function(t,e,n,i){var s=i._originalDate||t,r=s.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ks(r,":");case"OOOO":default:return"GMT"+Ae(r,":")}},z:function(t,e,n,i){var s=i._originalDate||t,r=s.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ks(r,":");case"zzzz":default:return"GMT"+Ae(r,":")}},t:function(t,e,n,i){var s=i._originalDate||t,r=Math.floor(s.getTime()/1e3);return T(r,e.length)},T:function(t,e,n,i){var s=i._originalDate||t,r=s.getTime();return T(r,e.length)}};function Ks(t,e){var n=t>0?"-":"+",i=Math.abs(t),s=Math.floor(i/60),r=i%60;if(r===0)return n+String(s);var o=e||"";return n+String(s)+o+T(r,2)}function Xs(t,e){if(t%60===0){var n=t>0?"-":"+";return n+T(Math.abs(t)/60,2)}return Ae(t,e)}function Ae(t,e){var n=e||"",i=t>0?"-":"+",s=Math.abs(t),r=T(Math.floor(s/60),2),o=T(s%60,2);return i+r+n+o}var Yh=qh;function Qs(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function co(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function zh(t,e){var n=t.match(/(P+)(p+)?/)||[],i=n[1],s=n[2];if(!s)return Qs(t,e);var r;switch(i){case"P":r=e.dateTime({width:"short"});break;case"PP":r=e.dateTime({width:"medium"});break;case"PPP":r=e.dateTime({width:"long"});break;case"PPPP":default:r=e.dateTime({width:"full"});break}return r.replace("{{date}}",Qs(i,e)).replace("{{time}}",co(s,e))}var Kh={p:co,P:zh},Xh=Kh,Qh=["D","DD"],Jh=["YY","YYYY"];function Zh(t){return Qh.indexOf(t)!==-1}function ec(t){return Jh.indexOf(t)!==-1}function Js(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var tc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ic=/^'([^]*?)'?$/,sc=/''/g,rc=/[a-zA-Z]/;function Ze(t,e,n){z(2,arguments);var i=String(e),s=n||{},r=s.locale||xh,o=r.options&&r.options.firstWeekContainsDate,a=o==null?1:te(o),l=s.firstWeekContainsDate==null?a:te(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=r.options&&r.options.weekStartsOn,u=h==null?0:te(h),c=s.weekStartsOn==null?u:te(s.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!r.localize)throw new RangeError("locale must contain localize property");if(!r.formatLong)throw new RangeError("locale must contain formatLong property");var d=fe(t);if(!Ql(d))throw new RangeError("Invalid time value");var g=Kl(d),m=Lh(d,g),I={firstWeekContainsDate:l,weekStartsOn:c,locale:r,_originalDate:d},K=i.match(nc).map(function(L){var Z=L[0];if(Z==="p"||Z==="P"){var we=Xh[Z];return we(L,r.formatLong,I)}return L}).join("").match(tc).map(function(L){if(L==="''")return"'";var Z=L[0];if(Z==="'")return oc(L);var we=Yh[Z];if(we)return!s.useAdditionalWeekYearTokens&&ec(L)&&Js(L,e,t),!s.useAdditionalDayOfYearTokens&&Zh(L)&&Js(L,e,t),we(m,L,r.localize,I);if(Z.match(rc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Z+"`");return L}).join("");return K}function oc(t){return t.match(ic)[1].replace(sc,"'")}var ac={lessThanXSeconds:{singular:"mindre \xE4n en sekund",plural:"mindre \xE4n {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre \xE4n en minut",plural:"mindre \xE4n {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungef\xE4r en timme",plural:"ungef\xE4r {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXWeeks:{singular:"ungef\xE4r en vecka",plural:"ungef\xE4r {{count}} vecka"},xWeeks:{singular:"en vecka",plural:"{{count}} vecka"},aboutXMonths:{singular:"ungef\xE4r en m\xE5nad",plural:"ungef\xE4r {{count}} m\xE5nader"},xMonths:{singular:"en m\xE5nad",plural:"{{count}} m\xE5nader"},aboutXYears:{singular:"ungef\xE4r ett \xE5r",plural:"ungef\xE4r {{count}} \xE5r"},xYears:{singular:"ett \xE5r",plural:"{{count}} \xE5r"},overXYears:{singular:"\xF6ver ett \xE5r",plural:"\xF6ver {{count}} \xE5r"},almostXYears:{singular:"n\xE4stan ett \xE5r",plural:"n\xE4stan {{count}} \xE5r"}},lc=["noll","en","tv\xE5","tre","fyra","fem","sex","sju","\xE5tta","nio","tio","elva","tolv"];function hc(t,e,n){n=n||{onlyNumeric:!1};var i=ac[t],s;return typeof i=="string"?s=i:e===0||e>1?n.onlyNumeric?s=i.plural.replace("{{count}}",e):s=i.plural.replace("{{count}}",e<13?lc[e]:e):s=i.singular,n.addSuffix?n.comparison>0?"om "+s:s+" sedan":s}var cc={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},uc={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},dc={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},fc={date:Ke({formats:cc,defaultWidth:"full"}),time:Ke({formats:uc,defaultWidth:"full"}),dateTime:Ke({formats:dc,defaultWidth:"full"})},pc=fc,gc={lastWeek:"'i' EEEE's kl.' p",yesterday:"'ig\xE5r kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};function mc(t,e,n,i){return gc[t]}var _c={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xF6re Kristus","efter Kristus"]},vc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},yc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},wc={narrow:["S","M","T","O","T","F","L"],short:["s\xF6","m\xE5","ti","on","to","fr","l\xF6"],abbreviated:["s\xF6n","m\xE5n","tis","ons","tors","fre","l\xF6r"],wide:["s\xF6ndag","m\xE5ndag","tisdag","onsdag","torsdag","fredag","l\xF6rdag"]},Ec={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kv\xE4ll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kv\xE4ll",night:"natt"},wide:{am:"f\xF6rmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kv\xE4ll",night:"natt"}},Cc={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xE5 morg.",afternoon:"p\xE5 efterm.",evening:"p\xE5 kv\xE4llen",night:"p\xE5 natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xE5 morg.",afternoon:"p\xE5 efterm.",evening:"p\xE5 kv\xE4llen",night:"p\xE5 natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"p\xE5 morgonen",afternoon:"p\xE5 eftermiddagen",evening:"p\xE5 kv\xE4llen",night:"p\xE5 natten"}};function Tc(t){var e=Number(t),n=e%100;if(n>20||n<10)switch(n%10){case 1:case 2:return e+":a"}return e+":e"}var Sc={ordinalNumber:Tc,era:le({values:_c,defaultWidth:"wide"}),quarter:le({values:vc,defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:le({values:yc,defaultWidth:"wide"}),day:le({values:wc,defaultWidth:"wide"}),dayPeriod:le({values:Ec,defaultWidth:"wide",formattingValues:Cc,defaultFormattingWidth:"wide"})},bc=Sc,Ic=/^(\d+)(:a|:e)?/i,Nc=/\d+/i,Ac={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},Dc={any:[/^f/i,/^[ev]/i]},Rc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},kc={any:[/1/i,/2/i,/3/i,/4/i]},Pc={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},Oc={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Mc={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},xc={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Lc={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},Fc={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Uc={ordinalNumber:ao({matchPattern:Ic,parsePattern:Nc,valueCallback:function(t){return parseInt(t,10)}}),era:he({matchPatterns:Ac,defaultMatchWidth:"wide",parsePatterns:Dc,defaultParseWidth:"any"}),quarter:he({matchPatterns:Rc,defaultMatchWidth:"wide",parsePatterns:kc,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:he({matchPatterns:Pc,defaultMatchWidth:"wide",parsePatterns:Oc,defaultParseWidth:"any"}),day:he({matchPatterns:Mc,defaultMatchWidth:"wide",parsePatterns:xc,defaultParseWidth:"any"}),dayPeriod:he({matchPatterns:Lc,defaultMatchWidth:"any",parsePatterns:Fc,defaultParseWidth:"any"})},Wc=Uc,Bc={code:"sv",formatDistance:hc,formatLong:pc,formatRelative:mc,localize:bc,match:Wc,options:{weekStartsOn:1,firstWeekContainsDate:4}},et=Bc;class Hc{#n;#s;constructor(e){this.#n=e,this.#s=[]}get name(){return this.#n}registerCallback(e){this.#s.push(e)}*[Symbol.iterator](){for(const e of this.#s)yield e}}class jc{#n;constructor(e){this.#n=new Map}addEventListener(e,n){this.#n.get(e).registerCallback(n)}dispatchEvent(e,n){for(const i of this.#n.get(e))i(n)}registerEvent(e){this.#n.set(e,new Hc(e))}}class $c{constructor(e){this.message=e,this.timestamp=Object.freeze(new Date),Object.freeze(this)}}class Gc{constructor(e,n){this.message=e,this.value=Object.freeze(n),this.timestamp=Object.freeze(new Date),Object.freeze(this)}}class Vi extends jc{#n;#s;#i=void 0;#t=void 0;#r=void 0;#o=void 0;static events=Object.freeze({LOG:"log",NEW_MEASURED_VALUE:"newmeasuredvalue"});constructor(){super(),this.#r=this.#c.bind(this),this.#o=this.#u.bind(this),this.registerEvent("log"),this.registerEvent("newmeasuredvalue")}async connect(e,n){this.#t&&await this.disconnect(),this.#n=e,this.#s=n,this.#t=await this.#h(),this.#t.addEventListener("gattserverdisconnected",this.#r),await this.#a(this.#t),await this.#l(this.#i)}async disconnect(){this.#i?(await this.#i.stopNotifications(),this.#e("Notifications stopped"),this.#i.removeEventListener("characteristicvaluechanged",this.#o),this.#i=void 0):this.#e("Notifications already stopped"),this.#t?(this.#e(`Disconnecting from "${this.#t.name}" bluetooth device...`),this.#t.removeEventListener("gattserverdisconnected",this.#r),this.#t.gatt.connected?(this.#t.gatt.disconnect(),this.#e(`"${this.#t.name}" bluetooth device disconnected`)):this.#e(`"${this.#t.name}" bluetooth device is already disconnected`),this.#t=void 0):this.#e("No bluetooth device is requested")}async#h(){this.#e("Requesting bluetooth device...");const e=await navigator.bluetooth.requestDevice({filters:[{name:"Forkbeard"}],optionalServices:[this.#n]});return this.#e(`"${e.name}" bluetooth device selected`),e}async#a(){if(this.#t.gatt.connected&&this.#i)return;this.#e("Connecting to GATT server...");const e=await this.#t.gatt.connect();this.#e("GATT server connected, getting service...");const n=await e.getPrimaryService(this.#n);this.#e("Service found, getting characteristic..."),this.#i=await n.getCharacteristic(this.#s),this.#e("Characteristic found")}async#l(){this.#e("Starting notifications..."),await this.#i.startNotifications(),this.#e("Notifications started"),this.#i.addEventListener("characteristicvaluechanged",this.#o),this.#e("Listening for value changes...")}async#c(){this.#e(`"${this.#t.name}" bluetooth device disconnected, trying to reconnect...`),await this.#a(),await this.#l()}async#u(e){console.log(e.target);const{value:n}=e.target;console.log({dataView:n}),n?.byteLength>0&&this.dispatchEvent("newmeasuredvalue",new Gc("fake data",n.getInt8(0).toString()))}#e(e){this.dispatchEvent("log",new $c(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t,e){if(!t)throw ot(e)},ot=function(t){return new Error("Firebase Database ("+uo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Vc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,u=r>>2,c=(r&3)<<4|a>>4;let d=(a&15)<<2|h>>6,g=h&63;l||(g=64,o||(d=64)),i.push(n[u],n[c],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const c=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||h==null||c==null)throw Error();const d=r<<2|a>>4;if(i.push(d),h!==64){const g=a<<4&240|h>>2;if(i.push(g),c!==64){const m=h<<6&192|c;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},po=function(t){const e=fo(t);return qi.encodeByteArray(e,!0)},go=function(t){return po(t).replace(/\./g,"")},Zs=function(t){try{return qi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return mo(void 0,t)}function mo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Yc(n)||(t[n]=mo(t[n],e[n]));return t}function Yc(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _o(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zc())}function Kc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vo(){return uo.NODE_ADMIN===!0}function Xc(){return typeof indexedDB=="object"}function Qc(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="FirebaseError";class Sn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Jc,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Zc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Sn(s,a,i)}}function Zc(t,e){return t.replace(eu,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const eu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return JSON.parse(t)}function U(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=bt(Zs(r[0])||""),n=bt(Zs(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},tu=function(t){const e=wo(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nu=function(t){const e=wo(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function tt(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function er(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function fi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(tr(r)&&tr(o)){if(!fi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function tr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)i[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)i[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=i[c-3]^i[c-8]^i[c-14]^i[c-16];i[c]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],h,u;for(let c=0;c<80;c++){c<40?c<20?(h=a^r&(o^a),u=1518500249):(h=r^o^a,u=1859775393):c<60?(h=r&o|a&(r|o),u=2400959708):(h=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+h+l+u+i[c]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Yi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){return t&&t._delegate?t._delegate:t}class nt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Tn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lu(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:au(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function au(t){return t===De?void 0:t}function lu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ou(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const cu={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},uu=S.INFO,du={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},fu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=du[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zi{constructor(e){this.name=e,this._logLevel=uu,this._logHandler=fu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const pu=(t,e)=>e.some(n=>t instanceof n);let nr,ir;function gu(){return nr||(nr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mu(){return ir||(ir=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eo=new WeakMap,pi=new WeakMap,Co=new WeakMap,qn=new WeakMap,Ki=new WeakMap;function _u(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ce(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eo.set(n,t)}).catch(()=>{}),Ki.set(e,t),e}function vu(t){if(pi.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});pi.set(t,e)}let gi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Co.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ce(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yu(t){gi=t(gi)}function wu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Yn(this),e,...n);return Co.set(i,e.sort?e.sort():[e]),Ce(i)}:mu().includes(t)?function(...e){return t.apply(Yn(this),e),Ce(Eo.get(this))}:function(...e){return Ce(t.apply(Yn(this),e))}}function Eu(t){return typeof t=="function"?wu(t):(t instanceof IDBTransaction&&vu(t),pu(t,gu())?new Proxy(t,gi):t)}function Ce(t){if(t instanceof IDBRequest)return _u(t);if(qn.has(t))return qn.get(t);const e=Eu(t);return e!==t&&(qn.set(t,e),Ki.set(e,t)),e}const Yn=t=>Ki.get(t);function Cu(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ce(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ce(o.result),l.oldVersion,l.newVersion,Ce(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Tu=["get","getKey","getAll","getAllKeys","count"],Su=["put","add","delete","clear"],zn=new Map;function sr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zn.get(e))return zn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Su.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Tu.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&l.done]))[0]};return zn.set(e,r),r}yu(t=>({...t,get:(e,n,i)=>sr(e,n)||t.get(e,n,i),has:(e,n)=>!!sr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Iu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Iu(t){const e=t.getComponent();return e?.type==="VERSION"}const mi="@firebase/app",rr="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new zi("@firebase/app"),Nu="@firebase/app-compat",Au="@firebase/analytics-compat",Du="@firebase/analytics",Ru="@firebase/app-check-compat",ku="@firebase/app-check",Pu="@firebase/auth",Ou="@firebase/auth-compat",Mu="@firebase/database",xu="@firebase/database-compat",Lu="@firebase/functions",Fu="@firebase/functions-compat",Uu="@firebase/installations",Wu="@firebase/installations-compat",Bu="@firebase/messaging",Hu="@firebase/messaging-compat",ju="@firebase/performance",$u="@firebase/performance-compat",Gu="@firebase/remote-config",Vu="@firebase/remote-config-compat",qu="@firebase/storage",Yu="@firebase/storage-compat",zu="@firebase/firestore",Ku="@firebase/firestore-compat",Xu="firebase",Qu="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="[DEFAULT]",Ju={[mi]:"fire-core",[Nu]:"fire-core-compat",[Du]:"fire-analytics",[Au]:"fire-analytics-compat",[ku]:"fire-app-check",[Ru]:"fire-app-check-compat",[Pu]:"fire-auth",[Ou]:"fire-auth-compat",[Mu]:"fire-rtdb",[xu]:"fire-rtdb-compat",[Lu]:"fire-fn",[Fu]:"fire-fn-compat",[Uu]:"fire-iid",[Wu]:"fire-iid-compat",[Bu]:"fire-fcm",[Hu]:"fire-fcm-compat",[ju]:"fire-perf",[$u]:"fire-perf-compat",[Gu]:"fire-rc",[Vu]:"fire-rc-compat",[qu]:"fire-gcs",[Yu]:"fire-gcs-compat",[zu]:"fire-fst",[Ku]:"fire-fst-compat","fire-js":"fire-js",[Xu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Map,_i=new Map;function Zu(t,e){try{t.container.addComponent(e)}catch(n){Xi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(_i.has(e))return Xi.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,t);for(const n of rn.values())Zu(n,t);return!0}function ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Le=new yo("app","Firebase",td);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=Qu;function id(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:To,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Le.create("bad-app-name",{appName:String(i)});const s=rn.get(i);if(s){if(fi(t,s.options)&&fi(n,s.config))return s;throw Le.create("duplicate-app",{appName:i})}const r=new hu(i);for(const a of _i.values())r.addComponent(a);const o=new nd(t,n,r);return rn.set(i,o),o}function sd(t=To){const e=rn.get(t);if(!e)throw Le.create("no-app",{appName:t});return e}function Te(t,e,n){var i;let s=(i=Ju[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xi.warn(a.join(" "));return}It(new nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="firebase-heartbeat-database",od=1,Nt="firebase-heartbeat-store";let Kn=null;function bo(){return Kn||(Kn=Cu(rd,od,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nt)}}}).catch(t=>{throw Le.create("storage-open",{originalErrorMessage:t.message})})),Kn}async function ad(t){var e;try{return(await bo()).transaction(Nt).objectStore(Nt).get(Io(t))}catch(n){throw Le.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function or(t,e){var n;try{const s=(await bo()).transaction(Nt,"readwrite");return await s.objectStore(Nt).put(e,Io(t)),s.done}catch(i){throw Le.create("storage-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message})}}function Io(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=1024,hd=30*24*60*60*1e3;class cd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ar();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=hd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ar(),{heartbeatsToSend:n,unsentEntries:i}=ud(this._heartbeatsCache.heartbeats),s=go(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ar(){return new Date().toISOString().substring(0,10)}function ud(t,e=ld){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),lr(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class dd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xc()?Qc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ad(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return or(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return or(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lr(t){return go(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){It(new nt("platform-logger",e=>new bu(e),"PRIVATE")),It(new nt("heartbeat",e=>new cd(e),"PRIVATE")),Te(mi,rr,t),Te(mi,rr,"esm2017"),Te("fire-js","")}fd("");var pd="firebase",gd="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te(pd,gd,"app");var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Qi=Qi||{},_=md||self;function on(){}function vi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ut(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _d(t){return Object.prototype.hasOwnProperty.call(t,Xn)&&t[Xn]||(t[Xn]=++vd)}var Xn="closure_uid_"+(1e9*Math.random()>>>0),vd=0;function yd(t,e,n){return t.call.apply(t.bind,arguments)}function wd(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function W(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=yd:W=wd,W.apply(null,arguments)}function Xt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function H(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ie(){this.s=this.s,this.o=this.o}var Ed=0;Ie.prototype.s=!1;Ie.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ed!=0)&&_d(this)};Ie.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const No=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ao=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Cd(t){e:{var e=gf;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function hr(t){return Array.prototype.concat.apply([],arguments)}function Ji(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function an(t){return/^[\s\xa0]*$/.test(t)}var cr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function V(t,e){return t.indexOf(e)!=-1}function Qn(t,e){return t<e?-1:t>e?1:0}var q;e:{var ur=_.navigator;if(ur){var dr=ur.userAgent;if(dr){q=dr;break e}}q=""}function Zi(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Do(t){const e={};for(const n in t)e[n]=t[n];return e}var fr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ro(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<fr.length;r++)n=fr[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function es(t){return es[" "](t),t}es[" "]=on;function Td(t){var e=Id;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Sd=V(q,"Opera"),At=V(q,"Trident")||V(q,"MSIE"),ko=V(q,"Edge"),yi=ko||At,Po=V(q,"Gecko")&&!(V(q.toLowerCase(),"webkit")&&!V(q,"Edge"))&&!(V(q,"Trident")||V(q,"MSIE"))&&!V(q,"Edge"),bd=V(q.toLowerCase(),"webkit")&&!V(q,"Edge");function Oo(){var t=_.document;return t?t.documentMode:void 0}var wi;e:{var Jn="",Zn=function(){var t=q;if(Po)return/rv:([^\);]+)(\)|;)/.exec(t);if(ko)return/Edge\/([\d\.]+)/.exec(t);if(At)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bd)return/WebKit\/(\S+)/.exec(t);if(Sd)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zn&&(Jn=Zn?Zn[1]:""),At){var ei=Oo();if(ei!=null&&ei>parseFloat(Jn)){wi=String(ei);break e}}wi=Jn}var Id={};function Nd(){return Td(function(){let t=0;const e=cr(String(wi)).split("."),n=cr("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Qn(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Qn(s[2].length==0,r[2].length==0)||Qn(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}_.document&&At&&Oo();var Ad=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{_.addEventListener("test",on,e),_.removeEventListener("test",on,e)}catch{}return t}();function G(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};function Dt(t,e){if(G.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Po){e:{try{es(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Dd[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Dt.Z.h.call(this)}}H(Dt,G);var Dd={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),Rd=0;function kd(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Rd,this.ca=this.fa=!1}function In(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Nn(t){this.src=t,this.g={},this.h=0}Nn.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ci(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new kd(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function Ei(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=No(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(In(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ci(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),ti={};function Mo(t,e,n,i,s){if(i&&i.once)return Lo(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Mo(t,e[r],n,i,s);return null}return n=ss(n),t&&t[Wt]?t.N(e,n,Ut(i)?!!i.capture:!!i,s):xo(t,e,n,!1,i,s)}function xo(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Ut(s)?!!s.capture:!!s,a=is(t);if(a||(t[ts]=a=new Nn(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Pd(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Ad||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Uo(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Pd(){function t(n){return e.call(t.src,t.listener,n)}var e=Od;return t}function Lo(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Lo(t,e[r],n,i,s);return null}return n=ss(n),t&&t[Wt]?t.O(e,n,Ut(i)?!!i.capture:!!i,s):xo(t,e,n,!0,i,s)}function Fo(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Fo(t,e[r],n,i,s);else i=Ut(i)?!!i.capture:!!i,n=ss(n),t&&t[Wt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ci(r,n,i,s),-1<n&&(In(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=is(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ci(e,n,i,s)),(n=-1<t?e[t]:null)&&ns(n))}function ns(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Wt])Ei(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Uo(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=is(e))?(Ei(n,t),n.h==0&&(n.src=null,e[ts]=null)):In(t)}}}function Uo(t){return t in ti?ti[t]:ti[t]="on"+t}function Od(t,e){if(t.ca)t=!0;else{e=new Dt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&ns(t),t=n.call(i,e)}return t}function is(t){return t=t[ts],t instanceof Nn?t:null}var ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function ss(t){return typeof t=="function"?t:(t[ni]||(t[ni]=function(e){return t.handleEvent(e)}),t[ni])}function x(){Ie.call(this),this.i=new Nn(this),this.P=this,this.I=null}H(x,Ie);x.prototype[Wt]=!0;x.prototype.removeEventListener=function(t,e,n,i){Fo(this,t,e,n,i)};function B(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new G(e,t);else if(e instanceof G)e.target=e.target||t;else{var s=e;e=new G(i,t),Ro(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Qt(o,i,!0,e)&&s}if(o=e.g=t,s=Qt(o,i,!0,e)&&s,s=Qt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Qt(o,i,!1,e)&&s}x.prototype.M=function(){if(x.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)In(n[i]);delete t.g[e],t.h--}}this.I=null};x.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};x.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Qt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Ei(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var rs=_.JSON.stringify;function Md(){var t=Bo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xd{constructor(){this.h=this.g=null}add(e,n){const i=Wo.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Wo=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ld,t=>t.reset());class Ld{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Fd(t){_.setTimeout(()=>{throw t},0)}function os(t,e){Ti||Ud(),Si||(Ti(),Si=!0),Bo.add(t,e)}var Ti;function Ud(){var t=_.Promise.resolve(void 0);Ti=function(){t.then(Wd)}}var Si=!1,Bo=new xd;function Wd(){for(var t;t=Md();){try{t.h.call(t.g)}catch(n){Fd(n)}var e=Wo;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Si=!1}function An(t,e){x.call(this),this.h=t||1,this.g=e||_,this.j=W(this.kb,this),this.l=Date.now()}H(An,x);p=An.prototype;p.da=!1;p.S=null;p.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),B(this,"tick"),this.da&&(as(this),this.start()))}};p.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function as(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}p.M=function(){An.Z.M.call(this),as(this),delete this.g};function ls(t,e,n){if(typeof t=="function")n&&(t=W(t,n));else if(t&&typeof t.handleEvent=="function")t=W(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(t,e||0)}function Ho(t){t.g=ls(()=>{t.g=null,t.i&&(t.i=!1,Ho(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Bd extends Ie{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ho(this)}M(){super.M(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rt(t){Ie.call(this),this.h=t,this.g={}}H(Rt,Ie);var pr=[];function jo(t,e,n,i){Array.isArray(n)||(n&&(pr[0]=n.toString()),n=pr);for(var s=0;s<n.length;s++){var r=Mo(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $o(t){Zi(t.g,function(e,n){this.g.hasOwnProperty(n)&&ns(e)},t),t.g={}}Rt.prototype.M=function(){Rt.Z.M.call(this),$o(this)};Rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dn(){this.g=!0}Dn.prototype.Aa=function(){this.g=!1};function Hd(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&c[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function jd(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Ye(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Gd(t,n)+(i?" "+i:"")})}function $d(t,e){t.info(function(){return"TIMEOUT: "+e})}Dn.prototype.info=function(){};function Gd(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return rs(n)}catch{return e}}var at={},gr=null;function hs(){return gr=gr||new x}at.Ma="serverreachability";function Go(t){G.call(this,at.Ma,t)}H(Go,G);function kt(t){const e=hs();B(e,new Go(e))}at.STAT_EVENT="statevent";function Vo(t,e){G.call(this,at.STAT_EVENT,t),this.stat=e}H(Vo,G);function Y(t){const e=hs();B(e,new Vo(e,t))}at.Na="timingevent";function qo(t,e){G.call(this,at.Na,t),this.size=e}H(qo,G);function Bt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},e)}var cs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Vd={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function us(){}us.prototype.h=null;function mr(t){return t.h||(t.h=t.i())}function qd(){}var Ht={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ds(){G.call(this,"d")}H(ds,G);function fs(){G.call(this,"c")}H(fs,G);var bi;function Rn(){}H(Rn,us);Rn.prototype.g=function(){return new XMLHttpRequest};Rn.prototype.i=function(){return{}};bi=new Rn;function jt(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Rt(this),this.P=Yd,t=yi?125:void 0,this.W=new An(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Yo}function Yo(){this.i=null,this.g="",this.h=!1}var Yd=45e3,Ii={},ln={};p=jt.prototype;p.setTimeout=function(t){this.P=t};function Ni(t,e,n){t.K=1,t.v=Pn(_e(e)),t.s=n,t.U=!0,zo(t,null)}function zo(t,e){t.F=Date.now(),$t(t),t.A=_e(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),ta(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Yo,t.g=Ea(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Bd(W(t.Ia,t,t.g),t.O)),jo(t.V,t.g,"readystatechange",t.gb),e=t.H?Do(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),kt(),Hd(t.j,t.u,t.A,t.m,t.X,t.s)}p.gb=function(t){t=t.target;const e=this.L;e&&pe(t)==3?e.l():this.Ia(t)};p.Ia=function(t){try{if(t==this.g)e:{const u=pe(this.g);var e=this.g.Da();const c=this.g.ba();if(!(3>u)&&(u!=3||yi||this.g&&(this.h.h||this.g.ga()||wr(this.g)))){this.I||u!=4||e==7||(e==8||0>=c?kt(3):kt(2)),kn(this);var n=this.g.ba();this.N=n;t:if(Ko(this)){var i=wr(this.g);t="";var s=i.length,r=pe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),wt(this);var o="";break t}this.h.i=new _.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,jd(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!an(a)){var h=a;break t}}h=null}if(n=h)Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ai(this,n);else{this.i=!1,this.o=3,Y(12),ke(this),wt(this);break e}}this.U?(Xo(this,u,o),yi&&this.i&&u==3&&(jo(this.V,this.W,"tick",this.fb),this.W.start())):(Ye(this.j,this.m,o,null),Ai(this,o)),u==4&&ke(this),this.i&&!this.I&&(u==4?_a(this.l,this):(this.i=!1,$t(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),ke(this),wt(this)}}}catch{}finally{}};function Ko(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Xo(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=zd(t,n),s==ln){e==4&&(t.o=4,Y(14),i=!1),Ye(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ii){t.o=4,Y(15),Ye(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ye(t.j,t.m,s,null),Ai(t,s);Ko(t)&&s!=ln&&s!=Ii&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Y(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cs(e),e.L=!0,Y(11))):(Ye(t.j,t.m,n,"[Invalid Chunked Response]"),ke(t),wt(t))}p.fb=function(){if(this.g){var t=pe(this.g),e=this.g.ga();this.C<e.length&&(kn(this),Xo(this,t,e),this.i&&t!=4&&$t(this))}};function zd(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ln:(n=Number(e.substring(n,i)),isNaN(n)?Ii:(i+=1,i+n>e.length?ln:(e=e.substr(i,n),t.C=i+n,e)))}p.cancel=function(){this.I=!0,ke(this)};function $t(t){t.Y=Date.now()+t.P,Qo(t,t.P)}function Qo(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bt(W(t.eb,t),e)}function kn(t){t.B&&(_.clearTimeout(t.B),t.B=null)}p.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($d(this.j,this.A),this.K!=2&&(kt(),Y(17)),ke(this),this.o=2,wt(this)):Qo(this,this.Y-t)};function wt(t){t.l.G==0||t.I||_a(t.l,t)}function ke(t){kn(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,as(t.W),$o(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ai(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Di(n.i,t))){if(n.I=t.N,!t.J&&Di(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)dn(n),Ln(n);else break e;Es(n),Y(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Bt(W(n.ab,n),6e3));if(1>=sa(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pe(n,11)}else if((t.J||n.g==t)&&dn(n),!an(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const u=h[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const c=h[4];c!=null&&(n.za=c,n.h.info("SVER="+n.za));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(V(m,"spdy")||V(m,"quic")||V(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ms(r,r.h),r.h=null))}if(i.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(i.sa=I,R(i.F,i.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=wa(i,i.H?i.la:null,i.W),o.J){ra(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(kn(a),$t(a)),i.g=o}else ga(i);0<n.l.length&&Fn(n)}else h[0]!="stop"&&h[0]!="close"||Pe(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Pe(n,7):ws(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}kt(4)}catch{}}function Kd(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(vi(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ps(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vi(t)||typeof t=="string")Ao(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(vi(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=Kd(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function lt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof lt)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}p=lt.prototype;p.R=function(){gs(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};p.T=function(){return gs(this),this.g.concat()};function gs(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Fe(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],Fe(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}p.get=function(t,e){return Fe(this.h,t)?this.h[t]:e};p.set=function(t,e){Fe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};p.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function Fe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Jo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xd(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ue(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ue){this.g=e!==void 0?e:t.g,hn(this,t.j),this.s=t.s,cn(this,t.i),un(this,t.m),this.l=t.l,e=t.h;var n=new Pt;n.i=e.i,e.g&&(n.g=new lt(e.g),n.h=e.h),_r(this,n),this.o=t.o}else t&&(n=String(t).match(Jo))?(this.g=!!e,hn(this,n[1]||"",!0),this.s=Et(n[2]||""),cn(this,n[3]||"",!0),un(this,n[4]),this.l=Et(n[5]||"",!0),_r(this,n[6]||"",!0),this.o=Et(n[7]||"")):(this.g=!!e,this.h=new Pt(null,this.g))}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yt(e,vr,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yt(e,vr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(yt(n,n.charAt(0)=="/"?tf:ef,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yt(n,sf)),t.join("")};function _e(t){return new Ue(t)}function hn(t,e,n){t.j=n?Et(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function cn(t,e,n){t.i=n?Et(e,!0):e}function un(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _r(t,e,n){e instanceof Pt?(t.h=e,rf(t.h,t.g)):(n||(e=yt(e,nf)),t.h=new Pt(e,t.g))}function R(t,e,n){t.h.set(e,n)}function Pn(t){return R(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qd(t){return t instanceof Ue?_e(t):new Ue(t,void 0)}function Jd(t,e,n,i){var s=new Ue(null,void 0);return t&&hn(s,t),e&&cn(s,e),n&&un(s,n),i&&(s.l=i),s}function Et(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Zd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vr=/[#\/\?@]/g,ef=/[#\?:]/g,tf=/[#\?]/g,nf=/[#\?@]/g,sf=/#/g;function Pt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ne(t){t.g||(t.g=new lt,t.h=0,t.i&&Xd(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}p=Pt.prototype;p.add=function(t,e){Ne(this),this.i=null,t=ht(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zo(t,e){Ne(t),e=ht(t,e),Fe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Fe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&gs(t)))}function ea(t,e){return Ne(t),e=ht(t,e),Fe(t.g.h,e)}p.forEach=function(t,e){Ne(this),this.g.forEach(function(n,i){Ao(n,function(s){t.call(e,s,i,this)},this)},this)};p.T=function(){Ne(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};p.R=function(t){Ne(this);var e=[];if(typeof t=="string")ea(this,t)&&(e=hr(e,this.g.get(ht(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=hr(e,t[n])}return e};p.set=function(t,e){return Ne(this),this.i=null,t=ht(this,t),ea(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};p.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ta(t,e,n){Zo(t,e),0<n.length&&(t.i=null,t.g.set(ht(t,e),Ji(n)),t.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function ht(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rf(t,e){e&&!t.j&&(Ne(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Zo(this,i),ta(this,s,n))},t)),t.j=e}var of=class{constructor(t,e){this.h=t,this.g=e}};function na(t){this.l=t||af,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.g&&_.g.Ea&&_.g.Ea()&&_.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var af=10;function ia(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sa(t){return t.h?1:t.g?t.g.size:0}function Di(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ms(t,e){t.g?t.g.add(e):t.h=e}function ra(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}na.prototype.cancel=function(){if(this.i=oa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function oa(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ji(t.i)}function _s(){}_s.prototype.stringify=function(t){return _.JSON.stringify(t,void 0)};_s.prototype.parse=function(t){return _.JSON.parse(t,void 0)};function lf(){this.g=new _s}function hf(t,e,n){const i=n||"";try{ps(t,function(s,r){let o=s;Ut(s)&&(o=rs(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function cf(t,e){const n=new Dn;if(_.Image){const i=new Image;i.onload=Xt(Jt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Xt(Jt,n,i,"TestLoadImage: error",!1,e),i.onabort=Xt(Jt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Xt(Jt,n,i,"TestLoadImage: timeout",!1,e),_.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Jt(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function On(t){this.l=t.$b||null,this.j=t.ib||!1}H(On,us);On.prototype.g=function(){return new Mn(this.l,this.j)};On.prototype.i=function(t){return function(){return t}}({});function Mn(t,e){x.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=vs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(Mn,x);var vs=0;p=Mn.prototype;p.open=function(t,e){if(this.readyState!=vs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ot(this)};p.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||_).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gt(this)),this.readyState=vs};p.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ot(this)),this.g&&(this.readyState=3,Ot(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;aa(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function aa(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}p.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gt(this):Ot(this),this.readyState==3&&aa(this)}};p.Ua=function(t){this.g&&(this.response=this.responseText=t,Gt(this))};p.Ta=function(t){this.g&&(this.response=t,Gt(this))};p.ha=function(){this.g&&Gt(this)};function Gt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ot(t)}p.setRequestHeader=function(t,e){this.v.append(t,e)};p.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ot(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uf=_.JSON.parse;function P(t){x.call(this),this.headers=new lt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=la,this.K=this.L=!1}H(P,x);var la="",df=/^https?$/i,ff=["POST","PUT"];p=P.prototype;p.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bi.g(),this.C=this.u?mr(this.u):mr(bi),this.g.onreadystatechange=W(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){yr(this,r);return}t=n||"";const s=new lt(this.headers);i&&ps(i,function(r,o){s.set(o,r)}),i=Cd(s.T()),n=_.FormData&&t instanceof _.FormData,!(0<=No(ff,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ua(this),0<this.B&&((this.K=pf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.pa,this)):this.A=ls(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){yr(this,r)}};function pf(t){return At&&Nd()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function gf(t){return t.toLowerCase()=="content-type"}p.pa=function(){typeof Qi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,B(this,"timeout"),this.abort(8))};function yr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ha(t),xn(t)}function ha(t){t.D||(t.D=!0,B(t,"complete"),B(t,"error"))}p.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,B(this,"complete"),B(this,"abort"),xn(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xn(this,!0)),P.Z.M.call(this)};p.Fa=function(){this.s||(this.F||this.v||this.l?ca(this):this.cb())};p.cb=function(){ca(this)};function ca(t){if(t.h&&typeof Qi<"u"&&(!t.C[1]||pe(t)!=4||t.ba()!=2)){if(t.v&&pe(t)==4)ls(t.Fa,0,t);else if(B(t,"readystatechange"),pe(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(Jo)[1]||null;if(!s&&_.self&&_.self.location){var r=_.self.location.protocol;s=r.substr(0,r.length-1)}i=!df.test(s?s.toLowerCase():"")}n=i}if(n)B(t,"complete"),B(t,"success");else{t.m=6;try{var o=2<pe(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",ha(t)}}finally{xn(t)}}}}function xn(t,e){if(t.g){ua(t);const n=t.g,i=t.C[0]?on:null;t.g=null,t.C=null,e||B(t,"ready");try{n.onreadystatechange=i}catch{}}}function ua(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(_.clearTimeout(t.A),t.A=null)}function pe(t){return t.g?t.g.readyState:0}p.ba=function(){try{return 2<pe(this)?this.g.status:-1}catch{return-1}};p.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uf(e)}};function wr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case la:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}p.Da=function(){return this.m};p.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function mf(t){let e="";return Zi(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function ys(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=mf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):R(t,e,n))}function pt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function da(t){this.za=0,this.l=[],this.h=new Dn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=pt("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=pt("baseRetryDelayMs",5e3,t),this.$a=pt("retryDelaySeedMs",1e4,t),this.Ya=pt("forwardChannelMaxRetries",2,t),this.ra=pt("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new na(t&&t.concurrentRequestLimit),this.Ca=new lf,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}p=da.prototype;p.ma=8;p.G=1;function ws(t){if(fa(t),t.G==3){var e=t.V++,n=_e(t.F);R(n,"SID",t.J),R(n,"RID",e),R(n,"TYPE","terminate"),Vt(t,n),e=new jt(t,t.h,e,void 0),e.K=2,e.v=Pn(_e(n)),n=!1,_.navigator&&_.navigator.sendBeacon&&(n=_.navigator.sendBeacon(e.v.toString(),"")),!n&&_.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ea(e.l,null),e.g.ea(e.v)),e.F=Date.now(),$t(e)}ya(t)}p.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ln(t){t.g&&(Cs(t),t.g.cancel(),t.g=null)}function fa(t){Ln(t),t.u&&(_.clearTimeout(t.u),t.u=null),dn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&_.clearTimeout(t.m),t.m=null)}function ii(t,e){t.l.push(new of(t.Za++,e)),t.G==3&&Fn(t)}function Fn(t){ia(t.i)||t.m||(t.m=!0,os(t.Ha,t),t.C=0)}function _f(t,e){return sa(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Bt(W(t.Ha,t,e),va(t,t.C)),t.C++,!0)}p.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new jt(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Do(r),Ro(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=pa(this,s,e),n=_e(this.F),R(n,"RID",t),R(n,"CVER",22),this.D&&R(n,"X-HTTP-Session-Id",this.D),Vt(this,n),this.o&&r&&ys(n,this.o,r),ms(this.i,s),this.Ra&&R(n,"TYPE","init"),this.ja?(R(n,"$req",e),R(n,"SID","null"),s.$=!0,Ni(s,n,null)):Ni(s,n,e),this.G=2}}else this.G==3&&(t?Er(this,t):this.l.length==0||ia(this.i)||Er(this))};function Er(t,e){var n;e?n=e.m:n=t.V++;const i=_e(t.F);R(i,"SID",t.J),R(i,"RID",n),R(i,"AID",t.U),Vt(t,i),t.o&&t.s&&ys(i,t.o,t.s),n=new jt(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=pa(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ms(t.i,n),Ni(n,i,e)}function Vt(t,e){t.j&&ps({},function(n,i){R(e,i,n)})}function pa(t,e,n){n=Math.min(t.l.length,n);var i=t.j?W(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let h=s[l].h;const u=s[l].g;if(h-=r,0>h)r=Math.max(0,s[l].h-100),a=!1;else try{hf(u,o,"req"+h+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function ga(t){t.g||t.u||(t.Y=1,os(t.Ga,t),t.A=0)}function Es(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Bt(W(t.Ga,t),va(t,t.A)),t.A++,!0)}p.Ga=function(){if(this.u=null,ma(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Bt(W(this.bb,this),t)}};p.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Y(10),Ln(this),ma(this))};function Cs(t){t.B!=null&&(_.clearTimeout(t.B),t.B=null)}function ma(t){t.g=new jt(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=_e(t.oa);R(e,"RID","rpc"),R(e,"SID",t.J),R(e,"CI",t.N?"0":"1"),R(e,"AID",t.U),Vt(t,e),R(e,"TYPE","xmlhttp"),t.o&&t.s&&ys(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Pn(_e(e)),n.s=null,n.U=!0,zo(n,t)}p.ab=function(){this.v!=null&&(this.v=null,Ln(this),Es(this),Y(19))};function dn(t){t.v!=null&&(_.clearTimeout(t.v),t.v=null)}function _a(t,e){var n=null;if(t.g==e){dn(t),Cs(t),t.g=null;var i=2}else if(Di(t.i,e))n=e.D,ra(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=hs(),B(i,new qo(i,n)),Fn(t)}else ga(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&_f(t,e)||i==2&&Es(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Pe(t,5);break;case 4:Pe(t,10);break;case 3:Pe(t,6);break;default:Pe(t,2)}}}function va(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Pe(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=W(t.jb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||hn(n,"https"),Pn(n)),cf(n.toString(),i)}else Y(2);t.G=0,t.j&&t.j.va(e),ya(t),fa(t)}p.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Y(2)):(this.h.info("Failed to ping google.com"),Y(1))};function ya(t){t.G=0,t.I=-1,t.j&&((oa(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ji(t.l),t.l.length=0),t.j.ua())}function wa(t,e,n){let i=Qd(n);if(i.i!="")e&&cn(i,e+"."+i.i),un(i,i.m);else{const s=_.location;i=Jd(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Zi(t.aa,function(s,r){R(i,r,s)}),e=t.D,n=t.sa,e&&n&&R(i,e,n),R(i,"VER",t.ma),Vt(t,i),i}function Ea(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new P(new On({ib:!0})):new P(t.qa),e.L=t.H,e}function Ca(){}p=Ca.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Oa=function(){};function ie(t,e){x.call(this),this.g=new da(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!an(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!an(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ct(this)}H(ie,x);ie.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),os(W(t.hb,t,e))),Y(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wa(t,null,t.W),Fn(t)};ie.prototype.close=function(){ws(this.g)};ie.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ii(this.g,e)}else this.v?(e={},e.__data__=rs(t),ii(this.g,e)):ii(this.g,t)};ie.prototype.M=function(){this.g.j=null,delete this.j,ws(this.g),delete this.g,ie.Z.M.call(this)};function Ta(t){ds.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}H(Ta,ds);function Sa(){fs.call(this),this.status=1}H(Sa,fs);function ct(t){this.g=t}H(ct,Ca);ct.prototype.xa=function(){B(this.g,"a")};ct.prototype.wa=function(t){B(this.g,new Ta(t))};ct.prototype.va=function(t){B(this.g,new Sa)};ct.prototype.ua=function(){B(this.g,"b")};ie.prototype.send=ie.prototype.u;ie.prototype.open=ie.prototype.m;ie.prototype.close=ie.prototype.close;cs.NO_ERROR=0;cs.TIMEOUT=8;cs.HTTP_ERROR=6;Vd.COMPLETE="complete";qd.EventType=Ht;Ht.OPEN="a";Ht.CLOSE="b";Ht.ERROR="c";Ht.MESSAGE="d";x.prototype.listen=x.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.La;P.prototype.getLastErrorCode=P.prototype.Da;P.prototype.getStatus=P.prototype.ba;P.prototype.getResponseJson=P.prototype.Qa;P.prototype.getResponseText=P.prototype.ga;P.prototype.send=P.prototype.ea;const Cr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un="9.8.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new zi("@firebase/firestore");function ee(t,...e){if(fn.logLevel<=S.DEBUG){const n=e.map(ba);fn.debug(`Firestore (${Un}): ${t}`,...n)}}function Ts(t,...e){if(fn.logLevel<=S.ERROR){const n=e.map(ba);fn.error(`Firestore (${Un}): ${t}`,...n)}}function ba(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+t;throw Ts(e),new Error(e)}function pn(t,e){t||Ia()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class wf{constructor(e){this.t=e,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Xe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Xe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pn(typeof i.accessToken=="string"),new vf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pn(e===null||typeof e=="string"),new X(e)}}class Ef{constructor(e,n,i){this.type="FirstParty",this.user=X.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Cf{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Ef(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sf{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=r=>{r.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pn(typeof n.token=="string"),this.p=n.token,new Tf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=bf(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Na(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Mt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr,w;(w=Tr||(Tr={}))[w.OK=0]="OK",w[w.CANCELLED=1]="CANCELLED",w[w.UNKNOWN=2]="UNKNOWN",w[w.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",w[w.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",w[w.NOT_FOUND=5]="NOT_FOUND",w[w.ALREADY_EXISTS=6]="ALREADY_EXISTS",w[w.PERMISSION_DENIED=7]="PERMISSION_DENIED",w[w.UNAUTHENTICATED=16]="UNAUTHENTICATED",w[w.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",w[w.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",w[w.ABORTED=10]="ABORTED",w[w.OUT_OF_RANGE=11]="OUT_OF_RANGE",w[w.UNIMPLEMENTED=12]="UNIMPLEMENTED",w[w.INTERNAL=13]="INTERNAL",w[w.UNAVAILABLE=14]="UNAVAILABLE",w[w.DATA_LOSS=15]="DATA_LOSS";function si(){return typeof document<"u"?document:null}class Af{constructor(e,n,i=1e3,s=1.5,r=6e4){this.js=e,this.timerId=n,this.lo=i,this.fo=s,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-i);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Ss(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(ce.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Df(t,e){if(Ts("AsyncQueue",`${e}: ${t}`),Na(t))return new ue(ce.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=X.UNAUTHENTICATED,this.clientId=If.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{ee("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(ee("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ue(ce.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Df(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}const Sr=new Map;function kf(t,e,n,i){if(e===!0&&i===!0)throw new ue(ce.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(ce.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(ce.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,kf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new br({}),this._settingsFrozen=!1,e instanceof Mt?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new ue(ce.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mt(s.options.projectId)}(e))}get app(){if(!this._app)throw new ue(ce.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ue(ce.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new br(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yf;switch(n.type){case"gapi":const i=n.client;return pn(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Cf(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ue(ce.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Sr.get(e);n&&(ee("ComponentProvider","Removing Datastore"),Sr.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Af(this,"async_queue_retry"),this.Kc=()=>{const n=si();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=si();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=si();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Xe;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Na(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ts("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Lc=!1,i))));return this.Oc=n,n}enqueueAfterDelay(e,n,i){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=Ss.createAndSchedule(this,e,n,i,r=>this.Wc(r));return this.$c.push(s),s}Gc(){this.Bc&&Ia()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Mf extends Pf{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new Of,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||xf(this),this._firestoreClient.terminate()}}function xf(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new Nf(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Rf(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){Un=n})(So),It(new nt("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new Mf(s,new wf(n.getProvider("auth-internal")),new Sf(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),Te(Cr,"3.4.10",t),Te(Cr,"3.4.10","esm2017")})();const Ir="@firebase/database",Nr="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa="";function Lf(t){Aa=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),U(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ff(e)}}catch{}return new Uf},Oe=Da("localStorage"),Ri=Da("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new zi("@firebase/database"),Wf=function(){let t=1;return function(){return t++}}(),Ra=function(t){const e=ru(t),n=new su;n.update(e);const i=n.digest();return qi.encodeByteArray(i)},qt=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=qt.apply(null,i):typeof i=="object"?e+=U(i):e+=i,e+=" "}return e};let xe=null,Ar=!0;const Bf=function(t,e){f(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Qe.logLevel=S.VERBOSE,xe=Qe.log.bind(Qe),e&&Ri.set("logging_enabled",!0)):typeof t=="function"?xe=t:(xe=null,Ri.remove("logging_enabled"))},j=function(...t){if(Ar===!0&&(Ar=!1,xe===null&&Ri.get("logging_enabled")===!0&&Bf(!0)),xe){const e=qt.apply(null,t);xe(e)}},Yt=function(t){return function(...e){j(t,...e)}},ki=function(...t){const e="FIREBASE INTERNAL ERROR: "+qt(...t);Qe.error(e)},We=function(...t){const e=`FIREBASE FATAL ERROR: ${qt(...t)}`;throw Qe.error(e),new Error(e)},J=function(...t){const e="FIREBASE WARNING: "+qt(...t);Qe.warn(e)},Hf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ka=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jf=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},it="[MIN_NAME]",Be="[MAX_NAME]",ut=function(t,e){if(t===e)return 0;if(t===it||e===Be)return-1;if(e===it||t===Be)return 1;{const n=Dr(t),i=Dr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},$f=function(t,e){return t===e?0:t<e?-1:1},gt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+U(e))},bs=function(t){if(typeof t!="object"||t===null)return U(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=U(e[i]),n+=":",n+=bs(t[e[i]]);return n+="}",n},Pa=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Oa=function(t){f(!ka(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const h=[];for(l=n;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const u=h.join("");let c="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},Gf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},qf=new RegExp("^-?(0*)\\d{1,10}$"),Yf=-2147483648,zf=2147483647,Dr=function(t){if(qf.test(t)){const e=Number(t);if(e>=Yf&&e<=zf)return e}return null},dt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw J("Exception was thrown by user callback.",n),e},Math.floor(0))}},Kf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ct=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){J(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(j("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(e)}}class Pi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="5",Ma="v",xa="s",La="r",Fa="f",Ua=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wa="ls",Ba="p",Oi="ac",Ha="websocket",ja="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,i,s,r=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Zf(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $a(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===Ha)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ja)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Zf(t)&&(n.ns=t.namespace);const s=[];return se(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.counters_={}}incrementCounter(e,n=1){ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri={},oi={};function Ns(t){const e=t.toString();return ri[e]||(ri[e]=new ep),ri[e]}function tp(t,e){const n=t.toString();return oi[n]||(oi[n]=e()),oi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&dt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="start",ip="close",sp="pLPCommand",rp="pRTLPCB",Ga="id",Va="pw",qa="ser",op="cb",ap="seg",lp="ts",hp="d",cp="dframe",Ya=1870,za=30,up=Ya-za,dp=25e3,fp=3e4;class ze{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yt(e),this.stats_=Ns(n),this.urlFn=l=>(this.appCheckToken&&(l[Oi]=this.appCheckToken),$a(n,ja,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new np(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fp)),jf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new As((...r)=>{const[o,a,l,h,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rr)this.id=a,this.password=l;else if(o===ip)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Rr]="t",i[qa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[op]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ma]=Is,this.transportSessionId&&(i[xa]=this.transportSessionId),this.lastSessionId&&(i[Wa]=this.lastSessionId),this.applicationId&&(i[Ba]=this.applicationId),this.appCheckToken&&(i[Oi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ua.test(location.hostname)&&(i[La]=Fa);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ze.forceAllow_=!0}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){return ze.forceAllow_?!0:!ze.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Gf()&&!Vf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=U(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=po(n),s=Pa(i,up);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[cp]="t",i[Ga]=e,i[Va]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=U(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class As{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wf(),window[sp+this.uniqueCallbackIdentifier]=e,window[rp+this.uniqueCallbackIdentifier]=n,this.myIFrame=As.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){j("frame writing exception"),a.stack&&j(a.stack),j(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||j("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ga]=this.myID,e[Va]=this.myPW,e[qa]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+za+i.length<=Ya;){const o=this.pendingSegs.shift();i=i+"&"+ap+s+"="+o.seg+"&"+lp+s+"="+o.ts+"&"+hp+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(dp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{j("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=16384,gp=45e3;let gn=null;typeof MozWebSocket<"u"?gn=MozWebSocket:typeof WebSocket<"u"&&(gn=WebSocket);class re{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yt(this.connId),this.stats_=Ns(n),this.connURL=re.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Ma]=Is,typeof location<"u"&&location.hostname&&Ua.test(location.hostname)&&(o[La]=Fa),n&&(o[xa]=n),i&&(o[Wa]=i),s&&(o[Oi]=s),r&&(o[Ba]=r),$a(e,Ha,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oe.set("previous_websocket_failure",!0);try{let i;vo(),this.mySock=new gn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&gn!==null&&!re.forceDisallow_}static previouslyFailed(){return Oe.isInMemoryStorage||Oe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=bt(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=U(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Pa(n,pp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ze,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=re&&re.isAvailable();let i=n&&!re.previouslyFailed();if(e.webSocketOnly&&(n||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[re];else{const s=this.transports_=[];for(const r of xt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);xt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=6e4,_p=5e3,vp=10*1024,yp=100*1024,ai="t",kr="d",wp="s",Pr="r",Ep="e",Or="o",Mr="a",xr="n",Lr="p",Cp="h";class Tp{constructor(e,n,i,s,r,o,a,l,h,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yt("c:"+this.id+":"),this.transportManager_=new xt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ct(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ai in e){const n=e[ai];n===Mr?this.upgradeIfSecondaryHealthy_():n===Pr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Or&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gt("t",e),i=gt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gt("t",e),i=gt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gt(ai,e);if(kr in e){const i=e[kr];if(n===Cp)this.onHandshake_(i);else if(n===xr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wp?this.onConnectionShutdown_(i):n===Pr?this.onReset_(i):n===Ep?ki("Server Error: "+i):n===Or?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ki("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Is!==i&&J("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ct(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ct(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_p))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Xa{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_o()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mn}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=32,Ur=768;class D{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function b(){return new D("")}function v(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function be(t){return t.pieces_.length-t.pieceNum_}function A(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new D(t.pieces_,e)}function Qa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Sp(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ja(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Za(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new D(e,0)}function k(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new D(n,0)}function y(t){return t.pieceNum_>=t.pieces_.length}function ne(t,e){const n=v(t),i=v(e);if(n===null)return e;if(n===i)return ne(A(t),A(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function el(t,e){if(be(t)!==be(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function oe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(be(t)>be(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class bp{constructor(e,n){this.errorPrefix_=n,this.parts_=Ja(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=bn(this.parts_[i]);tl(this)}}function Ip(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bn(e),tl(t)}function Np(t){const e=t.parts_.pop();t.byteLength_-=bn(e),t.parts_.length>0&&(t.byteLength_-=1)}function tl(t){if(t.byteLength_>Ur)throw new Error(t.errorPrefix_+"has a key path longer than "+Ur+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fr+") or object contains a cycle "+Re(t))}function Re(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Xa{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ds}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=1e3,Ap=60*5*1e3,Dp=3*1e3,Wr=30*1e3,Rp=1.3,kp=3e4,Pp="server_kill",Br=3;class me extends Ka{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=me.nextPersistentConnectionId_++,this.log_=Yt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mt,this.maxReconnectDelay_=Ap,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!vo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ds.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(U(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Tn,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},Dp),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,h=a.s;me.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ye(e,"w")){const i=tt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();J(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+U(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ki("Unrecognized action received from server: "+U(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kp&&(this.reconnectDelay_=mt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+me.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},h=function(c){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:h};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?j("getToken() completed but was canceled"):(j("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,a=new Tp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{J(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Pp)},r))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&J(c),l())}}}interrupt(e){j("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){j("Resuming connection for reason: "+e),delete this.interruptReasons_[e],er(this.interruptReasons_)&&(this.reconnectDelay_=mt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>bs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){j("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Br&&(this.reconnectDelay_=Wr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){j("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Br&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Aa.replace(/\./g,"-")]=1,_o()?e["framework.cordova"]=1:Kc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mn.getInstance().currentlyOnline();return er(this.interruptReasons_)&&e}}me.nextPersistentConnectionId_=0;me.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new E(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new E(it,e),s=new E(it,n);return this.compare(i,s)!==0}minPost(){return E.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt;class nl extends Wn{static get __EMPTY_NODE(){return Zt}static set __EMPTY_NODE(e){Zt=e}compare(e,n){return ut(e.name,n.name)}isDefinedOn(e){throw ot("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return E.MIN}maxPost(){return new E(Be,Zt)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,Zt)}toString(){return".key"}}const Je=new nl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class M{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??M.RED,this.left=s??Q.EMPTY_NODE,this.right=r??Q.EMPTY_NODE}copy(e,n,i,s,r){return new M(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,M.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,M.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}M.RED=!0;M.BLACK=!1;class Op{copy(e,n,i,s,r){return this}insert(e,n,i){return new M(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Q{constructor(e,n=Q.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Q(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,M.BLACK,null,null))}remove(e){return new Q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,M.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new en(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new en(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new en(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new en(this.root_,null,this.comparator_,!0,e)}}Q.EMPTY_NODE=new Op;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e){return ut(t.name,e.name)}function Rs(t,e){return ut(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;function xp(t){Mi=t}const il=function(t){return typeof t=="number"?"number:"+Oa(t):"string:"+t},sl=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ye(e,".sv"),"Priority must be a string or number.")}else f(t===Mi||t.isEmpty(),"priority of unexpected type.");f(t===Mi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class O{constructor(e,n=O.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sl(this.priorityNode_)}static set __childrenNodeConstructor(e){Hr=e}static get __childrenNodeConstructor(){return Hr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new O(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:O.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:v(e)===".priority"?this.priorityNode_:O.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:O.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=v(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||be(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,O.__childrenNodeConstructor.EMPTY_NODE.updateChild(A(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+il(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Oa(this.value_):e+=this.value_,this.lazyHash_=Ra(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===O.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof O.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=O.VALUE_TYPE_ORDER.indexOf(n),r=O.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}O.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl,ol;function Lp(t){rl=t}function Fp(t){ol=t}class Up extends Wn{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ut(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return E.MIN}maxPost(){return new E(Be,new O("[PRIORITY-POST]",ol))}makePost(e,n){const i=rl(e);return new E(n,new O("[PRIORITY-POST]",i))}toString(){return".priority"}}const $=new Up;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=Math.log(2);class Bp{constructor(e){const n=r=>parseInt(Math.log(r)/Wp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _n=function(t,e,n,i){t.sort(e);const s=function(l,h){const u=h-l;let c,d;if(u===0)return null;if(u===1)return c=t[l],d=n?n(c):c,new M(d,c.node,M.BLACK,null,null);{const g=parseInt(u/2,10)+l,m=s(l,g),I=s(g+1,h);return c=t[g],d=n?n(c):c,new M(d,c.node,M.BLACK,m,I)}},r=function(l){let h=null,u=null,c=t.length;const d=function(m,I){const K=c-m,L=c;c-=m;const Z=s(K+1,L),we=t[K],ql=n?n(we):we;g(new M(ql,we.node,I,null,Z))},g=function(m){h?(h.left=m,h=m):(u=m,h=m)};for(let m=0;m<l.count;++m){const I=l.nextBitIsOne(),K=Math.pow(2,l.count-(m+1));I?d(K,M.BLACK):(d(K,M.BLACK),d(K,M.RED))}return u},o=new Bp(t.length),a=r(o);return new Q(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;const qe={};class ge{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(qe&&$,"ChildrenNode.ts has not been loaded"),li=li||new ge({".priority":qe},{".priority":$}),li}get(e){const n=tt(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Q?n:null}hasIndex(e){return ye(this.indexSet_,e.toString())}addIndex(e,n){f(e!==Je,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(E.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=_n(i,e.getCompare()):a=qe;const l=e.toString(),h=Object.assign({},this.indexSet_);h[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ge(u,h)}addToIndexes(e,n){const i=sn(this.indexes_,(s,r)=>{const o=tt(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===qe)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(E.Wrap);let h=l.getNext();for(;h;)h.name!==e.name&&a.push(h),h=l.getNext();return a.push(e),_n(a,o.getCompare())}else return qe;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new E(e.name,a))),l.insert(e,e.node)}});return new ge(i,this.indexSet_)}removeFromIndexes(e,n){const i=sn(this.indexes_,s=>{if(s===qe)return s;{const r=n.get(e.name);return r?s.remove(new E(e.name,r)):s}});return new ge(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _t;class C{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&sl(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _t||(_t=new C(new Q(Rs),null,ge.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_t}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_t:n}}getChild(e){const n=v(e);return n===null?this:this.getImmediateChild(n).getChild(A(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new E(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?_t:this.priorityNode_;return new C(s,o,r)}}updateChild(e,n){const i=v(e);if(i===null)return n;{f(v(e)!==".priority"||be(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(A(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild($,(o,a)=>{n[o]=a.val(e),i++,r&&C.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+il(this.getPriority().val())+":"),this.forEachChild($,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ra(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new E(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new E(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new E(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zt?-1:0}withIndex(e){if(e===Je||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Je||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator($),s=n.getIterator($);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Je?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hp extends C{constructor(){super(new Q(Rs),C.EMPTY_NODE,ge.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const zt=new Hp;Object.defineProperties(E,{MIN:{value:new E(it,C.EMPTY_NODE)},MAX:{value:new E(Be,zt)}});nl.__EMPTY_NODE=C.EMPTY_NODE;O.__childrenNodeConstructor=C;xp(zt);Fp(zt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=!0;function F(t,e=null){if(t===null)return C.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new O(n,F(e))}if(!(t instanceof Array)&&jp){const n=[];let i=!1;if(se(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=F(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new E(o,l)))}}),n.length===0)return C.EMPTY_NODE;const r=_n(n,Mp,o=>o.name,Rs);if(i){const o=_n(n,$.getCompare());return new C(r,F(e),new ge({".priority":o},{".priority":$}))}else return new C(r,F(e),ge.Default)}else{let n=C.EMPTY_NODE;return se(t,(i,s)=>{if(ye(t,i)&&i.substring(0,1)!=="."){const r=F(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(F(e))}}Lp(F);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends Wn{constructor(e){super(),this.indexPath_=e,f(!y(e)&&v(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ut(e.name,n.name):r}makePost(e,n){const i=F(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new E(n,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,zt);return new E(Be,e)}toString(){return Ja(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends Wn{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ut(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,n){const i=F(e);return new E(n,i)}toString(){return".value"}}const Vp=new Gp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qp=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=jr.charAt(n%64),n=Math.floor(n/64);f(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=jr.charAt(e[s]);return f(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){return{type:"value",snapshotNode:t}}function zp(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Kp(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $r(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Xp(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:it}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$}copy(){const e=new ks;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gr(t){const e={};if(t.isDefault())return e;let n;return t.index_===$?n="$priority":t.index_===Vp?n="$value":t.index_===Je?n="$key":(f(t.index_ instanceof $p,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=U(n),t.startSet_&&(e.startAt=U(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+U(t.indexStartName_))),t.endSet_&&(e.endAt=U(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+U(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Ka{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Yt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vn.getListenId_(e,i),a={};this.listens_[o]=a;const l=Gr(e._queryParams);this.restRequest_(r+".json",l,(h,u)=>{let c=u;if(h===404&&(c=null,h=null),h===null&&this.onDataUpdate_(r,c,!1,i),tt(this.listens_,o)===a){let d;h?h===401?d="permission_denied":d="rest_error:"+h:d="ok",s(d,null)}})}unlisten(e,n){const i=vn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Gr(e._queryParams),i=e._path.toString(),s=new Tn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+iu(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bt(a.responseText)}catch{J("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&J("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return{value:null,children:new Map}}function al(t,e,n){if(y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=v(e);t.children.has(i)||t.children.set(i,yn());const s=t.children.get(i);e=A(e),al(s,e,n)}}function xi(t,e,n){t.value!==null?n(e,t.value):Jp(t,(i,s)=>{const r=new D(e.toString()+"/"+i);xi(s,r,n)})}function Jp(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&se(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=10*1e3,eg=30*1e3,tg=5*60*1e3;class ng{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Zp(e);const i=qr+(eg-qr)*Math.random();Ct(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;se(e,(s,r)=>{r>0&&ye(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ct(this.reportStats_.bind(this),Math.floor(Math.random()*2*tg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(de||(de={}));function ll(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=de.ACK_USER_WRITE,this.source=ll()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new D(e));return new wn(b(),n,this.revert)}}else return f(v(this.path)===e,"operationForChild called for unrelated child."),new wn(A(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=de.OVERWRITE}operationForChild(e){return y(this.path)?new He(this.source,b(),this.snap.getImmediateChild(e)):new He(this.source,A(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=de.MERGE}operationForChild(e){if(y(this.path)){const n=this.children.subtree(new D(e));return n.isEmpty()?null:n.value?new He(this.source,b(),n.value):new Lt(this.source,b(),n)}else return f(v(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lt(this.source,A(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;const n=v(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ig(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xp(o.childName,o.snapshotNode))}),vt(t,s,"child_removed",e,i,n),vt(t,s,"child_added",e,i,n),vt(t,s,"child_moved",r,i,n),vt(t,s,"child_changed",e,i,n),vt(t,s,"value",e,i,n),s}function vt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>rg(t,a,l)),o.forEach(a=>{const l=sg(t,a,r);s.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(l,t.query_))})})}function sg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rg(t,e,n){if(e.childName==null||n.childName==null)throw ot("Should only compare child_ events.");const i=new E(e.childName,e.snapshotNode),s=new E(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e){return{eventCache:t,serverCache:e}}function Tt(t,e,n,i){return ul(new Ps(e,n,i),t.serverCache)}function dl(t,e,n,i){return ul(t.eventCache,new Ps(e,n,i))}function Li(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function je(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;const og=()=>(hi||(hi=new Q($f)),hi);class N{constructor(e,n=og()){this.value=e,this.children=n}static fromObject(e){let n=new N(null);return se(e,(i,s)=>{n=n.set(new D(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:b(),value:this.value};if(y(e))return null;{const i=v(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(A(e),n);return r!=null?{path:k(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{const n=v(e),i=this.children.get(n);return i!==null?i.subtree(A(e)):new N(null)}}set(e,n){if(y(e))return new N(n,this.children);{const i=v(e),r=(this.children.get(i)||new N(null)).set(A(e),n),o=this.children.insert(i,r);return new N(this.value,o)}}remove(e){if(y(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const n=v(e),i=this.children.get(n);if(i){const s=i.remove(A(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(y(e))return this.value;{const n=v(e),i=this.children.get(n);return i?i.get(A(e)):null}}setTree(e,n){if(y(e))return n;{const i=v(e),r=(this.children.get(i)||new N(null)).setTree(A(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new N(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(k(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,b(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(y(e))return null;{const r=v(e),o=this.children.get(r);return o?o.findOnPath_(A(e),k(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,b(),n)}foreachOnPath_(e,n,i){if(y(e))return this;{this.value&&i(n,this.value);const s=v(e),r=this.children.get(s);return r?r.foreachOnPath_(A(e),k(n,s),i):new N(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(k(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new N(null))}}function St(t,e,n){if(y(e))return new ae(new N(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ne(s,e);return r=r.updateChild(o,n),new ae(t.writeTree_.set(s,r))}else{const s=new N(n),r=t.writeTree_.setTree(e,s);return new ae(r)}}}function Yr(t,e,n){let i=t;return se(n,(s,r)=>{i=St(i,k(e,s),r)}),i}function zr(t,e){if(y(e))return ae.empty();{const n=t.writeTree_.setTree(e,new N(null));return new ae(n)}}function Fi(t,e){return $e(t,e)!=null}function $e(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ne(n.path,e)):null}function Kr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($,(i,s)=>{e.push(new E(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new E(i,s.value))}),e}function Se(t,e){if(y(e))return t;{const n=$e(t,e);return n!=null?new ae(new N(n)):new ae(t.writeTree_.subtree(e))}}function Ui(t){return t.writeTree_.isEmpty()}function st(t,e){return fl(b(),t.writeTree_,e)}function fl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=fl(k(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(k(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e){return yl(e,t)}function ag(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=St(t.visibleWrites,e,n)),t.lastWriteId=i}function lg(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function hg(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cg(a,i.path)?s=!1:oe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return ug(t),!0;if(i.snap)t.visibleWrites=zr(t.visibleWrites,i.path);else{const a=i.children;se(a,l=>{t.visibleWrites=zr(t.visibleWrites,k(i.path,l))})}return!0}else return!1}function cg(t,e){if(t.snap)return oe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&oe(k(t.path,n),e))return!0;return!1}function ug(t){t.visibleWrites=gl(t.allWrites,dg,b()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dg(t){return t.visible}function gl(t,e,n){let i=ae.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)oe(n,o)?(a=ne(n,o),i=St(i,a,r.snap)):oe(o,n)&&(a=ne(o,n),i=St(i,b(),r.snap.getChild(a)));else if(r.children){if(oe(n,o))a=ne(n,o),i=Yr(i,a,r.children);else if(oe(o,n))if(a=ne(o,n),y(a))i=Yr(i,b(),r.children);else{const l=tt(r.children,v(a));if(l){const h=l.getChild(A(a));i=St(i,b(),h)}}}else throw ot("WriteRecord should have .snap or .children")}}return i}function ml(t,e,n,i,s){if(!i&&!s){const r=$e(t.visibleWrites,e);if(r!=null)return r;{const o=Se(t.visibleWrites,e);if(Ui(o))return n;if(n==null&&!Fi(o,b()))return null;{const a=n||C.EMPTY_NODE;return st(o,a)}}}else{const r=Se(t.visibleWrites,e);if(!s&&Ui(r))return n;if(!s&&n==null&&!Fi(r,b()))return null;{const o=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(oe(h.path,e)||oe(e,h.path))},a=gl(t.allWrites,o,e),l=n||C.EMPTY_NODE;return st(a,l)}}}function fg(t,e,n){let i=C.EMPTY_NODE;const s=$e(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild($,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Se(t.visibleWrites,e);return n.forEachChild($,(o,a)=>{const l=st(Se(r,new D(o)),a);i=i.updateImmediateChild(o,l)}),Kr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Se(t.visibleWrites,e);return Kr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function pg(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=k(e,n);if(Fi(t.visibleWrites,r))return null;{const o=Se(t.visibleWrites,r);return Ui(o)?s.getChild(n):st(o,s.getChild(n))}}function gg(t,e,n,i){const s=k(e,n),r=$e(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Se(t.visibleWrites,s);return st(o,i.getNode().getImmediateChild(n))}else return null}function mg(t,e){return $e(t.visibleWrites,e)}function _g(t,e,n,i,s,r,o){let a;const l=Se(t.visibleWrites,e),h=$e(l,b());if(h!=null)a=h;else if(n!=null)a=st(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],c=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=d.getNext();for(;g&&u.length<s;)c(g,i)!==0&&u.push(g),g=d.getNext();return u}else return[]}function vg(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function Wi(t,e,n,i){return ml(t.writeTree,t.treePath,e,n,i)}function _l(t,e){return fg(t.writeTree,t.treePath,e)}function Xr(t,e,n,i){return pg(t.writeTree,t.treePath,e,n,i)}function En(t,e){return mg(t.writeTree,k(t.treePath,e))}function yg(t,e,n,i,s,r){return _g(t.writeTree,t.treePath,e,n,i,s,r)}function Os(t,e,n){return gg(t.writeTree,t.treePath,e,n)}function vl(t,e){return yl(k(t.treePath,e),t.writeTree)}function yl(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,$r(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Kp(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,zp(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,$r(i,e.snapshotNode,s.oldSnap));else throw ot("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const wl=new Eg;class Ms{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ps(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Os(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:je(this.viewCache_),r=yg(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function Cg(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Tg(t,e,n,i,s){const r=new wg;let o,a;if(n.type===de.OVERWRITE){const h=n;h.source.fromUser?o=Bi(t,e,h.path,h.snap,i,s,r):(f(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!y(h.path),o=Cn(t,e,h.path,h.snap,i,s,a,r))}else if(n.type===de.MERGE){const h=n;h.source.fromUser?o=bg(t,e,h.path,h.children,i,s,r):(f(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=Hi(t,e,h.path,h.children,i,s,a,r))}else if(n.type===de.ACK_USER_WRITE){const h=n;h.revert?o=Ag(t,e,h.path,i,s,r):o=Ig(t,e,h.path,h.affectedTree,i,s,r)}else if(n.type===de.LISTEN_COMPLETE)o=Ng(t,e,n.path,i,r);else throw ot("Unknown operation type: "+n.type);const l=r.getChanges();return Sg(e,o,l),{viewCache:o,changes:l}}function Sg(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Li(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Yp(Li(e)))}}function El(t,e,n,i,s,r){const o=e.eventCache;if(En(i,n)!=null)return e;{let a,l;if(y(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=je(e),u=h instanceof C?h:C.EMPTY_NODE,c=_l(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const h=Wi(i,je(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=v(n);if(h===".priority"){f(be(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const c=Xr(i,n,u,l);c!=null?a=t.filter.updatePriority(u,c):a=o.getNode()}else{const u=A(n);let c;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const d=Xr(i,n,o.getNode(),l);d!=null?c=o.getNode().getImmediateChild(h).updateChild(u,d):c=o.getNode().getImmediateChild(h)}else c=Os(i,h,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),h,c,u,s,r):a=o.getNode()}}return Tt(e,a,o.isFullyInitialized()||y(n),t.filter.filtersNodes())}}function Cn(t,e,n,i,s,r,o,a){const l=e.serverCache;let h;const u=o?t.filter:t.filter.getIndexedFilter();if(y(n))h=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);h=u.updateFullNode(l.getNode(),g,null)}else{const g=v(n);if(!l.isCompleteForPath(n)&&be(n)>1)return e;const m=A(n),K=l.getNode().getImmediateChild(g).updateChild(m,i);g===".priority"?h=u.updatePriority(l.getNode(),K):h=u.updateChild(l.getNode(),g,K,m,wl,null)}const c=dl(e,h,l.isFullyInitialized()||y(n),u.filtersNodes()),d=new Ms(s,c,r);return El(t,c,n,s,d,a)}function Bi(t,e,n,i,s,r,o){const a=e.eventCache;let l,h;const u=new Ms(s,e,r);if(y(n))h=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Tt(e,h,!0,t.filter.filtersNodes());else{const c=v(n);if(c===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),i),l=Tt(e,h,a.isFullyInitialized(),a.isFiltered());else{const d=A(n),g=a.getNode().getImmediateChild(c);let m;if(y(d))m=i;else{const I=u.getCompleteChild(c);I!=null?Qa(d)===".priority"&&I.getChild(Za(d)).isEmpty()?m=I:m=I.updateChild(d,i):m=C.EMPTY_NODE}if(g.equals(m))l=e;else{const I=t.filter.updateChild(a.getNode(),c,m,d,u,o);l=Tt(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Qr(t,e){return t.eventCache.isCompleteForChild(e)}function bg(t,e,n,i,s,r,o){let a=e;return i.foreach((l,h)=>{const u=k(n,l);Qr(e,v(u))&&(a=Bi(t,a,u,h,s,r,o))}),i.foreach((l,h)=>{const u=k(n,l);Qr(e,v(u))||(a=Bi(t,a,u,h,s,r,o))}),a}function Jr(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Hi(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,h;y(n)?h=i:h=new N(null).setTree(n,i);const u=e.serverCache.getNode();return h.children.inorderTraversal((c,d)=>{if(u.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),m=Jr(t,g,d);l=Cn(t,l,new D(c),m,s,r,o,a)}}),h.children.inorderTraversal((c,d)=>{const g=!e.serverCache.isCompleteForChild(c)&&d.value===void 0;if(!u.hasChild(c)&&!g){const m=e.serverCache.getNode().getImmediateChild(c),I=Jr(t,m,d);l=Cn(t,l,new D(c),I,s,r,o,a)}}),l}function Ig(t,e,n,i,s,r,o){if(En(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Cn(t,e,n,l.getNode().getChild(n),s,r,a,o);if(y(n)){let h=new N(null);return l.getNode().forEachChild(Je,(u,c)=>{h=h.set(new D(u),c)}),Hi(t,e,n,h,s,r,a,o)}else return e}else{let h=new N(null);return i.foreach((u,c)=>{const d=k(n,u);l.isCompleteForPath(d)&&(h=h.set(u,l.getNode().getChild(d)))}),Hi(t,e,n,h,s,r,a,o)}}function Ng(t,e,n,i,s){const r=e.serverCache,o=dl(e,r.getNode(),r.isFullyInitialized()||y(n),r.isFiltered());return El(t,o,n,i,wl,s)}function Ag(t,e,n,i,s,r){let o;if(En(i,n)!=null)return e;{const a=new Ms(i,e,s),l=e.eventCache.getNode();let h;if(y(n)||v(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wi(i,je(e));else{const c=e.serverCache.getNode();f(c instanceof C,"serverChildren would be complete if leaf node"),u=_l(i,c)}u=u,h=t.filter.updateFullNode(l,u,r)}else{const u=v(n);let c=Os(i,u,e.serverCache);c==null&&e.serverCache.isCompleteForChild(u)&&(c=l.getImmediateChild(u)),c!=null?h=t.filter.updateChild(l,u,c,A(n),a,r):e.eventCache.getNode().hasChild(u)?h=t.filter.updateChild(l,u,C.EMPTY_NODE,A(n),a,r):h=l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wi(i,je(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||En(i,b())!=null,Tt(e,h,o,t.filter.filtersNodes())}}function Dg(t,e){const n=je(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!y(e)&&!n.getImmediateChild(v(e)).isEmpty())?n.getChild(e):null}function Zr(t,e,n,i){e.type===de.MERGE&&e.source.queryId!==null&&(f(je(t.viewCache_),"We should always have a full cache before handling merges"),f(Li(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Tg(t.processor_,s,e,n,i);return Cg(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Rg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Rg(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return ig(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;function kg(t){f(!eo,"__referenceConstructor has already been defined"),eo=t}function xs(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),Zr(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Zr(o,e,n,i));return r}}function Ls(t,e){let n=null;for(const i of t.views.values())n=n||Dg(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;function Pg(t){f(!to,"__referenceConstructor has already been defined"),to=t}class no{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=vg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cl(t,e,n,i,s){return ag(t.pendingWriteTree_,e,n,i,s),s?Hn(t,new He(ll(),e,n)):[]}function Me(t,e,n=!1){const i=lg(t.pendingWriteTree_,e);if(hg(t.pendingWriteTree_,e)){let r=new N(null);return i.snap!=null?r=r.set(b(),!0):se(i.children,o=>{r=r.set(new D(o),!0)}),Hn(t,new wn(i.path,r,n))}else return[]}function Bn(t,e,n){return Hn(t,new He(hl(),e,n))}function Og(t,e,n){const i=N.fromObject(n);return Hn(t,new Lt(hl(),e,i))}function Mg(t,e,n,i){const s=bl(t,i);if(s!=null){const r=Il(s),o=r.path,a=r.queryId,l=ne(o,e),h=new He(cl(a),l,n);return Nl(t,o,h)}else return[]}function xg(t,e,n,i){const s=bl(t,i);if(s){const r=Il(s),o=r.path,a=r.queryId,l=ne(o,e),h=N.fromObject(n),u=new Lt(cl(a),l,h);return Nl(t,o,u)}else return[]}function Fs(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ne(o,e),h=Ls(a,l);if(h)return h});return ml(s,e,r,n,!0)}function Hn(t,e){return Tl(e,t.syncPointTree_,null,pl(t.pendingWriteTree_,b()))}function Tl(t,e,n,i){if(y(t.path))return Sl(t,e,n,i);{const s=e.get(b());n==null&&s!=null&&(n=Ls(s,b()));let r=[];const o=v(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const h=n?n.getImmediateChild(o):null,u=vl(i,o);r=r.concat(Tl(a,l,h,u))}return s&&(r=r.concat(xs(s,t,i,n))),r}}function Sl(t,e,n,i){const s=e.get(b());n==null&&s!=null&&(n=Ls(s,b()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,h=vl(i,o),u=t.operationForChild(o);u&&(r=r.concat(Sl(u,a,l,h)))}),s&&(r=r.concat(xs(s,t,i,n))),r}function bl(t,e){return t.tagToQueryMap.get(e)}function Il(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new D(t.substr(0,e))}}function Nl(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=pl(t.pendingWriteTree_,e);return xs(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Us(n)}node(){return this.node_}}class Ws{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=k(this.path_,e);return new Ws(this.syncTree_,n)}node(){return Fs(this.syncTree_,this.path_)}}const Lg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},io=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Fg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ug(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Fg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},Ug=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Wg=function(t,e,n,i){return Bs(e,new Ws(n,t),i)},Al=function(t,e,n){return Bs(t,new Us(e),n)};function Bs(t,e,n){const i=t.getPriority().val(),s=io(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=io(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new O(a,F(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new O(s))),o.forEachChild($,(a,l)=>{const h=Bs(l,e.getImmediateChild(a),n);h!==l&&(r=r.updateImmediateChild(a,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function js(t,e){let n=e instanceof D?e:new D(e),i=t,s=v(n);for(;s!==null;){const r=tt(i.node.children,s)||{children:{},childCount:0};i=new Hs(s,i,r),n=A(n),s=v(n)}return i}function ft(t){return t.node.value}function Dl(t,e){t.node.value=e,ji(t)}function Rl(t){return t.node.childCount>0}function Bg(t){return ft(t)===void 0&&!Rl(t)}function jn(t,e){se(t.node.children,(n,i)=>{e(new Hs(n,t,i))})}function kl(t,e,n,i){n&&!i&&e(t),jn(t,s=>{kl(s,e,!0,i)}),n&&i&&e(t)}function Hg(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Kt(t){return new D(t.parent===null?t.name:Kt(t.parent)+"/"+t.name)}function ji(t){t.parent!==null&&jg(t.parent,t.name,t)}function jg(t,e,n){const i=Bg(n),s=ye(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ji(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ji(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=/[\[\].#$\/\u0000-\u001F\u007F]/,Gg=/[\[\].#$\u0000-\u001F\u007F]/,ci=10*1024*1024,Pl=function(t){return typeof t=="string"&&t.length!==0&&!$g.test(t)},Ol=function(t){return typeof t=="string"&&t.length!==0&&!Gg.test(t)},Vg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ol(t)},Ml=function(t,e,n,i){i&&e===void 0||$s(Yi(t,"value"),e,n)},$s=function(t,e,n){const i=n instanceof D?new bp(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Re(i));if(typeof e=="function")throw new Error(t+"contains a function "+Re(i)+" with contents = "+e.toString());if(ka(e))throw new Error(t+"contains "+e.toString()+" "+Re(i));if(typeof e=="string"&&e.length>ci/3&&bn(e)>ci)throw new Error(t+"contains a string greater than "+ci+" utf8 bytes "+Re(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(se(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Pl(o)))throw new Error(t+" contains an invalid key ("+o+") "+Re(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ip(i,o),$s(t,a,i),Np(i)}),s&&r)throw new Error(t+' contains ".value" child '+Re(i)+" in addition to actual children.")}},xl=function(t,e,n,i){if(!(i&&n===void 0)&&!Ol(n))throw new Error(Yi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qg=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xl(t,e,n,i)},Ll=function(t,e){if(v(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Yg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vg(n))throw new Error(Yi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fl(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!el(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function ve(t,e,n){Fl(t,n),Kg(t,i=>oe(i,e)||oe(e,i))}function Kg(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Xg(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Xg(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();xe&&j("event: "+n.toString()),dt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="repo_interrupt",Jg=25;class Zg{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yn(),this.transactionQueueTree_=new Hs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function em(t,e,n){if(t.stats_=Ns(t.repoInfo_),t.forceRestClient_||Kf())t.server_=new vn(t.repoInfo_,(i,s,r,o)=>{so(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ro(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{U(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new me(t.repoInfo_,e,(i,s,r,o)=>{so(t,i,s,r,o)},i=>{ro(t,i)},i=>{tm(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=tp(t.repoInfo_,()=>new ng(t.stats_,t.server_)),t.infoData_=new Qp,t.infoSyncTree_=new no({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Bn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vs(t,"connected",!1),t.serverSyncTree_=new no({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const h=o(a,l);ve(t.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Ul(t){const n=t.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gs(t){return Lg({timestamp:Ul(t)})}function so(t,e,n,i,s){t.dataUpdateCount++;const r=new D(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=sn(n,h=>F(h));o=xg(t.serverSyncTree_,r,l,s)}else{const l=F(n);o=Mg(t.serverSyncTree_,r,l,s)}else if(i){const l=sn(n,h=>F(h));o=Og(t.serverSyncTree_,r,l)}else{const l=F(n);o=Bn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$n(t,r)),ve(t.eventQueue_,a,o)}function ro(t,e){Vs(t,"connected",e),e===!1&&im(t)}function tm(t,e){se(e,(n,i)=>{Vs(t,n,i)})}function Vs(t,e,n){const i=new D("/.info/"+e),s=F(n);t.infoData_.updateSnapshot(i,s);const r=Bn(t.infoSyncTree_,i,s);ve(t.eventQueue_,i,r)}function Wl(t){return t.nextWriteId_++}function nm(t,e,n,i,s){qs(t,"set",{path:e.toString(),value:n,priority:i});const r=Gs(t),o=F(n,i),a=Fs(t.serverSyncTree_,e),l=Al(o,a,r),h=Wl(t),u=Cl(t.serverSyncTree_,e,l,h,!0);Fl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const m=d==="ok";m||J("set at "+e+" failed: "+d);const I=Me(t.serverSyncTree_,h,!m);ve(t.eventQueue_,e,I),rm(t,s,d,g)});const c=Gl(t,e);$n(t,c),ve(t.eventQueue_,c,[])}function im(t){qs(t,"onDisconnectEvents");const e=Gs(t),n=yn();xi(t.onDisconnect_,b(),(s,r)=>{const o=Wg(s,r,t.serverSyncTree_,e);al(n,s,o)});let i=[];xi(n,b(),(s,r)=>{i=i.concat(Bn(t.serverSyncTree_,s,r));const o=Gl(t,s);$n(t,o)}),t.onDisconnect_=yn(),ve(t.eventQueue_,b(),i)}function sm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Qg)}function qs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),j(n,...e)}function rm(t,e,n,i){e&&dt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Bl(t,e,n){return Fs(t.serverSyncTree_,e,n)||C.EMPTY_NODE}function Ys(t,e=t.transactionQueueTree_){if(e||Gn(t,e),ft(e)){const n=jl(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&om(t,Kt(e),n)}else Rl(e)&&jn(e,n=>{Ys(t,n)})}function om(t,e,n){const i=n.map(h=>h.currentWriteId),s=Bl(t,e,i);let r=s;const o=s.hash();for(let h=0;h<n.length;h++){const u=n[h];f(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const c=ne(e,u.path);r=r.updateChild(c,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,h=>{qs(t,"transaction put response",{path:l.toString(),status:h});let u=[];if(h==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Me(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Gn(t,js(t.transactionQueueTree_,e)),Ys(t,t.transactionQueueTree_),ve(t.eventQueue_,e,u);for(let d=0;d<c.length;d++)dt(c[d])}else{if(h==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{J("transaction at "+l.toString()+" failed: "+h);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=h}$n(t,e)}},o)}function $n(t,e){const n=Hl(t,e),i=Kt(n),s=jl(t,n);return am(t,s,i),i}function am(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],h=ne(n,l.path);let u=!1,c;if(f(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,c=l.abortReason,s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Jg)u=!0,c="maxretry",s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Bl(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){$s("transaction failed: Data returned ",g,l.path);let m=F(g);typeof g=="object"&&g!=null&&ye(g,".priority")||(m=m.updatePriority(d.getPriority()));const K=l.currentWriteId,L=Gs(t),Z=Al(m,d,L);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=Z,l.currentWriteId=Wl(t),o.splice(o.indexOf(K),1),s=s.concat(Cl(t.serverSyncTree_,l.path,Z,l.currentWriteId,l.applyLocally)),s=s.concat(Me(t.serverSyncTree_,K,!0))}else u=!0,c="nodata",s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0))}ve(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(c),!1,null))))}Gn(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)dt(i[a]);Ys(t,t.transactionQueueTree_)}function Hl(t,e){let n,i=t.transactionQueueTree_;for(n=v(e);n!==null&&ft(i)===void 0;)i=js(i,n),e=A(e),n=v(e);return i}function jl(t,e){const n=[];return $l(t,e,n),n.sort((i,s)=>i.order-s.order),n}function $l(t,e,n){const i=ft(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);jn(e,s=>{$l(t,s,n)})}function Gn(t,e){const n=ft(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Dl(e,n.length>0?n:void 0)}jn(e,i=>{Gn(t,i)})}function Gl(t,e){const n=Kt(Hl(t,e)),i=js(t.transactionQueueTree_,e);return Hg(i,s=>{ui(t,s)}),ui(t,i),kl(i,s=>{ui(t,s)}),n}function ui(t,e){const n=ft(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Me(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Dl(e,void 0):n.length=r+1,ve(t.eventQueue_,Kt(e),s);for(let o=0;o<i.length;o++)dt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function hm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):J(`Invalid query segment '${n}' in query '${t}'`)}return e}const oo=function(t,e){const n=cm(t),i=n.namespace;n.domain==="firebase.com"&&We(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&We("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hf();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Jf(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new D(n.pathString)}},cm=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let u=t.indexOf("/");u===-1&&(u=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(u,c)),u<c&&(s=lm(t.substring(u,c)));const d=hm(t.substring(Math.min(t.length,c)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(h+1),10)):h=e.length;const g=e.slice(0,h);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return y(this._path)?null:Qa(this._path)}get ref(){return new Ge(this._repo,this._path)}get _queryIdentifier(){const e=Vr(this._queryParams),n=bs(e);return n==="{}"?"default":n}get _queryObject(){return Vr(this._queryParams)}isEqual(e){if(e=Ft(e),!(e instanceof zs))return!1;const n=this._repo===e._repo,i=el(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sp(this._path)}}class Ge extends zs{constructor(e,n){super(e,n,new ks,!1)}get parent(){const e=Za(this._path);return e===null?null:new Ge(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function um(t,e){return t=Ft(t),t._checkNotDeleted("ref"),e!==void 0?$i(t._root,e):t._root}function $i(t,e){return t=Ft(t),v(t._path)===null?qg("child","path",e,!1):xl("child","path",e,!1),new Ge(t._repo,k(t._path,e))}function dm(t,e){t=Ft(t),Ll("push",t._path),Ml("push",e,t._path,!0);const n=Ul(t._repo),i=qp(n),s=$i(t,i),r=$i(t,i);let o;return e!=null?o=fm(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function fm(t,e){t=Ft(t),Ll("set",t._path),Ml("set",e,t._path,!1);const n=new Tn;return nm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}kg(Ge);Pg(Ge);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="FIREBASE_DATABASE_EMULATOR_HOST",Gi={};let gm=!1;function mm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||We("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),j("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=oo(r,s),a=o.repoInfo,l,h;typeof process<"u"&&process.env&&(h=process.env[pm]),h?(l=!0,r=`http://${h}?ns=${a.namespace}`,o=oo(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Pi(Pi.OWNER):new Qf(t.name,t.options,e);Yg("Invalid Firebase Database URL",o),y(o.path)||We("Database URL must point to the root of a Firebase Database (not including a child path).");const c=vm(a,t,u,new Xf(t.name,n));return new ym(c,t)}function _m(t,e){const n=Gi[e];(!n||n[t.key]!==t)&&We(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sm(t),delete n[t.key]}function vm(t,e,n,i){let s=Gi[e.name];s||(s={},Gi[e.name]=s);let r=s[t.toURLString()];return r&&We("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Zg(t,gm,n,i),s[t.toURLString()]=r,r}class ym{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(em(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ge(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_m(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&We("Cannot call "+e+" on a deleted database.")}}function wm(t=sd(),e){return ed(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){Lf(So),It(new nt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Te(Ir,Nr,t),Te(Ir,Nr,"esm2017")}me.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};me.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Em();const di={apiKey:"AIzaSyDlh9LD_IGGVNwK_EJzznWPIDXElCIUtxQ",authDomain:"forkbeard-913ec.firebaseapp.com",projectId:"forkbeard-913ec",storageBucket:"forkbeard-913ec.appspot.com",messagingSenderId:"651577634314",appId:"1:651577634314:web:c591050d98d665d03539f3",measurementId:"G-MMJVHRGP7D",databaseURL:"forkbeard-913ec-default-rtdb.europe-west1.firebasedatabase.app"};function Cm(){if(!di||!di.apiKey)throw new Error(`No Firebase configuration object provided.
Add your web app's configuration object to firebase-config.js`);return di}let Vl=null;const Tm=id(Cm()),Sm=wm(Tm),Vn=new Vi;Vn.addEventListener(Vi.events.LOG,t=>{rt(`[${Ze(t.timestamp,"Ppp",{locale:et})}] ${t.message}`,"text-secondary")});Vn.addEventListener(Vi.events.NEW_MEASURED_VALUE,async t=>{try{dm(um(Sm,"measuredvalues/"),{position:Vl,value:t.value})}catch(e){console.error("Error writing new todo item to Firebase Database",e),rt(`[${Ze(new Date,"Ppp",{locale:et})}] ${e}`,"bg-danger text-white")}rt(`[${Ze(t.timestamp,"Ppp",{locale:et})}] ${t.message}: ${t.value}`,"text-success")});const bm=document.getElementById("terminal");document.getElementById("connect").addEventListener("click",async()=>{try{let t=document.querySelector("#service").value;t.startsWith("0x")&&(t=Number.parseInt(t));let e=document.querySelector("#characteristic").value;e.startsWith("0x")&&(e=Number.parseInt(e)),await Vn.connect(t,e)}catch(t){rt(`[${Ze(new Date,"Ppp",{locale:et})}] ${t}`,"bg-danger text-white")}});document.getElementById("disconnect").addEventListener("click",async()=>{try{await Vn.disconnect()}catch(t){rt(`[${Ze(new Date,"Ppp",{locale:et})}] ${t}`,"bg-danger text-white")}});function rt(t,e=""){bm.insertAdjacentHTML("afterbegin",`<div${e?' class="'+e+'"':""}>${t}</div>`)}navigator.geolocation.watchPosition(t=>{Vl={coords:{accuracy:t.coords.accuracy,altitude:t.coords.altitude,altitudeAccuracy:t.coords.altitudeAccuracy,heading:t.coords.heading,latitude:t.coords.latitude,longitude:t.coords.longitude,speed:t.coords.speed},timestamp:t.timestamp},rt(`[${Ze(new Date(t.timestamp),"Ppp",{locale:et})}] ${t.coords.latitude}, ${t.coords.longitude}`,"text-warning")});"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(function(t){console.log("ServiceWorker registration successful with scope: ",t.scope)}).catch(function(t){console.log("ServiceWorker registration failed: ",t)});
