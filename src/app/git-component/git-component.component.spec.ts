import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitComponentComponent } from './git-component.component';

describe('GitComponentComponent', () => {
  let component: GitComponentComponent;
  let fixture: ComponentFixture<GitComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitComponentComponent]
    });
    fixture = TestBed.createComponent(GitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
