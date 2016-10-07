/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../../src/app/players-list/players-list.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../../../../src/app/socket.service';
import * as import10 from '@angular/core/src/zone/ng_zone';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from './players-list.component.scss.shim';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_class';
import * as import19 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import20 from '@angular/core/src/linker/element_ref';
var renderType_PlayersListComponent_Host:import0.RenderComponentType = (null as any);
class _View_PlayersListComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PlayersListComponent_0_4:import3.PlayersListComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent_Host0,renderType_PlayersListComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-player-list',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PlayersListComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PlayersListComponent_0_4 = new import3.PlayersListComponent(this.parentInjector.get(import8.Router),this.parentInjector.get(import9.SocketService),this.parentInjector.get(import10.NgZone));
    this._appEl_0.initComponent(this._PlayersListComponent_0_4,[],compView_0);
    compView_0.create(this._PlayersListComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PlayersListComponent) && (0 === requestNodeIndex))) { return this._PlayersListComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._PlayersListComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._PlayersListComponent_0_4.ngOnDestroy();
  }
}
function viewFactory_PlayersListComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PlayersListComponent_Host === (null as any))) { (renderType_PlayersListComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_PlayersListComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PlayersListComponentNgFactory:import12.ComponentFactory<import3.PlayersListComponent> = new import12.ComponentFactory<import3.PlayersListComponent>('my-player-list',viewFactory_PlayersListComponent_Host0,import3.PlayersListComponent);
const styles_PlayersListComponent:any[] = [import13.styles];
var renderType_PlayersListComponent:import0.RenderComponentType = (null as any);
class _View_PlayersListComponent0 extends import1.AppView<import3.PlayersListComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import14.NgIf;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _TemplateRef_18_5:any;
  _NgIf_18_6:import14.NgIf;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _TemplateRef_20_5:any;
  _NgIf_20_6:import14.NgIf;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _anchor_36:any;
  /*private*/ _appEl_36:import2.AppElement;
  _TemplateRef_36_5:any;
  _NgFor_36_6:import15.NgFor;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent0,renderType_PlayersListComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'section',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','col-xs-12 col-sm-8 offset-sm-2');
    this._text_1 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import16.TemplateRef_(this._appEl_2,viewFactory_PlayersListComponent1);
    this._NgIf_2_6 = new import14.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','list-group invitations-btn');
    this._text_5 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'button',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','list-group-item');
    this.renderer.setElementAttribute(this._el_6,'type','button');
    this._text_7 = this.renderer.createText(this._el_6,'Invitations ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'span',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','tag tag-pill tag-default');
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n  ',(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n\n\n  ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','content');
    this._text_13 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'div',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','spacing');
    this._text_15 = this.renderer.createText(this._el_14,'\n      ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_14,'h2',(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'Available players ',(null as any));
    this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16,(null as any));
    this._appEl_18 = new import2.AppElement(18,16,this,this._anchor_18);
    this._TemplateRef_18_5 = new import16.TemplateRef_(this._appEl_18,viewFactory_PlayersListComponent4);
    this._NgIf_18_6 = new import14.NgIf(this._appEl_18.vcRef,this._TemplateRef_18_5);
    this._text_19 = this.renderer.createText(this._el_16,' ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor(this._el_16,(null as any));
    this._appEl_20 = new import2.AppElement(20,16,this,this._anchor_20);
    this._TemplateRef_20_5 = new import16.TemplateRef_(this._appEl_20,viewFactory_PlayersListComponent5);
    this._NgIf_20_6 = new import14.NgIf(this._appEl_20.vcRef,this._TemplateRef_20_5);
    this._text_21 = this.renderer.createText(this._el_14,'\n    ',(null as any));
    this._text_22 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_12,'hr',(null as any));
    this._text_24 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._el_25 = this.renderer.createElement(this._el_12,'div',(null as any));
    this.renderer.setElementAttribute(this._el_25,'class','list-group');
    this._text_26 = this.renderer.createText(this._el_25,'\n      ',(null as any));
    this._el_27 = this.renderer.createElement(this._el_25,'div',(null as any));
    this.renderer.setElementAttribute(this._el_27,'class','spacing');
    this._text_28 = this.renderer.createText(this._el_27,'\n        ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_27,'a',(null as any));
    this.renderer.setElementAttribute(this._el_29,'class','list-group-item ');
    this._text_30 = this.renderer.createText(this._el_29,'\n          ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_29,'h4',(null as any));
    this.renderer.setElementAttribute(this._el_31,'class','list-group-item-heading');
    this._text_32 = this.renderer.createText(this._el_31,'',(null as any));
    this._text_33 = this.renderer.createText(this._el_29,'\n        ',(null as any));
    this._text_34 = this.renderer.createText(this._el_27,'\n      ',(null as any));
    this._text_35 = this.renderer.createText(this._el_25,'\n\n      ',(null as any));
    this._anchor_36 = this.renderer.createTemplateAnchor(this._el_25,(null as any));
    this._appEl_36 = new import2.AppElement(36,25,this,this._anchor_36);
    this._TemplateRef_36_5 = new import16.TemplateRef_(this._appEl_36,viewFactory_PlayersListComponent6);
    this._NgFor_36_6 = new import15.NgFor(this._appEl_36.vcRef,this._TemplateRef_36_5,this.parentInjector.get(import17.IterableDiffers),this.ref);
    this._text_37 = this.renderer.createText(this._el_25,'\n    ',(null as any));
    this._text_38 = this.renderer.createText(this._el_12,'\n\n  ',(null as any));
    this._text_39 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_40 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._text_35,
      this._anchor_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._text_40
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import14.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    if (((token === import16.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import14.NgIf) && (18 === requestNodeIndex))) { return this._NgIf_18_6; }
    if (((token === import16.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import14.NgIf) && (20 === requestNodeIndex))) { return this._NgIf_20_6; }
    if (((token === import16.TemplateRef) && (36 === requestNodeIndex))) { return this._TemplateRef_36_5; }
    if (((token === import15.NgFor) && (36 === requestNodeIndex))) { return this._NgFor_36_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = this.context.invitationList;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_2_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_3:any = (this.context.available_players.length > 0);
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_18_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = (this.context.available_players.length < 1);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_20_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    changes = (null as any);
    const currVal_6:any = this.context.available_players;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgFor_36_6.ngForOf = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    if ((changes !== (null as any))) { this._NgFor_36_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_36_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = import4.interpolate(1,'',this.context.allCallsOnDuel.length,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_9,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = import4.interpolate(1,'',this.context.myName,'');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_32,currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.invitationList = true)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_PlayersListComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PlayersListComponent> {
  if ((renderType_PlayersListComponent === (null as any))) { (renderType_PlayersListComponent = viewUtils.createRenderComponentType('/Users/goriunov/Desktop/GitHubRepos/multiplayer-game/front-end/src/app/players-list/players-list.component.html',0,import11.ViewEncapsulation.Emulated,styles_PlayersListComponent,{})); }
  return new _View_PlayersListComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_PlayersListComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import14.NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _TemplateRef_9_5:any;
  _NgFor_9_6:import15.NgFor;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent1,renderType_PlayersListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','blackout');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class',' list-group');
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'h1',(null as any));
    this._el_5 = this.renderer.createElement(this._el_4,'span',(null as any));
    this.renderer.setElementAttribute(this._el_5,'aria-hidden','true');
    this.renderer.setElementAttribute(this._el_5,'class','close-invitation-window-btn fa fa-times');
    this._text_6 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_7 = new import2.AppElement(7,2,this,this._anchor_7);
    this._TemplateRef_7_5 = new import16.TemplateRef_(this._appEl_7,viewFactory_PlayersListComponent2);
    this._NgIf_7_6 = new import14.NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_9 = new import2.AppElement(9,2,this,this._anchor_9);
    this._TemplateRef_9_5 = new import16.TemplateRef_(this._appEl_9,viewFactory_PlayersListComponent3);
    this._NgFor_9_6 = new import15.NgFor(this._appEl_9.vcRef,this._TemplateRef_9_5,this.parent.parentInjector.get(import17.IterableDiffers),this.parent.ref);
    this._text_10 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._text_11
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import14.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6; }
    if (((token === import16.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import15.NgFor) && (9 === requestNodeIndex))) { return this._NgFor_9_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_1:any = (this.parent.context.allCallsOnDuel.length < 1);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_7_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    changes = (null as any);
    const currVal_2:any = this.parent.context.allCallsOnDuel;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgFor_9_6.ngForOf = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgFor_9_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_9_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.context.invitationList = false)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PlayersListComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PlayersListComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_PlayersListComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent2,renderType_PlayersListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'h2',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        You do not have any invitations\n      ',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_PlayersListComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PlayersListComponent2(viewUtils,parentInjector,declarationEl);
}
class _View_PlayersListComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent3,renderType_PlayersListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','list-group-item invitations first-invitation');
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h4',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n\n        ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'span',(null as any));
    this.renderer.setElementAttribute(this._el_5,'aria-hidden','true');
    this.renderer.setElementAttribute(this._el_5,'class','fa fa-times');
    this._text_6 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_0,'span',(null as any));
    this.renderer.setElementAttribute(this._el_7,'aria-hidden','true');
    this.renderer.setElementAttribute(this._el_7,'class','fa fa-check');
    this._text_8 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.context.$implicit.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.decline(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.accept(this.context.$implicit.id,this.context.$implicit.name)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PlayersListComponent3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PlayersListComponent3(viewUtils,parentInjector,declarationEl);
}
class _View_PlayersListComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent4,renderType_PlayersListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','tag tag-pill tag-primary');
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',(this.parent.context.available_players.length - 1),'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PlayersListComponent4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PlayersListComponent4(viewUtils,parentInjector,declarationEl);
}
class _View_PlayersListComponent5 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent5,renderType_PlayersListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','tag tag-pill tag-primary');
    this._text_1 = this.renderer.createText(this._el_0,'0',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_PlayersListComponent5(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PlayersListComponent5(viewUtils,parentInjector,declarationEl);
}
class _View_PlayersListComponent6 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import14.NgIf;
  _text_3:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent6,renderType_PlayersListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','spacing');
    this._text_1 = this.renderer.createText(this._el_0,'\n\n\n\n        ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import16.TemplateRef_(this._appEl_2,viewFactory_PlayersListComponent7);
    this._NgIf_2_6 = new import14.NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n\n      ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import14.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = (this.context.$implicit.id != this.parent.context.myID);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_2_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PlayersListComponent6(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PlayersListComponent6(viewUtils,parentInjector,declarationEl);
}
class _View_PlayersListComponent7 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _NgClass_5_3:import18.NgClass;
  _text_6:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PlayersListComponent7,renderType_PlayersListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'a',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','list-group-item active');
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h4',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','list-group-item-heading');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,' ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'span',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','fa ');
    this._NgClass_5_3 = new import18.NgClass(this.parent.parent.parentInjector.get(import17.IterableDiffers),this.parent.parent.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_5),this.renderer);
    this._text_6 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgClass) && (5 === requestNodeIndex))) { return this._NgClass_5_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = 'fa ';
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_5_3.klass = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = ((this.parent.parent.context.invitedPeople.indexOf(this.parent.context.$implicit.id) != (0 - 1))? 'fa-check': 'fa-paper-plane');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgClass_5_3.ngClass = currVal_3;
      this._expr_3 = currVal_3;
    }
    if (!throwOnChange) { this._NgClass_5_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.$implicit.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.chooseOpponent(this.parent.context.$implicit.id)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PlayersListComponent7(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PlayersListComponent7(viewUtils,parentInjector,declarationEl);
}