import { UserService } from 'src/app/shared/providers/users/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/users/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public form: FormGroup;
  public user: User;
  public hasErrors: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {
    this.user = this.route.snapshot.data['user'];

    this.form = this.fb.group({
      id: [this.user.id],
      name: [this.user.name, [Validators.required, Validators.maxLength(60)]],
      age: [this.user.age, [Validators.required]],
      gender: [this.user.gender, [Validators.required]],
      weight: [this.user.weight, [Validators.required]],
      height: [this.user.height]
    });
  }

  ngOnInit(): void { }

  public save() {
    if (this.form.valid) {
      this.hasErrors = true;
      return;
    }

    if (this.form.value.id)
      this.update();
    else
      this.create();
  }

  public create() {
    this.userService.create(this.form.value).subscribe(
      response => {
        if (response)
          this.location.back();

        this.hasErrors = true;
      }
    );
  }

  public update() {
    this.userService.update(this.form.value).subscribe(
      response => {
        if (response)
          this.location.back();

        this.hasErrors = true;
      }
    );
  }
}
