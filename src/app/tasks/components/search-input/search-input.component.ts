import { Component, inject } from '@angular/core';
import { TasksStore } from '../../store/tasks.store';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
 
})
export class SearchInputComponent {
  protected tasksStore = inject(TasksStore);
  filter = { filter: ''}
}
