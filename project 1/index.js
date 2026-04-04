const express = require("express");
const app = express();
const port = 8000;


// Load sample users from MOCK_DATA.json
const users = require("./MOCK_DATA.json");

// ROUTES
// This route shows users in simple HTML.
app.get("/users", (req, res) => {
 const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ul>
  `;
    return res.send(html);
});


app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Dynamic route parameter
// Example: /api/users/1
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});


app.listen(port, () => console.log(`Server running at port ${port}`));
