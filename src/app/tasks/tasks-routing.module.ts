import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'add',
  loadComponent: () =>
    import('./add/add.component').then((a) => a.AddComponent),
  data: { title: 'add to-do' },
}, {
  path: 'list',
  loadComponent: () =>
    import('./list/list.component').then((l) => l.ListComponent),
  data: { title: 'to-do list' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
