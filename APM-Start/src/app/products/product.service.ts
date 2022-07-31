import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IProduct } from "./product";

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private productUrl: string = 'api/products/products.json';

	constructor(private http: HttpClient) { }

	getProducts(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(this.productUrl).pipe(
			tap(data => console.log('All', JSON.stringify(data))),
			catchError(this.handleError)
		);
	}
	private handleError(err: HttpErrorResponse) {
		console.error('dumb and bad');
		return throwError(()=>'dumb and bad');
	}
}