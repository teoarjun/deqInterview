import request from 'supertest';
import { app, server } from './index';


afterAll((done) => {
  server.close(done)
});

describe('Express App', () => {
  it('responds with 200 and welcome message on root URL', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to root URL of Server');
  });

  it('responds with 200 and books data on /search endpoint with keyword query parameter', async () => {
    const response = await request(app).get('/search').query({ keyword: 'programming' });
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it('responds with 404 on /search endpoint without keyword query parameter', async () => {
    const response = await request(app).get('/search');
    expect(response.status).toBe(404);
    expect(response.text).toBe('No data found');
  });
});