const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary

describe('Bug Routes', () => {
    let bugId;

    it('should create a new bug', async () => {
        const res = await request(app)
            .post('/api/bugs')
            .send({
                title: 'Test Bug',
                description: 'This is a test bug',
                status: 'open'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('bug');
        bugId = res.body.bug._id; // Store the bug ID for later tests
    });

    it('should get all bugs', async () => {
        const res = await request(app).get('/api/bugs');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('bugs');
        expect(Array.isArray(res.body.bugs)).toBe(true);
    });

    it('should update a bug', async () => {
        const res = await request(app)
            .put(`/api/bugs/${bugId}`)
            .send({
                status: 'resolved'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('bug');
        expect(res.body.bug.status).toEqual('resolved');
    });

    it('should delete a bug', async () => {
        const res = await request(app).delete(`/api/bugs/${bugId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Bug deleted successfully');
    });
});