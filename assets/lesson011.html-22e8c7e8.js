import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p={},e=t(`<h1 id="设置快捷键" tabindex="-1"><a class="header-anchor" href="#设置快捷键" aria-hidden="true">#</a> 设置快捷键</h1><ul><li><p>方式一</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// KeyCodeCombination第一个参数是主按键，后面的参数为辅助按键（可变参数）</span>
<span class="token class-name">KeyCombination</span> keyCombination <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyCodeCombination</span><span class="token punctuation">(</span><span class="token class-name">KeyCode</span><span class="token punctuation">.</span><span class="token constant">ENTER</span><span class="token punctuation">,</span> <span class="token class-name">KeyCombination</span><span class="token punctuation">.</span><span class="token constant">ALT_DOWN</span><span class="token punctuation">,</span> <span class="token class-name">KeyCombination</span><span class="token punctuation">.</span><span class="token constant">CONTROL_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Mnemonic</span> mnemonic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mnemonic</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> keyCombination<span class="token punctuation">)</span><span class="token punctuation">;</span>  
scene<span class="token punctuation">.</span><span class="token function">addMnemonic</span><span class="token punctuation">(</span>mnemonic<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式二</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// KeyCharacterCombination第一个参数是主按键，后面的参数为辅助按键（可变参数）</span>
<span class="token class-name">KeyCharacterCombination</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyCharacterCombination</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token class-name">KeyCombination</span><span class="token punctuation">.</span><span class="token constant">ALT_DOWN</span><span class="token punctuation">,</span> <span class="token class-name">KeyCombination</span><span class="token punctuation">.</span><span class="token constant">CONTROL_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Mnemonic</span> mnemonic1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mnemonic</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">addMnemonic</span><span class="token punctuation">(</span>mnemonic1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方式三</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">KeyCodeCombination</span> keyCodeCombination <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyCodeCombination</span><span class="token punctuation">(</span><span class="token class-name">KeyCode<span class="token punctuation">.</span>Y</span><span class="token punctuation">,</span> <span class="token class-name">KeyCombination</span><span class="token punctuation">.</span><span class="token constant">ALT_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">getAccelerators</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>keyCodeCombination<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;RUN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>RUN<br> JavaFX Application Thread</p></blockquote></li></ul>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","lesson011.html.vue"]]);export{k as default};