# React Life Cycle
1. Mounting 2.Updating 3.Unmounting

![lifecycle](./src/assets/react-lifecycle.jpg)

## 1. Mounting ##
```javascript
  1 constructor(props)
  2 componentWillMount()
  3 render()
  4 componentDidMout()
````
## 2. Updating ##
```javascript
  1 componentWillReceiveProps(nextProps)
  2 shouldComponentUpdate(nextProps, nextState)
  3 componentWillUpdate(nextProps, nextState)
  4 render()
  5 componentDidUpdate(prevProps, prevState)
````
## 3. Unmounting ##
```javascript
  1 componentWillUnMount()
````


## 初始化

1、getDefaultProps()

    设置默认的props，也可以用dufaultProps设置组件的默认属性.

2、getInitialState()

    在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props

3、componentWillMount()

    组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。

4、 render()

    react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。

5、componentDidMount()

    组件渲染之后调用，只调用一次。

## 更新

6、componentWillReceiveProps(nextProps)

    组件初始化时不调用，组件接受新的props时调用。

7、shouldComponentUpdate(nextProps, nextState)

    react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

8、componentWillUpdata(nextProps, nextState)

    组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state

9、render()

    组件渲染

10、componentDidUpdate()

    组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。

## 卸载

11、componentWillUnmount()

    组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
