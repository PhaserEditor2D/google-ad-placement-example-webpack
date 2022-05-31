
// You can write more code here

/* START OF COMPILED CODE */

import Enemy from "./Enemy";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Spikes extends Enemy {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "volcano", frame ?? "Volcano Level Set_Platformer - Spikes.png");

		this.setOrigin(0.5, 0.7723282413582107);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
