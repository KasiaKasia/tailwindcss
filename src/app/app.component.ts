import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { TasksStore } from './tasks/store/tasks.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, NgClass, RouterModule],
  providers:[TasksStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  faGhost = faGhost;
  menuOpen = false;
  readonly tasksStore = inject(TasksStore);

}
