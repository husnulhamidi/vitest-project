import { describe, expect, it, vi } from "vitest";

describe("mocking", () => {

    function sayHello(name: string, callback: (message: string) => void){
        callback("Hello "+name);
    } 

    it("should support mock", () => {
        const callback = vi.fn();
        sayHello("Husnul", callback);
        expect(callback).toHaveBeenCalledWith("Hello Husnul");
    });

});