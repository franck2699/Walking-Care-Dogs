import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevaDPage } from './nueva-d.page';

describe('NuevaDPage', () => {
  let component: NuevaDPage;
  let fixture: ComponentFixture<NuevaDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaDPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
