import{_ as t,o as e,c as o,a as i}from"./app-d6f5df65.js";const n="/assets/VeryCapture_20220619215439-d5b20696.gif",r={},a=i('<h1 id="animation-rotatetransition旋转动画" tabindex="-1"><a class="header-anchor" href="#animation-rotatetransition旋转动画" aria-hidden="true">#</a> Animation RotateTransition旋转动画</h1><ul><li><p>创建旋转动画<code>RotateTransition rt = new RotateTransition();</code></p></li><li><p>设置动画持续时间<code>rt.setDuration(Duration.seconds(3));</code></p></li><li><p>设置动画的节点<code>rt.setNode(rectangle);</code></p></li><li><p>设置起始角度<code>rt.setFromAngle(0);</code></p></li><li><p>设置终止角度<code>rt.setToAngle(360);</code></p></li><li><p>设置偏移角度<code>rt.setByAngle(360);</code></p></li><li><p>设置旋转轴<code>rt.setAxis(new Point3D(0,0,1));</code></p></li><li><p>设置插值器，默认是匀速<code>rt.setInterpolator(Interpolator.LINEAR);</code></p></li></ul><p><strong>不能设置旋转点，默认以中心点作为旋转点</strong><img src="'+n+'" alt=""></p>',3),s=[a];function c(l,d){return e(),o("div",null,s)}const _=t(r,[["render",c],["__file","lesson187.html.vue"]]);export{_ as default};