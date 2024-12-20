import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'justbook';

  constructor(private router: Router) {}


  routeToPage() {
    console.log();
    
    this.router.navigate(['/contact']);
  }
}
