import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p="/assets/Pasted image 20220607102315-cf065f49.png",e={},c=t(`<h1 id="treeview四种内置treecell" tabindex="-1"><a class="header-anchor" href="#treeview四种内置treecell" aria-hidden="true">#</a> TreeView四种内置TreeCell</h1><ul><li>设置可编辑<code>treeView.setEditable(true);</code></li></ul><h2 id="textfieldtreecell" tabindex="-1"><a class="header-anchor" href="#textfieldtreecell" aria-hidden="true">#</a> TextFieldTreeCell</h2><ul><li>使用<code>treeView.setCellFactory(TextFieldTreeCell.forTreeView());</code></li></ul><h2 id="comboboxtreecell" tabindex="-1"><a class="header-anchor" href="#comboboxtreecell" aria-hidden="true">#</a> ComboBoxTreeCell</h2><ul><li>使用<code>treeView.setCellFactory(ComboBoxTreeCell.forTreeView(new String[]{&quot;中国&quot;, &quot;韩国&quot;, &quot;日本&quot;}));</code></li></ul><h2 id="choiceboxtreecell" tabindex="-1"><a class="header-anchor" href="#choiceboxtreecell" aria-hidden="true">#</a> ChoiceBoxTreeCell</h2><ul><li>使用<code>treeView.setCellFactory(ChoiceBoxTreeCell.forTreeView(new String[]{&quot;中国&quot;, &quot;韩国&quot;, &quot;日本&quot;}));</code></li></ul><h2 id="checkboxtreecell-不需要设置可编辑即可修改选中" tabindex="-1"><a class="header-anchor" href="#checkboxtreecell-不需要设置可编辑即可修改选中" aria-hidden="true">#</a> CheckBoxTreeCell（不需要设置可编辑即可修改选中）</h2><ol><li><p>定义Property实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token class-name">SimpleBooleanProperty</span> selected <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleBooleanProperty</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">SimpleStringProperty</span> value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

    <span class="token keyword">public</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> selected<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>selected<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> selected<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">SimpleBooleanProperty</span> <span class="token function">selectedProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> selected<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSelected</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>selected<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">SimpleStringProperty</span> <span class="token function">valueProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>装填TreeView</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TreeView</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> treeView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeView</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
treeView<span class="token punctuation">.</span><span class="token function">setLayoutX</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
treeView<span class="token punctuation">.</span><span class="token function">setLayoutY</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> china <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;中国&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> hlj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;黒龙江&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> heb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;哈尔滨&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> jms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;佳木斯&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> dq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;大庆&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
hlj<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>heb<span class="token punctuation">,</span> jms<span class="token punctuation">,</span> dq<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> gd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;广东&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> zj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;珠海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> sz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;深圳&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> dg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;东莞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
gd<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>zj<span class="token punctuation">,</span> sz<span class="token punctuation">,</span> dg<span class="token punctuation">)</span><span class="token punctuation">;</span>  
china<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>hlj<span class="token punctuation">,</span> gd<span class="token punctuation">)</span><span class="token punctuation">;</span>  
treeView<span class="token punctuation">.</span><span class="token function">setRoot</span><span class="token punctuation">(</span>china<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置显示效果（CheckBoxTreeCell）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>treeView<span class="token punctuation">.</span><span class="token function">setCellFactory</span><span class="token punctuation">(</span><span class="token class-name">CheckBoxTreeCell</span><span class="token punctuation">.</span><span class="token function">forTreeView</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Callback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeItem</span><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">ObservableValue</span><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">ObservableValue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>treeView<span class="token punctuation">.</span><span class="token function">getTreeItemLevel</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            param<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSelected</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token keyword">return</span> param<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectedProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">StringConverter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeItem</span><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> object<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> <span class="token function">fromString</span><span class="token punctuation">(</span><span class="token class-name">String</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p></li></ol>',10),o=[c];function l(u,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","lesson103.html.vue"]]);export{r as default};