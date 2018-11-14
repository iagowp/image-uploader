const request = require('supertest');
const mongoose = require('mongoose');
const chai = require('chai');
const server = require('../bin/www');
let imageMock = require('./mock/image');

const { expect } = chai;
imageMock = { ...imageMock };
delete imageMock.url;

const Image = mongoose.model('Image');

describe('Image', () => {
  describe('POST /images', () => {
    it('should return status 200', async () => {
      const res = await request(server)
        .post('/images')
        .send(imageMock);

      expect(res.statusCode).to.equal(200);
    });

    it('should save basic information', async () => {
      await request(server)
        .post('/images')
        .send(imageMock);

      const img = await Image.findOne({ owner: imageMock.owner });
      expect(img.description).to.equal(imageMock.description);
    });
  });
});
