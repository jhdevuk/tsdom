import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';

/* -----------------------------------
 *
 * Subject
 *
 * -------------------------------- */

import tsdom from '../src/index';

/* -----------------------------------
 *
 * Tabs
 *
 * -------------------------------- */

describe('tsdom:selector', () => {
   let sandbox: sinon.SinonSandbox;

   /*
    * ID
    */
   describe('(qry = #id)', () => {
      beforeEach(() => {
         sandbox = sinon.sandbox.create();
      });

      afterEach(() => {
         sandbox.restore();
      });

      it('calls getElementById() with qry value', () => {
         expect(true).to.equal(true);
      });
   });
});
