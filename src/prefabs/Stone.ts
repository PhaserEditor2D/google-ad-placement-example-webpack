
// You can write more code here

/* START OF COMPILED CODE */

import Enemy from "./Enemy";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Stone extends Enemy {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "volcano", frame ?? "Volcano Level Set_Environment - Rock 01.png");

		this.setOrigin(0.6436600505515191, 0.7431170086256473);

		/* START-USER-CTR-CODE */

		this.setSize(100, 100);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
