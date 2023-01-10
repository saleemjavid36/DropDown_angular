import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  dropValueparent1='';

  @Output() emitingDrop:any=new EventEmitter<{dropValue:string}>()

  onchangeDropDown(event:any){
    this.dropValueparent1=event.target.value
    this.emitingDrop.emit({dropValue:this.dropValueparent1})

  }
}
