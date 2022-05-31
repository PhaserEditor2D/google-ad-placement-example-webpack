
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ParallaxTilesprite from "../prefabs/ParallaxTilesprite";
import FruitsIndicator from "../prefabs/FruitsIndicator";
import Platform from "../prefabs/Platform";
import FoodLayer from "../prefabs/FoodLayer";
import Player from "../prefabs/Player";
import EnemySpawner from "../prefabs/EnemySpawner";
import GameOverDialog from "../prefabs/GameOverDialog";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// backgroundLayer
		const backgroundLayer = this.add.layer();

		// volcano_Level_Set_Background___Layer_00
		const volcano_Level_Set_Background___Layer_00 = new ParallaxTilesprite(this, 0, -150);
		backgroundLayer.add(volcano_Level_Set_Background___Layer_00);

		// volcano_Level_Set_Background___Layer_01
		const volcano_Level_Set_Background___Layer_01 = new ParallaxTilesprite(this, 0, -150, undefined, undefined, "Volcano Level Set_Background - Layer 01");
		backgroundLayer.add(volcano_Level_Set_Background___Layer_01);

		// fruitsIndicator
		const fruitsIndicator = new FruitsIndicator(this, 5, 5);
		this.add.existing(fruitsIndicator);

		// platform
		const platform = new Platform(this, 0, 530);
		this.add.existing(platform);

		// foodLayer
		const foodLayer = new FoodLayer(this);
		this.add.existing(foodLayer);

		// player
		const player = new Player(this, 181, 435);
		this.add.existing(player);

		// enemiesLayer
		const enemiesLayer = new EnemySpawner(this);
		this.add.existing(enemiesLayer);

		// gameOverDialog
		const gameOverDialog = new GameOverDialog(this);
		this.add.existing(gameOverDialog);
		gameOverDialog.visible = false;

		// volcano_Level_Set_Background___Layer_00 (prefab fields)
		volcano_Level_Set_Background___Layer_00.parallaxFactor = 0.1;

		// volcano_Level_Set_Background___Layer_01 (prefab fields)
		volcano_Level_Set_Background___Layer_01.parallaxFactor = 0.2;

		this.fruitsIndicator = fruitsIndicator;
		this.platform = platform;
		this.foodLayer = foodLayer;
		this.player = player;
		this.enemiesLayer = enemiesLayer;
		this.gameOverDialog = gameOverDialog;

		this.events.emit("scene-awake");
	}

	public fruitsIndicator!: FruitsIndicator;
	public platform!: Platform;
	public foodLayer!: FoodLayer;
	private player!: Player;
	public enemiesLayer!: EnemySpawner;
	public gameOverDialog!: GameOverDialog;

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		this.gameOverDialog.on("play-again", () => {

			this.gameOverDialog.hideDialog();
			this.fruitsIndicator.showIndicator();
			this.enemiesLayer.restart();
			this.player.revive();
		});

		this.gameOverDialog.on("go-home", () => {

			this.scene.start("Home");
		});
	}

	showGameOverDialog() {

		const collectedItems = this.fruitsIndicator.list
			.map(obj => (obj as Phaser.GameObjects.Image).frame.name);

		this.gameOverDialog.displayDialog(collectedItems);

		this.fruitsIndicator.hideIndicator();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
