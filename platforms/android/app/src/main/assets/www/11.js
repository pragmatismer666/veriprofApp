(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@ionic-super-tabs/core/dist/esm-es5/super-tab-button_2.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm-es5/super-tab-button_2.entry.js ***!
  \**************************************************************************************/
/*! exports provided: super_tab_button, super_tabs_toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tab_button", function() { return SuperTabButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tabs_toolbar", function() { return SuperTabsToolbarComponent; });
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


var superTabButtonComponentCss = ":host{-ms-flex:1 0 0px;flex:1 0 0;cursor:pointer;position:relative;max-width:100%;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);height:72px;padding:0 24px;-webkit-touch-callout:none;-webkit-user-select:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host ion-label,:host ion-icon,:host ::slotted(ion-label),:host ::slotted(ion-icon){-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-delay:0s;transition-delay:0s;-webkit-box-sizing:content-box !important;box-sizing:content-box !important;-webkit-user-select:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host ion-label,:host ::slotted(ion-label){color:var(--st-label-color-inactive, var(--st-base-color-inactive));line-height:var(--st-label-line-height, 14px);height:var(--st-label-height, 14px);font-size:var(--st-label-font-size, 14px);text-transform:var(--st-label-text-transform, uppercase);font-weight:var(--st-label-font-weight, 500);padding-bottom:var(--st-label-padding-bottom, 16px)}:host ion-icon,:host ::slotted(ion-icon){color:var(--st-icon-color-inactive, var(--st-base-color-inactive));fill:var(--st-icon-color-inactive, var(--st-base-color-inactive));min-height:var(--st-icon-size, 24px);min-width:var(--st-icon-size, 24px);font-size:var(--st-icon-size, 24px);padding-top:12px}@media (hover: hover){:host(:hover){background:rgba(var(--ion-color-contrast-rgb), 0.04)}}:host(.active) ion-label,:host(.active) ion-icon,:host(.active) ::slotted(ion-label),:host(.active) ::slotted(ion-icon){-webkit-transition-delay:75ms;transition-delay:75ms}:host(.active) ion-label,:host(.active) ::slotted(ion-label){color:var(--st-label-color-active, var(--st-base-color-active))}:host(.active) ion-icon,:host(.active) ::slotted(ion-icon){color:var(--st-icon-color-active, var(--st-base-color-active));fill:var(--st-icon-color-active, var(--st-base-color-active))}:host(.icon-only),:host(.label-only){height:48px;-ms-flex-pack:center;justify-content:center}:host(.scrollableContainer){-ms-flex-positive:0;flex-grow:0;-ms-flex-preferred-size:auto;flex-basis:auto;min-width:90px;max-width:360px}::slotted{-ms-flex-negative:1;flex-shrink:1}:host(.label-only) ion-label,:host(.label-only) ::slotted(ion-label){padding-bottom:0}:host(.icon-only) ion-icon,:host(.icon-only) ::slotted(ion-icon){padding-top:0}";
var maxRetryAttempts = 1e3;
var SuperTabButtonComponent = /** @class */ (function () {
    function SuperTabButtonComponent(hostRef) {
        Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Whether the button is disabled
         */
        this.disabled = false;
        /** @internal */
        this.scrollableContainer = false;
        this.retryAttempts = 0;
    }
    SuperTabButtonComponent.prototype.componentDidLoad = function () {
        this.indexChildren();
        this.initCmp();
    };
    SuperTabButtonComponent.prototype.initCmp = function () {
        var _this = this;
        if (!this.el || !this.el.shadowRoot) {
            if (++this.retryAttempts < maxRetryAttempts) {
                requestAnimationFrame(function () { return _this.initCmp(); });
                return;
            }
        }
        if (!this.label && !this.icon) {
            this.indexChildren();
        }
        var slot = this.el.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', function () {
            _this.indexChildren();
        });
    };
    SuperTabButtonComponent.prototype.indexChildren = function () {
        this.label = this.el.querySelector('ion-label');
        this.icon = this.el.querySelector('ion-icon');
    };
    SuperTabButtonComponent.prototype.render = function () {
        return (Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "button", "aria-label": this.label ? this.label.innerText : false, "aria-disabled": this.disabled ? 'true' : false, "aria-selected": this.active ? 'true' : 'false', class: {
                'ion-activatable': !this.disabled,
                'ion-focusable': !this.disabled,
                'icon-only': !!this.icon && !this.label,
                'label-only': !!this.label && !this.icon,
                active: Boolean(this.active),
                scrollableContainer: this.scrollableContainer,
            } }, Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: "unbounded" })));
    };
    Object.defineProperty(SuperTabButtonComponent.prototype, "el", {
        get: function () { return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return SuperTabButtonComponent;
}());
SuperTabButtonComponent.style = superTabButtonComponentCss;
var superTabsToolbarComponentCss = ":host{-ms-flex:0 1 auto;flex:0 1 auto;display:block;width:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);position:relative;background:var(--super-tabs-toolbar-background, var(--ion-color-base));overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:auto;-ms-touch-action:pan-x;touch-action:pan-x;z-index:2;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-font-smoothing:antialiased}:host .buttons-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;width:100%;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);overflow:hidden}:host(:not([no-border])):after{left:0;bottom:-8px;background-position:left 0 top 0;position:absolute;width:100%;height:8px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIBAMAAAACWGKkAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAAB3RSTlMFTEIzJBcOYhQUIwAAAB9JREFUCNdjEIQCBiUoYDCGAgYXKGAIhQKGNChgwAAAorMLKSCkL40AAAAASUVORK5CYII=);background-repeat:repeat-x;content:\"\";z-index:3;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host([scrollable]) .buttons-container{will-change:scroll-position}:host([scrollable][scrollable-padding]) .buttons-container{padding-left:var(--st-scrollable-toolbar-padding-left, 52px);width:calc(100% - var(--st-scrollable-toolbar-padding-left, $st-scrollable-toolbar-padding-left))}";
var SuperTabsToolbarComponent = /** @class */ (function () {
    function SuperTabsToolbarComponent(hostRef) {
        Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Whether to show the indicator. Defaults to `true`
         */
        this.showIndicator = true;
        /**
         * Background color. Defaults to `'primary'`
         */
        this.color = 'primary';
        /**
         * Whether the toolbar is scrollable. Defaults to `false`.
         */
        this.scrollable = false;
        /**
         * If scrollable is set to true, there will be an added padding
         * to the left of the buttons.
         *
         * Setting this property to false will remove that padding.
         *
         * The padding is also configurable via a CSS variable.
         */
        this.scrollablePadding = true;
        this.buttons = [];
        this.activeTabIndex = 0;
        this.touchStartTs = 0;
        this.lastClickTs = 0;
        this.leftThreshold = 0;
        this.rightThreshold = 0;
        this.hostCls = {};
        this.buttonClick = Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "buttonClick", 7);
    }
    SuperTabsToolbarComponent.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.setHostCls();
                        return [4 /*yield*/, this.queryButtons()];
                    case 1:
                        _c.sent();
                        this.slot = this.el.shadowRoot.querySelector('slot');
                        this.slot.addEventListener('slotchange', this.onSlotChange.bind(this));
                        this.updateWidth();
                        requestAnimationFrame(function () {
                            _this.setActiveTab(_this.activeTabIndex, true, false);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsToolbarComponent.prototype.componentWillUpdate = function () {
        this.debug('componentWillUpdate');
        this.updateThresholds();
    };
    SuperTabsToolbarComponent.prototype.componentDidRender = function () {
        this.updateWidth();
    };
    SuperTabsToolbarComponent.prototype.updateWidth = function () {
        var cr = this.el.getBoundingClientRect();
        this.width = Math.round(cr.width * 100) / 100;
        this.offsetLeft = cr.left;
    };
    /** @internal */
    SuperTabsToolbarComponent.prototype.setActiveTab = function (index, align, animate) {
        index = Math.max(0, Math.min(Math.round(index), this.buttons.length - 1));
        this.debug('setActiveTab', index, align, animate);
        this.activeTabIndex = index;
        this.markButtonActive(this.buttons[index]);
        if (align) {
            this.alignIndicator(index, animate);
        }
        return Promise.resolve();
    };
    /** @internal */
    SuperTabsToolbarComponent.prototype.setSelectedTab = function (index, animate) {
        this.alignIndicator(index, animate);
        return Promise.resolve();
    };
    /** @internal */
    SuperTabsToolbarComponent.prototype.moveContainer = function (scrollX, animate) {
        if (!this.buttonsContainerEl) {
            this.debug('moveContainer called before this.buttonsContainerEl was defined');
            return Promise.resolve();
        }
        Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.buttonsContainerEl, scrollX, 0, this.config.nativeSmoothScroll, animate ? this.config.transitionDuration : 0);
        return Promise.resolve();
    };
    SuperTabsToolbarComponent.prototype.getButtonFromEv = function (ev) {
        var button = ev.target;
        var tag = button.tagName.toLowerCase();
        if (tag !== 'super-tab-button') {
            if (tag === 'super-tabs-toolbar') {
                return;
            }
            button = button.closest('super-tab-button');
        }
        return button;
    };
    SuperTabsToolbarComponent.prototype.onClick = function (ev) {
        if (!ev || !ev.target) {
            this.debug('Got a click event with no target!', ev);
            return;
        }
        if (Date.now() - this.touchStartTs <= 150) {
            return;
        }
        var button = this.getButtonFromEv(ev);
        if (!button) {
            return;
        }
        this.onButtonClick(button);
    };
    SuperTabsToolbarComponent.prototype.onButtonClick = function (button) {
        if (!button || button.disabled) {
            return;
        }
        this.lastClickTs = Date.now();
        this.setActiveTab(button.index, true, true);
        this.buttonClick.emit(button);
    };
    SuperTabsToolbarComponent.prototype.onTouchStart = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var coords, vw;
            return __generator(this, function (_c) {
                if (!this.scrollable) {
                    return [2 /*return*/];
                }
                this.debug('onTouchStart', ev);
                coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                vw = this.width;
                if (coords.x < this.leftThreshold || coords.x > vw - this.rightThreshold) {
                    // ignore this gesture, it started in the side menu touch zone
                    return [2 /*return*/];
                }
                this.touchStartTs = Date.now();
                this.initialCoords = coords;
                this.lastPosX = coords.x;
                return [2 /*return*/];
            });
        });
    };
    SuperTabsToolbarComponent.prototype.onTouchMove = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var coords, shouldCapture, deltaX;
            var _this = this;
            return __generator(this, function (_c) {
                if (!this.buttonsContainerEl || !this.scrollable || !this.initialCoords || typeof this.lastPosX !== 'number') {
                    return [2 /*return*/];
                }
                coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                if (!this.isDragging) {
                    shouldCapture = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["c"])(coords, this.initialCoords, this.config);
                    if (!shouldCapture) {
                        if (Math.abs(coords.y - this.initialCoords.y) > 100) {
                            this.initialCoords = void 0;
                            this.lastPosX = void 0;
                        }
                        return [2 /*return*/];
                    }
                    // gesture is good, let's capture all next onTouchMove events
                    this.isDragging = true;
                }
                if (!this.isDragging) {
                    return [2 /*return*/];
                }
                ev.stopImmediatePropagation();
                deltaX = this.lastPosX - coords.x;
                if (deltaX === 0) {
                    return [2 /*return*/];
                }
                // update last X value
                this.lastPosX = coords.x;
                requestAnimationFrame(function () {
                    if (!_this.isDragging) {
                        // when swiping fast; this might run after we're already done scrolling
                        // which leads to "choppy" animations since this instantly scrolls to location
                        return;
                    }
                    // scroll container
                    var scrollX = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["g"])(_this.buttonsContainerEl, _this.buttonsContainerEl.clientWidth, deltaX);
                    if (scrollX === _this.buttonsContainerEl.scrollLeft) {
                        return;
                    }
                    _this.buttonsContainerEl.scroll(scrollX, 0);
                });
                return [2 /*return*/];
            });
        });
    };
    SuperTabsToolbarComponent.prototype.onTouchEnd = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, coords, button;
            return __generator(this, function (_c) {
                if (this.lastClickTs < this.touchStartTs && Date.now() - this.touchStartTs <= 150) {
                    coords = Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
                    if (Math.abs(coords.x - ((_a = this.initialCoords) === null || _a === void 0 ? void 0 : _a.x)) < ((_b = this.config) === null || _b === void 0 ? void 0 : _b.dragThreshold)) {
                        button = this.getButtonFromEv(ev);
                        if (!button) {
                            return [2 /*return*/];
                        }
                        this.onButtonClick(button);
                    }
                }
                this.isDragging = false;
                this.initialCoords = void 0;
                this.lastPosX = void 0;
                return [2 /*return*/];
            });
        });
    };
    SuperTabsToolbarComponent.prototype.onColorUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                this.setHostCls();
                return [2 /*return*/];
            });
        });
    };
    SuperTabsToolbarComponent.prototype.setHostCls = function () {
        var cls = {};
        if (typeof this.color === 'string' && this.color.trim().length > 0) {
            cls['ion-color-' + this.color.trim()] = true;
        }
        this.hostCls = cls;
    };
    SuperTabsToolbarComponent.prototype.onSlotChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.debug('onSlotChange');
                        this.updateWidth();
                        return [4 /*yield*/, this.queryButtons()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.setActiveTab(this.activeTabIndex, true)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsToolbarComponent.prototype.queryButtons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buttons, i, button;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.debug('Querying buttons');
                        buttons = Array.from(this.el.querySelectorAll('super-tab-button'));
                        return [4 /*yield*/, Promise.all(buttons.map(function (b) { return b.componentOnReady(); }))];
                    case 1:
                        _c.sent();
                        if (buttons) {
                            for (i = 0; i < buttons.length; i++) {
                                button = buttons[i];
                                button.index = i;
                                button.scrollableContainer = this.scrollable;
                                button.active = this.activeTabIndex === i;
                                if (button.active) {
                                    this.activeButton = button;
                                }
                            }
                        }
                        this.buttons = buttons;
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperTabsToolbarComponent.prototype.updateThresholds = function () {
        if (!this.config) {
            return;
        }
        if (this.config.sideMenu === 'both' || this.config.sideMenu === 'left') {
            this.leftThreshold = this.config.sideMenuThreshold;
        }
        if (this.config.sideMenu === 'both' || this.config.sideMenu === 'right') {
            this.rightThreshold = this.config.sideMenuThreshold;
        }
    };
    SuperTabsToolbarComponent.prototype.markButtonActive = function (button) {
        if (!button) {
            this.debug('markButtonActive', 'button was undefined!');
            return;
        }
        if (this.activeButton) {
            this.activeButton.active = false;
        }
        button.active = true;
        this.activeButton = button;
    };
    SuperTabsToolbarComponent.prototype.setButtonsContainerEl = function (el) {
        if (el) {
            this.buttonsContainerEl = el;
        }
    };
    SuperTabsToolbarComponent.prototype.adjustContainerScroll = function (animate) {
        if (!this.buttonsContainerEl) {
            this.debug('adjustContainerScroll called before this.buttonsContainerEl was defined');
            return;
        }
        var pos;
        var ip = this.indicatorPosition;
        var iw = this.indicatorWidth;
        var mw = this.buttonsContainerEl.clientWidth;
        var sp = this.buttonsContainerEl.scrollLeft;
        var centerDelta = ((mw / 2 - iw / 2));
        var a = Math.floor((ip + iw + centerDelta));
        var b = Math.floor((ip - centerDelta));
        var c = Math.floor((mw + sp));
        if (a > c) {
            // we need to move the segment container to the left
            pos = ip + iw + centerDelta - mw;
        }
        else if (b < sp) {
            // we need to move the segment container to the right
            pos = Math.max(ip - centerDelta, 0);
            pos = pos > ip ? ip - mw + iw : pos;
        }
        else {
            return;
        }
        if (!animate) {
            Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.buttonsContainerEl, pos, 0, false, 50);
        }
        else {
            this.moveContainer(pos, animate);
        }
    };
    /**
     * Align the indicator with the selected button.
     * This will adjust the width and the position of the indicator element.
     * @param index {number} the active tab index
     * @param [animate] {boolean=false} whether to animate the transition
     */
    SuperTabsToolbarComponent.prototype.alignIndicator = function (index, animate) {
        if (animate === void 0) { animate = false; }
        return __awaiter(this, void 0, void 0, function () {
            var remainder, isDragging, floor, ceil, button, position, width, buttonB, buttonBPosition, buttonBWidth;
            var _this = this;
            return __generator(this, function (_c) {
                if (!this.showIndicator || !this.indicatorEl) {
                    return [2 /*return*/];
                }
                this.debug('Aligning indicator', index);
                remainder = index % 1;
                isDragging = this.isDragging = remainder > 0;
                floor = Math.floor(index), ceil = Math.ceil(index);
                button = this.buttons[floor];
                if (!button) {
                    return [2 /*return*/];
                }
                position = button.offsetLeft;
                width = button.clientWidth;
                if (isDragging && floor !== ceil) {
                    buttonB = this.buttons[ceil];
                    if (!buttonB) {
                        // the scroll position we received is higher than the max possible position
                        // this could happen due to bad CSS (by developer or this module)
                        // or bad scrolling logic?
                        return [2 /*return*/];
                    }
                    buttonBPosition = buttonB.offsetLeft;
                    buttonBWidth = buttonB.clientWidth;
                    position += remainder * (buttonBPosition - position);
                    width += remainder * (buttonBWidth - width);
                }
                requestAnimationFrame(function () {
                    _this.indicatorPosition = position;
                    _this.indicatorWidth = width;
                    if (_this.scrollable) {
                        _this.adjustContainerScroll(animate || !isDragging);
                    }
                    _this.indicatorEl.style.setProperty('--st-indicator-position-x', _this.indicatorPosition + 'px');
                    _this.indicatorEl.style.setProperty('--st-indicator-scale-x', String(_this.indicatorWidth / 100));
                    _this.indicatorEl.style.setProperty('--st-indicator-transition-duration', _this.isDragging ? '0' : _this.config.transitionDuration + "ms");
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Internal method to output values in debug mode.
     */
    SuperTabsToolbarComponent.prototype.debug = function () {
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        Object(_utils_640d2cf5_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.config, 'toolbar', vals);
    };
    SuperTabsToolbarComponent.prototype.render = function () {
        var _this = this;
        return (Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "navigation", class: this.hostCls }, Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "buttons-container", ref: function (ref) { return _this.setButtonsContainerEl(ref); } }, Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), this.showIndicator &&
            Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("super-tab-indicator", { ref: function (ref) { return _this.indicatorEl = ref; }, toolbarPosition: this.el.assignedSlot.name }))));
    };
    Object.defineProperty(SuperTabsToolbarComponent.prototype, "el", {
        get: function () { return Object(_index_a34c410e_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SuperTabsToolbarComponent, "watchers", {
        get: function () {
            return {
                "color": ["onColorUpdate"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return SuperTabsToolbarComponent;
}());
SuperTabsToolbarComponent.style = superTabsToolbarComponentCss;



/***/ })

}]);
//# sourceMappingURL=11.js.map