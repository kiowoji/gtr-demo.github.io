// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gbXMy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var _headerJs = require("./components/header.js");
var _footerJs = require("./components/footer.js");
var _faqJs = require("./components/faq.js");
var _bookingFormJs = require("./components/booking-form.js");
var _addObjectFormJs = require("./components/add-object-form.js");
var _searchAreaJs = require("./components/search-area.js"); // const select_btn = document.getElementById('select_open')
 // const link_grop = document.querySelector('.link_grop')
 // const options = document.querySelectorAll('.link-select')
 // const btn_select = document.querySelector('.btn_select')
 // select_btn.addEventListener('click', function(){
 //     link_grop.classList.toggle('hidden')
 // })
 // options.forEach(option => {
 //     option.addEventListener('click',function(){
 //         btn_select.textContent = option.dataset.value
 //         link_grop.classList.toggle('hidden')
 //     } )
 // });
 // const id_cheked = document.getElementsByName('estate');
 // for (let i = 0; i< id_cheked.length; i++) {
 //     id_cheked[i].onchange = active_slot
 // }
 // function active_slot(){
 //     slot = document.getElementById(this.value);
 //     slot.classList.remove("slot");
 //     for (let i = 0; i< id_cheked.length; i++) {
 //         if(id_cheked[i].value != this.value){
 //             remove_slot = document.getElementById(id_cheked[i].value);
 //             remove_slot.classList.add("slot");
 //         }
 //     }
 // }
 // const activeted_lux =document.getElementById('active_lux');
 // const id_lux = document.getElementById('lux');
 // id_lux.addEventListener("change", function() {
 //     if(id_lux.checked){
 //         activeted_lux.classList.remove("active");
 //     }else{
 //         activeted_lux.classList.add("active");
 //     }
 // })
 // const active_pivlux =document.getElementById('active_pivlux');
 // const pivlux = document.getElementById('pivlux');
 // pivlux.addEventListener("change", function() {
 //     if(pivlux.checked){
 //         active_pivlux.classList.remove("active");
 //     }else{
 //         active_pivlux.classList.add("active");
 //     }
 // })
 // const active_standart =document.getElementById('active_standart');
 // const standart = document.getElementById('standart');
 // standart.addEventListener("change", function() {
 //     if(standart.checked){
 //         active_standart.classList.remove("active");
 //     }else{
 //         active_standart.classList.add("active");
 //     }
 // })
 // const inp = document.querySelector('#file');
 // const img = document.getElementById('preview');
 // const btn_add = document.querySelector('.btn_add')
 // const imageSelected = (ev) => {
 //     const file = ev.target.files && ev.target.files[0];
 //     if (file) {
 //         const reader = new FileReader();
 //         reader.addEventListener("load", function () {
 //             image = reader.result;
 //             preview.insertAdjacentHTML('afterbegin', `
 //                 <div class="preview-img"> 
 //                 <img class="img_i" src="${image}">
 //                 </div>
 //                 ` )
 //             console.log(image)
 //         }, false);
 //         reader.readAsDataURL(file);
 //     }
 // }
 // trigerInput = () => inp.click()
 // btn_add.addEventListener('click', trigerInput)
 // inp.addEventListener("change", imageSelected);
 // const loc =document.getElementById('loc_search');
 // const loc_grop =document.getElementById('loc_group');
 // loc.addEventListener('click', function (event) {
 //     loc_group.classList.toggle('hidden');
 //     event.stopPropagation();
 // });
 // document.addEventListener('click', function (event) {
 //     const isClickInside = loc.contains(event.target) || loc_group.contains(event.target);
 //     if (!isClickInside) {
 //         loc_group.classList.add('hidden');
 //     }
 // });
 // loc.addEventListener('click', loc_filter);
 // function loc_filter(){
 //     let loc_name = document.querySelector('#loc_name');
 //     let loc_li = document.querySelectorAll('#loc_group>li');
 //     loc_li.forEach( li => {
 //         li.addEventListener('click' , function (){
 //             loc_group.classList.add('hidden');
 //             loc_name.innerText = li.getAttribute('data-location');
 //             document.querySelector('#loc').value = li.getAttribute('data-location');
 //         })
 //     })
 // }

},{"./components/header.js":"aorvA","./components/footer.js":"bjsug","./components/faq.js":"lGrr8","./components/booking-form.js":"cumXt","./components/add-object-form.js":"aLN1w","./components/search-area.js":"2sZAG"}],"aorvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _flagUaSvg = require("/src/public/images/flag-ua.svg");
var _flagUaSvgDefault = parcelHelpers.interopDefault(_flagUaSvg);
var _flagRuSvg = require("/src/public/images/flag-ru.svg");
var _flagRuSvgDefault = parcelHelpers.interopDefault(_flagRuSvg);
var _flagGermanySvg = require("/src/public/images/flag-germany.svg");
var _flagGermanySvgDefault = parcelHelpers.interopDefault(_flagGermanySvg);
var _flagEngSvg = require("/src/public/images/flag-eng.svg");
var _flagEngSvgDefault = parcelHelpers.interopDefault(_flagEngSvg);
var _telegramSvg = require("/src/public/images/telegram.svg");
var _telegramSvgDefault = parcelHelpers.interopDefault(_telegramSvg);
var _viberSvg = require("/src/public/images/viber.svg");
var _viberSvgDefault = parcelHelpers.interopDefault(_viberSvg);
var _menuBurgerSvg = require("/src/public/images/menu_burger.svg");
var _menuBurgerSvgDefault = parcelHelpers.interopDefault(_menuBurgerSvg);
var _logoPng = require("/src/public/images/logo.png");
var _logoPngDefault = parcelHelpers.interopDefault(_logoPng);
var _addObjectIconSvg = require("/src/public/images/add_object_icon.svg");
var _addObjectIconSvgDefault = parcelHelpers.interopDefault(_addObjectIconSvg);
var _becomeAGuideIconSvg = require("/src/public/images/become_a_guide_icon.svg");
var _becomeAGuideIconSvgDefault = parcelHelpers.interopDefault(_becomeAGuideIconSvg);
var _phoneHeaderIconSvg = require("/src/public/images/phone-header-icon.svg");
var _phoneHeaderIconSvgDefault = parcelHelpers.interopDefault(_phoneHeaderIconSvg);
var _searchIconSvg = require("/src/public/images/search_icon.svg");
var _searchIconSvgDefault = parcelHelpers.interopDefault(_searchIconSvg);
var _donateButtonSvg = require("/src/public/images/donate_button.svg");
var _donateButtonSvgDefault = parcelHelpers.interopDefault(_donateButtonSvg);
var _phoneOrangeSvg = require("/src/public/images/social-icon/phone-orange.svg");
var _phoneOrangeSvgDefault = parcelHelpers.interopDefault(_phoneOrangeSvg);
var _telegramOrangeSvg = require("/src/public/images/social-icon/telegram-orange.svg");
var _telegramOrangeSvgDefault = parcelHelpers.interopDefault(_telegramOrangeSvg);
var _viberOrangeSvg = require("/src/public/images/social-icon/viber-orange.svg");
var _viberOrangeSvgDefault = parcelHelpers.interopDefault(_viberOrangeSvg);
class Header extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header id="header">
        <div class="bg-header-top">
            <div class="flex-alignment">
                <div class="flex-alignment py-3">
                    <button type="button" class="leng mr-5" id="leng">
                        <div class="uppercase text-base mr-1 !text-header-top-text">ua</div>
                        <img src="${0, _flagUaSvgDefault.default}" alt="flag">
                    </button>
                    <button type="button" id="currency" class="rounded-sm px-1">
                        <div class="money-select !text-header-top-text" id="currency-data">uah</div>
                    </button>
                    <a class="text-header-top-text text-base mr-5" href="#">\u{411}\u{43B}\u{43E}\u{433}</a>
                    <a class="text-header-top-text text-base "  href="#">\u{41F}\u{440}\u{43E} \u{43D}\u{430}\u{441}</a> 
                </div>
                <div class="flex-alignment">
                    <a href="#">
                        <img src="${0, _telegramSvgDefault.default}" alt="icon">
                    </a>
                    <a class=" mx-2" href="#">
                        <img src="${0, _viberSvgDefault.default}" alt="icon">
                    </a>
                    <a class="text-header-top-text text-base font-semibold" href="tel:+380956480880">+38 (095) 648-0880</a>
                </div> 
            </div>
        </div>

        <ul id="leng-menu" class="!hidden !text-header-top-text">
                <li>
                    <button type="button" class="leng" data-lang="ua">
                        <div class="leng-select">ua</div>
                        <img src="${0, _flagUaSvgDefault.default}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="ru">
                        <div class="leng-select">ru</div>
                        <img src="${0, _flagRuSvgDefault.default}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="de">
                        <div class="leng-select">de</div>
                        <img src="${0, _flagGermanySvgDefault.default}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="eng">
                        <div class="leng-select">eng</div>
                        <img src="${0, _flagEngSvgDefault.default}" alt="flag">
                    </button>
                </li>
        </ul>
        <ul id="currency-menu" class="!hidden !text-header-top-text">
                <li>
                    <button type="button" class="currency">
                        <div class="currency-select">uan</div>
                    </button>
                </li>
                <li>
                    <button type="button" class="currency">
                        <div class="currency-select px-0.5">eur</div>
                    </button>
                </li>
        </ul>

        <div class="main-header">
            <div class="sm:block md:block lg:flex justify-between items-center">
                <div class="flex-alignment w-full sm:flex-wrap md:flex-nowrap lg:flex-nowrap">
                    <div class="flex items-center w-max">
                        <button id="btn_menu">
                        <img src="${0, _menuBurgerSvgDefault.default}" alt="menu" class="w-10 h-10 lg:w-[60px] lg:h-[60px] max-w-fit">
                        </button>
                        <a class="ml-4 mr-2 flex" href="/">
                        <img src="${0, _logoPngDefault.default}" alt="logo" class="logo">
                        </a>
                    </div>

                    
                    <div class="sm:flex md:flex lg:hidden gap-4 md:order-last">
                        <button id="add-btn">
                            <img src="${0, _addObjectIconSvgDefault.default}" alt="icon" class="w-[40px] md:max-w-fit">
                        </button>
                        <button id="contact-btn">
                            <img src="${0, _phoneHeaderIconSvgDefault.default}" alt="icon" class="w-[40px] md:max-w-fit">
                        </button>
                    </div>
                    <ul id="add-section" class="!hidden">
                            <li>
                                <a class="open-add-object flex-alignment cursor-pointer" href="#">
                                    <img src="${0, _addObjectIconSvgDefault.default}" alt="icon">
                                    <span class="text-base ml-4 whitespace-nowrap">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43E}\u{431}'\u{454}\u{43A}\u{442}</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex-alignment cursor-pointer" href="become-a-guide.html">
                                    <img src="${0, _becomeAGuideIconSvgDefault.default}" alt="icon">
                                    <span class="text-base ml-4 whitespace-nowrap">\u{421}\u{442}\u{430}\u{442}\u{438} \u{433}\u{456}\u{434}\u{43E}\u{43C}</span>
                                </a>
                            </li>
                    </ul>
                    <ul id="contact-section" class="!hidden">
                            <li>
                                <a class="flex-alignment cursor-pointer" href="tel:+380956480880">
                                    <img src="${0, _phoneOrangeSvgDefault.default}" alt="icon">
                                    <span class="text-base ml-4 whitespace-nowrap">+38 (095) 648-0880</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex-alignment cursor-pointer" href="become-a-guide.html">
                                    <img src="${0, _telegramOrangeSvgDefault.default}" alt="icon">
                                    <span class="text-base ml-4 whitespace-nowrap">\u{41D}\u{438}\u{43A} \u{438}\u{43B}\u{438} \u{43D}\u{43E}\u{43C}\u{435}\u{440}</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex-alignment cursor-pointer" href="#">
                                    <img src="${0, _viberOrangeSvgDefault.default}" alt="donate">
                                    <span class="text-base ml-4 whitespace-nowrap">\u{41D}\u{438}\u{43A} \u{438}\u{43B}\u{438} \u{43D}\u{43E}\u{43C}\u{435}\u{440}</span>
                                </a>
                            </li>
                    </ul>
                    <search-area class="w-full"></search-area>
                </div>
               
                
                <div class="header-icons">
                    <a class="open-add-object flex-alignment w-max" href="#">
                        <img src="${0, _addObjectIconSvgDefault.default}" alt="icon">
                        <div class="text-base mx-3 whitespace-nowrap">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43E}\u{431}'\u{454}\u{43A}\u{442}</div>
                    </a>
                    <a class="flex-alignment ml-8 w-max" href="become-a-guide.html">
                        <img src="${0, _becomeAGuideIconSvgDefault.default}" alt="icon">
                        <div class="text-base mx-3 whitespace-nowrap">\u{421}\u{442}\u{430}\u{442}\u{438} \u{433}\u{456}\u{434}\u{43E}\u{43C}</div>
                    </a>
                </div>
               
            </div>
        </div>

        <div class="menu hidden">
            <div id="menu-items" class="flex flex-col justify-between h-full shadow-lg">
                <ul class="first-menu">
                    <li class="bg-gray-100 font-bold !py-4 lg:!hidden">\u{41A}\u{430}\u{442}\u{435}\u{433}\u{43E}\u{440}\u{456}\u{457}<span class="text-gray-600 close-menu">&#x2715;</span></li>
                    <li id="resorts">\u{41A}\u{443}\u{440}\u{43E}\u{440}\u{442}\u{438}<span class="text-gray-400 text-2xl lg:!hidden">></span></li>
                    <li id="accomodation">\u{413}\u{43E}\u{442}\u{435}\u{43B}\u{456}<span class="text-gray-400 text-2xl lg:!hidden">></span></li>
                    <li id="tours">\u{422}\u{443}\u{440}\u{438}<span class="text-gray-400 text-2xl lg:!hidden">></span></li>
                    <li id="services">\u{410}\u{43A}\u{442}\u{438}\u{432}\u{43D}\u{43E}\u{441}\u{442}\u{456}<span class="text-gray-400 text-2xl lg:!hidden">></span></li>
                </ul>
                <div class="menu-link pb-24 lg:pb-8 pt-5 border-t-2 lg:border-t-0 flex flex-row justify-between items-end">
                    <div class="flex flex-col gap-5 pl-5 lg:pl-12">
                        <span class="font-bold">\u{41E}\u{43F}\u{443}\u{431}\u{43B}\u{456}\u{43A}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43E}\u{431}'\u{454}\u{43A}\u{442}</span>
                        <a href="tel:+380956480880" class="text-gray-500">+38(095) 648 0880</a>
                        <a href="https://t.me/infoGoToRest" class="text-gray-500">Telegram</a>
                        <a href="tel:+380956480880" class="text-gray-500">info@go-to.rest</a>
                    </div>
                    <div class="lg:hidden">
                        <button type="button" class="leng mr-5 bg-hover-bg px-4 py-2 cursor-pointer rounded" id="sidebar-leng">
                            <div class="uppercase text-base mr-1 text-secondary">ua</div>
                            <img src="${0, _flagUaSvgDefault.default}" alt="flag">
                        </button>
                        <ul id="sidebar-leng-menu" class="!hidden !bg-hover-bg !mr-20">
                            <li>
                                <button type="button" class="leng" data-lang="ua">
                                    <div class="leng-select">ua</div>
                                    <img src="${0, _flagUaSvgDefault.default}" alt="flag">
                                </button>
                            </li>
                            <li>
                                <button type="button" class="leng" data-lang="ru">
                                    <div class="leng-select">ru</div>
                                    <img src="${0, _flagRuSvgDefault.default}" alt="flag">
                                </button>
                            </li>
                            <li>
                                <button type="button" class="leng" data-lang="de">
                                    <div class="leng-select">de</div>
                                    <img src="${0, _flagGermanySvgDefault.default}" alt="flag">
                                </button>
                            </li>
                            <li>
                                <button type="button" class="leng" data-lang="eng">
                                    <div class="leng-select">eng</div>
                                    <img src="${0, _flagEngSvgDefault.default}" alt="flag">
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul id="resorts-list" class="hidden sub-menu">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl go-back"><</span>
                        <span>\u{41A}\u{443}\u{440}\u{43E}\u{440}\u{442}\u{438}</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4">\u{417}\u{430}\u{43A}\u{430}\u{440}\u{43F}\u{430}\u{442}\u{442}\u{44F}</li>
                <li>\u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}</li>
                <li>\u{41C}\u{443}\u{43A}\u{430}\u{447}\u{435}\u{432}\u{43E}</li>
                <li>\u{41C}\u{456}\u{436}\u{433}\u{456}\u{440}'\u{44F}</li>
                <li>\u{41B}\u{443}\u{43C}\u{448}\u{43E}\u{440}\u{438}</li>
                <li>\u{41A}\u{43E}\u{441}\u{438}\u{43D}\u{43E}</li>
                <li>\u{41A}\u{43E}\u{43B}\u{43E}\u{447}\u{435}\u{432}\u{43E}</li>
                <li>\u{41A}\u{432}\u{430}\u{441}\u{438}</li>
                <li>\u{41F}\u{435}\u{440}\u{435}\u{447}\u{438}\u{43D}</li>
                <li>\u{420}\u{430}\u{445}\u{456}\u{432}</li>
                <li>\u{422}\u{44F}\u{447}\u{435}\u{432}</li>
                <li>\u{425}\u{443}\u{441}\u{442}</li>
            </ul>
            <ul id="accomodation-list" class="hidden sub-menu">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl go-back"><</span>
                        <span>\u{413}\u{43E}\u{442}\u{435}\u{43B}\u{456}</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4">\u{411}\u{443}\u{43A}\u{43E}\u{432}\u{435}\u{43B}\u{44C} \u{436}\u{438}\u{442}\u{43B}\u{43E}</li>
                <li>\u{41F}\u{43E}\u{43B}\u{44F}\u{43D}\u{438}\u{446}\u{44F} \u{436}\u{438}\u{442}\u{43B}\u{43E}</li>
                <li>\u{42F}\u{440}\u{435}\u{43C}\u{447}\u{435} \u{436}\u{438}\u{442}\u{43B}\u{43E}</li>
                <li>\u{41C}\u{456}\u{436}\u{433}\u{456}\u{440}\u{44F} \u{436}\u{438}\u{442}\u{43B}\u{43E}</li>
                <li>\u{41C}\u{443}\u{43A}\u{430}\u{447}\u{435}\u{432}\u{43E} \u{436}\u{438}\u{442}\u{43B}\u{43E}</li>
                <li>\u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434} \u{436}\u{438}\u{442}\u{43B}\u{43E}</li>
                <li>\u{41A}\u{43E}\u{442}\u{435}\u{434}\u{436}\u{456}</li>
                <li>\u{413}\u{43E}\u{442}\u{435}\u{43B}\u{456}</li>
                <li>\u{411}\u{443}\u{434}\u{438}\u{43D}\u{43E}\u{447}\u{43A}\u{438} \u{432} \u{433}\u{43E}\u{440}\u{430}\u{445}</li>
                <li>\u{41A}\u{43E}\u{442}\u{435}\u{434}\u{436} \u{432} \u{43B}\u{456}\u{441}\u{456}</li>
                <li>\u{414}\u{438}\u{442}\u{44F}\u{447}\u{456} \u{442}\u{430}\u{431}\u{43E}\u{440}\u{438}</li>
                <li>\u{416}\u{438}\u{442}\u{43B}\u{43E} \u{437} \u{431}\u{430}\u{441}\u{435}\u{439}\u{43D}\u{43E}\u{43C}</li>
                <li>\u{411}\u{443}\u{434}\u{438}\u{43D}\u{43E}\u{447}\u{43A}\u{438} \u{431}\u{456}\u{43B}\u{44F} \u{43E}\u{437}\u{435}\u{440}\u{430}</li>
            </ul>
            <ul id="tours-list" class="hidden sub-menu">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl go-back"><</span>
                        <span>\u{422}\u{443}\u{440}\u{438}</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4" id="popular-dest">\u{41F}\u{43E}\u{43F}\u{443}\u{43B}\u{44F}\u{440}\u{43D}\u{456} \u{43D}\u{430}\u{43F}\u{440}\u{44F}\u{43C}\u{43A}\u{438}<span class="text-gray-400">></span></li>
                <li>SPA-\u{442}\u{443}\u{440}\u{438}</li>
                <li>\u{410}\u{432}\u{442}\u{43E}\u{431}\u{443}\u{441}\u{43D}\u{456} \u{442}\u{443}\u{440}\u{438}</li>
                <li>\u{410}\u{432}\u{442}\u{43E}\u{43C}\u{43E}\u{431}\u{456}\u{43B}\u{44C}\u{43D}\u{430} \u{435}\u{43A}\u{441}\u{43A}\u{443}\u{440}\u{441}\u{456}\u{44F}</li>
                <li>\u{410}\u{432}\u{442}\u{43E}\u{440}\u{441}\u{44C}\u{43A}\u{456} \u{442}\u{443}\u{440}\u{438}</li>
                <li>\u{410}\u{43A}\u{442}\u{438}\u{432}\u{43D}\u{456} \u{442}\u{443}\u{440}\u{438}</li>
                <li>\u{412}\u{435}\u{43B}\u{43E}\u{441}\u{438}\u{43F}\u{435}\u{434}\u{43D}\u{430} \u{435}\u{43A}\u{441}\u{43A}\u{443}\u{440}\u{441}\u{456}\u{44F}</li>
                <li>\u{412}\u{438}\u{43D}\u{43D}\u{438}\u{439} \u{442}\u{443}\u{440}</li>
                <li>\u{413}\u{430}\u{441}\u{442}\u{440}\u{43E}\u{43D}\u{43E}\u{43C}\u{456}\u{447}\u{43D}\u{456} \u{442}\u{443}\u{440}\u{438}</li>
                <li>\u{414}\u{438}\u{442}\u{44F}\u{447}\u{456} \u{442}\u{443}\u{440}\u{438}</li>
                <li>\u{415}\u{43A}\u{441}\u{43A}\u{443}\u{440}\u{441}\u{456}\u{457}</li>
                <li>\u{406}\u{43D}\u{434}\u{438}\u{432}\u{456}\u{434}\u{443}\u{430}\u{43B}\u{44C}\u{43D}\u{456} \u{442}\u{443}\u{440}\u{438}</li>
                <li>\u{41E}\u{437}\u{434}\u{43E}\u{440}\u{43E}\u{432}\u{447}\u{456} \u{442}\u{443}\u{440}\u{438}</li>
                <li>\u{41F}\u{456}\u{448}\u{456} \u{43F}\u{440}\u{43E}\u{433}\u{443}\u{43B}\u{44F}\u{43D}\u{43A}\u{438}</li>
                <li>\u{422}\u{435}\u{440}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{456} \u{432}\u{43E}\u{434}\u{438}</li>
                <li>\u{422}\u{443}\u{440}\u{438} \u{43D}\u{430} \u{434}\u{432}\u{43E}\u{445}</li>
                <li>\u{422}\u{443}\u{440}\u{438}\u{441}\u{442}\u{438}\u{447}\u{43D}\u{456} \u{43F}\u{43E}\u{445}\u{43E}\u{434}\u{438}</li>
                <li>\u{412}\u{441}\u{456} \u{435}\u{43A}\u{441}\u{43A}\u{443}\u{440}\u{441}\u{456}\u{457} \u{43F}\u{43E} \u{417}\u{430}\u{43A}\u{430}\u{440}\u{43F}\u{430}\u{442}\u{442}\u{44E}</li>
            </ul>
            <ul id="popular-dest-list" class="hidden sub-menu lg:!left-[600px] border-l-2 absolute bg-white w-full">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl hide"><</span>
                        <span>\u{41F}\u{43E}\u{43F}\u{443}\u{43B}\u{44F}\u{440}\u{43D}\u{456} \u{43D}\u{430}\u{43F}\u{440}\u{44F}\u{43C}\u{43A}\u{438}</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4">\u{413}\u{43E}\u{432}\u{435}\u{440}\u{43B}\u{430}</li>
                <li>\u{421}\u{438}\u{43D}\u{435}\u{432}\u{456}\u{440}</li>
                <li>\u{415}\u{43A}\u{441}\u{43A}\u{443}\u{440}\u{441}\u{456}\u{457} \u{432} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{456}</li>
                <li>\u{415}\u{43A}\u{441}\u{43A}\u{443}\u{440}\u{441}\u{456}\u{457} \u{432} \u{41C}\u{443}\u{43A}\u{430}\u{447}\u{435}\u{432}\u{43E}</li>
                <li>\u{415}\u{43A}\u{441}\u{43A}\u{443}\u{440}\u{441}\u{456}\u{457} \u{432} \u{41C}\u{456}\u{436}\u{433}\u{456}\u{440}'\u{457}</li>
            </ul>
            <ul id="services-list" class="hidden sub-menu">
                <li class="bg-gray-100 !py-4 lg:!hidden">
                    <div class="flex flex-row items-center gap-3">
                        <span class="text-gray-400 text-2xl go-back"><</span>
                        <span>\u{410}\u{43A}\u{442}\u{438}\u{432}\u{43D}\u{43E}\u{441}\u{442}\u{456}</span>
                    </div>
                    <span class="text-gray-600 close-menu">&#x2715;</span>
                </li>
                <li class="!pt-4">\u{422}\u{440}\u{430}\u{43D}\u{441}\u{444}\u{435}\u{440}</li>
                <li>\u{412}\u{435}\u{43B}\u{43E}\u{43F}\u{440}\u{43E}\u{43A}\u{430}\u{442}</li>
                <li>\u{41F}\u{440}\u{43E}\u{43A}\u{430}\u{442} \u{43A}\u{432}\u{430}\u{434}\u{440}\u{43E}\u{446}\u{438}\u{43A}\u{43B}\u{456}\u{432}</li>
                <li>\u{41F}\u{440}\u{43E}\u{43A}\u{430}\u{442} \u{441}\u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{436}\u{435}\u{43D}\u{43D}\u{44F}</li>
                <li>\u{417}\u{43D}\u{430}\u{439}\u{442}\u{438} \u{433}\u{456}\u{434}\u{430}</li>
            </ul>
        </div>
    </header>
    <add-object-form></add-object-form>
    `;
        const btn_menu = document.getElementById("btn_menu");
        const menu = document.querySelector(".menu");
        const menuItems = document.getElementById("menu-items");
        const menuItemsList = this.querySelectorAll("#menu-items li");
        const subMenus = this.querySelectorAll(".sub-menu");
        const addBtn = document.getElementById("add-btn");
        const addSection = document.getElementById("add-section");
        const contactBtn = document.getElementById("contact-btn");
        const contactSection = document.getElementById("contact-section");
        const leng = document.getElementById("leng");
        const lengMenu = document.getElementById("leng-menu");
        const currency = document.getElementById("currency");
        const currencyMenu = document.getElementById("currency-menu");
        const currencyData = document.getElementById("currency-data");
        const closeMenuBtns = document.querySelectorAll(".close-menu");
        const goBackButtons = document.querySelectorAll(".go-back");
        const hideMenu = document.querySelector(".hide");
        const desktopWidth = 1440;
        const sidebarLeng = document.getElementById("sidebar-leng");
        const sidebarLengMenu = document.getElementById("sidebar-leng-menu");
        sidebarLeng.addEventListener("click", ()=>{
            sidebarLengMenu.classList.toggle("!hidden");
        });
        document.querySelectorAll("#sidebar-leng-menu li").forEach((item)=>{
            item.addEventListener("click", ()=>{
                const selectedLanguage = item.querySelector(".leng").innerHTML;
                sidebarLeng.innerHTML = selectedLanguage;
                sidebarLengMenu.classList.add("!hidden");
            });
        });
        document.addEventListener("click", (e)=>{
            if (!sidebarLeng.contains(e.target) && !sidebarLengMenu.contains(e.target)) sidebarLengMenu.classList.add("!hidden");
        });
        function isDesktop() {
            return window.innerWidth >= desktopWidth;
        }
        closeMenuBtns.forEach((item)=>{
            item.addEventListener("click", ()=>{
                menu.classList.add("hidden");
                menuItems.classList.remove("hidden");
            });
        });
        btn_menu.addEventListener("click", function() {
            menu.classList.toggle("hidden");
            subMenus.forEach((menu)=>{
                menu.classList.add("hidden");
            });
            if (menu.classList.contains("hidden")) menuItems.classList.remove("hidden");
        });
        document.addEventListener("click", (e)=>{
            if (e.target !== btn_menu && !btn_menu.contains(e.target) && !menu.contains(e.target)) {
                if (!menu.classList.contains("hidden")) {
                    menu.classList.add("hidden");
                    menuItems.classList.remove("hidden");
                }
            }
        });
        menuItemsList.forEach((item)=>{
            item.addEventListener("click", ()=>{
                const itemId = item.id;
                subMenus.forEach((menu)=>{
                    menu.classList.add("hidden");
                });
                const subMenu = this.querySelector(`#${itemId}-list`);
                if (subMenu) {
                    if (isDesktop()) subMenu.classList.remove("hidden");
                    else {
                        subMenu.classList.remove("hidden");
                        menuItems.classList.add("hidden");
                    }
                }
            });
        });
        goBackButtons.forEach((goBack)=>{
            goBack.addEventListener("click", ()=>{
                const parentSubMenu = goBack.closest(".sub-menu");
                if (parentSubMenu) {
                    parentSubMenu.classList.add("hidden");
                    menuItems.classList.remove("hidden");
                }
            });
        });
        document.getElementById("popular-dest").addEventListener("click", ()=>{
            const subMenu = document.getElementById("popular-dest-list");
            if (subMenu) {
                if (isDesktop()) subMenu.classList.remove("hidden");
                else {
                    subMenu.classList.remove("hidden");
                    menuItems.classList.add("hidden");
                }
            }
        });
        hideMenu.addEventListener("click", ()=>{
            document.getElementById("popular-dest-list").classList.add("hidden");
        });
        addBtn.addEventListener("click", ()=>{
            addSection.classList.toggle("!hidden");
        });
        document.addEventListener("click", (e)=>{
            if (!addBtn.contains(e.target) && !addSection.contains(e.target)) addSection.classList.add("!hidden");
        });
        contactBtn.addEventListener("click", ()=>{
            contactSection.classList.toggle("!hidden");
        });
        document.addEventListener("click", (e)=>{
            if (!contactBtn.contains(e.target) && !contactSection.contains(e.target)) contactSection.classList.add("!hidden");
        });
        currency.addEventListener("click", ()=>{
            currencyMenu.classList.toggle("!hidden");
        });
        leng.addEventListener("click", ()=>{
            lengMenu.classList.toggle("!hidden");
        });
        document.querySelectorAll("#leng-menu li").forEach((item)=>{
            item.addEventListener("click", ()=>{
                const selectedLanguage = item.querySelector(".leng").innerHTML;
                leng.innerHTML = selectedLanguage;
                lengMenu.classList.add("!hidden");
            });
        });
        document.addEventListener("click", (e)=>{
            if (!leng.contains(e.target) && !lengMenu.contains(e.target)) lengMenu.classList.add("!hidden");
        });
        document.querySelectorAll("#currency-menu li").forEach((item)=>{
            item.addEventListener("click", ()=>{
                const selectedCurrency = item.querySelector(".currency-select").textContent;
                currencyData.textContent = selectedCurrency;
                currencyMenu.classList.add("!hidden");
            });
        });
        document.addEventListener("click", (e)=>{
            if (!currency.contains(e.target) && !currencyMenu.contains(e.target)) currencyMenu.classList.add("!hidden");
        });
        const addObjectBtns = document.getElementsByClassName("open-add-object");
        Array.from(addObjectBtns).forEach((btn)=>{
            btn.addEventListener("click", ()=>{
                const addObjectOverlay = document.getElementById("add-object-overlay");
                addObjectOverlay.classList.remove("hidden");
            });
        });
    }
}
customElements.define("header-component", Header);

},{"/src/public/images/flag-ua.svg":"hKy4y","/src/public/images/flag-ru.svg":"96MrU","/src/public/images/flag-germany.svg":"i2uoL","/src/public/images/flag-eng.svg":"dlxvX","/src/public/images/telegram.svg":"96FMJ","/src/public/images/viber.svg":"71k8p","/src/public/images/menu_burger.svg":"hse8j","/src/public/images/logo.png":"7RUVZ","/src/public/images/add_object_icon.svg":"eSEFY","/src/public/images/become_a_guide_icon.svg":"enHri","/src/public/images/phone-header-icon.svg":"jslrm","/src/public/images/search_icon.svg":"aCfcd","/src/public/images/donate_button.svg":"7YSMB","/src/public/images/social-icon/phone-orange.svg":"9wASN","/src/public/images/social-icon/telegram-orange.svg":"faSj0","/src/public/images/social-icon/viber-orange.svg":"lYm2I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKy4y":[function(require,module,exports) {
module.exports = require("bb81bb8c0973e6bb").getBundleURL("lPpKD") + "flag-ua.b44c845b.svg" + "?" + Date.now();

},{"bb81bb8c0973e6bb":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"96MrU":[function(require,module,exports) {
module.exports = require("48de298e1c332afa").getBundleURL("lPpKD") + "flag-ru.1e0c4b62.svg" + "?" + Date.now();

},{"48de298e1c332afa":"lgJ39"}],"i2uoL":[function(require,module,exports) {
module.exports = require("4e19f1890012264").getBundleURL("lPpKD") + "flag-germany.cf92fb3e.svg" + "?" + Date.now();

},{"4e19f1890012264":"lgJ39"}],"dlxvX":[function(require,module,exports) {
module.exports = require("18a473b09bc0b301").getBundleURL("lPpKD") + "flag-eng.f8d75f9e.svg" + "?" + Date.now();

},{"18a473b09bc0b301":"lgJ39"}],"96FMJ":[function(require,module,exports) {
module.exports = require("3033874069b9e4bc").getBundleURL("lPpKD") + "telegram.29137fbb.svg" + "?" + Date.now();

},{"3033874069b9e4bc":"lgJ39"}],"71k8p":[function(require,module,exports) {
module.exports = require("369e42ac47e45f3e").getBundleURL("lPpKD") + "viber.2a996c4d.svg" + "?" + Date.now();

},{"369e42ac47e45f3e":"lgJ39"}],"hse8j":[function(require,module,exports) {
module.exports = require("f8e9a818ea56e813").getBundleURL("lPpKD") + "menu_burger.8aed6eb7.svg" + "?" + Date.now();

},{"f8e9a818ea56e813":"lgJ39"}],"7RUVZ":[function(require,module,exports) {
module.exports = require("75034afc541f6e9e").getBundleURL("lPpKD") + "logo.5fad35ed.png" + "?" + Date.now();

},{"75034afc541f6e9e":"lgJ39"}],"eSEFY":[function(require,module,exports) {
module.exports = require("39b065b0a7f13335").getBundleURL("lPpKD") + "add_object_icon.8f987918.svg" + "?" + Date.now();

},{"39b065b0a7f13335":"lgJ39"}],"enHri":[function(require,module,exports) {
module.exports = require("b511b0d46142de03").getBundleURL("lPpKD") + "become_a_guide_icon.e9461a7e.svg" + "?" + Date.now();

},{"b511b0d46142de03":"lgJ39"}],"jslrm":[function(require,module,exports) {
module.exports = require("e28b94b914e07563").getBundleURL("lPpKD") + "phone-header-icon.3eca9e94.svg" + "?" + Date.now();

},{"e28b94b914e07563":"lgJ39"}],"aCfcd":[function(require,module,exports) {
module.exports = require("6b86d40767132559").getBundleURL("lPpKD") + "search_icon.d199cd2a.svg" + "?" + Date.now();

},{"6b86d40767132559":"lgJ39"}],"7YSMB":[function(require,module,exports) {
module.exports = require("5ad847bed078d489").getBundleURL("lPpKD") + "donate_button.49985b45.svg" + "?" + Date.now();

},{"5ad847bed078d489":"lgJ39"}],"9wASN":[function(require,module,exports) {
module.exports = require("9713508213d93283").getBundleURL("lPpKD") + "phone-orange.22d8afdd.svg" + "?" + Date.now();

},{"9713508213d93283":"lgJ39"}],"faSj0":[function(require,module,exports) {
module.exports = require("9aaeae8c4e37f97c").getBundleURL("lPpKD") + "telegram-orange.adf43365.svg" + "?" + Date.now();

},{"9aaeae8c4e37f97c":"lgJ39"}],"lYm2I":[function(require,module,exports) {
module.exports = require("d528ac7390c42727").getBundleURL("lPpKD") + "viber-orange.d39d88ba.svg" + "?" + Date.now();

},{"d528ac7390c42727":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bjsug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _flagUaSvg = require("/src/public/images/flag-ua.svg");
var _flagUaSvgDefault = parcelHelpers.interopDefault(_flagUaSvg);
var _flagRuSvg = require("/src/public/images/flag-ru.svg");
var _flagRuSvgDefault = parcelHelpers.interopDefault(_flagRuSvg);
var _flagGermanySvg = require("/src/public/images/flag-germany.svg");
var _flagGermanySvgDefault = parcelHelpers.interopDefault(_flagGermanySvg);
var _flagEngSvg = require("/src/public/images/flag-eng.svg");
var _flagEngSvgDefault = parcelHelpers.interopDefault(_flagEngSvg);
var _facebookSvg = require("/src/public/images/social-icon/Facebook.svg");
var _facebookSvgDefault = parcelHelpers.interopDefault(_facebookSvg);
var _instagramSvg = require("/src/public/images/social-icon/Instagram.svg");
var _instagramSvgDefault = parcelHelpers.interopDefault(_instagramSvg);
var _pinterestSvg = require("/src/public/images/social-icon/Pinterest.svg");
var _pinterestSvgDefault = parcelHelpers.interopDefault(_pinterestSvg);
var _telegramSvg = require("/src/public/images/social-icon/Telegram.svg");
var _telegramSvgDefault = parcelHelpers.interopDefault(_telegramSvg);
var _youtubeSvg = require("/src/public/images/social-icon/Youtube.svg");
var _youtubeSvgDefault = parcelHelpers.interopDefault(_youtubeSvg);
class Footer extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <footer class="bg-white">
        <div class="bg-[#F0F0F0]">
        <div class="email-subscription side-paddings">
            <div class="flex flex-col text-center lg:text-left">
                <div class="text-2xl font-bold whitespace-normal lg:whitespace-nowrap">\u{41F}\u{456}\u{434}\u{43F}\u{438}\u{448}\u{438}\u{441}\u{44C} \u{43D}\u{430} \u{43D}\u{43E}\u{432}\u{438}\u{43D}\u{438}</div>
                <div class="text-lg gray-text sm:mb-8 md:mb-8 lg:mb-0 whitespace-normal lg:whitespace-nowrap">\u{41C}\u{438} \u{43D}\u{430}\u{434}\u{441}\u{438}\u{43B}\u{430}\u{442}\u{438}\u{43C}\u{435}\u{43C}\u{43E} \u{442}\u{456}\u{43B}\u{44C}\u{43A}\u{438} \u{43A}\u{43E}\u{440}\u{438}\u{441}\u{43D}\u{435} :)</div>
            </div>
            <div class="w-full flex flex-col md:flex-row lg:flex-row gap-0 md:gap-5 lg:gap-5 md:justify-center lg:justify-end">
                <input type="email" placeholder="\u{412}\u{430}\u{448} email" class="email-input">
                <button class="subscribe-btn">\u{41F}\u{456}\u{434}\u{43F}\u{438}\u{441}\u{430}\u{442}\u{438}\u{441}\u{44C}</button>
            </div>
        </div>
        </div>

        <div class="main-footer side-paddings ">
            <div class="sm:mb-10 md:mb-0 lg:mb-0">
                <div class="font-bold text-xl mb-6">\u{41E}\u{43F}\u{443}\u{431}\u{43B}\u{456}\u{43A}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43E}\u{431}\u{2019}\u{454}\u{43A}\u{442}</div>
                <ul>
                    <li class="footer-contact">
                        <span class="gray-text">\u{417}\u{430} \u{442}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}\u{43E}\u{43C}</span>
                        <a href="tel:+380956480880">+38 (095) 648-0880</a>
                    </li>
                    <li class="footer-contact">
                        <span class="gray-text">E-mail</span>
                        <a href="mailto:info@go-to.rest">info@go-to.rest</a>
                    </li>
                    <li class="footer-contact">
                        <span class="gray-text">Telegram</span>
                        <a href="#">@infoGoToRest</a>
                    </li>
                </ul>
            </div>
            <div class="company">
                <div class="font-bold text-xl mb-6">\u{41A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{456}\u{44F}</div>
                <a href="#" class="footer-text">\u{42F}\u{43A} \u{441}\u{442}\u{430}\u{442}\u{438} \u{433}\u{456}\u{434}\u{43E}\u{43C}</a>
                <a href="#" class="footer-text">\u{41F}\u{440}\u{43E} \u{43D}\u{430}\u{441}</a>
                <a href="#" class="footer-text">\u{411}\u{43B}\u{43E}\u{433}</a>
            </div>
            <div class="rules">
                <div class="font-bold text-xl mb-6">\u{41F}\u{440}\u{430}\u{432}\u{438}\u{43B}\u{430}</div>
                <a href="#" class="footer-text">\u{41F}\u{43E}\u{43B}\u{456}\u{442}\u{438}\u{43A}\u{430} \u{43A}\u{43E}\u{43D}\u{444}\u{456}\u{434}\u{435}\u{43D}\u{446}\u{456}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{456}</a>
                <a href="#" class="footer-text">\u{423}\u{43C}\u{43E}\u{432}\u{438} \u{432}\u{438}\u{43A}\u{43E}\u{440}\u{438}\u{441}\u{442}\u{430}\u{43D}\u{43D}\u{44F}</a>
                <a href="#" class="footer-text">Cookies</a>
            </div>
            <div class="footer-icons">
                <a href="#">
                    <img src="${0, _facebookSvgDefault.default}" alt="Facebook">
                </a>
                <a href="#">
                    <img src="${0, _instagramSvgDefault.default}" alt="Instagram">
                </a>
                <a href="#">
                    <img src="${0, _pinterestSvgDefault.default}" alt="Pinterest">
                </a>
                <a href="#">
                    <img src="${0, _telegramSvgDefault.default}" alt="Telegram">
                </a>
                <a href="#">
                    <img src="${0, _youtubeSvgDefault.default}" alt="Youtube">
                </a> 
            </div>
        </div>

        <div class="copyright side-paddings">
            <div class="flex sm:mb-4 md:mb-4 lg:mb-0">
                <button type="button" class="leng mr-5" id="foo-leng">
                    <div class="uppercase text-base mr-1 text-secondary">ua</div>
                    <img src="${0, _flagUaSvgDefault.default}" alt="flag">
                </button>
                <button type="button" id="foo-currency">
                    <div class="money-select" id="foo-currency-data">uah</div>
                </button>
            </div>
            <ul id="foo-leng-menu" class="!hidden">
                <li>
                    <button type="button" class="leng" data-lang="ua">
                        <div class="leng-select">ua</div>
                        <img src="${0, _flagUaSvgDefault.default}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="ru">
                        <div class="leng-select">ru</div>
                        <img src="${0, _flagRuSvgDefault.default}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="de">
                        <div class="leng-select">de</div>
                        <img src="${0, _flagGermanySvgDefault.default}" alt="flag">
                    </button>
                </li>
                <li>
                    <button type="button" class="leng" data-lang="eng">
                        <div class="leng-select">eng</div>
                        <img src="${0, _flagEngSvgDefault.default}" alt="flag">
                    </button>
                </li>
            </ul>
            <ul id="foo-currency-menu" class="!hidden">
                <li>
                    <button type="button" class="currency">
                        <div class="currency-select">uan</div>
                    </button>
                </li>
                <li>
                    <button type="button" class="currency">
                        <div class="currency-select">eur</div>
                    </button>
                </li>
            </ul>
            <div class="text-secondary">
                <span>Copyright \xa9 2023 by</span>
                <a href="https://go-to.rest" class="underline">Go-To.Rest</a>
            </div>
        </div>
    </footer>
    `;
        const leng = document.getElementById("foo-leng");
        const lengMenu = document.getElementById("foo-leng-menu");
        const currency = document.getElementById("foo-currency");
        const currencyMenu = document.getElementById("foo-currency-menu");
        const currencyData = document.getElementById("foo-currency-data");
        currency.addEventListener("click", ()=>{
            currencyMenu.classList.toggle("!hidden");
        });
        leng.addEventListener("click", ()=>{
            lengMenu.classList.toggle("!hidden");
        });
        document.querySelectorAll("#foo-leng-menu li").forEach((item)=>{
            item.addEventListener("click", ()=>{
                const selectedLanguage = item.querySelector(".leng").innerHTML;
                leng.innerHTML = selectedLanguage;
                lengMenu.classList.add("!hidden");
            });
        });
        document.addEventListener("click", (e)=>{
            if (!leng.contains(e.target) && !lengMenu.contains(e.target)) lengMenu.classList.add("!hidden");
        });
        document.querySelectorAll("#foo-currency-menu li").forEach((item)=>{
            item.addEventListener("click", ()=>{
                const selectedCurrency = item.querySelector(".currency-select").textContent;
                currencyData.textContent = selectedCurrency;
                currencyMenu.classList.add("!hidden");
            });
        });
        document.addEventListener("click", (e)=>{
            if (!currency.contains(e.target) && !currencyMenu.contains(e.target)) currencyMenu.classList.add("!hidden");
        });
    }
}
customElements.define("footer-component", Footer);

},{"/src/public/images/flag-ua.svg":"hKy4y","/src/public/images/flag-ru.svg":"96MrU","/src/public/images/flag-germany.svg":"i2uoL","/src/public/images/flag-eng.svg":"dlxvX","/src/public/images/social-icon/Facebook.svg":"fzaUL","/src/public/images/social-icon/Instagram.svg":"dgKiC","/src/public/images/social-icon/Pinterest.svg":"7DOXq","/src/public/images/social-icon/Telegram.svg":"5ZUnQ","/src/public/images/social-icon/Youtube.svg":"gxJTy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fzaUL":[function(require,module,exports) {
module.exports = require("f8a16ec849261426").getBundleURL("lPpKD") + "Facebook.ea97961c.svg" + "?" + Date.now();

},{"f8a16ec849261426":"lgJ39"}],"dgKiC":[function(require,module,exports) {
module.exports = require("70b77c85c205b19c").getBundleURL("lPpKD") + "Instagram.b9fb9218.svg" + "?" + Date.now();

},{"70b77c85c205b19c":"lgJ39"}],"7DOXq":[function(require,module,exports) {
module.exports = require("ac0df65c887278ff").getBundleURL("lPpKD") + "Pinterest.f85588a2.svg" + "?" + Date.now();

},{"ac0df65c887278ff":"lgJ39"}],"5ZUnQ":[function(require,module,exports) {
module.exports = require("39568563c9c70351").getBundleURL("lPpKD") + "Telegram.1ed9f86f.svg" + "?" + Date.now();

},{"39568563c9c70351":"lgJ39"}],"gxJTy":[function(require,module,exports) {
module.exports = require("346a9d7a646a5e8").getBundleURL("lPpKD") + "Youtube.bb0d5165.svg" + "?" + Date.now();

},{"346a9d7a646a5e8":"lgJ39"}],"lGrr8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _arrowDownSvg = require("/src/public/images/icon-service/arrow-down.svg");
var _arrowDownSvgDefault = parcelHelpers.interopDefault(_arrowDownSvg);
var _sunsetPng = require("/src/public/images/sunset.png");
var _sunsetPngDefault = parcelHelpers.interopDefault(_sunsetPng);
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");
    const currentPage = window.location.pathname;
    if (currentPage === "/hotel.html") {
        const faqImg = document.querySelector(".faq-img");
        if (faqImg) faqImg.style.display = "none";
    }
    function togglePanel(panel) {
        const isOpen = panel.classList.contains("active");
        if (isOpen) {
            panel.classList.remove("active");
            panel.style.maxHeight = null;
            panel.previousElementSibling.querySelector(".orange-border").classList.add("hidden");
        } else {
            panel.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.previousElementSibling.querySelector(".orange-border").classList.remove("hidden");
        }
    }
    function closeOtherPanels(clickedPanel) {
        accordions.forEach((accordion)=>{
            const panel = accordion.nextElementSibling;
            if (accordion !== clickedPanel) {
                panel.classList.remove("active");
                panel.style.maxHeight = null;
                accordion.querySelector("img").style.transform = "rotate(0deg)";
                panel.previousElementSibling.querySelector(".orange-border").classList.add("hidden");
            }
        });
    }
    accordions.forEach((accordion, index)=>{
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            togglePanel(panel);
            closeOtherPanels(this);
            const rotation = panel.classList.contains("active") ? "180deg" : "0deg";
            this.querySelector("img").style.transform = `rotate(${rotation})`;
        });
        if (index === 1) {
            accordion.classList.add("active");
            const panel = accordion.nextElementSibling;
            panel.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
            accordion.querySelector("img").style.transform = "rotate(180deg)";
            panel.previousElementSibling.querySelector(".orange-border").classList.remove("hidden");
        }
    });
});
class Faq extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <h2 class="main-title">\u{41F}\u{43E}\u{448}\u{438}\u{440}\u{435}\u{43D}\u{456} \u{437}\u{430}\u{43F}\u{438}\u{442}\u{430}\u{43D}\u{43D}\u{44F}</h2>
            <div class="faq">
                <div class="w-full">
                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span>\u{42F}\u{43A}\u{430} \u{441}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{44F} \u{446}\u{456}\u{43D}\u{430} \u{433}\u{43E}\u{442}\u{435}\u{43B}\u{44E}?</span>
                        <img src="${0, _arrowDownSvgDefault.default}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span>\u{427}\u{43E}\u{43C}\u{443} \u{432}\u{430}\u{440}\u{442}\u{43E} \u{43E}\u{431}\u{440}\u{430}\u{442}\u{438} Go To Rest?</span>
                        <img src="${0, _arrowDownSvgDefault.default}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span>\u{42F}\u{43A}\u{430} \u{441}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{44F} \u{446}\u{456}\u{43D}\u{430} \u{433}\u{43E}\u{442}\u{435}\u{43B}\u{44E}?</span>
                        <img src="${0, _arrowDownSvgDefault.default}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span>\u{427}\u{43E}\u{43C}\u{443} \u{432}\u{430}\u{440}\u{442}\u{43E} \u{43E}\u{431}\u{440}\u{430}\u{442}\u{438} Go To Rest?</span>
                        <img src="${0, _arrowDownSvgDefault.default}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>

                    <button class="accordion">
                    <span class="orange-border hidden"></span>
                        <span>\u{42F}\u{43A}\u{430} \u{441}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{44F} \u{446}\u{456}\u{43D}\u{430} \u{433}\u{43E}\u{442}\u{435}\u{43B}\u{44E}?</span>
                        <img src="${0, _arrowDownSvgDefault.default}">
                    </button>
                    <div class="panel">
                        <p class="text-gray-500 mb-9 ml-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur</p>
                    </div>
                </div>
                <img src="${0, _sunsetPngDefault.default}" alt="img" class="faq-img">
            </div>
    `;
        this.addStructuredData();
    }
    addStructuredData() {
        const faqItems = Array.from(this.querySelectorAll(".accordion")).map((accordion, index)=>{
            const question = accordion.querySelector("span:first-child").innerText.trim();
            const answer = accordion.nextElementSibling.querySelector(".panel p").innerText.trim();
            return {
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answer
                }
            };
        });
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(structuredData);
        this.appendChild(script);
    }
}
customElements.define("faq-component", Faq);

},{"/src/public/images/icon-service/arrow-down.svg":"3B6uj","/src/public/images/sunset.png":"dOTRI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3B6uj":[function(require,module,exports) {
module.exports = require("953036984fd51b63").getBundleURL("lPpKD") + "arrow-down.2668bb07.svg" + "?" + Date.now();

},{"953036984fd51b63":"lgJ39"}],"dOTRI":[function(require,module,exports) {
module.exports = require("c2be442538ad16ef").getBundleURL("lPpKD") + "sunset.5a8199af.png" + "?" + Date.now();

},{"c2be442538ad16ef":"lgJ39"}],"cumXt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _xSvg = require("/src/public/images/icon-service/x.svg");
var _xSvgDefault = parcelHelpers.interopDefault(_xSvg);
var _tablerIconCircleCheckJpg = require("/src/public/images/tabler-icon-circle-check.jpg");
var _tablerIconCircleCheckJpgDefault = parcelHelpers.interopDefault(_tablerIconCircleCheckJpg);
var _avaJpg = require("/src/public/images/ava.jpg");
var _avaJpgDefault = parcelHelpers.interopDefault(_avaJpg);
var _iconPhoneSvg = require("/src/public/images/icon-service/icon-phone.svg");
var _iconPhoneSvgDefault = parcelHelpers.interopDefault(_iconPhoneSvg);
class BookingForm extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="sidebar">
                <div class="price hidden lg:block">\u{432}\u{456}\u{434} <span>300 \u{20B4}</span>/ \u{43D}\u{456}\u{447}</div>
                <form id="booking-form" class="form-hotel" action="#">
                    <div class="name-form hidden lg:block">\u{411}\u{440}\u{43E}\u{43D}\u{44E}\u{432}\u{430}\u{43D}\u{43D}\u{44F}</div>
                    <div class="relative">
                    <div class="flex flex-row">
                        <div class="item-form w-full">
                            <label for="check-in-date" class="text-left">\u{41F}\u{440}\u{438}\u{431}\u{443}\u{442}\u{442}\u{44F}</label>
                            <input id="check-in-date" type="text" class="w-full !rounded-r-none !border-r-0 text-sm !pr-2" placeholder="01.01.2024" readonly>
                        </div>
                        <div class="item-form !rounded-l-none w-full">
                            <label for="check-out-date" class="text-right pr-2">\u{412}\u{438}\u{457}\u{437}\u{434}</label>
                            <input id="check-out-date" type="text" class="w-full !rounded-l-none" placeholder="02.01.2024" readonly>
                        </div>
                        
                    </div>
                    <div class="calendar !hidden" id="calendar">
                        <div class="flex flex-row  justify-between">
                        <div class="month" id="prevMonth">
                            <div class="flex flex-row items-center pb-5 justify-between lg:justify-start">
                                <button class="prevMonthBtn calendar-button mr-10" type="button"><</button>
                                <div class="month-name"></div>
                                <button class="nextMonthBtn calendar-button ml-10 block lg:hidden" type="button">></button>
                            </div>
                            <div class="days">
                                <div class="day">\u{412}\u{441}</div>
                                <div class="day">\u{41F}\u{43D}</div>
                                <div class="day">\u{412}\u{442}</div>
                                <div class="day">\u{421}\u{440}</div>
                                <div class="day">\u{427}\u{442}</div>
                                <div class="day">\u{41F}\u{442}</div>
                                <div class="day">\u{421}\u{431}</div>
                            </div>
                            <div class="date"></div>
                        </div>
                        <div class="month" id="nextMonth">
                            <div class="flex flex-row items-center pb-5 justify-end">
                                <div class="month-name"></div>
                                <button class="nextMonthBtn calendar-button ml-10" type="button">></button>
                            </div>
                            <div class="days">
                                <div class="day">\u{412}\u{441}</div>
                                <div class="day">\u{41F}\u{43D}</div>
                                <div class="day">\u{412}\u{442}</div>
                                <div class="day">\u{421}\u{440}</div>
                                <div class="day">\u{427}\u{442}</div>
                                <div class="day">\u{41F}\u{442}</div>
                                <div class="day">\u{421}\u{431}</div>
                            </div>
                            <div class="date"></div>
                        </div>
                        </div>
                        <div id="calendar-error" class="text-sm text-red-500 hidden !pt-4">\u{414}\u{430}\u{442}\u{430} \u{432}\u{438}\u{457}\u{437}\u{434}\u{443} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{431}\u{456}\u{43B}\u{44C}\u{448}\u{43E}\u{44E} \u{437}\u{430} \u{434}\u{430}\u{442}\u{443} \u{437}\u{430}\u{457}\u{437}\u{434}\u{443}.</div>
                    </div>
                    <span class="dates-error-message text-red-500 mt-4 hidden">\u{426}\u{456} \u{43F}\u{43E}\u{43B}\u{44F} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{456}</span>
                    </div>
                    <div class="item-form relative">
                        <label for="guests">\u{413}\u{43E}\u{441}\u{442}\u{456}</label>
                        <div id="guests" class="w-full bg-white px-5 py-3 rounded-md border-2 border-gray-300 cursor-pointer flex flex-row justify-between items-center">
                            <span id="total-guests">1 \u{413}\u{456}\u{441}\u{442}\u{44C}</span>
                            <span class="text-2xl rotate-90" id="toggle-icon">></span>
                        </div>
                        <div id="guests-info" class="absolute bg-white rounded-md p-5 w-full lg:w-[260px] shadow-md hidden mt-[100px]">
                            <ul class="flex flex-col gap-6">
                                <li class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">\u{414}\u{43E}\u{440}\u{43E}\u{441}\u{43B}\u{456}</span>
                                        <span class="text-gray-500">\u{412}\u{456}\u{434} 13 \u{440}\u{43E}\u{43A}\u{456}\u{432}</span>
                                    </div>
                                    <div class="flex flex-row gap-3 items-center">
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="decrease-adults">-</button>
                                        <span id="adults">1</span>
                                        <button  type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="increase-adults">+</button>
                                    </div>
                                </li>
                                <li class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">\u{414}\u{456}\u{442}\u{438}</span>
                                        <span class="text-gray-500">2 - 12 \u{440}\u{43E}\u{43A}\u{456}\u{432}</span>
                                    </div>
                                    <div class="flex flex-row gap-3 items-center">
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="decrease-children">-</button>
                                        <span id="children">0</span>
                                        <button  type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="increase-children">+</button>
                                    </div>
                                </li>
                                <li class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">\u{41D}\u{435}\u{43C}\u{43E}\u{432}\u{43B}\u{44F}</span>
                                        <span class="text-gray-500">\u{41C}\u{43E}\u{43B}\u{43E}\u{434}\u{448}\u{435} 2</span>
                                    </div>
                                    <div class="flex flex-row gap-3 items-center">
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="decrease-infants">-</button>
                                        <span id="infants">0</span>
                                        <button  type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="increase-infants">+</button>
                                    </div>
                                </li>
                                <li class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col gap-1">
                                        <span class="font-bold">\u{414}\u{43E}\u{43C}\u{430}\u{448}\u{43D}\u{456} \u{443}\u{43B}\u{44E}\u{431}\u{43B}\u{435}\u{43D}\u{446}\u{456}</span>
                                    </div>
                                    <div class="flex flex-row gap-3 items-center">
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="decrease-pets">-</button>
                                        <span id="pets">0</span>
                                        <button type="button" class="border-2 rounded-full w-8 h-8 cursor-pointer border-gray-400 text-gray-400" id="increase-pets">+</button>
                                    </div>
                                </li>
                                <li class="text-sm text-gray-500">
                                    \u{41F}\u{43E}\u{43C}\u{435}\u{448}\u{43A}\u{430}\u{43D}\u{43D}\u{44F} \u{440}\u{43E}\u{437}\u{440}\u{430}\u{445}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{43C}\u{430}\u{43A}\u{441}\u{438}\u{43C}\u{443}\u{43C} \u{43D}\u{430} 4 \u{43E}\u{441}\u{43E}\u{431}\u{438}. \u{42F}\u{43A}\u{449}\u{43E} \u{432}\u{438} \u{43F}\u{43B}\u{430}\u{43D}\u{443}\u{454}\u{442}\u{435} \u{43F}\u{440}\u{438}\u{432}\u{435}\u{437}\u{442}\u{438} \u{431}\u{456}\u{43B}\u{44C}\u{448}\u{435} 2 \u{443}\u{43B}\u{44E}\u{431}\u{43B}\u{435}\u{43D}\u{446}\u{456}\u{432}, \u{43F}\u{43E}\u{432}\u{456}\u{434}\u{43E}\u{43C}\u{442}\u{435} \u{43F}\u{440}\u{43E} \u{446}\u{435} \u{432}\u{43B}\u{430}\u{441}\u{43D}\u{438}\u{43A}\u{430}.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-form">
                        <label for="mphone">\u{412}\u{430}\u{448} \u{43D}\u{43E}\u{43C}\u{435}\u{440} \u{442}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}\u{443}</label>
                        <input id="mphone" type="tel" class="w-full" name="mphone" required placeholder="+380XXXXXXXXX">
                        <span class="error-message">\u{412}\u{432}\u{435}\u{434}\u{456}\u{442}\u{44C} \u{434}\u{456}\u{439}\u{441}\u{43D}\u{438}\u{439} \u{43D}\u{43E}\u{43C}\u{435}\u{440} \u{442}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}\u{443}</span>
                    </div>
                    <button class="btn-add" type="submit">\u{411}\u{440}\u{43E}\u{43D}\u{44E}\u{432}\u{430}\u{442}\u{438}</button>
                    <div id="booking-overlay">
                    <div id="success-popup">
                        <div class="flex justify-end absolute top-4 right-4 hidden">
                            <img src=${0, _xSvgDefault.default} alt="close">
                        </div>
                        <img src=${0, _tablerIconCircleCheckJpgDefault.default} alt="img" class="mx-auto w-20 h-20 mb-5">
                        <div class="text-3xl lg:text-5xl mb-7">\u{427}\u{443}\u{434}\u{43E}\u{432}\u{43E}!</div>
                        <p class="text-lg lg:text-xl text-gray-600 mb-10 px-8">\u{417}\u{430}\u{44F}\u{432}\u{43A}\u{443} \u{43D}\u{430} \u{431}\u{440}\u{43E}\u{43D}\u{44E}\u{432}\u{430}\u{43D}\u{43D}\u{44F} \u{43D}\u{430}\u{434}\u{456}\u{441}\u{43B}\u{430}\u{43D}\u{43E} \u{443}\u{441}\u{43F}\u{456}\u{448}\u{43D}\u{43E}. </br>\u{41C}\u{438} \u{437}\u{430}\u{442}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}\u{443}\u{454}\u{43C}\u{43E} \u{412}\u{430}\u{43C} \u{434}\u{43B}\u{44F} \u{443}\u{442}\u{43E}\u{447}\u{43D}\u{435}\u{43D}\u{43D}\u{44F} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{435}\u{439} \u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{433}\u{43E}\u{43C} 10 \u{445}\u{432}\u{438}\u{43B}\u{438}\u{43D}</p>
                        <button class="main-btn" id="close-popup">\u{417}\u{430}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{432}\u{456}\u{43A}\u{43D}\u{43E}</button>
                    </div>
                </div>
                </form>
                <div class="avtor hidden lg:flex">
                    <img src=${0, _avaJpgDefault.default} alt="avatar">
                    <div>
                        <div class="name-avtor">\u{412}\u{456}\u{43A}\u{442}\u{43E}\u{440}\u{456}\u{44F}</div>
                        <div class="status-avtor">\u{423}\u{447}\u{430}\u{441}\u{43D}\u{438}\u{43A} \u{437} 2022</div>
                    </div>
                </div>
                <div class="contact hidden lg:block">
                    <div class="text-xl mb-2">\u{41A}\u{43E}\u{43D}\u{442}\u{430}\u{43A}\u{442}\u{438}</div>
                    <div class="contact-tel">
                        <img src=${0, _iconPhoneSvgDefault.default} alt="icon">
                        <a href="tel:+380672170985" class="text-base ml-2 text-secondary">+38 (067) 217 09 85</a>
                    </div>
                </div>
            </div>
            
    `;
        document.querySelectorAll(".form-hotel").forEach((bookingFormElement)=>{
            const bookingForm = bookingFormElement;
            const bookingOverlay = bookingForm.querySelector("#booking-overlay");
            const popup = bookingOverlay.querySelector("#close-popup");
            const checkInDateInput = bookingForm.querySelector("#check-in-date");
            const checkOutDateInput = bookingForm.querySelector("#check-out-date");
            const checkOutDateErrorMessage = checkOutDateInput.nextElementSibling;
            const guestsField = bookingForm.querySelector("#guests");
            const guestsInfo = bookingForm.querySelector("#guests-info");
            const closeInfo = bookingForm.querySelector("#close-info");
            const toggleIcon = bookingForm.querySelector("#toggle-icon");
            const calendar = bookingForm.querySelector("#calendar");
            const prevMonthElement = calendar.querySelector("#prevMonth");
            const nextMonthElement = calendar.querySelector("#nextMonth");
            const calendarErrorMessage = calendar.querySelector("#calendar-error");
            const datesError = bookingForm.querySelector(".dates-error-message");
            checkInDateInput.addEventListener("click", ()=>{
                calendar.classList.remove("!hidden");
                checkInDateInput.focus();
                checkInDateInput.classList.add("active-outline");
                checkOutDateInput.classList.remove("active-outline");
            });
            checkOutDateInput.addEventListener("click", ()=>{
                calendar.classList.remove("!hidden");
                checkOutDateInput.focus();
                checkOutDateInput.classList.add("active-outline");
                checkInDateInput.classList.remove("active-outline");
            });
            document.addEventListener("click", (event)=>{
                if (!calendar.contains(event.target) && !checkInDateInput.contains(event.target) && !checkOutDateInput.contains(event.target)) calendar.classList.add("!hidden");
            });
            if (!guestsField.hasEventListener) {
                guestsField.addEventListener("click", ()=>{
                    guestsInfo.classList.toggle("hidden");
                    toggleIcon.classList.toggle("rotate-[270deg]");
                });
                guestsField.hasEventListener = true;
            }
            document.addEventListener("click", (event)=>{
                if (!guestsInfo.contains(event.target) && !guestsField.contains(event.target)) {
                    guestsInfo.classList.add("hidden");
                    toggleIcon.classList.remove("rotate-[270deg]");
                }
            });
            function showPopup() {
                bookingOverlay.style.display = "block";
            }
            function handleFormSubmit(event) {
                event.preventDefault();
                if (!bookingForm.checkValidity()) return;
                if (checkInDateInput.value === "" || checkOutDateInput === "") {
                    datesError.classList.remove("hidden");
                    return;
                }
                showPopup();
                const submitTimeout = setTimeout(()=>{
                    bookingForm.submit();
                    console.log("submit");
                }, 30000);
                popup.addEventListener("click", ()=>{
                    bookingOverlay.style.display = "none";
                    clearTimeout(submitTimeout);
                    bookingForm.submit();
                });
            }
            bookingForm.addEventListener("submit", handleFormSubmit);
            popup.addEventListener("click", ()=>{
                bookingOverlay.style.display = "none";
            });
            const phoneInput = bookingForm.querySelector("#mphone");
            phoneInput.addEventListener("input", ()=>{
                const phoneNumber = phoneInput.value;
                const isValidPhoneNumber = /^[\d+()-]*$/.test(phoneNumber);
                if (!isValidPhoneNumber) phoneInput.setCustomValidity("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u043E\u043C\u0435\u0440\u0443");
                else phoneInput.setCustomValidity("");
            });
            const requiredInputs = bookingForm.querySelectorAll(".form-hotel input[required]");
            requiredInputs.forEach((input)=>{
                input.addEventListener("invalid", ()=>{
                    input.nextElementSibling.style.display = "block";
                });
                if (input !== checkOutDateInput) input.addEventListener("blur", ()=>{
                    input.nextElementSibling.style.display = input.checkValidity() ? "none" : "block";
                });
            });
            //guests counter
            function initCounter(form) {
                let adults = 1;
                let children = 0;
                let infants = 0;
                let pets = 0;
                form.querySelector("#increase-adults").addEventListener("click", ()=>{
                    if (adults < 5) {
                        adults++;
                        updateCounter(form);
                    }
                });
                form.querySelector("#decrease-adults").addEventListener("click", ()=>{
                    if (adults > 0) {
                        adults--;
                        updateCounter(form);
                    }
                });
                form.querySelector("#increase-children").addEventListener("click", ()=>{
                    if (children < 5) {
                        children++;
                        updateCounter(form);
                    }
                });
                form.querySelector("#decrease-children").addEventListener("click", ()=>{
                    if (children > 0) {
                        children--;
                        updateCounter(form);
                    }
                });
                form.querySelector("#increase-infants").addEventListener("click", ()=>{
                    if (infants < 5) {
                        infants++;
                        updateCounter(form);
                    }
                });
                form.querySelector("#decrease-infants").addEventListener("click", ()=>{
                    if (infants > 0) {
                        infants--;
                        updateCounter(form);
                    }
                });
                form.querySelector("#increase-pets").addEventListener("click", ()=>{
                    if (pets < 5) {
                        pets++;
                        updateCounter(form);
                    }
                });
                form.querySelector("#decrease-pets").addEventListener("click", ()=>{
                    if (pets > 0) {
                        pets--;
                        updateCounter(form);
                    }
                });
                function updateCounter(form) {
                    form.querySelector("#adults").innerText = adults;
                    form.querySelector("#children").innerText = children;
                    form.querySelector("#infants").innerText = infants;
                    form.querySelector("#pets").innerText = pets;
                    let totalGuests = adults + children;
                    let totalGuestsText = "";
                    if (totalGuests > 1) totalGuestsText += `${totalGuests} \u{413}\u{43E}\u{441}\u{442}\u{435}\u{439}`;
                    else if (totalGuests === 1) totalGuestsText += `${totalGuests} \u{413}\u{456}\u{441}\u{442}\u{44C}`;
                    if (infants > 1) totalGuestsText += `, ${infants} \u{41D}\u{435}\u{43C}\u{43E}\u{432}\u{43B}\u{44F}\u{442}`;
                    else if (infants === 1) totalGuestsText += `, ${infants} \u{41D}\u{435}\u{43C}\u{43E}\u{432}\u{43B}\u{44F}`;
                    if (pets > 1) totalGuestsText += `, ${pets} \u{414}\u{43E}\u{43C}\u{430}\u{448}\u{43D}\u{456}\u{445} \u{443}\u{43B}\u{44E}\u{431}\u{43B}\u{435}\u{43D}\u{446}\u{456}\u{432}`;
                    else if (pets === 1) totalGuestsText += `, ${pets} \u{414}\u{43E}\u{43C}\u{430}\u{448}\u{43D}\u{456}\u{439} \u{443}\u{43B}\u{44E}\u{431}\u{43B}\u{435}\u{43D}\u{435}\u{446}\u{44C}`;
                    form.querySelector("#total-guests").innerText = totalGuestsText;
                }
            }
            initCounter(bookingForm);
            //calendar
            const months = [
                "\u0421\u0456\u0447\u0435\u043D\u044C",
                "\u041B\u044E\u0442\u0438\u0439",
                "\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C",
                "\u041A\u0432\u0456\u0442\u0435\u043D\u044C",
                "\u0422\u0440\u0430\u0432\u0435\u043D\u044C",
                "\u0427\u0435\u0440\u0432\u0435\u043D\u044C",
                "\u041B\u0438\u043F\u0435\u043D\u044C",
                "\u0421\u0435\u0440\u043F\u0435\u043D\u044C",
                "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C",
                "\u0416\u043E\u0432\u0442\u0435\u043D\u044C",
                "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434",
                "\u0413\u0440\u0443\u0434\u0435\u043D\u044C"
            ];
            let currentMonth = new Date().getMonth();
            let currentYear = new Date().getFullYear();
            let prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
            let prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
            renderMonth(prevMonthElement, prevMonthIndex, prevYear);
            renderMonth(nextMonthElement, currentMonth, currentYear);
            let mouseHoveredDate = null;
            function renderMonth(container, month, year) {
                const monthName = months[month];
                const totalDays = new Date(year, month + 1, 0).getDate();
                const firstDayIndex = new Date(year, month, 1).getDay();
                container.querySelector(".month-name").textContent = `${monthName} ${year}`;
                const dateContainer = container.querySelector(".date");
                dateContainer.innerHTML = "";
                for(let i = 0; i < firstDayIndex; i++){
                    const dateDiv = document.createElement("div");
                    dateDiv.textContent = "";
                    dateContainer.appendChild(dateDiv);
                }
                for(let i = 1; i <= totalDays; i++){
                    const dateDiv = document.createElement("div");
                    dateDiv.textContent = i;
                    dateContainer.appendChild(dateDiv);
                    dateDiv.addEventListener("click", (event)=>{
                        const clickedDate = new Date(year, month, i);
                        const yearString = clickedDate.getFullYear().toString();
                        const monthString = (clickedDate.getMonth() + 1).toString().padStart(2, "0");
                        const dateString = clickedDate.getDate().toString().padStart(2, "0");
                        const formattedDate = `${dateString}.${monthString}.${yearString}`;
                        if (!checkInDateInput.value || checkOutDateInput.value) {
                            document.querySelectorAll(".selected-date").forEach((selectedDate)=>{
                                selectedDate.classList.remove("selected-date");
                            });
                            checkInDateInput.value = formattedDate;
                            checkOutDateInput.value = "";
                            dateDiv.classList.add("selected-date");
                            checkOutDateInput.classList.add("active-outline");
                            checkInDateInput.classList.remove("active-outline");
                        } else if (!checkOutDateInput.value) {
                            const checkOutDate = new Date(year, month, i);
                            const checkInDate = new Date(checkInDateInput.value.split(".").reverse().join("-"));
                            if (checkOutDate > checkInDate) {
                                checkOutDateInput.value = formattedDate;
                                dateDiv.classList.add("selected-date");
                                calendarErrorMessage.classList.add("hidden");
                                calendar.classList.add("!hidden");
                                checkOutDateInput.classList.remove("active-outline");
                            } else calendarErrorMessage.classList.remove("hidden");
                        }
                    });
                }
            }
            document.querySelectorAll(".calendar .date").forEach((dateContainer)=>{
                dateContainer.addEventListener("mouseover", (event)=>{
                    const checkInDateInput = document.querySelector("#check-in-date");
                    const checkInDate = checkInDateInput.value;
                    const checkOutDateInput = document.querySelector("#check-out-date");
                    const checkOutDate = checkOutDateInput.value;
                    const hoveredDateDiv = event.target;
                    const year = parseInt(hoveredDateDiv.closest(".month").querySelector(".month-name").textContent.split(" ")[1]);
                    const monthIndex = months.indexOf(hoveredDateDiv.closest(".month").querySelector(".month-name").textContent.split(" ")[0]);
                    const day = parseInt(hoveredDateDiv.textContent);
                    const hoveredDate = new Date(year, monthIndex, day);
                    highlightDateRange(checkInDate, checkOutDate, hoveredDate);
                });
            });
            function highlightDateRange(checkinDate, checkOutDate, hoverDate) {
                const checkin = new Date(checkinDate.split(".").reverse().join("-"));
                const dateContainers = document.querySelectorAll(".calendar .date");
                dateContainers.forEach((dateContainer)=>{
                    dateContainer.childNodes.forEach((dateElement)=>{
                        const year = parseInt(dateContainer.closest(".month").querySelector(".month-name").textContent.split(" ")[1]);
                        const monthIndex = months.indexOf(dateContainer.closest(".month").querySelector(".month-name").textContent.split(" ")[0]);
                        const day = parseInt(dateElement.textContent);
                        const currentDate = new Date(year, monthIndex, day);
                        if (checkin <= currentDate && currentDate <= hoverDate) dateElement.classList.add("bg-orange-100");
                        else dateElement.classList.remove("bg-orange-100");
                    });
                });
            }
            const prevBtn = bookingForm.querySelector(".prevMonthBtn");
            const nextBtns = bookingForm.querySelectorAll(".nextMonthBtn");
            prevBtn.addEventListener("click", ()=>{
                if (currentMonth !== new Date().getMonth()) {
                    currentMonth--;
                    if (currentMonth < 0) {
                        currentMonth = 11;
                        currentYear--;
                    }
                }
                prevBtn.disabled = currentMonth === new Date().getMonth();
                prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
                prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
                renderMonth(prevMonthElement, prevMonthIndex, prevYear);
                renderMonth(nextMonthElement, currentMonth, currentYear);
            });
            nextBtns.forEach((nextBtn)=>{
                nextBtn.addEventListener("click", ()=>{
                    currentMonth++;
                    if (currentMonth > 11) {
                        currentMonth = 0;
                        currentYear++;
                    }
                    prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
                    prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
                    renderMonth(prevMonthElement, prevMonthIndex, prevYear);
                    renderMonth(nextMonthElement, currentMonth, currentYear);
                    prevBtn.disabled = false;
                });
            });
        });
    }
}
customElements.define("booking-form", BookingForm);

},{"/src/public/images/icon-service/x.svg":"aTaZM","/src/public/images/tabler-icon-circle-check.jpg":"jSnJE","/src/public/images/ava.jpg":"6aPYr","/src/public/images/icon-service/icon-phone.svg":"3wlKs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTaZM":[function(require,module,exports) {
module.exports = require("8be006094fc54395").getBundleURL("lPpKD") + "x.acf30730.svg" + "?" + Date.now();

},{"8be006094fc54395":"lgJ39"}],"jSnJE":[function(require,module,exports) {
module.exports = require("348aee9e0db3b099").getBundleURL("lPpKD") + "tabler-icon-circle-check.d5be7096.jpg" + "?" + Date.now();

},{"348aee9e0db3b099":"lgJ39"}],"6aPYr":[function(require,module,exports) {
module.exports = require("9d681fd6d64a91fa").getBundleURL("lPpKD") + "ava.2ed8f9a9.jpg" + "?" + Date.now();

},{"9d681fd6d64a91fa":"lgJ39"}],"3wlKs":[function(require,module,exports) {
module.exports = require("c796df223a137d95").getBundleURL("lPpKD") + "icon-phone.531f9a57.svg" + "?" + Date.now();

},{"c796df223a137d95":"lgJ39"}],"aLN1w":[function(require,module,exports) {
class addObjectForm extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="slider-overlay hidden" id="add-object-overlay">
            <div id="add-hotel-popup" class="add-hotel-popup">
                <p class="text-right cursor-pointer text-xl text-orange-700" id="close-form">&#x2715;</p>
                <h1 class="text-xl md:text-xl lg:text-3xl font-bold text-center mb-8">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43E}\u{431}'\u{454}\u{43A}\u{442} \u{434}\u{43E} \u{43A}\u{430}\u{442}\u{430}\u{43B}\u{43E}\u{433}\u{443}</h1>
                <form action="#" id="addHotelForm">

                    <div class="tab">
                            <div class="add-form-field">
                            <label for="name"><span class="required">*</span>\u{412}\u{430}\u{448}\u{435} \u{456}\u{43C}\u{2019}\u{44F}</label>
                            <input id="name" type="text" minlength="1" max="30" required></input>
                            <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                        </div>
                        <div class="add-form-field">
                            <label for="phone"><span class="required">*</span>\u{41D}\u{43E}\u{43C}\u{435}\u{440} \u{442}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}\u{443}</label>
                            <input id="phone" type="text" placeholder="+380XXXXXXXXX" required></input>
                            <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                        </div>
                        <div class="add-form-field">
                            <label for="hotel-name"><span class="required">*</span>\u{41D}\u{430}\u{437}\u{432}\u{430} \u{43E}\u{431}'\u{454}\u{43A}\u{442}\u{443}</label>
                            <input id="hotel-name" type="text" minlength="1" maxlength="40" required></input>
                            <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                        </div>
                        <div class="add-form-field">
                            <label for="address"><span class="required">*</span>\u{410}\u{434}\u{440}\u{435}\u{441}\u{430}</label>
                            <input id="address" type="text" minlength="1" maxlength="100" required></input>
                            <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                        </div>
                    </div>

                    <div class="tab">
                        <div class="flex flex-col">
                            <p class="pb-8 text-lg font-bold">\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{442}\u{438}\u{43F} \u{432}\u{430}\u{448}\u{43E}\u{433}\u{43E} \u{43E}\u{431}'\u{454}\u{43A}\u{442}\u{443}:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 ">
                                <div>
                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="hotel" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>\u{413}\u{43E}\u{442}\u{435}\u{43B}\u{44C}</span>
                                    </label>

                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="sadiba" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>\u{421}\u{430}\u{434}\u{438}\u{431}\u{430}</span>
                                    </label>

                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="kompleks" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>\u{422}\u{443}\u{440}\u{438}\u{441}\u{442}\u{438}\u{447}\u{43D}\u{438}\u{439} \u{43A}\u{43E}\u{43C}\u{43F}\u{43B}\u{435}\u{43A}\u{441}</span>
                                    </label>
                                </div>
                                <div>
                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="sanatoriy" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>\u{421}\u{430}\u{43D}\u{430}\u{442}\u{43E}\u{440}\u{456}\u{439}</span>
                                    </label>

                                    <label class="flex gap-4 items-center mb-3">
                                        <input type="radio" name="estate" value="hostel" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>\u{425}\u{43E}\u{441}\u{442}\u{435}\u{43B}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div id="hostel" class="flex flex-col pb-7 slot">
                            <h3 class="details">\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{44C}\u{43D}\u{443} \u{456}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{456}\u{44E} \u{434}\u{43B}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}:</h3>
                            <div class="flex flex-col gap-3">
                                <div class="flex flex-row justify-between items-center">
                                    <label>\u{41A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{43A}\u{456}\u{43C}\u{43D}\u{430}\u{442}</label>
                                    <input class="w-20 h-10" type="number" id="hostel-rooms-quantity" placeholder="0" min="1">
                                    <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                </div>
                                <div class="flex flex-row justify-between items-center">
                                    <label>\u{41C}\u{430}\u{43A}\u{441}\u{438}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{430} \u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{43B}\u{44E}\u{434}\u{435}\u{439} \u{432} \u{43A}\u{456}\u{43C}\u{43D}\u{430}\u{442}\u{456}</label>
                                    <input class="w-20 h-10" type="number" id="hostel-people-quantity" placeholder="0" min="1">
                                    <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                </div>
                            </div>
                        </div>
                        <div id="sanatoriy" class="flex flex-col pb-7 slot">
                            <h3 class="details">\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{44C}\u{43D}\u{443} \u{456}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{456}\u{44E} \u{434}\u{43B}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}:</h3>
                            <div class="flex flex-row justify-between item-center">
                                <h4 class="text-xl text-orange-400  text-center">\u{420}\u{43E}\u{437}\u{434}\u{456}\u{43B} \u{432} \u{440}\u{43E}\u{437}\u{440}\u{43E}\u{431}\u{446}\u{456}</h4>
                            </div>
                        </div>
                        <div id="kompleks" class="flex flex-col pb-7 slot">
                            <h3 class="details">\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{44C}\u{43D}\u{443} \u{456}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{456}\u{44E} \u{434}\u{43B}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}:</h3>
                            <div class="flex flex-row justify-between item-center">
                                <h4 class="text-xl text-orange-400 text-center">\u{420}\u{43E}\u{437}\u{434}\u{456}\u{43B} \u{432} \u{440}\u{43E}\u{437}\u{440}\u{43E}\u{431}\u{446}\u{456}</h4>
                            </div>
                        </div>
                        <div id="sadiba" class="flex flex-col pb-7 slot">
                            <h3 class="details">\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{44C}\u{43D}\u{443} \u{456}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{456}\u{44E} \u{434}\u{43B}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}</h3>
                            <div class="flex flex-col justify-between item-center">
                                <div class="flex justify-between mb-5">
                                    <label class="flex items-center">
                                        <input type="radio" name="sadiba_book" value="fully" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span class="ml-2">\u{417}\u{434}\u{430}\u{454}\u{442}\u{44C}\u{441}\u{44F} \u{43F}\u{43E}\u{432}\u{43D}\u{456}\u{441}\u{442}\u{44E}</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="sadiba_book" value="part" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span class="ml-2">\u{417}\u{434}\u{430}\u{454}\u{442}\u{44C}\u{441}\u{44F} \u{447}\u{430}\u{441}\u{442}\u{43A}\u{43E}\u{432}\u{43E}</span>
                                    </label>
                                </div>
                                <div class="flex flex-col gap-3">
                                    <div class="flex flex-row justify-between items-center">
                                        <label>\u{41A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{43A}\u{456}\u{43C}\u{43D}\u{430}\u{442}</label>
                                        <input class="w-20 h-10" type="number" id="sadiba-rooms-quantity" placeholder="0" min="1">
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center">
                                        <label>\u{41C}\u{430}\u{43A}\u{441}\u{438}\u{43C}\u{430}\u{43B}\u{44C}\u{43D}\u{430} \u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{43B}\u{44E}\u{434}\u{435}\u{439} \u{434}\u{43B}\u{44F} \u{43F}\u{440}\u{43E}\u{436}\u{438}\u{432}\u{430}\u{43D}\u{43D}\u{44F}</label>
                                        <input class="w-20 h-10" type="number" id="sadiba-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="hotel" class="flex flex-col pb-7 slot">
                            <h3 class="details">\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{434}\u{435}\u{442}\u{430}\u{43B}\u{44C}\u{43D}\u{443} \u{456}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{456}\u{44E} \u{434}\u{43B}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}:</h3>
                            <div class="flex flex-col justify-center item-center">
                                <div class="flex flex-col md:flex-row lg:flex-row sm:gap-4 justify-between justify-items-center mb-5">
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" id="lux" class="form-checkbox h-5 w-5 text-orange-700 ">
                                        <span>\u{41D}\u{43E}\u{43C}\u{435}\u{440} \u{43A}\u{43B}\u{430}\u{441}\u{441}\u{443} "\u{41B}\u{44E}\u{43A}\u{441}"</span>
                                    </label>
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" id="pivlux" class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>\u{41D}\u{43E}\u{43C}\u{435}\u{440} \u{43A}\u{43B}\u{430}\u{441}\u{443} "\u{41F}\u{456}\u{432}-\u{41B}\u{44E}\u{43A}\u{441}"</span>
                                    </label>
                                    <label class="flex items-center gap-3">
                                        <input type="checkbox" id="standart"class="form-checkbox h-5 w-5 text-blue-600">
                                        <span>\u{41D}\u{43E}\u{43C}\u{435}\u{440} \u{43A}\u{43B}\u{430}\u{441}\u{443} "\u{421}\u{442}\u{430}\u{43D}\u{434}\u{430}\u{440}\u{442}"</span>
                                    </label>
                                </div>
                                <div id="active_lux" class="flex flex-col active">
                                    <div class="flex flex-row justify-between items-center mb-3">
                                        <label>\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{456}\u{432} \u{43A}\u{43B}\u{430}\u{441}\u{443} '\u{41B}\u{44E}\u{43A}\u{441}'</label>
                                        <input class="w-20 h-8" type="number" id="lux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mb-6">
                                        <label>\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{432}\u{43C}\u{435}\u{441}\u{442}\u{438}\u{43C}\u{456}\u{441}\u{442}\u{44C} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{443}</label>
                                        <input class="w-20 h-8" type="number" id="lux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <label>\u{41D}\u{430}\u{434}\u{430}\u{439}\u{442}\u{435} \u{43E}\u{43F}\u{438}\u{441} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{443} '\u{41B}\u{44E}\u{43A}\u{441}':</label>
                                        <textarea name="about-lux" rows="3" class="p-1" resize-none></textarea>
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <!-- <div class="flex flex-row mt-4">
                                        <input type="file" id="file" class="hidden" multiple="true" accept=".png,.jpg,.jpeg" />
                                        <div class="flex flex-col">
                                            <div class="flex flex-row w-max">
                                                <div class="btn_add">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{444}\u{43E}\u{442}\u{43E}</div>
                                            </div>
                                            <div id="preview" class="preview"></div>
                                        </div>
                                    </div> -->
                                </div>
                                <div id="active_pivlux" class="flex flex-col active mt-5 pt-5 border-t-2 border-gray-300">
                                    <div class="flex flex-row justify-between items-center mb-3">
                                        <label>\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{456}\u{432} \u{43A}\u{43B}\u{430}\u{441}\u{443} '\u{41F}\u{456}\u{432}-\u{41B}\u{44E}\u{43A}\u{441}'</label>
                                        <input class="w-20 h-8" type="number" id="pivlux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mb-6">
                                        <label>\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{432}\u{43C}\u{435}\u{441}\u{442}\u{438}\u{43C}\u{456}\u{441}\u{442}\u{44C} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{443}</label>
                                        <input class="w-20 h-8" type="number" id="pivlux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <label>\u{41D}\u{430}\u{434}\u{430}\u{439}\u{442}\u{435} \u{43E}\u{43F}\u{438}\u{441} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{443} '\u{41F}\u{456}\u{432}-\u{41B}\u{44E}\u{43A}\u{441}':</label>
                                        <textarea name="about-lux" rows="3" class="p-1" resize-none></textarea>
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <!-- <div class="flex flex-row mt-4">
                                        <input type="file" id="file" class="hidden" multiple="true" accept=".png,.jpg,.jpeg" />
                                        <div class="flex flex-col">
                                            <div class="flex flex-row w-max">
                                                <div class="btn_add">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{444}\u{43E}\u{442}\u{43E}</div>
                                            </div>
                                            <div id="preview" class="preview"></div>
                                        </div>
                                    </div> -->
                                </div>
                                <div id="active_standart" class="flex flex-col active mt-5 pt-5 border-t-2 border-gray-300">
                                    <div class="flex flex-row justify-between items-center mb-3">
                                        <label>\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{456}\u{432} \u{43A}\u{43B}\u{430}\u{441}\u{443} '\u{421}\u{442}\u{430}\u{43D}\u{434}\u{430}\u{440}\u{442}'</label>
                                        <input class="w-20 h-8" type="number" id="pivlux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mb-6">
                                        <label>\u{412}\u{43A}\u{430}\u{436}\u{456}\u{442}\u{44C} \u{432}\u{43C}\u{435}\u{441}\u{442}\u{438}\u{43C}\u{456}\u{441}\u{442}\u{44C} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{443}</label>
                                        <input class="w-20 h-8" type="number" id="pivlux-people-quantity" placeholder="0" min="1">
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <label>\u{41D}\u{430}\u{434}\u{430}\u{439}\u{442}\u{435} \u{43E}\u{43F}\u{438}\u{441} \u{43D}\u{43E}\u{43C}\u{435}\u{440}\u{443} '\u{421}\u{442}\u{430}\u{43D}\u{434}\u{430}\u{440}\u{442}':</label>
                                        <textarea name="about-lux" rows="3" class="p-1" resize-none></textarea>
                                        <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                                    </div>
                                    <!-- <div class="flex flex-row mt-4">
                                        <input type="file" id="file" class="hidden" multiple="true" accept=".png,.jpg,.jpeg" />
                                        <div class="flex flex-col">
                                            <div class="flex flex-row w-max">
                                                <div class="btn_add">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{444}\u{43E}\u{442}\u{43E}</div>
                                            </div>
                                            <div id="preview" class="preview"></div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>

                   <div class="tab">
                        <div class="flex flex-col mb-8">
                            <div class="flex flex-col">
                                <label class="font-bold text-lg mb-5">\u{41D}\u{430}\u{434}\u{430}\u{439}\u{442}\u{435} \u{437}\u{430}\u{433}\u{430}\u{43B}\u{44C}\u{43D}\u{438}\u{439} \u{43E}\u{43F}\u{438}\u{441} \u{43E}\u{431}'\u{454}\u{43A}\u{442}\u{430}:</label>
                               <textarea id="object-desc" rows="5" required></textarea>
                               <span class="error-message">\u{426}\u{435} \u{43F}\u{43E}\u{43B}\u{435} \u{43E}\u{431}\u{43E}\u{432}'\u{44F}\u{437}\u{43A}\u{43E}\u{432}\u{435}</span>
                            </div>
                        </div>
                        <div class="font-bold text-lg mb-6">\u{41E}\u{431}\u{435}\u{440}\u{456}\u{442}\u{44C} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{456} \u{43F}\u{43E}\u{441}\u{43B}\u{443}\u{433}\u{438}:</div>
                        <div class="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-8 flex-wrap">
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                                <span class="ml-2">\u{41F}\u{43E}\u{441}\u{43B}\u{443}\u{433}\u{430} \u{2116}1</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                                <span class="ml-2">\u{41F}\u{43E}\u{441}\u{43B}\u{443}\u{433}\u{430} \u{2116}2</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                                <span class="ml-2">\u{41F}\u{43E}\u{441}\u{43B}\u{443}\u{433}\u{430} \u{2116}3</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
                                <span class="ml-2">\u{41F}\u{43E}\u{441}\u{43B}\u{443}\u{433}\u{430} \u{2116}4</span>
                            </label>
                        </div>
                        <div class="flex-col justify-center pt-7 pb-4">
                            <div class="w-full md:w-1/2 lg:w-1/2 mx-auto text-base text-gray-400 text-center">\u{412}\u{456}\u{434}\u{43F}\u{440}\u{430}\u{432}\u{43B}\u{44F}\u{44E}\u{447}\u{438} \u{430}\u{43D}\u{43A}\u{435}\u{442}\u{443}, \u{412}\u{438} \u{43F}\u{440}\u{438}\u{439}\u{43C}\u{430}\u{454}\u{442}\u{435} \u{443}\u{43C}\u{43E}\u{432}\u{438} <a href="#" class=" text-black">\u{443}\u{433}\u{43E}\u{434}\u{438} \u{43A}\u{43E}\u{440}\u{438}\u{441}\u{442}\u{443}\u{432}\u{430}\u{447}\u{430}</a></div>
                        </div>
                   </div>

                    <div class="flex items-center justify-between flex-col md:flex-row lg:flex-row">
                        <div class="flex gap-2 mt-3 md:mt-5 lg:mt-8">
                            <span class="step"></span>
                            <span class="step"></span>
                            <span class="step"></span>
                        </div>
                        <div style="overflow:auto;">
                            <button type="button" id="prevBtn">\u{41D}\u{430}\u{437}\u{430}\u{434}</button>
                            <button type="button" id="nextBtn">\u{414}\u{430}\u{43B}\u{456}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        `;
        const closeForm = document.getElementById("close-form");
        const sliderOverlay = document.getElementById("add-object-overlay");
        const hotelPopup = document.getElementById("add-hotel-popup");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const phoneInput = document.getElementById("phone");
        const phoneErrorMessage = document.querySelector("#phone + .error-message");
        //step-by-step form functionality
        let currentTab = 0;
        showTab(currentTab);
        function showTab(n) {
            let x = document.getElementsByClassName("tab");
            x[n].style.display = "block";
            if (n == 0) document.getElementById("prevBtn").style.display = "none";
            else document.getElementById("prevBtn").style.display = "inline";
            if (n == x.length - 1) document.getElementById("nextBtn").innerHTML = "\u0414\u043E\u0434\u0430\u0442\u0438";
            else document.getElementById("nextBtn").innerHTML = "\u0414\u0430\u043B\u0456";
            fixStepIndicator(n);
        }
        function nextPrev(n) {
            let x = document.getElementsByClassName("tab");
            if (n == 1 && !validateForm()) return false;
            x[currentTab].style.display = "none";
            currentTab = currentTab + n;
            if (currentTab >= x.length) {
                document.getElementById("addHotelForm").submit();
                sliderOverlay.classList.add("hidden");
                return false;
            }
            showTab(currentTab);
        }
        prevBtn.addEventListener("click", ()=>{
            nextPrev(-1);
        });
        nextBtn.addEventListener("click", ()=>{
            nextPrev(1);
        });
        phoneInput.addEventListener("input", ()=>{
            const phoneNumber = phoneInput.value;
            const isValidPhoneNumber = /^[\d+()-]*$/.test(phoneNumber);
            if (!isValidPhoneNumber) {
                phoneInput.setCustomValidity("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u043E\u043C\u0435\u0440\u0443");
                phoneErrorMessage.textContent = "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443";
                phoneErrorMessage.style.display = "block";
            } else {
                phoneInput.setCustomValidity("");
                phoneErrorMessage.style.display = "none";
            }
        });
        function validateForm() {
            let x, y, i, valid = true;
            x = document.getElementsByClassName("tab");
            if (currentTab >= x.length || currentTab < 0) return false;
            y = x[currentTab].querySelectorAll("input, textarea");
            let errorMessages = x[currentTab].querySelectorAll(".error-message");
            errorMessages.forEach((errorMsg)=>{
                errorMsg.style.display = "none";
            });
            const phoneNumber = phoneInput.value;
            const isValidPhoneNumber = /^[\d+()-]*$/.test(phoneNumber);
            if (!isValidPhoneNumber) {
                phoneInput.setCustomValidity("\u041D\u0435\u0432\u0456\u0440\u043D\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u043E\u043C\u0435\u0440\u0443");
                phoneErrorMessage.textContent = "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443";
                phoneErrorMessage.style.display = "block";
                return;
            }
            for(i = 0; i < y.length; i++)if (y[i].hasAttribute("required")) {
                if (y[i].type === "radio") {
                    let radioGroup = document.getElementsByName(y[i].name);
                    let radioChecked = false;
                    for(let j = 0; j < radioGroup.length; j++)if (radioGroup[j].checked) {
                        radioChecked = true;
                        break;
                    }
                    if (!radioChecked) {
                        let errorMessage = y[i].parentNode.querySelector(".error-message");
                        errorMessage.style.display = "block";
                        valid = false;
                    }
                } else if (y[i].type === "checkbox") {
                    if (!y[i].checked) {
                        let errorMessage = y[i].parentNode.querySelector(".error-message");
                        errorMessage.style.display = "block";
                        valid = false;
                    }
                } else if (y[i].value == "") {
                    y[i].classList.add("invalid");
                    let errorMessage = y[i].nextElementSibling;
                    errorMessage.style.display = "block";
                    valid = false;
                } else y[i].classList.remove("invalid");
            }
            if (valid) document.getElementsByClassName("step")[currentTab].classList.add("finish");
            return valid;
        }
        closeForm.addEventListener("click", ()=>{
            sliderOverlay.classList.add("hidden");
        });
        function fixStepIndicator(n) {
            let i, x = document.getElementsByClassName("step");
            for(i = 0; i < x.length; i++)x[i].className = x[i].className.replace(" active", "");
            x[n].className += " active";
        }
        sliderOverlay.addEventListener("click", (e)=>{
            if (!hotelPopup.contains(e.target)) sliderOverlay.classList.add("hidden");
        });
        //displaying the selected option
        const id_cheked = document.getElementsByName("estate");
        for(let i = 0; i < id_cheked.length; i++)id_cheked[i].onchange = active_slot;
        function active_slot() {
            let slot = document.getElementById(this.value);
            slot.classList.remove("slot");
            for(let i = 0; i < id_cheked.length; i++)if (id_cheked[i].value != this.value) {
                let remove_slot = document.getElementById(id_cheked[i].value);
                remove_slot.classList.add("slot");
            }
        }
        const activeted_lux = document.getElementById("active_lux");
        const id_lux = document.getElementById("lux");
        id_lux.addEventListener("change", function() {
            if (id_lux.checked) activeted_lux.classList.remove("active");
            else activeted_lux.classList.add("active");
        });
        const active_pivlux = document.getElementById("active_pivlux");
        const pivlux = document.getElementById("pivlux");
        pivlux.addEventListener("change", function() {
            if (pivlux.checked) active_pivlux.classList.remove("active");
            else active_pivlux.classList.add("active");
        });
        const active_standart = document.getElementById("active_standart");
        const standart = document.getElementById("standart");
        standart.addEventListener("change", function() {
            if (standart.checked) active_standart.classList.remove("active");
            else active_standart.classList.add("active");
        });
        const inp = document.querySelector("#file");
        const img = document.getElementById("preview");
        const btn_add = document.querySelector(".btn_add");
    }
}
customElements.define("add-object-form", addObjectForm);

},{}],"2sZAG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _searchIconSvg = require("/src/public/images/search_icon.svg");
var _searchIconSvgDefault = parcelHelpers.interopDefault(_searchIconSvg);
var _results1Jpg = require("/src/public/images/search-results/results_1.jpg");
var _results1JpgDefault = parcelHelpers.interopDefault(_results1Jpg);
var _results2Jpg = require("/src/public/images/search-results/results_2.jpg");
var _results2JpgDefault = parcelHelpers.interopDefault(_results2Jpg);
var _results3Jpg = require("/src/public/images/search-results/results_3.jpg");
var _results3JpgDefault = parcelHelpers.interopDefault(_results3Jpg);
var _results4Jpg = require("/src/public/images/search-results/results_4.jpg");
var _results4JpgDefault = parcelHelpers.interopDefault(_results4Jpg);
var _results5Jpg = require("/src/public/images/search-results/results_5.jpg");
var _results5JpgDefault = parcelHelpers.interopDefault(_results5Jpg);
var _iconMapSvg = require("/src/public/images/icon-map.svg");
var _iconMapSvgDefault = parcelHelpers.interopDefault(_iconMapSvg);
var _iconEyeOffSvg = require("/src/public/images/main-cards/icon-eye-off.svg");
var _iconEyeOffSvgDefault = parcelHelpers.interopDefault(_iconEyeOffSvg);
var _iconCoinsSvg = require("/src/public/images/main-cards/icon-coins.svg");
var _iconCoinsSvgDefault = parcelHelpers.interopDefault(_iconCoinsSvg);
var _iconPhoneSvg = require("/src/public/images/main-cards/icon-phone.svg");
var _iconPhoneSvgDefault = parcelHelpers.interopDefault(_iconPhoneSvg);
var _clockIconSvg = require("/src/public/images/search-results/clock-icon.svg");
var _clockIconSvgDefault = parcelHelpers.interopDefault(_clockIconSvg);
class SearchArea extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <form class="search-area" id="search-form">
                    <input id="search-input" class="search_input pl-3.5" type="text" placeholder="\u{417}\u{43D}\u{430}\u{439}\u{442}\u{438}...">
                    <input type="reset" value="&#x2715;" class="reset-btn hidden"/>
                     <button id="search_btn" class="pr-1 lg:pr-2" type="submit">
                         <img src="${0, _searchIconSvgDefault.default}" alt="icon" class="max-w-fit round-icon">
                     </button>
            </form>
            <div id="search-results" class="hidden">
                <ul>
                    <li class="search-result-item">
                        <img src="${0, _results1JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{43B}\u{43E}\u{43A}\u{430}\u{446}\u{456}\u{457} 1</h2>
                            <span class="text-sm lg:text-base text-gray-400">\u{41B}\u{43E}\u{43A}\u{430}\u{446}\u{456}\u{44F}</span>
                            <p class="result-desc">\u{41C}\u{456}\u{441}\u{442}\u{43E} \u{43D}\u{430} \u{440}\u{456}\u{447}\u{446}\u{456} \u{423}\u{436} \u{432} \u{417}\u{430}\u{43A}\u{430}\u{440}\u{43F}\u{430}\u{442}\u{441}\u{44C}\u{43A}\u{456}\u{439} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{456} \u{423}\u{43A}\u{440}\u{430}\u{457}\u{43D}\u{438}, \u{446}\u{435}\u{43D}\u{442}\u{440} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{441}\u{44C}\u{43A}\u{43E}\u{457} \u{43C}\u{456}\u{441}\u{44C}\u{43A}\u{43E}\u{457} \u{433}\u{440}\u{43E}\u{43C}\u{430}\u{434}\u{438} \u{442}\u{430} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{441}\u{44C}\u{43A}...</p>
                        </div>
                    </li>
                    <li class="search-result-item hotel-card-res">
                        <img src="${0, _results2JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{436}\u{438}\u{442}\u{43B}\u{430} 1</h2>
                            <span class="text-sm lg:text-base text-gray-400 my-1">\u{416}\u{438}\u{442}\u{43B}\u{43E}</span>
                            <div class="flex flex-row justify-start">
                                <img src="${0, _iconMapSvgDefault.default}" alt="icon" class="w-[20px] h-[20px]">
                                <div class="text-gray-700 text-sm lg:text-base pl-2 text-wrap lg:text-nowrap">
                                    \u{441}. \u{41B}\u{443}\u{43C}\u{448}\u{43E}\u{440}\u{438}, \u{432}\u{443}\u{43B}. \u{41B}\u{443}\u{433}\u{43E}\u{432}\u{430}, 5, \u{417}\u{430}\u{43A}\u{430}\u{440}\u{43F}\u{430}\u{442}\u{441}\u{44C}\u{43A}\u{430} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{44C}
                                </div>
                            </div>
                            <div class="hotel-phone">
                                <img src="${0, _iconPhoneSvgDefault.default}" alt="icon">
                                <div class="phone-overflow !text-gray-700 !text-sm !lg:text-base">+380969036281</div>
                                <img src="${0, _iconEyeOffSvgDefault.default}" alt="icon" class="eye-icon">
                            </div>
                            <div class="flex flex-row justify-start">
                                <img src="${0, _iconCoinsSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-gray-700 pl-2 text-sm lg:text-base">\u{432}\u{456}\u{434} 1070 \u{20B4} / \u{43D}\u{456}\u{447}</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${0, _results3JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{43F}\u{430}\u{43C}\u{2019}\u{44F}\u{442}\u{43A}\u{438} 1</h2>
                            <span class="text-gray-400 text-sm lg:text-base">\u{412}\u{438}\u{437}\u{43D}\u{430}\u{447}\u{43D}\u{430} \u{43F}\u{430}\u{43C}\u{2019}\u{44F}\u{442}\u{43A}\u{430}</span>
                            <p class="result-desc">\u{41C}\u{456}\u{441}\u{442}\u{43E} \u{43D}\u{430} \u{440}\u{456}\u{447}\u{446}\u{456} \u{423}\u{436} \u{432} \u{417}\u{430}\u{43A}\u{430}\u{440}\u{43F}\u{430}\u{442}\u{441}\u{44C}\u{43A}\u{456}\u{439} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{456} \u{423}\u{43A}\u{440}\u{430}\u{457}\u{43D}\u{438}, \u{446}\u{435}\u{43D}\u{442}\u{440} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{441}\u{44C}\u{43A}\u{43E}\u{457} \u{43C}\u{456}\u{441}\u{44C}\u{43A}\u{43E}\u{457} \u{433}\u{440}\u{43E}\u{43C}\u{430}\u{434}\u{438} \u{442}\u{430} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{441}\u{44C}\u{43A}...</p>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${0, _results4JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{442}\u{443}\u{440}\u{430} 4</h2>
                            <span class="text-gray-400 text-sm lg:text-base">\u{422}\u{443}\u{440}</span>
                            <div class="hotel-phone">
                                <img src="${0, _clockIconSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-gray-700 ml-2 text-sm lg:text-base">9 \u{433}\u{43E}\u{434}\u{438}\u{43D}</div>
                            </div>
                            <div class="flex flex-row justify-star">
                                <img src="${0, _iconCoinsSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-base text-gray-700 pl-2 text-sm lg:text-base">\u{432}\u{456}\u{434} 1070 \u{20B4}</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${0, _results5JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{442}\u{443}\u{440}\u{430} 5</h2>
                            <span class="text-gray-400 text-sm lg:text-base">\u{422}\u{443}\u{440}</span>
                            <div class="hotel-phone">
                                <img src="${0, _clockIconSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-gray-700 ml-2 text-sm lg:text-base">9 \u{433}\u{43E}\u{434}\u{438}\u{43D}</div>
                            </div>
                            <div class="flex flex-row justify-star">
                                <img src="${0, _iconCoinsSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-base text-gray-700 pl-2 text-sm lg:text-base">\u{432}\u{456}\u{434} 1070 \u{20B4}</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${0, _results1JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{43B}\u{43E}\u{43A}\u{430}\u{446}\u{456}\u{457} 2</h2>
                            <span class="text-sm lg:text-base text-gray-400">\u{41B}\u{43E}\u{43A}\u{430}\u{446}\u{456}\u{44F}</span>
                            <p class="result-desc">\u{41C}\u{456}\u{441}\u{442}\u{43E} \u{43D}\u{430} \u{440}\u{456}\u{447}\u{446}\u{456} \u{423}\u{436} \u{432} \u{417}\u{430}\u{43A}\u{430}\u{440}\u{43F}\u{430}\u{442}\u{441}\u{44C}\u{43A}\u{456}\u{439} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{456} \u{423}\u{43A}\u{440}\u{430}\u{457}\u{43D}\u{438}, \u{446}\u{435}\u{43D}\u{442}\u{440} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{441}\u{44C}\u{43A}\u{43E}\u{457} \u{43C}\u{456}\u{441}\u{44C}\u{43A}\u{43E}\u{457} \u{433}\u{440}\u{43E}\u{43C}\u{430}\u{434}\u{438} \u{442}\u{430} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{441}\u{44C}\u{43A}...</p>
                        </div>
                    </li>
                    <li class="search-result-item hotel-card-res">
                        <img src="${0, _results2JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{436}\u{438}\u{442}\u{43B}\u{430} 2</h2>
                            <span class="text-sm lg:text-base text-gray-400 my-1">\u{416}\u{438}\u{442}\u{43B}\u{43E}</span>
                            <div class="flex flex-row justify-start">
                                <img src="${0, _iconMapSvgDefault.default}" alt="icon" class="w-[20px] h-[20px]">
                                <div class="text-gray-700 text-sm lg:text-base pl-2">
                                    \u{441}. \u{41B}\u{443}\u{43C}\u{448}\u{43E}\u{440}\u{438}, \u{432}\u{443}\u{43B}. \u{41B}\u{443}\u{433}\u{43E}\u{432}\u{430}, 5, \u{417}\u{430}\u{43A}\u{430}\u{440}\u{43F}\u{430}\u{442}\u{441}\u{44C}\u{43A}\u{430} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{44C}
                                </div>
                            </div>
                            <div class="hotel-phone">
                                <img src="${0, _iconPhoneSvgDefault.default}" alt="icon">
                                <div class="phone-overflow !text-gray-700 !text-sm !lg:text-base">+380969036281</div>
                                <img src="${0, _iconEyeOffSvgDefault.default}" alt="icon" class="eye-icon">
                            </div>
                            <div class="flex flex-row justify-start">
                                <img src="${0, _iconCoinsSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-gray-700 pl-2 text-sm lg:text-base">\u{432}\u{456}\u{434} 1070 \u{20B4} / \u{43D}\u{456}\u{447}</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${0, _results3JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col gap-1">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{43F}\u{430}\u{43C}\u{2019}\u{44F}\u{442}\u{43A}\u{438} 2</h2>
                            <span class="text-gray-400 text-sm lg:text-base">\u{412}\u{438}\u{437}\u{43D}\u{430}\u{447}\u{43D}\u{430} \u{43F}\u{430}\u{43C}\u{2019}\u{44F}\u{442}\u{43A}\u{430}</span>
                            <p class="result-desc">\u{41C}\u{456}\u{441}\u{442}\u{43E} \u{43D}\u{430} \u{440}\u{456}\u{447}\u{446}\u{456} \u{423}\u{436} \u{432} \u{417}\u{430}\u{43A}\u{430}\u{440}\u{43F}\u{430}\u{442}\u{441}\u{44C}\u{43A}\u{456}\u{439} \u{43E}\u{431}\u{43B}\u{430}\u{441}\u{442}\u{456} \u{423}\u{43A}\u{440}\u{430}\u{457}\u{43D}\u{438}, \u{446}\u{435}\u{43D}\u{442}\u{440} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{441}\u{44C}\u{43A}\u{43E}\u{457} \u{43C}\u{456}\u{441}\u{44C}\u{43A}\u{43E}\u{457} \u{433}\u{440}\u{43E}\u{43C}\u{430}\u{434}\u{438} \u{442}\u{430} \u{423}\u{436}\u{433}\u{43E}\u{440}\u{43E}\u{434}\u{441}\u{44C}\u{43A}...</p>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${0, _results4JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{442}\u{443}\u{440}\u{430} 6</h2>
                            <span class="text-gray-400 text-sm lg:text-base">\u{422}\u{443}\u{440}</span>
                            <div class="hotel-phone">
                                <img src="${0, _clockIconSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-gray-700 ml-2 text-sm lg:text-base">9 \u{433}\u{43E}\u{434}\u{438}\u{43D}</div>
                            </div>
                            <div class="flex flex-row justify-star">
                                <img src="${0, _iconCoinsSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-base text-gray-700 pl-2 text-sm lg:text-base">\u{432}\u{456}\u{434} 1070 \u{20B4}</div>
                            </div>
                        </div>
                    </li>
                    <li class="search-result-item">
                        <img src="${0, _results5JpgDefault.default}" alt="picture" class="result-photo">
                        <div class="flex flex-col">
                            <h2 class="text-lg lg:text-xl">\u{41D}\u{430}\u{437}\u{432}\u{430} \u{442}\u{443}\u{440}\u{430} 7</h2>
                            <span class="text-gray-400 text-sm lg:text-base">\u{422}\u{443}\u{440}</span>
                            <div class="hotel-phone">
                                <img src="${0, _clockIconSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-gray-700 ml-2 text-sm lg:text-base">9 \u{433}\u{43E}\u{434}\u{438}\u{43D}</div>
                            </div>
                            <div class="flex flex-row justify-star">
                                <img src="${0, _iconCoinsSvgDefault.default}" alt="icon" class="result-icons">
                                <div class="text-base text-gray-700 pl-2 text-sm lg:text-base">\u{432}\u{456}\u{434} 1070 \u{20B4}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        `;
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("search-form");
            const input = document.getElementById("search-input");
            const resultsContainer = document.getElementById("search-results");
            const resetBtn = document.querySelector(".reset-btn");
            input.addEventListener("input", ()=>{
                resetBtn.classList.toggle("hidden", input.value.length === 0);
            });
            resetBtn.addEventListener("click", ()=>{
                input.value = "";
                input.dispatchEvent(new Event("input"));
                resultsContainer.classList.add("hidden");
            });
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                const query = input.value.trim();
                console.log(query);
                if (query.length === 0) {
                    alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u043B\u0430\u0441\u043A\u0430 \u0437\u0430\u043F\u0438\u0442 \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443.");
                    return;
                } else resultsContainer.classList.remove("hidden");
            });
            document.body.addEventListener("click", function(event) {
                const isClickInsideForm = form.contains(event.target);
                const isClickInsideResults = resultsContainer.contains(event.target);
                if (!isClickInsideForm && !isClickInsideResults) resultsContainer.classList.add("hidden");
            });
        });
        const hotelCards = document.getElementsByClassName("hotel-card-res");
        Array.from(hotelCards).forEach((card)=>{
            card.addEventListener("click", ()=>{
                window.location.href = "hotel.html";
            });
        });
    }
}
customElements.define("search-area", SearchArea);

},{"/src/public/images/search_icon.svg":"aCfcd","/src/public/images/search-results/results_1.jpg":"jpoVo","/src/public/images/search-results/results_2.jpg":"eDj1H","/src/public/images/search-results/results_3.jpg":"5JMIH","/src/public/images/search-results/results_4.jpg":"l3AlI","/src/public/images/search-results/results_5.jpg":"5T7qW","/src/public/images/icon-map.svg":"1qnwk","/src/public/images/main-cards/icon-eye-off.svg":"jyX1w","/src/public/images/main-cards/icon-coins.svg":"lBagy","/src/public/images/main-cards/icon-phone.svg":"dC9ra","/src/public/images/search-results/clock-icon.svg":"6AxVQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpoVo":[function(require,module,exports) {
module.exports = require("3cfd1cc75b02cb16").getBundleURL("lPpKD") + "results_1.033b4766.jpg" + "?" + Date.now();

},{"3cfd1cc75b02cb16":"lgJ39"}],"eDj1H":[function(require,module,exports) {
module.exports = require("404ef3c52c6b3702").getBundleURL("lPpKD") + "results_2.232d7fca.jpg" + "?" + Date.now();

},{"404ef3c52c6b3702":"lgJ39"}],"5JMIH":[function(require,module,exports) {
module.exports = require("8bca1de00330525f").getBundleURL("lPpKD") + "results_3.0692bc79.jpg" + "?" + Date.now();

},{"8bca1de00330525f":"lgJ39"}],"l3AlI":[function(require,module,exports) {
module.exports = require("8ce727c57ea5aead").getBundleURL("lPpKD") + "results_4.81033441.jpg" + "?" + Date.now();

},{"8ce727c57ea5aead":"lgJ39"}],"5T7qW":[function(require,module,exports) {
module.exports = require("2e1fde589207b2a4").getBundleURL("lPpKD") + "results_5.cddff053.jpg" + "?" + Date.now();

},{"2e1fde589207b2a4":"lgJ39"}],"1qnwk":[function(require,module,exports) {
module.exports = require("48213f1914bf68d").getBundleURL("lPpKD") + "icon-map.e4ed9d9f.svg" + "?" + Date.now();

},{"48213f1914bf68d":"lgJ39"}],"jyX1w":[function(require,module,exports) {
module.exports = require("39ba157eff09a1c").getBundleURL("lPpKD") + "icon-eye-off.abbd0e41.svg" + "?" + Date.now();

},{"39ba157eff09a1c":"lgJ39"}],"lBagy":[function(require,module,exports) {
module.exports = require("97fb8c5652a16a5c").getBundleURL("lPpKD") + "icon-coins.6e02d58b.svg" + "?" + Date.now();

},{"97fb8c5652a16a5c":"lgJ39"}],"dC9ra":[function(require,module,exports) {
module.exports = require("31ad0c9c92660f9d").getBundleURL("lPpKD") + "icon-phone.fbb91204.svg" + "?" + Date.now();

},{"31ad0c9c92660f9d":"lgJ39"}],"6AxVQ":[function(require,module,exports) {
module.exports = require("5dd29987dabf64d3").getBundleURL("lPpKD") + "clock-icon.34a093e2.svg" + "?" + Date.now();

},{"5dd29987dabf64d3":"lgJ39"}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequireccbb")

//# sourceMappingURL=index.0641b553.js.map
