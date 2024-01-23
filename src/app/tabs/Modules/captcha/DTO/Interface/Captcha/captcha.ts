export interface ICaptcha {
  pkId: number;
  captchaId: number;
  captchaCd: string;
  encodedImageTt: string;
  isVerifiedFg: boolean;
  isActiveFg: boolean;
  processType: boolean;
  captchaExpiry: Date;
}
