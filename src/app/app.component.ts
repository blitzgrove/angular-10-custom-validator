import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ForbiddenNameValidator } from "./shared/name.validator";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  get firstname(){
    return this.form.controls['FirstName'];
  };

  ngOnInit() {
    this.form = this.fb.group({
      FirstName : ['', {
        validators: [
          Validators.required,
          Validators.minLength(3), 
          ForbiddenNameValidator(/admin|test|abc/)
        ],
        updateOn: 'change'
      }]
    });
  }
}
