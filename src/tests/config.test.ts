import { config } from "../config";

describe('Config Module', () => {
  it('should have the correct port value', () => {
    expect(config.port).toBe("3000");
  });

  it('should have the correct Twitter API URL', () => {
    expect(config.twitterApiUrl).toBe('https://jsonplaceholder.typicode.com/users/1/posts');
  });

  it('should have the correct Instagram API URL', () => {
    expect(config.instagramApiUrl).toBe('https://jsonplaceholder.typicode.com/photos?albumId=1');
  });

  it('should have the correct API cache duration', () => {
    expect(config.apiCacheDuration).toBe("300000");
  });
});
