
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnPointerDown extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.GameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__OnPointerDown"] = this;

		/* START-USER-CTR-CODE */

		this.gameObject.on("pointerdown", () => {

			if (this.callback) {

				this.callback();
			}
		});
		
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.GameObject): OnPointerDown {
		return (gameObject as any)["__OnPointerDown"];
	}

	private gameObject: Phaser.GameObjects.GameObject;
	public callback!: () => void;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
