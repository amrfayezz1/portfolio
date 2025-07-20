# Portfolio React TypeScript Refactor

This directory contains the React TypeScript version of the portfolio website with extracted reusable components.

## Overview

The original vanilla HTML/CSS/JS portfolio has been refactored into a modern React TypeScript application that eliminates code duplication through reusable components.

## Reusable Components Created

### Core Components

1. **Card Component** (`src/components/Card/`)
   - Generic flip card component with front/back animation
   - Used as base for ServiceCard and ProjectCard
   - Eliminates duplicate card animation code

2. **ServiceCard Component** (`src/components/ServiceCard/`)
   - Specific implementation of Card for services
   - Takes service data as props
   - Replaces 3 duplicate service card HTML blocks

3. **ProjectCard Component** (`src/components/ProjectCard/`)
   - Specific implementation of Card for projects
   - Handles dynamic project data from JSON
   - Replaces inline project card generation script

4. **Navigation Component** (`src/components/Navigation/`)
   - Reusable navigation list component
   - Used in header, mobile menu, and footer
   - Eliminates 3x duplicate navigation code

5. **Button Component** (`src/components/Button/`)
   - Configurable button with variants, sizes, icons
   - Handles both links and buttons
   - Replaces multiple similar button implementations

6. **FormGroup Component** (`src/components/FormGroup/`)
   - Reusable form input group with label and validation
   - Used for all contact form fields
   - Eliminates 4x duplicate form field HTML

7. **Modal Component** (`src/components/Modal/`)
   - Generic modal with customizable content
   - Used for project videos and success messages
   - Replaces 2 similar modal implementations

### Layout Components

8. **MobileMenu Component** (`src/components/MobileMenu/`)
   - Mobile navigation with hamburger menu
   - Includes overlay and off-canvas functionality
   - Fixed contact button

9. **ScrollNavbar Component** (`src/components/ScrollNavbar/`)
   - Handles scroll behavior for sticky navigation
   - Show/hide on scroll functionality

## Data Management

- **TypeScript Interfaces** (`src/types/index.ts`)
  - Strong typing for Project, Service, NavItem, etc.
  - Eliminates runtime errors and improves maintainability

- **Data Constants** (`src/data/constants.ts`)
  - Centralized data for services, navigation, form fields
  - Easy to maintain and modify

## Benefits Achieved

1. **Code Reusability**: Components can be reused across different sections
2. **Type Safety**: TypeScript interfaces prevent runtime errors
3. **Maintainability**: Changes to a component affect all instances
4. **Consistency**: Ensures uniform behavior and styling
5. **Scalability**: Easy to add new services, projects, or form fields
6. **Developer Experience**: Better IntelliSense and error catching

## Before vs After

### Before (Original)
- 402 lines of HTML with duplicated patterns
- Inline JavaScript for project loading
- Repeated service card HTML (3x)
- Duplicate navigation lists (3x)
- Repeated form field HTML (4x)
- Similar modal implementations (2x)

### After (React TypeScript)
- Modular component architecture
- Type-safe props and data
- Single source of truth for each component type
- Easy to maintain and extend
- Consistent behavior across similar elements

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Component Usage Example

```tsx
// Using reusable components
<ServiceCard service={serviceData} />
<ProjectCard project={projectData} onVideoModal={handleVideo} />
<Navigation items={navItems} variant="horizontal" />
<Button variant="primary" icon="fa-envelope">Contact Me</Button>
<FormGroup field={fieldData} value={value} onChange={handleChange} />
<Modal isOpen={isOpen} onClose={close} title="Success">Content</Modal>
```

This refactor demonstrates how to eliminate code duplication while maintaining the exact same functionality and visual design.

## Screenshots

### Desktop View
![Desktop Portfolio](https://github.com/user-attachments/assets/8d8699af-c2ee-4f39-b5c8-880e22589b0a)

### Mobile View  
![Mobile Portfolio](https://github.com/user-attachments/assets/942a9cbb-e480-4fdf-b26b-4ca509fff0c3)