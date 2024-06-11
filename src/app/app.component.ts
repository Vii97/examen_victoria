import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'victoria_examen';
  employers: any[] = [];

  // Función que reciba la información del formulario y se añadan los datos en el array
  addEmployer(employer:any) {
    this.employers.push(employer)
  }

  // Función que borra la caja de la ciudad
  deleteEmployer(employer:any) {
    this.employers = this.employers.filter(item => item !== employer)
  }

}
