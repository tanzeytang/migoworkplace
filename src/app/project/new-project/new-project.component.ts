import { Component, OnInit, Inject } from '@angular/core';
//MAT_DIALOG_DATA是material提供的一个令牌用于从dialog发送方获取数据；
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
//使用inject注入令牌MAT_DIALOG_DATA来获取我们从dialog那边传递过来的data；
//使用第二个引用指定类型是component，这样我们就把对应的component作为引用的目标
  title: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewProjectComponent>,
    
    ) { }

  ngOnInit() {
    console.log(this.data);
    this.title = this.data.title;
    //获取当前这一层的组件并且给它添加一个class为黑模式
    //this.oc.getContainerElement().className = this.data.dark ? 'myapp-dark-theme' : null;
  }
  onClick(){
    this.dialogRef.close('I received your message');
  }

}
