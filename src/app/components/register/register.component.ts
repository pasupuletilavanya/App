import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user={};
  constructor(private service:RegisterService, private router:Router) { }
register(){
this.service.getUser(this.user).subscribe((data)=>{
  console.log(data);
});
}
login(){
  this.router.navigate(['./login']);
}
  ngOnInit() {
  }

}
