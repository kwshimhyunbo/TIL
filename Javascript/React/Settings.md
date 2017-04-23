# 작업환경 설정

# Global Dependency

## WEBPACK 설치

                sudo apt-get install -g webpack webpack-dev-server

1. WEBPACK : 브라우저에서 import를 할 수 있게 해주고, js파일을 번들링한다.
2. WEBPAC-DEV-SERVER : 별도의 서버설치없이 서버를 열 수 있고, 코드 수정시마다 자동으로 Reload해준다.

## Dependency 및 플러그인 설치

                npm install --save react react-dom

## 개발 의존모듈 설치(--save-dev) 개발에 필요한 의존성 모듈을 설치한다.

                npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
                npm install --save-dev react-hot-loader webpack webpack-dev-server

1. babel 시리즈 : ES6, JSX 문법을 사용할 수 있도록 해준다.
2. 개발 의존모듈이므로 webpack, webpack-dev-server 도 다시설치.

                var webpack = require('webpack');

webpack을 로딩한다.

                module.exports = {
                    entry: './src/index.js',

                    output: {
                    path: __dirname + '/public/',
                    filename: 'bundle.js'
                    }
                }

entry : React가 로딩되는 첫 파일.
output : webpack의 저장경로와 그 파일 이름셋팅.

                devServer: {
                hot: true,
                inline: true,
                host: '0.0.0.0',
                port: 4000,
                contentBase: __dirname + '/public/',
                },

webpack-dev-server가 열리는 포트설정 및 수정에 대한재로딩 설정

                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            loader: 'babel',
                            exclude: /node_modules/,
                            query: {
                                cacheDirectory: true,
                                presets: ['es2015', 'react']
                            }
                        }
                    ]
                },

                plugins: [
                new webpack.HotModuleReplacementPlugin()
                    ]
                }

의존성 설치한 모듈들 로드
