import { makeSignUpRequest } from '@test/common/factories';

import { SignUpRequest } from '@survey/presentation/models';
import { MissingParamError } from '@survey/presentation/errors';
import { SignUpController } from '@survey/presentation/controllers/sign-up.controller';

describe('SignUpController', () => {
  let sut: SignUpController;

  beforeEach(() => {
    sut = new SignUpController();
  });

  describe('handle', () => {
    it('given a request without name should return 400', () => {
      const body = makeSignUpRequest({ email: true });

      const response = sut.handle({ body });

      expect(response.code).toBe(400);
      expect(response.body).toBeInstanceOf(MissingParamError);
      expect(response.body).toStrictEqual(
        new MissingParamError<SignUpRequest>('name'),
      );
    });
  });
});
