import { Component, Input } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  faXmark = faXmark;

  @Input() closeFunc: Function;

  closeModal(event: Event) {
    event.stopPropagation();
    if((event.target as HTMLElement).classList.contains('modal'))
      this.closeFunc();
  }
}
