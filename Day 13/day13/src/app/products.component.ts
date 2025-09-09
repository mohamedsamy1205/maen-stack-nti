import { Component } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { ProductDetailsComponent, Product } from './product-details.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, ProductDetailsComponent, CurrencyPipe],
  template: `
    <div class="products">
      <h2>Products</h2>
      <ul class="list">
        <li class="item" *ngFor="let p of products; trackBy: trackById">
          <div class="info">
            <button type="button" class="name-link" (click)="select(p)">{{ p.name }}</button>
            <span class="price">{{ p.price | currency }}</span>
          </div>
          <button type="button" class="btn" (click)="select(p)">Details</button>
        </li>
      </ul>
      <div *ngIf="selected; else hint">
        <app-product-details [product]="selected"></app-product-details>
        <div style="margin-top:8px">
          <button type="button" class="btn" (click)="selected = null">Close</button>
        </div>
      </div>
      <ng-template #hint>
        <p class="hint">Choose a product to see details.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .products { padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; }
    h2 { margin: 0 0 12px; font-size: 20px; }
    .list { list-style: none; padding: 0; margin: 0 0 12px; display: flex; flex-direction: column; gap: 8px; }
    .item { display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
    .info { display: flex; gap: 10px; align-items: baseline; }
    .name-link { background: transparent; border: none; color: #2563eb; padding: 0; font-weight: 600; cursor: pointer; }
    .name-link:hover { text-decoration: underline; }
    .price { color: #065f46; }
    .btn { appearance: none; border: 1px solid transparent; border-radius: 6px; padding: 6px 10px; background: #f3f4f6; cursor: pointer; }
    .btn:hover { background: #e5e7eb; }
    .hint { color: #6b7280; font-style: italic; margin: 0; }
  `]
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1299, description: 'High-performance laptop for work and play.' },
    { id: 2, name: 'Headphones', price: 199, description: 'Noise-cancelling over-ear headphones.' },
    { id: 3, name: 'Smartphone', price: 999, description: 'Latest-gen smartphone with stunning display.' },
  ];

  selected: Product | null = null;

  select(p: Product): void {
    this.selected = p;
  }

  trackById(index: number, item: Product): number { return item.id; }
}


