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

This framework is built with Clean Architecture principles to ensure that your application is:
- Independent of frameworks
- Testable
- Independent of UI
- Independent of databases
- Independent of any external agency

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
    cd TWIMMENGINE/public
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
    php -S localhost:8000
    ```

## Usage

### Defining a Use Case
