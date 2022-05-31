
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ProgressBar extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// progressbar_bg_png
		const progressbar_bg_png = scene.add.image(0, 0, "preload", "progressbar-bg.png");
		progressbar_bg_png.setOrigin(0, 0);
		this.add(progressbar_bg_png);

		// progressbar_fg_png
		const progressbar_fg_png = scene.add.ninePatchContainer(5, 5, 90, 90, "preload", "progressbar-fg.png");
		progressbar_fg_png.marginLeft = 40;
		progressbar_fg_png.marginTop = 40;
		progressbar_fg_png.marginRight = 40;
		progressbar_fg_png.marginBottom = 40;
		progressbar_fg_png.ninePatchContainerOriginX = 0;
		progressbar_fg_png.ninePatchContainerOriginY = 0;
		this.add(progressbar_fg_png);

		this.progressbar_fg_png = progressbar_fg_png;

		/* START-USER-CTR-CODE */

		this._width1 = progressbar_fg_png.width;
		this._fullWidth = progressbar_bg_png.width - 10;

		/* END-USER-CTR-CODE */
	}

	private progressbar_fg_png: NinePatchContainer;

	/* START-USER-CODE */

	private _width1: number;
	private _fullWidth: number;

	setProgress(progress: number) {

		this.progressbar_fg_png.width = this._width1 + (this._fullWidth - this._width1) * progress;
		this.progressbar_fg_png.redraw();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
