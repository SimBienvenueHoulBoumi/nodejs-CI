import express from "express";
import path from "path"; // Utilisation de path module pour gérer les chemins de fichiers


const app = express();

const port = 4000;

// Définir le moteur de templates EJS
app.set("view engine", "ejs");

// Définir le chemin des vues
app.set("views", path.join(__dirname, "views"));

// Route pour afficher la vue home
app.get("/", (req, res) => {
  res.render("home", {
    title: "Accueil",
    message: "Bienvenue sur notre site !",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
