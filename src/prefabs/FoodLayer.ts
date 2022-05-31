
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FoodLayer extends Phaser.GameObjects.Layer {

	constructor(scene: Phaser.Scene) {
		super(scene);

		// meat
		const meat = scene.add.image(794, 1006, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		this.add(meat);

		// apple
		const apple = scene.add.image(478, 222, "volcano", "Tiny Caveman_Game Object - Apple.png");
		this.add(apple);

		// cherry
		const cherry = scene.add.image(687, 217, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry);

		// banana
		const banana = scene.add.image(-188, 982, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana);

		// apple_1
		const apple_1 = scene.add.image(1256, 982, "volcano", "Tiny Caveman_Game Object - Apple.png");
		this.add(apple_1);

		// apple_2
		const apple_2 = scene.add.image(889, 287, "volcano", "Tiny Caveman_Game Object - Apple.png");
		this.add(apple_2);

		// cherry_1
		const cherry_1 = scene.add.image(510, 982, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry_1);

		// cherry_2
		const cherry_2 = scene.add.image(72, 982, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry_2);

		// cherry_3
		const cherry_3 = scene.add.image(380, 982, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry_3);

		// cherry_4
		const cherry_4 = scene.add.image(-58, 982, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry_4);

		// banana_1
		const banana_1 = scene.add.image(1386, 982, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_1);

		// banana_2
		const banana_2 = scene.add.image(1516, 982, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_2);

		// banana_3
		const banana_3 = scene.add.image(640, 982, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_3);

		// banana_4
		const banana_4 = scene.add.image(1126, 982, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_4);

		// banana_5
		const banana_5 = scene.add.image(1075, 283, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_5);

		// meat_1
		const meat_1 = scene.add.image(226, 1006, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		this.add(meat_1);

		// meat_2
		const meat_2 = scene.add.image(972, 1006, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		this.add(meat_2);

		/* START-USER-CTR-CODE */

		for (const sprite of this.sprites) {

			this.scene.physics.add.existing(sprite);

			sprite.setPosition(-sprite.displayHeight, sprite.y);
		}

		this.addSpawnEvent();


		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	get sprites() {

		return this.list as Phaser.Physics.Arcade.Image[];
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

		const next: Phaser.Physics.Arcade.Image = Phaser.Utils.Array.GetRandom(this.sprites
			.filter(s => s.x + s.displayWidth < cam.scrollX));

		let right = 0;

		for(const sprite of this.sprites) {

			if (sprite.x > right) {

				right = sprite.x + sprite.width;
			}
		}

		if (next) {

			next.x = Math.max(cam.scrollX + cam.width, right) + Phaser.Math.Between(100, 200);
			next.y = Phaser.Math.Between(cam.scrollY + next.height, cam.centerY);
			next.body.enable = true;
		}
	}

	itemTaken(item: Phaser.Physics.Arcade.Image) {

		item.body.enable = false;

		const y = item.y;

		this.scene.add.tween({
			targets: item,
			y: y - 100,
			alpha: 0,
			angle: 15 * Phaser.Utils.Array.GetRandom([1, -1]),
			duration: 200,
			ease: Phaser.Math.Easing.Quadratic.Out,
			onComplete: () => {

				item.angle = 0;
				item.alpha = 1;
				item.setPosition(this.scene.cameras.main.scrollX - item.width, y);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
