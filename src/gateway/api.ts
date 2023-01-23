import { METHODS, RequestsOptions } from "./types";

const baseUrl = 'https://61d8e2cfe6744d0017ba8cdc.mockapi.io/events';

class Http {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private makeRequest = async <IDtoRequest>(options: RequestsOptions): Promise<IDtoRequest> => {
    try {
      const { method } = options;
      
      const headers = {
        'Content-Type': 'application/json;charset=utf-8'
      };

      const res = (method === METHODS.GET || method === METHODS.DELETE)
      ? await fetch(`${this.baseUrl}${options.url}`)
      : await fetch(`${this.baseUrl}${options.url}`, { 
        method, 
        body: JSON.stringify(options.body),
        headers
      });

      if (!res.ok) {
        throw new Error('Server Error');
      }
  
      return (await res.json());

    } catch (err) {
      alert(err.message);
    }
  }

  get = async <IDto>(url: string) => this.makeRequest<IDto>({ url, method: METHODS.GET });
  post = async <IDto>(url: string, body?: Object) => this.makeRequest<IDto>({ url, method: METHODS.POST, body });
  delete = async <IDto>(url: string) => this.makeRequest<IDto>({ url, method: METHODS.DELETE });
  patch = async <IDto>(url: string, body?: Object) => this.makeRequest<IDto>({ url, method: METHODS.PATCH, body });
  put = async <IDto>(url: string, body?: Object) => this.makeRequest<IDto>({ url, method: METHODS.PUT, body });
}

export const request = new Http(baseUrl);