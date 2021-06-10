# Visualization_CNN
神经网络可视化

***
## TODO
### 1. \\(=▽=)ゝ 神经网络可视化，仅视觉效果：  
  * 通过大脑模型点云模型，模拟神经元之间的电信号传播
    * **模型点坐标** 作为神经元坐标
    * **模型线** 作为神经元突触连接
    * 神经元含参数：
      * 信号量**all**
      * 被连接突触 传入电信号 **input[N]**
      * 连接突出 传出电信号 **output[N]**
    * 过程：
      * **input** 传进电信号，**all**增加
      * **all > max** 时，**output** 开始传出，**all**减小
      * 动态激活初始化神经元 使 **all>max**
  * 预计效果会像元胞自动机那样，简单的激活法则由于结点非线性连接导致涌现现象。  
  * 应该有不明觉厉的视觉效果。

### 2. (c ≧▽≦)b 有时间深入的话，由任务驱动的网络可视化：  
  * 用神经网络实现 **MNIST数据集** 的 **手写数字识别**。  
  * 将网络结点用上述 1.方法表现。  
  * 有不明觉厉的视觉效果基础上，完成手写数字识别的任务，更加不明觉厉，好耶！  
***

## 外部库
  * [math.min](https://mathjs.org/)
  * [jquery 1.11.2](https://jquery.com/)
  * [processing 1.6.6](https://github.com/processing-js/processing-js)
  * [three.min](https://threejs.org/)
  * [GeometryUtils](https://developer.mozilla.org/en-US/docs/Web/API/GeometryUtils)
  * [sylvester](http://sylvester.jcoglan.com/)
  * [stats.min](https://github.com/mrdoob/stats.js)
  * [tween.js](https://github.com/sole/tween.js)
  * [katex.min](https://katex.org/)
  * [three](https://github.com/mrdoob/three.js)

***
## ajax跨域
### 本地调试 ***visionCNN.html*** ，可视化网络无法显示，控制台信息：
`Access to XMLHttpRequest at '@/js/nn/webgl_convnet2.json' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.`

`GET file://@/js/nn/webgl_convnet2.json net::ERR_FAILED`
|||
| -- | -- |
| send	| @	jquery-1.11.2.min.js:4|
| ajax	| @	jquery-1.11.2.min.js:4|
| m.<computed>	| @	jquery-1.11.2.min.js:4|
| getJSON	| @	jquery-1.11.2.min.js:4|
| loadData	| @	3d.html:930|
| (anonymous)	| @	3d.html:279|

`GET file://@/cnn/[object%20ImageData] net::ERR_FILE_NOT_FOUND`
|||
| -- | -- |
| Image 	| @	board.js:331|
| setImg	| @	board.js:331|
| restoreWebStorage	| @	board.js:331|
| DrawingBoard.Board | @	board.js:331|
| (anonymous)	| @	3d.html:279|
### ***请使用本地服务器进行调试***
  - 推荐通过 VScode **LiveSever** open with live sever 调试 ***visionCNN.html***
***
