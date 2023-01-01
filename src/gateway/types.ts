export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

interface BaseRequestOptions {
  url: string;
}

interface GetRequestOptions extends BaseRequestOptions {
  method: METHODS.GET;
}

interface PostRequestOptions extends BaseRequestOptions {
  method: METHODS.POST;
  body?: Object;
}

interface DeleteRequestOptions extends BaseRequestOptions {
  method: METHODS.DELETE;
}

interface PutRequestOptions extends BaseRequestOptions {
  method: METHODS.PUT;
  body?: Object;
}

interface PatchRequestOptions extends BaseRequestOptions {
  method: METHODS.PATCH;
  body?: Object;
}

export type RequestsOptions = GetRequestOptions | PostRequestOptions | DeleteRequestOptions | PutRequestOptions | PatchRequestOptions;

export interface RequestArgs {
  method: METHODS;
  options: RequestsOptions;
}