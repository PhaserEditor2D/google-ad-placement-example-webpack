
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FixedToCamera {

	constructor(gameObject: Phaser.GameObjects.GameObject) {
		this.gameObject = gameObject;
		(gameObject as any)["__FixedToCamera"] = this;

		/* START-USER-CTR-CODE */

		(gameObject as Phaser.GameObjects.Image).setScrollFactor(0, 0);

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.GameObject): FixedToCamera {
		return (gameObject as any)["__FixedToCamera"];
	}

	private gameObject: Phaser.GameObjects.GameObject;

	/* START-USER-CODE */


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
