import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {CdkPortal, DomPortalHost} from "@angular/cdk/portal";

@Component({
  selector: 'app-form-accordion-portal',
  template:
    `
      <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['./form-accordion-portal.component.scss']
})
export class FormAccordionPortalComponent implements OnInit, AfterViewInit, OnDestroy {
// portal
  // @ts-ignore
  @ViewChild(CdkPortal)
  // @ts-ignore
  private portal: CdkPortal;
  // @ts-ignore
  private host: DomPortalHost;
  constructor( private componentFactoryResolver: ComponentFactoryResolver,
               private applicationRef: ApplicationRef,
               private injector: Injector) {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const creatorDiv = document.querySelector('#form-accordion')!
    this.host = new DomPortalHost(
      creatorDiv,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    )
    this.host.attach(this.portal)
  }
  ngOnDestroy() {
    this.host.detach()
  }
}
