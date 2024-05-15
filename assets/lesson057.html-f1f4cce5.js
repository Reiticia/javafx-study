import{_ as a,o as s,c as e,a as n}from"./app-d6f5df65.js";const o={},p=n(`<h1 id="绑定判断" tabindex="-1"><a class="header-anchor" href="#绑定判断" aria-hidden="true">#</a> 绑定判断</h1><p>初始化两个监视属性</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SimpleIntegerProperty</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleIntegerProperty</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">SimpleIntegerProperty</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleIntegerProperty</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>大于<code>a.greaterThan(b)</code></p></li><li><p>小于<code>a.lessThan(b)</code></p></li><li><p>等于<code>a.isEqualTo(b)</code></p></li><li><p>不等于<code>a.isNotEqualTo(b)</code></p></li><li><p>大于等于<code>a.greaterThanOrEqualTo(b)</code></p></li><li><p>小于等于<code>a.lessThanOrEqualTo(b)</code></p></li></ul>`,4),l=[p];function t(c,r){return s(),e("div",null,l)}const d=a(o,[["render",t],["__file","lesson057.html.vue"]]);export{d as default};