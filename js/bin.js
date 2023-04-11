#!/usr/bin/env node
import fs from "fs";
import { path } from "./path_dir.js";
import compiler from "./compiler.js";

console.log("Csslandia compiler started");
compiler();
console.log("Csslandia compiled");

const args = process.argv.slice(2);

if (args[0] === "start") {
    console.log("Watching for changes in " + path);

    fs.watch(path, () => {
        try {
            compiler();
            console.log("Csslandia recompiled");
        } catch {}
    });
}
