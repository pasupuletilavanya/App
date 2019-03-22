import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
msgFromLogin:string;
  constructor(private service:RegisterService) { }

  ngOnInit() {
    this.service.Msg.subscribe(msg=>{
      this.msgFromLogin=msg;
  });
  }
}
