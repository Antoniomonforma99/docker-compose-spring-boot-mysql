import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/interfaces/tutorial.interface';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-turorial-list',
  templateUrl: './turorial-list.component.html',
  styleUrls: ['./turorial-list.component.css']
})
export class TurorialListComponent implements OnInit {

  tutorialList: Tutorial[] = [];

  constructor(private tutService: TutorialService) { }

  ngOnInit(): void {

    this.tutService.getTuts().subscribe(res => {
      this.tutorialList = res.results;
    })
  }

}
