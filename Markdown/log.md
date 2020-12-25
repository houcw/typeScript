Angular基础知识系列学习（N）--

# 2.Angular模板语法、插值语法、事件绑定
    ## 1.插值语句
        介绍：
            插值语句就是讲从后台获取的数据在前端页面动态的展示出来。
        实现方式：
            Angular和Vue实现的方式相同，都是通过'{{...}}'来进行插值
        说明：
            花括号之间的文本通常是组件属性的名字。Angular 会把这个名字替换为响应组件属性的字符串值。
    ## 2.管道：
        介绍：
            Angular管道语法是针对字符串。货币。日期等一些特定的数据进行格式转换，管道可以认为是一个简单的函数，接收模板中的数据，然后通过自身的处理，返回特定格式数据，类似Vue的过滤器。
        Angular内置管道：
            DatePipe：根据本地环境中的规则格式化日期值。
            UpperCasePipe：把文本全部转换成大写。
            LowerCasePipe ：把文本全部转换成小写。
            CurrencyPipe ：把数字转换成货币字符串，根据本地环境中的规则进行格式化。
            DecimalPipe：把数字转换成带小数点的字符串，根据本地环境中的规则进行格式化。
            PercentPipe ：把数字转换成百分比字符串，根据本地环境中的规则进行格式化。
        使用方法：
            <p>日期转换 {{ birthday | date:"MM/dd/yy" }}</p>
        通过函数使用管道：
            html模板中：
                <p>The hero's birthday is {{ birthday | date:format }}</p>
                <button (click)="toggleFormat()">改变格式</button> 

            ts文件中：

            export class BirthdayComponent {
                birthday = new Date(1988, 3, 15);
                toggle = true; 
                get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
                toggleFormat() { this.toggle = !this.toggle; }
            }
        说明：
            点击'改变格式'按钮之后，会触发toggleFormat()函数，ts中的toggleFormat会改变返回模板的format值，展示出不同的日期格式，值两种shortDate和fullDate，之间切换

    ## 3.属性绑定：
        介绍：
            Angular 中的属性绑定可帮助你设置 HTML 元素或指令的属性值，可以动态绑定HTML标签内置的属性。使用属性绑定，你可以执行诸如切换按钮、以编程方式设置路径，以及在组件之间共享值之类的功能。
        绑定方法：
            要绑定到元素的属性，请将其括在方括号 [] 内，该括号会将属性标为目标属性。目标属性就是你要对其进行赋值的 DOM 属性。
        实现语法：
            html模板中:
                <img [src]="itemImageUrl">
                <button [disabled]="isUnchanged">Disabled Button</button>
            ts中：
                itemImageUrl = '../assets/phone.png';
                isUnchanged = true
        注意：
            特定的属性要进行大小写的区分比如：
                <tr><td [colSpan]="1 + 1">Three-Four</td></tr>
                <span [innerHTML]="evilTitle"></span>

    ## Attribute 绑定、类绑定和样式绑定
        1.Attribute 绑定
            介绍：
                Angular 中的 Attribute 绑定可帮助你直接设置 Attribute 值。使用 Attribute 绑定，你可以提升无障碍性、动态设置应用程序样式以及同时管理多个 CSS 类或样式。
            实现：
                html模板：
                    <button [attr.aria-label]="actionName">{{actionName}} with Aria</button>
                ts：
                    actionName可以动态设置
        2.类绑定
            介绍：
                分为单个类绑定和多个类绑定，可以动态的从元素的Attribute中修改css类名
            1.单个类：
                html模板中：
                    [class.sale]="onSale"
                    通过变量onSale来控制类sale是否添加或删除
            2.多个类：
                html模板中：
                    [class]="classExpression"
                    classExpression可以是多个类名，设置之后类名对应的样式按照顺序出现
                实现：
                    <div [calss]="my-class-1 my-class-2 my-class-3"></div>
                    或者
                    [class]={class1:true,class2:false}
                    或者
                    [class]=[class1,class2]

        3.样式绑定
            介绍
                样式绑定分为三种方式：
            1.绑定到单一样式：
                [style.width]="width"
            2.绑定到带单位的单一样式：
                [style.width.px]="width"
            3.绑定到多个样式：
                [style]="width: 100px; height: 100px"
                [style]={width: '100px', height: '100px'}
                [style]=['width', '100px']

            



    ## 事件绑定
        介绍：
            通过事件绑定，你可以侦听并响应用户操作，例如击键、鼠标移动、点击和触摸。
        实现：
            html模板：
                <button (click)="onSave()">Save</button>
            ts文件
                onSave(){
                    console.log('save)
                }

    ## 双向绑定
        介绍：
            双向绑定为应用中的组件提供了一种共享数据的方式。使用双向绑定绑定来侦听事件并在父组件和子组件之间同步更新值。
        实现：
            <app-sizer [(size)]="fontSizePx"></app-sizer>
        实现方式：
            html模板：
                <div>
                    <button (click)="dec()" title="smaller">-</button>
                    <button (click)="inc()" title="bigger">+</button>
                    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
                </div>
            ts模板
                export class SizerComponent {
                    @Input()  size: number | string;
                    @Output() sizeChange = new EventEmitter<number>();

                    dec() { this.resize(-1); }
                    inc() { this.resize(+1); }

                    resize(delta: number) {
                        this.size = Math.min(40, Math.max(8, +this.size + delta));
                        this.sizeChange.emit(this.size);
                    }
                }






# 3.常见的Angular指令
    1.属性指令
        NgClass：
                可以动态的给标签设置css类或者删除css类，
            语法：
                <div [ngClass]="isSpecial ? 'special' : ''"></div>
            对比：
                类似于Vue中的 :style={'类名':布尔值}
        NgStyle：
                可以根据组件的不同状态使用多个内联样式，可以通过函数的方式返回。
            语法：
                在html文件中使用ngStyle
                    <div [ngStyle]="currentStyles"> </div>
                在ts文件中定义：
                    setCurrentStyles() {
                        this.currentStyles = {
                            'font-style':  变量1 ? 'italic' : 'normal',
                            'font-weight': 变量2 ? 'bold'   : 'normal',
                            'font-size':   变量3 ? '24px'   : '12px'
                        };
                    }
                    可以根据不同的变量，进行判断，设置不同的内联样式
            注意:
                在初始化的时候调用setCurrentStyles函数，当依赖的变量发生变化的时候，也要重新调用setCurrentStyles函数
        NgModel：
            双向绑定语法和Vue的v-model效果相同，在Angular中主要是针对表单数据的双向绑定，在使用之前必须要在app.module.ts 中导入FormsModule 模块，并且要添加到NgModule的import中。
            语法：
                app.module.ts文件：
                    引入：
                        import { FormsModule } from '@angular/forms';
                    使用：
                        @NgModule({
                            imports: [
                                BrowserModule,
                                FormsModule // <--- import into the NgModule
                            ],
                        })
                在html页面中进行双向绑定：
                     <input [(ngModel)]="currentItem.name"/>   
                     <div>{{currentItem.name}}</div>
                
    2.结构型指令
        NgIf/Ngelse
            动态控制DOM元素的显示与隐藏，
            语法：
                <div *ngIf="isActive" ></div>
            类比：
                和Vue的v-if，v-else语法相同，都是可以控制DOM元素的动态的显示与隐藏
            注意：
                ngIf前面的*是一个用来简化复杂语法的“语法糖”，Angular会把ngIf编译成为一个<ng-template>元素，并且会用<ng-template>包裹宿主，根据变量的布尔值来显示对应的元素
            实现方式：
                <ng-template [ngIf]="hero">
                    <div class="name">{{hero.name}}</div>
                </ng-template>
        NgFor
            动态遍历模板渲染列表
            语法：
                <div *ngFor="let item of items;let key =index"></div>
            类比：
                和Vue中的Vue-for指令功能相同，会根据传入的列表，循环渲染Html模板
            注意：
                NgFor和NgIf原理相同，会把带有*的语法转换成为<ng-template>元素，然后根据传入的数组，循环遍历这个template模板。
                index是循环产生的key，如果你需要使用，要在循环中先声明
            实现方式：
                <ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
                <div [class.odd]="odd">({{i}}) {{hero.name}}</div>
                </ng-template>
            关于trackBy的说明：
                如果对象列表会随着后端服务器变化频繁改变，那么Angular只能重新根据新的对象列表渲染DOM，重复执行会影响效率，trackBy的目的就是为了提高这一过程的效率，可以在组件中添加trackBy方法，跟踪对象列表中的某一特定值，如果trackBy跟踪的值已经被渲染过那么Angular就不会再次重新渲染，相同的值。
            实现方式：
                在html模板中:
                    <div *ngFor="let item of items; trackBy: trackByItems">
                        ({{item.id}}) {{item.name}}
                    </div>
                在ts中跟踪id：
                    trackByItems(index: number, item: Item): number { return item.id; }
        NgSwitch
            根据不同的条件显示不同的HTML元素，将选定的元素放入DOM渲染
                语法：
                    <div [ngSwitch]="currentItem.feature">
                        <app-stout-item    *ngSwitchCase="'stout'"    [item]="currentItem"></app-stout-item>
                        <app-unknown-item  *ngSwitchDefault           [item]="currentItem"></app-unknown-item>
                        </div>
                说明：
                    与常见的switch case语法相同，根据不同的变量展示不同
# 4. 组件的创建、组件声明周期钩子函数
    组件
        1.组件介绍
            组件是Angular应用里面必不可少的一部分，Angular应用是通过各种组件建立起来。
        2.组件的创建
            前提：
                在创建组件之前必须要先安装Angular Cli ，并使用Cli创建一个应用
            说明：
                在以组件命名的文件夹下必定包含以下文件
                    一个组件文件 <component-name>.component.ts
                    一个模板文件 <component-name>.component.html
                    一个 CSS 文件， <component-name>.component.css
                    测试文件 <component-name>.component.spec.ts
            1.Angular脚手架创建组件：
                使用 Angular CLI 创建一个组件：
                1.在终端窗口中，导航到要放置你应用的目录。
                2.运行 ng generate component <component-name> 命令，其中 <component-name> 是新组件的名字。
            2.手动创建组件
                1.导航到你的 Angular 项目目录。
                2.创建一个新文件 helloword.component.ts 。
                3.在文件的顶部，添加下面的 import 语句。
                    import { Component } from '@angular/core';
                4.在 import 语句之后，添加一个 @Component 装饰器
                    @Component({
                    })
                5.为组件选择一个 CSS 选择器。
                    @Component({
                        selector: 'app-component-overview',
                    })
                6.定义组件用以显示信息的 HTML 模板。在大多数情况下，这个模板是一个单独的 HTML 文件。
                    @Component({
                        selector: 'app-component-overview',
                        templateUrl: './component-overview.component.html',
                    })
                7.为组件的模板选择样式。在大多数情况下，你可以在单独的文件中定义组件模板的样式。
                @Component({
                        selector: 'app-component-overview',
                        templateUrl: './component-overview.component.html',
                        styleUrls: ['./component-overview.component.css']
                    })
                8.添加一个包含该组件代码 class 语句。
                export class ComponentOverviewComponent {
                    
                }
        3.指定组件的css选择器
            介绍：
                每个组件都需要一个 CSS 选择器。选择器会告诉 Angular：当在模板 HTML 中找到相应的标签时，就把该组件实例化在那里
            实现：
                @Component({
                selector: 'app-component-overview',
                })
        4.定义组件的模板
            介绍：
                模板是一段 HTML，它告诉 Angular 如何在应用中渲染组件。你可以通过以下两种方式之一为组件定义模板：引用外部文件，或直接写在组件内部。
            实现：
                @Component({
                selector: 'app-component-overview',
                templateUrl: './component-overview.component.html',
                })
            注意：
                要在组件中定义模板，就要把一个 template 属性添加到 @Component 中，该属性的内容是要使用的 HTML。
        5.声明组件的样式
            介绍：
                引用一个外部文件，或直接写在组件内部。
                要在单独的文件中声明组件的样式，就要把 stylesUrls 属性添加到 @Component 装饰器中
            实现：
                @Component({
                selector: 'app-component-overview',
                templateUrl: './component-overview.component.html',
                styleUrls: ['./component-overview.component.css']
                })
    生命周期：
        ngOnChanges()
            介绍：
                当 Angular 设置或重新设置数据绑定的输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象。注意，这发生的非常频繁，所以你在这里执行的任何操作都会显著影响性能。
            使用：
                在 ngOnInit() 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。
                注意，如果你的组件没有输入，或者你使用它时没有提供任何输入，那么框架就不会调用 ngOnChanges()。
        ngOnInit()
            介绍：
                在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
            使用：
                在第一轮 ngOnChanges() 完成之后调用，只调用一次。

        ngDoCheck()
            介绍：
                检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。
            使用：
                紧跟在每次执行变更检测时的 ngOnChanges() 和 首次执行变更检测时的 ngOnInit() 后调用。
        ngAfterContentInit()
            介绍：
                当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用。
            使用：
                第一次 ngDoCheck() 之后调用，只调用一次。
        ngAfterContentChecked()
            每当 Angular 检查完被投影到组件或指令中的内容之后调用。
        ngOnDestroy()
            介绍：
                每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。 欲知详情，参阅本文档中的在实例销毁时进行清理。
            使用：    
                在 Angular 销毁指令或组件之前立即调用。

# 5.组件之间相互通信

# 6.路由导航

# 7.异步获取数据
