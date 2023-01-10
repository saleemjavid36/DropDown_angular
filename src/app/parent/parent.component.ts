import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dropDownValue='DropDown1';


  constructor(){

  }
  ngOnInit() {
  }
  
  onClickEMitDrop(dropData:{dropValue:string}){
    this.dropDownValue=dropData.dropValue
  }
}

// onchangeDropDown(event:any){
//   this.dropDownValue=event.target.value
// }