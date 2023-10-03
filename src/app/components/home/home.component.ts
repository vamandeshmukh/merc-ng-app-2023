import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    // template: `<p>This is home component. abc</p>`
    // styles: [`p {color: 'blue'}`]
})

export class HomeComponent {

    firstName: string = 'Sonu'; 
    lastName: string = 'Singh'; 

}





// data binding

// template (HTML)     component (Script)

//   display here    <--   send from here


