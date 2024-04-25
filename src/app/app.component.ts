import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cmsDatoTest';
  apiUrl = 'https://graphql.datocms.com/';
  authToken = 'bec83a609f470a13b042611bbd1c77';
  titulos = [];

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
            issoExemploDeTitulo
            _status
            _firstPublishedAt
          }
          _allTitulosMeta {
            count
          }
        }
        `,
      },
    });
  }
  // ----------------------------
  fazerColeta() {
    this.getProducts().subscribe((response) => {
      console.log(response);
    });
  }

  exibirMensagem() {
    setTimeout(() => {
      console.log(this.titulos);
    }, 2000);
  }
}
