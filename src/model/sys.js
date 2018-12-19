export default {
  namespace: 'sys',
  state: {},
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * error({payload: e}, {all, call, put}) {
      // debugger;
      console.error("error:", e);
      // if (e instanceof String) {
      //   toast(`${e}`);
      // } else if (e instanceof Error) {
      //   toast(`${e.message || e}`);
      // } else if (e && e.status) {
      //   let msg = '';
      //   if (e.status === -1) {
      //     yield put(action("account/login"));
      //   } else {
      //     if (e.status === 1) {
      //       const msgMap = e.msgMap;
      //       Object.keys(msgMap).forEach(key => {
      //         msg += msgMap[key];
      //         msg += '\n';
      //       });
      //       if (msg === null || msg.length === 0) {
      //         msg = e.msg;
      //       }
      //     } else {
      //       msg = e.msg;
      //     }
      //     toast(msg);
      //   }
      // } else {
      //   toast(e.msg || e);
      // }
    },
  },
};
