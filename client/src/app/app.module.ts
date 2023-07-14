import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuelComponent } from './duel/duel.component';
import { InspectComponent } from './inspect/inspect.component';
import { LinkButtonComponent } from './Components/link-button/link-button.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TextInputComponent } from './Components/text-input/text-input.component';
import { UserService } from 'src/user.service';
import { CardComponent } from './Components/card/card.component';
import { ConvertToUserPipe } from './pipes/convert-to-userpipe';

@NgModule({
  declarations: [
    AppComponent,
    DuelComponent,
    InspectComponent,
    NavbarComponent,
    LinkButtonComponent,
    HomeComponent,
    TextInputComponent,
    CardComponent,
    ConvertToUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, ConvertToUserPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
