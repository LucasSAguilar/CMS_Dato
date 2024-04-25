import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cmsDatoTest';
  apiUrl = 'https://graphql.datocms.com/';
  authToken = 'bec83a609f470a13b042611bbd1c77';
  titulos = [];
  imagens = [];

  constructor(private http: HttpClient) {
    this.fazerColeta();
  }

  getProducts() {
    return this.http.get<any>(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${this.authToken}`,
      },
      params: {
        query: `
        {
          allTitulos {
            id
            nome
          }
        }
        `,
      },
    });
  }
  // ----------------------------
  fazerColeta() {
    this.getProducts().subscribe((response) => {
      console.log(response.data.allTitulos);
      this.titulos = response.data.allTitulos.map(
        (titulo: any) => titulo.nome
      );
    });
  }

  exibirMensagem() {
    setTimeout(() => {
      console.log(this.titulos);
    }, 2000);
  }
}
