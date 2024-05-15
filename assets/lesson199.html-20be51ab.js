import{_ as n,o as a,c as s,a as t}from"./app-d6f5df65.js";const p={},e=t(`<h1 id="media-mediaplayer音频播放" tabindex="-1"><a class="header-anchor" href="#media-mediaplayer音频播放" aria-hidden="true">#</a> Media MediaPlayer音频播放</h1><ul><li><p>加载音频</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token string">&quot;music/バレンタインデーキッス.mp3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Media</span> media <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Media</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">toExternalForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">MediaPlayer</span> mediaPlayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MediaPlayer</span><span class="token punctuation">(</span>media<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解码音频地址</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> decode <span class="token operator">=</span> <span class="token class-name">URLDecoder</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">toExternalForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 解码  </span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>decode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自动播放<code>mediaPlayer.setAutoPlay(true);</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>mediaPlayer<span class="token punctuation">.</span><span class="token function">setOnMarker</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token operator">+</span> <span class="token class-name">ColorConsole</span><span class="token punctuation">.</span><span class="token constant">BLUE</span> <span class="token operator">+</span> event<span class="token punctuation">.</span><span class="token function">getMarker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token class-name">ColorConsole</span><span class="token punctuation">.</span><span class="token constant">RESET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 打印标记 </span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getMarker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
        primaryStage<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>mediaPlayer<span class="token punctuation">.</span><span class="token function">setOnReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;media.getDuration().toSeconds() = &quot;</span> <span class="token operator">+</span> media<span class="token punctuation">.</span><span class="token function">getDuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 获取音频时长  </span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;mediaPlayer.getTotalDuration().toSeconds() = &quot;</span> <span class="token operator">+</span> mediaPlayer<span class="token punctuation">.</span><span class="token function">getTotalDuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 获取音频时长  </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置音量0~1<code>mediaPlayer.setVolume(0.3);</code></p></li><li><p>设置播放速率<code>mediaPlayer.setRate(3);</code></p></li><li><p>设置开始时间<code>mediaPlayer.setStartTime(Duration.seconds(10));</code></p></li><li><p>设置结束时间<code>mediaPlayer.setStopTime(Duration.seconds(20));</code></p></li><li><p>设置循环次数，无限循环<code>mediaPlayer.setCycleCount(MediaPlayer.INDEFINITE);</code></p></li><li><p>获取循环次数<code>mediaPlayer.getCycleCount();</code></p></li><li><p>静音<code>mediaPlayer.setMute(true);</code></p></li><li><p>获取当前播放时间<code>mediaPlayer.getCurrentTime()</code></p></li><li><p>状态改变</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>mediaPlayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 播放</span>
mediaPlayer<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 停止</span>
mediaPlayer<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 暂停</span>
mediaPlayer<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 注销音乐，释放资源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2),o=[e];function c(l,u){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","lesson199.html.vue"]]);export{k as default};