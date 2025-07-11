import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  isLoggedIn = signal(false);
  userName = signal('');

  constructor(private router: Router) {
    effect(() => {
      const token = localStorage.getItem('token');
      const nombre = localStorage.getItem('nombre');
      this.isLoggedIn.set(!!token);
      this.userName.set(nombre || '');
    });
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/iniciar-sesion']);
  }
}

