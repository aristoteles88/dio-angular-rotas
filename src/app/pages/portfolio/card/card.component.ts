import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navigator: Router
    ) {
    // Parâmetros
    this.activeRoute.firstChild?.params.subscribe(res => console.log(res))

    // Query Params
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this,this.navigator.navigate(['/'])
    // }, 5000)
  }

}
