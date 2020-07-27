import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrabajoPage } from './trabajo.page';

describe('TrabajoPage', () => {
  let component: TrabajoPage;
  let fixture: ComponentFixture<TrabajoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
