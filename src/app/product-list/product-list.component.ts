import { Component, OnInit, inject } from '@angular/core';
import { products } from '../products';
import { Hotkey, HotkeyModule, HotkeysService } from 'angular2-hotkeys-v17';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  _hotkeysService: HotkeysService = inject(HotkeysService);

  ngOnInit(): void {
    this._hotkeysService.add(new Hotkey('shift+1', (event: KeyboardEvent): boolean => {
      console.log('Typed hotkey');
      return false; // Prevent bubbling
    }));
  }

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
