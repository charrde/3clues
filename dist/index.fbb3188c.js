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
})({"kzbYw":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
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

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gameJs = require("./game.js");
var _gameDataJs = require("./gameData.js");
var _nodeSnackbar = require("node-snackbar");
var _nodeSnackbarDefault = parcelHelpers.interopDefault(_nodeSnackbar);
document.addEventListener("DOMContentLoaded", ()=>{
    const game = new (0, _gameJs.Game)((0, _gameDataJs.gameData));
    (0, _nodeSnackbarDefault.default).show({
        text: "Example notification text."
    });
});

},{"./game.js":"cMznl","./gameData.js":"KS5VT","node-snackbar":"lW2Ov","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMznl":[function(require,module,exports) {
// game.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _constantsJs = require("./constants.js");
var _storageJs = require("./storage.js");
var _uiJs = require("./ui.js");
class Game {
    constructor(gameData){
        this.gameData = gameData; // Array of game objects
        this.ui = new (0, _uiJs.UI)(this);
        this.initializeGame();
    }
    /*** Initialization ***/ initializeGame() {
        // Initialize game state from storage or set defaults
        this.currentMode = (0, _constantsJs.GAME_MODES).DAILY;
        this.attemptsLeft = (0, _constantsJs.MAX_ATTEMPTS);
        this.hintUsed = false;
        this.categoryRevealed = false;
        this.gameWon = false;
        this.hintsUsedCount = 0;
        this.lifetimeHintsUsed = parseInt((0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).LIFETIME_HINTS, 0));
        this.scoreIncrease = 0;
        this.currentScore = parseInt((0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).CURRENT_SCORE, 0));
        this.highScore = parseInt((0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).HIGH_SCORE, 0));
        this.streak = parseInt((0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).STREAK, 0));
        const today = new Date();
        this.lastPlayed = (0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).LAST_PLAYED, "");
        this.todayDateString = today.toDateString();
        this.currentGame = {};
        // Bind UI event listeners
        this.bindUIActions();
        // Check first-time user
        this.checkFirstTimeUser();
        // Start the game
        this.startGame();
    }
    /*** UI Binding ***/ bindUIActions() {
        // Submit Guess
        document.querySelector(".btn-submit").addEventListener("click", ()=>this.submitGuess());
        // Show Hint
        document.querySelector(".btn-hint").addEventListener("click", ()=>this.showHint());
        // Reveal Category
        document.querySelector(".btn-category").addEventListener("click", ()=>this.revealCategory());
        // Switch to Daily Mode
        document.querySelector("#daily-mode-btn").addEventListener("click", ()=>this.switchMode((0, _constantsJs.GAME_MODES).DAILY));
        // Switch to Practice Mode
        document.querySelector("#practice-mode-btn").addEventListener("click", ()=>this.switchMode((0, _constantsJs.GAME_MODES).PRACTICE));
        // Skip or Give Up
        document.querySelector(".btn-skip").addEventListener("click", ()=>this.handleGiveUp());
        // Enter Key Submission
        this.ui.guessInput.addEventListener("keydown", (event)=>{
            if (event.key === "Enter") this.submitGuess();
        });
    }
    /*** User Onboarding ***/ checkFirstTimeUser() {
        if (!(0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).FIRST_TIME)) {
            (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).FIRST_TIME, true);
            this.ui.openInstructionModal();
        }
    }
    /*** Game Start ***/ startGame() {
        this.updateScoreboard();
        if (this.currentMode === (0, _constantsJs.GAME_MODES).DAILY) {
            document.querySelector(".btn-skip").innerHTML = "Give Up";
            this.startDailyGame();
        } else {
            document.querySelector(".btn-skip").innerHTML = "Skip";
            this.startPracticeGame();
        }
        this.generateAndDisplayClues();
    }
    /*** Score Management ***/ updateScoreboard() {
        this.ui.updateScoreboard({
            currentScore: this.currentScore,
            highScore: this.highScore,
            streak: this.streak,
            lifetimeHintsUsed: this.lifetimeHintsUsed
        });
    }
    updateScore() {
        this.scoreIncrease = (this.attemptsLeft + 1) * 10 - this.hintsUsedCount * 5;
        this.scoreIncrease = Math.max(this.scoreIncrease, 0);
        this.currentScore += this.scoreIncrease;
        this.streak++;
        if (this.currentScore > this.highScore) {
            this.highScore = this.currentScore;
            (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).HIGH_SCORE, this.highScore);
        }
        this.ui.updateScoreboard({
            currentScore: this.currentScore,
            highScore: this.highScore,
            streak: this.streak,
            lifetimeHintsUsed: this.lifetimeHintsUsed
        });
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).CURRENT_SCORE, this.currentScore);
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).STREAK, this.streak);
    }
    resetStreak() {
        this.streak = 0;
        this.currentScore = 0;
        this.scoreIncrease = 0;
        this.ui.updateScoreboard({
            currentScore: this.currentScore,
            highScore: this.highScore,
            streak: this.streak,
            lifetimeHintsUsed: this.lifetimeHintsUsed
        });
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).STREAK, this.streak);
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).CURRENT_SCORE, this.currentScore);
    }
    /*** Game Mode Management ***/ switchMode(mode) {
        if (this.currentMode === mode) return;
        this.currentMode = mode;
        document.getElementById("daily-mode-btn").classList.remove("active");
        document.getElementById("practice-mode-btn").classList.remove("active");
        if (mode === (0, _constantsJs.GAME_MODES).DAILY) {
            document.getElementById("daily-mode-btn").classList.add("active");
            document.querySelector(".btn-skip").innerHTML = "Give Up";
            this.startGame();
        } else {
            document.getElementById("practice-mode-btn").classList.add("active");
            document.querySelector(".btn-skip").innerHTML = "Skip";
            this.startGame();
        }
    }
    /*** Game State Management - Practice Mode ***/ initializePracticeModeOrder() {
        const shuffledOrder = this.shuffleArray([
            ...Array(this.gameData.length).keys()
        ]);
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).PRACTICE_GAME_ORDER, shuffledOrder);
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).PRACTICE_GAME_INDEX, 0);
    }
    /**
     * @param {Array} array
     * @returns {Array}
     */ shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [
                array[j],
                array[i]
            ];
        }
        return array;
    }
    startPracticeGame() {
        let shuffledOrder = (0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).PRACTICE_GAME_ORDER, null);
        let currentIndex = parseInt((0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).PRACTICE_GAME_INDEX, 0));
        // If no order exists or all games have been played, initialize/reset the order
        if (!shuffledOrder || currentIndex >= shuffledOrder.length) {
            this.initializePracticeModeOrder();
            shuffledOrder = (0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).PRACTICE_GAME_ORDER, []);
            currentIndex = 0;
        }
        // Get the game index for the current practice session
        const gameIndex = shuffledOrder[currentIndex];
        this.currentGame = this.gameData[gameIndex];
        // Increment the current index and update storage
        currentIndex++;
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).PRACTICE_GAME_INDEX, currentIndex);
        // Reset game state and display clues
        this.resetGameState();
        this.generateAndDisplayClues();
    }
    /*** Game State Management ***/ startDailyGame() {
        if (this.lastPlayed === this.todayDateString) this.loadSavedGame();
        else {
            this.resetGameState();
            this.generateAndDisplayClues();
            (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).LAST_PLAYED, this.todayDateString);
            (0, _storageJs.Storage).remove((0, _constantsJs.STORAGE_KEYS).GAME_STATE);
        }
    }
    resetGameState() {
        this.attemptsLeft = (0, _constantsJs.MAX_ATTEMPTS);
        this.hintUsed = false;
        this.categoryRevealed = false;
        this.gameWon = false;
        this.hintsUsedCount = 0;
        this.scoreIncrease = 0;
        // Clear UI elements
        this.ui.guessHistory.innerHTML = "";
        this.ui.messageEl.innerText = "";
        this.ui.attemptsEl.innerText = `Attempts left: ${this.attemptsLeft}`;
        this.ui.hintEl.innerText = "";
        this.ui.categoryEl.innerText = "";
        this.ui.guessInput.value = "";
        this.ui.enableInputs();
    }
    generateAndDisplayClues() {
        if (this.currentMode === (0, _constantsJs.GAME_MODES).DAILY) this.currentGame = this.generateDailyGame();
        else this.currentGame = this.generatePracticeGame();
        this.ui.displayClues(this.currentGame.clues);
    }
    generateDailyGame() {
        const seedDate = new Date();
        const seed = seedDate.getTime();
        const dayIndex = Math.floor(seed / 86400000) % this.gameData.length;
        return this.gameData[dayIndex];
    }
    generatePracticeGame() {
        const randomIndex = Math.floor(Math.random() * this.gameData.length);
        return this.gameData[randomIndex];
    }
    saveGameState() {
        console.log("saveGameState");
        const gameState = {
            attemptsLeft: this.attemptsLeft,
            hintUsed: this.hintUsed,
            categoryRevealed: this.categoryRevealed,
            gameWon: this.gameWon,
            hintsUsedCount: this.hintsUsedCount,
            scoreIncrease: this.scoreIncrease,
            guessHistory: this.getGuessHistory()
        };
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).GAME_STATE, gameState);
    }
    loadSavedGame() {
        const savedState = (0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).GAME_STATE, null);
        if (savedState) {
            this.attemptsLeft = savedState.attemptsLeft;
            this.hintUsed = savedState.hintUsed;
            this.categoryRevealed = savedState.categoryRevealed;
            this.gameWon = savedState.gameWon;
            this.hintsUsedCount = savedState.hintsUsedCount || 0;
            this.scoreIncrease = savedState.scoreIncrease || 0;
            this.currentGame = this.generateDailyGame();
            this.restoreGuessHistory(savedState.guessHistory);
            if (this.hintUsed) this.ui.displayHint(this.currentGame.hint);
            if (this.categoryRevealed || this.gameWon) this.ui.displayCategory(this.currentGame.category);
            if (this.attemptsLeft === 0 || this.gameWon) this.endGame();
            else {
                this.ui.displayMessage(savedState.message || "", (0, _constantsJs.MESSAGE_TYPES).INFO);
                this.ui.updateAttemptsLeft(this.attemptsLeft);
                this.ui.enableInputs();
            }
        } else this.resetGameState();
    }
    restoreGuessHistory(guessHistory) {
        guessHistory.forEach((guessData, index)=>{
            const guessTile = document.createElement("div");
            guessTile.className = guessData.className;
            guessTile.id = `guess${index + 1}`;
            if (guessData.icon || guessData.guessText) {
                const icon = document.createElement("div");
                icon.classList.add("icon");
                icon.innerText = guessData.icon;
                const guessText = document.createElement("div");
                guessText.classList.add("guess-text");
                guessText.innerText = guessData.guessText;
                guessTile.appendChild(icon);
                guessTile.appendChild(guessText);
            }
            this.ui.guessHistory.appendChild(guessTile);
        });
    }
    getGuessHistory() {
        const guessTiles = document.querySelectorAll(".guess-tile");
        const guessHistory = [];
        guessTiles.forEach((tile)=>{
            const icon = tile.querySelector(".icon")?.innerText || "";
            const guessText = tile.querySelector(".guess-text")?.innerText || "";
            guessHistory.push({
                className: tile.className,
                icon,
                guessText
            });
        });
        return guessHistory;
    }
    /*** Guess Handling ***/ submitGuess() {
        const userGuess = this.ui.guessInput.value.trim();
        this.attemptsLeft--;
        if (userGuess.length === 0) {
            this.ui.showToast("Please enter a guess.", (0, _constantsJs.MESSAGE_TYPES).WARNING);
            return;
        }
        if (this.gameWon || this.attemptsLeft === 0) return;
        if (userGuess.toLowerCase() === this.currentGame.answer.toLowerCase()) this.handleCorrectGuess();
        else this.handleIncorrectGuess();
        if (this.currentMode === (0, _constantsJs.GAME_MODES).DAILY) this.saveGameState();
        this.ui.updateAttemptsLeft(this.attemptsLeft);
        this.ui.clearGuessInput();
    }
    handleCorrectGuess() {
        this.gameWon = true;
        this.ui.addGuessTile(this.ui.guessInput.value.trim(), true);
        if (this.currentMode === (0, _constantsJs.GAME_MODES).DAILY) this.updateScore();
        this.endGame();
    }
    handleIncorrectGuess() {
        this.ui.addGuessTile(this.ui.guessInput.value.trim(), false);
        if (this.attemptsLeft > 0) this.ui.displayMessage("Incorrect guess. Try again!", (0, _constantsJs.MESSAGE_TYPES).ERROR);
        else {
            this.ui.displayMessage("No attempts left. Game Over!", (0, _constantsJs.MESSAGE_TYPES).ERROR);
            this.endGame();
            this.resetStreak();
        }
    }
    /*** Hint and Category ***/ showHint() {
        if (!this.hintUsed) {
            this.ui.displayHint(this.currentGame.hint);
            this.hintUsed = true;
            if (this.currentMode === (0, _constantsJs.GAME_MODES).DAILY) {
                this.hintsUsedCount++;
                this.lifetimeHintsUsed++;
                this.ui.updateScoreboard({
                    currentScore: this.currentScore,
                    highScore: this.highScore,
                    streak: this.streak,
                    lifetimeHintsUsed: this.lifetimeHintsUsed
                });
                (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).LIFETIME_HINTS, this.lifetimeHintsUsed);
                this.saveGameState();
            }
        } else this.ui.showToast("You have already used the hint for this round.", (0, _constantsJs.MESSAGE_TYPES).INFO);
    }
    revealCategory() {
        if (!this.categoryRevealed) {
            this.ui.displayCategory(this.currentGame.category);
            this.categoryRevealed = true;
            if (this.currentMode === (0, _constantsJs.GAME_MODES).DAILY) {
                this.hintsUsedCount++;
                this.lifetimeHintsUsed++;
                this.ui.updateScoreboard({
                    currentScore: this.currentScore,
                    highScore: this.highScore,
                    streak: this.streak,
                    lifetimeHintsUsed: this.lifetimeHintsUsed
                });
                (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).LIFETIME_HINTS, this.lifetimeHintsUsed);
                this.saveGameState();
            }
        } else this.ui.showToast("The category is already revealed.", (0, _constantsJs.MESSAGE_TYPES).INFO);
    }
    /*** Game End Handling ***/ endGame() {
        this.ui.disableInputs();
        if (this.currentMode === (0, _constantsJs.GAME_MODES).PRACTICE) {
            this.ui.displayMessage(this.gameWon ? `Woohoo! The correct answer was: <strong>${this.currentGame.answer}</strong>` : `Better luck next time! The correct answer was: <strong>${this.currentGame.answer}</strong>`, this.gameWon ? (0, _constantsJs.MESSAGE_TYPES).SUCCESS : (0, _constantsJs.MESSAGE_TYPES).ERROR);
            setTimeout(()=>{
                this.startPracticeGame();
            }, 3000);
        } else this.showModal();
    }
    handleGiveUp() {
        this.attemptsLeft = 0;
        this.ui.updateAttemptsLeft(this.attemptsLeft);
        if (this.currentMode === (0, _constantsJs.GAME_MODES).DAILY) {
            this.gameWon = false;
            this.resetStreak();
            this.saveGameState();
        }
        this.endGame();
    }
    showModal() {
        if (this.currentMode === (0, _constantsJs.GAME_MODES).PRACTICE) return;
        const modalData = {
            gameWon: this.gameWon,
            answer: this.currentGame.answer,
            hintsUsedCount: this.hintsUsedCount,
            scoreIncrease: this.scoreIncrease,
            streak: this.streak,
            highScore: this.highScore
        };
        this.ui.showModal(modalData);
    }
}

},{"./constants.js":"1j8D1","./storage.js":"j1l1C","./ui.js":"1hWqh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1j8D1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GAME_MODES", ()=>GAME_MODES);
parcelHelpers.export(exports, "MAX_ATTEMPTS", ()=>MAX_ATTEMPTS);
parcelHelpers.export(exports, "STORAGE_KEYS", ()=>STORAGE_KEYS);
parcelHelpers.export(exports, "THEMES", ()=>THEMES);
parcelHelpers.export(exports, "MESSAGE_TYPES", ()=>MESSAGE_TYPES);
const GAME_MODES = {
    DAILY: "daily",
    PRACTICE: "practice"
};
const MAX_ATTEMPTS = 5;
const STORAGE_KEYS = {
    CURRENT_SCORE: "currentScore",
    HIGH_SCORE: "highScore",
    STREAK: "streak",
    LIFETIME_HINTS: "lifetimeHintsUsed",
    LAST_PLAYED: "lastPlayed",
    GAME_STATE: "gameState",
    THEME: "theme",
    FIRST_TIME: "firstTime",
    PRACTICE_GAME_ORDER: "practiceGameOrder",
    PRACTICE_GAME_INDEX: "practiceGameIndex"
};
const THEMES = {
    DARK: "dark",
    LIGHT: "light"
};
const MESSAGE_TYPES = {
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info",
    WARNING: "warning"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"j1l1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Storage", ()=>Storage);
const Storage = {
    get (key, defaultValue = null) {
        const value = localStorage.getItem(key);
        if (value === null) return defaultValue;
        try {
            return JSON.parse(value);
        } catch (e) {
            console.error(`Error parsing localStorage key "${key}":`, e);
            return defaultValue;
        }
    },
    set (key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(`Error setting localStorage key "${key}":`, e);
        }
    },
    remove (key) {
        localStorage.removeItem(key);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hWqh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI", ()=>UI);
var _constantsJs = require("./constants.js");
var _storageJs = require("./storage.js");
var _jsConfetti = require("js-confetti");
var _jsConfettiDefault = parcelHelpers.interopDefault(_jsConfetti);
var _nodeSnackbar = require("node-snackbar");
var _nodeSnackbarDefault = parcelHelpers.interopDefault(_nodeSnackbar);
class UI {
    constructor(game){
        this.game = game;
        this.bindElements();
        this.attachEventListeners();
        this.initializeTheme();
    }
    bindElements() {
        // Modal Elements
        this.modalOverlay = document.getElementById("modal-overlay");
        this.modalCloseButtons = document.querySelectorAll("#modal-close, .btn-close");
        this.modalWord = document.getElementById("modal-word");
        this.modalHintsUsed = document.getElementById("modal-hints-used");
        this.modalScoreGained = document.getElementById("modal-score-gained");
        this.modalStreak = document.getElementById("modal-streak");
        this.modalHighscore = document.getElementById("modal-highscore");
        this.modalTitle = document.getElementById("modal-title");
        this.modalMessage = document.getElementById("modal-message");
        // Instruction Modal Elements
        this.instructionModalOverlay = document.getElementById("instruction-modal-overlay");
        this.instructionsBtn = document.getElementById("instructions-btn");
        this.instructionCloseBtn = document.getElementById("instruction-close");
        // UI Elements
        this.currentScoreEl = document.getElementById("current-score");
        this.highScoreEl = document.getElementById("high-score");
        this.streakEl = document.getElementById("streak");
        this.lifetimeHintsUsedEl = document.getElementById("lifetime-hints-used");
        this.messageEl = document.getElementById("message");
        this.attemptsEl = document.getElementById("attempts");
        this.hintEl = document.getElementById("hint");
        this.categoryEl = document.getElementById("category");
        this.guessInput = document.getElementById("guess-input");
        this.guessHistory = document.getElementById("guess-history");
        // Toggle Elements
        this.accordionToggle = document.querySelector(".accordion-toggle");
        this.accordionContent = document.querySelector(".accordion-content");
        this.dropdownToggle = document.querySelector(".dropdown-toggle");
        this.dropdownContent = document.querySelector(".dropdown-content");
        // Theme Toggle
        this.themeToggle = document.getElementById("theme-toggle");
    }
    attachEventListeners() {
        // Close Modal Buttons
        this.modalCloseButtons.forEach((button)=>{
            button.addEventListener("click", ()=>this.closeModal());
        });
        // Instructions Modal Buttons
        this.instructionsBtn.addEventListener("click", ()=>this.openInstructionModal());
        this.instructionCloseBtn.addEventListener("click", ()=>this.closeInstructionModal());
        // Accordion Toggle
        this.accordionToggle.addEventListener("click", ()=>this.toggleAccordion());
        // Dropdown Toggle
        this.dropdownToggle.addEventListener("click", ()=>this.toggleDropdown());
        // Theme Toggle
        this.themeToggle.addEventListener("change", ()=>this.toggleTheme());
        // Window Resize
        window.addEventListener("resize", ()=>this.handleResize());
    }
    initializeTheme() {
        const storedTheme = (0, _storageJs.Storage).get((0, _constantsJs.STORAGE_KEYS).THEME, (0, _constantsJs.THEMES).DARK);
        document.documentElement.setAttribute("data-theme", storedTheme);
        this.themeToggle.checked = storedTheme === (0, _constantsJs.THEMES).DARK;
    }
    toggleTheme() {
        const newTheme = this.themeToggle.checked ? (0, _constantsJs.THEMES).DARK : (0, _constantsJs.THEMES).LIGHT;
        document.documentElement.setAttribute("data-theme", newTheme);
        (0, _storageJs.Storage).set((0, _constantsJs.STORAGE_KEYS).THEME, newTheme);
    }
    toggleAccordion() {
        this.accordionContent.classList.toggle("expanded");
        this.accordionContent.classList.toggle("collapsed");
        this.accordionToggle.classList.toggle("active");
    }
    toggleDropdown() {
        this.dropdownContent.classList.toggle("expanded");
        this.dropdownContent.classList.toggle("collapsed");
        this.dropdownToggle.classList.toggle("active");
    }
    handleResize() {
        if (window.innerWidth > 768) {
            this.dropdownContent.classList.remove("expanded", "collapsed");
            this.accordionContent.classList.remove("expanded", "collapsed");
            this.accordionToggle.classList.remove("active");
            this.dropdownToggle.classList.remove("active");
        }
    }
    openInstructionModal() {
        this.instructionModalOverlay.style.display = "flex";
    }
    closeInstructionModal() {
        this.instructionModalOverlay.style.display = "none";
    }
    showModal(modalData) {
        const jsConfetti = new (0, _jsConfettiDefault.default)();
        jsConfetti.addConfetti();
        this.modalOverlay.style.display = "flex";
        this.modalWord.innerHTML = `The word was: <span>${modalData.answer}</span> \u{1F3AF}`;
        if (modalData.gameWon) {
            this.modalHintsUsed.innerHTML = `You used <span>${modalData.hintsUsedCount}</span> hints. \u{1F9E0}`;
            this.modalScoreGained.innerHTML = `<span>${modalData.scoreIncrease}</span> points gained! \u{1F389}`;
            this.modalStreak.innerHTML = `You're on a <span>${modalData.streak}</span> ${modalData.streak === 1 ? "day" : "days"} streak! \u{1F31F}`;
            this.modalTitle.innerText = "Woohoo! \uD83C\uDF89";
            this.modalMessage.innerText = "Come back tomorrow for another puzzle!";
        } else {
            this.modalHintsUsed.innerHTML = "";
            this.modalScoreGained.innerText = "Better luck next time!";
            this.modalStreak.innerText = "Your streak has been reset.";
            this.modalTitle.innerText = "Game Over!";
            this.modalMessage.innerText = "Come back tomorrow to try again on a new puzzle!";
        }
        this.modalHighscore.innerHTML = `High Score: <span>${modalData.highScore}</span>`;
    }
    closeModal() {
        this.modalOverlay.style.display = "none";
    }
    updateScoreboard({ currentScore, highScore, streak, lifetimeHintsUsed }) {
        this.currentScoreEl.innerText = currentScore;
        this.highScoreEl.innerText = highScore;
        this.streakEl.innerText = streak;
        this.lifetimeHintsUsedEl.innerText = lifetimeHintsUsed;
    }
    displayClues(clues) {
        document.getElementById("clue1").innerText = clues[0];
        document.getElementById("clue2").innerText = clues[1];
        document.getElementById("clue3").innerText = clues[2];
    }
    addGuessTile(guess, isCorrect) {
        const guessIndex = (0, _constantsJs.MAX_ATTEMPTS) - this.game.attemptsLeft + 1;
        const guessTile = document.createElement("div");
        guessTile.classList.add("guess-tile");
        guessTile.setAttribute("id", `guess${guessIndex}`);
        const icon = document.createElement("div");
        icon.classList.add("icon");
        icon.innerText = isCorrect ? "\u2714" : "\u2716";
        const guessText = document.createElement("div");
        guessText.classList.add("guess-text");
        guessText.innerText = guess;
        guessTile.appendChild(icon);
        guessTile.appendChild(guessText);
        if (isCorrect) {
            guessTile.classList.add("correct");
            this.displayMessage("Correct! Well done.", (0, _constantsJs.MESSAGE_TYPES).SUCCESS);
        } else {
            guessTile.classList.add("incorrect");
            this.displayMessage("Incorrect guess. Try again!", (0, _constantsJs.MESSAGE_TYPES).ERROR);
            this.updateAttemptsLeft(this.game.attemptsLeft);
        }
        this.guessHistory.appendChild(guessTile);
    }
    displayMessage(message, type) {
        switch(type){
            case (0, _constantsJs.MESSAGE_TYPES).SUCCESS:
                this.messageEl.style.color = "#44bd32";
                break;
            case (0, _constantsJs.MESSAGE_TYPES).ERROR:
                this.messageEl.style.color = "#e84118";
                break;
            case (0, _constantsJs.MESSAGE_TYPES).INFO:
                this.messageEl.style.color = "#000";
                break;
            case (0, _constantsJs.MESSAGE_TYPES).WARNING:
                this.messageEl.style.color = "#fbc531";
                break;
            default:
                this.messageEl.style.color = "#000";
        }
        this.messageEl.innerText = message;
    }
    updateAttemptsLeft(attemptsLeft) {
        this.attemptsEl.innerText = `Attempts left: ${attemptsLeft}`;
    }
    displayHint(hint) {
        this.hintEl.innerText = `\u{1F4A1} Hint: ${hint}`;
    }
    displayCategory(category) {
        this.categoryEl.innerText = `Category: ${category}`;
    }
    clearGuessInput() {
        this.guessInput.value = "";
        this.guessInput.focus();
    }
    disableInputs() {
        this.guessInput.disabled = true;
        document.querySelector(".btn-submit").disabled = true;
        document.querySelector(".btn-hint").disabled = true;
        document.querySelector(".btn-category").disabled = true;
        document.querySelector(".btn-skip").disabled = true;
    }
    enableInputs() {
        this.guessInput.disabled = false;
        document.querySelector(".btn-submit").disabled = false;
        document.querySelector(".btn-hint").disabled = false;
        document.querySelector(".btn-category").disabled = false;
        document.querySelector(".btn-skip").disabled = false;
    }
    showToast(message, type = (0, _constantsJs.MESSAGE_TYPES).INFO) {
        switch(type){
            case (0, _constantsJs.MESSAGE_TYPES).SUCCESS:
                break;
            case (0, _constantsJs.MESSAGE_TYPES).ERROR:
                alert(message);
                break;
            case (0, _constantsJs.MESSAGE_TYPES).INFO:
                break;
            case (0, _constantsJs.MESSAGE_TYPES).WARNING:
                alert(message);
                break;
            default:
                alert(message);
        }
    }
}

},{"./constants.js":"1j8D1","./storage.js":"j1l1C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","js-confetti":"gZbVi","node-snackbar":"lW2Ov"}],"gZbVi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function normalizeComputedStyleValue(string) {
    // "250px" --> 250
    return +string.replace(/px/, "");
}
function fixDPR(canvas) {
    var dpr = window.devicePixelRatio;
    var computedStyles = getComputedStyle(canvas);
    var width = normalizeComputedStyleValue(computedStyles.getPropertyValue("width"));
    var height = normalizeComputedStyleValue(computedStyles.getPropertyValue("height"));
    canvas.setAttribute("width", (width * dpr).toString());
    canvas.setAttribute("height", (height * dpr).toString());
}
function generateRandomNumber(min, max) {
    var fractionDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);
}
function generateRandomArrayElement(arr) {
    return arr[generateRandomNumber(0, arr.length)];
}
var FREE_FALLING_OBJECT_ACCELERATION = 0.00125;
var MIN_DRAG_FORCE_COEFFICIENT = 0.0005;
var MAX_DRAG_FORCE_COEFFICIENT = 0.0009;
var ROTATION_SLOWDOWN_ACCELERATION = 0.00001;
var INITIAL_SHAPE_RADIUS = 6;
var INITIAL_EMOJI_SIZE = 80;
var MIN_INITIAL_CONFETTI_SPEED = 0.9;
var MAX_INITIAL_CONFETTI_SPEED = 1.7;
var MIN_FINAL_X_CONFETTI_SPEED = 0.2;
var MAX_FINAL_X_CONFETTI_SPEED = 0.6;
var MIN_INITIAL_ROTATION_SPEED = 0.03;
var MAX_INITIAL_ROTATION_SPEED = 0.07;
var MIN_CONFETTI_ANGLE = 15;
var MAX_CONFETTI_ANGLE = 82;
var MAX_CONFETTI_POSITION_SHIFT = 150;
var SHAPE_VISIBILITY_TRESHOLD = 100;
var DEFAULT_CONFETTI_NUMBER = 250;
var DEFAULT_EMOJIS_NUMBER = 40;
var DEFAULT_CONFETTI_COLORS = [
    "#fcf403",
    "#62fc03",
    "#f4fc03",
    "#03e7fc",
    "#03fca5",
    "#a503fc",
    "#fc03ad",
    "#fc03c2"
];
function getWindowWidthCoefficient(canvasWidth) {
    var HD_SCREEN_WIDTH = 1920;
    return Math.log(canvasWidth) / Math.log(HD_SCREEN_WIDTH);
}
var ConfettiShape = /*#__PURE__*/ function() {
    function ConfettiShape(args) {
        _classCallCheck(this, ConfettiShape);
        var initialPosition = args.initialPosition, direction = args.direction, confettiRadius = args.confettiRadius, confettiColors = args.confettiColors, emojis = args.emojis, emojiSize = args.emojiSize, canvasWidth = args.canvasWidth;
        var randomConfettiSpeed = generateRandomNumber(MIN_INITIAL_CONFETTI_SPEED, MAX_INITIAL_CONFETTI_SPEED, 3);
        var initialSpeed = randomConfettiSpeed * getWindowWidthCoefficient(canvasWidth);
        this.confettiSpeed = {
            x: initialSpeed,
            y: initialSpeed
        };
        this.finalConfettiSpeedX = generateRandomNumber(MIN_FINAL_X_CONFETTI_SPEED, MAX_FINAL_X_CONFETTI_SPEED, 3);
        this.rotationSpeed = emojis.length ? 0.01 : generateRandomNumber(MIN_INITIAL_ROTATION_SPEED, MAX_INITIAL_ROTATION_SPEED, 3) * getWindowWidthCoefficient(canvasWidth);
        this.dragForceCoefficient = generateRandomNumber(MIN_DRAG_FORCE_COEFFICIENT, MAX_DRAG_FORCE_COEFFICIENT, 6);
        this.radius = {
            x: confettiRadius,
            y: confettiRadius
        };
        this.initialRadius = confettiRadius;
        this.rotationAngle = direction === "left" ? generateRandomNumber(0, 0.2, 3) : generateRandomNumber(-0.2, 0, 3);
        this.emojiSize = emojiSize;
        this.emojiRotationAngle = generateRandomNumber(0, 2 * Math.PI);
        this.radiusYUpdateDirection = "down";
        var angle = direction === "left" ? generateRandomNumber(MAX_CONFETTI_ANGLE, MIN_CONFETTI_ANGLE) * Math.PI / 180 : generateRandomNumber(-MIN_CONFETTI_ANGLE, -MAX_CONFETTI_ANGLE) * Math.PI / 180;
        this.absCos = Math.abs(Math.cos(angle));
        this.absSin = Math.abs(Math.sin(angle));
        var positionShift = generateRandomNumber(-MAX_CONFETTI_POSITION_SHIFT, 0);
        var shiftedInitialPosition = {
            x: initialPosition.x + (direction === "left" ? -positionShift : positionShift) * this.absCos,
            y: initialPosition.y - positionShift * this.absSin
        };
        this.currentPosition = Object.assign({}, shiftedInitialPosition);
        this.initialPosition = Object.assign({}, shiftedInitialPosition);
        this.color = emojis.length ? null : generateRandomArrayElement(confettiColors);
        this.emoji = emojis.length ? generateRandomArrayElement(emojis) : null;
        this.createdAt = new Date().getTime();
        this.direction = direction;
    }
    _createClass(ConfettiShape, [
        {
            key: "draw",
            value: function draw(canvasContext) {
                var currentPosition = this.currentPosition, radius = this.radius, color = this.color, emoji = this.emoji, rotationAngle = this.rotationAngle, emojiRotationAngle = this.emojiRotationAngle, emojiSize = this.emojiSize;
                var dpr = window.devicePixelRatio;
                if (color) {
                    canvasContext.fillStyle = color;
                    canvasContext.beginPath();
                    canvasContext.ellipse(currentPosition.x * dpr, currentPosition.y * dpr, radius.x * dpr, radius.y * dpr, rotationAngle, 0, 2 * Math.PI);
                    canvasContext.fill();
                } else if (emoji) {
                    canvasContext.font = "".concat(emojiSize, "px serif");
                    canvasContext.save();
                    canvasContext.translate(dpr * currentPosition.x, dpr * currentPosition.y);
                    canvasContext.rotate(emojiRotationAngle);
                    canvasContext.textAlign = "center";
                    canvasContext.fillText(emoji, 0, 0);
                    canvasContext.restore();
                }
            }
        },
        {
            key: "updatePosition",
            value: function updatePosition(iterationTimeDelta, currentTime) {
                var confettiSpeed = this.confettiSpeed, dragForceCoefficient = this.dragForceCoefficient, finalConfettiSpeedX = this.finalConfettiSpeedX, radiusYUpdateDirection = this.radiusYUpdateDirection, rotationSpeed = this.rotationSpeed, createdAt = this.createdAt, direction = this.direction;
                var timeDeltaSinceCreation = currentTime - createdAt;
                if (confettiSpeed.x > finalConfettiSpeedX) this.confettiSpeed.x -= dragForceCoefficient * iterationTimeDelta;
                this.currentPosition.x += confettiSpeed.x * (direction === "left" ? -this.absCos : this.absCos) * iterationTimeDelta;
                this.currentPosition.y = this.initialPosition.y - confettiSpeed.y * this.absSin * timeDeltaSinceCreation + FREE_FALLING_OBJECT_ACCELERATION * Math.pow(timeDeltaSinceCreation, 2) / 2;
                this.rotationSpeed -= this.emoji ? 0.0001 : ROTATION_SLOWDOWN_ACCELERATION * iterationTimeDelta;
                if (this.rotationSpeed < 0) this.rotationSpeed = 0; // no need to update rotation radius for emoji
                if (this.emoji) {
                    this.emojiRotationAngle += this.rotationSpeed * iterationTimeDelta % (2 * Math.PI);
                    return;
                }
                if (radiusYUpdateDirection === "down") {
                    this.radius.y -= iterationTimeDelta * rotationSpeed;
                    if (this.radius.y <= 0) {
                        this.radius.y = 0;
                        this.radiusYUpdateDirection = "up";
                    }
                } else {
                    this.radius.y += iterationTimeDelta * rotationSpeed;
                    if (this.radius.y >= this.initialRadius) {
                        this.radius.y = this.initialRadius;
                        this.radiusYUpdateDirection = "down";
                    }
                }
            }
        },
        {
            key: "getIsVisibleOnCanvas",
            value: function getIsVisibleOnCanvas(canvasHeight) {
                return this.currentPosition.y < canvasHeight + SHAPE_VISIBILITY_TRESHOLD;
            }
        }
    ]);
    return ConfettiShape;
}();
function createCanvas() {
    var canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "1000";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);
    return canvas;
}
function normalizeConfettiConfig(confettiConfig) {
    var _confettiConfig$confe = confettiConfig.confettiRadius, confettiRadius = _confettiConfig$confe === void 0 ? INITIAL_SHAPE_RADIUS : _confettiConfig$confe, _confettiConfig$confe2 = confettiConfig.confettiNumber, confettiNumber = _confettiConfig$confe2 === void 0 ? confettiConfig.confettiesNumber || (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER) : _confettiConfig$confe2, _confettiConfig$confe3 = confettiConfig.confettiColors, confettiColors = _confettiConfig$confe3 === void 0 ? DEFAULT_CONFETTI_COLORS : _confettiConfig$confe3, _confettiConfig$emoji = confettiConfig.emojis, emojis = _confettiConfig$emoji === void 0 ? confettiConfig.emojies || [] : _confettiConfig$emoji, _confettiConfig$emoji2 = confettiConfig.emojiSize, emojiSize = _confettiConfig$emoji2 === void 0 ? INITIAL_EMOJI_SIZE : _confettiConfig$emoji2; // deprecate wrong plural forms, used in early releases
    if (confettiConfig.emojies) console.error("emojies argument is deprecated, please use emojis instead");
    if (confettiConfig.confettiesNumber) console.error("confettiesNumber argument is deprecated, please use confettiNumber instead");
    return {
        confettiRadius: confettiRadius,
        confettiNumber: confettiNumber,
        confettiColors: confettiColors,
        emojis: emojis,
        emojiSize: emojiSize
    };
}
var ConfettiBatch = /*#__PURE__*/ function() {
    function ConfettiBatch(canvasContext) {
        var _this = this;
        _classCallCheck(this, ConfettiBatch);
        this.canvasContext = canvasContext;
        this.shapes = [];
        this.promise = new Promise(function(completionCallback) {
            return _this.resolvePromise = completionCallback;
        });
    }
    _createClass(ConfettiBatch, [
        {
            key: "getBatchCompletePromise",
            value: function getBatchCompletePromise() {
                return this.promise;
            }
        },
        {
            key: "addShapes",
            value: function addShapes() {
                var _this$shapes;
                (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);
            }
        },
        {
            key: "complete",
            value: function complete() {
                var _a;
                if (this.shapes.length) return false;
                (_a = this.resolvePromise) === null || _a === void 0 || _a.call(this);
                return true;
            }
        },
        {
            key: "processShapes",
            value: function processShapes(time, canvasHeight, cleanupInvisibleShapes) {
                var _this2 = this;
                var timeDelta = time.timeDelta, currentTime = time.currentTime;
                this.shapes = this.shapes.filter(function(shape) {
                    // Render the shapes in this batch
                    shape.updatePosition(timeDelta, currentTime);
                    shape.draw(_this2.canvasContext); // Only cleanup the shapes if we're being asked to
                    if (!cleanupInvisibleShapes) return true;
                    return shape.getIsVisibleOnCanvas(canvasHeight);
                });
            }
        }
    ]);
    return ConfettiBatch;
}();
var JSConfetti = /*#__PURE__*/ function() {
    function JSConfetti() {
        var jsConfettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, JSConfetti);
        this.activeConfettiBatches = [];
        this.canvas = jsConfettiConfig.canvas || createCanvas();
        this.canvasContext = this.canvas.getContext("2d");
        this.requestAnimationFrameRequested = false;
        this.lastUpdated = new Date().getTime();
        this.iterationIndex = 0;
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
    }
    _createClass(JSConfetti, [
        {
            key: "loop",
            value: function loop() {
                this.requestAnimationFrameRequested = false;
                fixDPR(this.canvas);
                var currentTime = new Date().getTime();
                var timeDelta = currentTime - this.lastUpdated;
                var canvasHeight = this.canvas.offsetHeight;
                var cleanupInvisibleShapes = this.iterationIndex % 10 === 0;
                this.activeConfettiBatches = this.activeConfettiBatches.filter(function(batch) {
                    batch.processShapes({
                        timeDelta: timeDelta,
                        currentTime: currentTime
                    }, canvasHeight, cleanupInvisibleShapes); // Do not remove invisible shapes on every iteration
                    if (!cleanupInvisibleShapes) return true;
                    return !batch.complete();
                });
                this.iterationIndex++;
                this.queueAnimationFrameIfNeeded(currentTime);
            }
        },
        {
            key: "queueAnimationFrameIfNeeded",
            value: function queueAnimationFrameIfNeeded(currentTime) {
                if (this.requestAnimationFrameRequested) // We already have a pended animation frame, so there is no more work
                return;
                if (this.activeConfettiBatches.length < 1) // No shapes to animate, so don't queue another frame
                return;
                this.requestAnimationFrameRequested = true; // Capture the last updated time for animation
                this.lastUpdated = currentTime || new Date().getTime();
                requestAnimationFrame(this.loop);
            }
        },
        {
            key: "addConfetti",
            value: function addConfetti() {
                var confettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var _normalizeConfettiCon = normalizeConfettiConfig(confettiConfig), confettiRadius = _normalizeConfettiCon.confettiRadius, confettiNumber = _normalizeConfettiCon.confettiNumber, confettiColors = _normalizeConfettiCon.confettiColors, emojis = _normalizeConfettiCon.emojis, emojiSize = _normalizeConfettiCon.emojiSize; // Use the bounding rect rather tahn the canvas width / height, because
                // .width / .height are unset until a layout pass has been completed. Upon
                // confetti being immediately queued on a page load, this hasn't happened so
                // the default of 300x150 will be returned, causing an improper source point
                // for the confetti animation.
                var canvasRect = this.canvas.getBoundingClientRect();
                var canvasWidth = canvasRect.width;
                var canvasHeight = canvasRect.height;
                var yPosition = canvasHeight * 5 / 7;
                var leftConfettiPosition = {
                    x: 0,
                    y: yPosition
                };
                var rightConfettiPosition = {
                    x: canvasWidth,
                    y: yPosition
                };
                var confettiGroup = new ConfettiBatch(this.canvasContext);
                for(var i = 0; i < confettiNumber / 2; i++){
                    var confettiOnTheRight = new ConfettiShape({
                        initialPosition: leftConfettiPosition,
                        direction: "right",
                        confettiRadius: confettiRadius,
                        confettiColors: confettiColors,
                        confettiNumber: confettiNumber,
                        emojis: emojis,
                        emojiSize: emojiSize,
                        canvasWidth: canvasWidth
                    });
                    var confettiOnTheLeft = new ConfettiShape({
                        initialPosition: rightConfettiPosition,
                        direction: "left",
                        confettiRadius: confettiRadius,
                        confettiColors: confettiColors,
                        confettiNumber: confettiNumber,
                        emojis: emojis,
                        emojiSize: emojiSize,
                        canvasWidth: canvasWidth
                    });
                    confettiGroup.addShapes(confettiOnTheRight, confettiOnTheLeft);
                }
                this.activeConfettiBatches.push(confettiGroup);
                this.queueAnimationFrameIfNeeded();
                return confettiGroup.getBatchCompletePromise();
            }
        },
        {
            key: "clearCanvas",
            value: function clearCanvas() {
                this.activeConfettiBatches = [];
            }
        },
        {
            key: "destroyCanvas",
            value: function destroyCanvas() {
                this.canvas.remove();
            }
        }
    ]);
    return JSConfetti;
}();
exports.default = JSConfetti;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lW2Ov":[function(require,module,exports) {
/*!
 * Snackbar v0.1.14
 * http://polonel.com/Snackbar
 *
 * Copyright 2018 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */ (function(root, factory) {
    "use strict";
    if (typeof define === "function" && define.amd) define([], function() {
        return root.Snackbar = factory();
    });
    else if (0, module.exports) module.exports = root.Snackbar = factory();
    else root.Snackbar = factory();
})(this, function() {
    var Snackbar = {};
    Snackbar.current = null;
    var $defaults = {
        text: "Default Text",
        textColor: "#FFFFFF",
        width: "auto",
        showAction: true,
        actionText: "Dismiss",
        actionTextAria: "Dismiss, Description for Screen Readers",
        alertScreenReader: false,
        actionTextColor: "#4CAF50",
        showSecondButton: false,
        secondButtonText: "",
        secondButtonAria: "Description for Screen Readers",
        secondButtonTextColor: "#4CAF50",
        backgroundColor: "#323232",
        pos: "bottom-left",
        duration: 5000,
        customClass: "",
        onActionClick: function(element) {
            element.style.opacity = 0;
        },
        onSecondButtonClick: function(element) {},
        onClose: function(element) {}
    };
    Snackbar.show = function($options) {
        var options = Extend(true, $defaults, $options);
        if (Snackbar.current) {
            Snackbar.current.style.opacity = 0;
            setTimeout((function() {
                var $parent = this.parentElement;
                if ($parent) // possible null if too many/fast Snackbars
                $parent.removeChild(this);
            }).bind(Snackbar.current), 500);
        }
        Snackbar.snackbar = document.createElement("div");
        Snackbar.snackbar.className = "snackbar-container " + options.customClass;
        Snackbar.snackbar.style.width = options.width;
        var $p = document.createElement("p");
        $p.style.margin = 0;
        $p.style.padding = 0;
        $p.style.color = options.textColor;
        $p.style.fontSize = "14px";
        $p.style.fontWeight = 300;
        $p.style.lineHeight = "1em";
        $p.innerHTML = options.text;
        Snackbar.snackbar.appendChild($p);
        Snackbar.snackbar.style.background = options.backgroundColor;
        if (options.showSecondButton) {
            var secondButton = document.createElement("button");
            secondButton.className = "action";
            secondButton.innerHTML = options.secondButtonText;
            secondButton.setAttribute("aria-label", options.secondButtonAria);
            secondButton.style.color = options.secondButtonTextColor;
            secondButton.addEventListener("click", function() {
                options.onSecondButtonClick(Snackbar.snackbar);
            });
            Snackbar.snackbar.appendChild(secondButton);
        }
        if (options.showAction) {
            var actionButton = document.createElement("button");
            actionButton.className = "action";
            actionButton.innerHTML = options.actionText;
            actionButton.setAttribute("aria-label", options.actionTextAria);
            actionButton.style.color = options.actionTextColor;
            actionButton.addEventListener("click", function() {
                options.onActionClick(Snackbar.snackbar);
            });
            Snackbar.snackbar.appendChild(actionButton);
        }
        if (options.duration) setTimeout((function() {
            if (Snackbar.current === this) {
                Snackbar.current.style.opacity = 0;
                // When natural remove event occurs let's move the snackbar to its origins
                Snackbar.current.style.top = "-100px";
                Snackbar.current.style.bottom = "-100px";
            }
        }).bind(Snackbar.snackbar), options.duration);
        if (options.alertScreenReader) Snackbar.snackbar.setAttribute("role", "alert");
        Snackbar.snackbar.addEventListener("transitionend", (function(event, elapsed) {
            if (event.propertyName === "opacity" && this.style.opacity === "0") {
                if (typeof options.onClose === "function") options.onClose(this);
                this.parentElement.removeChild(this);
                if (Snackbar.current === this) Snackbar.current = null;
            }
        }).bind(Snackbar.snackbar));
        Snackbar.current = Snackbar.snackbar;
        document.body.appendChild(Snackbar.snackbar);
        var $bottom = getComputedStyle(Snackbar.snackbar).bottom;
        var $top = getComputedStyle(Snackbar.snackbar).top;
        Snackbar.snackbar.style.opacity = 1;
        Snackbar.snackbar.className = "snackbar-container " + options.customClass + " snackbar-pos " + options.pos;
    };
    Snackbar.close = function() {
        if (Snackbar.current) Snackbar.current.style.opacity = 0;
    };
    // Pure JS Extend
    // http://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
    var Extend = function() {
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }
        var merge = function(obj) {
            for(var prop in obj)if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") extended[prop] = Extend(true, extended[prop], obj[prop]);
                else extended[prop] = obj[prop];
            }
        };
        for(; i < length; i++){
            var obj = arguments[i];
            merge(obj);
        }
        return extended;
    };
    return Snackbar;
});

},{}],"KS5VT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameData", ()=>gameData);
const gameData = [
    {
        category: "Technology",
        clues: [
            "Search",
            "Browser",
            "Ads"
        ],
        answer: "Google",
        hint: "You probably say its name when you need to look something up."
    },
    {
        category: "Animals",
        clues: [
            "Stripes",
            "Horse-like",
            "Black and white"
        ],
        answer: "Zebra",
        hint: "It looks like a horse but wears stripes."
    },
    {
        category: "Food",
        clues: [
            "Tropical",
            "Yellow",
            "Curved"
        ],
        answer: "Banana",
        hint: "This fruit comes in bunches and is easy to peel."
    },
    {
        category: "Movies",
        clues: [
            "Wizard",
            "Scar",
            "Magic"
        ],
        answer: "Harry Potter",
        hint: "He\u2019s the kid with a scar who goes to a magical school."
    },
    {
        category: "Geography",
        clues: [
            "Island",
            "Kangaroos",
            "Outback"
        ],
        answer: "Australia",
        hint: "This place is famous for kangaroos and the Outback."
    },
    {
        category: "Sports",
        clues: [
            "Court",
            "Ball",
            "Net"
        ],
        answer: "Basketball",
        hint: "You\u2019ll see people dribbling and shooting hoops in this game."
    },
    {
        category: "Music",
        clues: [
            "King",
            "Rock",
            "Graceland"
        ],
        answer: "Elvis Presley",
        hint: "He\u2019s the guy who shook his hips and sang \u2018Hound Dog.\u2019"
    },
    {
        category: "Literature",
        clues: [
            "Whale",
            "Sea",
            "Ahab"
        ],
        answer: "Moby Dick",
        hint: "A captain spends the whole story chasing a big white whale."
    },
    {
        category: "Technology",
        clues: [
            "Photos",
            "Social",
            "Stories"
        ],
        answer: "Instagram",
        hint: "People post their best photos here for likes."
    },
    {
        category: "Animals",
        clues: [
            "Jungle",
            "King",
            "Mane"
        ],
        answer: "Lion",
        hint: "This big cat is often called the king of the jungle."
    },
    {
        category: "Food",
        clues: [
            "Red",
            "Sauce",
            "Cheese"
        ],
        answer: "Pizza",
        hint: "Often chosen for sharing with friends."
    },
    {
        category: "Movies",
        clues: [
            "Ship",
            "Iceberg",
            "Romance"
        ],
        answer: "Titanic",
        hint: "Its name is remembered for a famous misfortune."
    },
    {
        category: "Geography",
        clues: [
            "Pyramids",
            "Desert",
            "Pharaohs"
        ],
        answer: "Egypt",
        hint: "Known for structures that have stood for thousands of years."
    },
    {
        category: "Sports",
        clues: [
            "Field",
            "Goal",
            "Team"
        ],
        answer: "Soccer",
        hint: "It\u2019s played with feet, not hands."
    },
    {
        category: "Literature",
        clues: [
            "Ring",
            "Journey",
            "Middle Earth"
        ],
        answer: "Lord of the Rings",
        hint: "A journey with a group set to destroy something powerful."
    },
    {
        category: "Technology",
        clues: [
            "Videos",
            "Subscribers",
            "Channels"
        ],
        answer: "YouTube",
        hint: "A place where people watch and upload videos."
    },
    {
        category: "Animals",
        clues: [
            "Aquatic",
            "Fins",
            "Predator"
        ],
        answer: "Shark",
        hint: "Recognized by its iconic fin cutting through water."
    },
    {
        category: "Food",
        clues: [
            "Mexican",
            "Tortilla",
            "Folded"
        ],
        answer: "Taco",
        hint: "Folded but never crumpled."
    },
    {
        category: "Movies",
        clues: [
            "Space",
            "Force",
            "Galaxy"
        ],
        answer: "Star Wars",
        hint: "A battle between light and dark, set in the stars."
    },
    {
        category: "Geography",
        clues: [
            "Eiffel Tower",
            "Paris",
            "Wine"
        ],
        answer: "France",
        hint: "This place is home to a tower that\u2019s hard to miss."
    },
    {
        category: "Sports",
        clues: [
            "Racket",
            "Net",
            "Serve"
        ],
        answer: "Tennis",
        hint: "A fast-paced game played by millions around the world."
    },
    {
        category: "Music",
        clues: [
            "Fab Four",
            "Liverpool",
            "British"
        ],
        answer: "The Beatles",
        hint: "Famous for changing the sound of the 60s."
    },
    {
        category: "Literature",
        clues: [
            "Dystopia",
            "Big Brother",
            "Surveillance"
        ],
        answer: "1984",
        hint: "A story about a world where everyone is being watched."
    },
    {
        category: "Technology",
        clues: [
            "Smartphone",
            "Apps",
            "iOS"
        ],
        answer: "Apple",
        hint: "A tech giant known for sleek gadgets and devices."
    },
    {
        category: "Animals",
        clues: [
            "Mammal",
            "Ocean",
            "Whale"
        ],
        answer: "Dolphin",
        hint: "A playful ocean animal often seen in groups."
    },
    {
        category: "Food",
        clues: [
            "Italian",
            "Pasta",
            "Cheese"
        ],
        answer: "Lasagna",
        hint: "This dish is known for its layers of comfort."
    },
    {
        category: "Movies",
        clues: [
            "Superhero",
            "Avengers",
            "Hammer"
        ],
        answer: "Thor",
        hint: "Wields something that\u2019s impossible for most to lift."
    },
    {
        category: "Geography",
        clues: [
            "Mountain",
            "Cold",
            "Everest"
        ],
        answer: "Himalayas",
        hint: "The roof of the world."
    },
    {
        category: "Music",
        clues: [
            "Country",
            "Guitar",
            "Tennessee"
        ],
        answer: "Johnny Cash",
        hint: "His voice matched the color of his clothes."
    },
    {
        category: "Literature",
        clues: [
            "Fantasy",
            "Dragons",
            "Throne"
        ],
        answer: "Game of Thrones",
        hint: "A story where many fight for one seat."
    },
    {
        category: "Technology",
        clues: [
            "Streaming",
            "Shows",
            "Movies"
        ],
        answer: "Netflix",
        hint: "This place is known for its 'binge-worthy' offerings."
    },
    {
        category: "Geography",
        clues: [
            "Rainforest",
            "River",
            "South America"
        ],
        answer: "Amazon",
        hint: "Spanning vast lands, this place is known for its richness in life."
    },
    {
        category: "Technology",
        clues: [
            "Text",
            "Messaging",
            "Blue Bubbles"
        ],
        answer: "iMessage",
        hint: "Famous for making communication a bit 'blue.'"
    },
    {
        category: "Animals",
        clues: [
            "Marsupial",
            "Australia",
            "Pouch"
        ],
        answer: "Kangaroo",
        hint: "Jumps higher than most and carries its young along."
    },
    {
        category: "Food",
        clues: [
            "Breakfast",
            "Fluffy",
            "Syrup"
        ],
        answer: "Pancakes",
        hint: "Often flipped before being stacked."
    },
    {
        category: "Movies",
        clues: [
            "Dinosaurs",
            "Island",
            "Park"
        ],
        answer: "Jurassic Park",
        hint: "An island where old meets new in unexpected ways."
    },
    {
        category: "Geography",
        clues: [
            "Desert",
            "Pyramids",
            "Sphinx"
        ],
        answer: "Egypt",
        hint: "Famous for its ancient wonders and historical rulers."
    },
    {
        category: "Sports",
        clues: [
            "Puck",
            "Ice",
            "Stick"
        ],
        answer: "Hockey",
        hint: "Fast-paced and often ends in a 'shootout.'"
    },
    {
        category: "Music",
        clues: [
            "Rap",
            "8 Mile",
            "Detroit"
        ],
        answer: "Eminem",
        hint: "Famous for lyrics that come fast and with meaning."
    },
    {
        category: "Literature",
        clues: [
            "Detective",
            "Pipe",
            "London"
        ],
        answer: "Sherlock Holmes",
        hint: "A master at seeing what others miss."
    },
    {
        category: "Technology",
        clues: [
            "Photos",
            "Filters",
            "Square"
        ],
        answer: "Instagram",
        hint: "Pictures are worth a thousand words, especially here."
    },
    {
        category: "Animals",
        clues: [
            "Long Neck",
            "Africa",
            "Tall"
        ],
        answer: "Giraffe",
        hint: "Looks down on most due to its height."
    },
    {
        category: "Food",
        clues: [
            "Dairy",
            "Frozen",
            "Dessert"
        ],
        answer: "Ice Cream",
        hint: "Best served cold, and often enjoyed when it\u2019s warm."
    },
    {
        category: "Movies",
        clues: [
            "Adventure",
            "Treasure",
            "Whip"
        ],
        answer: "Indiana Jones",
        hint: "Known for always retrieving what was thought to be lost."
    },
    {
        category: "Geography",
        clues: [
            "Big Apple",
            "Empire State",
            "Statue of Liberty"
        ],
        answer: "New York",
        hint: "The city that never sleeps."
    },
    {
        category: "Sports",
        clues: [
            "Field",
            "Bat",
            "Home Run"
        ],
        answer: "Baseball",
        hint: "A game where people aim to make it back to where they started."
    },
    {
        category: "Music",
        clues: [
            "Purple",
            "Paisley Park",
            "Guitar"
        ],
        answer: "Prince",
        hint: "Famous for a color and for making waves in music."
    },
    {
        category: "Literature",
        clues: [
            "Ring",
            "Gollum",
            "Hobbits"
        ],
        answer: "The Lord of the Rings",
        hint: "A journey with a powerful item at its core."
    },
    {
        category: "Technology",
        clues: [
            "Video",
            "Streaming",
            "Subscription"
        ],
        answer: "Netflix",
        hint: "The place to go to watch shows and movies online."
    },
    {
        category: "Animals",
        clues: [
            "Nocturnal",
            "Wings",
            "Vampire"
        ],
        answer: "Bat",
        hint: "This flying creature is often seen at night."
    },
    {
        category: "Geography",
        clues: [
            "South America",
            "Soccer",
            "Carnival"
        ],
        answer: "Brazil",
        hint: "Known for its vibrant celebrations and rhythm."
    },
    {
        category: "Sports",
        clues: [
            "Court",
            "Net",
            "Volleys"
        ],
        answer: "Tennis",
        hint: "A fast-paced game played by millions around the world."
    },
    {
        category: "Music",
        clues: [
            "Thriller",
            "Glove",
            "Moonwalk"
        ],
        answer: "Michael Jackson",
        hint: "A legend on stage, remembered for a certain move."
    },
    {
        category: "Literature",
        clues: [
            "Witches",
            "Flying Monkeys",
            "Yellow Brick Road"
        ],
        answer: "The Wizard of Oz",
        hint: "Followed a road that led to an unexpected revelation."
    },
    {
        category: "Technology",
        clues: [
            "Work",
            "Microsoft",
            "Documents"
        ],
        answer: "Microsoft Office",
        hint: "A toolkit often opened when there\u2019s work to be done."
    },
    {
        category: "Animals",
        clues: [
            "Black and White",
            "Bamboo",
            "China"
        ],
        answer: "Panda",
        hint: "A gentle giant with a unique diet."
    },
    {
        category: "Food",
        clues: [
            "Mexican",
            "Spicy",
            "Wrapped"
        ],
        answer: "Burrito",
        hint: "It\u2019s wrapped but never boxed."
    },
    {
        category: "Movies",
        clues: [
            "Boxing",
            "Philadelphia",
            "Underdog"
        ],
        answer: "Rocky",
        hint: "Started from the bottom but fought his way to the top."
    },
    {
        category: "Geography",
        clues: [
            "Ice",
            "Volcanoes",
            "Northern Lights"
        ],
        answer: "Iceland",
        hint: "Where fire and ice coexist."
    },
    {
        category: "Sports",
        clues: [
            "Race",
            "Track",
            "Fast"
        ],
        answer: "Running",
        hint: "An activity where speed and endurance go hand in hand."
    },
    {
        category: "Music",
        clues: [
            "Fab Four",
            "Liverpool",
            "British"
        ],
        answer: "The Beatles",
        hint: "A group from the UK that made a huge impact on music."
    },
    {
        category: "Literature",
        clues: [
            "Magic",
            "School",
            "Wand"
        ],
        answer: "Harry Potter",
        hint: "A young hero destined for greatness."
    },
    {
        category: "Technology",
        clues: [
            "Video",
            "Streaming",
            "Google"
        ],
        answer: "YouTube",
        hint: "A platform for watching and sharing videos."
    },
    {
        category: "Animals",
        clues: [
            "Tropical",
            "Colorful",
            "Bird"
        ],
        answer: "Parrot",
        hint: "A bird known for its bright colors and ability to mimic sounds."
    },
    {
        category: "Food",
        clues: [
            "Grill",
            "Cheese",
            "Bread"
        ],
        answer: "Grilled Cheese",
        hint: "Simple, warm, and always satisfying."
    },
    {
        category: "Movies",
        clues: [
            "Superhero",
            "Marvel",
            "Iron Man"
        ],
        answer: "The Avengers",
        hint: "A team of heroes coming together to save the day."
    },
    {
        category: "Geography",
        clues: [
            "Big Ben",
            "Tea",
            "Royal Family"
        ],
        answer: "United Kingdom",
        hint: "A place with a long-standing monarchy."
    },
    {
        category: "Sports",
        clues: [
            "Pool",
            "Stick",
            "Balls"
        ],
        answer: "Billiards",
        hint: "A game played with precision and a steady hand."
    },
    {
        category: "Music",
        clues: [
            "Piano",
            "Rocket Man",
            "British"
        ],
        answer: "Elton John",
        hint: "A star known for flashy outfits and classic tunes."
    },
    {
        category: "Literature",
        clues: [
            "Shakespeare",
            "Love",
            "Tragedy"
        ],
        answer: "Romeo and Juliet",
        hint: "A tale of love that\u2019s anything but simple."
    },
    {
        category: "Technology",
        clues: [
            "Shopping",
            "Online",
            "Delivery"
        ],
        answer: "Amazon",
        hint: "From books to just about everything, this place delivers."
    },
    {
        category: "Animals",
        clues: [
            "Wool",
            "Farm",
            "Flock"
        ],
        answer: "Sheep",
        hint: "Famous for following the herd."
    },
    {
        category: "Food",
        clues: [
            "Dough",
            "Sweet",
            "Icing"
        ],
        answer: "Donut",
        hint: "A circular treat with a hole in the middle."
    },
    {
        category: "Movies",
        clues: [
            "Robot",
            "Future",
            "Skynet"
        ],
        answer: "Terminator",
        hint: "Sent from the future to change the past."
    },
    {
        category: "Geography",
        clues: [
            "Wall",
            "Forbidden City",
            "Dragon"
        ],
        answer: "China",
        hint: "Known for a long wall and a rich history."
    },
    {
        category: "Music",
        clues: [
            "Pop",
            "Moonwalk",
            "King"
        ],
        answer: "Michael Jackson",
        hint: "A global star known for his dance moves and hit songs."
    },
    {
        category: "Technology",
        clues: [
            "Electric",
            "Autopilot",
            "Charging"
        ],
        answer: "Tesla",
        hint: "Known for revolutionizing how we move without using gas."
    },
    {
        category: "Animals",
        clues: [
            "Slow",
            "Shell",
            "Reptile"
        ],
        answer: "Turtle",
        hint: "This creature carries its home on its back."
    },
    {
        category: "Food",
        clues: [
            "Sweet",
            "Fruit",
            "Pie"
        ],
        answer: "Apple",
        hint: "Often paired with a teacher as a gift."
    },
    {
        category: "Movies",
        clues: [
            "Supernatural",
            "Kid",
            "Ghost"
        ],
        answer: "The Sixth Sense",
        hint: "A story where seeing isn\u2019t always believing."
    },
    {
        category: "Geography",
        clues: [
            "Snow",
            "Cold",
            "Loonie"
        ],
        answer: "Canada",
        hint: "Known for its polite people and chilly winters."
    },
    {
        category: "Sports",
        clues: [
            "Helmet",
            "Touchdown",
            "Field"
        ],
        answer: "Football",
        hint: "A game where players wear helmets and aim to reach the end zone."
    },
    {
        category: "Music",
        clues: [
            "Jazz",
            "Trumpet",
            "New Orleans"
        ],
        answer: "Louis Armstrong",
        hint: "A legendary musician known for his gravelly voice and trumpet."
    },
    {
        category: "Literature",
        clues: [
            "Adventure",
            "Pirate",
            "Treasure"
        ],
        answer: "Treasure Island",
        hint: "A tale of pirates and a hidden fortune."
    },
    {
        category: "Technology",
        clues: [
            "Smart",
            "Portable",
            "Touchscreen"
        ],
        answer: "Smartphone",
        hint: "Almost everyone carries one in their pocket."
    },
    {
        category: "Animals",
        clues: [
            "Furry",
            "Tree",
            "Claws"
        ],
        answer: "Koala",
        hint: "This cuddly creature spends most of its time sleeping in trees."
    },
    {
        category: "Technology",
        clues: [
            "Portable",
            "Music",
            "Clickwheel"
        ],
        answer: "iPod",
        hint: "Revolutionized how people listened to music on the go."
    },
    {
        category: "Animals",
        clues: [
            "Echo",
            "Blind",
            "Night"
        ],
        answer: "Bat",
        hint: "Navigates using sound in the dark."
    },
    {
        category: "Food",
        clues: [
            "Green",
            "Spread",
            "Toast"
        ],
        answer: "Avocado",
        hint: "Often used as a trendy topping in breakfast dishes."
    },
    {
        category: "Movies",
        clues: [
            "Adventure",
            "Whip",
            "Archaeologist"
        ],
        answer: "Indiana Jones",
        hint: "Known for retrieving ancient artifacts and wearing a fedora."
    },
    {
        category: "Sports",
        clues: [
            "Fast",
            "Track",
            "Relay"
        ],
        answer: "Sprint",
        hint: "The shortest race, but requires the most speed."
    },
    {
        category: "Music",
        clues: [
            "Opera",
            "Mask",
            "Chandelier"
        ],
        answer: "The Phantom of the Opera",
        hint: "A haunting story set in a Parisian theater."
    },
    {
        category: "Literature",
        clues: [
            "Rebellion",
            "Dystopia",
            "Districts"
        ],
        answer: "The Hunger Games",
        hint: "A dangerous competition is held every year in this world."
    },
    {
        category: "Technology",
        clues: [
            "Photos",
            "Memories",
            "Square Prints"
        ],
        answer: "Polaroid",
        hint: "Instantly develops what you capture."
    },
    {
        category: "Animals",
        clues: [
            "Stripes",
            "Endangered",
            "Big Cat"
        ],
        answer: "Tiger",
        hint: "Known for its unique orange coat and black stripes."
    },
    {
        category: "Technology",
        clues: [
            "Streaming",
            "Music",
            "Subscription"
        ],
        answer: "Spotify",
        hint: "Gave people access to millions of songs on demand."
    },
    {
        category: "Animals",
        clues: [
            "Insect",
            "Colony",
            "Queen"
        ],
        answer: "Ant",
        hint: "Known for its teamwork and complex underground homes."
    },
    {
        category: "Food",
        clues: [
            "Layered",
            "Crisp",
            "Chocolate"
        ],
        answer: "KitKat",
        hint: "A treat known for snapping apart into pieces."
    },
    {
        category: "Movies",
        clues: [
            "Dream",
            "Heist",
            "Spinning Top"
        ],
        answer: "Inception",
        hint: "A story where reality is often questioned."
    },
    {
        category: "Geography",
        clues: [
            "Capital",
            "Mount Fuji",
            "Island"
        ],
        answer: "Japan",
        hint: "This island nation is known for its technology and tradition."
    },
    {
        category: "Sports",
        clues: [
            "Racket",
            "Shuttlecock",
            "Net"
        ],
        answer: "Badminton",
        hint: "A fast-paced game where a lightweight object is hit over the net."
    },
    {
        category: "Music",
        clues: [
            "Reggae",
            "Jamaica",
            "Dreadlocks"
        ],
        answer: "Bob Marley",
        hint: "An artist whose message of peace and love spread worldwide."
    },
    {
        category: "Literature",
        clues: [
            "Orphan",
            "Boarding School",
            "Wand"
        ],
        answer: "Harry Potter",
        hint: "This boy wizard faced many challenges at a magical school."
    },
    {
        category: "Animals",
        clues: [
            "Aquatic",
            "Translucent",
            "Tentacles"
        ],
        answer: "Jellyfish",
        hint: "This creature drifts in the ocean and has a sting you want to avoid."
    },
    {
        category: "Technology",
        clues: [
            "Cloud",
            "Storage",
            "Photos"
        ],
        answer: "Dropbox",
        hint: "A place to keep your files safe and accessible online."
    },
    {
        category: "Animals",
        clues: [
            "Small",
            "Pouch",
            "Nocturnal"
        ],
        answer: "Opossum",
        hint: "This animal plays dead to avoid danger."
    },
    {
        category: "Food",
        clues: [
            "Sweet",
            "Layers",
            "Party"
        ],
        answer: "Cake",
        hint: "Often the center of celebrations and birthdays."
    },
    {
        category: "Movies",
        clues: [
            "Adventure",
            "Aztec Gold",
            "Pirates"
        ],
        answer: "Pirates of the Caribbean",
        hint: "A swashbuckling adventure on the high seas."
    },
    {
        category: "Geography",
        clues: [
            "Island",
            "Pacific",
            "Volcano"
        ],
        answer: "Hawaii",
        hint: "A tropical paradise known for surfing and active volcanoes."
    },
    {
        category: "Sports",
        clues: [
            "Race",
            "Fast",
            "Cars"
        ],
        answer: "Formula 1",
        hint: "High-speed vehicles race on circuits around the world."
    },
    {
        category: "Music",
        clues: [
            "Guitar",
            "Legend",
            "Purple"
        ],
        answer: "Prince",
        hint: "Known for his groundbreaking music and an affinity for a certain color."
    },
    {
        category: "Literature",
        clues: [
            "Magic",
            "Beast",
            "Fairy Tale"
        ],
        answer: "Beauty and the Beast",
        hint: "A tale about finding love beyond appearances."
    },
    {
        category: "Animals",
        clues: [
            "Scales",
            "Desert",
            "Tongue"
        ],
        answer: "Lizard",
        hint: "This cold-blooded creature is often seen sunbathing on rocks."
    },
    {
        category: "Animals",
        clues: [
            "Fast",
            "Savanna",
            "Spots"
        ],
        answer: "Cheetah",
        hint: "The fastest land animal, known for its speed and agility."
    },
    {
        category: "Literature",
        clues: [
            "Adventure",
            "Boy",
            "Fairy"
        ],
        answer: "Peter Pan",
        hint: "A classic tale of a boy who never grows up."
    },
    {
        category: "Music",
        clues: [
            "Compton",
            "Producer",
            "West Coast"
        ],
        answer: "Dr. Dre",
        hint: "Discovered Eminem and Snoop Dogg and is the co-founder of Beats."
    },
    {
        category: "Geography",
        clues: [
            "Mountains",
            "Pasta",
            "Colosseum"
        ],
        answer: "Italy",
        hint: "A country known for its cuisine and ancient history."
    },
    {
        category: "Food",
        clues: [
            "Chewy",
            "Candy",
            "Rainbow"
        ],
        answer: "Skittles",
        hint: "A colorful treat that lets you 'taste the rainbow.'"
    },
    {
        category: "Food",
        clues: [
            "Spread",
            "Hazelnut",
            "Chocolate"
        ],
        answer: "Nutella",
        hint: "A popular chocolate spread often eaten with bread."
    },
    {
        category: "Movies",
        clues: [
            "Robot",
            "Garbage",
            "Space"
        ],
        answer: "WALL-E",
        hint: "A small robot left to clean up Earth meets a companion in space."
    },
    {
        category: "Literature",
        clues: [
            "Shipwreck",
            "Island",
            "Survival"
        ],
        answer: "Robinson Crusoe",
        hint: "A tale of a man stranded on an island for many years."
    },
    {
        category: "Sports",
        clues: [
            "Board",
            "Waves",
            "Ocean"
        ],
        answer: "Surfing",
        hint: "A water sport where you ride waves."
    },
    {
        category: "Technology",
        clues: [
            "Electric",
            "Grid",
            "Renewable"
        ],
        answer: "Solar Panels",
        hint: "A clean energy source that captures power from the sun."
    },
    {
        category: "Food",
        clues: [
            "Tiny",
            "Explodes",
            "Party"
        ],
        answer: "Pop Rocks",
        hint: "The candy that feels like a fireworks show is going off in your mouth."
    },
    {
        category: "Animals",
        clues: [
            "Invisible",
            "Spooky",
            "Floats"
        ],
        answer: "Ghost Shark",
        hint: "Not an actual ghost, but still probably haunts your nightmares."
    },
    {
        category: "Technology",
        clues: [
            "Laser",
            "Future",
            "Cutting"
        ],
        answer: "Lightsaber",
        hint: "The most dramatic way to slice toast in a galaxy far, far away."
    },
    {
        category: "Geography",
        clues: [
            "Cold",
            "Glowing",
            "Northern"
        ],
        answer: "Aurora Borealis",
        hint: "That magical sky light show you have to go REALLY far north to see."
    },
    {
        category: "Sports",
        clues: [
            "Brooms",
            "Flying",
            "Golden"
        ],
        answer: "Quidditch",
        hint: "A game where falling off your broom is highly discouraged."
    },
    {
        category: "Music",
        clues: [
            "Saxophone",
            "Epic Solo",
            "1980s"
        ],
        answer: "Careless Whisper",
        hint: "That one sax riff that immediately makes things 100% more dramatic."
    },
    {
        category: "Technology",
        clues: [
            "Cube",
            "Puzzle",
            "Colors"
        ],
        answer: "Rubik's Cube",
        hint: "The most frustrating way to prove you're not a genius."
    },
    {
        category: "Geography",
        clues: [
            "Triangle",
            "Disappearing",
            "Mystery"
        ],
        answer: "Bermuda Triangle",
        hint: "The place where boats and planes go missing\u2014and it's always spooky."
    },
    {
        category: "Literature",
        clues: [
            "Green Eggs",
            "Rhymes",
            "Whoville"
        ],
        answer: "Dr. Seuss",
        hint: "A beloved storyteller whose characters have fur and love breakfast."
    },
    {
        category: "Technology",
        clues: [
            "Virtual",
            "Fantasy",
            "Level-Up"
        ],
        answer: "Video Game",
        hint: "Where you can slay dragons, solve puzzles, or just jump on mushrooms."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Hairy",
            "Huge",
            "Roars"
        ],
        answer: "Bigfoot",
        hint: "The most elusive creature\u2014seen by many, caught by none."
    },
    {
        category: "Technology",
        clues: [
            "Clap",
            "Off",
            "Lights"
        ],
        answer: "The Clapper",
        hint: "The laziest and loudest way to turn off your lights."
    },
    {
        category: "Animals",
        clues: [
            "Red",
            "Sneaky",
            "Bushy Tail"
        ],
        answer: "Fox",
        hint: "This clever animal is famous for asking 'What does it say?'"
    },
    {
        category: "Food",
        clues: [
            "Crispy",
            "Golden",
            "Curly"
        ],
        answer: "French Fries",
        hint: "The reason you tell yourself you don\u2019t need to eat vegetables."
    },
    {
        category: "Movies",
        clues: [
            "Talking",
            "Toys",
            "Cowboy"
        ],
        answer: "Toy Story",
        hint: "A movie where your childhood toys come to life (in a non-creepy way)."
    },
    {
        category: "Geography",
        clues: [
            "Floating",
            "Giant",
            "Melting"
        ],
        answer: "Iceberg",
        hint: "The unsinkable ship's worst nightmare, but it\u2019s still chilling."
    },
    {
        category: "Literature",
        clues: [
            "Crazy",
            "Wonderland",
            "Tea Party"
        ],
        answer: "Alice in Wonderland",
        hint: "A story where getting lost is an adventure, and nothing makes sense."
    },
    {
        category: "Animals",
        clues: [
            "Horned",
            "Angry",
            "Charging"
        ],
        answer: "Rhino",
        hint: "This armored-looking beast can run at you like a tank with legs."
    },
    {
        category: "Animals",
        clues: [
            "Armor",
            "Rolls",
            "Ball"
        ],
        answer: "Armadillo",
        hint: "This critter is basically nature\u2019s version of a medieval knight."
    },
    {
        category: "Food",
        clues: [
            "Green",
            "Spicy",
            "Smash"
        ],
        answer: "Guacamole",
        hint: "A tasty green dip that's the life of any party\u2014until it's gone."
    },
    {
        category: "Movies",
        clues: [
            "Jaws",
            "Boat",
            "Bigger"
        ],
        answer: "Sharknado",
        hint: "When sharks meet weather, and it\u2019s exactly as ridiculous as it sounds."
    },
    {
        category: "Geography",
        clues: [
            "Dry",
            "Hot",
            "Cacti"
        ],
        answer: "Sahara Desert",
        hint: "A place so hot and dry, even the camels have second thoughts."
    },
    {
        category: "Sports",
        clues: [
            "Rink",
            "Puck",
            "Body Check"
        ],
        answer: "Ice Hockey",
        hint: "The only sport where gliding and smashing into someone is completely normal."
    },
    {
        category: "Music",
        clues: [
            "Tuba",
            "Parade",
            "March"
        ],
        answer: "Marching Band",
        hint: "A group that makes walking in formation somehow sound amazing."
    },
    {
        category: "Literature",
        clues: [
            "Giant",
            "Peach",
            "Insects"
        ],
        answer: "James and the Giant Peach",
        hint: "A story where the fruit is bigger than the adventure."
    },
    {
        category: "Technology",
        clues: [
            "Screen",
            "Portable",
            "Games"
        ],
        answer: "Game Boy",
        hint: "The handheld console that kept kids entertained and batteries drained."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Fire",
            "Wings",
            "Scales"
        ],
        answer: "Dragon",
        hint: "This creature loves gold and has a bad habit of setting things on fire."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Horn",
            "Magic",
            "Horse"
        ],
        answer: "Unicorn",
        hint: "A magical horse with a horn, known for spreading rainbows and sparkles."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Water",
            "Tail",
            "Song"
        ],
        answer: "Mermaid",
        hint: "Half human, half fish, known for their enchanting voices."
    },
    {
        category: "Superpowers",
        clues: [
            "Disappear",
            "Invisible",
            "Stealth"
        ],
        answer: "Invisibility",
        hint: "The power to sneak around without being seen."
    },
    {
        category: "Superpowers",
        clues: [
            "Time",
            "Jump",
            "Travel"
        ],
        answer: "Time Travel",
        hint: "The ability to go backward or forward in time, like a human time machine."
    },
    {
        category: "Superpowers",
        clues: [
            "Mind",
            "Control",
            "Thoughts"
        ],
        answer: "Telepathy",
        hint: "Reading minds and hearing thoughts without saying a word."
    },
    {
        category: "Superpowers",
        clues: [
            "Strength",
            "Lift",
            "Smash"
        ],
        answer: "Super Strength",
        hint: "The power to lift cars, buildings, and pretty much anything without breaking a sweat."
    },
    {
        category: "Superpowers",
        clues: [
            "Fly",
            "Sky",
            "Wings"
        ],
        answer: "Flight",
        hint: "The ability to soar through the skies faster than a plane."
    },
    {
        category: "Inventions",
        clues: [
            "Portable",
            "Pencil Trick",
            "Tape"
        ],
        answer: "Walkman",
        hint: "The retro gadget that let you take your tunes anywhere, one cassette at a time."
    },
    {
        category: "Inventions",
        clues: [
            "Typing",
            "Mechanical",
            "Clicky"
        ],
        answer: "Typewriter",
        hint: "Before keyboards, this clicky invention was the way to write a novel."
    },
    {
        category: "Inventions",
        clues: [
            "Wheels",
            "Glide",
            "Shoes"
        ],
        answer: "Roller Skates",
        hint: "The shoe that turns walking into rolling, usually followed by falling."
    },
    {
        category: "Inventions",
        clues: [
            "Morse",
            "Message",
            "Dots"
        ],
        answer: "Telegraph",
        hint: "A 19th-century device that used dots and dashes to send messages across long distances."
    },
    {
        category: "Inventions",
        clues: [
            "Flight",
            "Wright",
            "Propeller"
        ],
        answer: "Airplane",
        hint: "This invention helped people reach new heights\u2014literally."
    },
    {
        category: "Board Games",
        clues: [
            "Wrench",
            "Murder",
            "Scarlett"
        ],
        answer: "Clue",
        hint: "A mystery-solving game where you figure out who did it in the library with a candlestick."
    },
    {
        category: "Board Games",
        clues: [
            "Money",
            "Houses",
            "Bankruptcy"
        ],
        answer: "Monopoly",
        hint: "This game is a fast track to becoming a property tycoon\u2014or ending friendships."
    },
    {
        category: "Board Games",
        clues: [
            "Tiles",
            "Letters",
            "Words"
        ],
        answer: "Scrabble",
        hint: "The game that turns spelling into a competition, one triple word score at a time."
    },
    {
        category: "Board Games",
        clues: [
            "Candy",
            "Path",
            "Sweet"
        ],
        answer: "Candy Land",
        hint: "A colorful, sugary game where you move through a world made of sweets."
    },
    {
        category: "Board Games",
        clues: [
            "Wood",
            "Blocks",
            "Stack"
        ],
        answer: "Jenga",
        hint: "A game where pulling the wrong block means watching everything tumble down."
    },
    {
        category: "Movies",
        clues: [
            "Video Game",
            "Adventure",
            "Jungle"
        ],
        answer: "Jumanji",
        hint: "A game comes to life and traps players in a jungle where survival is the goal."
    },
    {
        category: "Movies",
        clues: [
            "Time Travel",
            "Car",
            "1980s"
        ],
        answer: "Back to the Future",
        hint: "A DeLorean, a mad scientist, and a trip to the past gone awry."
    },
    {
        category: "Movies",
        clues: [
            "Pandora",
            "Blue",
            "Alien"
        ],
        answer: "Avatar",
        hint: "In this sci-fi adventure, humans try to colonize a planet full of giant blue aliens."
    },
    {
        category: "Movies",
        clues: [
            "Spy",
            "Martini",
            "MI6"
        ],
        answer: "James Bond",
        hint: "This British agent prefers his martinis shaken, not stirred."
    },
    {
        category: "Movies",
        clues: [
            "High School",
            "Musical",
            "Romance"
        ],
        answer: "Grease",
        hint: "A movie where love and leather jackets rule the school halls."
    },
    {
        category: "Movies",
        clues: [
            "Toys",
            "Animated",
            "Buzz"
        ],
        answer: "Toy Story",
        hint: "A heartwarming tale of toys that come to life when no one's watching."
    },
    {
        category: "Geography",
        clues: [
            "Taj Mahal",
            "Subcontinent",
            "Himalayas"
        ],
        answer: "India",
        hint: "A country known for the Taj Mahal, spices, and vibrant festivals."
    },
    {
        category: "Geography",
        clues: [
            "River",
            "Egypt",
            "Longest"
        ],
        answer: "Nile River",
        hint: "The world's longest river, flowing through northeastern Africa."
    },
    {
        category: "Music",
        clues: [
            "Guitar",
            "Woodstock",
            "Voodoo Child"
        ],
        answer: "Jimi Hendrix",
        hint: "A guitar virtuoso who electrified audiences with his iconic performances."
    },
    {
        category: "Music",
        clues: [
            "Rapper",
            "Empire State of Mind",
            "Brooklyn"
        ],
        answer: "Jay-Z",
        hint: "A hip-hop mogul from New York with a powerful empire."
    },
    {
        category: "Music",
        clues: [
            "Folk",
            "Blowin' in the Wind",
            "Harmonica"
        ],
        answer: "Bob Dylan",
        hint: "A poetic folk musician whose lyrics shaped a generation."
    },
    {
        category: "Music",
        clues: [
            "British",
            "Indie Rock",
            "Do I Wanna Know?"
        ],
        answer: "Arctic Monkeys",
        hint: "A British band known for catchy rock tunes and sleek style."
    },
    {
        category: "Music",
        clues: [
            "Punk Rock",
            "Canadian",
            "Red Flag"
        ],
        answer: "Billy Talent",
        hint: "A Canadian punk rock band known for energetic performances."
    },
    {
        category: "Music",
        clues: [
            "Punk",
            "American Idiot",
            "Billie Joe"
        ],
        answer: "Green Day",
        hint: "A punk rock band that gave us 'American Idiot' and political anthems."
    },
    {
        category: "Music",
        clues: [
            "Rock",
            "Bat",
            "Out of Hell"
        ],
        answer: "Meat Loaf",
        hint: "A rock opera legend known for theatrical songs and a fiery voice."
    },
    {
        category: "Music",
        clues: [
            "Producer",
            "Beats",
            "Hip-Hop"
        ],
        answer: "Timbaland",
        hint: "A famous producer who crafted beats for stars like Missy Elliott and Justin Timberlake."
    },
    {
        category: "Music",
        clues: [
            "Rock",
            "Canadian",
            "Pain"
        ],
        answer: "Three Days Grace",
        hint: "A Canadian rock band known for emotional and intense lyrics."
    },
    {
        category: "Music",
        clues: [
            "Barbados",
            "Umbrella",
            "Pop"
        ],
        answer: "Rihanna",
        hint: "A pop superstar from Barbados who made us all sing under her 'Umbrella.'"
    },
    {
        category: "Music",
        clues: [
            "Rapper",
            "Get Rich",
            "Candy Shop"
        ],
        answer: "50 Cent",
        hint: "A rapper known for 'In Da Club' and surviving nine gunshots."
    },
    {
        category: "Music",
        clues: [
            "Hip-Hop",
            "Boom Boom Pow",
            "Fergie"
        ],
        answer: "Black Eyed Peas",
        hint: "A group that brought us hits like 'I Gotta Feeling' and 'Let's Get It Started.'"
    },
    {
        category: "Music",
        clues: [
            "Thunder",
            "Rock",
            "Australia"
        ],
        answer: "AC/DC",
        hint: "An Australian rock band known for electrifying riffs and 'Highway to Hell.'"
    },
    {
        category: "Music",
        clues: [
            "Yellow",
            "British",
            "Chris Martin"
        ],
        answer: "Coldplay",
        hint: "A British band that brought us 'Yellow' and atmospheric stadium anthems."
    },
    {
        category: "Music",
        clues: [
            "Dream On",
            "Rock",
            "Steven Tyler"
        ],
        answer: "Aerosmith",
        hint: "A band with a long career, known for hits like 'Dream On' and 'Walk This Way.'"
    },
    {
        category: "Music",
        clues: [
            "Rock",
            "Stairway",
            "Zeppelin"
        ],
        answer: "Led Zeppelin",
        hint: "A legendary rock band with the epic 'Stairway to Heaven.'"
    },
    {
        category: "Music",
        clues: [
            "Blues Rock",
            "Duo",
            "Lonely Boy"
        ],
        answer: "The Black Keys",
        hint: "A blues-rock duo known for hits like 'Tighten Up' and 'Lonely Boy.'"
    },
    {
        category: "Music",
        clues: [
            "Old Time",
            "Rock 'n Roll",
            "Silver Bullet Band"
        ],
        answer: "Bob Seger",
        hint: "An American rocker who sang about the heartland and 'Old Time Rock 'n Roll.'"
    },
    {
        category: "Music",
        clues: [
            "Pop",
            "Funk",
            "24K Magic"
        ],
        answer: "Bruno Mars",
        hint: "A pop star who dazzled with 'Uptown Funk' and '24K Magic.'"
    },
    {
        category: "Music",
        clues: [
            "Pop",
            "Ocean Eyes",
            "Teen"
        ],
        answer: "Billie Eilish",
        hint: "A moody pop artist known for her haunting voice and hit 'Bad Guy.'"
    },
    {
        category: "Music",
        clues: [
            "Californication",
            "Flea",
            "Funky Rock"
        ],
        answer: "Red Hot Chili Peppers",
        hint: "A band that mixes rock and funk with hits like 'Californication' and 'Under the Bridge.'"
    },
    {
        category: "Music",
        clues: [
            "USA",
            "Born",
            "Boss"
        ],
        answer: "Bruce Springsteen",
        hint: "An American rock icon who sings about the working class and is known as 'The Boss.'"
    },
    {
        category: "Music",
        clues: [
            "Motown",
            "Soul",
            "What's Going On"
        ],
        answer: "Marvin Gaye",
        hint: "A soul legend who asked 'What's Going On' and gave us 'Sexual Healing.'"
    },
    {
        category: "Music",
        clues: [
            "Rock",
            "Abracadabra",
            "Fly Like an Eagle"
        ],
        answer: "Steve Miller Band",
        hint: "A rock band that made us all wanna 'Fly Like an Eagle.'"
    },
    {
        category: "Music",
        clues: [
            "Guitar",
            "Shape of You",
            "British"
        ],
        answer: "Ed Sheeran",
        hint: "A British singer-songwriter known for 'Shape of You' and acoustic ballads."
    },
    {
        category: "Music",
        clues: [
            "Kryptonite",
            "Rock",
            "Here Without You"
        ],
        answer: "3 Doors Down",
        hint: "A rock band known for hits like 'Kryptonite' and 'Here Without You.'"
    },
    {
        category: "Music",
        clues: [
            "Rock",
            "Slash",
            "Appetite for Destruction"
        ],
        answer: "Guns N' Roses",
        hint: "A rock band led by Axl Rose and Slash, known for 'Sweet Child O' Mine.'"
    },
    {
        category: "Music",
        clues: [
            "Grunge",
            "Seattle",
            "Man in the Box"
        ],
        answer: "Alice in Chains",
        hint: "A Seattle grunge band known for dark and heavy tracks like 'Man in the Box.'"
    },
    {
        category: "Music",
        clues: [
            "Rock",
            "Josh Homme",
            "No One Knows"
        ],
        answer: "Queens of the Stone Age",
        hint: "A hard rock band known for driving beats and 'No One Knows.'"
    },
    {
        category: "Music",
        clues: [
            "Rock",
            "Pour Some Sugar",
            "80s"
        ],
        answer: "Def Leppard",
        hint: "An 80s rock band known for hits like 'Pour Some Sugar on Me.'"
    },
    {
        category: "Music",
        clues: [
            "Boy Band",
            "Pop",
            "I Want It That Way"
        ],
        answer: "Backstreet Boys",
        hint: "A legendary 90s boy band that told us 'I Want It That Way.'"
    },
    {
        category: "Music",
        clues: [
            "Canadian",
            "Baby",
            "Pop"
        ],
        answer: "Justin Bieber",
        hint: "A Canadian pop star who became famous with the hit 'Baby.'"
    },
    {
        category: "Music",
        clues: [
            "Rock",
            "Heavy Metal",
            "Paranoid"
        ],
        answer: "Black Sabbath",
        hint: "A heavy metal band fronted by Ozzy Osbourne, known for 'Paranoid.'"
    },
    {
        category: "Music",
        clues: [
            "Prince of Darkness",
            "Metal",
            "Crazy Train"
        ],
        answer: "Ozzy Osbourne",
        hint: "The 'Prince of Darkness' and former frontman of Black Sabbath."
    },
    {
        category: "Music",
        clues: [
            "Africa",
            "Rosanna",
            "Rock"
        ],
        answer: "Toto",
        hint: "A rock band who blessed the rains down in 'Africa.'"
    },
    {
        category: "Music",
        clues: [
            "Indie",
            "Fun",
            "We Are Young"
        ],
        answer: "Fun.",
        hint: "An indie pop band known for the hit 'We Are Young.'"
    },
    {
        category: "Music",
        clues: [
            "Rapper",
            "Mr. Worldwide",
            "Miami"
        ],
        answer: "Pitbull",
        hint: "A rapper who proudly calls himself 'Mr. Worldwide.'"
    },
    {
        category: "Board Games",
        clues: [
            "Bugs",
            "Leaf",
            "Creepy Crawlies"
        ],
        answer: "Ants in the Pants",
        hint: "A game where plastic insects launch into trousers, and it's supposed to be fun!"
    },
    {
        category: "Board Games",
        clues: [
            "Mouse",
            "Trap",
            "Rube Goldberg"
        ],
        answer: "Mouse Trap",
        hint: "You build a crazy contraption to trap rodents... but will it work?"
    },
    {
        category: "Board Games",
        clues: [
            "Word",
            "Drawing",
            "Laugh"
        ],
        answer: "Pictionary",
        hint: "This game turns your terrible art into everyone\u2019s favorite guessing challenge."
    },
    {
        category: "Board Games",
        clues: [
            "Rhino",
            "Balance",
            "Stack"
        ],
        answer: "Rhino Hero",
        hint: "A game where stacking cards helps a superhero animal save the day!"
    },
    {
        category: "Board Games",
        clues: [
            "Destruction",
            "Towers",
            "Monsters"
        ],
        answer: "King of Tokyo",
        hint: "Giant monsters battle for control of the city in this action-packed game!"
    },
    {
        category: "Board Games",
        clues: [
            "Robber",
            "Settlers",
            "Resources"
        ],
        answer: "Catan",
        hint: "A game where you build settlements, trade resources, and try to dominate the island!"
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Fire",
            "Chicken",
            "Deadly Gaze"
        ],
        answer: "Basilisk",
        hint: "This serpent-like creature can kill with a single look!"
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Lumberjack",
            "Giant",
            "Blue Ox"
        ],
        answer: "Paul Bunyan",
        hint: "A larger-than-life figure with an equally giant blue companion."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Three Heads",
            "Guard",
            "Underworld"
        ],
        answer: "Cerberus",
        hint: "This terrifying watchdog has three heads and guards the gates of the Underworld."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Scotland",
            "Lake",
            "Long Neck"
        ],
        answer: "Loch Ness Monster",
        hint: "This elusive creature is said to live in the deep waters of a Scottish loch."
    },
    {
        category: "Food",
        clues: [
            "Dough",
            "Twist",
            "Salty"
        ],
        answer: "Pretzel",
        hint: "This knot-shaped snack is best when it's twisted and salty."
    },
    {
        category: "Food",
        clues: [
            "Cold",
            "Syrup",
            "Crushed Ice"
        ],
        answer: "Snow Cone",
        hint: "A summer treat that makes eating ice seem like a good idea."
    },
    {
        category: "Board Games",
        clues: [
            "Strategy",
            "Conquer",
            "World"
        ],
        answer: "Risk",
        hint: "A game of world domination, where your friendships are always at risk!"
    },
    {
        category: "Board Games",
        clues: [
            "Ships",
            "Coordinates",
            "Sink"
        ],
        answer: "Battleship",
        hint: "The game where you shout out letters and numbers hoping to sink someone's fleet."
    },
    {
        category: "Board Games",
        clues: [
            "Colors",
            "Skip",
            "Wild Card"
        ],
        answer: "Uno",
        hint: "A game where you can turn your best friend into your worst enemy with a single card."
    },
    {
        category: "Board Games",
        clues: [
            "Spinning",
            "Limbs",
            "Mat"
        ],
        answer: "Twister",
        hint: "A game that turns people into human pretzels."
    },
    {
        category: "Board Games",
        clues: [
            "Red",
            "Yellow",
            "Line-Up"
        ],
        answer: "Connect Four",
        hint: "A game of lining up circles, but beware of diagonal sneaks!"
    },
    {
        category: "Board Games",
        clues: [
            "Spin",
            "Jobs",
            "Money"
        ],
        answer: "The Game of Life",
        hint: "This game lets you live out your dream career\u2014or lose it all in a spin."
    },
    {
        category: "Board Games",
        clues: [
            "Exploding",
            "Cards",
            "Cats"
        ],
        answer: "Exploding Kittens",
        hint: "A strategic card game where you desperately avoid detonating felines."
    },
    {
        category: "Board Games",
        clues: [
            "Cards",
            "RPG",
            "Silly"
        ],
        answer: "Munchkin",
        hint: "A dungeon crawl card game where cheating and backstabbing are encouraged."
    },
    {
        category: "Board Games",
        clues: [
            "Offensive",
            "Cards",
            "Fill-in-the-blank"
        ],
        answer: "Cards Against Humanity",
        hint: "The party game for horrible people."
    },
    {
        category: "Food",
        clues: [
            "Creamy",
            "Green",
            "Appetizer"
        ],
        answer: "Spinach Dip",
        hint: "A warm and creamy appetizer that's often found next to chips."
    },
    {
        category: "Food",
        clues: [
            "Noodles",
            "Sauce",
            "Italy"
        ],
        answer: "Spaghetti",
        hint: "An Italian classic that can make a mess if you're not careful."
    },
    {
        category: "Food",
        clues: [
            "Crispy",
            "Golden",
            "Drumsticks"
        ],
        answer: "Fried Chicken",
        hint: "A crunchy, finger-lickin' meal that makes napkins a must."
    },
    {
        category: "Food",
        clues: [
            "Sweet",
            "Baked",
            "Chocolate Chip"
        ],
        answer: "Cookies",
        hint: "Small, round treats that are irresistible when fresh out of the oven."
    },
    {
        category: "Food",
        clues: [
            "Small",
            "Frosting",
            "Baked"
        ],
        answer: "Cupcakes",
        hint: "A mini cake with frosting on top, perfect for a single bite of joy."
    },
    {
        category: "Food",
        clues: [
            "Chocolate",
            "Cream",
            "Twist"
        ],
        answer: "Oreo",
        hint: "Twist it, lick it, dunk it\u2014this cookie is a classic."
    },
    {
        category: "Food",
        clues: [
            "Sticky",
            "Spread",
            "Jelly's Best Friend"
        ],
        answer: "Peanut Butter",
        hint: "A sandwich staple that's smooth, creamy, and a little nutty."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Green",
            "Gold",
            "Irish"
        ],
        answer: "Leprechaun",
        hint: "Known for guarding pots of gold and being hard to catch."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Full Moon",
            "Howl",
            "Transformation"
        ],
        answer: "Werewolf",
        hint: "A creature that\u2019s only dangerous under the light of a full moon."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Labyrinth",
            "Bull",
            "Maze"
        ],
        answer: "Minotaur",
        hint: "Half-man, half-bull, and a big fan of getting lost in mazes."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Horse",
            "Wings",
            "Fly"
        ],
        answer: "Pegasus",
        hint: "A winged horse that can fly through the skies."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Tentacles",
            "Sea",
            "Giant"
        ],
        answer: "Kraken",
        hint: "A massive sea creature known for dragging ships down into the depths."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Human",
            "Bird",
            "Deadly Song"
        ],
        answer: "Siren",
        hint: "A creature whose beautiful voice lures sailors to their doom."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "Fire",
            "Bird",
            "Rebirth"
        ],
        answer: "Phoenix",
        hint: "A bird that bursts into flames and is reborn from its ashes."
    },
    {
        category: "Mythical Creatures",
        clues: [
            "One Eye",
            "Giant",
            "Greek"
        ],
        answer: "Cyclops",
        hint: "A one-eyed giant who likes smashing things with a club."
    },
    {
        category: "Superpowers",
        clues: [
            "Objects",
            "Control",
            "Move"
        ],
        answer: "Telekinesis",
        hint: "The ability to move things without touching them."
    },
    {
        category: "Superpowers",
        clues: [
            "Time",
            "Freeze",
            "Pause"
        ],
        answer: "Time Stopping",
        hint: "This power lets you pause the world and keep moving while time stands still."
    },
    {
        category: "Superpowers",
        clues: [
            "Morph",
            "Shape",
            "Form"
        ],
        answer: "Shapeshifting",
        hint: "The ability to change your appearance into anything or anyone."
    },
    {
        category: "Superpowers",
        clues: [
            "Weather",
            "Storm",
            "Lightning"
        ],
        answer: "Weather Manipulation",
        hint: "The power to summon storms or sunny skies at will."
    },
    {
        category: "Superpowers",
        clues: [
            "Heal",
            "Regrow",
            "Invincible"
        ],
        answer: "Regeneration",
        hint: "A power that lets you heal from any injury almost instantly."
    },
    {
        category: "Inventions",
        clues: [
            "Jump",
            "Stick",
            "Boing"
        ],
        answer: "Pogo Stick",
        hint: "An invention that makes bouncing around on two feet look easy (but it's not)."
    },
    {
        category: "Inventions",
        clues: [
            "Hot",
            "Drink",
            "Insulated"
        ],
        answer: "Thermos",
        hint: "This container keeps your coffee hot (or your drinks cold) for hours."
    },
    {
        category: "Inventions",
        clues: [
            "Virtual",
            "Friends",
            "Pets"
        ],
        answer: "Tamagotchi",
        hint: "A digital pet that fit in your pocket and demanded constant attention."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Kitchen",
            "Slice",
            "Veggies"
        ],
        answer: "Slap Chop",
        hint: "An invention that lets you dice and slice food with a single smack."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Blanket",
            "Sleeves",
            "Couch"
        ],
        answer: "Snuggie",
        hint: "A wearable blanket that keeps you warm and leaves your hands free."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Mop",
            "Water",
            "360"
        ],
        answer: "Spin Mop",
        hint: "A mop that spins itself dry with a twirl."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Seal",
            "Waterproof",
            "Tape"
        ],
        answer: "Flex Tape",
        hint: "This tape can fix just about anything, even a leaky boat!"
    },
    {
        category: "As Seen on TV",
        clues: [
            "Oven",
            "Crispy",
            "Air"
        ],
        answer: "Air Fryer",
        hint: "A kitchen gadget that promises fried food without the grease."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Chop",
            "Cook",
            "Quick"
        ],
        answer: "Magic Bullet",
        hint: "A compact blender that promises to make smoothies in seconds."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Flex",
            "Exercise",
            "Shake"
        ],
        answer: "Shake Weight",
        hint: "An exercise tool that uses shaking motion to tone muscles... and it looks ridiculous."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Tape",
            "Seal",
            "Strong"
        ],
        answer: "Flex Tape",
        hint: "This tape can fix anything\u2014even a leaking boat, if you believe the ads!"
    },
    {
        category: "As Seen on TV",
        clues: [
            "Spray",
            "Seal",
            "Waterproof"
        ],
        answer: "Flex Seal",
        hint: "A spray that claims to stop leaks and seal cracks with just a coat."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Furniture",
            "Protect",
            "Feet"
        ],
        answer: "Furniture Feet",
        hint: "These little cups protect your floors from those heavy chairs and couches."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Stuffed",
            "Pillow",
            "Animal"
        ],
        answer: "Pillow Pet",
        hint: "It\u2019s a stuffed animal that unfolds into a cozy pillow for bedtime cuddles."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Sticky",
            "Lint",
            "Reusable"
        ],
        answer: "Schticky",
        hint: "A reusable lint roller that sticks to everything and then washes clean."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Plant",
            "Grow",
            "Clay"
        ],
        answer: "Chia Pet",
        hint: "Just add water, and watch this iconic clay figure sprout greenery!"
    },
    {
        category: "As Seen on TV",
        clues: [
            "Smiling",
            "Sponge",
            "Scrub"
        ],
        answer: "Scrub Daddy",
        hint: "A smiley sponge that changes texture based on water temperature."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Clean",
            "Stain",
            "Laundry"
        ],
        answer: "OxiClean",
        hint: "This cleaning product is known for its stain-fighting powers, especially in laundry."
    },
    {
        category: "As Seen on TV",
        clues: [
            "Toilet",
            "Squat",
            "Comfort"
        ],
        answer: "Squatty Potty",
        hint: "This device helps you, well... squat while using the toilet, for 'better results.'"
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Square",
            "Cheerful",
            "Absorbent"
        ],
        answer: "SpongeBob SquarePants",
        hint: "Lives somewhere that's far from dry, and he\u2019s quite absorbent."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Colorful",
            "Paws",
            "Clues"
        ],
        answer: "Blue",
        hint: "This one loves to leave hints behind, especially with their paws."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Iconic",
            "Gloves",
            "Smile"
        ],
        answer: "Mickey Mouse",
        hint: "Famous for his gloves and a huge influence on an entertainment empire."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Lazy",
            "Monday",
            "Sarcastic"
        ],
        answer: "Garfield",
        hint: "Not a fan of a certain day and prefers snacking over work."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Duo",
            "Experiment",
            "Takeover"
        ],
        answer: "Pinky",
        hint: "One of two lab partners, always caught in elaborate schemes."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Quick",
            "Trickster",
            "Vegetable"
        ],
        answer: "Bugs Bunny",
        hint: "Often outwits his rivals with clever tricks and munches on something orange."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Cowardly",
            "Van",
            "Snacks"
        ],
        answer: "Scooby-Doo",
        hint: "Loves snacks and is often found on the run from things that go bump in the night."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Alien",
            "Chaos",
            "Family"
        ],
        answer: "Stitch",
        hint: "This troublemaker from a distant place finds a new family."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Enormous",
            "Colorful",
            "Best Friend"
        ],
        answer: "Clifford",
        hint: "A friend who's hard to miss, especially because of his size and color."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Grumpy",
            "Small",
            "Team"
        ],
        answer: "Grumpy",
        hint: "Not a fan of joy, and he's often found alongside a small group."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Hungry",
            "Clever",
            "Stone Age"
        ],
        answer: "Fred Flintstone",
        hint: "Lives in prehistoric times but still enjoys modern conveniences like drive-thrus."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Gadget",
            "Detective",
            "Clumsy"
        ],
        answer: "Inspector Gadget",
        hint: "A detective who has more tools than he knows how to use, literally."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Fast",
            "Red",
            "Catch"
        ],
        answer: "Road Runner",
        hint: "Always outruns someone with a knack for falling into their own traps."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Smart",
            "Rabbit",
            "Bothered"
        ],
        answer: "Bugs Bunny",
        hint: "A wisecracking character that always seems to be one step ahead."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Pink",
            "Starfish",
            "Loyal"
        ],
        answer: "Patrick Star",
        hint: "A simple friend who lives under a rock, quite literally."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Science",
            "Invention",
            "Accident-prone"
        ],
        answer: "Dexter",
        hint: "A genius with a secret lab, often disturbed by a sibling."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Pirate",
            "Green",
            "Plank"
        ],
        answer: "Plankton",
        hint: "A tiny villain with big plans, usually involving secret recipes."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Lazy",
            "Big",
            "Jelly"
        ],
        answer: "Winnie the Pooh",
        hint: "A sweet-toothed bear with a preference for sticky treats."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Flying",
            "Cape",
            "Alien"
        ],
        answer: "Superman",
        hint: "Has a hidden identity but is known for his powers, especially in the skies."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Teen",
            "Dog",
            "Detective"
        ],
        answer: "Velma",
        hint: "A mystery solver known for her brains and her constantly missing glasses."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Fast",
            "Blue",
            "Rings"
        ],
        answer: "Sonic the Hedgehog",
        hint: "A blue blur who\u2019s always on the run, collecting shiny objects along the way."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Magic",
            "Genie",
            "Lamp"
        ],
        answer: "Aladdin",
        hint: "This character\u2019s life changed after finding a very powerful friend inside something small."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Dog",
            "Silly",
            "Disney"
        ],
        answer: "Goofy",
        hint: "This clumsy but lovable character is known for his funny laugh and big shoes."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Mischief",
            "Tiny",
            "Red Bow"
        ],
        answer: "Elmo",
        hint: "This small, furry character loves to laugh and is a big fan of tickles."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Green",
            "Swamp",
            "Grumpy"
        ],
        answer: "Shrek",
        hint: "An ogre who prefers his quiet life in the swamp but often ends up in grand adventures."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Little",
            "Squeaky",
            "Cat Rival"
        ],
        answer: "Jerry",
        hint: "This tiny creature is always outsmarting his larger, feline foe."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Friendship",
            "Pony",
            "Magic"
        ],
        answer: "Twilight Sparkle",
        hint: "A magical character who values friendship above all and leads with kindness."
    },
    {
        category: "Cartoon Characters",
        clues: [
            "Martial Arts",
            "Turtle",
            "Mutant"
        ],
        answer: "Leonardo from Teenage Mutant Ninja Turtles",
        hint: "A leader among his brothers, known for his blue mask and sword skills."
    },
    {
        category: "Celebrities",
        clues: [
            "Actor",
            "Action",
            "Governor"
        ],
        answer: "Arnold Schwarzenegger",
        hint: "An action star who swapped Hollywood for politics."
    },
    {
        category: "Celebrities",
        clues: [
            "Talk Show",
            "Comedian",
            "Ellen"
        ],
        answer: "Ellen DeGeneres",
        hint: "Known for her dance moves and hosting a daytime talk show with lots of surprises."
    },
    {
        category: "Celebrities",
        clues: [
            "Marvel",
            "Iron Man",
            "Comeback"
        ],
        answer: "Robert Downey Jr.",
        hint: "An actor famous for playing a genius superhero in a metal suit."
    },
    {
        category: "Celebrities",
        clues: [
            "Reality",
            "Makeup",
            "Family"
        ],
        answer: "Kim Kardashian",
        hint: "A reality star known for her famous family and business ventures."
    },
    {
        category: "Celebrities",
        clues: [
            "Actor",
            "Pirate",
            "Tim Burton"
        ],
        answer: "Johnny Depp",
        hint: "A versatile actor known for roles as a swashbuckling pirate and other quirky characters."
    },
    {
        category: "Celebrities",
        clues: [
            "Actor",
            "Director",
            "Hollywood Legend"
        ],
        answer: "Clint Eastwood",
        hint: "Famous for his tough-guy roles and a legendary career behind the camera as well."
    },
    {
        category: "Celebrities",
        clues: [
            "Chef",
            "Gordon",
            "Hell's Kitchen"
        ],
        answer: "Gordon Ramsay",
        hint: "This fiery chef is known for his kitchen outbursts and culinary expertise."
    },
    {
        category: "Celebrities",
        clues: [
            "Talk Show",
            "Queen",
            "Book Club"
        ],
        answer: "Oprah Winfrey",
        hint: "A media mogul known for her show, her generosity, and a famous book club."
    },
    {
        category: "Celebrities",
        clues: [
            "Supermodel",
            "Victoria\u2019s Secret",
            "America\u2019s Got Talent"
        ],
        answer: "Heidi Klum",
        hint: "A supermodel who also judges talent competitions and hosts Halloween parties."
    },
    {
        category: "Celebrities",
        clues: [
            "Actor",
            "Comedy",
            "Deadpool"
        ],
        answer: "Ryan Reynolds",
        hint: "A Canadian actor known for his quick wit and breaking the fourth wall in superhero movies."
    },
    {
        category: "Celebrities",
        clues: [
            "Comedy",
            "Duo",
            "Stoner"
        ],
        answer: "Cheech & Chong",
        hint: "A comedy pair famous for their movies about laid-back lifestyles."
    },
    {
        category: "Celebrities",
        clues: [
            "Actor",
            "Scientist",
            "Jurassic Park"
        ],
        answer: "Jeff Goldblum",
        hint: "Known for playing eccentric characters, including a quirky scientist who deals with dinosaurs."
    },
    {
        category: "Celebrities",
        clues: [
            "Actor",
            "King of Cool",
            "Great Escape"
        ],
        answer: "Steve McQueen",
        hint: "A legendary actor known for his roles as a tough and rebellious leading man."
    },
    {
        category: "Celebrities",
        clues: [
            "Director",
            "Sci-Fi",
            "Exploration"
        ],
        answer: "James Cameron",
        hint: "This director is known for films set on the ocean floor and in far-off, blue-skinned worlds."
    },
    {
        category: "Celebrities",
        clues: [
            "Comedy",
            "Sketch",
            "The Mask"
        ],
        answer: "Jim Carrey",
        hint: "An actor famous for his zany, rubber-faced antics in comedies and dramas alike."
    },
    {
        category: "Celebrities",
        clues: [
            "Actress",
            "Wizard",
            "Brown"
        ],
        answer: "Emma Watson",
        hint: "She played a brilliant witch with a love of books and went on to become a UN ambassador."
    },
    {
        category: "Celebrities",
        clues: [
            "Action",
            "Martial Arts",
            "Rush Hour"
        ],
        answer: "Jackie Chan",
        hint: "A martial arts master known for performing his own stunts in action-packed movies."
    },
    {
        category: "Celebrities",
        clues: [
            "Actress",
            "Comedy",
            "Legally Blonde"
        ],
        answer: "Reese Witherspoon",
        hint: "A bubbly actress who starred in a film about proving brains and beauty go hand in hand."
    },
    {
        category: "Celebrities",
        clues: [
            "Actor",
            "Jedi",
            "Lightsaber"
        ],
        answer: "Mark Hamill",
        hint: "Known for his role in a galaxy far, far away as a young farm boy who becomes a Jedi."
    },
    {
        category: "Celebrities",
        clues: [
            "Actor",
            "Action",
            "John Wick"
        ],
        answer: "Keanu Reeves",
        hint: "This actor has gained a cult following for his calm, humble demeanor and action roles."
    },
    {
        category: "Music",
        clues: [
            "Grunge",
            "Seattle",
            "Teen Spirit"
        ],
        answer: "Nirvana",
        hint: "A grunge band that defined a generation with angst and 'Smells Like' something."
    },
    {
        category: "Music",
        clues: [
            "California",
            "Stadium Rock",
            "Hotel"
        ],
        answer: "Hotel California",
        hint: "A song about a place you can check in anytime, but you can never leave."
    },
    {
        category: "Music",
        clues: [
            "Pink",
            "Brick",
            "Wall"
        ],
        answer: "The Wall",
        hint: "This iconic rock album is all about barriers, both mental and physical."
    },
    {
        category: "Music",
        clues: [
            "Christmas",
            "Diva",
            "High Notes"
        ],
        answer: "Mariah Carey",
        hint: "A pop diva known for her multi-octave vocal range and a certain holiday song."
    },
    {
        category: "Music",
        clues: [
            "Jazz",
            "Blue Eyes",
            "Rat Pack"
        ],
        answer: "Frank Sinatra",
        hint: "A crooner with timeless classics and an unmistakable voice, often called 'Ol' Blue Eyes.'"
    },
    {
        category: "Inventions",
        clues: [
            "Blend",
            "Hide",
            "Military"
        ],
        answer: "Camouflage",
        hint: "This invention helps people or animals blend into their surroundings, making them hard to spot."
    },
    {
        category: "Fashion",
        clues: [
            "Designer",
            "Luxury",
            "Interlocking Gs"
        ],
        answer: "Gucci",
        hint: "A luxury brand known for high-end fashion and its iconic 'double G' logo."
    },
    {
        category: "Fashion",
        clues: [
            "Sporty",
            "Three Stripes",
            "Shoes"
        ],
        answer: "Adidas",
        hint: "A global sportswear brand, instantly recognizable by its three-stripe design."
    },
    {
        category: "Fashion",
        clues: [
            "Street Style",
            "Sneakers",
            "Check"
        ],
        answer: "Converse",
        hint: "Known for their timeless high-top sneakers with a star on the side."
    },
    {
        category: "Fashion",
        clues: [
            "Iconic",
            "Luxury",
            "Bags"
        ],
        answer: "Louis Vuitton",
        hint: "This brand is famous for its luxury handbags and 'LV' monogram."
    },
    {
        category: "Fashion",
        clues: [
            "Eyewear",
            "Sunglasses",
            "Aviator"
        ],
        answer: "Ray-Ban",
        hint: "A popular sunglasses brand known for its aviators and Wayfarers."
    },
    {
        category: "Fashion",
        clues: [
            "Outerwear",
            "Quilted",
            "British"
        ],
        answer: "Burberry",
        hint: "A British fashion house known for its trench coats and iconic check pattern."
    },
    {
        category: "Fashion",
        clues: [
            "Jeans",
            "Denim",
            "American"
        ],
        answer: "Levi's",
        hint: "An American brand that revolutionized denim and is still famous for its jeans."
    },
    {
        category: "Fashion",
        clues: [
            "Classic",
            "Tailored",
            "Tie"
        ],
        answer: "Suit",
        hint: "A timeless formal outfit often worn with a tie, seen in offices and special events."
    },
    {
        category: "TV Shows",
        clues: [
            "Paper",
            "Dunder Mifflin",
            "Scranton"
        ],
        answer: "The Office",
        hint: "A mockumentary about a mundane paper company, featuring a hilarious boss."
    },
    {
        category: "TV Shows",
        clues: [
            "Group",
            "Coffee Shop",
            "NYC"
        ],
        answer: "Friends",
        hint: "Six friends navigate life and relationships, often meeting at Central Perk."
    },
    {
        category: "TV Shows",
        clues: [
            "Blue Meth",
            "Chemistry",
            "New Mexico"
        ],
        answer: "Breaking Bad",
        hint: "A former chemistry teacher turns to cooking something illegal in the desert."
    },
    {
        category: "TV Shows",
        clues: [
            "Law",
            "Criminal",
            "Order"
        ],
        answer: "Law & Order",
        hint: "A procedural show that follows detectives and lawyers in New York."
    },
    {
        category: "TV Shows",
        clues: [
            "Comedy",
            "Family",
            "Quirky"
        ],
        answer: "Modern Family",
        hint: "A mockumentary about three different but related families living in California."
    },
    {
        category: "TV Shows",
        clues: [
            "FBI",
            "Unsolved",
            "Profiles"
        ],
        answer: "Criminal Minds",
        hint: "A show that follows a team of FBI agents who profile and catch serial criminals."
    },
    {
        category: "TV Shows",
        clues: [
            "Reality",
            "Survival",
            "Island"
        ],
        answer: "Survivor",
        hint: "Contestants are stranded in remote locations, competing to 'outwit, outplay, outlast.'"
    },
    {
        category: "TV Shows",
        clues: [
            "Comedy",
            "Apartment",
            "New York"
        ],
        answer: "Seinfeld",
        hint: "A show famously about 'nothing,' centered around a stand-up comedian and his friends."
    },
    {
        category: "TV Shows",
        clues: [
            "Animated",
            "Yellow",
            "Springfield"
        ],
        answer: "The Simpsons",
        hint: "The longest-running animated TV show about a quirky family in a fictional town."
    },
    {
        category: "TV Shows",
        clues: [
            "Mob",
            "Therapist",
            "Crime"
        ],
        answer: "The Sopranos",
        hint: "A mob boss balances his crime family with therapy and personal struggles."
    },
    {
        category: "TV Shows",
        clues: [
            "Fantasy",
            "Magic School",
            "BBC"
        ],
        answer: "Merlin",
        hint: "A reimagining of a famous wizard's early days at a magical kingdom."
    },
    {
        category: "TV Shows",
        clues: [
            "Royalty",
            "History",
            "British"
        ],
        answer: "The Crown",
        hint: "A dramatized look at the life and reign of Queen Elizabeth II."
    },
    {
        category: "TV Shows",
        clues: [
            "Hospital",
            "Doctors",
            "Grey"
        ],
        answer: "Grey's Anatomy",
        hint: "A medical drama that follows the personal and professional lives of doctors at a hospital."
    },
    {
        category: "Fashion",
        clues: [
            "Formal",
            "Bow",
            "Accessory"
        ],
        answer: "Bow Tie",
        hint: "A formal accessory, often worn at black-tie events, but also favored by quirky fashionistas."
    },
    {
        category: "Fashion",
        clues: [
            "Jewelry",
            "Finger",
            "Marriage"
        ],
        answer: "Wedding Ring",
        hint: "A timeless piece of jewelry, often a symbol of eternal love and commitment."
    },
    {
        category: "Fashion",
        clues: [
            "Workwear",
            "Denim",
            "Durable"
        ],
        answer: "Carhartt",
        hint: "A brand that began with tough workwear and is now a staple of street style."
    },
    {
        category: "Fashion",
        clues: [
            "Running",
            "Shoes",
            "Swoosh"
        ],
        answer: "Nike",
        hint: "An athletic brand whose 'Just Do It' slogan is as famous as its swoosh logo."
    },
    {
        category: "Fashion",
        clues: [
            "Casual",
            "Fleece",
            "Jacket"
        ],
        answer: "Hoodie",
        hint: "A popular casual top with a hood, often worn for comfort or during workouts."
    },
    {
        category: "TV Shows",
        clues: [
            "Law",
            "Lawyer",
            "Harvey"
        ],
        answer: "Suits",
        hint: "A legal drama about a hotshot lawyer and his brilliant associate, who happens to have no law degree."
    },
    {
        category: "TV Shows",
        clues: [
            "Nerds",
            "Science",
            "Bazinga"
        ],
        answer: "The Big Bang Theory",
        hint: "A comedy about a group of geeky friends and their socially awkward antics, with a famous catchphrase."
    },
    {
        category: "TV Shows",
        clues: [
            "Genius",
            "Young",
            "Texas"
        ],
        answer: "Young Sheldon",
        hint: "A spin-off prequel that follows the childhood of a boy prodigy growing up in a small town."
    },
    {
        category: "TV Shows",
        clues: [
            "Politics",
            "D.C.",
            "Manipulation"
        ],
        answer: "House of Cards",
        hint: "A political thriller about the rise of a ruthless politician in Washington, D.C."
    },
    {
        category: "TV Shows",
        clues: [
            "Family",
            "Sitcom",
            "80s"
        ],
        answer: "The Goldbergs",
        hint: "A sitcom that follows a family in the 1980s through the eyes of the youngest son, who documents their lives."
    },
    {
        category: "TV Shows",
        clues: [
            "Coffee",
            "Writers",
            "Drama"
        ],
        answer: "Gilmore Girls",
        hint: "A witty drama about a fast-talking mother-daughter duo and their lives in a small town."
    },
    {
        category: "TV Shows",
        clues: [
            "Doctor",
            "Time Travel",
            "TARDIS"
        ],
        answer: "Doctor Who",
        hint: "A British sci-fi series about a time-traveling alien with a love for saving the universe."
    },
    {
        category: "TV Shows",
        clues: [
            "Island",
            "Crash",
            "Survivors"
        ],
        answer: "Lost",
        hint: "A mystery drama where survivors of a plane crash find themselves on a strange island full of secrets."
    },
    {
        category: "TV Shows",
        clues: [
            "Miami",
            "Roommates",
            "Seniors"
        ],
        answer: "The Golden Girls",
        hint: "A sitcom about four older women living together and sharing hilarious life moments in Miami."
    },
    {
        category: "TV Shows",
        clues: [
            "Roommates",
            "Misunderstanding",
            "Comedy"
        ],
        answer: "Three's Company",
        hint: "A classic sitcom about a man living with two women, filled with comic misunderstandings."
    },
    {
        category: "TV Shows",
        clues: [
            "Multiverse",
            "Grandfather",
            "Science"
        ],
        answer: "Rick and Morty",
        hint: "An animated show about a genius scientist and his anxious grandson exploring bizarre universes."
    },
    {
        category: "TV Shows",
        clues: [
            "Games",
            "Survival",
            "Korean"
        ],
        answer: "Squid Game",
        hint: "A dystopian drama where contestants compete in deadly versions of children's games for a chance to win a huge prize."
    },
    {
        category: "TV Shows",
        clues: [
            "Hospital",
            "Surgery",
            "Comedy"
        ],
        answer: "Scrubs",
        hint: "A comedy-drama about the lives of medical interns and their hilarious (and heartfelt) moments."
    },
    {
        category: "TV Shows",
        clues: [
            "Soap Opera",
            "Hospital",
            "Drama"
        ],
        answer: "General Hospital",
        hint: "One of the longest-running daytime TV shows, set in a fictional hospital."
    },
    {
        category: "TV Shows",
        clues: [
            "Soap Opera",
            "British",
            "Street"
        ],
        answer: "Coronation Street",
        hint: "A long-running British soap opera centered around the residents of a fictional street."
    },
    {
        category: "TV Shows",
        clues: [
            "Comedy",
            "MASH",
            "War"
        ],
        answer: "MASH",
        hint: "A classic comedy-drama set in a mobile army hospital during the Korean War."
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kzbYw","bDbGG"], "bDbGG", "parcelRequireb9f5")

//# sourceMappingURL=index.fbb3188c.js.map
