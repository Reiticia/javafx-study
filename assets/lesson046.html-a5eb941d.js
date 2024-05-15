import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const e="/assets/VeryCapture_20220520115121-5511b687.gif",p={},c=t(`<h1 id="progressbar和progressindicator进度显示" tabindex="-1"><a class="header-anchor" href="#progressbar和progressindicator进度显示" aria-hidden="true">#</a> ProgressBar和ProgressIndicator进度显示</h1><h2 id="progressbar" tabindex="-1"><a class="header-anchor" href="#progressbar" aria-hidden="true">#</a> ProgressBar</h2><ul><li><p>创建进度条<code>ProgressBar progressBar = new ProgressBar();</code></p></li><li><p>设置进度<code>progressBar.setProgress(0.5);</code></p></li><li><p>设置长度宽度</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>progressBar<span class="token punctuation">.</span><span class="token function">setPrefWidth</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
progressBar<span class="token punctuation">.</span><span class="token function">setPrefHeight</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置不确定进度<code>progressBar.setProgress(ProgressBar.INDETERMINATE_PROGRESS);</code></p></li></ul><h2 id="progressindicator" tabindex="-1"><a class="header-anchor" href="#progressindicator" aria-hidden="true">#</a> ProgressIndicator</h2><ul><li><p>设置进度圈<code>ProgressIndicator progressIndicator = new ProgressIndicator(0.5);</code></p></li><li><p>设置进度<code>progressIndicator.setProgress(0.5);</code></p></li><li><p>设置长度宽度</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 这两个设置在Jdk11中无效</span>
progressIndicator<span class="token punctuation">.</span><span class="token function">setPrefWidth</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
progressIndicator<span class="token punctuation">.</span><span class="token function">setPrefHeight</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置不确定进度(默认)<code>progressBar.setProgress(ProgressBar.INDETERMINATE_PROGRESS);</code></p></li></ul><h2 id="控制" tabindex="-1"><a class="header-anchor" href="#控制" aria-hidden="true">#</a> 控制</h2><ol><li><p>创建一个按钮</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Button</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">setLayoutX</span><span class="token punctuation">(</span><span class="token number">150.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">setLayoutY</span><span class="token punctuation">(</span><span class="token number">150.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置按钮点击事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>button<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>scheduledService<span class="token punctuation">.</span><span class="token function">isRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        scheduledService<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        scheduledService<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;pause&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建ScheduledService的匿名内部类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 该变量被定义为类全局变量</span>
scheduledService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> i <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Task</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> <span class="token function">createTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Task</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">protected</span> <span class="token class-name">Double</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> i <span class="token operator">+=</span> <span class="token number">0.0001</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">updateValue</span><span class="token punctuation">(</span><span class="token class-name">Double</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                progressBar<span class="token punctuation">.</span><span class="token function">setProgress</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                progressIndicator<span class="token punctuation">.</span><span class="token function">setProgress</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    scheduledService<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;finish&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>scheduledService设置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>scheduledService<span class="token punctuation">.</span><span class="token function">setDelay</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">millis</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scheduledService<span class="token punctuation">.</span><span class="token function">setPeriod</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">millis</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scheduledService<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><img src="`+e+'" alt=""></p>',8),o=[c];function i(u,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","lesson046.html.vue"]]);export{d as default};