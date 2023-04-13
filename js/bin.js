#!/usr/bin/env node

import fs from "fs";
import { file } from "./dir_file.js";
import compiler from "./compiler.js";

console.log("Csslandia compiler started");

try {
    await compiler();
    console.log("Csslandia compiled");
} catch {}

const args = process.argv.slice(2);

if (args[0] === "start") {
    console.log("Watching for changes in " + file);

    fs.watch(file, async () => {
        try {
            try {
                await compiler();
                console.log("Csslandia recompiled");
            } catch {}
        } catch {}
    });
}
