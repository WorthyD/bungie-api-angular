import { HttpContext } from '@angular/common/http';
import { Component } from '@angular/core';
import { GroupV2Service } from 'projects/bungie-api-angular/src/lib/api/groupV2.service';
import { map } from 'rxjs';

const clanId = 2073131;
@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->

    <table>
      <tr>
        <td>groupV2GetGroup</td>
        <td>
          <div>{{ groupGet$ | async | json }}</div>
        </td>
      </tr>
      <tr>
        <td>groupV2SearchGroup</td>
        <td>
          <div>{{ groupSearch$ | async | json }}</div>
        </td>
      </tr>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
      }
      tr td:first-child {
        width: 200px;
      }
      td div {
        height: 150px;
        overflow-y: scroll;
      }
    `
  ]
})
export class AppComponent {
  title = 'library-tester';
  constructor(private groupService: GroupV2Service) {}
  groupGet$ = this.groupService.groupV2GetGroup(clanId);
  groupSearch$ = this.groupService.groupV2GroupSearch({

  });
}
