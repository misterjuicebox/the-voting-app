import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterGroupComponent } from './voter-group.component';

describe('VoterGroupComponent', () => {
  let component: VoterGroupComponent;
  let fixture: ComponentFixture<VoterGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
