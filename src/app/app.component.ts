import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatoConnectService } from './services/dato-connect.service';

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

  constructor(
    private http: HttpClient,
    private datoConnect: DatoConnectService
  ) {
    this.coletarTitulos();
    this.coletarImagens();
  }

  coletarTitulos() {
    this.datoConnect.getTitulos(this.http).subscribe((data) => {
      this.titulos = data.data.allTitulos.map((titulo: any) => titulo.nome);
    });
  }

  coletarImagens() {
    this.datoConnect.getImagens(this.http).subscribe((data) => {
      this.imagens = data.data.allImagems.map((imagem: any) => imagem.link);
    });
  }
}
