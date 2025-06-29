import {Injectable} from '@angular/core';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private measurementId = 'G-Y0EHB3GKPR';

  constructor() {
    this.initGtag();
  }

  private initGtag(): void {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };

    window.gtag('js', new Date() as any);
    window.gtag('config', this.measurementId, { debug_mode: true } as any);
  }

  public logEvent(name: string, params: Record<string, any> = {}): void {
    window.gtag('event', name, params as any);
  }
}
