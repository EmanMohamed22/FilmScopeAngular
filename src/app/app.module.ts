import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MoviesComponent } from './components/movies/movies.component';
import { TvComponent } from './components/tv/tv.component';
import { ActorsComponent } from './components/actors/actors.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FilterPipe } from './pipes/filter.pipe';

import { ScopeComponent } from './components/scope/scope.component';
import { ActionMComponent } from './components/action-m/action-m.component';
import { ComedyMComponent } from './components/comedy-m/comedy-m.component';
import { DocumentMComponent } from './components/document-m/document-m.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MovieDetailsComponent,
    FooterComponent,
    NotfoundComponent,
    MoviesComponent,
    TvComponent,
    ActorsComponent,
    FilterPipe,
    
    ScopeComponent,
         ActionMComponent,
         ComedyMComponent,
         DocumentMComponent
         
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,MatInputModule,
    NgxSpinnerModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass: LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

