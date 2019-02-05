import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Servicios
import { ProductsService } from './services/products.service';
import { FaqService } from './services/faq.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { ProductsComponent } from './components/body/products/products.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { FaqComponent } from './components/body/faq/faq.component';
import { TesisComponent } from './components/body/tesis/tesis.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ProductsComponent,
    ContactComponent,
    FaqComponent,
    TesisComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule
  ],
  providers: [ProductsService, FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }

