const express = require("express");
const app = express();
const PORT = 3000;

const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("El servidor está activo");
  console.log("http://localhost:3000");
});
