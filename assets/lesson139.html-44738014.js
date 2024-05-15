import{_ as n,o as s,c as e,a}from"./app-d6f5df65.js";const t="/assets/Pasted image 20220615074255-4bd615b9.png",o={},l=a(`<h1 id="webview" tabindex="-1"><a class="header-anchor" href="#webview" aria-hidden="true">#</a> WebView</h1><ul><li><p>创建WebView<code>WebView webView = new WebView();</code></p></li><li><p>获取Engine<code>WebEngine engine = webView.getEngine();</code></p></li><li><p>加载网页<code>engine.load(&quot;https://www.baidu.com&quot;);</code></p></li><li><p>设置网页字体大小<code>webView.setFontScale(0.5);</code></p></li><li><p>网页缩放<code>webView.setZoom(0.5);</code></p></li><li><p>加载HTML文本</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> html <span class="token operator">=</span> <span class="token string">&quot;&lt;html&gt;&quot;</span> <span class="token operator">+</span>  
      <span class="token string">&quot;&lt;head&gt;&quot;</span> <span class="token operator">+</span>  
      <span class="token string">&quot;&lt;title&gt;JavaFX WebView&lt;/title&gt;&quot;</span> <span class="token operator">+</span>  
      <span class="token string">&quot;&lt;/head&gt;&quot;</span> <span class="token operator">+</span>  
      <span class="token string">&quot;&lt;body&gt;&quot;</span> <span class="token operator">+</span>  
      <span class="token string">&quot;&lt;h1&gt;Hello World&lt;/h1&gt;&quot;</span> <span class="token operator">+</span>  
      <span class="token string">&quot;&lt;/body&gt;&quot;</span> <span class="token operator">+</span>  
      <span class="token string">&quot;&lt;/html&gt;&quot;</span><span class="token punctuation">;</span>  
engine<span class="token punctuation">.</span><span class="token function">loadContent</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> <span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><img src="`+t+'" alt=""></p>',3),i=[l];function p(c,r){return s(),e("div",null,i)}const u=n(o,[["render",p],["__file","lesson139.html.vue"]]);export{u as default};