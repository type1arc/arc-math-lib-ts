"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const arc_1 = require("./arc");
console.log("\n");
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, ms));
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const vec3D_1 = new arc_1.Arc.Vec(1, 3, -1);
        const vec3D_2 = new arc_1.Arc.Vec(1, 3, -1);
        const _out = arc_1.Arc.add(vec3D_1, vec3D_2);
        console.log(_out);
        yield sleep(1000);
    });
}
main();
//# sourceMappingURL=app.js.map