import{_ as n,o as s,c as a,a as e}from"./app-d6f5df65.js";const t={},p=e(`<h1 id="canvas画布" tabindex="-1"><a class="header-anchor" href="#canvas画布" aria-hidden="true">#</a> Canvas画布</h1><ul><li><p>创建画布<code>Canvas canvas = new Canvas(600, 600);</code></p></li><li><p>获取画笔(画布内描述物体超出画布部分会被裁切)<code>GraphicsContext graphicsContext2D = canvas.getGraphicsContext2D();</code></p></li><li><p>设置画笔填充颜色<code>graphicsContext2D.setFill(Color.RED);</code></p></li><li><p>设置画笔边框颜色<code>graphicsContext2D.setStroke(Color.BLUE);</code></p></li><li><p>设置画笔边框宽度<code>graphicsContext2D.setLineWidth(4);</code></p></li><li><p>画矩形<code>graphicsContext2D.fillRect(100, 100, 100, 100);</code></p></li><li><p>画矩形边框<code>graphicsContext2D.strokeRect(200, 200, 100, 100);</code></p></li><li><p>画线<code>graphicsContext2D.strokeLine(300, 200, 300, 100);</code></p></li><li><p>画多边形<code>graphicsContext2D.fillPolygon(new double[]{400, 300, 500}, new double[]{100, 300, 300}, 3);</code></p></li><li><p>设置字体大小<code>graphicsContext2D.setFont(Font.font(20));</code></p></li><li><p>画文字<code>graphicsContext2D.fillText(&quot;Hello World&quot;, 200, 350);</code></p></li><li><p>画带边框文字<code>graphicsContext2D.strokeText(&quot;Hello World&quot;, 100, 350);</code></p></li><li><p>清除画布<code>graphicsContext2D.clearRect(0,0,200,200);</code></p></li><li><p>旋转画布<code>graphicsContext2D.rotate(45);</code></p></li><li><p>开始绘制<code>graphicsContext2D.beginPath();</code></p></li><li><p>设置路径<code>graphicsContext2D.appendSVGPath(&quot;m100,100 c50,-50,150,50,200,0 z&quot;);</code></p></li><li><p>设置线条连接点为圆形<code>graphicsContext2D.setLineJoin(StrokeLineJoin.ROUND);</code></p></li><li><p>绘制边框<code>graphicsContext2D.stroke();</code></p></li><li><p>绘制填充<code>graphicsContext2D.fill();</code></p></li><li><p>绘制二次贝塞尔曲线<code>graphicsContext2D.quadraticCurveTo(200, 300, 300, 200);</code></p></li><li><p>图片绘制（图片路径，从图片(0,0)点开始取 宽100 高100 画到画布上(10,10)点画 宽200 高200的图片(缩放)）</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>graphicsContext2D<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token string">&quot;file:E://Users//86158//图片//0ea0dc59c3c01450e33a1d2131f1c6f.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>像素绘制</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PixelWriter</span> pixelWriter <span class="token operator">=</span> graphicsContext2D<span class="token punctuation">.</span><span class="token function">getPixelWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        pixelWriter<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>设置画笔透明度<code>graphicsContext2D.setGlobalAlpha(0.5);</code></p></li><li><p>保存画布状态<code>graphicsContext2D.save();</code></p></li><li><p>设置画笔阴影<code>graphicsContext2D.setEffect(new DropShadow());</code></p></li><li><p>恢复画布状态<code>graphicsContext2D.restore();</code></p></li></ul>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","lesson174.html.vue"]]);export{r as default};