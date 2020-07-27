import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RescuePage } from './rescue.page';

describe('RescuePage', () => {
  let component: RescuePage;
  let fixture: ComponentFixture<RescuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RescuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
