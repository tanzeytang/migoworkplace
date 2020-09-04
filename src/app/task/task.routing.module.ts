import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {TaskHomeComponent} from './task-home/task-home.component';

const routes: Routes = [
    { path: 'tasklists', component: TaskHomeComponent }
];

@NgModule({
    imports: [SharedModule,RouterModule.forChild(routes)],
    exports: [RouterModule,SharedModule]
})
export class TaskRoutingModule {}
