import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  success;
  text;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  async login() {
    const isValid: Boolean = await this.authService.login(this.username, this.password)

    console.log(this.username, this.password)

    if (isValid) {
      this.text = "Login Successful";
      this.router.navigate(['addhotel'])
    }
    else {
      this.success = false;

      this.text = "Invalid Credentials"

    }
  }

  adduser() {
    this.router.navigate(['adduser'])
  }

}
