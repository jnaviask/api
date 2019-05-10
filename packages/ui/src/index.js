console.log('zdsgja;dorgjadsjgadjg;dg;adgjad;fgj;adfgjadfg;oadjga;rg')
import { WsProvider } from '@polkadot/rpc-provider';
import { ApiPromise } from '@polkadot/api';


// const provider = new WsProvider('ws://127.0.0.1:9944');

// const provider = new WsProvider('wss://poc3-rpc.polkadot.io/');

const provider = new WsProvider('wss://substrate-rpc.parity.io/');

(async function main () {

  try {
    // Create our API with a connection to the node
    const api = await ApiPromise.create(provider);

    // const deriveTest = await api.derive.accounts.idAndIndex('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
    console.log('api', api);

    // const [subscribeNewHead] = await Promise.all([
    //   api.derive.chain.subscribeNewHead()
    // ]);

    // const conStrings = controllers.map(controller => controller.toString());
    // const valStrings = validators[0].map(validator => validator.toString());

    api.derive.chain.subscribeNewHead(newHead => {
      console.log('newHead', newHead);
    });

    // console.log('subscribeNewHead', subscribeNewHead);
  } catch (e) {
    createError(e, wrapper);
  }
}());
