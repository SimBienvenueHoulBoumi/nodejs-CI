"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path")); // Utilisation de path module pour gérer les chemins de fichiers
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Définir le moteur de templates EJS
app.set("view engine", "ejs");
// Définir le chemin des vues
app.set("views", path_1.default.join(__dirname, "views"));
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
//# sourceMappingURL=index.js.map