import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from 'src/services/user.service';
import { TextHighlightDirective } from './text-highlight.directive';
import { DelayRenderingDirective } from './delay-rendering.directive';
import { PowerOfPipe } from './power-of.pipe';
import { MyDatePipe } from './my-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    AlbumsComponent,
    UserDetailsComponent,
    TextHighlightDirective,
    DelayRenderingDirective,
    PowerOfPipe,
    MyDatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
