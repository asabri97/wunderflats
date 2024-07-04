`# Wunderflats Frontend Coding Challenge

Welcome to the Wunderflats Coding Challenge for Frontend Developers. Please read the instructions in this README carefully before starting.

## Challenge: Simple React Application

![A screenshot of the mobile and desktop designs](./design@2x.png)

We would like you to build a simple React app that is similar to our [Search Results Page](https://wunderflats.com/en/furnished-apartments/berlin).

Please build upon the barebones React application which was scaffolded with [create-react-app](https://github.com/facebook/create-react-app). You can find it in the `react-app` folder in this repository.

To query the data for the app, please use the `GET https://wunderflats-frontend-challenge-api.glitch.me` endpoint. You can find documentation for this endpoint in the [API.md file](./API.md) in case you need it.

🚨 The endpoint will randomly return errors (5% chance), make sure to handle them correctly!

When an error happens, display an error message with a button to retry the request.

💡 The listings price is returned in cents.

💡 You can find the content of the `/listings` GET request in `react-app/src/data/listings.json`.

You can find the design and all relevant measurements, assets and notes in the [Figma file](./design.fig). This file can be viewed with [Figma](https://www.figma.com/).

Please write about your approach and anything that you would like to share with us regarding your work in the [README.md](./react-app/src/README.md) file at the root of the `react-app` folder.

### What we're looking for

-  **Good code.** Code that works reliably and is easy to understand.

-  **Correct implementation.** Make sure the [design](./design.fig) is implemented correctly and please follow the sticky note in the design file.

-  **Frontend expertise.** Show us that you know how to use React effectively and don't neglect the HTML/CSS part. Think about different devices, their screen sizes, input methods, network conditions. Think about how impaired users and search engines might find the page accessible.

-  **Build your components from scratch.** Please do not use any third-party components for this project.

-  **Brief documentation.** Please edit `react-app/README.md` and briefly document your approach.

### What we're not looking for

-  **Don't worry about old browsers.** You can use modern features like CSS Grid and native lazy loading.

-  **You don't need to go crazy in terms of componentization.** No need to create so many files. Instead, show us how components and files help you with separation of concerns where it makes sense, and how to keep the codebase sane relative to the size of the project.

-  **Redux skills.** The state management for this project is simple. Please don't use any third-party state management libraries like Redux or MobX.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can check if you have Node.js installed by running:

```sh

node -v

and

```sh

`npm -v`

If you don't have Node.js installed, you can download and install it from [here](https://nodejs.org/).

### Installation

1\. **Clone the repository:**

sh

`git clone <repository-url>`

Replace `<repository-url>` with the URL of the repository.

2\. **Navigate into the project directory:**

sh

`cd wunderflats`

3\. **Install the dependencies:**

sh

`npm install`

### Running the Application

After installing the dependencies, you can start the development server by running:

sh

`npm start`

This will start the application and open it in your default web browser. If it doesn't open automatically, you can navigate to http://localhost:3000 in your browser.

### Building for Production

To create a production build of the application, you can run:

sh

`npm run build`

This will create an optimized build of the application in the `build` directory.

*  *  *  *  *

Thanks for taking the time to take part in our frontend interview process.

Good luck with the coding challenge. We look forward to seeing your solutions!

*  *  *  *  *

Approach

--------

### Component Structure

The application is structured using reusable components to ensure maintainability and scalability.

### Error Handling

Errors are handled gracefully with appropriate messages and retry options.

### Accessibility

ARIA attributes and proper alt texts are used to enhance accessibility.

### Responsive Design

CSS Grid and media queries ensure the application is responsive across different devices.

### Future Improvements

- Implement unit tests using Jest and React Testing Library.

- Optimize for performance using code splitting and lazy loading.

- Enhance accessibility further by conducting an accessibility audit.

Colors

------

Colors are defined using CSS variables for consistency and easy management.

`:root {

--color-background: #ffffff;

--color-border: #ddd;

--color-primary: #24272E;

--color-secondary: #575D64;

--color-accent: #fbc02d;

--color-hover: #E5E9ED;

--color-button-bg: #EDF1F4;

--color-button-text: #24272E;

--color-error: #7B8389;

}`