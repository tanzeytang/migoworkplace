import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {ProjectListComponent} from './project-list/project-list.component';

const routes: Routes = [
    { path: 'project', component: ProjectListComponent }
];

@NgModule({
    imports: [
        SharedModule, 
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}
