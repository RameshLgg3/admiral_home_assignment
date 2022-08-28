"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import errorHandler from "errorhandler";
var app_1 = require("./app");
/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
    // app.use(errorHandler());
}
/**
 * Start Express server.
 */
var server = app_1.default.listen(app_1.default.get("port"), function () {
    // tslint:disable-next-line:no-console
    console.log("  App is running at http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
    // tslint:disable-next-line:no-console
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
//# sourceMappingURL=server.js.map