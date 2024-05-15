import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p={},e=t(`<h1 id="监视属性" tabindex="-1"><a class="header-anchor" href="#监视属性" aria-hidden="true">#</a> 监视属性</h1><h2 id="simpleintegerproperty" tabindex="-1"><a class="header-anchor" href="#simpleintegerproperty" aria-hidden="true">#</a> SimpleIntegerProperty</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SimpleIntegerProperty</span> sip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleIntegerProperty</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
sip<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldValue: &quot;</span> <span class="token operator">+</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;newValue: &quot;</span> <span class="token operator">+</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sip.get() = &quot;</span> <span class="token operator">+</span> sip<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
sip<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sip.get() = &quot;</span> <span class="token operator">+</span> sip<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>sip.get() = 5 oldValue: 5 newValue: 10 sip.get() = 10</p></blockquote><h2 id="readonlydoublewrapper-readonlydoubleproperty" tabindex="-1"><a class="header-anchor" href="#readonlydoublewrapper-readonlydoubleproperty" aria-hidden="true">#</a> ReadOnlyDoubleWrapper&amp;ReadOnlyDoubleProperty</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ReadOnlyDoubleWrapper</span> rodw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadOnlyDoubleWrapper</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">ReadOnlyDoubleProperty</span> property <span class="token operator">=</span> rodw<span class="token punctuation">.</span><span class="token function">getReadOnlyProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;property.get() = &quot;</span> <span class="token operator">+</span> property<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;rodw.get() = &quot;</span> <span class="token operator">+</span> rodw<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
rodw<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;rodw.get() = &quot;</span> <span class="token operator">+</span> rodw<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;property.get() = &quot;</span> <span class="token operator">+</span> property<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>property.get() = 3.0 rodw.get() = 3.0 rodw.get() = 5.0 property.get() = 5.0</p></blockquote><h2 id="创建实体类封装监视属性" tabindex="-1"><a class="header-anchor" href="#创建实体类封装监视属性" aria-hidden="true">#</a> 创建实体类封装监视属性</h2><ol><li><p>实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token class-name">SimpleStringProperty</span> name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token string">&quot;nameProperty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">SimpleIntegerProperty</span> age <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleIntegerProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token string">&quot;ageProperty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

    <span class="token keyword">public</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">SimpleStringProperty</span> <span class="token function">getSimpleStringPropertyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">SimpleIntegerProperty</span> <span class="token function">getSimpleIntegerPropertyAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token string">&quot;Data&#39;s toString method&quot;</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建和使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Data</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token string">&quot;reine&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Button</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;change data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
data<span class="token punctuation">.</span><span class="token function">getSimpleStringPropertyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 证明该对象为监视属性本身  </span>
    <span class="token class-name">SimpleStringProperty</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SimpleStringProperty</span><span class="token punctuation">)</span> observable<span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name.getBean() = &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name.getName() = &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldValue = &quot;</span> <span class="token operator">+</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;newValue = &quot;</span> <span class="token operator">+</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 按钮点击事件  </span>
button<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    data<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    data<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击按钮后，控制台输出</p><blockquote><p>name.getBean() = Data&#39;s toString method name.getName() = nameProperty oldValue = reine newValue = Jack</p></blockquote><p>实体类性能优化<strong>在有需要时把对象属性转换为监视属性，不需要监听时为普通数据类型</strong></p></li><li><p>实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Data2</span> <span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">SimpleStringProperty</span> nameProperty <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  

    <span class="token keyword">public</span> <span class="token class-name">Data2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  

    <span class="token doc-comment comment">/**  
  * 如果不需要监视属性，则直接给普通属性赋值，如果需要监视属性，则调用监视属性set()方法设置值  
  * <span class="token keyword">@param</span> <span class="token parameter">name</span>  
  */</span>  
    <span class="token keyword">public</span> <span class="token class-name">Data2</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nameProperty <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
            <span class="token keyword">this</span><span class="token punctuation">.</span>nameProperty<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  

    <span class="token doc-comment comment">/**  
  * 如果不需要监视属性，则直接给普通属性赋值，如果需要监视属性，则调用监视属性set()方法设置值  
  * <span class="token keyword">@param</span> <span class="token parameter">name</span>  
  */</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nameProperty <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
            <span class="token keyword">this</span><span class="token punctuation">.</span>nameProperty<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  

    <span class="token doc-comment comment">/**  
  * 如果监视属性有值，返回监视属性值，否则返回普通属性值  
  * <span class="token keyword">@return</span>  
  */</span>  
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nameProperty <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>  
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nameProperty<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  

    <span class="token doc-comment comment">/**  
  * 需要使对象拥有监视属性时调用此方法对对象内部指定属性生成监视属性  
  *  
  * <span class="token keyword">@return</span> 对象监视属性  
  */</span>  
    <span class="token keyword">public</span> <span class="token class-name">SimpleStringProperty</span> <span class="token function">nameProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nameProperty <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            nameProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token keyword">return</span> nameProperty<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建和使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Data2</span> data2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data2</span><span class="token punctuation">(</span><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 监视属性  </span>
data2<span class="token punctuation">.</span><span class="token function">nameProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;oldValue = &quot;</span> <span class="token operator">+</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;newValue = &quot;</span> <span class="token operator">+</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 按钮点击事件  </span>
button<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    data2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>data2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击按钮后，控制台输出</p><blockquote><p>oldValue = Jack newValue = Tom Tom</p></blockquote></li></ol>`,9),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","lesson052.html.vue"]]);export{k as default};
