import { Component, OnInit } from '@angular/core';
import { CrudService } from './shared/crud.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  allProducts: any[] = [];
  product: any;
  constructor(private crudService: CrudService, private route:ActivatedRoute) {
  }
  ngOnInit() {
    this.allProducts = this.crudService.getProducts();
    this.product = this.crudService.getProduct(
      + this.route.snapshot.params['id']
    )
    console.log(this.product)
  }
  id: number;
  name: string;
  description: string;
  price: number;

}
