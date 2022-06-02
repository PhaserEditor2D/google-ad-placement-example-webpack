declare type SoundKeys = "walk"|"sfx_hit"|"sfx_point"|"sfx_wing"|"sfx_swooshing";

export default class SoundManager {

    private  static _map: Map<string, Phaser.Sound.BaseSound> = new Map();

    static playSound(scene: Phaser.Scene, key: SoundKeys, forceToPlay = false) {

        let sound = this._map.get(key);

        if (!sound) {

            sound = scene.sound.add(key);

            this._map.set(key, sound);
        }
        
        if (forceToPlay || !sound.isPlaying) {

            sound.play();
        }
    }

    static stopSound(scene: Phaser.Scene, ...keys: SoundKeys[]) {

        for (const key of keys) {

            const sound = this._map.get(key);

            if (sound) {

                sound.stop();
            }
        }
    }
}