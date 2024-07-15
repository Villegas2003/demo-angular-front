import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICategoria } from '../../../interfaces';
import { CategoriaService } from '../../../services/categoria.service';
import { ModalComponent } from '../../modal/modal.component';
import { CategoriasFormComponent } from '../categorias-form/categorias-form.component';

@Component({
  selector: 'app-categorias-list',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    CategoriasFormComponent
  ],
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnChanges {
  @Input() itemList: ICategoria[] = [];
  @Input() areActionsAvailable: boolean = false;
  public selectedItem: ICategoria = {};
  private categoriaService = inject(CategoriaService);
  public modalService = inject(NgbModal);
  detailModal: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['areActionsAvailable']) {
      console.log('areActionsAvailable', this.areActionsAvailable);
    }
  }

  showDetailModal(item: ICategoria, modal: any) {
    this.selectedItem = { ...item };
    modal.show();
  }

  onFormEventCalled(params: ICategoria) {
    this.categoriaService.update(params);
    this.modalService.dismissAll();
  }

  deleteCategoria(categoria: ICategoria) {
    this.categoriaService.delete(categoria);
  }
}
