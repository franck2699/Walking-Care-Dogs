import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakePage } from './take.page';

describe('TakePage', () => {
  let component: TakePage;
  let fixture: ComponentFixture<TakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
