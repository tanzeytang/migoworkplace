import { NgModule,SkipSelf,Optional } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util';
import {  BrowserAnimationsModule  } from '@angular/platform-browser/animations'
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    
    ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    
    

    ],
    //一个模块声明了可以在这个模块内可用，但是没有导出的话，在其他组件就不可以用
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SharedModule,
    BrowserAnimationsModule,]
})
//如果我们想让我们的模块是唯一的，那么我们可在它的constructor里面写一个异常，检查是否已经有这样的一个
//module存在了，如果已经存在了，那么就抛出异常，因首次构造的时候始终会初始化一个对象，所以我们应该skip掉自己本身的实例
//但是又因为这个模块也不用是必须加载的，所以再加上一个optional  
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,ir: MatIconRegistry,ds:DomSanitizer){
    if(parent){
      throw new Error('this is the only core module, cannot be reload!');
    }
    loadSvgResources(ir,ds);
  }
 }

