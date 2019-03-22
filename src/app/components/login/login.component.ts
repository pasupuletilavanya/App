import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={}

  constructor(private service:RegisterService,private router:Router) { }
  loginuser(){
    this.service.getloginUser(this.user).subscribe((data)=>{
      if(data.status==200){
      console.log(data.data);
      var key=data.data+" "+data.token;
      this.service.sendMsg(key);
   
      this.router.navigate(['./home']);
      }
      if(data.status==400){
        console.log(data.msg);
        alert('user doesnt exist')
       
        }
        
      
    })
  }
  ngOnInit() {
  }

}
