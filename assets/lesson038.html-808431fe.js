import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p="/assets/Pasted image 20220518173445-eaab3af2.png",e={},o=t(`<h1 id="combobox下拉列表" tabindex="-1"><a class="header-anchor" href="#combobox下拉列表" aria-hidden="true">#</a> ComboBox下拉列表</h1><ul><li><p>创建下拉列表</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ComboBox</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> comboBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboBox</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
comboBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token string">&quot;str1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;str2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;str3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;str4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;str5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置可编辑<strong>相较于ChoiceBox的特点</strong><code>comboBox.setEditable(true);</code></p></li><li><p>设置提示文字<code>comboBox.setPromptText(&quot;请输入&quot;);</code></p></li><li><p>设置占位符<code>comboBox.setPlaceholder(new Label(&quot;无元素&quot;));</code></p></li><li><p>设置可见行数<code>comboBox.setVisibleRowCount(3);</code></p></li><li><p>选项改变监听事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>comboBox<span class="token punctuation">.</span><span class="token function">getSelectionModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectedItemProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单击事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>comboBox<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>comboBox<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><ol><li><p>实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token keyword">double</span> score<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> subject<span class="token punctuation">;</span>  

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">double</span> score<span class="token punctuation">,</span> <span class="token class-name">String</span> subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>subject <span class="token operator">=</span> subject<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> score<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScore</span><span class="token punctuation">(</span><span class="token keyword">double</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> subject<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token class-name">String</span> subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>subject <span class="token operator">=</span> subject<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> o<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> o<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>  
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>  
        <span class="token keyword">return</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>score<span class="token punctuation">,</span> score<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> student<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>subject<span class="token punctuation">,</span> student<span class="token punctuation">.</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> score<span class="token punctuation">,</span> subject<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建泛型为<code>Student</code>的下拉列表并初始化一些数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Student</span> student1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token string">&quot;语文&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Student</span> student2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">69</span><span class="token punctuation">,</span> <span class="token string">&quot;数学&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Student</span> student3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token string">&quot;英语&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Student</span> student4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;赵六&quot;</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token string">&quot;物理&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Student</span> student5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;钱七&quot;</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token string">&quot;化学&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Student</span> student6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;孙八&quot;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token string">&quot;生物&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Student</span> student7 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;周九&quot;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token string">&quot;政治&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Student</span> student8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;吴十&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;历史&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">ComboBox</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> comboBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComboBox</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
comboBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>student1<span class="token punctuation">,</span> student2<span class="token punctuation">,</span> student3<span class="token punctuation">,</span> student4<span class="token punctuation">,</span> student5<span class="token punctuation">,</span> student6<span class="token punctuation">,</span> student7<span class="token punctuation">,</span> student8<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据处理</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>comboBox<span class="token punctuation">.</span><span class="token function">setConverter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringConverter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">Student</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>object <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token class-name">String</span> value <span class="token operator">=</span> object<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> object<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> object<span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token comment">// 在输入框中输入文本按下回车键时，调用此方法  </span>
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">Student</span> <span class="token function">fromString</span><span class="token punctuation">(</span><span class="token class-name">String</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">// 以:分隔每一项</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;[:]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>strings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>strings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> strings<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">return</span> student<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><img src="`+p+'" alt=""></p>',5),c=[o];function u(l,i){return s(),a("div",null,c)}const r=n(e,[["render",u],["__file","lesson038.html.vue"]]);export{r as default};
