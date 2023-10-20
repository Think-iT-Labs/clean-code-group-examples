type HTTPResponseType = {
  data: any;
  statusCode: number;
  errors: any;
};
class HTTPClient {
  constructor(private baseURL: string) {}

  private async parseResponse(res: Response) {
    const json = await res.json();
    if (res.status >= 400 && res.status <= 599) {
      return {
        data: null,
        errors: json.errors,
        statusCode: res.status,
      };
    }

    return {
      data: json.data,
      errors: null,
      statusCode: res.status,
    };
  }
  async post<T>(path: string, data?: T, token?: string) {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return this.parseResponse(res);
  }

  async put<T>(path: string, data?: T, token?: string) {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return this.parseResponse(res);
  }

  async delete<T>(path: string, data?: T, token?: string) {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return this.parseResponse(res);
  }

  async get(path: string, token?: string) {
    try {
      const res = await fetch(`${this.baseURL}${path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      return this.parseResponse(res);
    } catch (error) {
      return {
        data: null,
        errors: null,
        statusCode: 500,
      };
    }
  }
}
