
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FoodLayer extends Phaser.GameObjects.Layer {

	constructor(scene: Phaser.Scene) {
		super(scene);

		// meat
		const meat = scene.add.image(-1140, 259, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		this.add(meat);

		// apple
		const apple = scene.add.image(-917, 340, "volcano", "Tiny Caveman_Game Object - Apple.png");
		this.add(apple);

		// cherry
		const cherry = scene.add.image(-643, 275, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry);

		// banana
		const banana = scene.add.image(-831, 213, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana);

		// apple_1
		const apple_1 = scene.add.image(-719, 399, "volcano", "Tiny Caveman_Game Object - Apple.png");
		this.add(apple_1);

		// apple_2
		const apple_2 = scene.add.image(-541, 337, "volcano", "Tiny Caveman_Game Object - Apple.png");
		this.add(apple_2);

		// cherry_1
		const cherry_1 = scene.add.image(-490, 143, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry_1);

		// cherry_2
		const cherry_2 = scene.add.image(-306, 124, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry_2);

		// cherry_3
		const cherry_3 = scene.add.image(-247, 166, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry_3);

		// cherry_4
		const cherry_4 = scene.add.image(-121, 256, "volcano", "Tiny Caveman_Game Object - Cherry.png");
		this.add(cherry_4);

		// banana_1
		const banana_1 = scene.add.image(-997, 108, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_1);

		// banana_2
		const banana_2 = scene.add.image(-935, 43, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_2);

		// banana_3
		const banana_3 = scene.add.image(-800, 14, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_3);

		// banana_4
		const banana_4 = scene.add.image(-719, 40, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_4);

		// banana_5
		const banana_5 = scene.add.image(-690, 76, "volcano", "Tiny Caveman_Game Object - Banana.png");
		this.add(banana_5);

		// meat_1
		const meat_1 = scene.add.image(-1258, 202, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		this.add(meat_1);

		// meat_2
		const meat_2 = scene.add.image(-1475, 160, "volcano", "Volcano Level Set_Collectable Object - Meat.png");
		this.add(meat_2);

		// lists
		const sprites = [meat, apple, cherry, banana];

		this.sprites = sprites;

		/* START-USER-CTR-CODE */

		for (const sprite of this.sprites) {

			this.scene.physics.add.existing(sprite);
		}

		this.addSpawnEvent();


		/* END-USER-CTR-CODE */
	}

	private sprites: Phaser.GameObjects.Image[];

	/* START-USER-CODE */

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
