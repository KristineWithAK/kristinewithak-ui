import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(public themeService: ThemeService) {}
}
