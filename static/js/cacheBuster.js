System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getUrl(url) {
        var version = '1.12';
        var returnUrl = url + '?v=' + version;
        return returnUrl;
    }
    exports_1("getUrl", getUrl);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=cacheBuster.js.map