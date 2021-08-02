import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/users/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public form: FormGroup;
  private user: User;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.user = this.route.snapshot.data['user'];

    this.form = this.form = this.fb.group({
      id: [this.user.id],
      name: [this.user.name, [Validators.required, Validators.maxLength(60)]],
      age: [this.user.age, [Validators.required]],
      gender: [this.user.gender, [Validators.required]],
      weight: [this.user.weight, [Validators.required]],
      height: [this.user.height]
    });
  }

  ngOnInit(): void { }

  public hasError(field: string) {
    return this.form?.get(field)?.errors;
  }
}
