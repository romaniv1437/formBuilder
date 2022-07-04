import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  controlSub: Subscription | undefined;

  constructor(private auth: AuthService, private router: Router) {
    this.registerForm = new FormGroup( {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.controlSub) {
      this.controlSub.unsubscribe()
    }
  }

  onSubmit() {
    this.registerForm.disable()
    this.controlSub = this.auth.registerUser(this.registerForm.value).subscribe(
      () => {
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true
          }
        })
        this.registerForm.reset()
      },
      () => {
        this.registerForm.enable()
      }
    )

  }
}
