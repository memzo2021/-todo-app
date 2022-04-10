import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '# todo';
  list: any[] = [];
  ajoutTache(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }
  supprimerTache(id: number) {
    console.log(id)
    this.list = this.list.filter(item => item.id !== id);
  }
}
/**
 * 
 * 
 */