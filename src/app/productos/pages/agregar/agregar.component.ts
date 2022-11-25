import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent  {


  texto1: string = 'Un gran texto';
  color: string = 'red';

  miFormulario: FormGroup = this.form.group({
    nombre: ['',Validators.required]
  })

  constructor(private form: FormBuilder) { }

  tieneError(campo: string): boolean{
    return !(this.miFormulario.get(campo)?.valid || false);
  }


  cambiarNombre(){
    this.texto1 = 'SDL';
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
