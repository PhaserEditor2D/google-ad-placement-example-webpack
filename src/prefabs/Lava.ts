
// You can write more code here

/* START OF COMPILED CODE */

import Enemy from "./Enemy";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Lava extends Enemy {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "volcano", frame ?? "Volcano Level Set_Environment - Lava 03.png");

		this.scaleX = 1.9547376238341077;
		this.scaleY = 1.9547376238341077;
		this.setOrigin(0.5, 0.6815521609054738);

		/* START-USER-CTR-CODE */

		this.body.setSize(60, 15);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
