import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuTabsPage } from './menu-tabs.page';

describe('MenuTabsPage', () => {
  let component: MenuTabsPage;
  let fixture: ComponentFixture<MenuTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
