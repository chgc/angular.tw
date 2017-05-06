import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';

import {AdminService} from './../admin.service';
import {StudyDetail} from './../study-maintain-detail/study-detail.model';

@Component({
  selector: 'augt-study-maintain',
  templateUrl: './study-maintain.component.html',
  styleUrls: ['./study-maintain.component.scss']
})
export class StudyMaintainComponent implements OnInit {
  items: FirebaseListObservable<StudyDetail[]>;
  constructor(private adminService: AdminService) {
    this.items = adminService.loadStudy();
  }

  ngOnInit() {}
}
