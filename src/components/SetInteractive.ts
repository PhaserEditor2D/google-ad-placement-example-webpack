
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetInteractive extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__SetInteractive"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): SetInteractive {
		return (gameObject as any)["__SetInteractive"];
	}

	private gameObject: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	protected awake(): void {

		this.gameObject.setInteractive();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
