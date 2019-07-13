# Mixtly

### Team Members:

-   Alexis Schaetzle
-   Brandon Burrus
-   Fiore Cheyenne
-   Juan Palomino

### Description:

Mixtly is a mobile-friendly web application designed to make discovering new restraument menu items as simple as tapping a few buttons on your phone. We desided to design our initial proof-of-concept using the popular Dutch Bros Coffee menu, but have plans to expand later on into new markets.

Mixtly also provides a developer-friendly public-facing GraphQL API for interacting with the core business logic of the application, including viewing all data or choosing randomized data.

### Technologies:

-   React
    -   Styled-Components
    -   React-Router
-   Node.js
    -   Express
        -   JWT
        -   Bcrypt
    -   GraphQL
        - Apollo Server
    -   Mongoose
-   MongoDB

### Primary Responsibilities:

-   **Alexis Schaetzle**
    -   Focused primarily on defining core structure of internal data, creating database Schema and Models, as well as creating the core application business logic.
-   **Brandon Burrus**
    -   Focused primarily on writing the application core, including the coupling of a server running Node.js and a client running React, as well as providing a flexible GraphQL API for public use.
-   **Fiore Cheyenne**
    -   Focused primarily on the front-end user interactions and design using React and Styled-Components, as well as the front-end routing using React-Router.
-   **Juan Palomino**
    -   Focused primarily on providing user/user favorites API routes, user authentication using JWT, as well as user password security via hash encryption using Bcrypt.

### About:

We started with the idea to make a menu randomizer to make discovering new food and drinks as simple and easy as possible. From there, we choose to use the Agile Methology of Kanban for continous development.

We started with defining the structure of our data, wireframing our initial user interface and site flow, and deciding on our application MVP. From our MVP, we broke down the core components of our application, and each choose one thing to start working on. Alex would focus on the core randomizer business logic and data consumption/storage, Brandon would design the front-end facing side of the users (including signing up, login, validation, user token storage, and user favorites), Fiore would focus on designing the front-end design as a whole, including the front-end interaction logic for the core application randomizer, and Juan would create REST API routes for handling users, user tokens, user password hashing, user favorites, and user data models.
