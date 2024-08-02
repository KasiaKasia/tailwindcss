export interface Tasks {
    id: number;
    date?: Date;
    location?: string;
    content?: string;
    display?: boolean;
    latitude?: number;
    longitude?: number;
    temperature?: string;
}
export type TasksFiltr = Omit<Tasks, 'id'| 'date' | 'display' | 'latitude' | 'longitude' | 'temperature'>;

export type ExtendedTasksFiltr = TasksFiltr & {
    date: string;
};

