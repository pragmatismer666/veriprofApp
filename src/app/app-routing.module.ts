import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
    // { path: 'posts', loadChildren: './posts/posts.module#PostsPageModule' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
