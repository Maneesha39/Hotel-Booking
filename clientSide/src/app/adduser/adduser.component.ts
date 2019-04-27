import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addUsersForm: FormGroup;
  submitted: Boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit() {

    this.addUsersForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      username: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    });

  }

  get f() {
    return this.addUsersForm.controls;
  }
  async onSubmit() {
    try {
      this.submitted = true;
      if (this.addUsersForm.invalid) return
      await this.userService.insert(this.addUsersForm.value)
      alert("User Successfully inserted")
      this.navigateToProducts()
    }
    catch (err) {
      console.log(err)
      alert(err)
    }
    // console.log(this.addProductsForm.value);


  }

  navigateToProducts() {
    this.router.navigate(['login'])
  }

}
