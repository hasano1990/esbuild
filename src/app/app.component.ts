import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { fabric } from 'fabric';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esbuild';
  private canvas: fabric.Canvas;


  constructor(){
    const container = document.querySelector('.canvas-container') as HTMLElement;
    const canvas = container.querySelector('canvas');

    this.canvas = new fabric.Canvas(canvas, {
      fireRightClick: false,
      fireMiddleClick: false,
      stopContextMenu: true,
    });
  }
}
