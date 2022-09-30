import {ITask, IProject, IApp, IUser} from "../interface/Interface";

class User implements IUser {
    constructor(
        public id = 0,
        public name = 'Anton'
    ) {
    };
};

class Task implements ITask {
    constructor(
        public id = 1,
        public durationInMin = 0,
        public completed = true,
        public developer: User
    ) {
    };

    getInfo(): string {
        return `${this.id} ${this.developer} ${this.completed} ${this.durationInMin}`
    };
};

class Project implements IProject {
    constructor(
        public tasks = []
    ) {
    };

    addTask(task: ITask) {
    };

    editTask(task: Partial<ITask>) {

    };

    deleteTask(id: number) {
        this.tasks.pop()
    };

    getTotalTime(): number {
        return 15
    };

    getAllTasksByDeveloper(id: number): ITask[] {
        return this.tasks
    };

};

class App implements IApp {
    constructor(
        public name = 'App',
        public projects: Project[]
    ) {};
    setName(name: string) {
        return   this.name
    };
    addProject(project: IProject) {

    };
};
