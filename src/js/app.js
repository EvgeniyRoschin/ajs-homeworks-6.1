/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
/* eslint-disable keyword-spacing */

export default function Character(name, type) {
  if (name.length > 2 && name.length < 11) {
    this.name = name;
  } else {
    throw new Error(`${name} должен содержать от 2 до 10 символов`);
  }

  const characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  if (characterTypes.includes(type)) {
    this.type = type;
  } else {
    throw new Error(`${type} может быть только Bowman, Swordsman, Magician, Daemon, Undead, Zombie`);
  }

  this.health = 100;
  this.level = 1;

  switch(this.type) {
    case 'Bowman':
      this.attack = 25;
      this.protection = 25;
    case 'Swordsman':
      this.attack = 40;
      this.protection = 10;
    case 'Magician':
      this.attack = 10;
      this.protection = 40;
    case 'Daemon':
      this.attack = 10;
      this.protection = 40;
    case 'Undead':
      this.attack = 25;
      this.protection = 25;
    case 'Zombie':
      this.attack = 40;
      this.protection = 10;
  }
}
