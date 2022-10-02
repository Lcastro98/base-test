import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'base-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.title = 'base-test'
    expect(app.title).toEqual('base-test');
  });
    
  it('probando ngModel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const componente = fixture.componentInstance;
    const htmlElemento: DebugElement[] = fixture.debugElement.queryAll(By.css('h2'));
    componente.title = 'Casa Sofka'
    fixture.detectChanges();
    expect(htmlElemento[0].nativeElement.innerHTML).toBe('Casa Sofka');  
    componente.title = 'estoy en casa';
    fixture.detectChanges();
    expect(htmlElemento[0].nativeElement.innerHTML).toBe('estoy en casa');
  });

});
