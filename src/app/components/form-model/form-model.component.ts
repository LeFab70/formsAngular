import { Component, effect, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-model',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-model.component.html',
  styleUrl: './form-model.component.scss',
})
export class FormModelComponent {
  otherConnexion: boolean = false; //WritableSignal<boolean> = signal<boolean>(false);
  userName: WritableSignal<string> = signal<string>('');
  password: WritableSignal<string> = signal<string>('');
  data: WritableSignal<User | null> = signal<User | null>(null);

  // constructor() {
  //   effect(() => {
  //     console.log(this.isValidForm());

  //     if (this.userName() !== '') {
  //       if (this.password() !== '') {
  //         this.isValidForm.set(!this.isValidForm());
  //       }
  //     }
  //   });
  // }

  onSubmit(form: NgForm) {
    // console.log(form);
    //  console.log(JSON.stringify(form.value));
    // if (this.userName() !== '') {
    //   if (this.password() !== '') {
    //     const user: User = {
    //       userId: new Date().getTime(),
    //       userName: this.userName(),
    //       password: this.password(),
    //     };

    this.data.set(form.value);
    //console.log(this.data());
    //}
    // }
  }
}
