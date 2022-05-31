
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ButtonClick extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.GameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__ButtonClick"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.GameObject): ButtonClick {
		return (gameObject as any)["__ButtonClick"];
	}

	private gameObject: Phaser.GameObjects.GameObject;
	public callback!: () => void;

	/* START-USER-CODE */

	protected awake(): void {

		this.gameObject.setInteractive();

		this.gameObject.on("pointerdown", () => {

			if(this.callback) {

				this.callback();
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
