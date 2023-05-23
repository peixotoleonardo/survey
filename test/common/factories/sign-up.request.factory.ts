import { MockProperties } from '@test/common/types';

import { SignUpRequest } from '@survey/presentation/models';

export const makeSignUpRequest = (
  mockProperties?: Partial<MockProperties<SignUpRequest>>,
  data?: Partial<SignUpRequest>,
): SignUpRequest => {

  return {
    ...(data?.name ? { name: data.name } : mockProperties?.name ? { name: 'Leonardo'} : {}),
    ...(data?.email ? { email: data.email } : mockProperties?.email ? { email: 'leonardo@email.com'} : {}),
  } as SignUpRequest;
};
