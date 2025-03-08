import { assert, describe, expect, it } from "vitest";

function sayHello(name: string): string {
    return `Hello ${name}`;
}

describe("sayHello", () => {
    it("should return with name", () => {
        expect(sayHello("Husnul")).to.be.a('string','Hello Husnul');
        assert.equal(sayHello("Husnul"), "Hello Husnul");
    });
});