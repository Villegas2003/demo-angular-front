import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategoria, IProducto } from '../../../interfaces';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-productos-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.scss']
})
export class ProductosFormComponent implements OnInit {
  @Input() title: any;
  @Input() toUpdateProducto: IProducto = {};
  @Output() callParentEvent: EventEmitter<IProducto> = new EventEmitter<IProducto>();

  public categorias: ICategoria[] = [];
  private categoriaService = inject(CategoriaService);

  ngOnInit(): void {
    this.categorias = this.categoriaService.items$();
    this.categoriaService.getAll();
  }

  addEdit() {
    // Construir el objeto Producto con la estructura correcta
    const producto = {
      ...this.toUpdateProducto,
      categoria: { id: this.toUpdateProducto.categoriaId }
    };
    console.log('Producto a enviar:', producto); // Verifica en la consola
    this.callParentEvent.emit(producto);
  }
}
