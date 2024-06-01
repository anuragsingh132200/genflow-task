// app.test.js
const request = require('supertest');
const app = require('../app');
const axios = require('axios');

jest.mock('axios');

describe('POST /stock', () => {
    it('should return the stock price for the given ticker', async () => {
        axios.get.mockResolvedValue({ data: { results: [{ c: 123.45 }] } });

        const res = await request(app)
            .post('/stock')
            .send({ ticker: 'AAPL' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('AAPL');
    });
});