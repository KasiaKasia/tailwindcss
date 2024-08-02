import { DatePipe, NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { ExtendedTasksFiltr, Tasks } from '../../models/tasks';
import { FormsModule } from '@angular/forms';
import { TasksStore } from '../../store/tasks.store';
import { TasksService } from '../../services/tasks.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [TasksService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {

  @Input() items: any[] = [];
  protected columns: string[] = [];
  protected tasksStore = inject(TasksStore);
  protected tasksService = inject(TasksService);
  private destroyRef = inject(DestroyRef);
  filter: ExtendedTasksFiltr = {
    date: '',
    location: '',
    content: ''
  }

  ngOnInit(): void {
    if (this.items.length > 0) {
      this.columns = Object.keys(this.items[1]) as (keyof Tasks)[];
    }

    this.tasksService.fetchDataSequentially()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
      ).subscribe({
        next: response => { console.info('Wynik drugiego żądania:', response) },
        error: err => { console.error(err.message) },
        complete: () => { }
      });
  }
}


