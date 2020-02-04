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
  isLoading = false

  ngOnInit() {
    this.isLoading = true
    this.service.getAll().subscribe(cats => {
      cats.forEach(cat => {
        this.cats.push(cat)
      })
      this.isLoading = false
    })
  }

  removeCat(_id: string): void {
    this.isLoading = true
    this.service.remove(_id).subscribe(res => {
      let catIndex = this.cats.findIndex(cat => cat._id == _id)
      this.cats.splice(catIndex, 1)
      this.isLoading = false
    })
  }

}
