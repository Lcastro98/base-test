import { MetodosCondicionales } from './Metodos-etc';
describe('Probando metodos y condicionales', () => {

    let componente: MetodosCondicionales;

    beforeEach(() => {
        componente = new MetodosCondicionales();
    })
    
    it('Probando metodo condicionales', () => {
        expect(componente.probandoCondicionales()).toBe('variable 1 verdadero')
    });
    
    it('Probando variable 1 falsa', () => {
        componente.variable1 = false
        expect(componente.probandoCondicionales()).toBe('variable 2 y 3 verdaderas')
    });
    
    it('Probando variable 1 y 3 falsa', () => {
        componente.variable1 = false
        componente.variable3 = false
        expect(componente.probandoCondicionales()).toBe('variable 2 es verdadera')
    });
    
    it('Probando variable 1 y 3 falsa', () => {
        componente.variable1 = false
        componente.variable2 = false
        componente.variable3 = false
        expect(componente.probandoCondicionales()).toBe('todas son falsas')
    });

    it('Probando realizar compra', () => {
        expect(componente.realizarCompra()).toBe('Se ha realizado la copra con exito')
    });

    it('Probando compra falsa', () => {
        componente.compra = false
        expect(componente.realizarCompra()).toBe('No se ha realizado ninguna compra')
    });

    it('Probando mayoría edad', () => {
        const edad = 18
        expect(componente.mayorEdad(edad)).toBe('La persona es mayor de edad')
    });

    it('Probando menoría de edad', () => {
        const edad = 12
        expect(componente.mayorEdad(edad)).toBe('La persona es menor de edad')
    });

    it('Probando numero par', () => {
        const numero = 2
        expect(componente.numeroPar(numero)).toBe('2 es un número par')
    });

    it('Probando numero impar', () => {
        const numero = 3
        expect(componente.numeroPar(numero)).toBe('3 es un número impar')
    });

    it('Probando triangulo equilatero', () => {
        const L1 = 2
        const L2 = 2
        const L3 = 2
        expect(componente.tipoTriangulo(L1, L2, L3)).toBe(0)
    });

    it('Probando triangulo isosceles', () => {
        const L1 = 2
        const L2 = 2
        const L3 = 1
        expect(componente.tipoTriangulo(L1, L2, L3)).toBe(1)
    });

    it('Probando triangulo escaleno', () => {
        const L1 = 1
        const L2 = 2
        const L3 = 3
        expect(componente.tipoTriangulo(L1, L2, L3)).toBe(2)
    });
});