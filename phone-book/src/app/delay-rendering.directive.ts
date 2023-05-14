import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayRendering]',
})
export class DelayRenderingDirective {
  @Input() appDelayRendering = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.container.createEmbeddedView(this.templateRef);
    }, this.appDelayRendering);
  }
}
