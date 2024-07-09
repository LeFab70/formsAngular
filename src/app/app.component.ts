import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormModelComponent } from "./components/form-model/form-model.component";
import { ReactiveFormsComponent } from "./components/reactive-forms/reactive-forms.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormModelComponent, ReactiveFormsComponent]
})
export class AppComponent {
  
}
