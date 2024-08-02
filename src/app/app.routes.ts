import { Routes } from '@angular/router';

export const routes: Routes = [
   {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then(s => s.TasksModule)
    },
];
