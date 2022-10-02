import { InputsOutputsComponent } from "./InputsOutputs";

describe('Probando inputs y outputs', () => {

    let componente : InputsOutputsComponent;

    beforeEach(() => {
        componente = new InputsOutputsComponent();
    })
    
    it('probando input', () => {
        expect(componente.entrada).toBe('default');
        componente.borrarEntrada();
        expect(componente.entrada).toBe('');
      });
    
      it('probando output', () => {
        const ARG: string = 'emitiendo';
        componente.salida.subscribe(valor => {
          expect(valor).toBe(ARG)
        });
        componente.emitirAlgo(ARG);
      });
    
})