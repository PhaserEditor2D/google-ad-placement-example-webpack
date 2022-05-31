
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ButtonClick from "../components/ButtonClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// btnImage
		const btnImage = scene.add.ninePatchImage(0, 0, 354, 160, "ui", "btn-red.png");
		btnImage.scaleX = 0.3873557965979936;
		btnImage.scaleY = 0.3873557965979936;
		btnImage.setOrigin(0, 0);
		btnImage.marginLeft = 60;
		btnImage.marginTop = 60;
		btnImage.marginRight = 60;
		btnImage.marginBottom = 60;
		this.add(btnImage);

		// btnText
		const btnText = scene.add.text(69, 32, "", {});
		btnText.setOrigin(0.5, 0.5);
		btnText.text = "My Button";
		btnText.setStyle({ "backgroundColor": "" });
		this.add(btnText);

		// btnImage (components)
		new ButtonClick(btnImage);

		this.btnImage = btnImage;
		this.btnText = btnText;

		/* START-USER-CTR-CODE */


		this.scene.events.once("update", () => {
			btnImage.setInteractive();
		})
		/* END-USER-CTR-CODE */
	}

	public btnImage: NinePatchImage;
	public btnText: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
