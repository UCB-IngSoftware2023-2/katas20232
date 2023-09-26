const Game = require ("./Game.js");
let g;
beforeEach(() => {
  g = new Game();
})

describe("Bowling Game Test", () => {
  it("deberia devolver 0 porque el jugador no derribo ningun pin en los 10 turnos", () => {
    for(let i=0; i < 20; i ++){
      g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });

  it("deberia devolver 20 porque el jugador derribo un pin en los 10 turnos", () => {
    for(let i=0; i < 20; i ++){
      g.roll(1);
    }
    expect(g.score()).toEqual(20);
  });
});
