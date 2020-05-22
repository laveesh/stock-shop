import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { ShoppingModule } from './shopping/shopping.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
