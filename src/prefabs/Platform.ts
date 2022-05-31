
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Platform extends Phaser.GameObjects.TileSprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 342, width ?? 800, height ?? 24, texture || "volcano", frame ?? "Volcano Level Set_Platformer - Wooden Bridge.png");

		this.setOrigin(0, 0);

		/* START-USER-CTR-CODE */

		this.scene.physics.add.existing(this);

		const body = this.body as Phaser.Physics.Arcade.Body;
		body.immovable = true;

		body.checkCollision.up = true;
		body.checkCollision.down = false;
		body.checkCollision.left = false;
		body.checkCollision.right = false;

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	preUpdate(): void {

		this.tilePositionX = this.scene.cameras.main.scrollX;
		this.x = this.scene.cameras.main.scrollX;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
