import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() profile: any;

  @Output() clearProfile = new EventEmitter<void>();

  router = inject(Router);
  constructor(private authService: AuthService) {}
  ngOnInit(): void {}

  handleLogout(): void {
    this.authService.logout();
    this.clearProfile.emit();
    this.router.navigate(['/']);
  }
}
