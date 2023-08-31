const request= require('supertest');
const app=require('../index');

describe('articles controller', () => {
    it(`Should correctly return users articles` , () => {
        request(app)
    })



})
