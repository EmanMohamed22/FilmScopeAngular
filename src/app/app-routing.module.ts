import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { ActorsComponent } from './components/actors/actors.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { TvComponent } from './components/tv/tv.component';
import { ScopeComponent } from './components/scope/scope.component';
import { ActionMComponent } from './components/action-m/action-m.component';
import { ComedyMComponent } from './components/comedy-m/comedy-m.component';
import { DocumentMComponent } from './components/document-m/document-m.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuardGuard],component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'movie-details/:media_type/:id',canActivate:[AuthGuardGuard],component:MovieDetailsComponent},
  {path:'movies',canActivate:[AuthGuardGuard],component:MoviesComponent,children:[
    {path:'action',component:ActionMComponent},
    {path:'comedy',component:ComedyMComponent},
    {path:'document',component:DocumentMComponent}
  ]},
  {path:'scope',canActivate:[AuthGuardGuard],component:ScopeComponent},
  {path:'tv',canActivate:[AuthGuardGuard],component:TvComponent},
  {path:'actors',canActivate:[AuthGuardGuard],component:ActorsComponent},
  {path:'footer',component:FooterComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
