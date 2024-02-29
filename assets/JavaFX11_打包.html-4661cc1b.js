import{_ as a,o as e,c as s,a as n}from"./app-eee38dda.js";const l={},i=n(`<ol><li><p>生成jmod文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jmod create --class-path target/classes ^ （字节码路径）
     --main-class cn.mycz.spectrum.MainApplication ^ （主类名）
     output-17/jmods/spectrum.jmod（文件名）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>生成运行时</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jlink --module-path output-17/jmods ^ （jmod路径）
    --add-modules cn.mycz.spectrum ^  （模块名）
    <span class="token parameter variable">--output</span> output-17/runtime ^ （生成的文件存放路径）
    <span class="token parameter variable">--launcher</span> <span class="token assign-left variable">launcher</span><span class="token operator">=</span>cn.mycz.spectrum （是否生成launcher）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>生成镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jpackage <span class="token parameter variable">--type</span> app-image ^
        <span class="token parameter variable">-n</span> image ^
        <span class="token parameter variable">-d</span> output-17 ^
        <span class="token parameter variable">-p</span> output-17/jmod ^
        <span class="token parameter variable">-m</span> cn.mycz.spectrum/cn.mycz.spectrum.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[i];function c(t,d){return e(),s("div",null,r)}const m=a(l,[["render",c],["__file","JavaFX11_打包.html.vue"]]);export{m as default};
