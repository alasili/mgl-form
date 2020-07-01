import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "orh-demo",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class OrhDemo implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: ['ceshi']
    });
  }

  ngOnInit(): void {}
}
