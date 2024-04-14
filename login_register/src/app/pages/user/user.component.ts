import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DefaultLoginLayoutComponent } from "../../components/default-login-layout/default-login-layout.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
    imports: [DefaultLoginLayoutComponent]
})
export class UserComponent {

    @Output("submit")
    onSubmit = new EventEmitter();
    
    constructor(
        private router: Router,
    ){}
        submit(){  
        sessionStorage.clear()
        this.router.navigate(['/login'])
      }
    


    

    
    
    
}
