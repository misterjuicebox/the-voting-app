import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVoterGroupComponent } from './create-voter-group.component';

describe('CreateVoterGroupComponent', () => {
  let component: CreateVoterGroupComponent;
  let fixture: ComponentFixture<CreateVoterGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVoterGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVoterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
