import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule, RouterOutlet
    ],
})
export class AppComponent {
  mostrarComprados = true;
  produto = "";
  list = [
    { produto: 'arroz', quantidade: 2, comprado: false, delete: "delete" },
    { produto: 'leite', quantidade: 8, comprado: false, delete: "delete" },
    { produto: 'nescau', quantidade: 1, comprado : false, delete: "delete" }
  ]

  markCheckbox(event: any, produto: string){
    this.list.forEach(it => {
      if(it.produto == produto)
        it.comprado = event.target.checked;
    });
  }

  showComprados(event: any)
  {
    this.mostrarComprados = !event.target.checked;
  }

  deleteProduct(produto: string)
  {
    
  }

}
