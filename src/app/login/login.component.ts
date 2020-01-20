import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../shared/models/userLogin';
import { AuthenticationService } from '../core/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = {userName : '', password: ''};
  invalidLogin: boolean;
  returnUrl: string;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  Login(){
    // console.log('submit button clicked');
    // console.log(this.userLogin);
    //call authentication service Login method.
    this.authService.Login(this.userLogin)
      .subscribe((response) => {
        if (response) {
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.invalidLogin = true;
        }
      },
        (err: any) => this.invalidLogin = true);

  }

}
