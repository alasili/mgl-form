import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "orh-demo",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class OrhDemo implements OnInit {
  form: FormGroup;

  data = [
    {
      label: " ᠰᠤᠩᠭ᠋ᠠᠯᠲᠠ ᠨᠢᠭᠡ",
      value: 1
    },
    {
      label: " ᠰᠤᠩᠭ᠋ᠠᠯᠲᠠ ᠬᠤᠶᠠᠷ",
      value: 2
    },
    {
      label: " ᠰᠤᠩᠭ᠋ᠠᠯᠲᠠ ᠭᠤᠷᠪᠠ",
      value: 3
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: [""],
      select: [null],
      checkbox: [[]],
      radio: [null],
      date: [null],
    });
  }

  ngOnInit(): void {}
}
