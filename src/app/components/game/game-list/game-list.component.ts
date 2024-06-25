import { Component, Input } from '@angular/core';
import { IGame } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../modal/modal.component';
import { GameFormComponent } from '../game-form/game-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    GameFormComponent
  ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  @Input() itemList: IGame[] = [];
  public selectedItem: IGame = {};

  showDetail(item: IGame, modal: any){
    console.log('Detail item', item);
    this.selectedItem = item;
    modal.show();
  }

}
