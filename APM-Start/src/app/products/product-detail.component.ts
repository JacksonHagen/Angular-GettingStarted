import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail'
		product: IProduct | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.pageTitle += ` Id: ${id}`
  }

}
