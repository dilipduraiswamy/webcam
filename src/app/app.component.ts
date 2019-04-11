import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cameraApp';
  url='';

 


  // toggle webcam on/off
  public showWebcam = true;
  
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  
  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.url=webcamImage.imageAsDataUrl;

  }

 

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


}
