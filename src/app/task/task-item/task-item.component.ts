import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Output() taskClick =new EventEmitter<void>();
  avatar:string;
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner? this.item.owner.avatar : 'unassigned';
  }
  onItemClick(){
    this.taskClick.emit();
  }
  onCheckBoxClick(e : Event):void {
    e.stopPropagation();
  }

}
