(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@ionic-super-tabs/core/dist/esm-es5/super-tab_3.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm-es5/super-tab_3.entry.js ***!
  \*******************************************************************************/
/*! exports provided: super_tab, super_tabs, super_tabs_container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tab", function() { return SuperTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tabs", function() { return SuperTabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tabs_container", function() { return SuperTabsContainerComponent; });
/* harmony import */ var _index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a34c410e.js */ "./node_modules/@ionic-super-tabs/core/dist/esm-es5/index-a34c410e.js");
/* harmony import */ var _utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-640d2cf5.js */ "./node_modules/@ionic-super-tabs/core/dist/esm-es5/utils-640d2cf5.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var superTabComponentCss = ":host{height:var(--super-tab-height, 100%);position:relative;display:block;overflow-x:hidden;overflow-y:auto;contain:size style;z-index:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;width:var(--super-tab-width, 100vw);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host[noScroll]{overflow-y:hidden}ion-nav,ion-content{height:100%;max-height:100%;position:absolute}ion-nav>.ion-page,ion-content>.ion-page{position:absolute}";
var SuperTabComponent = /** @class */ (function () {
    function SuperTabComponent(hostRef) {
        Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    SuperTabComponent.prototype.componentDidLoad = function () {
        this.checkIonContent();
    };
    SuperTabComponent.prototype.componentDidUpdate = function () {
        // check for ion-content after update, in case it was dynamically loaded
        this.checkIonContent();
    };
    /**
     * Check if we have an ion-content as a child and update the `noScroll` property
     * if it's not set yet.
     */
    SuperTabComponent.prototype.checkIonContent = function () {
        if (typeof this.noScroll !== 'boolean') {
            var ionContentEl = this.el.querySelector('ion-content');
            if (ionContentEl && ionContentEl.parentElement === this.el) {
                this.noScroll = true;
            }
        }
    };
    /**
     * Returns the root scrollable element
     */
    SuperTabComponent.prototype.getRootScrollableEl = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ionContent;
            return __generator(this, function (_a) {
                if (!this.noScroll && this.el.scrollHeight > this.el.clientHeight) {
                    return [2 /*return*/, this.el];
                }
                ionContent = this.el.querySelector('ion-content');
                if (ionContent) {
                    return [2 /*return*/, ionContent.getScrollElement()];
                }
                if (this.noScroll) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, this.el];
            });
        });
    };
    SuperTabComponent.prototype.render = function () {
        return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Object.defineProperty(SuperTabComponent.prototype, "el", {
        get: function () { return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return SuperTabComponent;
}());
SuperTabComponent.style = superTabComponentCss;
var superTabsComponentCss = ":host{height:100%;max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;z-index:1;position:relative;contain:layout size style;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased;-ms-touch-action:none;touch-action:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}";
var maxInitRetries = 1e3;
/**
 * Root component that controls the other super-tab components.
 *
 * This component propagates configuration over to children and keeps track of the tabs state.
 */
var SuperTabsComponent = /** @class */ (function () {
    function SuperTabsComponent(hostRef) {
        var _this = this;
        Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Initial active tab index.
         * Defaults to `0`.
         *
         * @type {number}
         */
        this.activeTabIndex = 0;
        this._config = _utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["D"];
        this.initAttempts = 0;
        this.initPromise = new Promise(function (resolve) {
            _this.initPromiseResolve = resolve;
        });
        this.tabChange = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "tabChange", 7);
    }
    /**
     * Set/update the configuration
     * @param {SuperTabsConfig} config Configuration object
     */
    SuperTabsComponent.prototype.setConfig = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._config = Object.assign(Object.assign({}, _utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["D"]), config);
                return [2 /*return*/];
            });
        });
    };
    SuperTabsComponent.prototype.propagateConfig = function () {
        this.container && (this.container.config = this._config);
        this.toolbar && (this.toolbar.config = this._config);
    };
    /**
     * Set the selected tab.
     * This will move the container and the toolbar to the selected tab.
     * @param index {number} the index of the tab you want to select
     * @param [animate=true] {boolean} whether you want to animate the transition
     * @param [emit=true] {boolean} whether you want to emit tab change event
     */
    SuperTabsComponent.prototype.selectTab = function (index, animate, emit) {
        if (animate === void 0) { animate = true; }
        if (emit === void 0) { emit = true; }
        return __awaiter(this, void 0, void 0, function () {
            var lastIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('selectTab', index, animate);
                        return [4 /*yield*/, this.initPromise];
                    case 1:
                        _a.sent();
                        lastIndex = this.activeTabIndex;
                        if (!this.container) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.container.setActiveTabIndex(index, true, animate)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!this.toolbar) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.toolbar.setActiveTab(index, true, animate)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (emit) {
                            this.emitTabChangeEvent(index, lastIndex);
                        }
                        this.activeTabIndex = lastIndex;
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsComponent.prototype.onConfigChange = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setConfig(config)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsComponent.prototype.onWindowResize = function () {
        this.debug('onWindowResize');
        this.toolbar && this.toolbar.setSelectedTab(this.activeTabIndex);
        this.container.reindexTabs();
    };
    SuperTabsComponent.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.config) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setConfig(this.config)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsComponent.prototype.componentDidLoad = function () {
        var _this = this;
        this.debug('componentDidLoad');
        // index children
        this.indexChildren();
        // set the selected tab so the toolbar & container are aligned and in sync
        if (this.container) {
            this.container.setActiveTabIndex(this.activeTabIndex, true, false);
        }
        if (this.toolbar) {
            this.toolbar.setActiveTab(this.activeTabIndex, true, false);
        }
        // listen to `slotchange` event to detect any changes in children
        this.el.shadowRoot.addEventListener('slotchange', this.onSlotchange.bind(this));
        requestAnimationFrame(function () {
            _this.initComponent();
        });
    };
    SuperTabsComponent.prototype.initComponent = function () {
        var _this = this;
        if (!this.container) {
            if (++this.initAttempts <= maxInitRetries) {
                requestAnimationFrame(function () {
                    _this.initComponent();
                });
                return;
            }
            else {
                this.debug("container still doesn't exists after " + maxInitRetries + " frames");
            }
        }
        if (this.container) {
            this.container.setActiveTabIndex(this.activeTabIndex, true, false);
        }
        if (this.toolbar) {
            this.toolbar.setActiveTab(this.activeTabIndex, true);
        }
        this.propagateConfig();
        this.setupEventListeners();
        this.initPromiseResolve();
    };
    /**
     * Setup event listeners to synchronize child components
     */
    SuperTabsComponent.prototype.setupEventListeners = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.container) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.container.componentOnReady()];
                    case 1:
                        _a.sent();
                        this.el.addEventListener('selectedTabIndexChange', this.onContainerSelectedTabChange.bind(this));
                        this.el.addEventListener('activeTabIndexChange', this.onContainerActiveTabChange.bind(this));
                        return [3 /*break*/, 3];
                    case 2:
                        this.debug('setupEventListeners: container does not exist');
                        _a.label = 3;
                    case 3:
                        if (!this.toolbar) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.toolbar.componentOnReady()];
                    case 4:
                        _a.sent();
                        this.el.addEventListener('buttonClick', this.onToolbarButtonClick.bind(this));
                        return [3 /*break*/, 6];
                    case 5:
                        this.debug('setupEventListeners: toolbar does not exist');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsComponent.prototype.onContainerSelectedTabChange = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('onContainerSelectedTabChange called with: ', ev);
                        if (!this.toolbar) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toolbar.setSelectedTab(ev.detail)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsComponent.prototype.emitTabChangeEvent = function (newIndex, oldIndex) {
        if (typeof newIndex !== 'number' || newIndex < 0) {
            return;
        }
        if (typeof oldIndex !== 'number' || oldIndex < 0) {
            oldIndex = this.activeTabIndex;
        }
        this.tabChange.emit({
            changed: newIndex !== oldIndex,
            index: newIndex,
        });
    };
    SuperTabsComponent.prototype.onContainerActiveTabChange = function (ev) {
        this.debug('onContainerActiveTabChange', ev);
        var index = ev.detail;
        this.emitTabChangeEvent(index);
        this.activeTabIndex = index;
        this.toolbar && this.toolbar.setActiveTab(index, true, true);
    };
    SuperTabsComponent.prototype.onToolbarButtonClick = function (ev) {
        this.debug('onToolbarButtonClick', ev);
        var index = ev.detail.index;
        this.container && this.container.setActiveTabIndex(index, true, true);
        this.emitTabChangeEvent(index);
        this.activeTabIndex = index;
    };
    SuperTabsComponent.prototype.indexChildren = function () {
        this.debug('indexChildren');
        var container = this.el.querySelector('super-tabs-container');
        var toolbar = this.el.querySelector('super-tabs-toolbar');
        if (container && this.container !== container) {
            this.container = container;
        }
        if (toolbar && this.toolbar !== toolbar) {
            this.toolbar = toolbar;
        }
        this.propagateConfig();
    };
    SuperTabsComponent.prototype.onSlotchange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // re-index the child components
                this.indexChildren();
                // reselect the current tab to ensure that we're on the correct tab
                this.selectTab(this.activeTabIndex, true, false);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Internal method to output values in debug mode.
     */
    SuperTabsComponent.prototype.debug = function () {
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this._config, 'tabs', vals);
    };
    SuperTabsComponent.prototype.render = function () {
        // Render 3 slots
        // Top & bottom slots allow the toolbar position to be configurable via slots.
        // The nameless slot is used to hold the `super-tabs-container`.
        return (Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "top" }), Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "bottom" })));
    };
    Object.defineProperty(SuperTabsComponent.prototype, "el", {
        get: function () { return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuperTabsComponent, "watchers", {
        get: function () {
            return {
                "config": ["onConfigChange"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return SuperTabsComponent;
}());
SuperTabsComponent.style = superTabsComponentCss;
var superTabsContainerComponentCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--super-tab-width, 100vw);height:var(--super-tab-height, 100%);overflow:hidden;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-ms-touch-action:pan-y;touch-action:pan-y;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:scroll-position;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}";
var SuperTabsContainerComponent = /** @class */ (function () {
    function SuperTabsContainerComponent(hostRef) {
        Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Enable/disable swiping
         */
        this.swipeEnabled = true;
        /**
         * Set to true to automatically scroll to the top of the tab when the button is clicked while the tab is
         * already selected.
         */
        this.autoScrollTop = false;
        this.tabs = [];
        this.isDragging = false;
        this.leftThreshold = 0;
        this.rightThreshold = 0;
        this.scrollWidth = 0;
        this.width = 0;
        this.activeTabIndexChange = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "activeTabIndexChange", 7);
        this.selectedTabIndexChange = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectedTabIndexChange", 7);
        this.queue = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "queue");
    }
    SuperTabsContainerComponent.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('componentDidLoad');
                        this.updateWidth();
                        return [4 /*yield*/, this.indexTabs()];
                    case 1:
                        _a.sent();
                        this.slot = this.el.shadowRoot.querySelector('slot');
                        this.slot.addEventListener('slotchange', this.onSlotChange.bind(this));
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsContainerComponent.prototype.onSlotChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.debug('onSlotChange', this.tabs.length);
                this.updateWidth();
                this.indexTabs();
                return [2 /*return*/];
            });
        });
    };
    SuperTabsContainerComponent.prototype.componentDidRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateWidth();
                return [2 /*return*/];
            });
        });
    };
    /**
     * @internal
     */
    SuperTabsContainerComponent.prototype.reindexTabs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateWidth();
                        return [4 /*yield*/, this.indexTabs()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @internal
     *
     * Moves the container to align with the specified tab index
     * @param index {number} Index of the tab
     * @param animate {boolean} Whether to animate the transition
     */
    SuperTabsContainerComponent.prototype.moveContainerByIndex = function (index, animate) {
        var scrollX = this.indexToPosition(index);
        if (scrollX === 0 && index > 0) {
            return Promise.resolve();
        }
        return this.moveContainer(scrollX, animate);
    };
    /**
     * @internal
     *
     * Sets the scrollLeft property of the container
     * @param scrollX {number}
     * @param animate {boolean}
     */
    SuperTabsContainerComponent.prototype.moveContainer = function (scrollX, animate) {
        if (animate) {
            Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.el, scrollX, 0, this.config.nativeSmoothScroll, this.config.transitionDuration);
        }
        else {
            this.el.scroll(scrollX, 0);
        }
        return Promise.resolve();
    };
    /** @internal */
    SuperTabsContainerComponent.prototype.setActiveTabIndex = function (index, moveContainer, animate) {
        if (moveContainer === void 0) { moveContainer = true; }
        if (animate === void 0) { animate = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.debug('setActiveTabIndex', index);
                if (this._activeTabIndex === index) {
                    if (!this.autoScrollTop) {
                        return [2 /*return*/];
                    }
                    this.scrollToTop();
                }
                if (moveContainer) {
                    this.moveContainerByIndex(index, animate);
                }
                this.updateActiveTabIndex(index, false);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Scroll the active tab to the top.
     */
    SuperTabsContainerComponent.prototype.scrollToTop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var current, el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._activeTabIndex === undefined || this.tabs === undefined) {
                            this.debug('scrollToTop', 'activeTabIndex or tabs was undefined', this._activeTabIndex, this.tabs);
                            return [2 /*return*/];
                        }
                        current = this.tabs[this._activeTabIndex];
                        if (!current) {
                            this.debug('Current active tab was undefined in scrollToTop');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, current.getRootScrollableEl()];
                    case 1:
                        el = _a.sent();
                        if (el) {
                            Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["s"])(el, 0, 0, this.config.nativeSmoothScroll, this.config.transitionDuration);
                        }
                        else {
                            this.debug('scrollToTop', 'couldnt find a scrollable element');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsContainerComponent.prototype.updateActiveTabIndex = function (index, emit) {
        if (emit === void 0) { emit = true; }
        this.debug('updateActiveTabIndex', index, emit, this._activeTabIndex);
        this._activeTabIndex = index;
        emit && this.activeTabIndexChange.emit(this._activeTabIndex);
    };
    SuperTabsContainerComponent.prototype.updateSelectedTabIndex = function (index) {
        if (index === this._selectedTabIndex) {
            return;
        }
        this._selectedTabIndex = index;
        this.selectedTabIndexChange.emit(this._selectedTabIndex);
    };
    SuperTabsContainerComponent.prototype.onTouchStart = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var avoid, element, coords, vw;
            return __generator(this, function (_a) {
                if (!this.swipeEnabled) {
                    return [2 /*return*/];
                }
                if (this.config.avoidElements) {
                    avoid = false;
                    element = ev.target;
                    if (element) {
                        do {
                            if (typeof element.getAttribute === 'function' && element.getAttribute('avoid-super-tabs')) {
                                return [2 /*return*/];
                            }
                            element = element.parentElement;
                        } while (element && !avoid);
                    }
                }
                coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                this.updateWidth();
                vw = this.width;
                if (coords.x < this.leftThreshold || coords.x > vw - this.rightThreshold) {
                    // ignore this gesture, it started in the side menu touch zone
                    return [2 /*return*/];
                }
                if (this.config.shortSwipeDuration > 0) {
                    this.initialTimestamp = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["a"])();
                }
                this.initialCoords = coords;
                this.lastPosX = coords.x;
                return [2 /*return*/];
            });
        });
    };
    SuperTabsContainerComponent.prototype.onClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.isDragging) {
                    ev.stopImmediatePropagation();
                    ev.preventDefault();
                }
                return [2 /*return*/];
            });
        });
    };
    SuperTabsContainerComponent.prototype.onTouchMove = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var coords, deltaX, scrollX, index;
            return __generator(this, function (_a) {
                if (!this.swipeEnabled || !this.initialCoords || typeof this.lastPosX !== 'number') {
                    return [2 /*return*/];
                }
                coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                if (!this.isDragging) {
                    if (!Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["c"])(coords, this.initialCoords, this.config)) {
                        if (Math.abs(coords.y - this.initialCoords.y) > 100) {
                            this.initialCoords = void 0;
                            this.lastPosX = void 0;
                        }
                        return [2 /*return*/];
                    }
                    this.isDragging = true;
                }
                // stop anything else from capturing these events, to make sure the content doesn't slide
                if (!this.config.allowElementScroll) {
                    ev.stopImmediatePropagation();
                }
                deltaX = this.lastPosX - coords.x;
                if (deltaX === 0) {
                    return [2 /*return*/];
                }
                scrollX = Math.max(0, Math.min(this.scrollWidth - this.width, this.el.scrollLeft + deltaX));
                if (Math.floor(scrollX) === Math.floor(this.el.scrollLeft)) {
                    return [2 /*return*/];
                }
                index = Math.round(this.positionToIndex(scrollX) * 100) / 100;
                this.updateSelectedTabIndex(index);
                // update last X value
                this.lastPosX = coords.x;
                this.el.scroll(scrollX, 0);
                return [2 /*return*/];
            });
        });
    };
    SuperTabsContainerComponent.prototype.onTouchEnd = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var coords, deltaTime, shortSwipe, shortSwipeDelta, selectedTabIndex, expectedTabIndex;
            return __generator(this, function (_a) {
                if (!this.swipeEnabled || !this.isDragging) {
                    return [2 /*return*/];
                }
                coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                deltaTime = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["a"])() - this.initialTimestamp;
                shortSwipe = this.config.shortSwipeDuration > 0 && deltaTime <= this.config.shortSwipeDuration;
                shortSwipeDelta = coords.x - this.initialCoords.x;
                selectedTabIndex = this.calcSelectedTab();
                expectedTabIndex = Math.round(selectedTabIndex);
                if (shortSwipe && expectedTabIndex === this._activeTabIndex) {
                    selectedTabIndex += shortSwipeDelta > 0 ? -1 : 1;
                }
                selectedTabIndex = this.normalizeSelectedTab(selectedTabIndex);
                this.updateActiveTabIndex(selectedTabIndex);
                this.moveContainerByIndex(selectedTabIndex, true);
                this.isDragging = false;
                this.initialCoords = void 0;
                this.lastPosX = void 0;
                return [2 /*return*/];
            });
        });
    };
    SuperTabsContainerComponent.prototype.updateWidth = function () {
        var boundingRect = this.el.getBoundingClientRect();
        this.width = Math.round(boundingRect.width * 10000) / 10000;
    };
    SuperTabsContainerComponent.prototype.indexTabs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.width === 0) {
                            requestAnimationFrame(function () {
                                _this.updateWidth();
                                _this.indexTabs();
                            });
                            return [2 /*return*/];
                        }
                        tabs = Array.from(this.el.querySelectorAll('super-tab'));
                        this.scrollWidth = this.width * tabs.length;
                        this.debug('indexTab', this.scrollWidth, this.width);
                        return [4 /*yield*/, Promise.all(tabs.map(function (t) { return t.componentOnReady(); }))];
                    case 1:
                        _a.sent();
                        this.tabs = tabs;
                        if (this.ready && typeof this._activeTabIndex === 'number') {
                            this.moveContainerByIndex(this._activeTabIndex, true);
                        }
                        if (this.config) {
                            switch (this.config.sideMenu) {
                                case 'both':
                                    this.rightThreshold = this.leftThreshold = this.config.sideMenuThreshold || 0;
                                    break;
                                case 'left':
                                    this.leftThreshold = this.config.sideMenuThreshold || 0;
                                    break;
                                case 'right':
                                    this.rightThreshold = this.config.sideMenuThreshold || 0;
                                    break;
                            }
                        }
                        if (this._activeTabIndex !== undefined) {
                            this.moveContainerByIndex(this._activeTabIndex, false)
                                .then(function () {
                                _this.ready = true;
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsContainerComponent.prototype.calcSelectedTab = function () {
        var scrollX = Math.max(0, Math.min(this.scrollWidth - this.width, this.el.scrollLeft));
        return this.positionToIndex(scrollX);
    };
    SuperTabsContainerComponent.prototype.positionToIndex = function (scrollX) {
        var tabWidth = this.width;
        return scrollX / tabWidth;
    };
    SuperTabsContainerComponent.prototype.indexToPosition = function (tabIndex) {
        return Math.round(tabIndex * this.width * 10000) / 10000;
    };
    SuperTabsContainerComponent.prototype.normalizeSelectedTab = function (index) {
        var scrollX = Math.max(0, Math.min(this.scrollWidth - this.width, this.indexToPosition(index)));
        return Math.round(scrollX / this.width);
    };
    /**
     * Internal method to output values in debug mode.
     */
    SuperTabsContainerComponent.prototype.debug = function () {
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.config, 'container', vals);
    };
    SuperTabsContainerComponent.prototype.render = function () {
        return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Object.defineProperty(SuperTabsContainerComponent.prototype, "el", {
        get: function () { return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return SuperTabsContainerComponent;
}());
SuperTabsContainerComponent.style = superTabsContainerComponentCss;



/***/ })

}]);
//# sourceMappingURL=13.js.map