const request = require('supertest');
const mongoose = require('mongoose');
const chai = require('chai');
const server = require('../bin/www');

const { expect } = chai;

const Image = mongoose.model('Image');

const imageMock = {
  url: 'http://imgurl.com',
  owner: 'iago',
  description: 'pretty avatar picture',
  metadata: 'who know whats in here',
};

describe('Image', () => {
  describe('POST /images', () => {
    it('should return status 200', async () => {
      const res = await request(server)
        .post('/images')
        .send(imageMock);

      expect(res.statusCode).to.equal(200);
    });
  });
});
