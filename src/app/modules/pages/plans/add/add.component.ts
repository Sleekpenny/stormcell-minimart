import { Component } from '@angular/core';
import { BreadcrumbsComponent } from "@app/shared/ui";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-add',
  imports: [BreadcrumbsComponent, ReactiveFormsModule, NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  standalone: true
})
export class AddComponent {
  breadcrumbs!: string[];

  addplans!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addplans = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.email]],
      status: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.addplans.valid) {
      console.log('Form submitted:', this.addplans.value);      
      this.addplans.reset();
    }
    return;
}
}
