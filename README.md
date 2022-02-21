**安装**

npm i run-components-all --S

**使用**

在 mian.js 中全局引入插件

import RunAll from 'run-components-all';

import 'run-components-all/lib/static/css/app.css';

Vue.use(RunAll);

**例：**

tableColumn 表格组件的使用
直接在组件的 template 标签内使用

**----------------组件 1 start--------------**
<tableColumn :columnOptions="columnOptions" :tableData="tableData"></tableColumn>

传参：
columnOptions:[
{
label:'名称',<!-- 表头内容 -->
prop:'name',<!-- 参数名称 -->
type:'text',<!-- 参数名称 -->
align:'center',<!-- 是否居中 -->
formatter:row => {<!-- 如果项目中已配置 jsx，可以直接在 formatter 中写 html -->
return row
}
}
];
tableData:[],<!-- 接口传的列表数组 -->
**----------------组件 1 end---------------**

**----------------组件 2 start--------------**
<NoticTip :test="test"></NoticTip>

传参：
test:'我是测试内容',<!-- 接口传的列表数组 -->
**----------------组件 2 end---------------**
