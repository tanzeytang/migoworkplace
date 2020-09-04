import { Component, OnInit,Input, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss']
})
export class CopyTaskComponent implements OnInit {
  lists: any[];
  //这里的令牌是注入了一个dialog传递过来的的data对象，是父组件传递到这个组件来的
  constructor(@Inject(MAT_DIALOG_DATA) private data,
  private dialogRef: MatDialogRef<CopyTaskComponent>) { }

  ngOnInit() {
    this.lists = this.data.lists;
  }

}
