import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {

  @Input() slides: any[] = [];
  currentSlide = 0;
  faChevronRight=faChevronRight;
  faChevronLeft=faChevronLeft;

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  previous() {
    this.currentSlide = (this.currentSlide - 1 + this.currentSlide) % this.slides.length;
  }
  jumpToSlide(index: number){
    this.currentSlide =index;
  }
}
