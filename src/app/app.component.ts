import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

class Person {
  firstName : string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myLabel = 'Select a number';
  myValue = '4';
  myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  people: Person[] = [];
  filteredPeople: Person[] = [];

  constructor(private http: Http){
     this.getPeople();
  }
  
  getPeople() {
    this.http.get("https://demo.vaadin.com/demo-data/1.0/people")
    .map(res => res.json().result)
    .subscribe(people => this.people = this.filteredPeople = people);
  }

  filterPeople(event){
    const filterText = event.target.value.toLowerCase();
    this.filteredPeople = this.people.filter((p: Person)=>
    !filterText || p.firstName.toLowerCase().indexOf(filterText) > -1);
  }
}
