# Code Comments Guidelines

Good code comments help future developers understand the code's purpose and reasoning. Follow these guidelines for comments:

- Use JSDoc-style comments for functions, classes, and interfaces
- Include parameter descriptions for non-obvious parameters
- Document return values, especially when the type isn't self-explanatory
- Add comments for complex logic or algorithms that aren't immediately clear from the code
- Explain "why" rather than "what" when the code's purpose isn't obvious
- Keep comments up-to-date when modifying code
- Don't add redundant comments that merely restate what's obvious from the code
- Use `@throws` tags to document potential errors that may be thrown
- Include examples in comments for complex APIs or functions
- Mark incomplete or temporary code with `// TODO: description of what needs to be done`
- For deprecated functionality, use the `@deprecated` tag with an explanation of what to use instead

Example:

```typescript
/**
 * Retrieves issue events from the Sentry API
 * @param args.slug The project slug
 * @param args.issueId The issue ID
 * @param args.limit Maximum number of events to retrieve (default: 10)
 * @returns An array of issue events
 * @throws Will throw an error if the project or issue doesn't exist
 */
async getIssueEvents(args: {
  slug: string;
  issueId: string;
  limit?: number;
}): Promise<Event[]> {
  // Implementation
}
```
