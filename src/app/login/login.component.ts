import {Component, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Headers} from '@angular/http';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})


export class LoginComponent {
  @Output() sendLoggedInEvent: EventEmitter<any> = new EventEmitter(true);

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  onSubmit(email, password) {
    this.authenticationService.login(email, password).subscribe(
      success =>
        this.router.navigate(['/projects'])
      )
  }
}
