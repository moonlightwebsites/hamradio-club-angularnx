import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hamradio-club-angularnx-not-yet',
  template: `
    <h1>
      This content does not exist yet 😳 - sorry
    </h1>
    <div class="text-container" >
    <a class="button-pill rounded shadow" routerLink="/welcome" routerLinkActive="active"> Head back to the welcome page</a>
    </div>
  `,
  styles: [
    `h1 {font-size: 3em;}
    a {background-color: tomato; width: 600px; margin: auto; font-size: 2em;}
    `

  ]
})
export class NotYetComponent {

}
