export interface Response<TBody> {
  code: number;
  body: TBody;
}

export interface Request<TBody> {
  body: TBody;
}
