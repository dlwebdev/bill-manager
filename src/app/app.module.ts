import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

// import components
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { BillsComponent } from './bills/bills.component';
import { AddComponent } from './bills/add/add.component';
import { EditComponent } from './bills/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PayComponent } from './bills/pay/pay.component';
import { ManageComponent } from './bills/manage/manage.component';
import { MakePaymentComponent } from './bills/pay/make-payment/make-payment.component';
import { PaymentHistoryComponent } from './bills/payment-history/payment-history.component';
import { SettingsComponent } from './settings/settings.component';
import { BillSidebarComponent } from './bill-sidebar/bill-sidebar.component';
import { NotificationsComponent } from './notifications/notifications.component';

// import services
import { PostsService } from './posts.service';
import { NotificationService } from './notification.service';
import { BillService } from './bill.service';
import { PaymentService } from './bills/payment.service';
import { UserService } from './user.service';
import { AuthService } from './auth-service.service';

import { AuthGuard } from './AuthGuard';


// Define the routes
const ROUTES = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bills/pay/make-payment/:id', component: MakePaymentComponent, canActivate: [AuthGuard] },
  { path: 'bills/pay', component: PayComponent, canActivate: [AuthGuard] },
  { path: 'bills/payment-history', component: PaymentHistoryComponent, canActivate: [AuthGuard] },
  { path: 'bills/manage', component: ManageComponent, canActivate: [AuthGuard] },
  { path: 'bills/add', component: AddComponent, canActivate: [AuthGuard] },
  { path: 'bills/edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'bills', component: BillsComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    AboutUsComponent,
    BillsComponent,
    LoginComponent,
    AddComponent,
    EditComponent,
    PayComponent,
    ManageComponent,
    MakePaymentComponent,
    PaymentHistoryComponent,
    SettingsComponent,
    BillSidebarComponent,
    NotificationsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [NotificationService, AuthService, BillService, PaymentService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
