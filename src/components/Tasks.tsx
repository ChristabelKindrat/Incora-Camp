import {ITask, IProject, IApp, IUser} from "../interfaces/Interface";
import React, {FC} from 'react';


const Tasks: FC = () => {
    return (
        <div style={{
            height: 350,
            width: 950,
            margin: 10,
            borderRadius: 15,
            backgroundColor: "white"
        }}>
            <ol>
                <li style={{padding: 20}}>Starting the TypeScript Project</li>
                <li style={{padding: 20}}>Compiling the TypeScript Project</li>
                <li style={{padding: 20}}>Using Google TypeScript Style to Lint and Correct Your Code</li>
                <li style={{padding: 20}}>Add and commit your code with Git</li>
            </ol>
        </div>
    );
}
export {Tasks};
// class User implements IUser {
//     constructor(
//         public id = 0,
//         public name = 'Anton'
//     ) {
//     };
// };
//
// class Task implements ITask {
//     constructor(
//         public id = 1,
//         public durationInMin = 0,
//         public completed = true,
//         public developer: User
//     ) {
//     };
//
//     getInfo(): string {
//         return `${this.id} ${this.developer} ${this.completed} ${this.durationInMin}`
//     };
// };
//
// class Project implements IProject {
//     constructor(
//         public tasks = []
//     ) {
//     };
//
//     addTask(task: ITask) {
//     };
//
//     editTask(task: Partial<ITask>) {
//
//     };
//
//     deleteTask(id: number) {
//         this.tasks.pop()
//     };
//
//     getTotalTime(): number {
//         return 15
//     };
//
//     getAllTasksByDeveloper(id: number): ITask[] {
//         return this.tasks
//     };
//
// };
//
// class App implements IApp {
//     constructor(
//         public name = 'App',
//         public projects: Project[]
//     ) {};
//     setName(name: string) {
//         return   this.name
//     };
//     addProject(project: IProject) {
//
//     };
// };
