
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayAnimation extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Sprite) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PlayAnimation"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Sprite): PlayAnimation {
		return (gameObject as any)["__PlayAnimation"];
	}

	private gameObject: Phaser.GameObjects.Sprite;
	public animKey: string = "";

	/* START-USER-CODE */

	protected awake(): void {

		this.gameObject.play(this.animKey);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
