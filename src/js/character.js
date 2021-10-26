/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable linebreak-style */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.health = 100;
    this.level = 1;

    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error(
        'Имя должно быть строкой и содержать от 2 до 10 символов.',
      );
    }

    if (
      (typeof type === 'string')
      && (type === 'Bowerman'
      || type === 'Swordsman'
      || type === 'Magician'
      || type === 'Daemon'
      || type === 'Undead'
      || type === 'Zombie')
    ) {
      this.type = type;
    } else {
      throw new Error('Такой персонаж не существует.');
    }
  }

  levelUp() {
    if (this.health > 0) {
      const percent = 20;

      this.level += 1;
      this.health = 100;
      this.attack += Number(this.attack / 100 * percent);
      this.defence += Number(this.defence / 100 * percent);
    } else {
      throw new Error('Нельзя повысить левел умершего.(');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
