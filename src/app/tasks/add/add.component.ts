import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksStore } from '../store/tasks.store';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, JsonPipe, NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  private formBuilder = inject(FormBuilder)
  protected readonly tasksStore = inject(TasksStore);
  protected isVisible: boolean = false;
  readonly message: string = "Dane zostały zapisane";

  formBuilderGroup: FormGroup = this.formBuilder.group({
    date: this.formBuilder.control(''),
    location: this.formBuilder.control(''),
    content: this.formBuilder.control('', [Validators.maxLength(255)]),
    display: this.formBuilder.group({
      selected: this.formBuilder.control(''),
    })
  });

  findMaxIdInTasks(): number {
    let maxId = 0
    this.tasksStore.tasks().map((object: Tasks) => maxId = Math.max(object.id));
    return maxId
  }

  save() {
    if (this.formBuilderGroup.invalid) return

    if (this.formBuilderGroup.dirty && this.formBuilderGroup.valid) {

      const newTask: Tasks = {
        id: this.findMaxIdInTasks() + 1,
        date: this.formBuilderGroup.value.date,
        location: this.formBuilderGroup.value.location,
        content: this.formBuilderGroup.value.content,
        display: this.formBuilderGroup.value.display.selected
      } 
      this.tasksStore.addTask(newTask)
      this.formBuilderGroup.reset()
      this.showMessage()
    }
  }


  showMessage() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 2000); 
  }
}
