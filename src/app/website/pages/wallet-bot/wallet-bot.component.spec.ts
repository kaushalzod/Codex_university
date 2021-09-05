import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBotComponent } from './wallet-bot.component';

describe('WalletBotComponent', () => {
  let component: WalletBotComponent;
  let fixture: ComponentFixture<WalletBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
