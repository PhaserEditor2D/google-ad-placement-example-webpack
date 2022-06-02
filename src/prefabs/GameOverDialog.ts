
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SetInteractive from "../components/SetInteractive";
import OnPointerDown from "../components/OnPointerDown";
import RewardAdButton from "../components/RewardAdButton";
import PlayAnimation from "../components/PlayAnimation";
/* START-USER-IMPORTS */
import SoundManager from "../utils/SoundManager";
import Level from "../scenes/Level";
/* END-USER-IMPORTS */

export default class GameOverDialog extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// popup_png
		const popup_png = scene.add.image(418, 300, "ui", "popup.png");
		this.add(popup_png);

		// btnHome
		const btnHome = scene.add.image(192, 400, "ui", "Button Pack - Green_Button Green - Home.png");
		btnHome.scaleX = 0.5;
		btnHome.scaleY = 0.5;
		this.add(btnHome);

		// btnPlay
		const btnPlay = scene.add.image(276, 400, "ui", "Button Pack - Green_Button Green - Play Ad.png");
		btnPlay.scaleX = 0.5;
		btnPlay.scaleY = 0.5;
		this.add(btnPlay);

		// kid
		const kid = scene.add.sprite(600, 270, "player", "Idle_005");
		kid.flipX = true;
		kid.tintTopLeft = 16777215;
		kid.tintTopRight = 16777215;
		kid.tintBottomLeft = 16777215;
		kid.tintBottomRight = 16777215;
		this.add(kid);

		// itemsContainer
		const itemsContainer = scene.add.container(154, 176);
		this.add(itemsContainer);

		// itemsZone
		const itemsZone = scene.add.rectangle(0, -9, 370, 180);
		itemsZone.setOrigin(0, 0);
		itemsZone.alpha = 0.4;
		itemsZone.isFilled = true;
		itemsContainer.add(itemsZone);

		// volcano_Level_Set_Collectable_Object___Meat_png
		const volcano_Level_Set_Collectable_Object___Meat_png = scene.add.image(73, 73, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		itemsContainer.add(volcano_Level_Set_Collectable_Object___Meat_png);

		// tiny_Caveman_Game_Object___Cherry_png
		const tiny_Caveman_Game_Object___Cherry_png = scene.add.image(192, 69, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		itemsContainer.add(tiny_Caveman_Game_Object___Cherry_png);

		// tiny_Caveman_Game_Object___Banana_png
		const tiny_Caveman_Game_Object___Banana_png = scene.add.image(270, 58, "volcano", "Tiny Caveman_Game Object - Banana.png");
		itemsContainer.add(tiny_Caveman_Game_Object___Banana_png);

		// pointsText
		const pointsText = scene.add.text(600, 367, "", {});
		pointsText.setOrigin(0.5, 0.5);
		pointsText.text = "points: 0";
		pointsText.setStyle({ "color": "#3a2929ff", "fontFamily": "arial", "fontSize": "20px", "fontStyle": "bold" });
		this.add(pointsText);

		// btnHome (components)
		new SetInteractive(btnHome);
		const btnHomeOnPointerDown = new OnPointerDown(btnHome);
		btnHomeOnPointerDown.callback = () => this.emit("go-home");

		// btnPlay (components)
		new SetInteractive(btnPlay);
		const btnPlayRewardAdButton = new RewardAdButton(btnPlay);
		btnPlayRewardAdButton.onAdViewed = () => this.emit("play-again");
		btnPlayRewardAdButton.onAdDismissed = () => this.emit("go-home");

		// kid (components)
		const kidPlayAnimation = new PlayAnimation(kid);
		kidPlayAnimation.animKey = "player-Idle";

		this.btnHome = btnHome;
		this.btnPlay = btnPlay;
		this.itemsContainer = itemsContainer;
		this.itemsZone = itemsZone;
		this.pointsText = pointsText;

		/* START-USER-CTR-CODE */

		this.btnPlay.on("adViewed", () => {

			this.emit("play-again");
		});

		this.btnPlay.on("adDismissed", () => {

			this.emit("go-home");
		});

		this.btnHome.on("adBreakDone", () => {

			this.emit("go-home");
		})

		/* END-USER-CTR-CODE */
	}

	private btnHome: Phaser.GameObjects.Image;
	private btnPlay: Phaser.GameObjects.Image;
	private itemsContainer: Phaser.GameObjects.Container;
	private itemsZone: Phaser.GameObjects.Rectangle;
	private pointsText: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	hideDialog() {

		this.visible = false;
	}

	displayDialog(collectedItems: string[]) {

		this.itemsContainer.removeAll(true);

		const cam = this.scene.cameras.main;

		this.visible = true;

		this.setPosition(cam.scrollX, cam.scrollY + cam.height);

		this.scene.add.tween({
			targets: this,
			y: cam.scrollY,
			duration: 250,
			ease: Phaser.Math.Easing.Quadratic.Out,
			onComplete: () => {

				if (collectedItems.length > 0) {

					this.showCollectedItems(collectedItems);
				}
			}
		});

		SoundManager.playSound(this.scene, "sfx_swooshing", false);

		RewardAdButton.getComponent(this.btnPlay).showAdButton();
	}

	private showCollectedItems(collectedItems: string[]) {

		const area = this.itemsZone.width * this.itemsZone.height;
		const itemArea = area / (collectedItems.length + 10);
		const itemWidth = Math.min(50, Math.max(2, Math.floor(Math.sqrt(itemArea))));

		let x = 0;
		let y = 0;
		let i = 0;

		const itemDelay = Math.min(100, 2000 / collectedItems.length);

		for (const item of collectedItems) {

			if (x + itemWidth >= this.itemsZone.width) {

				x = 0;
				y += itemWidth;
			}

			const img = this.scene.add.image(x, y, "volcano", item);
			img.setOrigin(0, 0);
			img.displayWidth = itemWidth;
			img.scaleY = img.scaleX;
			img.alpha = 0;

			this.itemsContainer.add(img);

			x += itemWidth;

			this.scene.add.tween({
				targets: img,
				duration: 100,
				alpha: 1,
				delay: i * itemDelay,
				scaleX: {
					from: img.scaleX + 0.5,
					to: img.scaleX
				},
				scaleY: {
					from: img.scaleY + 0.5,
					to: img.scaleY
				},
				ease: Phaser.Math.Easing.Quadratic.Out,
				onComplete: ((points: number) => {

					return () => {

						this.pointsText.text = "points: " + points;
					}
				})(i + 1)
			});

			i++;
		}
	}

	get level() {

		return this.scene as Level;
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
