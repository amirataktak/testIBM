import { Component, OnInit } from '@angular/core';
// interface list number
export interface listNumber {
  number:number;
  color: string;
}

@Component({
  selector: 'app-the-grid',
  templateUrl: './the-grid.component.html',
  styleUrls: ['./the-grid.component.scss']
})
export class TheGridComponent implements OnInit {
  breakpoint: number; //beakpoint
  listNumbers:listNumber[]=[]; // list of numbers
  numbers:number; // input numbers
  index:number // index number in list

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 300) ? 1 :10;
    this.getListOfNumbers()
  }
    /*Method: getListOfNumbers
  **Treatment: get List Of Numbers
  */
  getListOfNumbers(){
    for (let index = 1; index < 101; index++) {
      this.listNumbers.push({number:index,color:"#fff"})  
       }
  }
  /*Method: onResize
  **Treatment: resize grid
  */
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 300) ? 1 :10;
  }
    /*Method: colorizeNumberInGrid
  **Treatment: colorize Number In list of Grid
  */

colorizeNumberInGrid(event){
  var condition=false
  // if color red or green or yellow exist in list of  number 

    this.index = this.listNumbers.findIndex((item: any) => (item.color == 'red' )||(item.color == 'green' ) ||(item.color == 'yellow' ) );
    if(this.index>0){
      this.listNumbers[this.index].color='#fff'
    }
   
      // if numbers divisible by 3 and 5
  if(condition ==false && this.numbers % 15 ==0 ){
    condition=true
    setTimeout(() => {
  this.index = this.listNumbers.findIndex((item: any) => item.number == this.numbers);
  this.listNumbers[this.index].color='yellow'
}, 200);
  return true;
 } 

 // if numbers divisible by 3 
 if(condition ==false && this.numbers % 3 ==0 &&  this.numbers % 5 >0){
  condition=true
  setTimeout(() => {
    this.index = this.listNumbers.findIndex((item: any) => item.number == this.numbers);
    this.listNumbers[this.index].color='red'
  }, 400);
 
 }  
  // if numbers divisible by 5
  if(condition ==false && this.numbers % 5 ==0  &&  this.numbers % 3 >0){
    condition=true
  setTimeout(() => {
  this.index = this.listNumbers.findIndex((item: any) => item.number == this.numbers);
  this.listNumbers[this.index].color='green'
}, 400);

 } 
}

}