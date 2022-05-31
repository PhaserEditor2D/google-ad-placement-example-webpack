
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Spikes from "./Spikes";
import Lava from "./Lava";
import Stone from "./Stone";
import Skull from "./Skull";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EnemySpawner extends Phaser.GameObjects.Layer {

	constructor(scene: Phaser.Scene) {
		super(scene);

		// volcano_Level_Set_Platformer___Spikes_png
		const volcano_Level_Set_Platformer___Spikes_png = new Spikes(scene, 1735, 530, "volcano", "Volcano Level Set_Platformer - Spikes.png");
		this.add(volcano_Level_Set_Platformer___Spikes_png);

		// volcano_Level_Set_Environment___Lava_03_png
		const volcano_Level_Set_Environment___Lava_03_png = new Lava(scene, 2097, 530);
		this.add(volcano_Level_Set_Environment___Lava_03_png);

		// volcano_Level_Set_Environment___Rock_01_png
		const volcano_Level_Set_Environment___Rock_01_png = new Stone(scene, 835, 530);
		this.add(volcano_Level_Set_Environment___Rock_01_png);

		// volcano_Level_Set_Environment___Skull_png
		const volcano_Level_Set_Environment___Skull_png = new Skull(scene, 509, 530, "volcano", "Volcano Level Set_Environment - Skull.png");
		this.add(volcano_Level_Set_Environment___Skull_png);

		// volcano_Level_Set_Platformer___Spikes_png_1
		const volcano_Level_Set_Platformer___Spikes_png_1 = new Spikes(scene, 1535, 530);
		this.add(volcano_Level_Set_Platformer___Spikes_png_1);

		// volcano_Level_Set_Environment___Skull_png_1
		const volcano_Level_Set_Environment___Skull_png_1 = new Skull(scene, 1365, 530, "volcano", "Volcano Level Set_Environment - Skull.png");
		this.add(volcano_Level_Set_Environment___Skull_png_1);

		// volcano_Level_Set_Environment___Skull_png_2
		const volcano_Level_Set_Environment___Skull_png_2 = new Skull(scene, 1165, 530);
		this.add(volcano_Level_Set_Environment___Skull_png_2);

		// volcano_Level_Set_Environment___Rock_01_png_1
		const volcano_Level_Set_Environment___Rock_01_png_1 = new Stone(scene, 2419, 530, "volcano", "Volcano Level Set_Environment - Rock 01.png");
		this.add(volcano_Level_Set_Environment___Rock_01_png_1);

		/* START-USER-CTR-CODE */

		for (const sprite of this.sprites) {

			this.scene.physics.add.existing(sprite);
		}

		this.addSpawnEvent();

		this.restart();

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	get sprites() {

		return this.list as Phaser.Physics.Arcade.Image[];
	}

	restart() {

		for (const sprite of this.sprites) {

			sprite.x = this.scene.cameras.main.scrollX - sprite.displayWidth;
		}
	}

	private addSpawnEvent() {

		this.scene.time.addEvent({
			delay: Phaser.Math.Between(100, 2000),
			callback: () => {

				this.spawnObject();

				this.addSpawnEvent();
			}
		});
	}

	private spawnObject() {

		const cam = this.scene.cameras.main;

		const next: Phaser.GameObjects.Image = Phaser.Utils.Array.GetRandom(this.sprites
			.filter(s => s.x + s.displayWidth < cam.scrollX));

		let right = 0;

		for (const sprite of this.sprites) {

			if (sprite.x > right) {

				right = sprite.x + sprite.width;
			}
		}

		if (next) {

			next.x = Math.max(cam.scrollX + cam.width, right) + Phaser.Math.Between(cam.width / 4, cam.width);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
