import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindwalkPage } from './findwalk.page';

describe('FindwalkPage', () => {
  let component: FindwalkPage;
  let fixture: ComponentFixture<FindwalkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindwalkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindwalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
