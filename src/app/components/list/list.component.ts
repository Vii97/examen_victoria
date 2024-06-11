import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() listInput: any;
  
  @Output() listOutput = new EventEmitter<any>();

  remoted: boolean = false;

  remote() {
    this.remoted = !this.remoted
  }


  onDelete() {
    this.listOutput.emit(this.listInput)
  }
}
