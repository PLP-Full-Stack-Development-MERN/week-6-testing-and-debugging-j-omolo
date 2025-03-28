const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary
const BugController = require('../src/controllers/bugController');

describe('BugController', () => {
    let bugId;

    it('should create a new bug', async () => {
        const response = await request(app)
            .post('/api/bugs')
            .send({
                title: 'Test Bug',
                description: 'This is a test bug',
                status: 'open'
            });
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('bug');
        bugId = response.body.bug._id; // Store the bug ID for later tests
    });

    it('should get all bugs', async () => {
        const response = await request(app).get('/api/bugs');
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.bugs)).toBe(true);
    });

    it('should update a bug', async () => {
        const response = await request(app)
            .put(`/api/bugs/${bugId}`)
            .send({
                status: 'resolved'
            });
        
        expect(response.status).toBe(200);
        expect(response.body.bug).toHaveProperty('status', 'resolved');
    });

    it('should delete a bug', async () => {
        const response = await request(app).delete(`/api/bugs/${bugId}`);
        
        expect(response.status).toBe(204);
    });
});