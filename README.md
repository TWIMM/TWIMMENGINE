# Clean Architecture PHP Framework

Welcome to the Clean Architecture PHP Framework project! This framework is designed to facilitate the development of scalable and maintainable PHP applications using the principles of Clean Architecture, as opposed to the traditional MVC (Model-View-Controller) pattern. Clean Architecture emphasizes separation of concerns, decoupling of components, and flexibility, making it ideal for large projects and long-term scalability.

## Table of Contents
- [Introduction](#introduction)
- [Why Clean Architecture?](#why-clean-architecture)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

By focusing on the core business logic and decoupling it from external concerns, this framework ensures that your codebase remains clean, maintainable, and scalable.

## Why Clean Architecture?

### Advantages:
1. **Separation of Concerns:** Each layer in Clean Architecture has a distinct responsibility, making it easier to understand, develop, and maintain.
2. **Testability:** With well-defined boundaries and dependency inversion, unit testing becomes straightforward.
3. **Flexibility:** Easily swap out implementations (e.g., change database, UI) without affecting the core business logic.
4. **Scalability:** Clean Architecture's modular nature supports large and complex applications by organizing code in a way that scales with the project.

### Comparison with MVC:
- **MVC**: Typically good for small to medium-sized projects, where quick development is prioritized.
- **Clean Architecture**: Best suited for large, complex projects requiring long-term maintainability and scalability.

## Features

- **Domain-Centric Design:** Focus on the core business logic without being influenced by external factors.
- **Layered Architecture:** Clear separation of concerns across different layers (e.g., Presentation, Application, Domain, Infrastructure).
- **Dependency Injection:** Flexible and decoupled component interactions.
- **Framework Independence:** Minimal reliance on specific frameworks, making it easier to adapt and evolve the project.

## Project Structure






- **Application:** Contains the use cases and DTOs (Data Transfer Objects) which define the application's business rules.
- **Domain:** Contains the core business logic, including entities, repositories, and domain services.
- **Infrastructure:** Contains the implementation details, such as persistence and external frameworks.
- **Presentation:** Contains the controllers and views, handling the UI and user interaction.

## Getting Started

### Prerequisites

- PHP >= 8.2
- Composer

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/TWIMM/TWIMMENGINE.git
    cd TWIMMENGINE/
    ```

2. Install dependencies:
    ```bash
    composer install
    
    ```

3. Set up your environment variables:
    ```bash
    cp .env.example .env
    ```

4. Run the application:
    ```bash
    cd public
    php -S localhost:8000
    ```

5. Need a entity for a specifific domain like Universities ? in the application (Example):
    ```bash
    php commandsloader create_entity entity_name domain_name
    ```
6. Need to use react as temlate engine for complex UI directly in TWIMM PHP ?  (Example):
    ## Look the sample ReactComponents to see how to setup that
    ## If you don't have knowledge to use webpack for bundling and generate bundle skip and use twig template or build API to serve separated react app
    ## Webpack and babel are used to bundle your react compenent and asset in one entry point who is used in the twig template to be rendered and hydrated , without that app will load slowly with bad perfomence 
    ## Write your componenents following our example and bundle it to have an entry point  that can be used in the home twig file to display the app 

7. TWIMMENGINE setups a getter service in JS to help you get data from all your controller to your react component  (Example):
    ## Add the JSGetterSliceForYourRedux slice in your redux store , if you dont have one you must setup one in your app directory.
    ## Import the fecthData() helper in your component and pass him the route to the controller you want to get data from 
   


8. Need to Generate a migration file ?  (Example):

## Project Structure

The Clean Architecture PHP Framework follows a structured approach to organizing code that adheres to Clean Architecture principles. Below is an overview of the project structure:

### Directory Layout

- **AppEngine/**
  - Contains the core repositories logic and business rules(Domains , AbstractClass , Api , Helpers, Ressources).

  - **Domains/**
    - Contains each Domain of our App each Domain conatins, businessLogic, migrations , presentations , usecases, entities, repositories, services.
    - **BusinessLogic/**
        - Contains each controller responsible of handling some forms of logic in our domain , pass data to presentation.
    - **Entities/**
        - Contains each entity responsible of handling the model of th domains and his childs. .
    - **Migrations/**
        - Contains migration files .
    - **Presentation/**
        - Contains code responsible of rendering the views after getting data from Business logic.
    - **Repositories/**
        - Contains code responsible of interact with database.
    - **Services/**
        - Contains code responsible of services.
    - **UseCases/**
        - Contains domain useCzses class.

  - **AbstractClass/**
    - Defines protected method used by Helpers methods

  - **Api/**
    - Implements Api call and Api return when views and presentation returns are not needed .

  - **Helpers/**
    - Implements Basic Function used by the presentation , and the business logic .

  - **Ressource/**
    - Contains views and layouts used by the presentations .

- **public/**
  - Entry point of the application accessible via web server.
  - Contains front controllers and files.
  - **index.php/**
  - **Files/**

- **Protected/Core/**
  - Contains application-specific code who run the framworks , Don't touch unless you know what you are doing.
  - **AppProtectedsCommands/**
    - Handles app commande to generate entities , business logic controllers , services etc ...  .
 
## Project Markdown

The Clean Architecture PHP Framework follows a structured approach to organizing code that adheres to Clean Architecture principles. Below is an overview of the project structure:

```plaintext
TWIMMENGINE/
├── AppEngine/
│   ├── AbstractClass/
│   ├── Api/
│   ├── Domains/
│   │   └── Users/
│   │       ├── BusinessLogic/
│   │       ├── Entities/
│   │       ├── Migrations/
│   │       ├── Presentation/
│   │       ├── ReactComponenents/
│   │       ├── Repositories/
│   │       ├── Services/
│   │       └── UseCases/
│   ├── Helpers/
│   └── Ressources/
├── Protected/
│   └── Core/
│       ├── AppProtectedsCommands/
│       │   ├── AppCore.php
│       │   ├── Request.php
│       │   ├── Response.php
│       │   ├── Router.php
│       │   └── Session.php
├── public/
│   ├── Files/
│   └── index.php
├── vendor/
├── .gitignore
├── commandsloader
├── composer.json
├── composer.lock
├── node_modules/
├── webpack.config.js
├── babelrc
├── LICENSE
└── README.md
