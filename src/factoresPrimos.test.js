
describe("factores primos", () => {
  it("deberia retornar una lista vacia para 1", () => {
    const primosfac = new primos();
    expect(primosfac.factorprimo(1)).toEqual([]);
  });
  it("deberia retornar una lista para [2]", () => {
    const primosfac = new primos();
    expect(primosfac.factorprimo(2)).toEqual([2]);
  });
  
});


class primos{
  factorprimo(n){
    let resulprimos = [];
    if (n>1)
    {
      resulprimos.push(2);
    }
    return resulprimos;
  }
}