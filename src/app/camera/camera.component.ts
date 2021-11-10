import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  showCamera :boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  openCamera(){
    if(!this.showCamera){
      this.showCamera = true
    }
    else{
      this.showCamera = false
    }
  }
}
