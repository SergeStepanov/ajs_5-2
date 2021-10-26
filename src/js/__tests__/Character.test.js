/* eslint-disable linebreak-style */

import Character from '../character';

const gamerCharacter = new Character('Gamer', 'Zombie');

gamerCharacter.attack = 40;
gamerCharacter.defence = 10;

test('Проверка базового класса Character', () => {
  const result = {
    health: 100,
    level: 1,
    name: 'Gamer',
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };

  expect(gamerCharacter).toEqual(result);
});

test('проерка на несоответствие имени', () => {
  expect(() => new Character('o')).toThrow('Имя должно быть строкой и содержать от 2 до 10 символов.');
});

test('проерка на отсутствие типа', () => {
  expect(() => new Character('oпана')).toThrow('Такой персонаж не существует.');
});

test('test this.damage(points)', () => {
  const result = {
    health: 64,
    level: 1,
    name: 'Gamer',
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  if (gamerCharacter.health > 0) {
    gamerCharacter.damage(40);
  }

  expect(gamerCharacter).toEqual(result);
});

test('тест this.levelUp() ', () => {
  const result = {
    health: 100,
    level: 2,
    name: 'Gamer',
    type: 'Zombie',
    attack: 48,
    defence: 12,
  };

  gamerCharacter.levelUp();

  expect(gamerCharacter).toEqual(result);
});

test('проерка ошибки на жизнь = 0 при this.levelUp()', () => {
  gamerCharacter.health = 0;

  expect(() => gamerCharacter.levelUp()).toThrow('Нельзя повысить левел умершего.(');
});
