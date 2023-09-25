import{_ as t,r as c,o as l,a as o,b as n,d as e,F as i,c as p,e as s}from"./app.21ea0d90.js";const r={},u=p(`<h1 id="css-sass-\u89C4\u8303\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#css-sass-\u89C4\u8303\u6307\u5357" aria-hidden="true">#</a> CSS / Sass \u89C4\u8303\u6307\u5357</h1><h2 id="\u672F\u8BED" tabindex="-1"><a class="header-anchor" href="#\u672F\u8BED" aria-hidden="true">#</a> \u672F\u8BED</h2><h3 id="\u89C4\u5219\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u58F0\u660E" aria-hidden="true">#</a> \u89C4\u5219\u58F0\u660E</h3><p>\u6211\u4EEC\u628A\u4E00\u4E2A\uFF08\u6216\u4E00\u7EC4\uFF09\u9009\u62E9\u5668\u548C\u4E00\u7EC4\u5C5E\u6027\u79F0\u4E4B\u4E3A \u201C\u89C4\u5219\u58F0\u660E\u201D\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.listing</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a> \u9009\u62E9\u5668</h3><p>\u5728\u89C4\u5219\u58F0\u660E\u4E2D\uFF0C\u201C\u9009\u62E9\u5668\u201D \u8D1F\u8D23\u9009\u53D6 DOM \u6811\u4E2D\u7684\u5143\u7D20\uFF0C\u8FD9\u4E9B\u5143\u7D20\u5C06\u88AB\u5B9A\u4E49\u7684\u5C5E\u6027\u6240\u4FEE\u9970\u3002\u9009\u62E9\u5668\u53EF\u4EE5\u5339\u914D HTML \u5143\u7D20\uFF0C\u4E5F\u53EF\u4EE5\u5339\u914D\u4E00\u4E2A\u5143\u7D20\u7684\u7C7B\u540D\u3001ID, \u6216\u8005\u5143\u7D20\u62E5\u6709\u7684\u5C5E\u6027\u3002\u4EE5\u4E0B\u662F\u9009\u62E9\u5668\u7684\u4F8B\u5B50\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.my-element-class</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token selector">[aria-hidden]</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><p>\u6700\u540E\uFF0C\u5C5E\u6027\u51B3\u5B9A\u4E86\u89C4\u5219\u58F0\u660E\u91CC\u88AB\u9009\u62E9\u7684\u5143\u7D20\u5C06\u5F97\u5230\u4F55\u79CD\u6837\u5F0F\u3002\u5C5E\u6027\u4EE5\u952E\u503C\u5BF9\u5F62\u5F0F\u5B58\u5728\uFF0C\u4E00\u4E2A\u89C4\u5219\u58F0\u660E\u53EF\u4EE5\u5305\u542B\u4E00\u6216\u591A\u4E2A\u5C5E\u6027\u5B9A\u4E49\u3002\u4EE5\u4E0B\u662F\u5C5E\u6027\u5B9A\u4E49\u7684\u4F8B\u5B50\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* some selector */</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><h3 id="\u6587\u4EF6\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5F15\u7528" aria-hidden="true">#</a> \u6587\u4EF6\u5F15\u7528</h3><ul><li>[\u5EFA\u8BAE] \u4F7F\u7528 <code>link</code> \u7684\u65B9\u5F0F\u8C03\u7528\u5916\u90E8\u6837\u5F0F</li><li>[\u5F3A\u5236] \u4E0D\u5141\u8BB8\u5728 <code>&lt;style&gt;</code> \u5757\u4E2D\u4F7F\u7528 <code>@import</code>\u3002</li><li>[\u5F3A\u5236] \u4E0D\u5141\u8BB8\u4F7F\u7528 <code>style</code> \u5C5E\u6027\u5199\u884C\u5185\u6837\u5F0F\u3002</li></ul><h3 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h3><ul><li>[\u5F3A\u5236] \u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u4F5C\u4E3A\u7F29\u8FDB\u3002</li><li>[\u5F3A\u5236] \u5168\u5C0F\u5199\uFF0C\u4F7F\u7528<code>-</code>\u4F5C\u4E3A\u76F8\u5173\u7C7B\u7684\u81EA\u7136\u95F4\u65AD\uFF08\u4E0D\u8981\u4F7F\u7528<code>_</code>\u548C camelCase\uFF09\u3002</li><li>[\u5EFA\u8BAE] \u4E0D\u8981\u4F7F\u7528 ID \u9009\u62E9\u5668\u3002</li><li>[\u5F3A\u5236] \u5728\u4E00\u4E2A\u89C4\u5219\u58F0\u660E\u4E2D\u5E94\u7528\u4E86\u591A\u4E2A\u9009\u62E9\u5668\u65F6\uFF0C\u6BCF\u4E2A\u9009\u62E9\u5668\u72EC\u5360\u4E00\u884C\u3002</li><li>[\u5F3A\u5236] \u5728\u89C4\u5219\u58F0\u660E\u7684\u5DE6\u5927\u62EC\u53F7 <code>{</code> \u524D\u52A0\u4E0A\u4E00\u4E2A\u7A7A\u683C\u3002</li><li>[\u5F3A\u5236] \u5728\u5C5E\u6027\u7684\u5192\u53F7 <code>:</code> \u540E\u9762\u52A0\u4E0A\u4E00\u4E2A\u7A7A\u683C\uFF0C\u524D\u9762\u4E0D\u5141\u8BB8\u7A7A\u683C\u3002</li><li>[\u5F3A\u5236] \u9017\u53F7\u5206\u9694\u7684\u53D6\u503C\uFF0C\u90FD\u5E94\u8BE5\u5728\u9017\u53F7\u4E4B\u540E\u589E\u52A0\u4E00\u4E2A\u7A7A\u683C</li><li>[\u5F3A\u5236] \u89C4\u5219\u58F0\u660E\u7684\u53F3\u5927\u62EC\u53F7 <code>}</code> \u72EC\u5360\u4E00\u884C\u3002</li><li>[\u5EFA\u8BAE] \u89C4\u5219\u58F0\u660E\u4E4B\u95F4\u7528\u7A7A\u884C\u5206\u9694\u5F00\u3002</li><li>[\u5EFA\u8BAE] \u6BCF\u4E2A\u9009\u62E9\u5668\u6700\u540E\u4E00\u6761\u5C5E\u6027 <code>;</code> \u4E0D\u80FD\u7701\u7565</li><li>[\u5EFA\u8BAE] \u6240\u6709\u7684\u5341\u516D\u8FDB\u5236\u503C\u90FD\u5E94\u8BE5\u4F7F\u7528\u5C0F\u5199\u5B57\u6BCD\uFF0C\u4F8B\u5982 <code>#fff</code></li><li>[\u5F3A\u5236] \u4E3A\u9009\u62E9\u5668\u4E2D\u5F97\u5C5E\u6027\u53D6\u503C\u6DFB\u52A0<strong>\u53CC\u5F15\u53F7</strong>\uFF0C\u4F8B\u5982 <code>input[type=&quot;text&quot;]</code></li><li>[\u5EFA\u8BAE] \u4E0D\u8981\u4E3A 0 \u6307\u660E\u5355\u4F4D\uFF0C\u6BD4\u5982\u4F7F\u7528 <code>margin: 0;</code> \u800C\u4E0D\u662F <code>margin: 0px;</code></li><li>[\u5EFA\u8BAE] \u5728\u5B9A\u4E49\u65E0\u8FB9\u6846\u6837\u5F0F\u65F6\uFF0C\u4F7F\u7528 <code>0</code> \u4EE3\u66FF <code>none</code>\u3002</li></ul><p><strong>Bad</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.avatar</span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>2px solid white<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.no, .nope, .not_good</span> <span class="token punctuation">{</span>
    // ...
<span class="token punctuation">}</span>
<span class="token selector">#lol-no</span> <span class="token punctuation">{</span>
  // ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Good</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.avatar</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.one,
.selector,
.per-line</span> <span class="token punctuation">{</span>
  // ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u5C5E\u6027\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u987A\u5E8F" aria-hidden="true">#</a> \u5C5E\u6027\u987A\u5E8F</h3><ol><li>Positioning</li><li>Box model \u76D2\u6A21\u578B</li><li>Typographic \u6392\u7248</li><li>Visual \u5916\u89C2</li></ol><p>Position \u5904\u5728\u7B2C\u4E00\u4F4D\uFF0C\u56E0\u4E3A\u4ED6\u53EF\u4EE5\u4F7F\u4E00\u4E2A\u5143\u7D20\u8131\u79BB\u6B63\u5E38\u6587\u672C\u6D41\uFF0C\u72EC\u7ACB\u663E\u793A\uFF0C\u5E76\u4E14\u8986\u76D6\u76D2\u6A21\u578B\u76F8\u5173\u7684\u6837\u5F0F\u3002\u76D2\u6A21\u578B\u7D27\u8DDF\u5176\u540E\uFF0C\u56E0\u4E3A\u4ED6\u51B3\u5B9A\u4E86\u4E00\u4E2A\u7EC4\u4EF6\u7684\u5927\u5C0F\u548C\u4F4D\u7F6E\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.declaration-order</span> <span class="token punctuation">{</span>
  <span class="token comment">/* Positioning */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>

  <span class="token comment">/* Box-model */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

  <span class="token comment">/* Typography */</span>
  <span class="token property">font</span><span class="token punctuation">:</span> normal 13px <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

  <span class="token comment">/* Visual */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #e5e5e5<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>

  <span class="token comment">/* Misc */</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h3><ul><li>[\u5F3A\u5236] \u907F\u514D\u8FC7\u5EA6\u4F7F\u7528\u7B80\u5199\u3002.btn \u53EF\u4EE5\u5F88\u597D\u5730\u63CF\u8FF0 <code>button</code>\uFF0C\u4F46\u662F <code>.s</code> \u4E0D\u80FD\u4EE3\u8868\u4EFB\u4F55\u5143\u7D20\u3002</li><li>[\u5EFA\u8BAE] <code>class</code> \u7684\u547D\u540D\u5E94\u8BE5\u5C3D\u91CF\u77ED\uFF0C\u4E5F\u8981\u5C3D\u91CF\u660E\u786E\u3002</li><li>[\u5F3A\u5236] \u4F7F\u7528\u6709\u610F\u4E49\u7684\u540D\u79F0\uFF1B\u4F7F\u7528\u7ED3\u6784\u5316\u6216\u8005\u4F5C\u7528\u76EE\u6807\u76F8\u5173\uFF0C\u800C\u4E0D\u662F\u62BD\u8C61\u7684\u540D\u79F0\u3002</li><li>[\u5EFA\u8BAE] \u547D\u540D\u65F6\u4F7F\u7528\u6700\u8FD1\u7684\u7236\u8282\u70B9\u6216\u8005\u7236 class \u4F5C\u4E3A\u524D\u7F00\u3002</li><li>[\u5F3A\u5236] \u4F7F\u7528 classes \u800C\u4E0D\u662F\u901A\u7528\u5143\u7D20\u4F5C\u4E3A\u9009\u62E9\u5668\uFF0C\u4E0D\u5141\u8BB8 <code>div.doc</code>\u3002</li><li>[\u5EFA\u8BAE] \u907F\u514D\u5728\u7ECF\u5E38\u51FA\u73B0\u7684\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4E00\u4E9B\u5C5E\u6027\u9009\u62E9\u5668 (\u4F8B\u5982\uFF0C[class^=&quot;...&quot;])\u3002\u6D4F\u89C8\u5668\u6027\u80FD\u4F1A\u53D7\u5230\u8FD9\u4E9B\u60C5\u51B5\u7684\u5F71\u54CD\u3002</li><li>[\u5EFA\u8BAE] \u51CF\u5C11\u9009\u62E9\u5668\u7684\u957F\u5EA6\uFF0C\u6BCF\u4E2A\u7EC4\u5408\u9009\u62E9\u5668\u9009\u62E9\u5668\u7684\u6761\u76EE\u5E94\u8BE5\u5C3D\u91CF\u63A7\u5236\u5728 3 \u4E2A\u4EE5\u5185\u3002</li></ul><h3 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h3><ul><li>\u5EFA\u8BAE\u4F7F\u7528\u884C\u6CE8\u91CA (\u5728 Sass \u4E2D\u662F <code>//</code>) \u4EE3\u66FF\u5757\u6CE8\u91CA\u3002</li><li>\u5EFA\u8BAE\u6CE8\u91CA\u72EC\u5360\u4E00\u884C\u3002\u907F\u514D\u884C\u672B\u6CE8\u91CA\u3002</li><li>\u4FDD\u6301\u6CE8\u91CA\u5185\u5BB9\u4E0E\u661F\u53F7\u4E4B\u95F4\u6709\u4E00\u4E2A\u7A7A\u683C\u7684\u8DDD\u79BB <code>/* \u666E\u901A\u6CE8\u91CA */</code></li><li>\u7ED9\u6CA1\u6709\u81EA\u6CE8\u91CA\u7684\u4EE3\u7801\u5199\u4E0A\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u6BD4\u5982\uFF1A <ul><li>\u4E3A\u4EC0\u4E48\u7528\u5230\u4E86 z-index</li><li>\u517C\u5BB9\u6027\u5904\u7406\u6216\u8005\u9488\u5BF9\u7279\u5B9A\u6D4F\u89C8\u5668\u7684 hack</li></ul></li></ul><h3 id="oocss-\u548C-bem" tabindex="-1"><a class="header-anchor" href="#oocss-\u548C-bem" aria-hidden="true">#</a> OOCSS \u548C BEM</h3><p>\u51FA\u4E8E\u4EE5\u4E0B\u539F\u56E0\uFF0C\u5EFA\u8BAE\u4F7F\u7528 OOCSS \u548C BEM \u7684\u67D0\u79CD\u7EC4\u5408\uFF1A</p><ul><li>\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u7406\u6E05 CSS \u548C HTML \u4E4B\u95F4\u6E05\u6670\u4E14\u4E25\u8C28\u7684\u5173\u7CFB\u3002</li><li>\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u521B\u5EFA\u51FA\u53EF\u91CD\u7528\u3001\u6613\u88C5\u914D\u7684\u7EC4\u4EF6\u3002</li><li>\u53EF\u4EE5\u51CF\u5C11\u5D4C\u5957\uFF0C\u964D\u4F4E\u7279\u5B9A\u6027\u3002</li><li>\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u521B\u5EFA\u51FA\u53EF\u6269\u5C55\u7684\u6837\u5F0F\u8868\u3002</li></ul><p><strong>OOCSS</strong>\uFF0C\u4E5F\u5C31\u662F \u201CObject Oriented CSS\uFF08\u9762\u5411\u5BF9\u8C61\u7684CSS\uFF09\u201D\uFF0C\u662F\u4E00\u79CD\u5199 CSS \u7684\u65B9\u6CD5\uFF0C\u5176\u601D\u60F3\u5C31\u662F\u9F13\u52B1\u4F60\u628A\u6837\u5F0F\u8868\u770B\u4F5C\u201C\u5BF9\u8C61\u201D\u7684\u96C6\u5408\uFF1A\u521B\u5EFA\u53EF\u91CD\u7528\u6027\u3001\u53EF\u91CD\u590D\u6027\u7684\u4EE3\u7801\u6BB5\u8BA9\u4F60\u53EF\u4EE5\u5728\u6574\u4E2A\u7F51\u7AD9\u4E2D\u591A\u6B21\u4F7F\u7528\u3002</p><p>\u53C2\u8003\u8D44\u6599\uFF1A</p>`,33),d=s("Nicole Sullivan \u7684 "),b={href:"https://github.com/stubbornella/oocss/wiki",target:"_blank",rel:"noopener noreferrer"},k=s("OOCSS wiki"),m=s("Smashing Magazine \u7684 "),h={href:"http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/",target:"_blank",rel:"noopener noreferrer"},g=s("Introduction to OOCSS"),_=n("p",null,[n("strong",null,"BEM"),s("\uFF0C\u4E5F\u5C31\u662F \u201CBlock-Element-Modifier\u201D\uFF0C\u662F\u4E00\u79CD\u7528\u4E8E HTML \u548C CSS \u7C7B\u540D\u7684_\u547D\u540D\u7EA6\u5B9A_\u3002BEM \u6700\u521D\u662F\u7531 Yandex \u63D0\u51FA\u7684\uFF0C\u8981\u77E5\u9053\u4ED6\u4EEC\u62E5\u6709\u5DE8\u5927\u7684\u4EE3\u7801\u5E93\u548C\u53EF\u4F38\u7F29\u6027\uFF0CBEM \u5C31\u662F\u4E3A\u6B64\u800C\u751F\u7684\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u5957\u9075\u5FAA OOCSS \u7684\u53C2\u8003\u6307\u5BFC\u89C4\u8303\u3002")],-1),f=s("CSS Trick \u7684 "),v={href:"https://css-tricks.com/bem-101/",target:"_blank",rel:"noopener noreferrer"},x=s("BEM 101"),y=s("Harry Roberts \u7684 "),S={href:"http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/",target:"_blank",rel:"noopener noreferrer"},C=s("introduction to BEM"),q=p(`<p><strong>\u793A\u4F8B</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listing-card listing-card--featured<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listing-card__title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Adorable 2BR in the sunny Mission<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>listing-card__content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Vestibulum id ligula porta felis euismod semper.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
.listing-card { }
.listing-card--featured { }
.listing-card__title { }
.listing-card__content { }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li><code>.listing-card</code> \u662F\u4E00\u4E2A\u5757\uFF08block\uFF09\uFF0C\u8868\u793A\u9AD8\u5C42\u6B21\u7684\u7EC4\u4EF6\u3002</li><li><code>.listing-card__title</code> \u662F\u4E00\u4E2A\u5143\u7D20\uFF08element\uFF09\uFF0C\u5B83\u5C5E\u4E8E <code>.listing-card</code> \u7684\u4E00\u90E8\u5206\uFF0C\u56E0\u6B64\u5757\u662F\u7531\u5143\u7D20\u7EC4\u6210\u7684\u3002</li><li><code>.listing-card--featured</code> \u662F\u4E00\u4E2A\u4FEE\u9970\u7B26\uFF08modifier\uFF09\uFF0C\u8868\u793A\u8FD9\u4E2A\u5757\u4E0E <code>.listing-card</code> \u6709\u7740\u4E0D\u540C\u7684\u72B6\u6001\u6216\u8005\u53D8\u5316\u3002</li></ul><h3 id="id-\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#id-\u9009\u62E9\u5668" aria-hidden="true">#</a> ID \u9009\u62E9\u5668</h3>`,4),M=s("\u5728 CSS \u4E2D\uFF0C\u867D\u7136\u53EF\u4EE5\u901A\u8FC7 ID \u9009\u62E9\u5143\u7D20\uFF0C\u4F46\u5927\u5BB6\u901A\u5E38\u90FD\u4F1A\u628A\u8FD9\u79CD\u65B9\u5F0F\u5217\u4E3A\u53CD\u9762\u6559\u6750\u3002ID \u9009\u62E9\u5668\u7ED9\u4F60\u7684\u89C4\u5219\u58F0\u660E\u5E26\u6765\u4E86\u4E0D\u5FC5\u8981\u7684\u9AD8"),B={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer"},O=s("\u4F18\u5148\u7EA7"),w=s("\uFF0C\u800C\u4E14 ID \u9009\u62E9\u5668\u662F\u4E0D\u53EF\u91CD\u7528\u7684\u3002"),D=s("\u60F3\u8981\u4E86\u89E3\u5173\u4E8E\u8FD9\u4E2A\u4E3B\u9898\u7684\u66F4\u591A\u5185\u5BB9\uFF0C\u53C2\u89C1 "),z={href:"http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/",target:"_blank",rel:"noopener noreferrer"},E=s("CSS Wizardry \u7684\u6587\u7AE0"),I=s("\uFF0C\u6587\u7AE0\u4E2D\u6709\u5173\u4E8E\u5982\u4F55\u5904\u7406\u4F18\u5148\u7EA7\u7684\u5185\u5BB9\u3002"),T=p(`<h3 id="javascript-\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#javascript-\u94A9\u5B50" aria-hidden="true">#</a> JavaScript \u94A9\u5B50</h3><p>\u907F\u514D\u5728 CSS \u548C JavaScript \u4E2D\u7ED1\u5B9A\u76F8\u540C\u7684\u7C7B\u3002\u5426\u5219\u5F00\u53D1\u8005\u5728\u91CD\u6784\u65F6\u901A\u5E38\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u60C5\u51B5\uFF1A\u8F7B\u5219\u6D6A\u8D39\u65F6\u95F4\u5728\u5BF9\u7167\u67E5\u627E\u6BCF\u4E2A\u8981\u6539\u53D8\u7684\u7C7B\uFF0C\u91CD\u5219\u56E0\u4E3A\u5BB3\u6015\u7834\u574F\u529F\u80FD\u800C\u4E0D\u6562\u4F5C\u51FA\u66F4\u6539\u3002</p><p>\u6211\u4EEC\u63A8\u8350\u5728\u521B\u5EFA\u7528\u4E8E\u7279\u5B9A JavaScript \u7684\u7C7B\u540D\u65F6\uFF0C\u6DFB\u52A0 <code>.js-</code> \u524D\u7F00\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-primary js-request-to-book<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Request to Book<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> Sass</h2><h3 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h3><ul><li>\u4F7F\u7528 <code>.scss</code> \u7684\u8BED\u6CD5\uFF0C\u4E0D\u4F7F\u7528 <code>.sass</code> \u539F\u672C\u7684\u8BED\u6CD5\u3002</li><li>CSS \u548C <code>@include</code> \u58F0\u660E\u6309\u7167\u4EE5\u4E0B\u903B\u8F91\u6392\u5E8F\uFF08\u53C2\u89C1\u4E0B\u6587\uFF09</li></ul><h3 id="\u5C5E\u6027\u58F0\u660E\u7684\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u58F0\u660E\u7684\u6392\u5E8F" aria-hidden="true">#</a> \u5C5E\u6027\u58F0\u660E\u7684\u6392\u5E8F</h3><ol><li><p>\u5C5E\u6027\u58F0\u660E</p><p>\u9996\u5148\u5217\u51FA\u9664\u53BB <code>@include</code> \u548C\u5D4C\u5957\u9009\u62E9\u5668\u4E4B\u5916\u7684\u6240\u6709\u5C5E\u6027\u58F0\u660E\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.btn-green</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  // ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><code>@include</code> \u58F0\u660E</p><p>\u7D27\u968F\u540E\u9762\u7684\u662F <code>@include</code>\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u5F97\u6574\u4E2A\u9009\u62E9\u5668\u7684\u53EF\u8BFB\u6027\u66F4\u9AD8\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.btn-green</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">transition</span><span class="token punctuation">(</span>background 0.5s ease<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  // ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u5D4C\u5957\u9009\u62E9\u5668</p><p>_\u5982\u679C\u6709\u5FC5\u8981_\u7528\u5230\u5D4C\u5957\u9009\u62E9\u5668\uFF0C\u628A\u5B83\u4EEC\u653E\u5230\u6700\u540E\uFF0C\u5728\u89C4\u5219\u58F0\u660E\u548C\u5D4C\u5957\u9009\u62E9\u5668\u4E4B\u95F4\u8981\u52A0\u4E0A\u7A7A\u767D\uFF0C\u76F8\u90BB\u5D4C\u5957\u9009\u62E9\u5668\u4E4B\u95F4\u4E5F\u8981\u52A0\u4E0A\u7A7A\u767D\u3002\u5D4C\u5957\u9009\u62E9\u5668\u4E2D\u7684\u5185\u5BB9\u4E5F\u8981\u9075\u5FAA\u4E0A\u8FF0\u6307\u5F15\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">transition</span><span class="token punctuation">(</span>background 0.5s ease<span class="token punctuation">)</span><span class="token punctuation">;</span></span>

  <span class="token selector">.icon</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ol><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><p>\u53D8\u91CF\u540D\u5E94\u4F7F\u7528\u7834\u6298\u53F7\uFF08\u4F8B\u5982 <code>$my-variable</code>\uFF09\u4EE3\u66FF camelCased \u548C snake_cased \u98CE\u683C\u3002\u5BF9\u4E8E\u4EC5\u7528\u5728\u5F53\u524D\u6587\u4EF6\u7684\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u53D8\u91CF\u540D\u4E4B\u524D\u6DFB\u52A0\u4E0B\u5212\u7EBF\u524D\u7F00\uFF08\u4F8B\u5982 <code>$_my-variable</code>\uFF09\u3002</p><h3 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins" aria-hidden="true">#</a> Mixins</h3><p>\u4E3A\u4E86\u8BA9\u4EE3\u7801\u9075\u5FAA DRY \u539F\u5219\uFF08Don&#39;t Repeat Yourself\uFF09\u3001\u589E\u5F3A\u6E05\u6670\u6027\u6216\u62BD\u8C61\u5316\u590D\u6742\u6027\uFF0C\u5E94\u8BE5\u4F7F\u7528 mixin\uFF0C\u8FD9\u4E0E\u90A3\u4E9B\u547D\u540D\u826F\u597D\u7684\u51FD\u6570\u7684\u4F5C\u7528\u662F\u5F02\u66F2\u540C\u5DE5\u7684\u3002\u867D\u7136 mixin \u53EF\u4EE5\u4E0D\u63A5\u6536\u53C2\u6570\uFF0C\u4F46\u8981\u6CE8\u610F\uFF0C\u5047\u5982\u4F60\u4E0D\u538B\u7F29\u8D1F\u8F7D\uFF08\u6BD4\u5982\u901A\u8FC7 gzip\uFF09\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u6700\u7EC8\u7684\u6837\u5F0F\u5305\u542B\u4E0D\u5FC5\u8981\u7684\u4EE3\u7801\u91CD\u590D\u3002</p><h3 id="\u6269\u5C55\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u6307\u4EE4" aria-hidden="true">#</a> \u6269\u5C55\u6307\u4EE4</h3><p>\u5E94\u907F\u514D\u4F7F\u7528 <code>@extend</code> \u6307\u4EE4\uFF0C\u56E0\u4E3A\u5B83\u5E76\u4E0D\u76F4\u89C2\uFF0C\u800C\u4E14\u5177\u6709\u6F5C\u5728\u98CE\u9669\uFF0C\u7279\u522B\u662F\u7528\u5728\u5D4C\u5957\u9009\u62E9\u5668\u7684\u65F6\u5019\u3002\u5373\u4FBF\u662F\u5728\u9876\u5C42\u5360\u4F4D\u7B26\u9009\u62E9\u5668\u4F7F\u7528\u6269\u5C55\uFF0C\u5982\u679C\u9009\u62E9\u5668\u7684\u987A\u5E8F\u6700\u7EC8\u4F1A\u6539\u53D8\uFF0C\u4E5F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u95EE\u9898\u3002\uFF08\u6BD4\u5982\uFF0C\u5982\u679C\u5B83\u4EEC\u5B58\u5728\u4E8E\u5176\u4ED6\u6587\u4EF6\uFF0C\u800C\u52A0\u8F7D\u987A\u5E8F\u53D1\u751F\u4E86\u53D8\u5316\uFF09\u3002\u5176\u5B9E\uFF0C\u4F7F\u7528 @extend \u6240\u83B7\u5F97\u7684\u5927\u90E8\u5206\u4F18\u5316\u6548\u679C\uFF0Cgzip \u538B\u7F29\u5DF2\u7ECF\u5E2E\u52A9\u4F60\u505A\u5230\u4E86\uFF0C\u56E0\u6B64\u4F60\u53EA\u9700\u8981\u901A\u8FC7 mixin \u8BA9\u6837\u5F0F\u8868\u66F4\u7B26\u5408 DRY \u539F\u5219\u5C31\u8DB3\u591F\u4E86\u3002</p><h3 id="\u5D4C\u5957\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5D4C\u5957\u9009\u62E9\u5668</h3><p><strong>\u8BF7\u4E0D\u8981\u8BA9\u5D4C\u5957\u9009\u62E9\u5668\u7684\u6DF1\u5EA6\u8D85\u8FC7 3 \u5C42\uFF01</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.page-container</span> <span class="token punctuation">{</span>
  <span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token selector">.profile</span> <span class="token punctuation">{</span>
      // STOP!
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5F53\u9047\u5230\u4EE5\u4E0A\u60C5\u51B5\u7684\u65F6\u5019\uFF0C\u4F60\u4E5F\u8BB8\u662F\u8FD9\u6837\u5199 CSS \u7684\uFF1A</p><ul><li>\u4E0E HTML \u5F3A\u8026\u5408\u7684\uFF08\u4E5F\u662F\u8106\u5F31\u7684\uFF09<em>\u2014\u6216\u8005\u2014</em></li><li>\u8FC7\u4E8E\u5177\u4F53\uFF08\u5F3A\u5927\uFF09<em>\u2014\u6216\u8005\u2014</em></li><li>\u6CA1\u6709\u91CD\u7528</li></ul><p>\u518D\u8BF4\u4E00\u904D: <strong>\u6C38\u8FDC\u4E0D\u8981\u5D4C\u5957 ID \u9009\u62E9\u5668\uFF01</strong></p><p>\u5982\u679C\u4F60\u59CB\u7EC8\u575A\u6301\u8981\u4F7F\u7528 ID \u9009\u62E9\u5668\uFF08\u529D\u4F60\u4E09\u601D\uFF09\uFF0C\u90A3\u4E5F\u4E0D\u5E94\u8BE5\u5D4C\u5957\u5B83\u4EEC\u3002\u5982\u679C\u4F60\u6B63\u6253\u7B97\u8FD9\u4E48\u505A\uFF0C\u4F60\u9700\u8981\u5148\u91CD\u65B0\u68C0\u67E5\u4F60\u7684\u6807\u7B7E\uFF0C\u6216\u8005\u6307\u660E\u539F\u56E0\u3002\u5982\u679C\u4F60\u60F3\u8981\u5199\u51FA\u98CE\u683C\u826F\u597D\u7684 HTML \u548C CSS\uFF0C\u4F60\u662F<strong>\u4E0D</strong>\u5E94\u8BE5\u8FD9\u6837\u505A\u7684\u3002</p>`,22);function H(L,V){const a=c("ExternalLinkIcon");return l(),o(i,null,[u,n("ul",null,[n("li",null,[d,n("a",b,[k,e(a)])]),n("li",null,[m,n("a",h,[g,e(a)])])]),_,n("ul",null,[n("li",null,[f,n("a",v,[x,e(a)])]),n("li",null,[y,n("a",S,[C,e(a)])])]),q,n("p",null,[M,n("a",B,[O,e(a)]),w]),n("p",null,[D,n("a",z,[E,e(a)]),I]),T],64)}var N=t(r,[["render",H],["__file","css\u89C4\u8303.html.vue"]]);export{N as default};
