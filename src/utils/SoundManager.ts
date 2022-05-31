declare type SoundKeys = "walk"|"sfx_hit"|"sfx_point"|"sfx_wing"|"sfx_swooshing";

export default class SoundManager {

    static playSound(scene: Phaser.Scene, key: SoundKeys, forceToPlay = false) {

        const sound = scene.sound.get(key);
        
        if (!sound || !sound.isPlaying || forceToPlay) {

            scene.sound.play(key);
        }
    }

    static stopSound(scene: Phaser.Scene, ...keys: SoundKeys[]) {

        for (const key of keys) {

            const sound = scene.sound.get(key);

            if (sound) {

                sound.stop();
            }
        }
    }
}