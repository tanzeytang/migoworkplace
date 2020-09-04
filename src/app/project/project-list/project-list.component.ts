import { Component, OnInit,Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewProjectComponent} from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ComfirmDialogComponent } from 'src/app/shared/comfirm-dialog/comfirm-dialog.component';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
 
  projects = [
    {
      "name": "work place",
      "desc": "this is a work place",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "name": "work place2",
      "desc": "this is a work place2",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }
  openNewProjectDialog(){
    //这里我们通过把这个open的组件赋值给这个常量，然后因为我们这个组件其实在自己的component里面是赋值给一个引用的，
    //并且这个组件里点击save还会传一个数据传回组件，所以我们可以继续用这个组件的关闭后的数据去做一些事情：
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{title:'Add Project'}});
    dialogRef.afterClosed().subscribe(res=>console.log(res));
  }
  launchInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
  }
  launchEditDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{title: "Edit Project"}});
  }
  launchDeleteDialog(){
    const dialogRef = this.dialog.open(ComfirmDialogComponent,{data:{title:"Remove Project",content:"Are you sure delete this project?"}});
    dialogRef.afterClosed().subscribe(res=>console.log(res));
  }

}
