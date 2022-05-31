
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RewardAdButton extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__RewardAdButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): RewardAdButton {
		return (gameObject as any)["__RewardAdButton"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public onAdViewed!: () => void;
	public onAdDismissed!: () => void;

	/* START-USER-CODE */

	public showAdFn?: () => void;

	protected awake(): void {

		this.gameObject.visible = false;
		this.gameObject.on("pointerdown", () => {

			if (this.showAdFn) {

				this.showAdFn();
			}
		});
	}

	showAdButton() {

		console.log("RewardAdButton: showAdButton");

		this.gameObject.visible = false;

		this.showAdFn = undefined;

		adBreak({
			type: "reward",
			name: "test-reward",
			beforeReward: (showAdFn: any) => {

				console.log("RewardAdButton: adBreak.beforeReward");

				this.gameObject.visible = true;

				this.showAdFn = showAdFn;
			},
			adViewed: () => {

				console.log("RewardAdButton: adBreak.adViewed");

				if (this.onAdViewed) {

					this.onAdViewed();
				}
			},
			adDismissed: () => {

				console.log("RewardAdButton: adBreak.addDismissed");

				if (this.onAdDismissed) {

					this.onAdDismissed();
				}
			},
			adBreakDone: (placementInfo: any) => {

				console.log("RewardAdButton: adBreak.adBreadDone");
				console.log(placementInfo);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
