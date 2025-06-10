console.log("lib loaded");
const start: boolean = true;
console.log(`program state: ${start}`);

export namespace Arc {
    export class Vec<_n extends number>{
        public components: number[];
        constructor(...components : number[]) {
            this.components = components
        }

        // in-class functions for vector operation
        add(other: Vec<_n>) {
            return new Vec<_n>(...this.components.map((value, index) => value + other.components[index]));
        }

        get(other: Vec<_n>) {
            return this.components;
        }
    }

    // external functions for vector operation
    export function add<_n extends number>(v1: Vec<_n>, v2: Vec<_n>): any {

        return v1.components.map((value, index) => value + v2.components[index]);
    }

    export function abs<_n extends number>(v: Vec<_n>): number {
        let _out: number;
        for (let n = 0; n < v.components.length; n++) {
            _out += Math.sqrt(v.components[n] * v.components[n]);
        }
        return _out;
    }

    export function dot_product<_n extends number>(v1: Vec<_n>, v2: Vec<_n>): number {
        return abs(v1) * abs(v2) * Math.cos(Math.atan2(abs(v1), abs(v2)));
    }
}