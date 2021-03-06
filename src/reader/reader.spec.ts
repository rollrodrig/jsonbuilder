import { expect, assert } from "chai";
import { Reader } from "./reader";
import { Graph } from "./graph";
describe("Reader: ", () => {
	it(".should add vertex", () => {
		const pattern = "{name:string,age:{year:number}}";
		const r = new Reader(pattern);
		const graph: Graph = r.scan();
		assert.isNotEmpty(graph);
		assert.isObject(graph.nodes);
	});
});
