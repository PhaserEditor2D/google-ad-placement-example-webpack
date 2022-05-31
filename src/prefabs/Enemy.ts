import Phaser from "phaser";

export default class Enemy extends Phaser.Physics.Arcade.Image {

    constructor(scene: Phaser.Scene, x: number, y: number, key: string, frame: string|number) {
        super(scene, x, y, key, frame);

        scene.physics.add.existing(this);
        
        this.body.immovable = true;
    }
}