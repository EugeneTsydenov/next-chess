interface IFetchConfig {
  headers?: Record<string, string> | Headers;
  cache?:
    | 'default' // Кэширование запроса используя стандартное поведение браузера
    | 'no-store' // Запрет кэширования
    | 'reload' // Принудительная перезагрузка кэша
    | 'no-cache' // Кэширование, но с проверкой на сервере перед использованием кэша
    | 'force-cache' // Использование кэша без проверок на сервере
    | 'only-if-cached'; // Использование кэша только если есть доступный
}

type Body =
  | string // Тело запроса в виде строки
  | FormData // Тело запроса в виде объекта FormData
  | URLSearchParams // Тело запроса в виде URLSearchParams
  | ReadableStream<Uint8Array> // Тело запроса в виде потока чтения
  | null
  | undefined
  | Record<string, any>;

export class Http {
  httpConfig: { baseUrl: string; withCredentials: boolean };
  constructor(httpConfig: { baseUrl: string; withCredentials: boolean }) {
    this.httpConfig = httpConfig;
  }

  private async fetch(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    config: IFetchConfig | null | undefined,
    body?: Body,
  ) {
    try {
      const res = await fetch(`${this.httpConfig.baseUrl}/${url}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
        ...config,
        credentials: this.httpConfig.withCredentials ? 'include' : 'same-origin',
      });
      return res;
    } catch (e: any) {
      console.log(e, 'fetch errro');
      return await e.json;
    }
  }

  public async get(url: string, config?: IFetchConfig) {
    return await this.fetch(url, 'GET', config);
  }

  public async post(url: string, body: Body, config?: IFetchConfig) {
    const res = await this.fetch(url, 'POST', config, body);
    return res;
  }

  public async put(url: string, body: Body, config?: IFetchConfig) {
    return await this.fetch(url, 'PUT', config, body);
  }

  public async delete(url: string, body: Body, config?: IFetchConfig) {
    return await this.fetch(url, 'DELETE', config, body);
  }
}
