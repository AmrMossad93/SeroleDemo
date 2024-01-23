import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICaptcha} from "./DTO/Interface/Captcha/captcha";
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.page.html',
  styleUrls: ['./captcha.page.scss'],
})
export class CaptchaPage implements OnInit {
  captcha = {} as ICaptcha
  environment = environment.production;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.activatedRoute.data.subscribe(res => {
      this.captcha = res['captcha']
    })
  }
}
