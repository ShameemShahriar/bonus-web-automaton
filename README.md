# Bonus Question: Web Automation

## Test Scenario

The test performs the following steps:

1. Launch the https://www.automationexercise.com/ website.
2. Navigate to the Login page.
3. Enter the registered email address.
4. Enter the registered password.
5. Submit the login form.
6. Verify that the login was successful.

## Technologies Used

JavaScript, Playwright

## Project Structure

```text
automation-exercise-playwright/
│
├── tests/
│   └── login.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Prerequisites

Before setting up the project, make sure you have the following installed:
Node.js, npm

## Setup and Installation

```bash
git clone https://github.com/ShameemShahriar/bonus-web-automaton.git
cd automation-exercise-playwright
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Author

**Shameem Shahriar**
