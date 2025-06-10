import { Arc } from  './arc'

console.log("\n");

async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

    const vec3D_1 = new Arc.Vec<3>(1, 3, -1);
    const vec3D_2 = new Arc.Vec<3>(1, 3, -1);

    const _out = Arc.add(vec3D_1, vec3D_2);
    console.log(_out);
    await sleep(1000);
}

main();