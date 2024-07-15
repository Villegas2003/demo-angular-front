import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from "../../components/loader/loader.component";
import { ModalComponent } from '../../components/modal/modal.component';
import { ProductosFormComponent } from '../../components/producto/productos-form/productos-form.component';
import { ProductosListComponent } from "../../components/producto/productos-list/productos-list.component";
import { IProducto } from '../../interfaces';
import { AuthService } from '../../services/auth.service';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    LoaderComponent,
    ProductosListComponent,
    ModalComponent,
    ProductosFormComponent
    ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public productoService: ProductoService = inject(ProductoService);
  public modalService: NgbModal = inject(NgbModal);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public authService: AuthService = inject(AuthService);
  public routeAuthorities: string[] = [];
  public areActionsAvailable: boolean = false;

  ngOnInit(): void {
    this.authService.getUserAuthorities();
    this.productoService.getAll();
    this.route.data.subscribe(data => {
      this.routeAuthorities = data['authorities'] ? data['authorities'] : [];
      this.areActionsAvailable = this.authService.areActionsAvailable(this.routeAuthorities);
    });
  }

  onFormEventCalled(params: IProducto) {
    this.productoService.save(params);
    this.modalService.dismissAll();
  }
}