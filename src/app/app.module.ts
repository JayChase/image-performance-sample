import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CLOUDINARY_CONFIG, NgxPictureModule } from 'ngx-picture';
import { AppComponent } from './app.component';
import { BadImageComponent } from './bad-image/bad-image.component';
import { UsingNgxPictureComponent } from './using-ngx-picture/using-ngx-picture.component';
import { UsingPictureComponent } from './using-picture/using-picture.component';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    BadImageComponent,
    UsingPictureComponent,
    UsingNgxPictureComponent,
    PictureComponent
  ],
  imports: [BrowserModule, NgxPictureModule.forRoot(CLOUDINARY_CONFIG)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
