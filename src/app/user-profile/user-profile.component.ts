import { Component, OnInit } from '@angular/core';
import {User} from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  public user: User;
  showUserAge: boolean;
  constructor() {}

  ngOnInit() : void{
    this.user = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');
  }

  btnShowUserAge_OnClick(){
    this.showUserAge= !this.showUserAge;
  }

}
