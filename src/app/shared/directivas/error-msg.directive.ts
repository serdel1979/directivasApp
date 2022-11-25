import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement!: ElementRef<HTMLElement>;

  @Input() set color( valor: string){       //<---- esta funcion es un setter, se usa para cambiar una propiedad de manera dinámica
    this.htmlElement.nativeElement.style.color=valor;
  }

  @Input() mensaje: string='Requerido';

  @Input() set valido(esValido: boolean){
    if(esValido){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }


  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
    console.log(el);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor(){
    this.htmlElement.nativeElement.style.color=this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }


}
