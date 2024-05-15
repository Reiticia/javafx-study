import{_ as n,o as s,c as a,a as t}from"./app-d6f5df65.js";const p={},e=t(`<h1 id="treetableview" tabindex="-1"><a class="header-anchor" href="#treetableview" aria-hidden="true">#</a> TreeTableView</h1><ol><li><p>装填数据</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Data</span> data1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Data</span> data2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Data</span> data3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Data</span> data4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token string">&quot;赵六&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Data</span> data5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token string">&quot;钱七&quot;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Data</span> data6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token string">&quot;孙八&quot;</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">Data</span> data7 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span><span class="token string">&quot;周九&quot;</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> item2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> item3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data3<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> item4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data4<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> item5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data5<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> item6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data6<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> item7 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeItem</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>data7<span class="token punctuation">)</span><span class="token punctuation">;</span>  
root<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>item2<span class="token punctuation">,</span> item3<span class="token punctuation">,</span> item4<span class="token punctuation">)</span><span class="token punctuation">;</span>  
item2<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>item5<span class="token punctuation">,</span> item6<span class="token punctuation">)</span><span class="token punctuation">;</span>  
item3<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>item7<span class="token punctuation">)</span><span class="token punctuation">;</span>  
root<span class="token punctuation">.</span><span class="token function">setExpanded</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
item2<span class="token punctuation">.</span><span class="token function">setExpanded</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
item3<span class="token punctuation">.</span><span class="token function">setExpanded</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置TreeTableView</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TreeTableView</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span></span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeTableView</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
view<span class="token punctuation">.</span><span class="token function">setLayoutX</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
view<span class="token punctuation">.</span><span class="token function">setLayoutY</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
view<span class="token punctuation">.</span><span class="token function">setRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>  
view<span class="token punctuation">.</span><span class="token function">setPrefWidth</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 平分列宽  </span>
view<span class="token punctuation">.</span><span class="token function">setColumnResizePolicy</span><span class="token punctuation">(</span><span class="token class-name">TreeTableView</span><span class="token punctuation">.</span><span class="token constant">CONSTRAINED_RESIZE_POLICY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 设置多选  </span>
view<span class="token punctuation">.</span><span class="token function">getSelectionModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSelectionMode</span><span class="token punctuation">(</span><span class="token class-name">SelectionMode</span><span class="token punctuation">.</span><span class="token constant">MULTIPLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 设置单元格可选中  </span>
view<span class="token punctuation">.</span><span class="token function">getSelectionModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellSelectionEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置列</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TreeTableColumn</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> nameCol <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeTableColumn</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;姓名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeTableColumn</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> ageCol <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeTableColumn</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;年龄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token class-name">TreeTableColumn</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">,</span> <span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> maleCol <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeTableColumn</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;布尔&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
nameCol<span class="token punctuation">.</span><span class="token function">setCellValueFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TreeItemPropertyValueFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
ageCol<span class="token punctuation">.</span><span class="token function">setCellValueFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TreeItemPropertyValueFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
maleCol<span class="token punctuation">.</span><span class="token function">setCellValueFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TreeItemPropertyValueFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 加载列  </span>
view<span class="token punctuation">.</span><span class="token function">getColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>nameCol<span class="token punctuation">,</span> ageCol<span class="token punctuation">,</span> maleCol<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>事件监听</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 行单选事件  </span>
view<span class="token punctuation">.</span><span class="token function">getSelectionModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">selectedItemProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>observable<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;选中的行：&quot;</span> <span class="token operator">+</span> newValue<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 行多选事件  </span>
view<span class="token punctuation">.</span><span class="token function">getSelectionModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSelectedItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">InvalidationListener</span><span class="token punctuation">)</span> observable <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">ObservableList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeItem</span><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ObservableList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeItem</span><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> observable<span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;-----------选中的行数：%d----------------&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">// 单元格多选事件  </span>
view<span class="token punctuation">.</span><span class="token function">getSelectionModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSelectedCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">InvalidationListener</span><span class="token punctuation">)</span> observable <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
    <span class="token class-name">ObservableList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeTablePosition</span><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ObservableList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeTablePosition</span><span class="token punctuation">&lt;</span><span class="token class-name">Data</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> observable<span class="token punctuation">;</span>  
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;-----------选中的单元格数：%d----------------\\n&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>  
        <span class="token comment">// 获取每一个单元格  </span>
        <span class="token class-name">Object</span> data <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">getTableColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCellData</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;(%d,%d):%s\\n&quot;</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span><span class="token function">getRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span><span class="token function">getColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","lesson106.html.vue"]]);export{k as default};
