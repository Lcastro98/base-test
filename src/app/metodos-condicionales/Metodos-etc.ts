import { TipoTriangulo } from "./TipoTriangulo";

export class MetodosCondicionales {

  variable1: boolean = true;
  variable2: boolean = true;
  variable3: boolean = true;

  compra = true;

  constructor() {

  }

  probandoCondicionales(): string {
    if(this.variable1) {
      return 'variable 1 verdadero'
    } else if (this.variable2) {
      if(this.variable3) {
        return 'variable 2 y 3 verdaderas';
      }
      return 'variable 2 es verdadera'
    }
    return 'todas son falsas'
  }

  realizarCompra(): string {
    if(this.compra) {
      return 'Se ha realizado la copra con exito'
    }
    return 'No se ha realizado ninguna compra'
  }

  mayorEdad(edad: number): string {
    if(edad > 0 && edad < 18) {
      return 'La persona es menor de edad'
    }
    return 'La persona es mayor de edad'
  }

  numeroPar(numero: number): string {
    if(numero % 2 == 0) {
      return `${numero} es un número par`
    }
    return `${numero} es un número impar`
  }

  tipoTriangulo(L1:number, L2: number, L3: number): number {
    if (L1 == L2 && L1 == L3) {
      return TipoTriangulo.Equilatero;
    }
    if (L1 == L2 || L1 == L3 || L2 == L3){
      return TipoTriangulo.Isosceles;
    }
    return TipoTriangulo.Escaleno;
    }
}
