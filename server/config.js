const config = {
  port: 3030, // 服务器端口
  proxy: {
    // 代理请求
    target: 'https://h5.h5ds.com',
    changeOrigin: true,
  },
};

module.exports = { config };
