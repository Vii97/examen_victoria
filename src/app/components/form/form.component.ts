import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
   // Importo Output para pasar la información del formulario (hijo) al componente app (padre)
   @Output() formOutput = new EventEmitter<any>();


   // Hago un grupo de datos que recoge el formulario de ciudades
   eForm = this.fb.group({
     name: ["", [Validators.required]],
     surname: ["", [Validators.required]],
     job: ["", Validators.required],
     tlf: ["", Validators.required]
   });
 
   // Constructor del FormBuilder, un reactive form para hacer formularios
   constructor(private fb: FormBuilder) {
   }
 
   // Función para mandar los datos del formulario
   submit() {
     console.log(this.eForm.value);
 
     //Pasar al componente padre
     this.formOutput.emit(this.eForm.value)
 
     // Limpio los campos
     this.eForm.patchValue({
       name: "",
       surname: "",
       job: "",
       tlf: ""
     })
   }
 
}
