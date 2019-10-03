import { Component, OnInit } from '@angular/core';
//import { MyServiceService } from "../my-service.service"
//import { is-liked } from "./my-button.component.css"

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  isLiked: boolean;
  trueVar: boolean;
  falseVar: boolean;
  
  constructor() {
    this.trueVar = true;
    this.falseVar = false;
    this.isLiked = false;

  }
  
  
  likeClicked(): boolean {
    
  	console.log('LIKE CLICKED');
  	console.log(this.isLiked);

    if (this.isLiked == false) {
       this.isLiked = true;
    }
    else if (this.isLiked == true) {
       this.isLiked = false;
    }
    

  	return (this.isLiked);

	} 




  ngOnInit() {

  }

}
