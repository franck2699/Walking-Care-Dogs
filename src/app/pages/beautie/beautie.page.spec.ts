import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeautiePage } from './beautie.page';

describe('BeautiePage', () => {
  let component: BeautiePage;
  let fixture: ComponentFixture<BeautiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeautiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
