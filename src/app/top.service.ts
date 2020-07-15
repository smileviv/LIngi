import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopService {

  constructor(private http:HttpClient) { }
    
    fetchTopMovies(){
      const url="hvhbkvbhbvbjvugvjbhb jvhvb b";
        return this.http.get(url);
    }
}
