import { test, expect } from '@playwright/test';

// ✅ GET request test
test('API Test', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2', {
    headers: {
      Accept: 'application/json',
      'x-api-key': 'reqres-free-v1'
    }
  });

  const data = await response.json();
  console.log('GET Response:', data);

  // ✅ Validate response status and structure
  expect(response.status()).toBe(200);
  expect(data.page).toBe(2);
  expect(Array.isArray(data.data)).toBe(true);
  expect(data.data.length).toBeGreaterThan(0);
});

// ✅ POST request test
test('create User', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Anzum',
      job: 'QA'
    },
    headers: {
      Accept: 'application/json',
      'x-api-key': 'reqres-free-v1'
    }
  });

  const res = await response.json();
  console.log('Full POST Response:', res);

  const userId = res.id;
  console.log('User Id:', userId);

  // ✅ Validate response status and content
  expect(response.status()).toBe(201);
  expect(res.name).toBe('Anzum');
  expect(res.job).toBe('QA');
  expect(userId).toBeDefined();
});

// ✅ PUT request test
test('update User', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Anzumm',
      job: 'SQA'
    },
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1'
    }
  });

  const res = await response.json();
  console.log('Full PUT Response:', res);

  // ✅ Validate response status and content
  expect(response.status()).toBe(200);
  expect(res.name).toBe('Anzumm');
  expect(res.job).toBe('SQA');
  expect(res.updatedAt).toBeDefined();
});
