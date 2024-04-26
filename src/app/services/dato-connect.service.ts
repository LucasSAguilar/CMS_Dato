import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatoConnectService {
  private apiUrl = 'https://graphql.datocms.com/';
  private authToken: String = 'bec83a609f470a13b042611bbd1c77';

  constructor() {}

  getTitulos(http: HttpClient) {
    return http.get<any>(this.apiUrl, {
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

  getImagens(http: HttpClient) {
    return http.get<any>(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${this.authToken}`,
      },
      params: {
        query: `
        {
          allImagems {
            link
          }
        }
        `,
      },
    });
  }
}
