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
  selector: 'app-form-creator-portal',
  template:
    `<ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['./form-creator-portal.component.scss']
})
export class FormCreatorPortalComponent implements OnInit, AfterViewInit, OnDestroy {
// portal
  // @ts-ignore
  @ViewChild(CdkPortal) portal: CdkPortal;
  // @ts-ignore
  private host: DomPortalHost;
  constructor( private componentFactoryResolver: ComponentFactoryResolver,
               private applicationRef: ApplicationRef,
               private injector: Injector) {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const creatorDiv = document.querySelector('#form-creator')!
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
