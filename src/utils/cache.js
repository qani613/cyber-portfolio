const cache = new Map();

export const cacheService = {
  get: (key) => {
    const item = cache.get(key);
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      cache.delete(key);
      return null;
    }
    
    return item.value;
  },
  
  set: (key, value, ttl = 300000) => { // 5 minutes default TTL
    cache.set(key, {
      value,
      expiry: Date.now() + ttl
    });
  },
  
  invalidate: (key) => {
    cache.delete(key);
  },
  
  clear: () => {
    cache.clear();
  }
}; 