import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p={},o=t(`<h1 id="mediaplayer获取文件信息" tabindex="-1"><a class="header-anchor" href="#mediaplayer获取文件信息" aria-hidden="true">#</a> MediaPlayer获取文件信息</h1><ul><li><p>获取曲目信息<code>media.getTracks().forEach(System.out::println)</code></p></li><li><p>获取元数据<code>media.getMetadata().forEach((s, o) -&gt; System.out.println(s + &quot;:&quot; + o))</code></p></li><li><p>添加标记</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>media<span class="token punctuation">.</span><span class="token function">getMarkers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
media<span class="token punctuation">.</span><span class="token function">getMarkers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
media<span class="token punctuation">.</span><span class="token function">getMarkers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打印标记</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>mediaPlayer<span class="token punctuation">.</span><span class="token function">setOnMarker</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span> <span class="token class-name">ColorConsole</span><span class="token punctuation">.</span><span class="token constant">BLUE</span> <span class="token operator">+</span> event<span class="token punctuation">.</span><span class="token function">getMarker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token class-name">ColorConsole</span><span class="token punctuation">.</span><span class="token constant">RESET</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 打印标记  </span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getMarker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
        primaryStage<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","lesson202.html.vue"]]);export{k as default};
