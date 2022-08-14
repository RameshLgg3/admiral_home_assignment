"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = void 0;
/**
 * List of API examples.
 * @route GET /api
 */
const getApi = (req, res) => {
    res.json({
        "name": "Admiral Home Assignment - NodeJs Backend",
        "author": "Ramesh Kolamala"
    });
};
exports.getApi = getApi;
//# sourceMappingURL=api.js.map