import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthyPage } from './healthy.page';

describe('HealthyPage', () => {
  let component: HealthyPage;
  let fixture: ComponentFixture<HealthyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
