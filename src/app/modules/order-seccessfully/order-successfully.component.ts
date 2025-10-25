import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-order-successfully',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './order-successfully.component.html',
  styleUrl: './order-successfully.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSuccessfullyComponent {}
