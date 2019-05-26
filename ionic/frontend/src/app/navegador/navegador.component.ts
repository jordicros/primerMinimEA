import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {
  appTitle: string = 'Primer mínim'
  constructor() { }

  ngOnInit() {
  }

}
