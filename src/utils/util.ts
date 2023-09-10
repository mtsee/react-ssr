import dayjs from 'dayjs';
import simpleQueryString from 'simple-query-string';

const dateFormatPreset: Record<string, string> = {
  datetime: 'YYYY/MM/DD HH:mm:ss',
  date: 'YYYY/MM/DD',
  time: 'HH:mm:ss',
};

// 普通时间格式转成秒
export const timeToSec = (time: string): number => {
  const timeArr = time.split(':');
  const hour = Number(timeArr[0]);
  const minute = Number(timeArr[1]);
  const sec = timeArr[2];
  return Number(3600 * hour) + Number(60 * minute) + Number(sec);
};

// 秒转为普通时间
export const secToTime = (s: number, str?: string): string => {
  if (str === undefined) {
    str = 'hhmmss';
  }
  const hour: number = parseInt(s / 3600 + '');
  const minute: number = parseInt((s - hour * 3600) / 60 + '');
  const sec: number = s - hour * 3600 - minute * 60;
  const H: number | string = hour > 9 ? hour : '0' + hour;
  const M: number | string = minute > 9 ? minute : '0' + minute;
  let S: number | string = sec > 9 ? sec : '0' + sec;
  S = parseFloat(S + '').toFixed(2);
  if (str === 'mmss') {
    return M + ':' + S;
  } else {
    return H + ':' + M + ':' + S;
  }
};

export const toTime = (s: number): string => {
  const hour: number = parseInt(s / 3600 + '');
  const minute: number = parseInt((s - hour * 3600) / 60 + '');
  const sec: number = s - hour * 3600 - minute * 60;
  const H: number | string = hour > 9 ? hour : '0' + hour;
  const M: number | string = minute > 9 ? minute : '0' + minute;
  const S: number | string = sec > 9 ? parseInt(sec + '') : '0' + parseInt(sec + '');
  let MS: number | string;
  if ((s + '').indexOf('.') > -1) {
    MS = Number((s + '').substring((s + '').indexOf('.'))) * 1000;
  } else {
    MS = 0;
  }
  MS = parseInt(MS + '', 10);
  MS = MS > 10 ? MS : '0' + MS;
  if (s < 3600) {
    return M + ':' + S + ':' + MS;
  } else {
    return H + ':' + M + ':' + S + ':' + MS;
  }
};

export const getPlatform = (): string => {
  const isWin: boolean = navigator.platform == 'Win32' || navigator.platform == 'Windows';
  if (isWin) return 'Win';
  const isMac: boolean =
    navigator.platform == 'Mac68K' ||
    navigator.platform == 'MacPPC' ||
    navigator.platform == 'Macintosh' ||
    navigator.platform == 'MacIntel';
  if (isMac) return 'Mac';
  return '';
};

/**
 * 秒转换成 mm:ss 时间
 */
export const secondToTime = (t: number): string => {
  let m: number | string = Math.floor(t / 60);
  if (m < 10) {
    m = '0' + m;
  }
  return m + ':' + ((t % 60) / 100).toFixed(2).slice(-2);
};

export const formatTime = (time: number): string => {
  time = parseInt(time + '', 10);
  let mm: number | string = parseInt(time / 60 + '', 10);
  let ss: number | string = time - mm * 60;
  if (mm < 10) {
    mm = '0' + mm;
  }
  if (ss < 10) {
    ss = '0' + ss;
  }
  return `${mm}:${ss}`;
};

/**
 * 图层排序。从[0,1,2,3,4,5] 从3拖到0
 */
export const sortArray = (elements: any[], from: number, to: number): void => {
  // 把from插入到to的位置
  const fromData = elements[from];
  elements.splice(from, 1); // 删除
  elements.splice(to, 0, fromData);
};

/**
 * 将对象转换为querystring，如 {a: 1, b: 2} 转换为 a=1&b=2
 * @param {object} data Query对象
 * @returns 字符串querystring
 */
export const data2QueryString = (data: any[]): string => {
  const str: any[] = [];
  if (data) {
    for (const key in data) {
      str.push(`${key}=${data[key]}`);
    }
  }
  return str.join('&');
};

/**
 * 获取QueryString的值，如果不传name，则返回整个query对象
 * @param {string} name 要查询的 querystring 名称
 */
export const getUrlQuery = (name?: string): string | { [key: string]: any } => {
  const params: { [key: string]: any } = simpleQueryString.parse(location.href);
  return name ? params[name] : params;
};

/**
 * 删除URL参数
 * @param {*} paramKey
 */
export const delUrlParam = (paramKey: string): string => {
  let url = window.location.href; //页面url
  const urlParam: string = window.location.search.substr(1); //页面参数
  let nextUrl = '';
  const arr = [];
  if (urlParam != '') {
    const urlParamArr = urlParam.split('&'); //将参数按照&符分成数组
    for (let i = 0; i < urlParamArr.length; i++) {
      const paramArr = urlParamArr[i].split('='); //将参数键，值拆开
      //如果键雨要删除的不一致，则加入到参数中
      if (paramArr[0] != paramKey) {
        arr.push(urlParamArr[i]);
      }
    }
  }
  if (arr.length > 0) {
    nextUrl = '?' + arr.join('&');
  }
  url = nextUrl;
  return url;
};

/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
export const isUrl = (str: string): boolean => {
  return /https?:\/\/.+/i.test(str);
};

/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
export const isPhoneNum = (str: string): boolean => {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
};

/**
 * @desc 数组去重
 */
export const uniq = (arr: any[], param: any): any[] => {
  return uniq(arr, param);
};

/**
 * 深拷贝对象
 * @param {*} value 要拷贝的对象
 */
export const cloneDeep = (value: any): any => {
  return cloneDeep(value);
};

export const clearSleep = (): void => {
  const _window = window as any;
  if (!_window['CORE_UTILS_SLEEPS']) {
    return;
  }
  _window['CORE_UTILS_SLEEPS'].forEach((d: any) => {
    clearTimeout(d);
  });
  _window['CORE_UTILS_SLEEPS'] = [];
};

export const sleep = (time: number) => {
  const _window = window as any;
  if (!_window['CORE_UTILS_SLEEPS']) {
    _window['CORE_UTILS_SLEEPS'] = [];
  }
  return new Promise<void>(resolve => {
    const timer = setTimeout(() => {
      resolve();
    }, time);
    _window['CORE_UTILS_SLEEPS'].push(timer);
  });
};

export const toJS = (obj: { [key: string]: any } | []) => {
  return JSON.parse(JSON.stringify(obj));
};

export const onlyNumber = (value: string): string => {
  const reg = /[0-9]/g;
  if (reg.test(value)) {
    return value;
  } else {
    return '';
  }
};

export const loadSource = (type: 'video' | 'audio', url: string): Promise<HTMLElement> => {
  return new Promise((resolve, reject) => {
    const source = document.createElement(type);
    source.src = url;
    source.addEventListener('loadedmetadata', function () {
      resolve(source);
    });
    source.onerror = () => {
      reject(source);
    };
  });
};

export const imgLazy = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      console.error('图片加载失败', src, img);
      reject(img);
    };
  });
};

/**
 * 随机
 * @param randomLength
 * @returns
 */
export function randomID(randomLength = 8): string {
  return Number(Math.random().toString().substr(3, randomLength) + Date.now()).toString(36);
}

export const formatDate = (date: string | number | Date = new Date(), format = 'datetime') => {
  return dayjs(date).format(dateFormatPreset[format] || format);
};

export async function download(url: string, name: string) {
  // let response = await fetch(url); // 内容转变成blob地址
  // let blob = await response.blob();  // 创建隐藏的可下载链接
  // let objectUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  a.remove();
}
