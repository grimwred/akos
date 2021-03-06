import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NodeComponent } from './components/node/node.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../shared/shared.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CoreModule } from '../core/core.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    NodeComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTreeModule
  ],
  exports: [
    SidebarComponent,
    ToolbarComponent
  ],
  providers: [
    NotificationService
  ]
})
export class LayoutModule {
  constructor(private notificationService: NotificationService) {
  }
}
