import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiperfilPage } from './miperfil.page';

describe('MiperfilPage', () => {
  let component: MiperfilPage;
  let fixture: ComponentFixture<MiperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
