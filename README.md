**安装**

npm i run-components-all --S

**使用**

在 mian.js 中全局引入插件

import RunAll from 'run-components-all';

import 'run-components-all/lib/static/css/app.css';

Vue.use(RunAll);

**例：**

map 的使用
直接在 template 标签内使用组件

<tableColumn></tableColumn>

其中需要传入一些参数，详情以后补充，暂时可以先看源码
