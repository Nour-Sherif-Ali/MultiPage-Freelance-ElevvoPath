import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-summary-card',
  imports: [CommonModule],
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() change!: string;
  @Input() isPositive!: boolean;
  @Input() iconPath!: string;
  @Input() iconClass!: string;

  get changeClass(): string {
    return this.isPositive ? 'text-green-600' : 'text-red-600';
  }
}