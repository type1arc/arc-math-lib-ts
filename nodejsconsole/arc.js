"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arc = void 0;
console.log("lib loaded");
const start = true;
console.log(`program state: ${start}`);
var Arc;
(function (Arc) {
    class Vec {
        constructor(...components) {
            this.components = components;
        }
        // in-class functions for vector operation
        add(other) {
            return new Vec(...this.components.map((value, index) => value + other.components[index]));
        }
        get(other) {
            return this.components;
        }
    }
    Arc.Vec = Vec;
    // external functions for vector operation
    function add(v1, v2) {
        return v1.components.map((value, index) => value + v2.components[index]);
    }
    Arc.add = add;
    function abs(v) {
        let _out;
        for (let n = 0; n < v.components.length; n++) {
            _out += Math.sqrt(v.components[n] * v.components[n]);
        }
        return _out;
    }
    Arc.abs = abs;
    function dot_product(v1, v2) {
        return abs(v1) * abs(v2) * Math.cos(Math.atan2(abs(v1), abs(v2)));
    }
    Arc.dot_product = dot_product;
})(Arc = exports.Arc || (exports.Arc = {}));
//# sourceMappingURL=arc.js.map