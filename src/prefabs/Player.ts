
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import Level from "../scenes/Level";
import SoundManager from "../utils/SoundManager";
/* END-USER-IMPORTS */

export default class Player extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 398, y ?? 206, texture || "player", frame ?? "Idle_000");

		this.setOrigin(0.5, 0.8);

		/* START-USER-CTR-CODE */

		this.scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY);
		const body = this.arcadeBody;
		body.setSize(50, 145);
		body.setDrag(1, 0);
		body.gravity.set(0, 1800);
		body.velocity.set(VELOCITY, 0);

		this.play("player-Running");

		this.scene.events.once("scene-awake", this.awake, this);

		this.initController();

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private _died = false;
	private _countJumps = 0;

	private awake() {

		const cam = this.scene.cameras.main;

		cam.startFollow(this, false, 1, 1, this.x - cam.centerX, 50);

		this.body.bounce.set(0, 0);

		this.scene.physics.add.collider(this, this.level.platform, () => {

			if (this._died) {

				return;
			}

			this.play("player-Running", true);

			console.log("play walk " + Date.now());
			SoundManager.playSound(this.scene, "walk");

			this._countJumps = 0;
		});

		this.scene.physics.add.overlap(this, this.level.enemiesLayer.list, this.playerVsEnemy, undefined, this);
		this.scene.physics.add.overlap(this, this.level.foodLayer.list, this.playerVsFood as any, undefined, this);
	}

	private playerVsFood(player: Player, food: Phaser.Physics.Arcade.Image) {

		this.level.foodLayer.itemTaken(food);
		this.level.fruitsIndicator.addFruit(food.frame.name);

		SoundManager.playSound(this.scene, "sfx_point", true);
	}

	private playerVsEnemy() {

		if (this._died) {

			return;
		}

		this._died = true;

		this.body.velocity.x = -50;
		this.body.velocity.y = -Math.abs(this.body.velocity.y);

		this.play("player-Hurt");

		SoundManager.playSound(this.scene, "sfx_hit");

		this.scene.time.addEvent({
			delay: 1000,
			callback: () => {

				this.body.velocity.x = 0;

				this.play("player-Idle");

				this.level.showGameOverDialog();
			}
		});
	}

	get level() {

		return this.scene as Level;
	}

	private initController() {

		this.scene.input.on("pointerdown", () => this.jump());
		this.scene.input.keyboard.addCapture(["SPACE", "UP"]);
		this.scene.input.keyboard.on("keydown-SPACE", () => this.jump());
		this.scene.input.keyboard.on("keydown-UP", () => this.jump());
	}

	private jump() {

		if (this._died) {

			return;
		}

		if (this._countJumps < 2) {

			this._countJumps++;

			this.body.velocity.y = -600;

			this.play("player-Jump Loop", true);

			console.log("stop walk" + Date.now());
			SoundManager.stopSound(this.scene, "walk");

			SoundManager.playSound(this.scene, "sfx_wing", true);
		}
	}

	revive() {

		this.scene.time.addEvent(({
			delay: 500,
			callback: () => {

				this.body.velocity.x = 450;
				this._died = false;
				this.body.enable = true;
			}
		}))
	}

	get arcadeBody() {

		return this.body as Phaser.Physics.Arcade.Body;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

const VELOCITY = 450;