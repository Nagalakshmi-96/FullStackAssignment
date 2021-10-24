import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailsDataComponent } from './player-details-data.component';

describe('PlayerDetailsDataComponent', () => {
  let component: PlayerDetailsDataComponent;
  let fixture: ComponentFixture<PlayerDetailsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDetailsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
