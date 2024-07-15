import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasFormComponent } from '../../components/categoria/categorias-form/categorias-form.component';
import { CategoriasListComponent } from "../../components/categoria/categorias-list/categorias-list.component";
import { LoaderComponent } from "../../components/loader/loader.component";
import { ModalComponent } from '../../components/modal/modal.component';
import { ICategoria } from '../../interfaces';
import { AuthService } from '../../services/auth.service';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    LoaderComponent,
    CategoriasListComponent,
    ModalComponent,
    CategoriasFormComponent
  ],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  public categoriaService: CategoriaService = inject(CategoriaService);
  public modalService: NgbModal = inject(NgbModal);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public authService: AuthService = inject(AuthService);
  public routeAuthorities: string[] = [];
  public areActionsAvailable: boolean = false;

  ngOnInit(): void {
    this.authService.getUserAuthorities();
    this.categoriaService.getAll();
    this.route.data.subscribe(data => {
      this.routeAuthorities = data['authorities'] ? data['authorities'] : [];
      this.areActionsAvailable = this.authService.areActionsAvailable(this.routeAuthorities);
    });
  }

  onFormEventCalled(params: ICategoria) {
    this.categoriaService.save(params);
    this.modalService.dismissAll();
  }
}