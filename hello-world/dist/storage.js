"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = void 0;
class Store {
    constructor() {
        this.compressor = new Compressor();
        this.Encryptor = new Encryptor();
    }
}
exports.default = Store;
var Format;
(function (Format) {
    Format[Format["Raw"] = 0] = "Raw";
    Format[Format["Compressed"] = 1] = "Compressed";
})(Format = exports.Format || (exports.Format = {}));
;
class Compressor {
}
class Encryptor {
}
//# sourceMappingURL=storage.js.map