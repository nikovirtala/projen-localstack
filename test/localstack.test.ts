import { javascript } from "projen";
import { describe, expect, it } from "vitest";
import { LocalStack } from "../src";

describe("LocalStack", () => {
    it("should add localstack to homebrew dependencies", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new LocalStack(project);

        expect(project.tasks.tryFind("install:brew:bundle")).toBeDefined();
    });

    it("should create colima task", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new LocalStack(project);

        const task = project.tasks.tryFind("colima");
        expect(task).toBeDefined();
        expect(task?.steps[0].exec).toContain("colima status");
    });

    it("should create localstack task with default options", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new LocalStack(project);

        const task = project.tasks.tryFind("localstack");
        expect(task).toBeDefined();
        const execStep = task?.steps.find((s) => s.exec?.includes("localstack status"));
        expect(execStep?.exec).toContain("localstack status");
        expect(execStep?.exec).toContain("LOCALSTACK_PORT=4566");
        expect(execStep?.exec).toContain("LOCALSTACK_DEBUG=0");
    });

    it("should create localstack task with custom options", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new LocalStack(project, {
            port: 8080,
            debug: true,
            services: ["s3", "lambda"],
        });

        const task = project.tasks.tryFind("localstack");
        expect(task).toBeDefined();
        const execStep = task?.steps.find((s) => s.exec?.includes("localstack status"));
        expect(execStep?.exec).toContain("LOCALSTACK_PORT=8080");
        expect(execStep?.exec).toContain("LOCALSTACK_DEBUG=1");
        expect(execStep?.exec).toContain("SERVICES=s3,lambda");
    });

    it("should add aws-cdk-local to devDeps", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new LocalStack(project);

        expect(project.deps.all.some((d) => d.name === "aws-cdk-local")).toBe(true);
    });

    it("should make test task depend on localstack", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new LocalStack(project);

        const testTask = project.tasks.tryFind("test");
        expect(testTask?.steps.some((s) => s.spawn === "localstack")).toBe(true);
    });

    it("should make localstack depend on colima", () => {
        const project = new javascript.NodeProject({
            name: "test",
            defaultReleaseBranch: "main",
        });

        new LocalStack(project);

        const localstackTask = project.tasks.tryFind("localstack");
        expect(localstackTask?.steps.some((s) => s.spawn === "colima")).toBe(true);
    });
});
