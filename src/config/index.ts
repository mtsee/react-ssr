import devConfig from './devConfig';

// 配置
const config = {
  secretKey: '1QcxLCJhx1x', //
  apiHost: '',
  prefix: 'template', // 项目前缀，用于设置localStroage的名称
  resourcesHost: devConfig.resourcesHost || 'https://cdn.h5ds.com', // CDN资源路径
  basename: '', // history路由前缀
};

// 生产环境参数
if (import.meta.env.PROD) {
  config.apiHost = (window as any).apiHost || '';
}

export { config };
