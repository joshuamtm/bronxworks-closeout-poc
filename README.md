# BronxWorks Program Closeout Assistant

A web application designed to streamline the program closeout process for BronxWorks personnel. This tool helps program directors and staff generate comprehensive PDF reports containing all necessary information for IT and Operations departments to efficiently manage program closures.

## Features

- **Multi-step Form Wizard**: Intuitive 6-step process to collect all closeout information
- **Comprehensive Data Collection**:
  - Program information and location details
  - Primary and alternate contact information
  - IT equipment inventory with asset tracking
  - Furniture inventory with disposition planning
  - Microsoft 365 account deactivation list
  - Timeline and key dates
  - Physical move requirements
- **PDF Report Generation**: Creates a professional, detailed PDF report for IT and Operations
- **Auto-save Functionality**: Automatically saves draft data every 30 seconds
- **Local Storage Persistence**: Saves form progress to browser storage
- **Responsive Design**: Works on desktop and tablet devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joshuamtm/bronxworks-closeout-poc.git
cd bronxworks-closeout-poc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Steps:

1. **Enable GitHub Pages** in your repository:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as the source

2. **Push to main branch** - the deployment will happen automatically via GitHub Actions

3. **Access your deployed app** at: `https://joshuamtm.github.io/bronxworks-closeout-poc/`

#### Manual Deployment:

If you prefer manual deployment, you can use the deploy script:

```bash
npm run deploy
```

Then commit and push the built files to the `gh-pages` branch.

## Usage

1. **Start a New Closeout**: Click through the 6-step form wizard
2. **Save Draft**: Your progress is automatically saved every 30 seconds, or click "Save Draft" manually
3. **Complete All Steps**: Fill in all required information across the steps
4. **Generate Report**: Click "Generate PDF Report" on the final step
5. **Download PDF**: The PDF will be automatically generated and available for download

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Hook Form** for form management
- **@react-pdf/renderer** for PDF generation
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **date-fns** for date formatting

## Project Structure

```
src/
├── components/
│   ├── CloseoutForm.tsx        # Main form wizard component
│   ├── CloseoutPDF.tsx         # PDF generation component
│   └── FormSteps/              # Individual form step components
│       ├── ProgramInfoStep.tsx
│       ├── ContactInfoStep.tsx
│       ├── EquipmentStep.tsx
│       ├── FurnitureStep.tsx
│       ├── M365AccountsStep.tsx
│       └── TimelineStep.tsx
├── types/
│   └── closeout.ts             # TypeScript interfaces
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles

```

## Documentation

- **[User Guide](docs/USER_GUIDE.md)** - Comprehensive guide for end users
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Instructions for deploying the application
- **[Contributing Guidelines](CONTRIBUTING.md)** - How to contribute to the project
- **[Changelog](CHANGELOG.md)** - Version history and changes

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:
- Development setup
- Code style guidelines
- Pull request process
- Issue reporting

For bug reports and feature requests, please use our [GitHub Issues](https://github.com/joshuamtm/bronxworks-closeout-poc/issues).

## Roadmap

Future enhancements being considered:
- Backend API integration for data persistence
- User authentication and role-based access
- Email notification system for automated workflows
- Admin dashboard for managing multiple closeouts
- Integration with existing BronxWorks systems
- Mobile application version
- Advanced reporting and analytics

## Support

- **Documentation**: Check the [User Guide](docs/USER_GUIDE.md) for detailed usage instructions
- **Technical Issues**: Report bugs via [GitHub Issues](https://github.com/joshuamtm/bronxworks-closeout-poc/issues)
- **Feature Requests**: Submit enhancement ideas through GitHub Issues
- **Deployment Help**: See the [Deployment Guide](docs/DEPLOYMENT.md)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.