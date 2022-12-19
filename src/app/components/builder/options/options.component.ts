import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  options: any;

  constructor(private optionsService: OptionsService) { }

  ngOnInit(): void {
    this.options = this.optionsService.getOptions();
  }

}
