import { Component, OnInit } from '@angular/core';
import {Tag, TagDetail} from "../../model/tag.model";
import {DataService} from "../../service/data.service";
import {TagService} from "../../service/tag.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tag: Tag = new Tag('Nuovo Tag');
  detail: TagDetail;

  constructor(
    private service: TagService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.dataService.tag) {
      this.tag = this.dataService.tag;
      this.findTagDetail(this.tag)
    }
  }

  findTagDetail(tag: Tag) {
    this.service.tag(tag.id).subscribe(detail => {
      this.detail = detail;
    });
  }

  saveTag() {

  }

  deleteTag() {

  }
}
