import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {


    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
        )
    {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): | boolean {
        console.log('AuthenticaitonGard is executed!');
        if(this.authenticationService.isLoggedin())
        {return true;}
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
    }
}
