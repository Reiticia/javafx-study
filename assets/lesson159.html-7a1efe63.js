import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const e="/assets/Pasted image 20220616174224-077dba6a.png",p={},c=t(`<h1 id="perspectivetransform透视变换" tabindex="-1"><a class="header-anchor" href="#perspectivetransform透视变换" aria-hidden="true">#</a> PerspectiveTransform透视变换</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PerspectiveTransform</span> perspectiveTransform <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerspectiveTransform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
perspectiveTransform<span class="token punctuation">.</span><span class="token function">setUlx</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 左上角x坐标  </span>
perspectiveTransform<span class="token punctuation">.</span><span class="token function">setUly</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 左上角y坐标  </span>
perspectiveTransform<span class="token punctuation">.</span><span class="token function">setUrx</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 右上角x坐标  </span>
perspectiveTransform<span class="token punctuation">.</span><span class="token function">setUry</span><span class="token punctuation">(</span><span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 右上角y坐标  </span>
perspectiveTransform<span class="token punctuation">.</span><span class="token function">setLlx</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 左下角x坐标  </span>
perspectiveTransform<span class="token punctuation">.</span><span class="token function">setLly</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 左下角y坐标  </span>
perspectiveTransform<span class="token punctuation">.</span><span class="token function">setLrx</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 右下角x坐标  </span>
perspectiveTransform<span class="token punctuation">.</span><span class="token function">setLry</span><span class="token punctuation">(</span><span class="token number">80.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 右下角y坐标</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+'" alt=""></p>',3),o=[c];function l(i,u){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","lesson159.html.vue"]]);export{k as default};