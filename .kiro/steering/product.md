# Product Overview

This is a projen component that adds LocalStack integration to projen-based Node.js projects.

## Purpose

Provides a reusable component that:
- Installs and configures LocalStack for local AWS service emulation
- Manages Docker runtime via Colima integration
- Automatically starts LocalStack before running tests
- Adds aws-cdk-local to project dependencies

## Target Users

Developers building AWS CDK or AWS-based applications who want to test locally without connecting to real AWS services.

## Key Features

- Automatic LocalStack installation via Homebrew
- Configurable service selection, port, debug mode, and image tag
- Integration with projen task system
- Seamless test workflow integration
