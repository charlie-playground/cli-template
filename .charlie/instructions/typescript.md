# TypeScript Guidelines

- Follow strict TypeScript practices as defined in the `tsconfig.json`
- Prefer `const` over `let` when variable reassignment is not needed (never use `var`)
- Avoid using `any` type - use proper typing to enable better type safety and IDE support
- Take advantage of TypeScript's type inference where it makes sense, but be explicit about types for function parameters and return types
- Use type guards to safely narrow types in conditional blocks
- Create interfaces or type aliases for complex data structures
- Utilize TypeScript's utility types (e.g., `Partial`, `Pick`, `Omit`) when appropriate
- Define parameter interfaces for functions with multiple parameters
- When using Promise-based code, ensure Promises are properly handled:
  - Use `await` within `async` functions
  - Use `.then()` and `.catch()` methods for Promise chains
  - Return Promises to calling functions that expect them
- Pay attention to TypeScript's strict null checking - handle null and undefined cases appropriately
- Do not disable TypeScript checks with `@ts-ignore` or similar directives unless absolutely necessary (and document why)
