import { Request, Response } from '@survey/presentation/contracts';
import { SignUpRequest, SignUpResponse } from '@survey/presentation/models';
import { MissingParamError } from '@survey/presentation/errors/missing-param.error';

export class SignUpController {
  handle(request: Request<SignUpRequest>): Response<SignUpResponse> {
    if (!request.body.name) {
      return {
        code: 400,
        body: new MissingParamError<SignUpRequest>('name'),
      };
    }

    if (!request.body.email) {
      return {
        code: 400,
        body: new MissingParamError<SignUpRequest>('email'),
      };
    }

    return {
      code: 200,
      body: {},
    };
  }
}
