# Technology Stack

## ⚠️ Projen-Managed Project

This project is **entirely managed by projen**. Key implications:

- **DO NOT** manually edit generated files (package.json, tsconfig.json, etc.)
- **ALL** configuration changes must be made in `.projenrc.ts`
- After modifying `.projenrc.ts`, run `npx projen` to regenerate files
- Dependencies, scripts, and tooling are defined in `.projenrc.ts`, not package.json

## Build System

- **projen**: Project configuration and task management
- **JSII**: Multi-language library compilation
- **pnpm**: Package manager (hoisted node-linker)
- **TypeScript**: 5.9.3

## Testing

- **Vitest**: Test runner with coverage via v8
- **Type checking**: Enabled in tests via tsc

## Code Quality

- **Biome**: Formatter and linter (replaces ESLint/Prettier)
  - 4-space indentation
  - 120 character line width
  - Double quotes for JavaScript/TypeScript
  - Organize imports on save

## Runtime

- **Node.js**: >= 22.21.1
- **mise**: Version management (see mise.toml)

## Dependencies

- `projen`: Core framework
- `@nikovirtala/projen-colima`: Docker runtime management
- `@nikovirtala/projen-homebrew`: Package installation

## Common Commands

```bash
# Build the project
npx projen build

# Run tests
npx projen test

# Run tests in watch mode
npx projen test:watch

# Format and lint code
npx projen biome

# Compile TypeScript
npx projen compile

# Generate API documentation
npx projen docgen

# Run default task (build + test)
npx projen default
```

## Development Workflow

1. All configuration is managed through `.projenrc.ts`
2. Run `npx projen` to regenerate project files after changes
3. Generated files are marked readonly and should not be edited directly
4. Tests run with LocalStack automatically started via task dependencies
