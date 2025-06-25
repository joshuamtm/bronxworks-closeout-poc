# Contributing to BronxWorks Program Closeout Assistant

Thank you for your interest in contributing to the BronxWorks Program Closeout Assistant! This document provides guidelines for contributing to this project.

## Development Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Getting Started
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bronxworks-closeout-poc.git
   cd bronxworks-closeout-poc
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Naming
- `feature/feature-name` for new features
- `fix/bug-description` for bug fixes
- `docs/documentation-update` for documentation changes

### Commit Messages
Follow conventional commit format:
- `feat: add new feature`
- `fix: resolve bug issue`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code refactoring`
- `test: add or update tests`

### Code Style
- Use TypeScript for all new code
- Follow existing code formatting (Prettier/ESLint)
- Use meaningful variable and function names
- Add comments for complex logic

### Testing
- Run the build before submitting: `npm run build`
- Test the application manually in multiple browsers
- Ensure all form validations work correctly
- Test PDF generation functionality

## Pull Request Process

1. **Update Documentation**: Update README.md if needed
2. **Test Thoroughly**: Ensure all functionality works
3. **Clean Commits**: Squash commits if necessary
4. **Descriptive Title**: Use clear, descriptive PR titles
5. **Detailed Description**: Explain what changes were made and why

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested locally
- [ ] PDF generation works
- [ ] Form validation works
- [ ] Responsive design tested

## Screenshots (if applicable)
Add screenshots of UI changes
```

## Feature Requests

When suggesting new features:
1. Check existing issues first
2. Provide clear use case description
3. Explain the business value
4. Consider implementation complexity

## Bug Reports

Include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/OS information
- Screenshots if applicable

## Code Review Guidelines

- Be constructive and respectful
- Focus on the code, not the person
- Suggest improvements with examples
- Approve when ready for merge

## Architecture Guidelines

### File Organization
```
src/
├── components/          # React components
│   ├── FormSteps/      # Individual form step components
│   └── ...
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── assets/             # Static assets
```

### Component Guidelines
- Use functional components with hooks
- Keep components focused and single-purpose
- Use TypeScript interfaces for props
- Follow React best practices

### State Management
- Use React Hook Form for form state
- Use local storage for persistence
- Keep state as close to where it's used as possible

## Deployment

- Automatic deployment via GitHub Actions
- Deployed to GitHub Pages on main branch
- Manual deployment: `npm run deploy`

## Questions?

- Open an issue for questions
- Tag maintainers for urgent matters
- Check existing documentation first

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.