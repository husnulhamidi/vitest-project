import { describe, expect, it } from "vitest";
import { sayHello } from "../src/say-hello";

describe("say Hello", () => {
    it("should say hello", () => {
        const result = sayHello("Husnul");
        expect(result).toBe("Hello Husnul");
    })
});