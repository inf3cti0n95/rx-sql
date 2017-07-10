"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var RxSQL = (function () {
    function RxSQL(connectionParam) {
        this.connection = connectionParam;
    }
    RxSQL.prototype.query = function (query) {
        var _this = this;
        return rxjs_1.Observable.create(function (observer) {
            _this.connection.query(query, function (error, result, fields) {
                if (error)
                    observer.error(error);
                observer.next(result);
            });
        });
    };
    RxSQL.prototype.destroyConnection = function () {
        this.connection.destroy();
    };
    return RxSQL;
}());
exports.RxSQL = RxSQL;
//# sourceMappingURL=rx-sql.js.map