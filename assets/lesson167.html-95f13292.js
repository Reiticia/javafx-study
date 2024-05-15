import{_ as n,o as s,c as a,a as p}from"./app-d6f5df65.js";const t="/assets/Pasted image 20220617150857-9997f25c.png",e={},c=p(`<h1 id="_2d图形-ellipse椭圆形" tabindex="-1"><a class="header-anchor" href="#_2d图形-ellipse椭圆形" aria-hidden="true">#</a> 2D图形 Ellipse椭圆形</h1><ul><li><p>设置圆心位置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>ellipse<span class="token punctuation">.</span><span class="token function">setCenterX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse<span class="token punctuation">.</span><span class="token function">setCenterY</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置半径</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>ellipse<span class="token punctuation">.</span><span class="token function">setRadiusX</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 横半径  </span>
ellipse<span class="token punctuation">.</span><span class="token function">setRadiusY</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 纵半径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他设置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HBox</span> box <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Ellipse</span> ellipse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ellipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse<span class="token punctuation">.</span><span class="token function">setCenterX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse<span class="token punctuation">.</span><span class="token function">setCenterY</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse<span class="token punctuation">.</span><span class="token function">setFill</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;#ff9999&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse<span class="token punctuation">.</span><span class="token function">setRadiusX</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 横半径  </span>
ellipse<span class="token punctuation">.</span><span class="token function">setRadiusY</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 纵半径  </span>
box<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ellipse<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Ellipse</span> ellipse1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ellipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse1<span class="token punctuation">.</span><span class="token function">setCenterX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse1<span class="token punctuation">.</span><span class="token function">setCenterY</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse1<span class="token punctuation">.</span><span class="token function">setFill</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;#ff9999&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse1<span class="token punctuation">.</span><span class="token function">setRadiusX</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 横半径  </span>
ellipse1<span class="token punctuation">.</span><span class="token function">setRadiusY</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 纵半径  </span>
ellipse1<span class="token punctuation">.</span><span class="token function">setStrokeWidth</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse1<span class="token punctuation">.</span><span class="token function">setStroke</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;#996699&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse1<span class="token punctuation">.</span><span class="token function">setSmooth</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 平滑  </span>
box<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ellipse1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Ellipse</span> ellipse2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ellipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse2<span class="token punctuation">.</span><span class="token function">setCenterX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse2<span class="token punctuation">.</span><span class="token function">setCenterY</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse2<span class="token punctuation">.</span><span class="token function">setFill</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;#ff9999&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse2<span class="token punctuation">.</span><span class="token function">setRadiusX</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 横半径  </span>
ellipse2<span class="token punctuation">.</span><span class="token function">setRadiusY</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 纵半径  </span>
ellipse2<span class="token punctuation">.</span><span class="token function">setStrokeWidth</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse2<span class="token punctuation">.</span><span class="token function">setStroke</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;#996699&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ellipse2<span class="token punctuation">.</span><span class="token function">setSmooth</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 平滑  </span>
ellipse2<span class="token punctuation">.</span><span class="token function">getStrokeDashArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 虚线  </span>
box<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ellipse2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><img src="`+t+'" alt=""></p>',3),o=[c];function l(u,i){return s(),a("div",null,o)}const d=n(e,[["render",l],["__file","lesson167.html.vue"]]);export{d as default};