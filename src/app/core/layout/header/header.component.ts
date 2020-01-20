import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginComponent } from 'src/app/login/login.component';
import { UserAccount } from 'src/app/shared/models/userAccount';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: string;

  constructor(
    private authService: AuthenticationService,
    private authenticationService : AuthenticationService
  ) { }

  ngOnInit() {
  }
  callHisName(): string {
    this.user = this.authenticationService.decodeToken().email;
    return this.user;
  }
  callHerName(): UserAccount
  {
    const user1 = this.authenticationService.decodeToken();
    return user1;
  }
  // logInStatus(){
  //   if(this.status_log)
  //   {
  //     this.status_log=true;
  //   }else{
  //     this.status_log=false;
  //   }

  // }

}
