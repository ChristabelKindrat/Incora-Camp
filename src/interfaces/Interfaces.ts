interface IUser {
    id: number;
    name: string;
};


interface ITask {
    id: number;
    durationInMin: number;
    completed: boolean;
    developer: IUser;

    getInfo(): string;
};


interface IProject {
    tasks: ITask[];

    addTask(task: ITask): void;

    editTask(task: Partial<ITask>): void;

    deleteTask(id: number): void;

    getTotalTime(): number;

    getAllTasksByDeveloper(id: number): ITask[];
};


interface IApp {
    name: string;

    setName(name: string): void;}

export type {IApp,IProject,ITask,IUser};