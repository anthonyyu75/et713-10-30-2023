import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
{path:'videos', component: VideosComponent},
{ path: '', component: ProductsComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
