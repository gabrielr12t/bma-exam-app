import { PersonFilterQuery } from '../../../shared/queries/perons/person-filter-query';
import { PersonViewModel } from '../../../shared/viewModels/persons/person-viewmodel';
import { Person } from '../../../shared/models/persons/person';
import { PersonService } from '../../../shared/providers/persons/person.service';
import { Component, OnInit } from '@angular/core';
import { PersonSelectOptions } from 'src/app/shared/queries/perons/person-select-options';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public query: PersonFilterQuery;
  public persons: PersonViewModel[];

  public options = PersonSelectOptions;

  constructor(private personService: PersonService) {
    this.query = new PersonFilterQuery();
    this.persons = [];
  }

  ngOnInit(): void {
    this.filterPersons();
  }

  public filterPersons() {
    this.personService.filter(this.query)
      .subscribe(response => { this.persons = response.map(model => PersonViewModel.createFromModel(model)) });
  }

  public delete(person: Person) {
    if (confirm(`Deseja excluir a pessoa ${person.name}`)) {
      this.personService.delete(person.id)
        .subscribe(response => {
          if (response)
            this.filterPersons();
        });
    }
  }
}
