// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Http from './';
import { mockHttp, TEST_HTTP_URL } from '../../test/mockHttp';
import { Mock } from './../mock/types';

describe('send', () => {
  let http: Http;
  let mock: Mock;

  beforeEach(() => {
    http = new Http(TEST_HTTP_URL);
  });

  afterEach(() => {
    if (mock) {
      mock.done();
    }
  });

  it('passes the body through correctly', () => {
    mock = mockHttp([{
      method: 'test_body',
      reply: {
        result: 'ok'
      }
    }]);

    return http
      .send('test_body', ['param'])
      .then((result) => {
        expect((mock.body as any)['test_body']).toEqual({
          id: 1,
          jsonrpc: '2.0',
          method: 'test_body',
          params: ['param']
        });
      });
  });

  it('throws error when !response.ok', () => {
    mock = mockHttp([{
      code: 500,
      method: 'test_error'
    }]);

    return http
      .send('test_error', [])
      .catch((error) => {
        expect(error.message).toMatch(/\[500\]: Internal Server/);
      });
  });
});
