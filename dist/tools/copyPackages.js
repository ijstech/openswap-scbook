const { promises: fs } = require("fs")
const path = require("path")

async function copyDir(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    let entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        entry.isDirectory() ?
            await copyDir(srcPath, destPath) :
            await fs.copyFile(srcPath, destPath);
    }
}

async function run(){
    await copyDir('./src/lib', '../lib');
    await fs.copyFile('./src/edit.html', '../edit.html');
    await fs.copyFile('./src/run.html', '../run.html');
    await fs.copyFile('./src/scconfig.json', '../scconfig.json');
}
run();
