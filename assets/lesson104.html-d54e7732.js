import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p={},e=t(`<h1 id="treeview自定义cell" tabindex="-1"><a class="header-anchor" href="#treeview自定义cell" aria-hidden="true">#</a> TreeView自定义Cell</h1><ol><li><p>准备数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TreeView</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> treeView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeView</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
treeView<span class="token punctuation">.</span><span class="token function">setLayoutX</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
treeView<span class="token punctuation">.</span><span class="token function">setLayoutY</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> china <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;中国&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> hlj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;黒龙江&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> heb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;哈尔滨&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> jms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;佳木斯&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> dq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;大庆&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
hlj<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>heb<span class="token punctuation">,</span> jms<span class="token punctuation">,</span> dq<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> gd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;广东&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> zj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;珠海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> sz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;深圳&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> dg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;东莞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
gd<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>zj<span class="token punctuation">,</span> sz<span class="token punctuation">,</span> dg<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;台湾&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;台北&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> gx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;高雄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;台南&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
tw<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>tb<span class="token punctuation">,</span> gx<span class="token punctuation">,</span> tn<span class="token punctuation">)</span><span class="token punctuation">;</span>  
china<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>hlj<span class="token punctuation">,</span> gd<span class="token punctuation">,</span> tw<span class="token punctuation">)</span><span class="token punctuation">;</span>  
treeView<span class="token punctuation">.</span><span class="token function">setRoot</span><span class="token punctuation">(</span>china<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置可编辑<code>treeView.setEditable(true);</code></p></li><li><p>自定义行</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>treeView<span class="token punctuation">.</span><span class="token function">setCellFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Callback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeView</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">TreeCell</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">TreeCell</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token class-name">TreeView</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeCell</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token annotation punctuation">@Override</span>  
            <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">updateItem</span><span class="token punctuation">(</span><span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token keyword">boolean</span> empty<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateItem</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> empty<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token keyword">if</span> <span class="token punctuation">(</span>empty <span class="token operator">||</span> item<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setGraphic</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token keyword">return</span><span class="token punctuation">;</span>  
                <span class="token punctuation">}</span>  
                <span class="token comment">// 展开时（右边使用）的图片  </span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTreeItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isExpanded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                    <span class="token class-name">ImageView</span> imageView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageView</span><span class="token punctuation">(</span><span class="token string">&quot;/images/add.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    imageView<span class="token punctuation">.</span><span class="token function">setPreserveRatio</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    imageView<span class="token punctuation">.</span><span class="token function">setFitWidth</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setDisclosureNode</span><span class="token punctuation">(</span>imageView<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
                    <span class="token comment">// 收起时（右边使用）的图片  </span>
                    <span class="token class-name">ImageView</span> imageView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageView</span><span class="token punctuation">(</span><span class="token string">&quot;/images/sub.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    imageView<span class="token punctuation">.</span><span class="token function">setPreserveRatio</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    imageView<span class="token punctuation">.</span><span class="token function">setFitWidth</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setDisclosureNode</span><span class="token punctuation">(</span>imageView<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token punctuation">}</span>  
                <span class="token comment">// 保存数据</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setUserData</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token comment">// 创建组件</span>
                <span class="token function">initGraphic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
            <span class="token annotation punctuation">@Override</span>  
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">startEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token class-name">TextField</span> textField <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setGraphic</span><span class="token punctuation">(</span>textField<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                textField<span class="token punctuation">.</span><span class="token function">requestFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token comment">// 回车提交编辑事件</span>
                textField<span class="token punctuation">.</span><span class="token function">setOnKeyPressed</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">KeyCode</span><span class="token punctuation">.</span><span class="token constant">ENTER</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                        <span class="token function">commitEdit</span><span class="token punctuation">(</span>textField<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                    <span class="token punctuation">}</span>  
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
            <span class="token annotation punctuation">@Override</span>  
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cancelEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">cancelEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token function">initGraphic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
            <span class="token annotation punctuation">@Override</span>  
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">commitEdit</span><span class="token punctuation">(</span><span class="token class-name">String</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">commitEdit</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token comment">// 提交编辑，修改数据</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setUserData</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
            <span class="token comment">// 自定义的组件样式</span>
            <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">initGraphic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token class-name">Label</span> label <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Label</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setGraphic</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),c=[e];function o(l,u){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","lesson104.html.vue"]]);export{k as default};
