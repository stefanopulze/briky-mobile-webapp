import {Component, OnInit} from '@angular/core';
import {TagService} from "../../service/tag.service";
import {Tag} from "../../model/tag.model";
import {Router} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Tag[];

  constructor(
    private service: TagService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.tags().subscribe(tags => {
      this.tags = tags;
    });
  }

  editTag(tag: Tag) {
    this.dataService.tag = tag;
    this.router.navigate(['/tag', tag.id])
  }
}
