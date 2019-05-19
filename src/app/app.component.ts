import { Component, OnInit, Renderer2, inject, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'google-city',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'googleCity';
  APIKEY: string = "KING";
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private _doc) {

  }

  ngOnInit() {
    let stag = this.renderer.createElement("script");
    stag.type = "text/javascript";
    stag.src = "https://maps.googleapis.com/maps/api/js?key=" + this.APIKEY + "&libraries=places";
    this.renderer.appendChild(this._doc.body, stag);
  }

}
