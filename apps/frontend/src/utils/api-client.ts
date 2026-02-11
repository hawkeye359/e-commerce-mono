import { Err, Ok, type Result } from './result';

export const HOST = 'http://localhost:8080/v1';

export interface ProblemDetails<
  TServerProblemType extends ServerProblemType = never,
> {
  readonly type: TServerProblemType | InternalProblemType;
  readonly title: string;
  readonly status: number;
  readonly detail: string;
  readonly instance: string;
}

export const InternalProblems = {
  NetworkError: 'https://example.com/probs/network-error',
  JsonParsingError: 'https://example.com/probs/json-parsing-error',
  UnsupportedContentTypeError:
    'https://example.com/probs/unsupported-content-type',
} as const;

export type InternalProblemType =
  (typeof InternalProblems)[keyof typeof InternalProblems];

export const ServerProblems = {
  ServiceNotAvailable: 'https://example.com/probs/service-not-available',
  InvalidParams: 'https://example.com/probs/invalid-params',
  aboutBlank: 'about:blank',
} as const;

export type ServerProblemType =
  (typeof ServerProblems)[keyof typeof ServerProblems];

const NetworkError: ProblemDetails = {
  type: InternalProblems.NetworkError,
  title: 'Network Error',
  status: 0,
  detail: 'A network error occurred while trying to fetch data.',
  instance: '',
};

const JsonParsingError: ProblemDetails = {
  type: InternalProblems.JsonParsingError,
  title: 'JSON Parsing Error',
  status: 0,
  detail: 'An error occurred while parsing the JSON response.',
  instance: '',
};

const UnsupportedContentTypeError: ProblemDetails = {
  type: InternalProblems.UnsupportedContentTypeError,
  title: 'Unsupported Content Type',
  status: 0,
  detail: 'The response content type is not supported.',
  instance: '',
};

interface SuccessAPIResponse<TData, TMeta = null> {
  data: TData;
  meta: TMeta;
}

interface ErrorAPIResponse<E extends ProblemDetails<ServerProblemType>> {
  error: E;
}

// The following type is supposed be decided after the discussion with the backend team
export type APIResponse<
  T,
  E extends ProblemDetails<ServerProblemType>,
  Meta = null,
> = SuccessAPIResponse<T, Meta> | ErrorAPIResponse<E>;

export const apiClient = {
  get: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta = null,
  >(
    url: string,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    const defaultHeaders = new Headers({
      Accept: 'application/json, application/problem+json, */*',
    });

    try {
      const response = await fetch(`${HOST}${url}`, {
        headers: defaultHeaders,
      });

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        return Err(UnsupportedContentTypeError);
      }

      try {
        const data: APIResponse<TDataType, E, Meta> = await response.json();
        if (response.ok) {
          let successData = data as SuccessAPIResponse<TDataType, Meta>;
          return Ok({
            data: successData.data,
            meta: successData.meta,
          });
        } else {
          let errorData = data as ErrorAPIResponse<E>;
          return Err(errorData.error);
        }
      } catch (error) {
        return Err(JsonParsingError);
      }
    } catch (e) {
      return Err(NetworkError);
    }
  },
  post: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta = null,
  >(
    url: string,
    data: Record<string, unknown>,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    const defaultHeaders = new Headers({
      Accept: 'application/json, application/problem+json, */*',
      'Content-type': 'application/json',
    });

    try {
      const response = await fetch(`${HOST}${url}`, {
        method: 'post',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        return Err(UnsupportedContentTypeError);
      }

      try {
        const data: APIResponse<TDataType, E, Meta> = await response.json();
        if (response.ok) {
          let successData = data as SuccessAPIResponse<TDataType, Meta>;
          return Ok({
            data: successData.data,
            meta: successData.meta,
          });
        } else {
          let errorData = data as ErrorAPIResponse<E>;
          return Err(errorData.error);
        }
      } catch (error) {
        return Err(JsonParsingError);
      }
    } catch (e) {
      return Err(NetworkError);
    }
  },
  put: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta = null,
  >(
    url: string,
    data: Record<string, unknown>,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    const defaultHeaders = new Headers({
      Accept: 'application/json, application/problem+json, */*',
      'Content-type': 'application/json',
    });

    try {
      const response = await fetch(`${HOST}${url}`, {
        method: 'put',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        return Err(UnsupportedContentTypeError);
      }

      try {
        const data: APIResponse<TDataType, E, Meta> = await response.json();
        if (response.ok) {
          let successData = data as SuccessAPIResponse<TDataType, Meta>;
          return Ok({
            data: successData.data,
            meta: successData.meta,
          });
        } else {
          let errorData = data as ErrorAPIResponse<E>;
          return Err(errorData.error);
        }
      } catch (error) {
        return Err(JsonParsingError);
      }
    } catch (e) {
      return Err(NetworkError);
    }
  },
  delete: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta = null,
  >(
    url: string,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    const defaultHeaders = new Headers({
      Accept: 'application/json, application/problem+json, */*',
      'Content-type': 'application/json',
    });

    try {
      const response = await fetch(`${HOST}${url}`, {
        method: 'delete',
        headers: defaultHeaders,
      });

      if (!response.headers.get('Content-Type')?.includes('application/json')) {
        return Err(UnsupportedContentTypeError);
      }

      try {
        const data: APIResponse<TDataType, E, Meta> = await response.json();
        if (response.ok) {
          let successData = data as SuccessAPIResponse<TDataType, Meta>;
          return Ok({
            data: successData.data,
            meta: successData.meta,
          });
        } else {
          let errorData = data as ErrorAPIResponse<E>;
          return Err(errorData.error);
        }
      } catch (error) {
        return Err(JsonParsingError);
      }
    } catch (e) {
      return Err(NetworkError);
    }
  },
};

export const apiClientMock = {
  get: async <
    TDataType,
    E extends ProblemDetails<ServerProblemType>,
    Meta extends Record<string, unknown> | undefined = undefined,
  >(
    _url: string,
    data: TDataType,
    meta?: Meta,
  ): Promise<
    Result<SuccessAPIResponse<TDataType, Meta>, E | ProblemDetails>
  > => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Ok({ data, meta: meta as Meta }));
      }, 1000);
    });
  },
};
