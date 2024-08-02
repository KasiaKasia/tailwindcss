import { Tasks } from "../../models/tasks";

 
export const tasks: Tasks[] = [
    {
        id: 1,
        date: new Date('2024-07-26'),
        location: 'Turyn',
        content: 'Prepare quarterly report',
        display: true        
    },
    {
        id: 2,
        date: new Date('2024-08-05'),
        location: 'Home',
        content: 'Clean the garage',
        display: false,
        latitude: -29.33333,
        longitude: 21.15,
        temperature: '20 °C'
    },
    {
        id: 3,
        date: new Date('2024-07-10'),
        location: 'Client Site',
        content: 'Meeting with client',
        display: true,
        temperature: '11 °C'
    },
    {
        id: 4,
        content: 'Buy groceries',
        display: true,
        latitude: 39.21399,
        longitude: -79.63701,
        temperature: '30 °C'
    },
    {
        id: 5,
        date: new Date('2024-07-15'),
        location: 'Gym',
        content: 'Workout session',
        display: false
    },
    {
        id: 6,
        date: new Date('2024-10-20'),
        content: 'Family dinner',
        display: true
    },
    {
        id: 7,
        location: 'Library',
        content: 'Return books',
        display: false
    },
    {
        id: 8,
        date: new Date('2024-07-25'),
        location: 'Park',
        content: 'Morning jog',
        latitude: 31.21399,
        longitude: -70.43,
        display: true
    },
    {
        id: 9,
        content: 'Write blog post',
        display: false,
        temperature: '11 °C'
    },
    {
        id: 10,
        date: new Date('2024-07-30'),
        location: 'Coffee shop',
        content: 'Read a book',
        display: true
    }
];
