import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p="/assets/VeryCapture_20220608213639-75714527.gif",e={},o=t(`<h1 id="多任务task" tabindex="-1"><a class="header-anchor" href="#多任务task" aria-hidden="true">#</a> 多任务Task</h1><ul><li>查看当前线程是否为JavaFx的UI线程<code>Platform.isFxApplicationThread()</code></li></ul><ol><li><p>创建MyTask继承Task类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTask</span> <span class="token keyword">extends</span> <span class="token class-name">Task</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>  
    <span class="token doc-comment comment">/**  
  * 调用start方法时执行  
  *  
  * <span class="token keyword">@return</span>  
  * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>  
  */</span>    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token class-name">Number</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateTitle</span><span class="token punctuation">(</span><span class="token string">&quot;拷贝文件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;E:\\\\Users\\\\86158\\\\图片\\\\110300202_waifu2x_1x_3n_jpg (2).png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">FileOutputStream</span> fileOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;E:\\\\Users\\\\86158\\\\图片\\\\测试复制.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">double</span> max <span class="token operator">=</span> fileInputStream<span class="token punctuation">.</span><span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  
        <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  
        <span class="token keyword">double</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  
        <span class="token keyword">double</span> progress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fileInputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> bytes<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isCancelled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">break</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
            fileOutputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>  
            sum <span class="token operator">+=</span> len<span class="token punctuation">;</span>  
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateProgress</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>  
            progress <span class="token operator">=</span> sum <span class="token operator">/</span> max<span class="token punctuation">;</span>  
            <span class="token keyword">if</span> <span class="token punctuation">(</span>progress <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token string">&quot;请耐心等待&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>progress <span class="token operator">&lt;</span> <span class="token number">0.8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token string">&quot;马上就好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>progress <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token string">&quot;即将完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token string">&quot;拷贝完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        fileInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        fileOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">return</span> <span class="token number">100</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">updateProgress</span><span class="token punctuation">(</span><span class="token keyword">long</span> workDone<span class="token punctuation">,</span> <span class="token keyword">long</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateProgress</span><span class="token punctuation">(</span>workDone<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">updateProgress</span><span class="token punctuation">(</span><span class="token keyword">double</span> workDone<span class="token punctuation">,</span> <span class="token keyword">double</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateProgress</span><span class="token punctuation">(</span>workDone<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">updateTitle</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateTitle</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">updateValue</span><span class="token punctuation">(</span><span class="token class-name">Number</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">updateValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token comment">// 判断当前线程是否是fx线程  </span>
        <span class="token comment">// System.out.println(Platform.isFxApplicationThread());  </span>

    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建多任务类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">MyTask</span> myTask <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>myTask<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置为守护线程  </span>
thread<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开启多任务</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>start<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 绑定多任务进度，使进度条呈现持续加载效果</span>
    progressBar<span class="token punctuation">.</span><span class="token function">progressProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>myTask<span class="token punctuation">.</span><span class="token function">progressProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 绑定多任务标题，当多任务标题改变时，界面标签随着改变</span>
    title<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>myTask<span class="token punctuation">.</span><span class="token function">titleProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 绑定多任务信息，当多任务信息改变时，界面标签随着改变</span>
    message<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>myTask<span class="token punctuation">.</span><span class="token function">messageProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 绑定多任务值，当多任务值改变时，界面标签随着改变</span>
    value<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>myTask<span class="token punctuation">.</span><span class="token function">valueProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 绑定多任务状态，当多任务状态改变时，界面标签随着改变</span>
    state<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>myTask<span class="token punctuation">.</span><span class="token function">stateProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// 当多任务发生异常时，打印异常信息</span>
    myTask<span class="token punctuation">.</span><span class="token function">exceptionProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newValue<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>结束多任务</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>cancel<span class="token punctuation">.</span><span class="token function">setOnAction</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    myTask<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    progressBar<span class="token punctuation">.</span><span class="token function">progressProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    title<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    message<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    value<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    state<span class="token punctuation">.</span><span class="token function">textProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图 <img src="`+p+'" alt=""></p></li></ol>',3),c=[o];function u(l,i){return s(),a("div",null,c)}const r=n(e,[["render",u],["__file","lesson109.html.vue"]]);export{r as default};