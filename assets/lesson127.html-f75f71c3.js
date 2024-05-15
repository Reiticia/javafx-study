import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p="/assets/Pasted image 20220613151218-bb163c4c.png",e={},o=t(`<h1 id="piechart饼状图" tabindex="-1"><a class="header-anchor" href="#piechart饼状图" aria-hidden="true">#</a> PieChart饼状图</h1><ul><li><p>创建饼状图</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 所有的data中的value不需要总和为100，只是演示时便于观察  </span>
<span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span> data1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span><span class="token punctuation">(</span><span class="token string">&quot;data1&quot;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span> data2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span><span class="token punctuation">(</span><span class="token string">&quot;data2&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span> data3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span><span class="token punctuation">(</span><span class="token string">&quot;data3&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span> data4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span><span class="token punctuation">(</span><span class="token string">&quot;data4&quot;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span> data5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span><span class="token punctuation">(</span><span class="token string">&quot;data5&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">ObservableList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PieChart<span class="token punctuation">.</span>Data</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">FXCollections</span><span class="token punctuation">.</span><span class="token function">observableArrayList</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> data3<span class="token punctuation">,</span> data4<span class="token punctuation">,</span> data5<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">PieChart</span> chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PieChart</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>指示线长度<code>chart.setLabelLineLength(100);</code></p></li><li><p>设置起始角度(未设置默认以向右射线顺时针分配区域，设置正数逆时针旋转，设置负数顺时针旋转)\`chart.setStartAngle(90);</p></li><li><p>设置不显示指示线以及文本内容<code>chart.setLabelsVisible(false);</code></p></li><li><p>设置初始分配时按照相反方向<code>chart.setClockwise(true);</code></p></li><li><p>设置不显示下面的图示<code>chart.setLegendVisible(false);</code></p></li><li><p>设置图示方位<code>chart.setLegendSide(Side.TOP);</code></p></li><li><p>设置图题<code>chart.setTitle(&quot;这是图题&quot;);</code></p></li><li><p>设置图题方位<code>chart.setTitleSide(Side.RIGHT);</code></p></li><li><p>改变数据是否播放动画<code>chart.setAnimated(true);</code></p></li><li><p>遍历饼图中的每一项数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>chart<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>data <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
  <span class="token class-name">Node</span> node <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">getNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token class-name">Tooltip</span> tooltip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tooltip</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">getPieValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  data<span class="token punctuation">.</span><span class="token function">pieValueProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> tooltip<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>newValue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  node<span class="token punctuation">.</span><span class="token function">setOnMouseClicked</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span><span class="token function">getPieValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  tooltip<span class="token punctuation">.</span><span class="token function">setFont</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Font</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token class-name">Tooltip</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> tooltip<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图 <img src="`+p+`" alt=""></p></li><li><p>引入css</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>scene<span class="token punctuation">.</span><span class="token function">getStylesheets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&quot;css/chart.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toExternalForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>外部css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.chart-pie.data0</span> <span class="token punctuation">{</span>  
    <span class="token property">-fx-pie-color</span><span class="token punctuation">:</span> #ffffcc<span class="token punctuation">;</span>  
    <span class="token property">-fx-background-color</span><span class="token punctuation">:</span> #ffffcc<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
<span class="token selector">.chart</span> <span class="token punctuation">{</span>  
    <span class="token property">-fx-clockwise</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span>  
    <span class="token property">-fx-pie-label-visible</span><span class="token punctuation">:</span> true<span class="token punctuation">;</span>  
    <span class="token property">-fx-label-line-length</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>  
    <span class="token property">-fx-start-angle</span><span class="token punctuation">:</span> 90<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  

<span class="token comment">/*设置图示*/</span>  
<span class="token selector">.chart-legend-item-symbol</span> <span class="token punctuation">{</span>  
    <span class="token property">-fx-pref-width</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>  
    <span class="token property">-fx-pref-height</span><span class="token punctuation">:</span> 30<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2),c=[o];function l(u,i){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","lesson127.html.vue"]]);export{r as default};