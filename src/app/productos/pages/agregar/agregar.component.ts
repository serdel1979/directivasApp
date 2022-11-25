import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent  {


  miFormulario: FormGroup = this.form.group({
    nombre: ['',Validators.required]
  })

  constructor(private form: FormBuilder) { }

  tieneError(campo: string): boolean{
    return !(this.miFormulario.get(campo)?.valid || false) && (this.miFormulario.touched);
  }

}
