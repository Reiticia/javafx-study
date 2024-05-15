import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p={},c=t(`<h1 id="linechart折线图" tabindex="-1"><a class="header-anchor" href="#linechart折线图" aria-hidden="true">#</a> LineChart折线图</h1><ul><li><p>填充数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">LineChart</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> <span class="token function">getView2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// x轴</span>
    <span class="token class-name">CategoryAxis</span> <span class="token class-name">X</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CategoryAxis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// y轴</span>
    <span class="token class-name">NumberAxis</span> <span class="token class-name">Y</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberAxis</span><span class="token punctuation">(</span><span class="token string">&quot;y轴&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 第一种类别</span>
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Series</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> xy1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Series</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    xy1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;xy1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 第二种类别</span>
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Series</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> xy2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Series</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    xy2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;xy2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> data1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> data2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> data3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> data4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;40&quot;</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> data5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> data6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> data7 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;40&quot;</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> data8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYChart<span class="token punctuation">.</span>Data</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;50&quot;</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 给每种类别各自添加数据</span>
    xy1<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> data3<span class="token punctuation">,</span> data4<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    xy2<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>data5<span class="token punctuation">,</span> data6<span class="token punctuation">,</span> data7<span class="token punctuation">,</span> data8<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">LineChart</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LineChart</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">X</span><span class="token punctuation">,</span> <span class="token class-name">Y</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    chart<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>xy1<span class="token punctuation">,</span> xy2<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">return</span> chart<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他设置参考柱状图</p></li><li><p>css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*选中折线图中第一条线段的线段*/</span>
<span class="token selector">.chart-series-line.default-color0</span> <span class="token punctuation">{</span>  
    <span class="token property">-fx-stroke</span><span class="token punctuation">:</span> #ffffcc<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
<span class="token comment">/*选中折线图中第一条线段的顶点*/</span>
<span class="token selector">.chart-line-symbol.default-color0</span> <span class="token punctuation">{</span>  
    <span class="token property">-fx-background-color</span><span class="token punctuation">:</span> #ccffff<span class="token punctuation">,</span> #ffcccc<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  

<span class="token comment">/*选中折线图中第二条线段的线段*/</span>
<span class="token selector">.chart-series-line.default-color1</span> <span class="token punctuation">{</span>  
    <span class="token property">-fx-stroke</span><span class="token punctuation">:</span> #99cccc<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  

<span class="token comment">/*选中折线图中第二条线段的顶点*/</span>
<span class="token selector">.chart-line-symbol.default-color0</span> <span class="token punctuation">{</span>  
    <span class="token property">-fx-background-color</span><span class="token punctuation">:</span> #ffcc99<span class="token punctuation">,</span> #ffcccc<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2),e=[c];function o(l,u){return s(),a("div",null,e)}const k=n(p,[["render",o],["__file","lesson130.html.vue"]]);export{k as default};