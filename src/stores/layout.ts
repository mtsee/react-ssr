import { action, observable, transaction } from 'mobx';
import { util, storage } from '../utils';

class Layout {
  @observable layoutKeys: Record<string, string> = {};

  // 手动触发模块更新
  @action
  updateComponent = (...keyName: string[]) => {
    transaction(() => {
      for (let i = 0; i < keyName.length; i++) {
        this.layoutKeys[keyName[i]] = util.randomID();
      }
    });
  };
}

const layout = new Layout();

export { layout, Layout };
