// subscriptionManager.ts
export class SubscriptionManager {
  private subs = new Map<string, () => void>();

  set(key: string, unsub: () => void) {
    this.subs.set(key, unsub);
  }

  get(key: string) {
    return this.subs.get(key);
  }

  clear(key: string) {
    const unsub = this.subs.get(key);
    if (unsub) {
      unsub();
      this.subs.delete(key);
    }
  }

  clearAllForDevice(deviceId: string) {
    for (const key of Array.from(this.subs.keys())) {
      if (key.startsWith(deviceId)) {
        this.clear(key);
      }
    }
  }
}

// создаём СИНГЛТОН
export const subscriptionManager = new SubscriptionManager();
