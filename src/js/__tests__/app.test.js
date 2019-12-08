/* eslint-disable linebreak-style */
import Character from '../app';

test('correct data', () => {
  const sample = new Character('user123', 'Daemon');
  const result = {
    name: 'user123',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 40,
    protection: 10,
  };

  expect(sample).toEqual(result);
});

test('uncorrect name', () => {
  expect(() => new Character('user1231414141', 'Daemon')).toThrowError('user1231414141 должен содержать от 2 до 10 символов');
});

test('uncorrect type', () => {
  expect(() => new Character('user123', 'Damon')).toThrowError('Damon может быть только Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
