import funcUrls from '../../backend/func2url.json';

const API_URL = funcUrls.api;

function getToken(): string | null {
  return localStorage.getItem('authToken');
}

function setToken(token: string) {
  localStorage.setItem('authToken', token);
}

function clearToken() {
  localStorage.removeItem('authToken');
}

async function request(action: string, method: string = 'GET', body?: unknown) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}?action=${action}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();
  if (!res.ok && data.error) {
    throw new Error(data.error);
  }
  return data;
}

export const api = {
  register: async (userData: { email: string; password: string; name: string; company: string; phone: string; address: string }) => {
    const data = await request('register', 'POST', userData);
    setToken(data.token);
    return data;
  },

  login: async (email: string, password: string) => {
    const data = await request('login', 'POST', { email, password });
    setToken(data.token);
    return data;
  },

  me: async () => {
    return await request('me', 'GET');
  },

  logout: async () => {
    try {
      await request('logout', 'POST');
    } finally {
      clearToken();
    }
  },

  getProfile: async () => {
    return await request('profile', 'GET');
  },

  saveProfile: async (profile: { name: string; inn: string; address: string; phone: string; email: string; description: string }) => {
    return await request('profile', 'POST', profile);
  },

  getCart: async () => {
    return await request('cart', 'GET');
  },

  updateCart: async (items: Array<{ id: string; name: string; price: number; quantity: number; image: string; description?: string }>) => {
    return await request('cart', 'POST', { items });
  },

  createOrder: async () => {
    return await request('order', 'POST');
  },

  getToken,
  setToken,
  clearToken,
};

export default api;
