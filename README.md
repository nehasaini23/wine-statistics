# Wine Data Statistics App

This is a simple web application that calculates and displays statistical measures for different properties in the Wine Data Set. The application is built using React, and it provides statistics for "Flavanoids" and "Gamma."

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Introduction

The Wine Data Statistics App is a web-based tool that performs the following tasks:

1. Calculates and displays class-wise mean, median, and mode for the "Flavanoids" property.
2. Calculates and displays class-wise mean, median, and mode for the "Gamma" property.

## Features

- Calculate and display statistics for "Flavanoids" and "Gamma."
- Class-wise statistics (mean, median, mode) for each property.
- User-friendly tabular presentation of results.

## Getting Started

To get started with the Wine Data Statistics App, follow these steps:

1. Clone the repository to your local machine:

    git clone https://github.com/nehasaini23/wine-statistics.git

2. Navigate to the project directory:

    cd wine-statistics

3. Install project dependencies using Yarn:

    yarn install

4. Start the development server:

    yarn start


The application should open in your web browser at [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is running, you will see two sections for "Flavanoids" and "Gamma." The statistics include mean, median, and mode for each class or category within the data set.

### Flavanoids

![Flavanoids Table](/screenshorts/falvanoids.png)

### Gamma

![Gamma Table](/screenshorts/gamma.png)

## Project Structure

The project is organized as follows:

- `src/`: Contains the application's source code.
- `components/`: React components, including `Flavanoids.tsx`, `Gamma.tsx`, and `StatisticsTable.tsx`.
- `data/`: Sample wine data used for calculations.
- `utils/`: Utility functions for statistical calculations.
- `public/`: Public assets and HTML template.
- `package.json`: Project dependencies and scripts.
- `README.md`: This readme file.

## Dependencies

The main dependencies used in this project include:

- React: A JavaScript library for building user interfaces.
- Yarn: A package manager for JavaScript projects.
- TypeScript: A statically typed superset of JavaScript.
- Create React App (CRA): A development tool for creating React applications quickly.

