import { computed } from '@angular/core';
import {
    signalStore,
    withComputed,
    withState,
    patchState,
    withMethods,
    withHooks,
} from '@ngrx/signals';
import { tasks } from '../services/data/tasks';
import { Tasks } from '../models/tasks';

type TasksState = {
    tasks: Tasks[];
    isLoading: boolean;
};

const initialState: TasksState = {
    tasks: [...tasks],
    isLoading: false,
};

const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

const today = new Date()
today.setHours(0, 0, 0, 0);

export const TasksStore = signalStore(
    { providedIn: 'root' },

    withState(initialState),
    withComputed(({ tasks }) => ({
        tasksCount: computed(() => {
            const filteredTasks = tasks().filter(task => {
                if (task.date) {
                    const taskDate = new Date(task.date);
                    taskDate.setHours(0, 0, 0, 0);
                    return taskDate >= today;
                }
                return false;
            })
            return filteredTasks.length
        }),

    })),
    withMethods((store) => ({
        setDisplayFilter(display: boolean,) {
            let filterDisplay: Tasks[] = []
            display ? filterDisplay = tasks.filter((c) => c.display === display) : filterDisplay = tasks

            patchState(store, { tasks: filterDisplay, isLoading: true });
        },
        addTask(newTask: Tasks) {

            patchState(store, ({ tasks }) => ({ tasks: [...tasks, newTask], isLoading: true }));

        },
        filters(valueDate: string = '', valueLocation: string = '', valueContent: string = '') {
            const filter = [...tasks].filter((task) => {

                const matchesDate = valueDate
                    ? task.date && formatDate(task.date).includes(valueDate)
                    : true;
                const matchesLocation = valueLocation
                    ? task.location && task.location.toLowerCase().includes(valueLocation.toLowerCase())
                    : true;
                const matchesContent = valueContent
                    ? task.content && task.content.toLowerCase().includes(valueContent.toLowerCase())
                    : true;

                return matchesDate && matchesLocation && matchesContent;
            });
            patchState(store, { tasks: filter, isLoading: true });
        },
        filter(value: string = '') {
            const formattedValue = value.toLowerCase();
        console.log(value)
            const filter = tasks.filter(task => {
                const matchesDate = task.date ? formatDate(task.date).toLowerCase().includes(formattedValue) : false;
                const matchesLocation = task.location ? task.location.toLowerCase().includes(formattedValue) : false;
                const matchesContent = task.content ? task.content.toLowerCase().includes(formattedValue) : false;
        
                return matchesDate || matchesLocation || matchesContent;
            });
        
            patchState(store, { tasks: filter, isLoading: true });

        }
    }))
)



