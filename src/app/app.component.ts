import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  slides: any[] = [
    {
      url: "assets/9.jpg",
      title: 'h',
      description: 'This is',
    },
    {
      url: "assets/4.jpg",
      title: 'first',
      description: 'This is',
    },
    {
      url: "assets/3.jpg",
      title: 'b',
      description: 'This is',
    },
    {
      url: "assets/10.jpg",
      title: 'c',
      description: 'This is',
    },
    {
      url: "assets/5.jpg",
      title: 'd',
      description: 'This is',
    },
    {
      url: "assets/13.jpg",
      title: 'e',
      description: 'This is',
    },
    {
      url: "assets/14.jpg",
      title: 'g',
      description: 'This is',
    },
    {
      url: "assets/2.jpg",
      title: 'i',
      description: 'This is',
    },
    {
      url: "assets/11.jpg",
      title: 'l',
      description: 'This is',
    },
    {
      url: "assets/7.jpg",
      title: 'n',
      description: 'This is',
    },
    {
      url: "assets/gif.gif",
      title: 'o',
      description: 'This is',
    },
    {
      url: "assets/6.jpg",
      title: 'End',
      description: '',
    },
  ];
}
