import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  parentDataInChild: string = '';

  constructor(private http: HttpClient) {
    console.log('constructor');
  }

  // hooks == methods == functions 

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  // fun = () => {
  //   console.log('fun');
  // }

}



// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.css']
// })
// export class ChildComponent {

//   @Input()
//   parentDataInChild: string = '';

//   childData: string = 'Monu';

//   @Output()
//   passData = new EventEmitter<string>();

//   sendDataToParent = () => {
//     // console.log(this.childData);
//     this.passData.emit(this.childData);
//   };
// }

