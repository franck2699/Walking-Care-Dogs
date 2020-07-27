import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncuentroPage } from './encuentro.page';

describe('EncuentroPage', () => {
  let component: EncuentroPage;
  let fixture: ComponentFixture<EncuentroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncuentroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
