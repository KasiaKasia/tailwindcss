import { Component, inject } from '@angular/core';
import { TasksStore } from '../../store/tasks.store';

@Component({
  selector: 'app-sliding-checkbox',
  standalone: true,
  templateUrl: './sliding-checkbox.component.html',
  styleUrl: './sliding-checkbox.component.scss'
})
export class SlidingCheckboxComponent {
  protected tasksStore = inject(TasksStore);

  toggleVisibility(event: Event): void {
    this.tasksStore.setDisplayFilter((event.target as HTMLInputElement).checked)
  }
}
