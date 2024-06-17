import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-defaut-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './defaut-login-layout.component.html',
  styleUrl: './defaut-login-layout.component.scss'
})
export class DefautLoginLayoutComponent {

  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();
  
  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
