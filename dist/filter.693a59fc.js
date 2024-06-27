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
})({"76ROQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c5ab4621693a59fc";
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

},{}],"3oNij":[function(require,module,exports) {
const servicesOptions = Array.from(document.getElementsByClassName("service-option"));
const cleanFilters = document.getElementById("clean-filters");
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");
const scrollContainer = document.getElementById("services-filters");
const priceSort = document.getElementById("price-sort");
const priceSortText = document.getElementById("price-sort-text");
const priceSortOptions = document.getElementById("price-sort-options");
const sortArrow = document.getElementById("sort-arrow");
const sortCheap = document.getElementById("sort-cheap");
const sortExpensive = document.getElementById("sort-expensive");
const gridMode = document.getElementById("grid-mode");
const colMode = document.getElementById("column-mode");
const locSearch = document.getElementById("loc_search");
const locOptions = document.getElementById("loc_group");
const locOptionsArray = document.querySelectorAll("#loc_group li");
const locName = document.getElementById("loc_name");
const filterForm = document.getElementById("filterForm");
const calendar = filterForm.querySelector("#calendar");
const prevMonthElement = calendar.querySelector("#prevMonth");
const nextMonthElement = calendar.querySelector("#nextMonth");
const calendarErrorMessage = calendar.querySelector("#calendar-error");
const datesError = filterForm.querySelector(".dates-error-message");
const checkInDateInput = filterForm.querySelector("#check-in-date");
const checkOutDateInput = filterForm.querySelector("#check-out-date");
const results = document.getElementById("results");
const servicesPopup = document.getElementById("services-popup");
const cleanServices = document.getElementById("clean-services");
const showResults = document.getElementById("show-results");
const goBack = document.getElementById("go-back");
const openServices = document.getElementById("open-services");
const goBackFilters = document.getElementById("go-back-filters");
const showResultsFilters = document.getElementById("show-results-filters");
const openFilters = document.getElementById("open-filters");
const filtersPopup = document.getElementById("filters-popup");
const filtersContainer = document.getElementById("filters-container");
const resetFilters = document.getElementById("reset-filters");
const hotelCards = document.getElementsByClassName("hotel-card");
Array.from(hotelCards).forEach((card)=>{
    card.addEventListener("click", ()=>{
        window.location.href = "hotel.html";
    });
});
//choosing services
const serviceOptions = document.querySelectorAll(".service-option");
function handleServiceOptionClick(event) {
    const selectedOption = event.target;
    const optionText = selectedOption.textContent.trim();
    const isAlreadyChosen = document.getElementById("choosen-services").querySelector(`.service-option[data-text="${optionText}"]`);
    if (!isAlreadyChosen) {
        selectedOption.classList.add("active-service");
        const duplicateOption = document.createElement("a");
        duplicateOption.href = "#";
        duplicateOption.className = "service-option";
        duplicateOption.setAttribute("data-text", optionText);
        duplicateOption.textContent = optionText;
        document.getElementById("choosen-services").appendChild(duplicateOption);
    }
}
serviceOptions.forEach((option)=>{
    option.addEventListener("click", handleServiceOptionClick);
});
//scroll left/right
slideLeft.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 450;
});
slideRight.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 450;
});
//choosing price sorting
priceSort.addEventListener("click", ()=>{
    priceSortOptions.classList.toggle("hidden");
    sortArrow.classList.toggle("rotate-180");
});
sortCheap.addEventListener("click", ()=>{
    priceSortText.textContent = "\u0412\u0456\u0434 \u0434\u0435\u0448\u0435\u0432\u0438\u0445";
    priceSortOptions.classList.add("hidden");
    sortArrow.classList.remove("rotate-180");
});
sortExpensive.addEventListener("click", ()=>{
    priceSortText.textContent = "\u0412\u0456\u0434 \u0434\u043E\u0440\u043E\u0433\u0438\u0445";
    priceSortOptions.classList.add("hidden");
    sortArrow.classList.remove("rotate-180");
});
//location field options
locSearch.addEventListener("click", ()=>{
    locOptions.classList.remove("hidden");
});
locOptionsArray.forEach((option)=>{
    option.addEventListener("click", ()=>{
        const locationName = option.querySelector("div").textContent;
        locName.textContent = locationName;
        locSearch.querySelector("input").value = option.dataset.location;
        locOptions.classList.add("hidden");
    });
});
document.addEventListener("click", (event)=>{
    if (!locOptions.contains(event.target) && !locSearch.contains(event.target)) locOptions.classList.add("hidden");
});
//calendar
checkInDateInput.addEventListener("click", ()=>{
    calendar.classList.remove("!hidden");
    checkInDateInput.focus();
// checkInDateInput.classList.add('active-outline');
// checkOutDateInput.classList.remove('active-outline');
});
checkOutDateInput.addEventListener("click", ()=>{
    calendar.classList.remove("!hidden");
    checkOutDateInput.focus();
// checkOutDateInput.classList.add('active-outline');
// checkInDateInput.classList.remove('active-outline');
});
document.addEventListener("click", (event)=>{
    if (!calendar.contains(event.target) && !checkInDateInput.contains(event.target) && !checkOutDateInput.contains(event.target)) calendar.classList.add("!hidden");
});
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
            // checkOutDateInput.classList.add('active-outline');
            // checkInDateInput.classList.remove('active-outline');
            } else if (!checkOutDateInput.value) {
                const checkOutDate = new Date(year, month, i);
                const checkInDate = new Date(checkInDateInput.value.split(".").reverse().join("-"));
                if (checkOutDate > checkInDate) {
                    checkOutDateInput.value = formattedDate;
                    dateDiv.classList.add("selected-date");
                    calendarErrorMessage.classList.add("hidden");
                    calendar.classList.add("!hidden");
                // checkOutDateInput.classList.remove('active-outline');
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
const prevBtn = filterForm.querySelector(".prevMonthBtn");
const nextBtns = filterForm.querySelectorAll(".nextMonthBtn");
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
//guests counter
const guestsCounter = document.getElementById("guests-counter");
const guestsInput = document.getElementById("inp_guest");
const guestsField = document.getElementById("guests-field");
guestsField.addEventListener("click", ()=>{
    guestsCounter.classList.toggle("hidden");
});
document.addEventListener("click", (event)=>{
    if (!guestsCounter.contains(event.target) && !guestsField.contains(event.target)) guestsCounter.classList.add("hidden");
});
let adults = 1;
let children = 0;
let infants = 0;
let pets = 0;
function initCounter(form) {
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
}
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
    form.querySelector("#inp_guest").innerText = totalGuestsText;
}
initCounter(filterForm);
updateCounter(filterForm);
//accordion
const accordions = document.querySelectorAll(".filter-accordion");
accordions.forEach((accordion)=>{
    accordion.addEventListener("click", ()=>{
        if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
            accordion.nextElementSibling.classList.add("hidden");
            accordion.querySelector("img").classList.remove("rotate-180");
        } else {
            accordion.classList.add("active");
            accordion.nextElementSibling.classList.remove("hidden");
            accordion.querySelector("img").classList.add("rotate-180");
        }
    });
});
// switching mode
colMode.addEventListener("click", ()=>{
    results.classList.remove("column-mode");
    results.classList.add("grid-mode");
});
gridMode.addEventListener("click", ()=>{
    results.classList.remove("grid-mode");
    results.classList.add("column-mode");
});
//map
const closeMap = document.getElementById("close-map");
const openMap = document.getElementById("open-map");
const mapOverlay = document.getElementById("map-overlay");
const defaultCoordinates = [
    48.42992,
    23.69376
];
const multipleCoordinates = [
    [
        48.42992,
        23.69376
    ],
    [
        48.43012,
        23.69476
    ],
    [
        48.42952,
        23.69276
    ],
    [
        48.43032,
        23.69576
    ]
];
let mapFilter;
let markers = [];
// async function fetchCoordinates() {
//     try {
//         let response = await fetch(''); // Add your API endpoint here
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         let data = await response.json();
//         return [data.latitude, data.longitude];
//     } catch (error) {
//         console.error('Error fetching coordinates:', error);
//         return defaultCoordinates; // Fallback to default coordinates on error
//     }
// }
openMap.addEventListener("click", async ()=>{
    mapOverlay.classList.remove("hidden");
    if (!mapFilter) {
        mapFilter = L.map("map-filter").setView(defaultCoordinates, 19);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 20,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapFilter);
        multipleCoordinates.forEach((coordinate)=>{
            const marker = L.marker(coordinate).addTo(mapFilter);
            markers.push(marker);
        });
    } else {
        mapFilter.setView(defaultCoordinates, 19);
        markers.forEach((marker)=>{
            marker.setLatLng(defaultCoordinates);
        });
    }
});
closeMap.addEventListener("click", ()=>{
    mapOverlay.classList.add("hidden");
});
//services popup
cleanServices.addEventListener("click", function() {
    servicesOptions.forEach((option)=>{
        option.classList.remove("active-service");
    });
});
showResults.addEventListener("click", ()=>{
    servicesPopup.classList.add("hidden");
});
goBack.addEventListener("click", ()=>{
    servicesPopup.classList.add("hidden");
});
openServices.addEventListener("click", ()=>{
    servicesPopup.classList.remove("hidden");
});
openFilters.addEventListener("click", ()=>{
    filtersPopup.classList.remove("hidden");
    filtersPopup.classList.add("filters-popup");
    filtersContainer.classList.remove("md:hidden");
    filtersContainer.classList.remove("sm:hidden");
});
goBackFilters.addEventListener("click", ()=>{
    filtersPopup.classList.add("hidden");
    filtersPopup.classList.remove("filters-popup");
    filtersContainer.classList.add("md:hidden");
    filtersContainer.classList.add("sm:hidden");
});
showResultsFilters.addEventListener("click", ()=>{
    filtersPopup.classList.add("hidden");
    filtersPopup.classList.remove("filters-popup");
    filtersContainer.classList.add("md:hidden");
    filtersContainer.classList.add("sm:hidden");
});
function resetFormAndCheckboxes() {
    filterForm.reset();
    locName.textContent = "\u041A\u043E\u043B\u043E\u0447\u0430\u0432\u0430";
    filterForm.querySelector("#inp_guest").innerText = "1 \u0413\u0456\u0441\u0442\u044C";
    adults = 1;
    children = 0;
    infants = 0;
    pets = 0;
    updateCounter(filterForm);
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    for(var i = 0; i < checkboxes.length; i++)checkboxes[i].checked = false;
    document.querySelector("#min-price").value = "";
    document.querySelector("#max-price").value = "";
}
resetFilters.addEventListener("click", ()=>{
    resetFormAndCheckboxes();
});
cleanFilters.addEventListener("click", function() {
    servicesOptions.forEach((option)=>{
        option.classList.remove("active-service");
    });
    document.getElementById("choosen-services").textContent = "";
    resetFormAndCheckboxes();
});
const goBackMap = document.getElementById("go-back-map");
goBackMap.addEventListener("click", ()=>{
    mapOverlay.classList.add("hidden");
});
//pagination
const totalPages = 25;
let currentPage = 1;
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("prev").addEventListener("click", ()=>changePage(currentPage - 1));
    document.getElementById("next").addEventListener("click", ()=>changePage(currentPage + 1));
    generatePagination();
    window.addEventListener("resize", generatePagination);
});
function changePage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    generatePagination();
}
function generatePagination() {
    const pageNumbers = document.getElementById("page-numbers");
    pageNumbers.innerHTML = "";
    const width = window.innerWidth;
    let maxVisibleElements;
    if (width < 576) maxVisibleElements = 5;
    else if (width < 1024) maxVisibleElements = 8;
    else maxVisibleElements = 10;
    let startPage, endPage;
    if (totalPages <= maxVisibleElements) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const sidePages = Math.floor((maxVisibleElements - 3) / 2);
        if (currentPage <= sidePages + 1) {
            startPage = 1;
            endPage = maxVisibleElements - 2;
        } else if (currentPage >= totalPages - sidePages) {
            startPage = totalPages - maxVisibleElements + 3;
            endPage = totalPages;
        } else {
            startPage = currentPage - sidePages + 1;
            endPage = currentPage + sidePages - 1;
        }
    }
    const addDot = (where)=>{
        const dots = document.createElement("span");
        dots.className = "page-number disabled";
        dots.textContent = "...";
        if (where === "start") pageNumbers.insertBefore(dots, pageNumbers.firstChild.nextSibling);
        else pageNumbers.appendChild(dots);
    };
    if (startPage > 1) {
        pageNumbers.appendChild(createPageElement(1));
        addDot("start");
    }
    for(let i = startPage; i <= endPage; i++)pageNumbers.appendChild(createPageElement(i));
    if (endPage < totalPages) {
        addDot("end");
        pageNumbers.appendChild(createPageElement(totalPages));
    }
    document.getElementById("prev").disabled = currentPage === 1;
    document.getElementById("next").disabled = currentPage === totalPages;
}
function createPageElement(page) {
    const pageElement = document.createElement("span");
    pageElement.className = `page-number ${page === currentPage ? "active" : ""}`;
    pageElement.textContent = page;
    pageElement.addEventListener("click", ()=>changePage(page));
    return pageElement;
}

},{}]},["76ROQ","3oNij"], "3oNij", "parcelRequireccbb")

//# sourceMappingURL=filter.693a59fc.js.map
