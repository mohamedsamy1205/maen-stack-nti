import { Component, Input } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  template: `
    <div class="product-details" *ngIf="product">
      <h3>{{ product.name }}</h3>
      <div class="meta">
        <span class="price">$ {{ product.price | number:'1.2-2' }}</span>
      </div>
      <p class="desc">{{ product.description }}</p>
    </div>
  `,
  styles: [`
    .product-details { padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; }
    h3 { margin: 0 0 8px; font-size: 18px; }
    .meta { color: #374151; margin-bottom: 6px; }
    .price { font-weight: 600; color: #065f46; }
    .desc { color: #4b5563; margin: 0; }
  `]
})
export class ProductDetailsComponent {
  @Input() product: Product | null = null;
}


