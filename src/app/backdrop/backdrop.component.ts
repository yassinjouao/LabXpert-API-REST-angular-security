// backdrop.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  template: `
    <div class="backdrop" *ngIf="show"><div class="spinner"></div></div>
  `,
  styles: [
    `
      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }

      .spinner {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #000000;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class BackdropComponent {
  @Input() show: boolean = false;
}
