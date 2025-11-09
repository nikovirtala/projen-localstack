# projen-localstack

LocalStack component for projen projects.

## Installation

```bash
npm install @nikovirtala/projen-localstack
```

## Usage

Add the LocalStack component to your projen project:

```typescript
import { LocalStack } from "@nikovirtala/projen-localstack";
import { javascript } from "projen";

const project = new javascript.NodeProject({
    name: "my-project",
    defaultReleaseBranch: "main",
});

new LocalStack(project);

project.synth();
```

## Configuration

The LocalStack component accepts the following options:

```typescript
new LocalStack(project, {
    services: ["s3", "lambda", "dynamodb"], // Specific services to enable
    port: 4566, // LocalStack gateway port (default: 4566)
    debug: true, // Enable debug mode (default: false)
    imageTag: "latest", // Docker image tag (default: "latest")
});
```

## Features

- Automatically installs LocalStack via Homebrew
- Integrates with [@nikovirtala/projen-colima](https://github.com/nikovirtala/projen-colima) for Docker runtime
- Creates task to manage LocalStack
- Adds `aws-cdk-local` to devDependencies
- Integrates with test task to start LocalStack before tests

## Tasks

The component creates the following task:

- `localstack` - Starts LocalStack if not already running (depends on `colima` task from [@nikovirtala/projen-colima](https://github.com/nikovirtala/projen-colima))

## License

MIT
