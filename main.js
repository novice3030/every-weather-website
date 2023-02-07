(self["webpackChunkevery_weather"] = self["webpackChunkevery_weather"] || []).push([["main"],{

/***/ 3618:
/*!****************************************************!*\
  !*** ./src/app/api-services/cities-api.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesApiService": () => (/* binding */ CitiesApiService)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ 8837);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CitiesApiService {
    constructor(http) {
        this.http = http;
    }
    searchCities(searchQuery) {
        return this.http
            .get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${_consts__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&q=${searchQuery}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((results) => results.map(result => {
            return {
                name: result.LocalizedName,
                id: result.Key,
            };
        })));
    }
}
CitiesApiService.ɵfac = function CitiesApiService_Factory(t) { return new (t || CitiesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
CitiesApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CitiesApiService, factory: CitiesApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8837:
/*!****************************************!*\
  !*** ./src/app/api-services/consts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KEY": () => (/* binding */ API_KEY)
/* harmony export */ });
const API_KEY = 'YwaQ5spXthCAbfnd8RpToPB5w7n8NpuZ';


/***/ }),

/***/ 6146:
/*!*****************************************************!*\
  !*** ./src/app/api-services/weather-api.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherApiService": () => (/* binding */ WeatherApiService)
/* harmony export */ });
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! guid-typescript */ 9846);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ 8837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);







class WeatherApiService {
    constructor(http) {
        this.http = http;
    }
    getCurrentWeather(cityId) {
        return this.http
            .get(`https://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=${_consts__WEBPACK_IMPORTED_MODULE_2__.API_KEY}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(apiResult => {
            const weatherResult = apiResult[0];
            if (weatherResult) {
                return {
                    id: guid_typescript__WEBPACK_IMPORTED_MODULE_0__.Guid.create().toString(),
                    cityId,
                    date: moment__WEBPACK_IMPORTED_MODULE_1__().toISOString(),
                    text: weatherResult.WeatherText,
                    temperature: {
                        impirialValue: weatherResult.Temperature.Imperial.Value,
                        impirialUnit: weatherResult.Temperature.Imperial.Unit,
                        metricValue: weatherResult.Temperature.Metric.Value,
                        metricUnit: weatherResult.Temperature.Metric.Unit,
                    },
                };
            }
            return null;
        }));
    }
    getCurrentWeatherForMultipleCities(cityIds) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(cityIds.map(cityId => this.getCurrentWeather(cityId)));
    }
    getWeatherForecast(cityId) {
        return this.http
            .get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${_consts__WEBPACK_IMPORTED_MODULE_2__.API_KEY}&metric=true`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result.DailyForecasts.map(forecast => {
            return {
                id: guid_typescript__WEBPACK_IMPORTED_MODULE_0__.Guid.create().toString(),
                cityId,
                text: forecast.Day.IconPhrase,
                date: forecast.Date,
                isForecast: true,
                temperature: {
                    minMetricValue: forecast.Temperature.Minimum.Value,
                    maxMetricValue: forecast.Temperature.Maximum.Value,
                },
            };
        })));
    }
}
WeatherApiService.ɵfac = function WeatherApiService_Factory(t) { return new (t || WeatherApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
WeatherApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WeatherApiService, factory: WeatherApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_cities_page_cities_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cities-page/cities-page.component */ 7633);
/* harmony import */ var _components_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/favorites-page/favorites-page.component */ 4197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', component: _components_cities_page_cities_page_component__WEBPACK_IMPORTED_MODULE_0__.CitiesPageComponent },
    { path: 'favorites', component: _components_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_1__.FavoritesPageComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/favorite.actions */ 2507);
/* harmony import */ var _reducers_city_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/city.actions */ 4837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _components_units_selector_units_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/units-selector/units-selector.component */ 341);










class AppComponent {
    constructor(router, favoriteStore) {
        this.router = router;
        this.favoriteStore = favoriteStore;
        this.favoriteStore.dispatch(new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.LoadFavoritesFromLocalStorage());
        this.favoriteStore.dispatch(new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_1__.AddCity({
            city: {
                id: '215854',
                name: 'Tel Aviv',
            },
        }));
        this.favoriteStore.dispatch(new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_1__.SelectCity({ cityId: '215854' }));
    }
    onCitiesWeatherClicked() {
        this.router.navigateByUrl('/');
    }
    onFavoritesClicked() {
        this.router.navigateByUrl('/favorites');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 1, consts: [[1, "spacer"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["appMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "outlet-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar")(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " ac_unit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Every Weather");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 0)(6, "app-units-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 1)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-menu", null, 2)(12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.onCitiesWeatherClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Cities Weather ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.onFavoritesClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Favorites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _components_units_selector_units_selector_component__WEBPACK_IMPORTED_MODULE_2__.UnitsSelectorComponent], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.outlet-container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5vdXRsZXQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment */ 2340);
/* harmony import */ var _effects_app_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/app.effects */ 8880);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ 1697);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _components_city_selector_city_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/city-selector/city-selector.component */ 5106);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/weather-card/weather-card.component */ 9081);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-moment */ 9692);
/* harmony import */ var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/moment.pipe */ 5062);
/* harmony import */ var _components_cities_page_cities_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cities-page/cities-page.component */ 7633);
/* harmony import */ var _components_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/favorites-page/favorites-page.component */ 4197);
/* harmony import */ var _components_units_selector_units_selector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/units-selector/units-selector.component */ 341);
/* harmony import */ var _pipes_impirial_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/impirial.pipe */ 2451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);


































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_27__.MomentModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_28__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_4__.reducers, {
            metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_4__.metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            },
        }),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_29__.EffectsModule.forRoot([_effects_app_effects__WEBPACK_IMPORTED_MODULE_1__.AppEffects]),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_30__.StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production, // Restrict extension to log-only mode
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _components_city_selector_city_selector_component__WEBPACK_IMPORTED_MODULE_5__.CityselectorComponent,
        _components_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_6__.WeatherCardComponent,
        _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_7__.MomentPipe,
        _components_cities_page_cities_page_component__WEBPACK_IMPORTED_MODULE_8__.CitiesPageComponent,
        _components_favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_9__.FavoritesPageComponent,
        _components_units_selector_units_selector_component__WEBPACK_IMPORTED_MODULE_10__.UnitsSelectorComponent,
        _pipes_impirial_pipe__WEBPACK_IMPORTED_MODULE_11__.ImpirialPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_27__.MomentModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_28__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_29__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_30__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 7633:
/*!*****************************************************************!*\
  !*** ./src/app/components/cities-page/cities-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesPageComponent": () => (/* binding */ CitiesPageComponent)
/* harmony export */ });
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reducers */ 1697);
/* harmony import */ var _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../reducers/favorite.actions */ 2507);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _city_selector_city_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../city-selector/city-selector.component */ 5106);
/* harmony import */ var _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather-card/weather-card.component */ 9081);













function CitiesPageComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CitiesPageComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onRemoveFromFavoritesClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx_r0.selectedCity$));
  }
}
function CitiesPageComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CitiesPageComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.onAddToFavoritesClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx_r1.selectedCity$));
  }
}
function CitiesPageComponent_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-weather-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const weather_r9 = ctx.$implicit;
    const selectedCity_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cityName", selectedCity_r7.name)("weather", weather_r9)("isImpirial", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx_r8.isImpirial$));
  }
}
function CitiesPageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Current:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-weather-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Next 5 days:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CitiesPageComponent_div_7_div_11_Template, 3, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const selectedCity_r7 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cityName", selectedCity_r7.name)("weather", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, ctx_r2.currentWeather$))("isImpirial", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, ctx_r2.isImpirial$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 8, ctx_r2.weatherForecasts$));
  }
}
class CitiesPageComponent {
  constructor(cityStore, weatherStore, appSettingsStore) {
    this.cityStore = cityStore;
    this.weatherStore = weatherStore;
    this.appSettingsStore = appSettingsStore;
    this.title = 'every-weather';
  }
  ngOnInit() {
    this.isImpirial$ = this.appSettingsStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_0__.isImpirial));
    this.selectedCity$ = this.cityStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_0__.getCurrentCity));
    this.isSelectedCityInFavorites$ = this.cityStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_0__.isSelectedCityInFavorites), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)());
    this.currentWeather$ = this.weatherStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_0__.getSelectedCityWeather));
    this.weatherForecasts$ = this.weatherStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_0__.getSelectedCityWeatherForcasts));
  }
  onAddToFavoritesClicked() {
    this.cityStore.dispatch(new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_1__.AddSelectedCityToFavorites());
  }
  onRemoveFromFavoritesClicked() {
    this.cityStore.dispatch(new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_1__.RemoveSelectedCityFromFavorites());
  }
}
CitiesPageComponent.ɵfac = function CitiesPageComponent_Factory(t) {
  return new (t || CitiesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};
CitiesPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CitiesPageComponent,
  selectors: [["app-cities-page"]],
  decls: 9,
  vars: 9,
  consts: [[1, "row", "center-sm", "middle-sm", "cities-search-container"], [1, "col-sm-12", "col-md-8", "col-xs-12"], ["matTooltip", "Remove from favorites", "class", "add-to-favorites-button", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["matTooltip", "Add to favorites", "class", "add-to-favorites-button", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["class", "weather-container", 4, "ngIf"], ["matTooltip", "Remove from favorites", "mat-raised-button", "", "color", "primary", 1, "add-to-favorites-button", 3, "disabled", "click"], [1, "favorite-icon", "strike-center"], ["matTooltip", "Add to favorites", "mat-raised-button", "", "color", "primary", 1, "add-to-favorites-button", 3, "disabled", "click"], [1, "weather-container"], [1, "row"], [1, "col-sm-4"], [3, "cityName", "weather", "isImpirial"], ["class", "col forecast-card", 4, "ngFor", "ngForOf"], [1, "col", "forecast-card"]],
  template: function CitiesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-city-selector");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CitiesPageComponent_button_3_Template, 4, 3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CitiesPageComponent_button_5_Template, 4, 3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CitiesPageComponent_div_7_Template, 13, 10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, ctx.isSelectedCityInFavorites$) === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, ctx.isSelectedCityInFavorites$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, ctx.selectedCity$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _city_selector_city_selector_component__WEBPACK_IMPORTED_MODULE_2__.CityselectorComponent, _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_3__.WeatherCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".cities-search-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.weather-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.forecast-card[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-top: 10px;\n  width: 300px;\n}\n\n.add-to-favorites-button[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n.favorite-icon.remove[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.strike-center[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap; \n}\n\n.strike-center[_ngcontent-%COMP%]:after {\n  border-top: 2px solid #000;\n  position: absolute;\n  content: \"\";\n  right: 0;\n  top: 50%;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdGllcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREU7RUFDRSw2QkFBQTtBQUlKOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQSxFQUFBLGlFQUFBO0FBR0Y7O0FBQUE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQUdGIiwiZmlsZSI6ImNpdGllcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpdGllcy1zZWFyY2gtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi53ZWF0aGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmZvcmVjYXN0LWNhcmQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5hZGQtdG8tZmF2b3JpdGVzLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmZhdm9yaXRlLWljb24ge1xuICAmLnJlbW92ZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbn1cblxuLnN0cmlrZS1jZW50ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIHdvdWxkIGNlbnRlciBsaW5lLXRocm91Z2ggaW4gdGhlIG1pZGRsZSBvZiB0aGUgd3JhcHBlZCBsaW5lcyAqL1xufVxuXG4uc3RyaWtlLWNlbnRlcjphZnRlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG59XG4iXX0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 5106:
/*!*********************************************************************!*\
  !*** ./src/app/components/city-selector/city-selector.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityselectorComponent": () => (/* binding */ CityselectorComponent)
/* harmony export */ });
/* harmony import */ var _reducers_city_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reducers/city.actions */ 4837);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers */ 1697);
/* harmony import */ var SubSink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SubSink */ 7324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);

















const _c0 = ["autoCompleteInput"];
function CityselectorComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", city_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", city_r3.name, " ");
  }
}
class CityselectorComponent {
  constructor(cityStore) {
    this.cityStore = cityStore;
    this.cityInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl();
    this.subs = new SubSink__WEBPACK_IMPORTED_MODULE_2__.SubSink();
  }
  ngOnInit() {
    this.cities$ = this.cityStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers__WEBPACK_IMPORTED_MODULE_1__.selectCities));
    this.subs.add(this.cityStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers__WEBPACK_IMPORTED_MODULE_1__.getCurrentCity)).subscribe(city => {
      if (city) {
        this.cityInput.setValue(city.name);
      }
    }));
  }
  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.autoCompleteInput.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300)).subscribe(event => {
      if (this.cityInput.value) {
        this.subs.add(
        // select cities from the store first to allow caching. if not found api endpoint will be used instead.
        this.cityStore.select(_reducers__WEBPACK_IMPORTED_MODULE_1__.queryCities).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(selector => selector(this.cityInput.value))).subscribe(cities => {
          if (cities.length > 0) {
            this.cities$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(cities);
          } else {
            this.cityStore.dispatch(new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_0__.SearchCities({
              query: this.cityInput.value
            }));
          }
        }));
      } else {
        this.cityStore.dispatch(new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_0__.ClearSelectedCity());
      }
    });
  }
  onOptionSelected(event) {
    if (event.option.value && event.option.value.id) {
      this.cityStore.dispatch(new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_0__.SelectCity({
        cityId: event.option.value.id
      }));
      this.cityInput.setValue(event.option.value.name);
    } else {
      this.cityStore.dispatch(new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_0__.ClearSelectedCity());
    }
  }
  trackByCity(value, index) {
    return value.id;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
CityselectorComponent.ɵfac = function CityselectorComponent_Factory(t) {
  return new (t || CityselectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
};
CityselectorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CityselectorComponent,
  selectors: [["app-city-selector"]],
  viewQuery: function CityselectorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.autoCompleteInput = _t.first);
    }
  },
  decls: 9,
  vars: 7,
  consts: [[1, "city-selector"], ["type", "text", "matInput", "", "name", "countryInput", "placeholder", "search cities", 3, "formControl", "matAutocomplete"], ["autoCompleteInput", ""], ["matSuffix", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value"]],
  template: function CityselectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-autocomplete", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function CityselectorComponent_Template_mat_autocomplete_optionSelected_5_listener($event) {
        return ctx.onOptionSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CityselectorComponent_mat_option_7_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.cityInput)("matAutocomplete", _r1)("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 5, ctx.cities$))("ngForTrackBy", ctx.trackByCity);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: [".city-selector[_ngcontent-%COMP%] {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoiY2l0eS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXR5LXNlbGVjdG9yIHtcbiAgd2lkdGg6IDYwJTtcbn1cbiJdfQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4197:
/*!***********************************************************************!*\
  !*** ./src/app/components/favorites-page/favorites-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageComponent": () => (/* binding */ FavoritesPageComponent)
/* harmony export */ });
/* harmony import */ var _reducers_city_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/reducers/city.actions */ 4837);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../reducers/index */ 1697);
/* harmony import */ var _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../reducers/favorite.actions */ 2507);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather-card/weather-card.component */ 9081);










function FavoritesPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "app-weather-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cardClick", function FavoritesPageComponent_div_3_Template_app_weather_card_cardClick_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const favorite_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.onWeatherCardClicked(favorite_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const favorite_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cityName", favorite_r1.cityName)("weather", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, ctx_r0.getWeatherByCityId(favorite_r1.id)))("isImpirial", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, ctx_r0.isImpirial$));
  }
}
class FavoritesPageComponent {
  constructor(favoriteStore, weatherStore, appSettingsStore, router) {
    this.favoriteStore = favoriteStore;
    this.weatherStore = weatherStore;
    this.appSettingsStore = appSettingsStore;
    this.router = router;
  }
  ngOnInit() {
    this.isImpirial$ = this.appSettingsStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_1__.isImpirial));
    this.favoriteStore.dispatch(new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_2__.LoadFavoritesPage());
    this.favorites$ = this.favoriteStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_1__.selectFavorites));
  }
  getWeatherByCityId(cityId) {
    return this.weatherStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_1__.getWeatherByCityId, {
      cityId
    }));
  }
  onWeatherCardClicked(favorite) {
    this.favoriteStore.dispatch(new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_0__.AddCity({
      city: {
        id: favorite.id,
        name: favorite.cityName
      }
    }));
    this.favoriteStore.dispatch(new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_0__.SelectCity({
      cityId: favorite.id
    }));
    this.router.navigateByUrl('/');
  }
}
FavoritesPageComponent.ɵfac = function FavoritesPageComponent_Factory(t) {
  return new (t || FavoritesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
FavoritesPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FavoritesPageComponent,
  selectors: [["app-favorites-page"]],
  decls: 5,
  vars: 3,
  consts: [[1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], ["clickable", "true", 3, "cityName", "weather", "isImpirial", "cardClick"]],
  template: function FavoritesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Favorites:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FavoritesPageComponent_div_3_Template, 4, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx.favorites$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_3__.WeatherCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 341:
/*!***********************************************************************!*\
  !*** ./src/app/components/units-selector/units-selector.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitsSelectorComponent": () => (/* binding */ UnitsSelectorComponent)
/* harmony export */ });
/* harmony import */ var _reducers_app_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../reducers/app-settings.actions */ 8466);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../reducers/index */ 1697);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







class UnitsSelectorComponent {
  constructor(appSettingsStore) {
    this.appSettingsStore = appSettingsStore;
  }
  ngOnInit() {
    this.appSettings$ = this.appSettingsStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_1__.selectAppSettings));
  }
  onSelectionChanged(changeEvent) {
    this.appSettingsStore.dispatch(new _reducers_app_settings_actions__WEBPACK_IMPORTED_MODULE_0__.SetDegreesUnit({
      unit: changeEvent.value
    }));
  }
}
UnitsSelectorComponent.ɵfac = function UnitsSelectorComponent_Factory(t) {
  return new (t || UnitsSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
UnitsSelectorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: UnitsSelectorComponent,
  selectors: [["app-units-selector"]],
  decls: 6,
  vars: 3,
  consts: [["aria-label", "Select an option", 3, "value", "change"], ["value", "METRIC"], ["value", "IMPIRIAL"]],
  template: function UnitsSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-group", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UnitsSelectorComponent_Template_mat_radio_group_change_0_listener($event) {
        return ctx.onSelectionChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-radio-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Metric");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-radio-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Impirial");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.appSettings$).degreesUnit);
    }
  },
  dependencies: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  margin-right: 20px;\n  margin-left: 20px;\n}\n\n  .mat-radio-label-content {\n  font-size: 14px;\n}\n\n  .mat-radio-button {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXRzLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7QUFBSiIsImZpbGUiOiJ1bml0cy1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 9081:
/*!*******************************************************************!*\
  !*** ./src/app/components/weather-card/weather-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherCardComponent": () => (/* binding */ WeatherCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/moment.pipe */ 5062);
/* harmony import */ var _pipes_impirial_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/impirial.pipe */ 2451);






function WeatherCardComponent_mat_card_0_mat_card_title_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Current Weather in ", ctx_r1.cityName, " ");
} }
function WeatherCardComponent_mat_card_0_mat_card_title_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.weather.date, "dddd"), " ");
} }
function WeatherCardComponent_mat_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.weather.text, " ");
} }
function WeatherCardComponent_mat_card_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "impirial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r4.weather.temperature.metricValue, ctx_r4.isImpirial), " ", ctx_r4.degreesUnit, " ");
} }
function WeatherCardComponent_mat_card_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "impirial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "impirial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 4, ctx_r5.weather.temperature.minMetricValue, ctx_r5.isImpirial), " ", ctx_r5.degreesUnit, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 7, ctx_r5.weather.temperature.maxMetricValue, ctx_r5.isImpirial), " ", ctx_r5.degreesUnit, " ");
} }
const _c0 = function (a0) { return { clickable: a0 }; };
function WeatherCardComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WeatherCardComponent_mat_card_0_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onWeatherCardClicked()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WeatherCardComponent_mat_card_0_mat_card_title_1_Template, 2, 1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WeatherCardComponent_mat_card_0_mat_card_title_2_Template, 3, 4, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-content")(4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, WeatherCardComponent_mat_card_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Temperature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WeatherCardComponent_mat_card_0_div_9_Template, 3, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, WeatherCardComponent_mat_card_0_div_10_Template, 4, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx_r0.clickable));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.weather.isForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.weather.isForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.weather.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.weather.isForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.weather.isForecast);
} }
class WeatherCardComponent {
    constructor() {
        this.clickable = false;
        this.isImpirial = false;
        this.cardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    onWeatherCardClicked() {
        this.cardClick.emit(this.weather);
    }
    get degreesUnit() {
        return this.isImpirial ? 'F' : 'C';
    }
}
WeatherCardComponent.ɵfac = function WeatherCardComponent_Factory(t) { return new (t || WeatherCardComponent)(); };
WeatherCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WeatherCardComponent, selectors: [["app-weather-card"]], inputs: { weather: "weather", cityName: "cityName", clickable: "clickable", isImpirial: "isImpirial" }, outputs: { cardClick: "cardClick" }, decls: 1, vars: 1, consts: [["class", "card", 3, "ngClass", "click", 4, "ngIf"], [1, "card", 3, "ngClass", "click"], [4, "ngIf"], [1, "row"], ["class", "col-sm-12 col-xs-6 col-md-6", 4, "ngIf"], [1, "col-sm-6", "col-xs-6", "col-md-6"], ["class", "col-sm-6 col-xs-6 col-md-6 text-end", 4, "ngIf"], [1, "col-sm-12", "col-xs-6", "col-md-6"], [1, "col-sm-6", "col-xs-6", "col-md-6", "text-end"]], template: function WeatherCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WeatherCardComponent_mat_card_0_Template, 11, 8, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.weather);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_0__.MomentPipe, _pipes_impirial_pipe__WEBPACK_IMPORTED_MODULE_1__.ImpirialPipe], styles: [".card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  min-height: 120px;\n  margin: 10px;\n}\n.card.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.row[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6IndlYXRoZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgJi5jbGlja2FibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4ucm93IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 8880:
/*!****************************************!*\
  !*** ./src/app/effects/app.effects.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppEffects": () => (/* binding */ AppEffects)
/* harmony export */ });
/* harmony import */ var _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../reducers/favorite.actions */ 2507);
/* harmony import */ var _reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../reducers/weather.actions */ 8363);
/* harmony import */ var _reducers_city_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../reducers/city.actions */ 4837);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 538);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ 1697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_services_cities_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-services/cities-api.service */ 3618);
/* harmony import */ var _api_services_weather_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../api-services/weather-api.service */ 6146);












class AppEffects {
    constructor(actions$, citiesApiService, weatherApiService, cityStore, favoriteStore) {
        this.actions$ = actions$;
        this.citiesApiService = citiesApiService;
        this.weatherApiService = weatherApiService;
        this.cityStore = cityStore;
        this.favoriteStore = favoriteStore;
        // Search cities using the api and load them to the store
        this.searchCities$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_city_actions__WEBPACK_IMPORTED_MODULE_2__.CityActionTypes.SearchCities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((action) => this.citiesApiService
            .searchCities(action.payload.query)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(cities => new _reducers_city_actions__WEBPACK_IMPORTED_MODULE_2__.LoadCities({ cities }))))));
        // gets the weather for the selected city from the api and loads it to the store
        this.getCityCurrentWeather$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__.WeatherActionTypes.GetCityCurrentWeather), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((action) => this.weatherApiService
            .getCurrentWeather(action.payload.cityId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(weather => new _reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__.LoadWeathers({ weathers: [weather] }))))));
        // gets the forecastes for a city from the api and add them to the store
        this.getCityWeatherForcast$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__.WeatherActionTypes.GetCityWeatherForecast), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((action) => this.weatherApiService
            .getWeatherForecast(action.payload.cityId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(weathers => new _reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__.AddWeathers({ weathers }))))));
        // when city is selected get new weather data for that city from the api and load to it the the store
        this.citySelected$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_city_actions__WEBPACK_IMPORTED_MODULE_2__.CityActionTypes.SelectCity), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((action) => [
            new _reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__.ClearWeathers(),
            new _reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__.GetCityCurrentWeather({ cityId: action.payload.cityId }),
            new _reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__.GetCityWeatherForecast(action.payload),
        ])));
        // saves favorites cities from the store to local storage
        this.saveFavoritesToLocalStorage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.SaveFavoritesToLocalStorage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)(this.cityStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_reducers__WEBPACK_IMPORTED_MODULE_3__.selectFavorites))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([, favorites]) => window.localStorage.setItem('favorites', JSON.stringify(favorites)))), { dispatch: false });
        // load favorites from local storage and load them to the store
        this.loadFavoritesFromLocalStorage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.LoadFavoritesFromLocalStorage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
            const favorites = JSON.parse(window.localStorage.getItem('favorites'));
            if (favorites && favorites.length > 0) {
                return new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.LoadFavorites({ favorites });
            }
            return new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.LoadFavorites({ favorites: [] });
        })));
        // when a favorite is added to the store save the favorites to local storage
        this.addToFavorites$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.AddFavorite), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => [new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.SaveFavoritesToLocalStorage()])));
        // add the selected city to the favorites store
        this.addSelectedCityToFavorites$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.AddSelectedCityToFavorites), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)(this.cityStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_reducers__WEBPACK_IMPORTED_MODULE_3__.getCurrentCity))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([, selectedCity]) => new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.AddFavorite({
            favorite: {
                id: selectedCity.id,
                cityName: selectedCity.name,
            },
        }))));
        // loads the favorites page data from the api
        this.loadFavoritesPage$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.LoadFavoritesPage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)(this.favoriteStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_reducers__WEBPACK_IMPORTED_MODULE_3__.selectFavoriteIds))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(([, ids]) => this.weatherApiService
            .getCurrentWeatherForMultipleCities(ids)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(weathers => new _reducers_weather_actions__WEBPACK_IMPORTED_MODULE_1__.LoadWeathers({ weathers }))))));
        // remove the selected city from the store
        this.removeSelectedCityFromFavorites$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.RemoveSelectedCityFromFavorites), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)(this.cityStore.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_reducers__WEBPACK_IMPORTED_MODULE_3__.selectCurrentCityId))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([, selectedCityId]) => new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.DeleteFavorite({ id: selectedCityId }))));
        // when a favorite is removed save the favorites to local storage
        this.deleteFavorite$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.DeleteFavorite), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => [new _reducers_favorite_actions__WEBPACK_IMPORTED_MODULE_0__.SaveFavoritesToLocalStorage()])));
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_api_services_cities_api_service__WEBPACK_IMPORTED_MODULE_4__.CitiesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_api_services_weather_api_service__WEBPACK_IMPORTED_MODULE_5__.WeatherApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store)); };
AppEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: AppEffects, factory: AppEffects.ɵfac });


/***/ }),

/***/ 2451:
/*!****************************************!*\
  !*** ./src/app/pipes/impirial.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpirialPipe": () => (/* binding */ ImpirialPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ImpirialPipe {
    transform(value, active) {
        if (active) {
            return Math.floor((value * 9) / 5 + 32) + '\u00B0';
        }
        return Math.floor(value) + '\u00B0';
    }
}
ImpirialPipe.ɵfac = function ImpirialPipe_Factory(t) { return new (t || ImpirialPipe)(); };
ImpirialPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "impirial", type: ImpirialPipe, pure: true });


/***/ }),

/***/ 5062:
/*!**************************************!*\
  !*** ./src/app/pipes/moment.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentPipe": () => (/* binding */ MomentPipe)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class MomentPipe {
    transform(date, format = 'YYYY-MM-DD HH:mm:ss') {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).format(format);
    }
}
MomentPipe.ɵfac = function MomentPipe_Factory(t) { return new (t || MomentPipe)(); };
MomentPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "moment", type: MomentPipe, pure: false });


/***/ }),

/***/ 8466:
/*!**************************************************!*\
  !*** ./src/app/reducers/app-settings.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettingsActionTypes": () => (/* binding */ AppSettingsActionTypes),
/* harmony export */   "LoadAppSettingsFromLocalStorage": () => (/* binding */ LoadAppSettingsFromLocalStorage),
/* harmony export */   "LoadAppSettingss": () => (/* binding */ LoadAppSettingss),
/* harmony export */   "SaveAppSettingsToLocalStorage": () => (/* binding */ SaveAppSettingsToLocalStorage),
/* harmony export */   "SetDegreesUnit": () => (/* binding */ SetDegreesUnit)
/* harmony export */ });
var AppSettingsActionTypes;
(function (AppSettingsActionTypes) {
    AppSettingsActionTypes["LoadAppSettings"] = "[AppSettings] Load AppSettings";
    AppSettingsActionTypes["SaveAppSettingsToLocalStorage"] = "[AppSettings] Save To Local Storage";
    AppSettingsActionTypes["LoadAppSettingsFromLocalStorage"] = "[AppSettings] Load From Local Storage";
    AppSettingsActionTypes["SetDegreesUnit"] = "[AppSettings] Set Degrees Unit";
})(AppSettingsActionTypes || (AppSettingsActionTypes = {}));
class LoadAppSettingss {
    constructor(payload) {
        this.payload = payload;
        this.type = AppSettingsActionTypes.LoadAppSettings;
    }
}
class SaveAppSettingsToLocalStorage {
    constructor() {
        this.type = AppSettingsActionTypes.SaveAppSettingsToLocalStorage;
    }
}
class LoadAppSettingsFromLocalStorage {
    constructor() {
        this.type = AppSettingsActionTypes.LoadAppSettingsFromLocalStorage;
    }
}
class SetDegreesUnit {
    constructor(payload) {
        this.payload = payload;
        this.type = AppSettingsActionTypes.SetDegreesUnit;
    }
}


/***/ }),

/***/ 2272:
/*!**************************************************!*\
  !*** ./src/app/reducers/app-settings.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appSettingsFeatureKey": () => (/* binding */ appSettingsFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _app_settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-settings.actions */ 8466);

const appSettingsFeatureKey = 'appSettings';
const initialState = {
    degreesUnit: 'METRIC',
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _app_settings_actions__WEBPACK_IMPORTED_MODULE_0__.AppSettingsActionTypes.LoadAppSettings: {
            return {
                ...state,
                degreesUnit: action.payload.settings.degreesUnit,
            };
        }
        case _app_settings_actions__WEBPACK_IMPORTED_MODULE_0__.AppSettingsActionTypes.SetDegreesUnit: {
            return {
                ...state,
                degreesUnit: action.payload.unit,
            };
        }
        default:
            return state;
    }
}


/***/ }),

/***/ 4837:
/*!******************************************!*\
  !*** ./src/app/reducers/city.actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCities": () => (/* binding */ AddCities),
/* harmony export */   "AddCity": () => (/* binding */ AddCity),
/* harmony export */   "CityActionTypes": () => (/* binding */ CityActionTypes),
/* harmony export */   "ClearCities": () => (/* binding */ ClearCities),
/* harmony export */   "ClearSelectedCity": () => (/* binding */ ClearSelectedCity),
/* harmony export */   "DeleteCities": () => (/* binding */ DeleteCities),
/* harmony export */   "DeleteCity": () => (/* binding */ DeleteCity),
/* harmony export */   "LoadCities": () => (/* binding */ LoadCities),
/* harmony export */   "SearchCities": () => (/* binding */ SearchCities),
/* harmony export */   "SelectCity": () => (/* binding */ SelectCity),
/* harmony export */   "UpdateCities": () => (/* binding */ UpdateCities),
/* harmony export */   "UpdateCity": () => (/* binding */ UpdateCity),
/* harmony export */   "UpsertCities": () => (/* binding */ UpsertCities),
/* harmony export */   "UpsertCity": () => (/* binding */ UpsertCity)
/* harmony export */ });
var CityActionTypes;
(function (CityActionTypes) {
    CityActionTypes["LoadCities"] = "[City] Load Cities";
    CityActionTypes["AddCity"] = "[City] Add City";
    CityActionTypes["UpsertCity"] = "[City] Upsert City";
    CityActionTypes["AddCities"] = "[City] Add Cities";
    CityActionTypes["UpsertCities"] = "[City] Upsert Cities";
    CityActionTypes["UpdateCity"] = "[City] Update City";
    CityActionTypes["UpdateCities"] = "[City] Update Cities";
    CityActionTypes["DeleteCity"] = "[City] Delete City";
    CityActionTypes["DeleteCities"] = "[City] Delete Cities";
    CityActionTypes["ClearCities"] = "[City] Clear Cities";
    CityActionTypes["SearchCities"] = "[City] Search Cities";
    CityActionTypes["SelectCity"] = "[City] Select City";
    CityActionTypes["ClearSelectedCity"] = "[City] Clear Selected City";
})(CityActionTypes || (CityActionTypes = {}));
class LoadCities {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LoadCities;
    }
}
class AddCity {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.AddCity;
    }
}
class UpsertCity {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UpsertCity;
    }
}
class AddCities {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.AddCities;
    }
}
class UpsertCities {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UpsertCities;
    }
}
class UpdateCity {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UpdateCity;
    }
}
class UpdateCities {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.UpdateCities;
    }
}
class DeleteCity {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.DeleteCity;
    }
}
class DeleteCities {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.DeleteCities;
    }
}
class ClearCities {
    constructor() {
        this.type = CityActionTypes.ClearCities;
    }
}
class SearchCities {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.SearchCities;
    }
}
class SelectCity {
    constructor(payload) {
        this.payload = payload;
        this.type = CityActionTypes.SelectCity;
    }
}
class ClearSelectedCity {
    constructor() {
        this.type = CityActionTypes.ClearSelectedCity;
    }
}


/***/ }),

/***/ 4476:
/*!******************************************!*\
  !*** ./src/app/reducers/city.reducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "citiesFeatureKey": () => (/* binding */ citiesFeatureKey),
/* harmony export */   "getSelectedCityId": () => (/* binding */ getSelectedCityId),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 1904);
/* harmony import */ var _city_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.actions */ 4837);


const citiesFeatureKey = 'cities';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();
const initialState = adapter.getInitialState({
    selectedCityId: null,
});
function reducer(state = initialState, action) {
    switch (action.type) {
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.AddCity: {
            return adapter.addOne(action.payload.city, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.UpsertCity: {
            return adapter.upsertOne(action.payload.city, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.AddCities: {
            return adapter.addMany(action.payload.cities, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.UpsertCities: {
            return adapter.upsertMany(action.payload.cities, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.UpdateCity: {
            return adapter.updateOne(action.payload.city, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.UpdateCities: {
            return adapter.updateMany(action.payload.cities, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.DeleteCity: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.DeleteCities: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.LoadCities: {
            return adapter.addMany(action.payload.cities, state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.ClearCities: {
            return adapter.removeAll(state);
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.SelectCity: {
            return { ...state, selectedCityId: action.payload.cityId };
        }
        case _city_actions__WEBPACK_IMPORTED_MODULE_0__.CityActionTypes.ClearSelectedCity: {
            return { ...state, selectedCityId: null };
        }
        default: {
            return state;
        }
    }
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();
const getSelectedCityId = (state) => state.selectedCityId;


/***/ }),

/***/ 2507:
/*!**********************************************!*\
  !*** ./src/app/reducers/favorite.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFavorite": () => (/* binding */ AddFavorite),
/* harmony export */   "AddFavorites": () => (/* binding */ AddFavorites),
/* harmony export */   "AddSelectedCityToFavorites": () => (/* binding */ AddSelectedCityToFavorites),
/* harmony export */   "ClearFavorites": () => (/* binding */ ClearFavorites),
/* harmony export */   "DeleteFavorite": () => (/* binding */ DeleteFavorite),
/* harmony export */   "DeleteFavorites": () => (/* binding */ DeleteFavorites),
/* harmony export */   "FavoriteActionTypes": () => (/* binding */ FavoriteActionTypes),
/* harmony export */   "LoadFavorites": () => (/* binding */ LoadFavorites),
/* harmony export */   "LoadFavoritesFromLocalStorage": () => (/* binding */ LoadFavoritesFromLocalStorage),
/* harmony export */   "LoadFavoritesPage": () => (/* binding */ LoadFavoritesPage),
/* harmony export */   "RemoveSelectedCityFromFavorites": () => (/* binding */ RemoveSelectedCityFromFavorites),
/* harmony export */   "SaveFavoritesToLocalStorage": () => (/* binding */ SaveFavoritesToLocalStorage),
/* harmony export */   "UpdateFavorite": () => (/* binding */ UpdateFavorite),
/* harmony export */   "UpdateFavorites": () => (/* binding */ UpdateFavorites),
/* harmony export */   "UpsertFavorite": () => (/* binding */ UpsertFavorite),
/* harmony export */   "UpsertFavorites": () => (/* binding */ UpsertFavorites)
/* harmony export */ });
var FavoriteActionTypes;
(function (FavoriteActionTypes) {
    FavoriteActionTypes["LoadFavorites"] = "[Favorite] Load Favorites";
    FavoriteActionTypes["AddFavorite"] = "[Favorite] Add Favorite";
    FavoriteActionTypes["UpsertFavorite"] = "[Favorite] Upsert Favorite";
    FavoriteActionTypes["AddFavorites"] = "[Favorite] Add Favorites";
    FavoriteActionTypes["UpsertFavorites"] = "[Favorite] Upsert Favorites";
    FavoriteActionTypes["UpdateFavorite"] = "[Favorite] Update Favorite";
    FavoriteActionTypes["UpdateFavorites"] = "[Favorite] Update Favorites";
    FavoriteActionTypes["DeleteFavorite"] = "[Favorite] Delete Favorite";
    FavoriteActionTypes["DeleteFavorites"] = "[Favorite] Delete Favorites";
    FavoriteActionTypes["ClearFavorites"] = "[Favorite] Clear Favorites";
    FavoriteActionTypes["SaveFavoritesToLocalStorage"] = "[Favorite] Save Favorites To Local Storage";
    FavoriteActionTypes["LoadFavoritesFromLocalStorage"] = "[Favorite] Load Favorites From Local Storage";
    FavoriteActionTypes["AddSelectedCityToFavorites"] = "[Favorite] Add Selected City To Favorites";
    FavoriteActionTypes["RemoveSelectedCityFromFavorites"] = "[Favorite] Remove Selected City From Favorites";
    FavoriteActionTypes["LoadFavoritesPage"] = "[Favorite] Load Favorites Page";
})(FavoriteActionTypes || (FavoriteActionTypes = {}));
class LoadFavorites {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.LoadFavorites;
    }
}
class AddFavorite {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.AddFavorite;
    }
}
class UpsertFavorite {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.UpsertFavorite;
    }
}
class AddFavorites {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.AddFavorites;
    }
}
class UpsertFavorites {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.UpsertFavorites;
    }
}
class UpdateFavorite {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.UpdateFavorite;
    }
}
class UpdateFavorites {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.UpdateFavorites;
    }
}
class DeleteFavorite {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.DeleteFavorite;
    }
}
class DeleteFavorites {
    constructor(payload) {
        this.payload = payload;
        this.type = FavoriteActionTypes.DeleteFavorites;
    }
}
class ClearFavorites {
    constructor() {
        this.type = FavoriteActionTypes.ClearFavorites;
    }
}
class SaveFavoritesToLocalStorage {
    constructor() {
        this.type = FavoriteActionTypes.SaveFavoritesToLocalStorage;
    }
}
class LoadFavoritesFromLocalStorage {
    constructor() {
        this.type = FavoriteActionTypes.LoadFavoritesFromLocalStorage;
    }
}
class AddSelectedCityToFavorites {
    constructor() {
        this.type = FavoriteActionTypes.AddSelectedCityToFavorites;
    }
}
class LoadFavoritesPage {
    constructor() {
        this.type = FavoriteActionTypes.LoadFavoritesPage;
    }
}
class RemoveSelectedCityFromFavorites {
    constructor() {
        this.type = FavoriteActionTypes.RemoveSelectedCityFromFavorites;
    }
}


/***/ }),

/***/ 6365:
/*!**********************************************!*\
  !*** ./src/app/reducers/favorite.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "favoritesFeatureKey": () => (/* binding */ favoritesFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 1904);
/* harmony import */ var _favorite_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.actions */ 2507);


const favoritesFeatureKey = 'favorites';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();
const initialState = adapter.getInitialState({
// additional entity state properties
});
function reducer(state = initialState, action) {
    switch (action.type) {
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.AddFavorite: {
            return adapter.addOne(action.payload.favorite, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.UpsertFavorite: {
            return adapter.upsertOne(action.payload.favorite, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.AddFavorites: {
            return adapter.addMany(action.payload.favorites, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.UpsertFavorites: {
            return adapter.upsertMany(action.payload.favorites, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.UpdateFavorite: {
            return adapter.updateOne(action.payload.favorite, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.UpdateFavorites: {
            return adapter.updateMany(action.payload.favorites, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.DeleteFavorite: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.DeleteFavorites: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.LoadFavorites: {
            return adapter.addMany(action.payload.favorites, state);
        }
        case _favorite_actions__WEBPACK_IMPORTED_MODULE_0__.FavoriteActionTypes.ClearFavorites: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ 1697:
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentCity": () => (/* binding */ getCurrentCity),
/* harmony export */   "getSelectedCityWeather": () => (/* binding */ getSelectedCityWeather),
/* harmony export */   "getSelectedCityWeatherForcasts": () => (/* binding */ getSelectedCityWeatherForcasts),
/* harmony export */   "getWeatherByCityId": () => (/* binding */ getWeatherByCityId),
/* harmony export */   "isImpirial": () => (/* binding */ isImpirial),
/* harmony export */   "isSelectedCityInFavorites": () => (/* binding */ isSelectedCityInFavorites),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers),
/* harmony export */   "queryCities": () => (/* binding */ queryCities),
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "selectAllWeathers": () => (/* binding */ selectAllWeathers),
/* harmony export */   "selectAppSettings": () => (/* binding */ selectAppSettings),
/* harmony export */   "selectCities": () => (/* binding */ selectCities),
/* harmony export */   "selectCityEntities": () => (/* binding */ selectCityEntities),
/* harmony export */   "selectCityState": () => (/* binding */ selectCityState),
/* harmony export */   "selectCurrentCityId": () => (/* binding */ selectCurrentCityId),
/* harmony export */   "selectFavoriteIds": () => (/* binding */ selectFavoriteIds),
/* harmony export */   "selectFavoriteState": () => (/* binding */ selectFavoriteState),
/* harmony export */   "selectFavorites": () => (/* binding */ selectFavorites),
/* harmony export */   "selectWeatherEntities": () => (/* binding */ selectWeatherEntities),
/* harmony export */   "selectWeatherState": () => (/* binding */ selectWeatherState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _reducers_city_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/city.reducer */ 4476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/weather.reducer */ 4786);
/* harmony import */ var _reducers_app_settings_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/app-settings.reducer */ 2272);
/* harmony import */ var _reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/favorite.reducer */ 6365);






const reducers = {
    cities: _reducers_city_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer,
    weathers: _reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
    appSettings: _reducers_app_settings_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer,
    favorites: _reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer,
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production
    ? []
    : [];
const selectCityState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createFeatureSelector)('cities');
const selectWeatherState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createFeatureSelector)('weathers');
const selectAppSettings = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createFeatureSelector)('appSettings');
const selectFavoriteState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createFeatureSelector)('favorites');
const selectFavorites = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectFavoriteState, _reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_4__.selectAll);
const selectFavoriteIds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectFavoriteState, _reducers_favorite_reducer__WEBPACK_IMPORTED_MODULE_4__.selectIds);
const selectCities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectCityState, _reducers_city_reducer__WEBPACK_IMPORTED_MODULE_0__.selectAll);
const selectCurrentCityId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectCityState, _reducers_city_reducer__WEBPACK_IMPORTED_MODULE_0__.getSelectedCityId);
const selectCityEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectCityState, _reducers_city_reducer__WEBPACK_IMPORTED_MODULE_0__.selectEntities);
const queryCities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectCities, cities => (query) => cities.filter(city => city.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())));
const selectWeatherEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectWeatherState, _reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_2__.selectEntities);
const getCurrentCity = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectCityEntities, selectCurrentCityId, (cityEntities, cityId) => cityEntities[cityId]);
const selectAllWeathers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectWeatherState, _reducers_weather_reducer__WEBPACK_IMPORTED_MODULE_2__.selectAll);
const getSelectedCityWeather = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectAllWeathers, selectCurrentCityId, (weathers, cityId) => weathers.find(weather => weather.cityId === cityId && !weather.isForecast));
const getSelectedCityWeatherForcasts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectAllWeathers, selectCurrentCityId, (weathers, cityId) => weathers.filter(weather => weather.cityId === cityId && weather.isForecast));
const getWeatherByCityId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectAllWeathers, (weathers, props) => weathers.find(weather => weather.cityId === props.cityId));
const isSelectedCityInFavorites = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectFavoriteIds, selectCurrentCityId, (ids, cityId) => {
    if (cityId && ids && ids.length > 0) {
        return ids.includes(cityId);
    }
    return false;
});
const isImpirial = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createSelector)(selectAppSettings, appSettings => appSettings.degreesUnit === 'IMPIRIAL');


/***/ }),

/***/ 8363:
/*!*********************************************!*\
  !*** ./src/app/reducers/weather.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWeather": () => (/* binding */ AddWeather),
/* harmony export */   "AddWeathers": () => (/* binding */ AddWeathers),
/* harmony export */   "ClearWeathers": () => (/* binding */ ClearWeathers),
/* harmony export */   "DeleteWeather": () => (/* binding */ DeleteWeather),
/* harmony export */   "DeleteWeathers": () => (/* binding */ DeleteWeathers),
/* harmony export */   "GetCityCurrentWeather": () => (/* binding */ GetCityCurrentWeather),
/* harmony export */   "GetCityWeatherForecast": () => (/* binding */ GetCityWeatherForecast),
/* harmony export */   "LoadWeathers": () => (/* binding */ LoadWeathers),
/* harmony export */   "UpdateWeather": () => (/* binding */ UpdateWeather),
/* harmony export */   "UpdateWeathers": () => (/* binding */ UpdateWeathers),
/* harmony export */   "UpsertWeather": () => (/* binding */ UpsertWeather),
/* harmony export */   "UpsertWeathers": () => (/* binding */ UpsertWeathers),
/* harmony export */   "WeatherActionTypes": () => (/* binding */ WeatherActionTypes)
/* harmony export */ });
var WeatherActionTypes;
(function (WeatherActionTypes) {
    WeatherActionTypes["LoadWeathers"] = "[Weather] Load Weathers";
    WeatherActionTypes["AddWeather"] = "[Weather] Add Weather";
    WeatherActionTypes["UpsertWeather"] = "[Weather] Upsert Weather";
    WeatherActionTypes["AddWeathers"] = "[Weather] Add Weathers";
    WeatherActionTypes["UpsertWeathers"] = "[Weather] Upsert Weathers";
    WeatherActionTypes["UpdateWeather"] = "[Weather] Update Weather";
    WeatherActionTypes["UpdateWeathers"] = "[Weather] Update Weathers";
    WeatherActionTypes["DeleteWeather"] = "[Weather] Delete Weather";
    WeatherActionTypes["DeleteWeathers"] = "[Weather] Delete Weathers";
    WeatherActionTypes["ClearWeathers"] = "[Weather] Clear Weathers";
    WeatherActionTypes["GetCityCurrentWeather"] = "[Weather] Get City Current Weather";
    WeatherActionTypes["GetCityWeatherForecast"] = "[Weather] Get City Weather Forecast";
})(WeatherActionTypes || (WeatherActionTypes = {}));
class LoadWeathers {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.LoadWeathers;
    }
}
class AddWeather {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.AddWeather;
    }
}
class UpsertWeather {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.UpsertWeather;
    }
}
class AddWeathers {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.AddWeathers;
    }
}
class UpsertWeathers {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.UpsertWeathers;
    }
}
class UpdateWeather {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.UpdateWeather;
    }
}
class UpdateWeathers {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.UpdateWeathers;
    }
}
class DeleteWeather {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.DeleteWeather;
    }
}
class DeleteWeathers {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.DeleteWeathers;
    }
}
class ClearWeathers {
    constructor() {
        this.type = WeatherActionTypes.ClearWeathers;
    }
}
class GetCityCurrentWeather {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.GetCityCurrentWeather;
    }
}
class GetCityWeatherForecast {
    constructor(payload) {
        this.payload = payload;
        this.type = WeatherActionTypes.GetCityWeatherForecast;
    }
}


/***/ }),

/***/ 4786:
/*!*********************************************!*\
  !*** ./src/app/reducers/weather.reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapter": () => (/* binding */ adapter),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities),
/* harmony export */   "selectIds": () => (/* binding */ selectIds),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal),
/* harmony export */   "weathersFeatureKey": () => (/* binding */ weathersFeatureKey)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 1904);
/* harmony import */ var _weather_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.actions */ 8363);


const weathersFeatureKey = 'weathers';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();
const initialState = adapter.getInitialState({
// additional entity state properties
});
function reducer(state = initialState, action) {
    switch (action.type) {
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.AddWeather: {
            return adapter.addOne(action.payload.weather, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.UpsertWeather: {
            return adapter.upsertOne(action.payload.weather, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.AddWeathers: {
            return adapter.addMany(action.payload.weathers, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.UpsertWeathers: {
            return adapter.upsertMany(action.payload.weathers, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.UpdateWeather: {
            return adapter.updateOne(action.payload.weather, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.UpdateWeathers: {
            return adapter.updateMany(action.payload.weathers, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.DeleteWeather: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.DeleteWeathers: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.LoadWeathers: {
            return adapter.addMany(action.payload.weathers, state);
        }
        case _weather_actions__WEBPACK_IMPORTED_MODULE_0__.WeatherActionTypes.ClearWeathers: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-SG": 8661,
	"./en-SG.js": 8661,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map