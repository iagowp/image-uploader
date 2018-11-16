const request = require('supertest');
const mongoose = require('mongoose');
const chai = require('chai');
const fs = require('fs');
const path = require('path');
const server = require('../bin/www');
const imageMock = require('./mock/image');

const { expect } = chai;

const Image = mongoose.model('Image');

describe('Image', () => {
  afterEach(async () => {
    await Image.deleteMany({});
  });

  after(() => {
    const directory = 'public/images/test';
    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        fs.unlink(path.join(directory, file), (err2) => {
          if (err2) throw err2;
        });
      });
    });
  });

  describe('POST /images', () => {
    it('should return status 302 (redirect)', async () => {
      const res = await request(server)
        .post('/images')
        .field('owner', imageMock.owner)
        .field('description', imageMock.description)
        .attach('file', 'test/mock/pic.png');

      expect(res.statusCode).to.equal(302);
    });

    it('should save basic information', async () => {
      await request(server)
        .post('/images')
        .field('owner', imageMock.owner)
        .field('description', imageMock.description)
        .attach('file', 'test/mock/pic.png');

      const img = await Image.findOne({ owner: imageMock.owner });
      expect(img.description).to.equal(imageMock.description);
    });

    it('should accept a file and save an url', async function save() {
      this.timeout(0);
      await request(server)
        .post('/images')
        .field('owner', imageMock.owner)
        .field('description', imageMock.description)
        .attach('file', 'test/mock/pic.png');

      const img = await Image.findOne({ owner: imageMock.owner });
      expect(img.displayUrl.includes('images/')).to.equal(true);
    });
  });
});
