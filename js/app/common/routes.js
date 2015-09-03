define(function () {

    var PAGE_KEY = 'page';
    var LOGIN_PAGE = 'login.html';
    var DEFAULT_PAGE = 'index.html';

    return {
        hasStoredPage: function () {
            return window.localStorage.getItem(PAGE_KEY) != null;
        },
        isLoginPage: function () {
            return /login.html#?$/.test(window.location.pathname);
        },
        clearStoredPage: function () {
            window.localStorage.removeItem(PAGE_KEY);
        },
        storePage: function () {
            window.localStorage.setItem(PAGE_KEY, window.location.href);
        },
        getStoredPage: function () {
            return window.localStorage.getItem(PAGE_KEY);
        },
        gotoLoginPage: function () {
            window.location = LOGIN_PAGE;
        },
        gotoStartPage: function () {
            var defaultStartPage = DEFAULT_PAGE;
            window.location = this.hasStoredPage() ? this.getStoredPage() : defaultStartPage;
        }
    }
});
