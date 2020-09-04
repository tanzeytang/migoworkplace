import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-comfirm-dialog',
  template: `
     <h3 mat-dialog-title >{{ title }}</h3>
  <div mat-dialog-content>
    {{ content }}
  </div>
  <div mat-dialog-actions>
    <button type="button" mat-raised-button color="primary" (click)="onClick(true)">Yes</button>
    <button type="button" mat-button mat-dialog-close (click)="onClick(false)">Cancel</button>
  </div>
  `,
  styles: []
})
export class ComfirmDialogComponent implements OnInit {
  title: string = '';
  content: string = '';
  constructor(private dialogRef: MatDialogRef<ComfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  onClick(result: boolean){
    this.dialogRef.close(result);
  }

}
