import { Component, OnInit } from '@angular/core';
import { TopService } from '../top.service'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private top:TopService ) { }

  ngOnInit(): void {
      this.top.fetchTopMovies()
      .subscribe(res=>{
      console.log(res);
  })
  }

}
