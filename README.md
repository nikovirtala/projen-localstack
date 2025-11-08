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
    services: "s3,lambda,dynamodb", // Specific services to enable
    port: 4566, // LocalStack gateway port (default: 4566)
    debug: true, // Enable debug mode (default: false)
    imageTag: "latest", // Docker image tag (default: "latest")
});
```

## Features

- Automatically installs LocalStack via Homebrew
- Checks for Docker and installs Colima if needed
- Creates tasks to manage Colima and LocalStack
- Adds `aws-cdk-local` to devDependencies
- Integrates with test task to start LocalStack before tests

## Tasks

The component creates the following tasks:

- `colima` - Starts Colima if not already running
- `localstack` - Starts LocalStack if not already running

## License

MIT
