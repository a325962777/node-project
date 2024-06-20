const { test, expect, describe } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');

describe('Auth API', () => {
    // בדיקה לרישום משתמש חדש
    test('should register a new user', async () => {
        // שליחת בקשת POST לרישום משתמש חדש
        const res = await request(app)
            .post('/api/users/signup')
            .send({ username: 'mytestuser', password: '123', email: 'testuser@example.com', role: 'user' });

        // ציפיה לקבלת סטטוס 201
        expect(res.status).toBe(201);
        // ציפיה להחזרת הודעת הצלחה
        expect(res.body).toHaveProperty('message', 'User created');
    });

    // בדיקה להתחברות משתמש קיים
    test('should login an existing user', async () => {
        const res = await request(app)
            .post('/api/users/signin')
            .send({ username: 'mytestuser', password: '123' });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('token');
    });

    // בדיקה למקרה של התחברות עם פרטים לא תקינים
    test('should not login with invalid credentials', async () => {
        const res = await request(app)
            .post('/api/users/signin')
            .send({ username: 'mytestuser', password: 'wrongpassword' });

        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty('message', 'Invalid credentials');
    });
});