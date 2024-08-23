import request from 'supertest';
import app from '../app';

describe('Server Initialization', () => {
  it('should respond to the root route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });

  it('should use the correct port from the config', () => {
    const PORT = process.env.PORT || 3000;
    expect(app.listen).toBeDefined();
    expect(PORT).toBe("3000");
  });
});
