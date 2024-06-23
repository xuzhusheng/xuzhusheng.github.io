import fs from "fs"
import { Readable } from "stream";
import path from "path";
const googleFontsCss = fs.readFileSync("./scripts/google-fonts.css", {encoding: "utf8", flag: "r"});
const fonts = googleFontsCss.match(/(?<=src: url\()(.*?)(?=\))/g);


const download = async url => {
    const file = `./src/assets/fonts${new URL(url).pathname.substring(2)}`;
    const dir = path.dirname(file);
    fs.mkdirSync(dir, { recursive: true });
    const response = await fetch(url)
    if (response.ok && response.body) {
        const font = fs.createWriteStream(file);
        Readable.fromWeb(response.body).pipe(font);
    }
}

// fonts.map(url => download(url))

// const css = googleFontsCss.replaceAll("https://fonts.gstatic.com/s", "./assets/fonts");
// fs.writeFileSync("./src/fonts.css", css, {encoding: "utf8"})