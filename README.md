# Merim Group Interview Exercise

## Description

I completed this exercise keeping in mind to demonstrate the elements we discussed during the interview. The use of 'Types', 'Interfaces', Services, etc. I did my best, in my opinion, to adhere to the best practices I learned in TypeScript, like using constant files, refactoring the basketcomponent, don't use 'any' types, put logic in services and not in templates/html file ( round the price to maximum two decimal).

## Features

1. **Product Display**: The product list is displayed with their names and their initial prices in USD.

2. **Price Update**: A button allows you to get the converted prices and show it based on the current exchange rates through a call to the "exchangerate-api".

## Technologies Used

- Angular
- Flexbox for responsive design, which can be further optimized.
- API - exchangerate-api - for fetching current exchange rates.

## How to Run the Project

1. Clone this repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Run `ng serve` or `npm start` to start the development server.
4. Open your browser and go to `http://localhost:4200/`.

## Points to Note

- For interview-related reasons, the API key for the exchange rate API isn't stored in an environment file or a file added in the .gitignore. I'm aware this isn't a best practice, but I did this to facilitate the project's analysis.
