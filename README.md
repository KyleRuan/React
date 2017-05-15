# React
some React Demo &practise

## React lifecycle
![ajs-life](./READMEResource/ajs-life.png)

## 怎样构建一个React程序
1. 先画出web的草图
2. 将图划分为不同的组件
3. 实现静态版本的程序和组件
4. 将静态版本组合起来
5. 考虑state的组成和实现
6. 添加交互方法
7. 将这些组合在一起，完成最终的版本

## Redux
整个应用的状态信息都保存在一个store 中，React程序需要由store将数据从组件树的根节点
传入

### 步骤
1. actions 创建action
2. reducers

#### actions
主要页面上有多少个点击事件，数清楚后，为每一个事件注册个type，为每个事件写函数，
方法最后都需要返回注册时间的type。带参数的时间，在返回的type后，添加那个字段

#### reducers
对于不同的部分一般分为多个reducer，然后在主reducer中调用redux中的`combineReducers`
来结合多个。这里主要是根据不停的事件type返回相应的store。



