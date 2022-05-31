
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AdButton extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__AdButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): AdButton {
		return (gameObject as any)["__AdButton"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public onAdBreakDone!: () => void;

	/* START-USER-CODE */

	protected awake(): void {

		this.gameObject.on("pointerdown", () => this.showAdd());
	}

	private showAdd() {

		adBreak({
			type: "start",
			name: "test-interstitial",
			adBreakDone: (placementInfo:any) => { 

				console.log("AdButton: adBreak.adBreadDone");
				console.log(placementInfo);

				if (this.onAdBreakDone) {

					this.onAdBreakDone();
				}
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
