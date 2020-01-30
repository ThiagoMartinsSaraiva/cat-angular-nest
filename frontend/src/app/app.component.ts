import { Component, OnInit } from '@angular/core';
import { CatsService } from './cats/cats.service';
import Cat from './interfaces/cats.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private service: CatsService
  ) {}

  cats: Cat[] = []

  ngOnInit(): void {
    this.service.getAll().subscribe(cats => {
      cats.forEach(cat => {
        this.cats.push(cat)
      })
    })
  }
}
