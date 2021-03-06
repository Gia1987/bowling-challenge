'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('rolls gutter game when players misses all pins', function(){
    rollMany(0,20);
    expect(game.score()).toBe(0);
  });

  it('returns a score of 20 when player hits one pin per roll', function(){
    rollMany(1,20);
    expect(game.score()).toBe(20);
  });


  it('can roll a spare', function(){
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0,17);
    expect(game.score()).toBe(16);
  });

  it('can roll a strike', function(){
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollMany(0,16);
    expect(game.score()).toBe(24);
  });

  it('can roll a perfect game', function(){
    rollMany(10,12);
    expect(game.score()).toBe(300);
  });

  var rollMany = function(pins, rolls){
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };
});
