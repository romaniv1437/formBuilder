import {Injectable} from '@angular/core';

interface Options {
  icon: string;
  title: string;
  func: any;
}

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor() { }

  getOptions(): any {
    return [
      {
        icon: 'title',
        title: 'Label',
        func: (id: string) => this.setLabel(id)
      },
      {
        icon: 'info_outline',
        title: 'Help text',
        func: (id: string) => this.setHelpText(id)
      },
      {
        icon: 'priority_high',
        title: 'Required',
        func: (id: string) => this.setRequired(id)
      },
    ]
  }

  setLabel(id: string): void {
    console.log(`set label for ${id}`)
  }

  setHelpText(id: string): void {
    console.log(`help text for ${id}`)
  }

  setRequired(id: string): void {
    console.log(`set required for ${id}`)
  }
}
