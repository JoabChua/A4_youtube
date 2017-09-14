import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('asd asd asd ');
   }

  ngOnInit() {
    console.log('asda addsad');
    this.name = 'Joab Chua';
    this.age = 26;
    this.email = 'joabchua@dbs.com';
    this.address = {
      street:'Hougang St 51',
      city:'Singapore',
      postalcode:530574
    }
    this.hobbies = ['Basketball', 'Go to church', 'HangOut with Pow'];
    
    this.dataService.getPosts().subscribe((posts) => {
    this.posts = posts;
    });
  }
  onClick() {
    this.name="Sharon Pow";
    this.hobbies.push('Badminton');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i=0;i<this.hobbies.length;i++){
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit () {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street:string,
  city:string,
  postalcode:number
}
interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}