import { Component, OnInit, Inject} from '@angular/core';
import {MatDatepickerToggle} from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  title: string ="";
  priorities =[
    {
      label: 'emergency',
      value: 3
    },
    {
      label: 'important',
      value: 2
    },
    {
      label: 'normal',
      value: 1
    }
  ];
  constructor(@Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title= this.data.title;
    console.log(JSON.stringify(this.data.task));
  }

}
