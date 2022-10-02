import { dos, primeros, tres } from "./Inicio";

describe('Probando Inicio', () => {

    it('Probando Primeros', () => {
        const resultado = primeros();
        expect(resultado).toEqual("Hola que hace");
    })

    it('Debe retornar una cadena que contenga el argumento', () => {
        const resultado = dos('sofka');
        expect(resultado).toBe("Hola sofka");
        expect(resultado).toContain('sofka');
      });
    
      it('Debe agregar el argumento al arreglo', () => {
        const resultado = tres('sofkaU');
        expect(resultado).toContain('sofkaU');
        expect(resultado.length).toBe(3);
      });
})