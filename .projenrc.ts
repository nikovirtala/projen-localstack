import { Vitest } from "@nikovirtala/projen-vitest";
import { cdk, JsonPatch, javascript, TextFile } from "projen";

const nodeVersion = "22.21.1";

const project = new cdk.JsiiProject({
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    defaultReleaseBranch: "main",
    deps: ["projen"],
    devDeps: ["@nikovirtala/projen-vitest"],
    description: "Homebrew dependencies component for projen projects",
    dependabot: false,
    depsUpgradeOptions: {
        workflowOptions: {
            labels: ["auto-approve", "auto-merge"],
        },
    },
    autoApproveOptions: {
        secret: "GITHUB_TOKEN",
        allowedUsernames: ["nikovirtala"],
    },
    mergify: true,
    autoMerge: true,
    jest: false,
    eslint: false,
    prettier: false,
    biome: true,
    biomeOptions: {
        biomeConfig: {
            formatter: {
                indentStyle: javascript.biome_config.IndentStyle.SPACE,
                indentWidth: 4,
                lineWidth: 120,
                useEditorconfig: false,
            },
        },
        formatter: true,
        linter: true,
    },
    jsiiVersion: "~5.9.3",
    license: "MIT",
    licensed: true,
    majorVersion: 1,
    minNodeVersion: nodeVersion,
    name: "projen-localstack",
    npmAccess: javascript.NpmAccess.PUBLIC,
    packageManager: javascript.NodePackageManager.PNPM,
    packageName: "@nikovirtala/projen-localstack",
    peerDeps: ["projen", "constructs"],
    pnpmVersion: "10",
    projenrcTs: true,
    releaseToNpm: true,
    npmTrustedPublishing: true,
    repositoryUrl: "https://github.com/nikovirtala/projen-localstack.git",
    typescriptVersion: "5.9.3",
});

project.npmrc.addConfig("node-linker", "hoisted");

new Vitest(project, { vitestVersion: "^4" });

project.vscode?.extensions.addRecommendations("biomejs.biome");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.organizeImports.biome": "always",
    },
    "editor.defaultFormatter": "biomejs.biome",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

new TextFile(project, "mise.toml", {
    committed: true,
    readonly: true,
    lines: ["[tools]", `node = "${nodeVersion}"`],
});

// use node.js 24.x to get new enough npm to satisfy: trusted publishing requires npm CLI version 11.5.1 or later.
project.github
    ?.tryFindWorkflow("release")
    ?.file?.patch(JsonPatch.replace("/jobs/release_npm/steps/0/with/node-version", "24.x"));

project.synth();
