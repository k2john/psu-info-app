import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-psu-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './psu-card.component.html',
})
export class PsuCardComponent {
  showVideo = true;
  trustedVideoUrl: SafeResourceUrl;

  psu = {
    name: 'Corsair RM450x',
    subtitle: 'Computer Power Supply Unit',
    wattage: '450W',
    efficiency: '70+ Gold',
    modular: 'Fully Modular',
    protection: 'OVP / UVP / SCP / OPP',
    fan: '135mm Smart Fan',
    videoUrl: 'https://www.youtube.com/embed/rz7wiAGsqBc',
    gifUrl: 'https://media.giphy.com/media/l0HlLbBrwwzceKgD6/giphy.gif',
  };

  constructor(private sanitizer: DomSanitizer) {
    this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.psu.videoUrl
    );
  }

  toggleVideoGif() {
    this.showVideo = !this.showVideo;
  }
}
