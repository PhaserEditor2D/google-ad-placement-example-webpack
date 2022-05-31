
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ParallaxTilesprite extends Phaser.GameObjects.TileSprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, width ?? 1334, height ?? 750, texture || "Volcano Level Set_Background - Layer 00", frame);

		this.setOrigin(0, 0);

		/* START-USER-CTR-CODE */

		this.scrollFactorX = 0;
		this.scrollFactorY = 0;
		this.scene.sys.updateList.add(this);

		/* END-USER-CTR-CODE */
	}

	public parallaxFactor: number = 0;

	/* START-USER-CODE */

	preUpdate() {

		this.tilePositionX = this.scene.cameras.main.scrollX * this.parallaxFactor;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
