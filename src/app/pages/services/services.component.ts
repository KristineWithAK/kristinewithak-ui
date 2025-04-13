import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { ServiceDataService } from '../../services/services.service';

interface ServiceItem {
  name: string;
  description: string;
  price: string;
}

interface ServicePackage {
  category: string;
  serviceItems: ServiceItem[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  servicePackages: ServicePackage[] = []; // Explicitly define the type

  constructor(private serviceDataService: ServiceDataService) {
    this.servicePackages = this.serviceDataService.getServices();
  }
}
