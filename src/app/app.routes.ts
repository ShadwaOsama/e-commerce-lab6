import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'Home'},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Details/:id',component:DetailsComponent},

  {path:'AboutUs',component:AboutUsComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'vision'},
    {path:'vision',component:VisionComponent},
    {path:'values',component:ValuesComponent}
  ],
},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Products',component:ProductsComponent},
  {path:'**',component:NotFoundComponent},

];
