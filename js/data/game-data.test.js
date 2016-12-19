import assert from 'assert';
import {setLifes, setTimer, initialGame} from './game-data.js';

describe('Game Data', function () {
  describe('setLifes', function () {
    it('должен кидать исключение, если передано отрицательное значение жизней', function () {
      assert.throws(() => setLifes(initialGame, -1));
    });
    it('должен кидать исключение, если передано значение больше максимального значения жизней', function () {
      assert.throws(() => setLifes(initialGame, 4));
    });
    it('должен менять значение количества жизней в состоянии игры', function () {
      let game = setLifes(initialGame, 1);
      let testGame = Object.assign({}, initialGame, {lifes: 1});

      assert.deepEqual(game, testGame);
    });
  });

  describe('setTimer', function () {
    it('должен кидать исключение, если передано отрицательное значение таймера', function () {
      assert.throws(() => setTimer(initialGame, -1));
    });
    it('должен кидать исключение, если передано больше максимального значения таймера', function () {
      assert.throws(() => setTimer(initialGame, 31));
    });
    it('должен изменять значение таймера в состоянии игры', function () {
      let game = setTimer(initialGame, 25);

      assert.strictEqual(game.timer, 25);
    });
  });
});
