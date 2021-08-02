import { PersonService } from 'src/app/shared/providers/persons/person.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from 'src/app/shared/models/persons/person';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  public form: FormGroup;
  public person: Person;
  public hasErrors: boolean = false;
  public errorMessageCustom: string;

  public readonly errorMessageDefault: string = 'Preencha todos os campos para continuar';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
  ) {
    this.errorMessageCustom = '';
    this.person = this.route.snapshot.data['person'];

    this.form = this.fb.group({
      id: [this.person.id],
      name: [this.person.name, [Validators.required, Validators.maxLength(60)]],
      age: [this.person.age, [Validators.required]],
      gender: [this.person.gender, [Validators.required]],
      weight: [this.person.weight, [Validators.required]],
      height: [this.person.height]
    });
  }

  ngOnInit(): void { }

  public savePerson() {
    //if (this.form.valid) {
      this.personService.save(this.form.value).subscribe(
        response => {
          if (response)
            this.location.back();
          else
            this.hasErrors = true;
        },
        error => {
          debugger
          let errorRespose = error as HttpErrorResponse;
          if(errorRespose){
            var teste = Array.from(errorRespose.error.errors)
          }
          //let errors = Array.from(error.errors).map(p => p['name'])
        }
      );
    //} else {
      //this.hasErrors = true;
    //}
  }
}
