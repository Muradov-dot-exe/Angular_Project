import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTdFormComponent } from './post-td-form.component';

describe('PostTdFormComponent', () => {
  let component: PostTdFormComponent;
  let fixture: ComponentFixture<PostTdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
