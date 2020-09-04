import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  items=[
    {id:1,name:'tanzey'},
    {id:2,name:'heaven'},
    {id:3,name:'christina'},
    {id:4,name:'faye'},
    {id:5,name:'kevin'},
  ]

  constructor() { }

  ngOnInit() {

  }
  displayUser(user: {id: string; name: string}){
    return user ? user.name : '';

  }

}
