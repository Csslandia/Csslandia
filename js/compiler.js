import fs from "fs";
import sass from "sass";

import { dir, file } from "./dir_file.js";

const compile = () => {
    const result = sass.compile(dir + "scss/csslandia.scss");
    const compressed = sass.compile(dir + "scss/csslandia.scss", {
        style: "compressed",
    });

    fs.writeFileSync(dir + "style.css", result.css);
    fs.writeFileSync(dir + "style.min.css", compressed.css);
};

const compiler = async () => {
    return await new Promise((resolve, reject) => {
        try {
            compile();
        } catch {
            if (fs.existsSync(file)) {
                console.error("An error occurred in the " + file);
                reject();
            } else {
                let data = fs.readFileSync(dir + "scss/_vars.scss").toString();
                fs.writeFileSync(file, data);
                console.log(file + " created");

                try {
                    compile();
                } catch {
                    console.error("An unexpected error occurred");
                    reject();
                }
            }
        }
        resolve();
    });
};

export default compiler;
