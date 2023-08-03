import { execSync } from "child_process";
import fs from "fs";

function main(): void {
    if (!fs.existsSync("./package.json")) {
        console.log("No package.json file found, exiting.");
        return;
    }

    if (!fs.existsSync("./tsconfig.json")) {
        console.log("No tsconfig.json file found, exiting");
        return;
    }

    const packageJSON: {
        dependencies?: Record<string, unknown>,
        devDependencies?: Record<string, unknown>
    } = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

    if (!packageJSON.dependencies && !packageJSON.devDependencies) {
        console.log("No dependencies found, exiting.");
        return;
    }

    const dependencies: Array<string> = [
        ...Object.keys(packageJSON.dependencies || {}),
        ...Object.keys(packageJSON.devDependencies || {})
    ];

    const stubTypes: Set<string> = new Set(["typescript"]);

    dependencies.forEach((dependency: string) => {
        if (dependency.match(/@types/) || stubTypes.has(dependency)) {
            return;
        }
        try {
            execSync(`npm i @types/${dependency} -D`, { stdio: "ignore" });
            console.log(`@types/${dependency} installed.`);
        } catch (error) {
            console.log(`No types available for ${dependency}, skipping.`);
        }
    });
}

main();