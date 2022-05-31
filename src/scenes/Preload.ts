
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ProgressBar from "../prefabs/ProgressBar";
/* START-USER-IMPORTS */
import preloadAssetPackUrl from "../../static/assets/asset-pack.json";
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// progressBar
		const progressBar = new ProgressBar(this, 210, 250);
		this.add.existing(progressBar);

		this.progressBar = progressBar;

		this.events.emit("scene-awake");
	}

	private progressBar!: ProgressBar;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.load.pack("asset-pack", preloadAssetPackUrl);

		this.load.on(Phaser.Loader.Events.PROGRESS, (p: number) => {

			// gives a space for the Ads preloading

			this.progressBar.setProgress(p * 0.9);
		});

		this.load.on(Phaser.Loader.Events.COMPLETE, () => {

			console.log("Game loader complete.");
			console.log("Start Ads preload");

			adConfig({
				// https://developers.google.com/ad-placement/docs/preload-ads
				preloadAdBreaks: "on",
				// https://developers.google.com/ad-placement/docs/manual-sequence
				onReady: () => {

					console.log("Ads preloaded!");

					this.progressBar.setProgress(1);

					this.scene.start("Home");
				},
			});
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
