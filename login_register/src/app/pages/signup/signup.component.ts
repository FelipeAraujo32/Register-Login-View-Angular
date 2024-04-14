import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm{
  name: FormControl,
  lastname: FormControl,
  numberPhone: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [SignupService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;
  
  constructor(
    private router: Router,
    private signupService: SignupService,
    private toastService: ToastrService
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('',[Validators.required, Validators.minLength(3)]),
      numberPhone: new FormControl('',[Validators.required, Validators.minLength(7)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.signupService.signup(
      this.signupForm.value.name, 
      this.signupForm.value.lastname, 
      this.signupForm.value.numberPhone, 
      this.signupForm.value.email, 
      this.signupForm.value.password).subscribe({
    next: () => {
      this.toastService.success("Registro feito com sucesso!"),
      this.router.navigate(['/login'])
    },
    error: () => {this.toastService.error("Erro inesperado!")}
    })
  }

  navigate(){
    this.router.navigate(["/login"])
  }
}
