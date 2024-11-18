import PlayfairDisplay from "./assets/fonts/subset/PlayfairDisplay-VariableFont_wght-subset.woff2";
import OpenSans from "./assets/fonts/subset/OpenSans-VariableFont_wdth,wght-subset.woff2";

const fonts = [
    {
        name: "Playfair Display",
        url: PlayfairDisplay,
    },
    {
        name: "Open Sans",
        url: OpenSans,
    },
];

for (const font of fonts){
    const fontFace = new FontFace(font.name, `url(${font.url}`);
    fontFace.load()
    document.fonts.add(fontFace)
}
