# Contributing to AI Coding Assistants Comparison

First off, thank you for considering contributing to our project! It's people like you that make this resource valuable for the entire developer community.

## How Can I Contribute?

### Reporting Missing or Incorrect Information

1. Check the existing [issues](https://github.com/yourusername/ai-coding-comparison/issues) to see if someone else has already reported it
2. If not, create a new issue with:
   - The name of the AI assistant
   - What information is missing or incorrect
   - The correct information (with sources if possible)

### Adding a New AI Assistant

1. Fork the repository
2. Add the new AI assistant data to `src/components/AGGrid.tsx`
3. Follow the existing data structure
4. Include all required fields:
   - name
   - foundation
   - codeGen
   - debug
   - pricing
   - languages
   - ide
   - community
   - lastUpdated

### Updating Existing Information

1. Fork the repository
2. Update the information in `src/components/AGGrid.tsx`
3. Provide sources for your updates in the PR description
4. Submit a Pull Request

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation if you're adding new features
3. Make sure your PR description clearly describes the problem and solution
4. Reference any relevant issues

## Style Guide

- Follow the existing code style
- Use meaningful commit messages
- Keep PRs focused on a single change
- Add comments for complex logic

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Questions?

Feel free to create an issue or reach out to the maintainers if you have any questions.

## License

By contributing, you agree that your contributions will be licensed under the MIT License. 