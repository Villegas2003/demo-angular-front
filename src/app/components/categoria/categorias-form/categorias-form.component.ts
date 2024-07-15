import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategoria } from '../../../interfaces';

@Component({
  selector: 'app-categorias-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.scss']
})
export class CategoriasFormComponent {
  @Input() title: any;
  @Input() toUpdateCategoria: ICategoria = {};
  @Output() callParentEvent: EventEmitter<ICategoria> = new EventEmitter<ICategoria>();

  addEdit()  {
    this.callParentEvent.emit(this.toUpdateCategoria);
  }
}
