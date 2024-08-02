import { Component, inject } from '@angular/core';
import { TasksStore } from '../store/tasks.store';
import { TableComponent } from '../components/table/table.component';
import { SlidingCheckboxComponent } from '../components/sliding-checkbox/sliding-checkbox.component';
import { SearchInputComponent } from '../components/search-input/search-input.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableComponent, SlidingCheckboxComponent, SearchInputComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  protected readonly tasksStore = inject(TasksStore);
}
