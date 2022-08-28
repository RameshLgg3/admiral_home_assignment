"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// import compression from "compression";  // compresses requests
const dotenv_1 = __importDefault(require("dotenv"));
// Controllers (route handlers)
const apiController = __importStar(require("./controllers/api"));
dotenv_1.default.config();
// Create Express server
const app = (0, express_1.default)();
// Express configuration
app.set("port", process.env.PORT || 3000);
// app.use(compression());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
/**
 * API routes
 */
app.get("/api", apiController.getApi);
app.get("/products", apiController.getProducts);
exports.default = app;
//# sourceMappingURL=app.js.map