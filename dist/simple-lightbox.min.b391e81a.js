// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/simplelightbox/dist/simple-lightbox.min.js":[function(require,module,exports) {
/*
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	1.17.3
*/
!function(st,ot,E){"use strict";st.fn.simpleLightbox=function(N){N=st.extend({sourceAttr:"href",overlay:!0,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox"},N);function P(){return o.hash.substring(1)}function p(){P();var t="pid="+(V+1),e=o.href.split("#")[0]+"#"+t;s?history[f?"replaceState":"pushState"]("",E.title,e):f?o.replace(e):o.hash=t,f=!0}function t(e,a){var n;return function(){var t=arguments;n||(e.apply(this,t),n=!0,setTimeout(function(){return n=!1},a))}}function a(t){t.trigger(st.Event("show.simplelightbox")),N.disableScroll&&(u=T("hide")),N.htmlClass&&""!=N.htmlClass&&st("html").addClass(N.htmlClass),b.appendTo("body"),_.appendTo(b),N.overlay&&l.appendTo(st("body")),m=!0,V=$.index(t),K=st("<img/>").hide().attr("src",t.attr(N.sourceAttr)).attr("data-scale",1).attr("data-translate-x",0).attr("data-translate-y",0),-1==d.indexOf(t.attr(N.sourceAttr))&&d.push(t.attr(N.sourceAttr)),_.html("").attr("style",""),K.appendTo(_),C(),l.fadeIn("fast"),st(".sl-close").fadeIn("fast"),g.show(),J.fadeIn("fast"),st(".sl-wrapper .sl-counter .sl-current").text(V+1),c.fadeIn("fast"),tt(),N.preloading&&w(),setTimeout(function(){t.trigger(st.Event("shown.simplelightbox"))},N.animationSpeed)}function Z(t,e,a){return t<e?e:a<t?a:t}function z(t,e,a){K.data("scale",t),K.data("translate-x",e),K.data("translate-y",a)}var h,e,H="ontouchstart"in ot,L=(ot.navigator.pointerEnabled||ot.navigator.msPointerEnabled,0),j=0,K=st(),i=function(){var t=E.body||E.documentElement;return""===(t=t.style).WebkitTransition?"-webkit-":""===t.MozTransition?"-moz-":""===t.OTransition?"-o-":""===t.transition&&""},U=!1,d=[],$=N.rel&&!1!==N.rel?(e=N.rel,st(this).filter(function(){return st(this).attr("rel")===e})):this,n=$.get()[0].tagName,u=(i=i(),0),B=!1!==i,s="pushState"in history,f=!1,o=ot.location,Q=P(),G="simplelb",l=st("<div>").addClass("sl-overlay"),r=st("<button>").addClass("sl-close").html(N.closeText),g=st("<div>").addClass("sl-spinner").html("<div></div>"),J=st("<div>").addClass("sl-navigation").html('<button class="sl-prev">'+N.navText[0]+'</button><button class="sl-next">'+N.navText[1]+"</button>"),c=st("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'),m=!1,V=0,v=0,x=st("<div>").addClass("sl-caption "+N.captionClass+" pos-"+N.captionPosition),_=st("<div>").addClass("sl-image"),b=st("<div>").addClass("sl-wrapper").addClass(N.className),tt=function(o){if(K.length){var l=new Image,r=ot.innerWidth*N.widthRatio,c=ot.innerHeight*N.heightRatio;l.src=K.attr("src"),K.data("scale",1),K.data("translate-x",0),K.data("translate-y",0),at(0,0,1),st(l).on("error",function(t){$.eq(V).trigger(st.Event("error.simplelightbox")),U=!(m=!1),g.hide();var e=1==o||-1==o;v===V&&e?it():(N.alertError&&alert(N.alertErrorMessage),nt(e?o:1))}),l.onload=function(){void 0!==o&&$.eq(V).trigger(st.Event("changed.simplelightbox")).trigger(st.Event((1===o?"nextDone":"prevDone")+".simplelightbox")),N.history&&(f?h=setTimeout(p,800):p()),-1==d.indexOf(K.attr("src"))&&d.push(K.attr("src"));var t=l.width,e=l.height;if(N.scaleImageToRatio||r<t||c<e){var a=r/c<t/e?t/r:e/c;t/=a,e/=a}st(".sl-image").css({top:(ot.innerHeight-e)/2+"px",left:(ot.innerWidth-t-u)/2+"px",width:t+"px",height:e+"px"}),g.hide(),K.fadeIn("fast"),U=!0;var n,i="self"==N.captionSelector?$.eq(V):$.eq(V).find(N.captionSelector);if(n="data"==N.captionType?i.data(N.captionsData):"text"==N.captionType?i.html():i.prop(N.captionsData),N.loop||(0===V&&st(".sl-prev").hide(),V>=$.length-1&&st(".sl-next").hide(),0<V&&st(".sl-prev").show(),V<$.length-1&&st(".sl-next").show()),1==$.length&&st(".sl-prev, .sl-next").hide(),1==o||-1==o){var s={opacity:1};N.animationSlide&&(B?(et(0,100*o+"px"),setTimeout(function(){et(N.animationSpeed/1e3,"0px")},50)):s.left=parseInt(st(".sl-image").css("left"))+100*o+"px"),st(".sl-image").animate(s,N.animationSpeed,function(){m=!1,y(n,t)})}else m=!1,y(n,t);N.additionalHtml&&0===st(".sl-additional-html").length&&st("<div>").html(N.additionalHtml).addClass("sl-additional-html").appendTo(st(".sl-image"))}}},y=function(t,e){""!==t&&void 0!==t&&N.captions&&x.html(t).css({width:e+"px"}).hide().appendTo(st(".sl-image")).delay(N.captionDelay).fadeIn("fast")},et=function(t,e){var a={};a[i+"transform"]="translateX("+e+")",a[i+"transition"]=i+"transform "+t+"s linear",st(".sl-image").css(a)},at=function(t,e,a){var n={};n[i+"transform"]="translate("+t+","+e+") scale("+a+")",K.css(n)},C=function(){st(ot).on("resize."+G,tt),st(".sl-wrapper").on("click."+G+" touchstart."+G,".sl-close",function(t){t.preventDefault(),U&&it()}),N.history&&setTimeout(function(){st(ot).on("hashchange."+G,function(){U&&P()===Q&&it()})},40),J.on("click."+G,"button",t(function(t){t.preventDefault(),L=0,nt(st(this).hasClass("sl-next")?1:-1)},N.throttleInterval));var e,a,n,i,s,o,l,r,c,p,h,d,u,f,g,m,v,x,b,y,C,w,T,E,S,M,I,k=0,q=0,X=0,D=0,Y=!1,A=!1,O=0,R=!1,W=Z(1,1,N.maxZoom),F=!1;_.on("touchstart."+G+" mousedown."+G,function(t){if("A"===t.target.tagName&&"touchstart"==t.type)return!0;if("mousedown"==(t=t.originalEvent).type)c=t.clientX,p=t.clientY,e=_.height(),a=_.width(),s=K.height(),o=K.width(),n=_.position().left,i=_.position().top,l=parseFloat(K.data("translate-x")),r=parseFloat(K.data("translate-y")),R=!0;else{if(I=t.touches.length,c=t.touches[0].clientX,p=t.touches[0].clientY,e=_.height(),a=_.width(),s=K.height(),o=K.width(),n=_.position().left,i=_.position().top,1===I){if(F)return K.addClass("sl-transition"),Y=Y?(z(0,0,W=1),at("0px","0px",W),!1):(W=N.doubleTapZoom,z(0,0,W),at("0px","0px",W),st(".sl-caption").fadeOut(200),!0),setTimeout(function(){K.removeClass("sl-transition")},200),!1;F=!0,setTimeout(function(){F=!1},300),l=parseFloat(K.data("translate-x")),r=parseFloat(K.data("translate-y"))}else 2===I&&(h=t.touches[1].clientX,d=t.touches[1].clientY,l=parseFloat(K.data("translate-x")),r=parseFloat(K.data("translate-y")),C=(c+h)/2,w=(p+d)/2,u=Math.sqrt((c-h)*(c-h)+(p-d)*(p-d)));R=!0}return!!A||(B&&(O=parseInt(_.css("left"))),A=!0,j=L=0,k=t.pageX||t.touches[0].pageX,X=t.pageY||t.touches[0].pageY,!1)}).on("touchmove."+G+" mousemove."+G+" MSPointerMove",function(t){if(!A)return!0;if(t.preventDefault(),"touchmove"==(t=t.originalEvent).type){if(!1===R)return!1;f=t.touches[0].clientX,g=t.touches[0].clientY,I=t.touches.length,0,1<I?(m=t.touches[1].clientX,v=t.touches[1].clientY,M=Math.sqrt((f-m)*(f-m)+(g-v)*(g-v)),null===u&&(u=M),1<=Math.abs(u-M)&&(y=Z(M/u*W,1,N.maxZoom),T=(o*y-a)/2,E=(s*y-e)/2,S=y-W,x=o*y<=a?0:Z(l-(C-n-a/2-l)/(y-S)*S,-1*T,T),b=s*y<=e?0:Z(r-(w-i-e/2-r)/(y-S)*S,-1*E,E),at(x+"px",b+"px",y),1<y&&(Y=!0,st(".sl-caption").fadeOut(200)),u=M,W=y,l=x,r=b)):(T=(o*(y=W)-a)/2,E=(s*y-e)/2,x=o*y<=a?0:Z(f-(c-l),-1*T,T),b=s*y<=e?0:Z(g-(p-r),-1*E,E),Math.abs(x)===Math.abs(T)&&(l=x,c=f),Math.abs(b)===Math.abs(E)&&(r=b,p=g),z(W,x,b),at(x+"px",b+"px",y))}if("mousemove"==t.type&&A){if("touchmove"==t.type)return!0;if(!1===R)return!1;f=t.clientX,g=t.clientY,T=(o*(y=W)-a)/2,E=(s*y-e)/2,x=o*y<=a?0:Z(f-(c-l),-1*T,T),b=s*y<=e?0:Z(g-(p-r),-1*E,E),Math.abs(x)===Math.abs(T)&&(l=x,c=f),Math.abs(b)===Math.abs(E)&&(r=b,p=g),z(W,x,b),at(x+"px",b+"px",y)}Y||(q=t.pageX||t.touches[0].pageX,D=t.pageY||t.touches[0].pageY,L=k-q,j=X-D,N.animationSlide&&(B?et(0,-L+"px"):_.css("left",O-L+"px")))}).on("touchend."+G+" mouseup."+G+" touchcancel."+G+" mouseleave."+G+" pointerup pointercancel MSPointerUp MSPointerCancel",function(t){if(t=t.originalEvent,H&&"touchend"==t.type&&(0===(I=t.touches.length)?(z(W,x,b),1==W&&(Y=!1,st(".sl-caption").fadeIn(200)),u=null,R=!1):1===I?(c=t.touches[0].clientX,p=t.touches[0].clientY):1<I&&(u=null)),A){var e=!(A=!1);N.loop||(0===V&&L<0&&(e=!1),V>=$.length-1&&0<L&&(e=!1)),Math.abs(L)>N.swipeTolerance&&e?nt(0<L?1:-1):N.animationSlide&&(B?et(N.animationSpeed/1e3,"0px"):_.animate({left:O+"px"},N.animationSpeed/2)),N.swipeClose&&50<Math.abs(j)&&Math.abs(L)<N.swipeTolerance&&it()}}).on("dblclick",function(t){return c=t.clientX,p=t.clientY,e=_.height(),a=_.width(),s=K.height(),o=K.width(),n=_.position().left,i=_.position().top,K.addClass("sl-transition"),Y?(z(0,0,W=1),at("0px","0px",W),Y=!1,st(".sl-caption").fadeIn(200)):(W=N.doubleTapZoom,z(0,0,W),at("0px","0px",W),st(".sl-caption").fadeOut(200),Y=!0),setTimeout(function(){K.removeClass("sl-transition")},200),!(R=!0)})},w=function(){var t=V+1<0?$.length-1:V+1>=$.length-1?0:V+1,e=V-1<0?$.length-1:V-1>=$.length-1?0:V-1;st("<img />").attr("src",$.eq(t).attr(N.sourceAttr)).on("load",function(){-1==d.indexOf(st(this).attr("src"))&&d.push(st(this).attr("src")),$.eq(V).trigger(st.Event("nextImageLoaded.simplelightbox"))}),st("<img />").attr("src",$.eq(e).attr(N.sourceAttr)).on("load",function(){-1==d.indexOf(st(this).attr("src"))&&d.push(st(this).attr("src")),$.eq(V).trigger(st.Event("prevImageLoaded.simplelightbox"))})},nt=function(e){$.eq(V).trigger(st.Event("change.simplelightbox")).trigger(st.Event((1===e?"next":"prev")+".simplelightbox"));var t=V+e;if(!(m||(t<0||t>=$.length)&&!1===N.loop)){V=t<0?$.length-1:t>$.length-1?0:t,st(".sl-wrapper .sl-counter .sl-current").text(V+1);var a={opacity:0};N.animationSlide&&(B?et(N.animationSpeed/1e3,-100*e-L+"px"):a.left=parseInt(st(".sl-image").css("left"))+-100*e+"px"),st(".sl-image").animate(a,N.animationSpeed,function(){setTimeout(function(){var t=$.eq(V);K.attr("src",t.attr(N.sourceAttr)),-1==d.indexOf(t.attr(N.sourceAttr))&&g.show(),st(".sl-caption").remove(),tt(e),N.preloading&&w()},100)})}},it=function(){if(!m){var t=$.eq(V),e=!1;t.trigger(st.Event("close.simplelightbox")),N.history&&(s?history.pushState("",E.title,o.pathname+o.search):o.hash="",clearTimeout(h)),st(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast",function(){N.disableScroll&&T("show"),N.htmlClass&&""!=N.htmlClass&&st("html").removeClass(N.htmlClass),st(".sl-wrapper, .sl-overlay").remove(),J.off("click","button"),st(".sl-wrapper").off("click."+G,".sl-close"),st(ot).off("resize."+G),st(ot).off("hashchange."+G),e||t.trigger(st.Event("closed.simplelightbox")),e=!0}),K=st(),m=U=!1}},T=function(t){var e=0;if("hide"==t){var a=ot.innerWidth;if(!a){var n=E.documentElement.getBoundingClientRect();a=n.right-Math.abs(n.left)}if(E.body.clientWidth<a){var i=E.createElement("div"),s=parseInt(st("body").css("padding-right"),10);i.className="sl-scrollbar-measure",st("body").append(i),e=i.offsetWidth-i.clientWidth,st(E.body)[0].removeChild(i),st("body").data("padding",s),0<e&&st("body").addClass("hidden-scroll").css({"padding-right":s+e})}}else st("body").removeClass("hidden-scroll").css({"padding-right":st("body").data("padding")});return e};return N.close&&r.appendTo(b),N.showCounter&&1<$.length&&(c.appendTo(b),c.find(".sl-total").text($.length)),N.nav&&J.appendTo(b),N.spinner&&g.appendTo(b),$.on("click."+G,function(t){if(function(t){if(!N.fileExt)return!0;var e=st(t).attr(N.sourceAttr).match(/\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gim);return e&&st(t).prop("tagName").toUpperCase()==n&&new RegExp(".("+N.fileExt+")$","i").test(e)}(this)){if(t.preventDefault(),m)return!1;var e=st(this);v=$.index(e),a(e)}}),st(E).on("click."+G+" touchstart."+G,function(t){U&&N.docClose&&0===st(t.target).closest(".sl-image").length&&0===st(t.target).closest(".sl-navigation").length&&it()}),N.disableRightClick&&st(E).on("contextmenu",".sl-image img",function(t){return!1}),N.enableKeyboard&&st(E).on("keyup."+G,t(function(t){L=0;var e=t.keyCode;m&&27==e&&(K.attr("src",""),m=!1,it()),U&&(t.preventDefault(),27==e&&it(),37!=e&&39!=t.keyCode||nt(39==t.keyCode?1:-1))},N.throttleInterval)),this.open=function(t){t=t||st(this[0]),v=$.index(t),a(t)},this.next=function(){nt(1)},this.prev=function(){nt(-1)},this.close=function(){it()},this.destroy=function(){st(E).off("click."+G).off("keyup."+G),it(),st(".sl-overlay, .sl-wrapper").remove(),this.off("click")},this.refresh=function(){this.destroy(),st(this).simpleLightbox(N)},this}}(jQuery,window,document);

},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50791" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/simplelightbox/dist/simple-lightbox.min.js"], null)
//# sourceMappingURL=/simple-lightbox.min.b391e81a.js.map