const path = require("path");
const PORT = process.env.PORT || 3001;

// Initialize Express app
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const initDatabase = require("./server/database");
initDatabase();

// Initialize API routes
const routes = require("./server/routes");
routes(app);

// TODO: Initialize Apollo Server for GraphQL

// Default React route
app.get("/*", (_, response) => {
    response.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    if (process.env.NODE_ENV === "development") {
        console.log(`Server is running on http://localhost:${PORT}/`);
    }
});
