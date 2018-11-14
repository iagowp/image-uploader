require('dotenv').config();
const mongoose = require('mongoose');
const chai = require('chai');

const imageMock = require('./mock/image');
require('../config/db');

const { expect } = chai;
const Image = mongoose.model('Image');

describe('Image model', () => {
  beforeEach(async () => {
    const image = new Image(imageMock);
    await image.save();
  });

  afterEach(async () => {
    await Image.deleteMany({});
  });

  it('should have url', async () => {
    const image = await Image.findOne({ url: imageMock.url });
    expect(image).to.have.property('url');
    expect(image.url).to.be.a('string');
  });

  it('should have owner', async () => {
    const image = await Image.findOne({ owner: imageMock.owner });
    expect(image).to.have.property('owner');
    expect(image.owner).to.be.a('string');
  });

  it('should have description', async () => {
    const image = await Image.findOne({ description: imageMock.description });
    expect(image).to.have.property('description');
    expect(image.description).to.be.a('string');
  });

  it('should have metadata', async () => {
    const image = await Image.findOne({ metadata: imageMock.metadata });
    expect(image).to.have.property('metadata');
    expect(image.metadata).to.be.a('string');
  });
});
