import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    // template: `<p>This is home component. abc</p>`
    // styles: [`p {color: 'blue'}`]
})

export class HomeComponent {

    firstName: string = 'Sonu'; // from database 
    lastName: string = 'Singh';
    empData = { eid: 101, firstName: 'Monu' };

    userData: string = '';

}





// data binding

// template (HTML)     component (Script)

//   display here    <--   send from here

// interpolation - component to template

// event binding - template to component

// property binding - component to template

// two-way binding - two way  
