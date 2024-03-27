interface IConfig {
  url: string;
  method?: string;
  headers?: Headers | Record<string, string>;
  body?: Body;
  mode?: 'cors' | 'no-cors' | 'same-origin';
  credentials?: 'same-origin' | 'include' | 'omit';
  cache?: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
  redirect?: 'follow' | 'error' | 'manual';
  referrerPolicy?: string;
  integrity?: string;
}

type Body =
  | string
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null
  | undefined
  | Record<string, any>;

interface IHttpRequestInterceptor {
  onFulfilled: (config: IConfig) => Promise<IConfig> | IConfig;
  onRejected: (error: any, originRequest: IConfig) => Promise<any> | any;
}

interface IHttpResponseInterceptor {
  onFulfilled: (response: Response) => Promise<Response> | Response;
  onRejected: (resError: any, originalRequest: IConfig) => Promise<any> | any;
}

const baseConfig: IConfig = {
  url: '',
  headers: {},
  method: 'GET',
  body: undefined,
  mode: 'cors',
  cache: 'default',
  redirect: 'follow',
  referrerPolicy: 'strict-origin-when-cross-origin',
  integrity: '',
};

export class Http {
  httpConfig: { baseUrl: string; withCredentials: boolean };
  requestInterceptors: IHttpRequestInterceptor[] = [];
  responseInterceptors: IHttpResponseInterceptor[] = [];

  constructor(httpConfig: { baseUrl: string; withCredentials: boolean }) {
    this.httpConfig = httpConfig;
  }
  private async fetch(fetchConfig: IConfig) {
    try {
      const fullConfig = { ...baseConfig, ...fetchConfig };
      const modifiedConfig = await this.applyFulfilledRequestInterceptor(fullConfig);
      const res = await fetch(`${this.httpConfig.baseUrl}/${modifiedConfig.url}`, {
        method: modifiedConfig.method,
        ...modifiedConfig,
        body: JSON.stringify(modifiedConfig.body),
        headers: {
          'Content-Type': 'application/json',
          ...modifiedConfig.headers,
        },
        credentials: this.httpConfig.withCredentials ? 'include' : 'same-origin',
        referrerPolicy: modifiedConfig.referrerPolicy as undefined,
      });
      if (res.statusText === 'OK') {
        return await this.applyFulfilledResponseInterceptor(res);
      } else {
        return await this.applyRejectedResponseInterceptor(res, fetchConfig);
      }
    } catch (e: any) {
      return await this.applyRejectedRequestInterceptor(e, fetchConfig);
    }
  }

  public useRequestInterceptor(interceptor: IHttpRequestInterceptor) {
    this.requestInterceptors.push(interceptor);
  }

  public useResponseInterceptor(interceptor: IHttpResponseInterceptor) {
    this.responseInterceptors.push(interceptor);
  }

  private async applyFulfilledRequestInterceptor(config: IConfig) {
    for (const requestInterceptor of this.requestInterceptors) {
      config = await requestInterceptor.onFulfilled(config);
    }

    return config;
  }

  private async applyRejectedRequestInterceptor(error: any, originalRequest: IConfig) {
    for (const requestInterceptor of this.requestInterceptors) {
      error = await requestInterceptor.onRejected(error, originalRequest);
    }

    return error;
  }

  private async applyFulfilledResponseInterceptor(response: Response) {
    for (const responseInterceptor of this.responseInterceptors) {
      response = await responseInterceptor.onFulfilled(response);
    }

    return response;
  }

  private async applyRejectedResponseInterceptor(error: any, originalRequest: IConfig) {
    for (const responseInterceptor of this.responseInterceptors) {
      error = await responseInterceptor.onRejected(error, originalRequest);
    }

    return error;
  }

  public async get(url: string, config?: Omit<IConfig, 'url'>) {
    return await this.fetch({ url, method: 'GET', ...config });
  }

  public async post(url: string, body: Body, config?: Omit<IConfig, 'url'>) {
    return await this.fetch({ url, body, method: 'POST', ...config });
  }

  public async put(url: string, body: Body, config?: Omit<IConfig, 'url'>) {
    return await this.fetch({ url, body, method: 'PUT', ...config });
  }

  public async delete(url: string, body: Body, config?: Omit<IConfig, 'url'>) {
    return await this.fetch({ url, body, method: 'DELETE', ...config });
  }
}
