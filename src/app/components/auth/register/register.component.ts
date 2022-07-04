import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  controlSub: Subscription | undefined;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    this.registerForm = new FormGroup( {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        // Now you can use form builder
      } else if (params['accessDenied']) {
        // Please log in for use form builder
      }
    })
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
        this.router.navigate(['/login']).then(r => console.log(r))
        this.registerForm.reset()
      },
      () => {
        this.registerForm.enable()
      }
    )

  }
}
