import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphQLPage } from './graph-ql.page';

describe('GraphQLPage', () => {
  let component: GraphQLPage;
  let fixture: ComponentFixture<GraphQLPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GraphQLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
