/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../../src/app/input-name/input-name.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../../../../src/app/socket.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './input-name.component.scss.shim';
import * as import13 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '@angular/forms/src/directives/default_value_accessor';
import * as import16 from '@angular/forms/src/directives/validators';
import * as import17 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/forms/src/validators';
import * as import20 from '@angular/forms/src/directives/control_value_accessor';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/forms/src/directives/control_container';
var renderType_InputNameComponent_Host:import0.RenderComponentType = (null as any);
class _View_InputNameComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _InputNameComponent_0_4:import3.InputNameComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InputNameComponent_Host0,renderType_InputNameComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-input-name',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_InputNameComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._InputNameComponent_0_4 = new import3.InputNameComponent(this.parentInjector.get(import8.SocketService),this.parentInjector.get(import9.Router));
    this._appEl_0.initComponent(this._InputNameComponent_0_4,[],compView_0);
    compView_0.create(this._InputNameComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.InputNameComponent) && (0 === requestNodeIndex))) { return this._InputNameComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._InputNameComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_InputNameComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_InputNameComponent_Host === (null as any))) { (renderType_InputNameComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_InputNameComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const InputNameComponentNgFactory:import11.ComponentFactory<import3.InputNameComponent> = new import11.ComponentFactory<import3.InputNameComponent>('my-input-name',viewFactory_InputNameComponent_Host0,import3.InputNameComponent);
const styles_InputNameComponent:any[] = [import12.styles];
var renderType_InputNameComponent:import0.RenderComponentType = (null as any);
class _View_InputNameComponent0 extends import1.AppView<import3.InputNameComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _FormGroupDirective_20_3:import13.FormGroupDirective;
  _ControlContainer_20_4:any;
  _NgControlStatusGroup_20_5:import14.NgControlStatusGroup;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _DefaultValueAccessor_24_3:import15.DefaultValueAccessor;
  _MaxLengthValidator_24_4:import16.MaxLengthValidator;
  _NG_VALIDATORS_24_5:any[];
  _NG_VALUE_ACCESSOR_24_6:any[];
  _FormControlName_24_7:import17.FormControlName;
  _NgControl_24_8:any;
  _NgControlStatus_24_9:import14.NgControlStatus;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InputNameComponent0,renderType_InputNameComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','block');
    this._text_2 = this.renderer.createText(this._el_1,'\n\n\n   ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','centered');
    this._text_4 = this.renderer.createText(this._el_3,'\n\n\n\n\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','col-xs-12 ');
    this._text_6 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','col-xs-12 padding-off ');
    this._text_8 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'h2',(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'Rock Paper Scissors',(null as any));
    this._text_11 = this.renderer.createText(this._el_7,'\n      ',(null as any));
    this._text_12 = this.renderer.createText(this._el_5,'\n\n      ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','col-xs-12 colors');
    this._text_14 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'h4',(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'Multilplayer game',(null as any));
    this._text_17 = this.renderer.createText(this._el_13,'\n      ',(null as any));
    this._text_18 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_19 = this.renderer.createText(this._el_3,'\n\n    ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_3,'form',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','col-xs-12 col-sm-6 offset-sm-3 centring');
    this._FormGroupDirective_20_3 = new import13.FormGroupDirective((null as any),(null as any));
    this._ControlContainer_20_4 = this._FormGroupDirective_20_3;
    this._NgControlStatusGroup_20_5 = new import14.NgControlStatusGroup(this._ControlContainer_20_4);
    this._text_21 = this.renderer.createText(this._el_20,'\n      ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_20,'div',(null as any));
    this.renderer.setElementAttribute(this._el_22,'class','input-group ');
    this._text_23 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_22,'input',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','form-control');
    this.renderer.setElementAttribute(this._el_24,'formControlName','name');
    this.renderer.setElementAttribute(this._el_24,'maxlength','15');
    this.renderer.setElementAttribute(this._el_24,'placeholder','Write your name');
    this.renderer.setElementAttribute(this._el_24,'type','text');
    this._DefaultValueAccessor_24_3 = new import15.DefaultValueAccessor(this.renderer,new import18.ElementRef(this._el_24));
    this._MaxLengthValidator_24_4 = new import16.MaxLengthValidator();
    this._NG_VALIDATORS_24_5 = [this._MaxLengthValidator_24_4];
    this._NG_VALUE_ACCESSOR_24_6 = [this._DefaultValueAccessor_24_3];
    this._FormControlName_24_7 = new import17.FormControlName(this._ControlContainer_20_4,this._NG_VALIDATORS_24_5,(null as any),this._NG_VALUE_ACCESSOR_24_6);
    this._NgControl_24_8 = this._FormControlName_24_7;
    this._NgControlStatus_24_9 = new import14.NgControlStatus(this._NgControl_24_8);
    this._text_25 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_22,'span',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','input-group-btn');
    this._text_27 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_26,'button',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','btn btn-primary');
    this.renderer.setElementAttribute(this._el_28,'type','submit');
    this._text_29 = this.renderer.createText(this._el_28,'Continue',(null as any));
    this._text_30 = this.renderer.createText(this._el_26,'\n      ',(null as any));
    this._text_31 = this.renderer.createText(this._el_22,'\n      ',(null as any));
    this._text_32 = this.renderer.createText(this._el_20,'\n    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_3,'\n\n\n\n\n      ',(null as any));
    this._text_34 = this.renderer.createText(this._el_1,'\n\n    ',(null as any));
    this._text_35 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_20,'ngSubmit',this.eventHandler(this._handle_ngSubmit_20_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_20,'submit',this.eventHandler(this._handle_submit_20_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_20,'reset',this.eventHandler(this._handle_reset_20_2.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    const subscription_0:any = this._FormGroupDirective_20_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_20_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_24,'input',this.eventHandler(this._handle_input_24_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_24,'blur',this.eventHandler(this._handle_blur_24_1.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._text_35
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.DefaultValueAccessor) && (24 === requestNodeIndex))) { return this._DefaultValueAccessor_24_3; }
    if (((token === import16.MaxLengthValidator) && (24 === requestNodeIndex))) { return this._MaxLengthValidator_24_4; }
    if (((token === import19.NG_VALIDATORS) && (24 === requestNodeIndex))) { return this._NG_VALIDATORS_24_5; }
    if (((token === import20.NG_VALUE_ACCESSOR) && (24 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_24_6; }
    if (((token === import17.FormControlName) && (24 === requestNodeIndex))) { return this._FormControlName_24_7; }
    if (((token === import21.NgControl) && (24 === requestNodeIndex))) { return this._NgControl_24_8; }
    if (((token === import14.NgControlStatus) && (24 === requestNodeIndex))) { return this._NgControlStatus_24_9; }
    if (((token === import13.FormGroupDirective) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._FormGroupDirective_20_3; }
    if (((token === import22.ControlContainer) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._ControlContainer_20_4; }
    if (((token === import14.NgControlStatusGroup) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._NgControlStatusGroup_20_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_3:any = this.context.myForm;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._FormGroupDirective_20_3.form = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['form'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._FormGroupDirective_20_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_12:any = '15';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._MaxLengthValidator_24_4.maxlength = currVal_12;
      if ((changes === (null as any))) { (changes = {}); }
      changes['maxlength'] = new import7.SimpleChange(this._expr_12,currVal_12);
      this._expr_12 = currVal_12;
    }
    if ((changes !== (null as any))) { this._MaxLengthValidator_24_4.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_14:any = 'name';
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this._FormControlName_24_7.name = currVal_14;
      if ((changes === (null as any))) { (changes = {}); }
      changes['name'] = new import7.SimpleChange(this._expr_14,currVal_14);
      this._expr_14 = currVal_14;
    }
    if ((changes !== (null as any))) { this._FormControlName_24_7.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = this._NgControlStatusGroup_20_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_20,'ng-untouched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_20_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_20,'ng-touched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_20_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_20,'ng-pristine',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_20_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_20,'ng-dirty',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_20_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_20,'ng-valid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatusGroup_20_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_20,'ng-invalid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_13:any = (this._MaxLengthValidator_24_4.maxlength? this._MaxLengthValidator_24_4.maxlength: (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_24,'maxlength',((currVal_13 == (null as any))? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_15:any = this._NgControlStatus_24_9.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_24,'ng-untouched',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_24_9.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_24,'ng-touched',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_24_9.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_24,'ng-pristine',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_24_9.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_24,'ng-dirty',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._NgControlStatus_24_9.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_24,'ng-valid',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._NgControlStatus_24_9.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_24,'ng-invalid',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:boolean = !this.context.myForm.valid;
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementProperty(this._el_28,'disabled',currVal_21);
      this._expr_21 = currVal_21;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._FormControlName_24_7.ngOnDestroy();
  }
  private _handle_ngSubmit_20_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_submit_20_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_20_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_20_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._FormGroupDirective_20_3.onReset()) !== false);
    return (true && pd_0);
  }
  private _handle_input_24_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_24_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_24_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_24_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_InputNameComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.InputNameComponent> {
  if ((renderType_InputNameComponent === (null as any))) { (renderType_InputNameComponent = viewUtils.createRenderComponentType('/Users/goriunov/Desktop/GitHubRepos/multiplayer-game/front-end/src/app/input-name/input-name.component.html',0,import10.ViewEncapsulation.Emulated,styles_InputNameComponent,{})); }
  return new _View_InputNameComponent0(viewUtils,parentInjector,declarationEl);
}