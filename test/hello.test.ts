import { expect, it } from "vitest";
import { Hello } from "../src";

it("hello", () => {
    expect(new Hello().sayHello()).toBe("hello, world!");
});
