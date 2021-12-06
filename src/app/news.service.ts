import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews = function(){
    return [
      { "judul": "SKR", "tanggal": "14/11/2021", "isi": "Tes isi" },
      { "judul": "BDH", "tanggal": "14/11/2021", "isi": "Tes isi" },
      { "judul": "PRE", "tanggal": "14/11/2021", "isi": "Tes isi" },
      { "judul": "HMN", "tanggal": "14/11/2021", "isi": "Tes isi" },
      { "judul": "KSM", "tanggal": "14/11/2021", "isi": "Tes isi" }
    ]
  }
}
