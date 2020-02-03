import { Component, OnInit } from '@angular/core';
import { CatsService } from './cats.service';
import Cat from '../interfaces/cats.interface';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  constructor(
    private service: CatsService
  ) { }

  cats: Cat[] = []

  ngOnInit() {
    this.service.getAll().subscribe(cats => {
      cats.forEach(cat => {
        this.cats.push(cat)
      })
    })
  }

  removeCat(_id: string): void {
    this.service.remove(_id).subscribe(res => {
      let catIndex = this.cats.findIndex(cat => cat._id == _id)
      this.cats.splice(catIndex, 1)
    })
  }

}
