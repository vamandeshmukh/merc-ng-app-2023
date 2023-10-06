import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}





























// import { Component, ElementRef, ViewChild } from '@angular/core';
// // import { WebcamModule } from 'ngx-webcam';
// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent {

//   geoLoc: any = '';

//   myVideo: any;

//   getUserLocation = () => {
//     navigator.geolocation.getCurrentPosition(
//       (loc) => {
//         console.log(loc.coords);
//         this.geoLoc = loc.coords;
//       },
//       (err) => { console.log(err); },
//       { timeout: 10000 });
//   }

//   @ViewChild('videoElement') videoElement!: ElementRef;
//   @ViewChild('canvasElement') canvasElement!: ElementRef;

//   capturedImageUrl: string | undefined;
//   mediaStream: MediaStream | undefined;
//   captureError: string | undefined;

//   async startCamera() {
//     try {
//       this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
//       this.videoElement.nativeElement.srcObject = this.mediaStream;
//     } catch (error: any) {
//       console.error('Error accessing camera:', error);
//       this.captureError = 'Error accessing camera: ' + error.message;
//     }
//   }

//   captureImage() {
//     const video = this.videoElement.nativeElement;
//     const canvas = this.canvasElement.nativeElement;
//     const context = canvas.getContext('2d');

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     this.capturedImageUrl = canvas.toDataURL('image/png');
//   }

//   submitImage() {
//     if (this.capturedImageUrl) {
//       // Send the captured image to the backend using HttpClient
//       // Example:
//       // this.http.post('your-backend-url', { image: this.capturedImageUrl })
//       //   .subscribe(response => {
//       //     console.log('Image submitted successfully:', response);
//       //   }, error => {
//       //     console.error('Error submitting image:', error);
//       //   });
//     }
//   }
//   downloadImage() {
//     if (this.capturedImageUrl) {
//       const link = document.createElement('a');
//       link.href = this.capturedImageUrl;
//       link.download = 'captured_image.png';
//       link.click();
//     }
//   }
// }
