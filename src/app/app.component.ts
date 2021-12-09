import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, windowCloseIcon, vmBugIcon, cloudIcon, folderIcon } from '@cds/core/icon';
ClarityIcons.addIcons(userIcon, windowCloseIcon, vmBugIcon, cloudIcon, folderIcon);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TvedcAboutUs';
}
