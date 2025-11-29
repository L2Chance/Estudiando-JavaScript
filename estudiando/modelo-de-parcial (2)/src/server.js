const express = require("express");
const app = express();
const guardianRoutes = require("./routes/guardianRoutes");
const authRoutes = require("./routes/authRoutes");
const challengeRoutes = require("./routes/challengeRoutes");

const PORT = 3000;

app.use(express.json());
app.use("/guardian", guardianRoutes);
app.use("/auth", authRoutes);
app.use("/challenge", challengeRoutes);

app.listen(PORT, () => {
  console.log("¡El servidor está encendido!");
  console.log("http://localhost:3000");
});
