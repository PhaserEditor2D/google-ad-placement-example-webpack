
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FixedToCamera from "../components/FixedToCamera";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FruitsIndicator extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// tiny_Caveman_Game_Object___Cherry_png
		const tiny_Caveman_Game_Object___Cherry_png = scene.add.image(6, 0, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		tiny_Caveman_Game_Object___Cherry_png.scaleX = 0.8;
		tiny_Caveman_Game_Object___Cherry_png.scaleY = 0.8;
		tiny_Caveman_Game_Object___Cherry_png.setOrigin(0, 0);
		this.add(tiny_Caveman_Game_Object___Cherry_png);

		// volcano_Level_Set_Collectable_Object___Meat_png
		const volcano_Level_Set_Collectable_Object___Meat_png = scene.add.image(59, 0, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		volcano_Level_Set_Collectable_Object___Meat_png.scaleX = 0.5;
		volcano_Level_Set_Collectable_Object___Meat_png.scaleY = 0.5;
		volcano_Level_Set_Collectable_Object___Meat_png.setOrigin(0, 0);
		this.add(volcano_Level_Set_Collectable_Object___Meat_png);

		// tiny_Caveman_Game_Object___Apple_png
		const tiny_Caveman_Game_Object___Apple_png = scene.add.image(123, 0, "volcano", "Tiny Caveman_Game Object - Apple.png");
		tiny_Caveman_Game_Object___Apple_png.scaleX = 0.8;
		tiny_Caveman_Game_Object___Apple_png.scaleY = 0.8;
		tiny_Caveman_Game_Object___Apple_png.setOrigin(0, 0);
		this.add(tiny_Caveman_Game_Object___Apple_png);

		// tiny_Caveman_Game_Object___Banana_png
		const tiny_Caveman_Game_Object___Banana_png = scene.add.image(175, 0, "volcano", "Tiny Caveman_Game Object - Banana.png");
		tiny_Caveman_Game_Object___Banana_png.scaleX = 0.8;
		tiny_Caveman_Game_Object___Banana_png.scaleY = 0.8;
		tiny_Caveman_Game_Object___Banana_png.setOrigin(0, 0);
		this.add(tiny_Caveman_Game_Object___Banana_png);

		// tiny_Caveman_Game_Object___Banana_png_1
		const tiny_Caveman_Game_Object___Banana_png_1 = scene.add.image(219, 0, "volcano", "Tiny Caveman_Game Object - Banana.png");
		tiny_Caveman_Game_Object___Banana_png_1.scaleX = 0.8;
		tiny_Caveman_Game_Object___Banana_png_1.scaleY = 0.8;
		tiny_Caveman_Game_Object___Banana_png_1.setOrigin(0, 0);
		this.add(tiny_Caveman_Game_Object___Banana_png_1);

		// this (components)
		new FixedToCamera(this);

		/* START-USER-CTR-CODE */


		for (const c of [...this.list]) {

			c.destroy();
		}

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */


	hideIndicator() {

		this.scene.add.tween({
			targets: this,
			alpha: 0,
			duration: 250,
			ease: Phaser.Math.Easing.Quadratic.Out
		});
	}

	showIndicator() {

		this.scene.add.tween({
			targets: this,
			alpha: 1,
			duration: 250,
			ease: Phaser.Math.Easing.Quadratic.Out
		});
	}

	addFruit(frame: string) {

		const itemWidth = 50;
		let x = 0;
		let y = 0;

		for(const obj of this.list) {

			const img = obj as Phaser.GameObjects.Image;
			x += img.displayWidth / 2;

			if (x + img.displayWidth > this.scene.cameras.main.width) {

				x = 0;
				y += itemWidth / 2;
			}
		}

		const img = this.scene.add.image(x, y, "volcano", frame);
		img.setOrigin(0, 0);
		img.displayWidth = itemWidth;
		img.scaleY = img.scaleX;
		img.alpha = 0;

		this.scene.add.tween({
			targets: img,
			duration: 200,
			alpha: {
				from: 0,
				to: 1
			},
			ease: Phaser.Math.Easing.Quadratic.Out
		});

		this.add(img);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
