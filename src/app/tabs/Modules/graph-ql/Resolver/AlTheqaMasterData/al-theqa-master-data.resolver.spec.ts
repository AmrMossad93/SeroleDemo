import { TestBed } from '@angular/core/testing';

import { AlTheqaMasterDataResolver } from './al-theqa-master-data.resolver';

describe('AlTheqaMasterDataResolver', () => {
  let resolver: AlTheqaMasterDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AlTheqaMasterDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
