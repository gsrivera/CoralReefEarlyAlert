/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
System.register(["@angular/core", '@angular/router-deprecated', '../data-card.component/data-card.component', '../login-screen.component/login-screen.component', '../home-screen.component/home-screen.component', '../user-add.component/user-add.component', '../new-post.component/new-post.component', '../search-posts.component/search-posts.component', '../stats-screen.component/stats-screen.component', 'ng2-bootstrap/ng2-bootstrap', '../main-app.service/main-app.service', '../classes/LoginObject.class/LoginObject.class'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, data_card_component_1, login_screen_component_1, home_screen_component_1, user_add_component_1, new_post_component_1, search_posts_component_1, stats_screen_component_1, ng2_bootstrap_1, main_app_service_1, LoginObject_class_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (data_card_component_1_1) {
                data_card_component_1 = data_card_component_1_1;
            },
            function (login_screen_component_1_1) {
                login_screen_component_1 = login_screen_component_1_1;
            },
            function (home_screen_component_1_1) {
                home_screen_component_1 = home_screen_component_1_1;
            },
            function (user_add_component_1_1) {
                user_add_component_1 = user_add_component_1_1;
            },
            function (new_post_component_1_1) {
                new_post_component_1 = new_post_component_1_1;
            },
            function (search_posts_component_1_1) {
                search_posts_component_1 = search_posts_component_1_1;
            },
            function (stats_screen_component_1_1) {
                stats_screen_component_1 = stats_screen_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (main_app_service_1_1) {
                main_app_service_1 = main_app_service_1_1;
            },
            function (LoginObject_class_1_1) {
                LoginObject_class_1 = LoginObject_class_1_1;
            }],
        execute: function() {
            //import { Progressbar } from "ng2-bootstrap/ng2-bootstrap";
            /*
             * Declaración del Component de Angular 2. El selector es el tag HTML que será
             * asociado a este componente. Las diretivas son las clases y/o bibliotecas que
             * son utilizadas, al igual que se importan los tags HTML de dichos componentes.
             */
            Main = (function () {
                function Main(mainScreenService, viewContainerRef) {
                    var _this = this;
                    this.mainScreenService = mainScreenService;
                    this.title = "Alerta Temprana de Arrecifes de Coral";
                    this.navBarToggle = false;
                    this.loggedIn = false;
                    this.name = "Identifícate";
                    this.menuElements = [
                        { "menuName": "Home", "menuRef": "Home", "permissions": 0 },
                        { "menuName": "Búsqueda", "menuRef": "SearchPost", "permissions": 0 },
                        { "menuName": "Registrar Observación", "menuRef": "NewPost", "permissions": 1 },
                        { "menuName": "Agregar Usuario", "menuRef": "UserAdd", "permissions": 2 },
                    ];
                    //Variables Dropdown
                    this.disabled = false;
                    this.status = { isopen: false };
                    console.info('main-app module loaded');
                    this.viewContainerRef = viewContainerRef;
                    //        mainScreenService.loginInfo.subscribe()
                    this.mainScreenService.loginInfoObservable$.subscribe(function (loginInfo) {
                        _this.name = loginInfo.name;
                    });
                    this.mainScreenService.loggedInObservable$.subscribe(function (loggedIn) {
                        _this.loggedIn = loggedIn;
                    });
                }
                Main.prototype.ngOnInit = function () {
                    this.mainScreenService.checkLogin();
                };
                Main.prototype.toggleNavbarClick = function () {
                    this.navBarToggle = !this.navBarToggle;
                };
                Main.prototype.logOut = function () {
                    this.mainScreenService.setLoginInfo(new LoginObject_class_1.LoginResponse());
                    this.loggedIn = false;
                    localStorage.removeItem("token_CEA");
                };
                //Dropdown
                Main.prototype.toggled = function (open) {
                    console.log('Dropdown is now: ', open);
                };
                Main.prototype.toggleDropdown = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    this.status.isopen = !this.status.isopen;
                };
                //    public static serverUrl: String = "http://localhost:8383/CoralReefEarlyAlert/php/"
                //public static serverUrl: String = "http://localhost/php/"
                Main.serverUrl = "http://triumphare.com/php/";
                Main = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        directives: [data_card_component_1.DataCard, router_deprecated_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
                        providers: [router_deprecated_1.ROUTER_PROVIDERS, main_app_service_1.MainScreenService],
                        templateUrl: 'app/main-app/main-app.html'
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_screen_component_1.HomeScreen, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_screen_component_1.LoginScreen },
                        { path: '/userAdd', name: 'UserAdd', component: user_add_component_1.UserAddScreen },
                        { path: '/newPost', name: 'NewPost', component: new_post_component_1.NewPostScreen },
                        { path: '/search', name: 'SearchPost', component: search_posts_component_1.SearchPostsScreen },
                        { path: '/stats', name: 'Stats', component: stats_screen_component_1.StatsScreen }
                    ]), 
                    __metadata('design:paramtypes', [main_app_service_1.MainScreenService, core_1.ViewContainerRef])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main-app.js.map