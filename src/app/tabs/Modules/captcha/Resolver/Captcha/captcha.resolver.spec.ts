import { TestBed } from '@angular/core/testing';

import { CaptchaResolver } from './captcha.resolver';

describe('CaptchaResolver', () => {
  let resolver: CaptchaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CaptchaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
