import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/model/friend.class';

@Component({
  selector: 'app-friends-manager',
  templateUrl: './friends-manager.component.html',
  styleUrls: ['./friends-manager.component.css']
})
export class FriendsManagerComponent implements OnInit {
  title: string = "Friends List"
  friends: Friend[] = [];
  friend: Friend = new Friend();
  submitBtnTitle: String = 'Save';

  constructor() { }

  ngOnInit(): void {

    let friend1: Friend = new Friend("DaNel Wolf", 54, "danel@info.com", true);
    let friend2: Friend = new Friend("Linda Crook", 32, "linda@info.com", true);
    let friend3: Friend = new Friend("Dylan Motley", 24, "dylan@info.com", true);
    let friend4: Friend = new Friend("Matt Childers", 24, "matt@info.com", false);
    let friend5: Friend = new Friend("Nick Patel", 28, "nick@info.com", false);
    let friend6: Friend = new Friend("Seth Race", 32, "seth@info.com", false);

    this.friends = [friend1, friend2, friend3, friend4, friend5, friend6];
  }

  save() {
    // add friend to friends list
    this.friends.push(this.friend);
  }
}
