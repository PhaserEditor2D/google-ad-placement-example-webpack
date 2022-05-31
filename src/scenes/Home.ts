
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SoundManager from "../utils/SoundManager";
import ButtonClick from "../components/ButtonClick";
import PlayAnimation from "../components/PlayAnimation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// volcano_Level_Set_Background___Layer_00
		const volcano_Level_Set_Background___Layer_00 = this.add.tileSprite(-213, -150, 1334, 750, "Volcano Level Set_Background - Layer 00");
		volcano_Level_Set_Background___Layer_00.setOrigin(0, 0);
		volcano_Level_Set_Background___Layer_00.tintTopLeft = 10226186;

		// btnPlay
		const btnPlay = this.add.image(400, 300, "ui", "Button Pack - Green_Button Green - Play.png");

		// container_1
		const container_1 = this.add.container(-9, 163);
		container_1.scaleX = 0.5;
		container_1.scaleY = 0.5;

		// volcano_Level_Set_Background___Layer_01
		const volcano_Level_Set_Background___Layer_01 = this.add.tileSprite(0, 129, 1732, 750, "Volcano Level Set_Background - Layer 01");
		volcano_Level_Set_Background___Layer_01.setOrigin(0, 0);
		volcano_Level_Set_Background___Layer_01.alphaTopLeft = 0;
		volcano_Level_Set_Background___Layer_01.alphaTopRight = 0;
		container_1.add(volcano_Level_Set_Background___Layer_01);

		// platform
		const platform = this.add.tileSprite(0, 613, 1669, 24, "volcano", "Volcano Level Set_Platformer - Wooden Bridge.png");
		platform.setOrigin(0, 0);
		container_1.add(platform);

		// idle_000
		const idle_000 = this.add.sprite(1433, 545, "player", "Idle_000");
		idle_000.flipX = true;
		container_1.add(idle_000);

		// volcano_Level_Set_Platformer___Spikes_png
		const volcano_Level_Set_Platformer___Spikes_png = this.add.image(806, 600, "volcano", "Volcano Level Set_Platformer - Spikes.png");
		container_1.add(volcano_Level_Set_Platformer___Spikes_png);

		// volcano_Level_Set_Platformer___Spikes_png_1
		const volcano_Level_Set_Platformer___Spikes_png_1 = this.add.image(590, 598, "volcano", "Volcano Level Set_Platformer - Spikes.png");
		container_1.add(volcano_Level_Set_Platformer___Spikes_png_1);

		// volcano_Level_Set_Environment___Skull_png
		const volcano_Level_Set_Environment___Skull_png = this.add.image(699, 583, "volcano", "Volcano Level Set_Environment - Skull.png");
		container_1.add(volcano_Level_Set_Environment___Skull_png);

		// volcano_Level_Set_Environment___Signpost_02_png
		const volcano_Level_Set_Environment___Signpost_02_png = this.add.image(1003, 554, "volcano", "Volcano Level Set_Environment - Signpost 02.png");
		container_1.add(volcano_Level_Set_Environment___Signpost_02_png);

		// btnPlay (components)
		const btnPlayButtonClick = new ButtonClick(btnPlay);
		btnPlayButtonClick.callback = () => this.startGame();

		// idle_000 (components)
		const idle_000PlayAnimation = new PlayAnimation(idle_000);
		idle_000PlayAnimation.animKey = "player-Idle";

		this.btnPlay = btnPlay;
		this.platform = platform;

		this.events.emit("scene-awake");
	}

	private btnPlay!: Phaser.GameObjects.Image;
	public platform!: Phaser.GameObjects.TileSprite;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		SoundManager.playSound(this, "sfx_swooshing", true);

		this.add.tween({
			targets: this.btnPlay,
			x: {
				from: -this.btnPlay.displayWidth,
				to: this.btnPlay.x
			},
			ease: Phaser.Math.Easing.Quadratic.Out,
			duration: 250
		})
	}

	private startGame() {

		this.scene.start("Level");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
