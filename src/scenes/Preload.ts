
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

			this.progressBar.setProgress(p);
		});

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Home"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
