import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  languages: Language[] = [
    { value: 'en', viewValue: 'English' },
    { value: 'es', viewValue: 'Spanish' },
    { value: 'telugu', viewValue: 'Telugu' }
  ];
  selectedLanguage = this.languages[0].value;

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {}

  onChange(event: any) {
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

  ngAfterViewInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
