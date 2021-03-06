import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {ShareModule} from './../share/share.module';
import {ActivitityMaintainDetailComponent} from './activitity-maintain-detail/activitity-maintain-detail.component';
import {ActivityMaintainComponent} from './activity-maintain/activity-maintain.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminService} from './admin.service';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';
import {MaintainComponent} from './maintain/maintain.component';
import {StudyMaintainDetailComponent} from './study-maintain-detail/study-maintain-detail.component';
import {StudyMaintainComponent} from './study-maintain/study-maintain.component';


@NgModule({
  imports: [
    ShareModule, AdminRoutingModule, AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    LoginComponent, MaintainComponent, StudyMaintainComponent,
    ActivityMaintainComponent, ActivitityMaintainDetailComponent,
    StudyMaintainDetailComponent
  ],
  providers: [AdminService, AuthGuard]
})
export class AdminModule {
}
