class Retangulo
{
  constructor(altura, largura)
  {
      this.altura = altura;
      this.largura = largura;
  }
  mostrarAtributos()
  {
    return "Altura: " + this.altura + " Largura: " + this.largura;
  }
  calcularArea()
  {
    return "Área do retângulo: " + this.largura * this.altura;
  }
  area()
  {
    return this.calcularArea();
  }
}

let quadrado = new Retangulo("10", "10");
let retangulo = new Retangulo("60", "30");
let quad = new Retangulo("20", "20")

console.log(quadrado.area())
console.log(retangulo.area())
//console.log(quadrado.mostrarAtributos())
//console.log(quadrado.calcularArea())
//console.log(retangulo.mostrarAtributos())
//console.log(retangulo.calcularArea())