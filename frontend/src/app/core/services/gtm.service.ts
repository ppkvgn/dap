import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

@Injectable({ providedIn: 'root' })
export class GtmService {
  constructor() {
    window.dataLayer = window.dataLayer || [];
  }

  pushEvent(event: string, params?: Record<string, any>) {
    window.dataLayer.push({
      event,
      ...params,
    });
    console.log(`📤 GTM event: "${event}"`, params);
  }
}
