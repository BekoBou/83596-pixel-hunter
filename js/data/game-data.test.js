import assert from 'assert';

import {setLifes, setTimer, initialGame} from './game-data.js';

describe('Game Data', function () {
  describe('setLifes', function () {
    it('Попытка присвоить отрицательное количество жизней', function () {
      assert.throws(() => setLifes(initialGame, -1));
    });
    it('Попытка присвоить больше максимального количества жизней', function () {
      assert.throws(() => setLifes(initialGame, 4));
    });
    it('Присвоение корректного количества жизней', function () {
      let game = setLifes(initialGame, 1);
      let testGame = Object.assign({}, initialGame, {lifes: 1});

      assert.deepEqual(game, testGame);
    });
  });

  describe('setTimer', function () {
    it('Попытка присвоить отрицательное значение таймера', function () {
      assert.throws(() => setTimer(initialGame, -1));
    });
    it('Попытка присвоить больше максимального значения таймера', function () {
      assert.throws(() => setTimer(initialGame, 31));
    });
    it('Присвоение корректного значения таймера', function () {
      let game = setTimer(initialGame, 25);

      assert.strictEqual(game.timer, 25);
    });
  });
});
