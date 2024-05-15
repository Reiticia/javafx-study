import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const e="/assets/VeryCapture_20220619221550-fdbf7d9c.gif",o={},p=t(`<h1 id="animation-scaletransition缩放动画" tabindex="-1"><a class="header-anchor" href="#animation-scaletransition缩放动画" aria-hidden="true">#</a> Animation ScaleTransition缩放动画</h1><ul><li><p>创建缩放动画<code>ScaleTransition st = new ScaleTransition();</code></p></li><li><p>设置动画持续时间<code>st.setDuration(Duration.seconds(3));</code></p></li><li><p>设置动画的节点<code>st.setNode(rectangle);</code></p></li><li><p>设置起始比例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>st<span class="token punctuation">.</span><span class="token function">setFromX</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 起始比例  </span>
st<span class="token punctuation">.</span><span class="token function">setFromY</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置终止比例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>st<span class="token punctuation">.</span><span class="token function">setToX</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 终止比例  </span>
st<span class="token punctuation">.</span><span class="token function">setToY</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>每次缩放的比例<strong>如果和setTo同时存在，则该设置无效</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>st<span class="token punctuation">.</span><span class="token function">setByX</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 每次缩放的比例，如果和setTo同时存在，则该设置无效  </span>
st<span class="token punctuation">.</span><span class="token function">setByY</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置动画插值器<code>st.setInterpolator(Interpolator.LINEAR);</code></p></li></ul><p><img src="`+e+'" alt=""></p>',3),c=[p];function i(l,u){return s(),a("div",null,c)}const d=n(o,[["render",i],["__file","lesson188.html.vue"]]);export{d as default};