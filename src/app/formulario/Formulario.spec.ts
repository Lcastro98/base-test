import { FormBuilder } from "@angular/forms";
import { unFormulario } from "./Formulario";

describe('Probado Formulario', () => {

    const componente = new unFormulario(new FormBuilder());
    
    it('primera prueba formulario', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
      });
    
    it('probando validor email es requerido', () => {
        const control = componente.form.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalsy();
    });
    
    it('probando validor email es tipo Emai', () => {
        const control = componente.form.get('email');
        control?.setValue('sofka@sofka.com.co');
        expect(control?.valid).toBeTruthy();
    });
})