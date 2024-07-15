import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProducto } from '../../../interfaces';
import { ModalComponent } from '../../modal/modal.component';
import { ProductosFormComponent } from '../productos-form/productos-form.component';
import { ProductoService } from './../../../services/producto.service';


@Component({
  selector: 'app-productos-list',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    ProductosFormComponent
  ],
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnChanges {
  @Input() itemList: IProducto[] = [];
  @Input() areActionsAvailable: boolean = false;
  public selectedItem: IProducto = {};
  private productoService = inject(ProductoService);
  public modalService = inject(NgbModal);
detailModal: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['areActionsAvailable']) {
      console.log('areActionsAvailable', this.areActionsAvailable);
    }
  }

  showDetailModal(item: IProducto, modal: any) {
    this.selectedItem = { ...item };
    modal.show();
  }

  onFormEventCalled(params: IProducto) {
    this.productoService.update(params);
    this.modalService.dismissAll();
  }

  deleteProducto(producto: IProducto) {
    this.productoService.delete(producto);
  }
}
