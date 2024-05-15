import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p="/assets/Pasted image 20220518151421-0e3d8740.png",e="/assets/Pasted image 20220518151616-9e9ebe42.png",c="/assets/Pasted image 20220518151616-9e9ebe42.png",o={},u=t(`<h1 id="choicebox下拉列表修改列表中的属性" tabindex="-1"><a class="header-anchor" href="#choicebox下拉列表修改列表中的属性" aria-hidden="true">#</a> ChoiceBox下拉列表修改列表中的属性</h1><p><strong>通用初始值设置、渲染和布局调整</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TextField</span> textField<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
textField<span class="token punctuation">.</span><span class="token function">setPrefWidth</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Button</span> button<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string">&quot;changeName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ChoiceBox</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> choiceBox<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ChoiceBox</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span> student1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token string">&quot;数学&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span> student2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token string">&quot;英语&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span> student3<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span><span class="token number">93</span><span class="token punctuation">,</span><span class="token string">&quot;美术&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
choiceBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>student1<span class="token punctuation">,</span>student2<span class="token punctuation">,</span>student3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 添加选项  </span>
choiceBox<span class="token punctuation">.</span><span class="token function">setPrefWidth</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
choiceBox<span class="token punctuation">.</span><span class="token function">setConverter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringConverter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">Student</span> object<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> value<span class="token operator">=</span>object<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span>object<span class="token punctuation">.</span><span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span>object<span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Student</span> <span class="token function">fromString</span><span class="token punctuation">(</span><span class="token class-name">String</span> string<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;fromString:&quot;</span><span class="token operator">+</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
anchorPane<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>textField<span class="token punctuation">,</span>button<span class="token punctuation">,</span>choiceBox<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AnchorPane</span><span class="token punctuation">.</span><span class="token function">setTopAnchor</span><span class="token punctuation">(</span>textField<span class="token punctuation">,</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AnchorPane</span><span class="token punctuation">.</span><span class="token function">setTopAnchor</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AnchorPane</span><span class="token punctuation">.</span><span class="token function">setLeftAnchor</span><span class="token punctuation">(</span>textField<span class="token punctuation">,</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AnchorPane</span><span class="token punctuation">.</span><span class="token function">setLeftAnchor</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span><span class="token number">250.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AnchorPane</span><span class="token punctuation">.</span><span class="token function">setTopAnchor</span><span class="token punctuation">(</span>choiceBox<span class="token punctuation">,</span><span class="token number">50.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">AnchorPane</span><span class="token punctuation">.</span><span class="token function">setLeftAnchor</span><span class="token punctuation">(</span>choiceBox<span class="token punctuation">,</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p><h2 id="第一种方式" tabindex="-1"><a class="header-anchor" href="#第一种方式" aria-hidden="true">#</a> 第一种方式</h2><ol><li><p>实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
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
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>按钮点击事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>button<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>event<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> newName<span class="token operator">=</span>textField<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>newName<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Student</span> student<span class="token operator">=</span>choiceBox<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获得选中栏的索引  </span>
    <span class="token keyword">int</span> i<span class="token operator">=</span>choiceBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 移除  </span>
    choiceBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 修改  </span>
    student<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 添加回去  </span>
    choiceBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>效果图 <img src="`+e+`" alt=""></p><h2 id="第二种方式" tabindex="-1"><a class="header-anchor" href="#第二种方式" aria-hidden="true">#</a> 第二种方式</h2><ol><li><p>实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 使用监听属性对基本数据类型进行包装</span>
    <span class="token keyword">private</span> <span class="token class-name">SimpleStringProperty</span> name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">SimpleDoubleProperty</span> score <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDoubleProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">SimpleStringProperty</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleStringProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">double</span> score<span class="token punctuation">,</span> <span class="token class-name">String</span> subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>subject<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> score<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScore</span><span class="token punctuation">(</span><span class="token keyword">double</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>score<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> subject<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token class-name">String</span> subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>subject<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token keyword">public</span> <span class="token class-name">SimpleStringProperty</span> <span class="token function">getNameSimpleStringProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>按钮点击事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>button<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">String</span> newName <span class="token operator">=</span> textField<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newName<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token class-name">Student</span> student <span class="token operator">=</span> choiceBox<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    student<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>属性变化监听事件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>choiceBox<span class="token punctuation">.</span><span class="token function">getSelectionModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectedItemProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    newValue<span class="token punctuation">.</span><span class="token function">getNameSimpleStringProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable1<span class="token punctuation">,</span> oldValue1<span class="token punctuation">,</span> newValue1<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
        <span class="token keyword">int</span> index <span class="token operator">=</span> choiceBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        choiceBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        choiceBox<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>效果图 <img src="`+c+'" alt=""></p>',10),l=[u];function i(k,d){return s(),a("div",null,l)}const v=n(o,[["render",i],["__file","lesson037.html.vue"]]);export{v as default};