import fs from "fs";
import sass from "sass";

const result = sass.compile("scss/dev.scss");
const compressed = sass.compile("scss/dev.scss", { style: "compressed" });

fs.writeFileSync("style.css", result.css);
fs.writeFileSync("style.min.css", compressed.css);
