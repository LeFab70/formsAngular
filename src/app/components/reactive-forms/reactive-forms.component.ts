import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Inputs } from '../../models/Inputs';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  inputList: Inputs[] = [
    {
      inputName: 'firstName',
      inputType: 'text',
    },
    {
      inputName: 'lastName',
      inputType: 'text',
    },
    {
      inputName: 'email',
      inputType: 'email',
    },
    {
      inputName: 'subscribe',
      inputType: 'checkbox',
    },
  ];

  /* reactive form sans builder sans formgroup */
  emailInfoLetter = new FormControl('', Validators.email);
  /************************************************** */
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subscribe: new FormControl(false),
     
    });
  }
  onSubmitForm(): void {
    console.log(this.registerForm.value);
  }
}
