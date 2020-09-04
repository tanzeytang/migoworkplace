import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import {  ComfirmDialogComponent  } from '../../shared/comfirm-dialog/comfirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id:1,
      name:"Not Start",
      
      tasks:[
        {
          id:1,
        desc:'task1: get the azure work under high avalibility,try to describe more and more test it again and again, carefully, to do it try your best',
        priority:2,
        completed:true,
        owner:{
          id:1,
          name:'tanzey',
          avatar:'avatars:svg-1'
        },
        dueDate: new Date(),
        },
        {
          id:3,
        desc:'task3: get the azure work under high avalibility',
        priority:1,
        completed:true,
        owner:{
          id:3,
          name:'Faye',
          avatar:'avatars:svg-3'
        },
        dueDate: new Date(),
        },
        {
          id:2,
        desc:'task2: get the azure work under high avalibility',
        priority:3,
        completed:true,
        owner:{
          id:2,
          name:'James',
          avatar:'avatars:svg-2'
        },
        dueDate: new Date(),
        },
      ]
    },
    {
      id:2,
      name:"In Processing",
      tasks:[
        {
          id:2,
        desc:'task2: get the docker work',
        priority:2,
        completed:false,
        reminder:new Date(),
        owner:{
          id:1,
          name:'kevin',
          avatar:'avatars:svg-1'
        },
        dueDate: new Date(),
        },
      ]
    },
    {
      id:3,
      name:"Completed",
      tasks:[
        {
          id:3,
        desc:'task3: Laravel contribution',
        priority:3,
        completed:true,
        reminder:new Date(),
        owner:{
          id:1,
          name:'tanzey',
          avatar:'avatars:svg-4'
        },
        dueDate: new Date(),
        },
      ]
    },

  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  launchNewTaskDialog(){
    this.dialog.open(NewTaskComponent,{data: {title:'Task Create:'}});

  }
  launchCopyTaskDialog(){
    const dialogRef = this.dialog.open(CopyTaskComponent,{data:{lists: this.lists  }})

  }
  launchUpdateTaskDialog(task){
    const dialogRef = this.dialog.open(NewTaskComponent,{data:{title: "Task Modification:", task: task  }})
  }
  launchComfirmDeleteListDialog(){
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {data:{title:"Remove Task",content:"Are you sure remove this task?"}});
    dialogRef.afterClosed().subscribe(res=>console.log(res));
  }
  launchEditListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent, {data:{title:"Edit Task"}});
    dialogRef.afterClosed().subscribe(res=>console.log(res));
  }
  launchNewListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent, {data:{title:"Add Task"}});
    dialogRef.afterClosed().subscribe(res=>console.log(res));
  }

}
