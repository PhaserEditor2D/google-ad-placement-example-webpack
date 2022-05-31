import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import registerNinePatchContainerFactory from "./ninepatch/registerNinePatchContainerFactory";
import registerNinePatchImageFactory from "./ninepatch/registerNinePatchImageFactory";
import Home from "./scenes/Home";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	registerNinePatchContainerFactory();
	registerNinePatchImageFactory();

	const game = new Phaser.Game({
		width: 800,
		height: 600,
		backgroundColor: "#2f2f2f",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		physics: {
			default: "arcade",
			arcade: {
				debug: false
			}
		},
		scene: [Boot, Preload, Home, Level]
	});

	game.scene.start("Boot");

});