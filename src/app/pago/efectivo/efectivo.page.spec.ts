import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EfectivoPage } from './efectivo.page';

describe('EfectivoPage', () => {
  let component: EfectivoPage;
  let fixture: ComponentFixture<EfectivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfectivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EfectivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
