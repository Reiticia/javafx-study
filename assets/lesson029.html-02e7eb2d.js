import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p="/assets/Pasted image 20220514170550-a29ff8f0.png",e="/assets/Pasted image 20220514182516-ae6139a5.png",o={},c=t(`<h1 id="titledpane、accordion" tabindex="-1"><a class="header-anchor" href="#titledpane、accordion" aria-hidden="true">#</a> TitledPane、Accordion</h1><h2 id="titledpane标题面板" tabindex="-1"><a class="header-anchor" href="#titledpane标题面板" aria-hidden="true">#</a> TitledPane标题面板</h2><ul><li><p>创建一个标题面板<code>TitledPane titledPane = new TitledPane(&quot;TitledPane&quot;, new Button(&quot;Button1&quot;));</code></p></li><li><p>创建多个标题面板放置在布局中</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TitledPane</span> titledPane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TitledPane</span><span class="token punctuation">(</span><span class="token string">&quot;TitledPane&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TitledPane</span> titledPane1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TitledPane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
titledPane1<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;TitledPane1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
titledPane1<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TitledPane</span> titledPane2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TitledPane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
titledPane2<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;TitledPane2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">HBox</span> hBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
hBox<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token string">&quot;-fx-background-color: #ff0000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
hBox<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;Button5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
titledPane2<span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span>hBox<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AnchorPane</span><span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>titledPane<span class="token punctuation">,</span> titledPane1<span class="token punctuation">,</span>titledPane2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p></li><li><p>设置标题面板是否有动画效果<code>titledPane.setAnimated(true);</code></p></li><li><p>设置标题面板是否可折叠<code>titledPane.setCollapsible(false);</code></p></li><li><p>设置标题面板是否展开<code>titledPane.setExpanded(false);</code></p></li><li><p>设置标题面板的图标<code>titledPane2.setGraphic(new Button(&quot;Button6&quot;));</code></p></li><li><p>设置组件从右到左进行排列<code>titledPane2.setNodeOrientation(NodeOrientation.INHERIT);</code></p></li><li><p>标题面板展开收起事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>titledPane<span class="token punctuation">.</span><span class="token function">expandedProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldValue = &quot;</span> <span class="token operator">+</span> oldValue <span class="token operator">+</span> <span class="token string">&quot; newValue = &quot;</span> <span class="token operator">+</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="accordion手风琴" tabindex="-1"><a class="header-anchor" href="#accordion手风琴" aria-hidden="true">#</a> Accordion手风琴</h2><blockquote><p>特点：手风琴中可以设置多个标题面板，同一时间只能展开一个面板</p></blockquote><ul><li><p>创建一个手风琴<code>Accordion accordion = new Accordion();</code></p></li><li><p>在手风琴中添加标题面板<code>accordion.getPanes().addAll(titledPane,titledPane1,titledPane2);</code></p></li><li><p>手风琴中所有标题面板展开和收起事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>accordion<span class="token punctuation">.</span><span class="token function">expandedPaneProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 解决面板收起时，newValue为null的问题  </span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldValue = &quot;</span> <span class="token operator">+</span> oldValue<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;被折叠&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">return</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newValue<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+'" alt=""></p></li></ul>',6),l=[c];function u(i,d){return s(),a("div",null,l)}const r=n(o,[["render",u],["__file","lesson029.html.vue"]]);export{r as default};