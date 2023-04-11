import fs from "fs";
import sass from "sass";
import CleanCSS from "clean-css";

import { path, dir } from "./path_dir.js";
import default_config from "./config.js";

const compiler = () => {
    let config = {};
    try {
        config = JSON.parse(fs.readFileSync(path));
    } catch {
        fs.writeFileSync(path, JSON.stringify(default_config, null, 4));
        config = default_config;
    }

    let scss_config = "";

    for (let [key, value] of Object.entries(config)) {
        scss_config += `$${key}: ${value};\n`;
    }

    fs.writeFileSync(dir + "scss/_config.scss", scss_config);

    const result = sass.compile(dir + "scss/csslandia.scss");
    const compressed = sass.compile(dir + "scss/csslandia.scss", {
        style: "compressed",
    });

    fs.writeFileSync(dir + "style.css", result.css);
    fs.writeFileSync(dir + "style.min.css", compressed.css);
};

export default compiler;
