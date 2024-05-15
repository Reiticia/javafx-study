import{_ as n,o as s,c as a,a as p}from"./app-d6f5df65.js";const t="/assets/VeryCapture_20220619195953-243a6c60.gif",e={},c=p(`<h1 id="animation-3d图形" tabindex="-1"><a class="header-anchor" href="#animation-3d图形" aria-hidden="true">#</a> Animation 3D图形</h1><ul><li><p>旋转</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Timeline</span> timelineR <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Rotate</span> rotate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rotate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 中心点  </span>
rotate<span class="token punctuation">.</span><span class="token function">setAxis</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Point3D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
box<span class="token punctuation">.</span><span class="token function">getTransforms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rotate<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyValue</span> angle1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValue</span><span class="token punctuation">(</span>rotate<span class="token punctuation">.</span><span class="token function">angleProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyFrame</span> kf1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyFrame</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> angle1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyValue</span> angle2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValue</span><span class="token punctuation">(</span>rotate<span class="token punctuation">.</span><span class="token function">angleProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyFrame</span> kf2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyFrame</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> angle2<span class="token punctuation">)</span><span class="token punctuation">;</span>  
timelineR<span class="token punctuation">.</span><span class="token function">getKeyFrames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>kf1<span class="token punctuation">,</span> kf2<span class="token punctuation">)</span><span class="token punctuation">;</span>  
timelineR<span class="token punctuation">.</span><span class="token function">setCycleCount</span><span class="token punctuation">(</span><span class="token class-name">Timeline</span><span class="token punctuation">.</span><span class="token constant">INDEFINITE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>缩放</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Timeline</span> timelineS <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Scale</span> scale <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 中心点  </span>
box<span class="token punctuation">.</span><span class="token function">getTransforms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>scale<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyValue</span> scale1x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValue</span><span class="token punctuation">(</span>scale<span class="token punctuation">.</span><span class="token function">xProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyValue</span> scale1y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValue</span><span class="token punctuation">(</span>scale<span class="token punctuation">.</span><span class="token function">yProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyValue</span> scale1z <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValue</span><span class="token punctuation">(</span>scale<span class="token punctuation">.</span><span class="token function">zProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyFrame</span> kf3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyFrame</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> scale1x<span class="token punctuation">,</span> scale1y<span class="token punctuation">,</span> scale1z<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyValue</span> scale2x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValue</span><span class="token punctuation">(</span>scale<span class="token punctuation">.</span><span class="token function">xProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyValue</span> scale2y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValue</span><span class="token punctuation">(</span>scale<span class="token punctuation">.</span><span class="token function">yProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyValue</span> scale2z <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValue</span><span class="token punctuation">(</span>scale<span class="token punctuation">.</span><span class="token function">zProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">KeyFrame</span> kf4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyFrame</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> scale2x<span class="token punctuation">,</span> scale2y<span class="token punctuation">,</span> scale2z<span class="token punctuation">)</span><span class="token punctuation">;</span>  
timelineS<span class="token punctuation">.</span><span class="token function">getKeyFrames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>kf3<span class="token punctuation">,</span> kf4<span class="token punctuation">)</span><span class="token punctuation">;</span>  
timelineS<span class="token punctuation">.</span><span class="token function">setCycleCount</span><span class="token punctuation">(</span><span class="token class-name">Timeline</span><span class="token punctuation">.</span><span class="token constant">INDEFINITE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
timelineS<span class="token punctuation">.</span><span class="token function">setAutoReverse</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><img src="`+t+'" alt=""></p>',3),o=[c];function l(u,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","lesson185.html.vue"]]);export{r as default};