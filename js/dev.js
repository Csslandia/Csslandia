import fs from "fs";
import sass from "sass";

const result = sass.compile("scss/csslandia.scss");
const compressed = sass.compile("scss/csslandia.scss", { style: "compressed" });

fs.writeFileSync("style.css", result.css);
fs.writeFileSync("style.min.css", compressed.css);
