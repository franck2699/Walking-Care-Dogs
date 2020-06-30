import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindpetPage } from './findpet.page';

describe('FindpetPage', () => {
  let component: FindpetPage;
  let fixture: ComponentFixture<FindpetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindpetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindpetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
