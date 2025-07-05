import { Component, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { legalSearchData } from '../../data/legal-search-data';

@Component({
  selector: 'app-search-box',
  standalone: true,
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  query = signal('');
  results = computed(() => {
    const q = this.query().toLowerCase().trim();
    if (q.length < 2) return [];
    return legalSearchData.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.keywords.some(k => k.includes(q))
    );
  });

  constructor(private router: Router) {}

  onInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    const value = target?.value || '';
    this.query.set(value);
  }


  navigate(path: string) {
    this.router.navigateByUrl(path);
    this.query.set('');
  }
}
