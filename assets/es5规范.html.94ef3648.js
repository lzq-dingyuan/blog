import{_ as e,r as o,o as c,a as l,b as n,d as t,F as u,c as a,e as s}from"./app.21ea0d90.js";const r={},i=a(`<h1 id="es5-\u89C4\u8303\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#es5-\u89C4\u8303\u6307\u5357" aria-hidden="true">#</a> es5 \u89C4\u8303\u6307\u5357</h1><p><em>\u7528\u66F4\u5408\u7406\u7684\u65B9\u5F0F\u5199 JavaScript</em></p><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h2><ul><li><p><strong>\u539F\u59CB\u503C</strong>: \u5B58\u53D6\u76F4\u63A5\u4F5C\u7528\u4E8E\u5B83\u81EA\u8EAB\u3002</p><ul><li><code>string</code></li><li><code>number</code></li><li><code>boolean</code></li><li><code>null</code></li><li><code>undefined</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> foo<span class="token punctuation">;</span>

bar <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 1, 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p><strong>\u590D\u6742\u7C7B\u578B</strong>: \u5B58\u53D6\u65F6\u4F5C\u7528\u4E8E\u5B83\u81EA\u8EAB\u503C\u7684\u5F15\u7528\u3002</p><ul><li><code>object</code></li><li><code>array</code></li><li><code>function</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> foo<span class="token punctuation">;</span>

bar<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> bar<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 9, 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul><h2 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h2>`,5),k=a(`<li><p>\u4F7F\u7528\u76F4\u63A5\u91CF\u521B\u5EFA\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>`,1),b=s("\u4E0D\u8981\u4F7F\u7528"),m={href:"http://es5.github.io/#x7.6.1",target:"_blank",rel:"noopener noreferrer"},d=s("\u4FDD\u7559\u5B57"),g=s("\u4F5C\u4E3A\u952E\u540D\uFF0C\u5B83\u4EEC\u5728 IE8 \u4E0B\u4E0D\u5DE5\u4F5C\u3002"),v={href:"https://github.com/airbnb/javascript/issues/61",target:"_blank",rel:"noopener noreferrer"},f=s("\u66F4\u591A\u4FE1\u606F"),h=s("\u3002"),y=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> superman <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">private</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> superman <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">defaults</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">clark</span><span class="token operator">:</span> <span class="token string">&#39;kent&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),w=a(`<li><p>\u4F7F\u7528\u540C\u4E49\u8BCD\u66FF\u6362\u9700\u8981\u4F7F\u7528\u7684\u4FDD\u7559\u5B57\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> superman <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;alien&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> superman <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">klass</span><span class="token operator">:</span> <span class="token string">&#39;alien&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> superman <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;alien&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>`,1),_=n("h2",{id:"\u6570\u7EC4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6570\u7EC4","aria-hidden":"true"},"#"),s(" \u6570\u7EC4")],-1),j=a(`<li><p>\u4F7F\u7528\u76F4\u63A5\u91CF\u521B\u5EFA\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u5411\u6570\u7EC4\u589E\u52A0\u5143\u7D20\u65F6\u4F7F\u7528 Array#push \u6765\u66FF\u4EE3\u76F4\u63A5\u8D4B\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> someStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token comment">// bad</span>
someStack<span class="token punctuation">[</span>someStack<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
someStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;abracadabra&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>`,2),x=s("\u5F53\u4F60\u9700\u8981\u62F7\u8D1D\u6570\u7EC4\u65F6\uFF0C\u4F7F\u7528 Array#slice\u3002"),I={href:"http://jsperf.com/converting-arguments-to-an-array/7",target:"_blank",rel:"noopener noreferrer"},S=s("jsPerf"),N=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">var</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
itemsCopy <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),B=a(`<li><p>\u4F7F\u7528 Array#slice \u5C06\u7C7B\u6570\u7EC4\u5BF9\u8C61\u8F6C\u6362\u6210\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>`,1),E=n("h2",{id:"\u5B57\u7B26\u4E32",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B57\u7B26\u4E32","aria-hidden":"true"},"#"),s(" \u5B57\u7B26\u4E32")],-1),J=a(`<li><p>\u4F7F\u7528\u5355\u5F15\u53F7 <code>&#39;&#39;</code> \u5305\u88F9\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;Bob Parr&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Bob Parr&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> fullName <span class="token operator">=</span> <span class="token string">&quot;Bob &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> fullName <span class="token operator">=</span> <span class="token string">&#39;Bob &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>\u8D85\u8FC7 100 \u4E2A\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\u5E94\u8BE5\u4F7F\u7528\u8FDE\u63A5\u7B26\u5199\u6210\u591A\u884C\u3002</p></li>`,2),T=s("\u6CE8\uFF1A\u82E5\u8FC7\u5EA6\u4F7F\u7528\uFF0C\u901A\u8FC7\u8FDE\u63A5\u7B26\u8FDE\u63A5\u7684\u957F\u5B57\u7B26\u4E32\u53EF\u80FD\u4F1A\u5F71\u54CD\u6027\u80FD\u3002"),F={href:"http://jsperf.com/ya-string-concat",target:"_blank",rel:"noopener noreferrer"},P=s("jsPerf"),A=s(" & "),$={href:"https://github.com/airbnb/javascript/issues/40",target:"_blank",rel:"noopener noreferrer"},C=s("\u8BA8\u8BBA"),q=s("."),M=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because \\
of Batman. When you stop to think about how Batman had anything to do \\
with this, you would get nowhere \\
fast.&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> errorMessage <span class="token operator">=</span> <span class="token string">&#39;This is a super long error that was thrown because &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;of Batman. When you stop to think about how Batman had anything to do &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;with this, you would get nowhere fast.&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,1),V=s("\u7A0B\u5E8F\u5316\u751F\u6210\u7684\u5B57\u7B26\u4E32\u4F7F\u7528 Array#join \u8FDE\u63A5\u800C\u4E0D\u662F\u4F7F\u7528\u8FDE\u63A5\u7B26\u3002\u5C24\u5176\u662F IE \u4E0B\uFF1A"),O={href:"http://jsperf.com/string-vs-array-concat/2",target:"_blank",rel:"noopener noreferrer"},D=s("jsPerf"),U=s("."),H=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> items<span class="token punctuation">;</span>
<span class="token keyword">var</span> messages<span class="token punctuation">;</span>
<span class="token keyword">var</span> length<span class="token punctuation">;</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>

messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;This one worked.&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;This one worked as well.&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;This one did not work.&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

length <span class="token operator">=</span> messages<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">inbox</span><span class="token punctuation">(</span><span class="token parameter">messages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  items <span class="token operator">=</span> <span class="token string">&#39;&lt;ul&gt;&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    items <span class="token operator">+=</span> <span class="token string">&#39;&lt;li&gt;&#39;</span> <span class="token operator">+</span> messages<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>message <span class="token operator">+</span> <span class="token string">&#39;&lt;/li&gt;&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> items <span class="token operator">+</span> <span class="token string">&#39;&lt;/ul&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">inbox</span><span class="token punctuation">(</span><span class="token parameter">messages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// use direct assignment in this case because we&#39;re micro-optimizing.</span>
    items<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;&lt;li&gt;&#39;</span> <span class="token operator">+</span> messages<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>message <span class="token operator">+</span> <span class="token string">&#39;&lt;/li&gt;&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token string">&#39;&lt;ul&gt;&#39;</span> <span class="token operator">+</span> items<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&lt;/ul&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,1),z=n("h2",{id:"\u51FD\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u51FD\u6570","aria-hidden":"true"},"#"),s(" \u51FD\u6570")],-1),Q=a(`<li><p>\u51FD\u6570\u8868\u8FBE\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F</span>
<span class="token keyword">var</span> <span class="token function-variable function">anonymous</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u547D\u540D\u51FD\u6570\u8868\u8FBE\u5F0F</span>
<span class="token keyword">var</span> <span class="token function-variable function">named</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u7ACB\u5373\u8C03\u7528\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08IIFE\uFF09</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome to the Internet. Please follow me.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li><li><p>\u6C38\u8FDC\u4E0D\u8981\u5728\u4E00\u4E2A\u975E\u51FD\u6570\u4EE3\u7801\u5757\uFF08if\u3001while \u7B49\uFF09\u4E2D\u58F0\u660E\u4E00\u4E2A\u51FD\u6570\uFF0C\u628A\u90A3\u4E2A\u51FD\u6570\u8D4B\u7ED9\u4E00\u4E2A\u53D8\u91CF\u3002\u6D4F\u89C8\u5668\u5141\u8BB8\u4F60\u8FD9\u4E48\u505A\uFF0C\u4F46\u5B83\u4EEC\u7684\u89E3\u6790\u8868\u73B0\u4E0D\u4E00\u81F4\u3002</p></li>`,2),W=n("strong",null,"\u6CE8\uFF1A",-1),X=s(" ECMA-262 \u628A "),K=n("code",null,"\u5757",-1),L=s(" \u5B9A\u4E49\u4E3A\u4E00\u7EC4\u8BED\u53E5\u3002\u51FD\u6570\u58F0\u660E\u4E0D\u662F\u8BED\u53E5\u3002"),R={href:"http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97",target:"_blank",rel:"noopener noreferrer"},Y=s("\u9605\u8BFB\u5BF9 ECMA-262 \u8FD9\u4E2A\u95EE\u9898\u7684\u8BF4\u660E"),G=s("\u3002"),Z=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>currentUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Nope.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> test<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>currentUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Yup.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,1),nn=a(`<li><p>\u6C38\u8FDC\u4E0D\u8981\u628A\u53C2\u6570\u547D\u540D\u4E3A <code>arguments</code>\u3002\u8FD9\u5C06\u53D6\u4EE3\u51FD\u6570\u4F5C\u7528\u57DF\u5185\u7684 <code>arguments</code> \u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">nope</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> arguments</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">yup</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> options<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>`,1),sn=a(`<h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><ul><li><p>\u4F7F\u7528 <code>.</code> \u6765\u8BBF\u95EE\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">[</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> isJedi <span class="token operator">=</span> luke<span class="token punctuation">.</span>jedi<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>\u5F53\u901A\u8FC7\u53D8\u91CF\u8BBF\u95EE\u5C5E\u6027\u65F6\u4F7F\u7528\u4E2D\u62EC\u53F7 <code>[]</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> luke <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">jedi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token parameter">prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> luke<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> isJedi <span class="token operator">=</span> <span class="token function">getProp</span><span class="token punctuation">(</span><span class="token string">&#39;jedi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ul><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><ul><li><p>\u603B\u662F\u4F7F\u7528 <code>var</code> \u6765\u58F0\u660E\u53D8\u91CF\u3002\u4E0D\u8FD9\u4E48\u505A\u5C06\u5BFC\u81F4\u4EA7\u751F\u5168\u5C40\u53D8\u91CF\u3002\u6211\u4EEC\u8981\u907F\u514D\u6C61\u67D3\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
superPower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> superPower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u4F7F\u7528 <code>var</code> \u58F0\u660E\u6BCF\u4E00\u4E2A\u53D8\u91CF\u3002 \u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u589E\u52A0\u65B0\u53D8\u91CF\u5C06\u53D8\u7684\u66F4\u52A0\u5BB9\u6613\uFF0C\u800C\u4E14\u4F60\u6C38\u8FDC\u4E0D\u7528\u518D\u62C5\u5FC3\u8C03\u6362\u9519 <code>;</code> \u8DDF <code>,</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token comment">// \uFF08\u8DDF\u4E0A\u9762\u7684\u4EE3\u7801\u6BD4\u8F83\u4E00\u4E0B\uFF0C\u770B\u770B\u54EA\u91CC\u9519\u4E86\uFF09</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dragonball <span class="token operator">=</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>\u6700\u540E\u518D\u58F0\u660E\u672A\u8D4B\u503C\u7684\u53D8\u91CF\u3002\u5F53\u4F60\u9700\u8981\u5F15\u7528\u524D\u9762\u7684\u53D8\u91CF\u8D4B\u503C\u65F6\u8FD9\u5C06\u53D8\u7684\u5F88\u6709\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> i<span class="token punctuation">,</span> len<span class="token punctuation">,</span> dragonball<span class="token punctuation">,</span>
    items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dragonball<span class="token punctuation">;</span>
<span class="token keyword">var</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> len<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> goSportsTeam <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> dragonball<span class="token punctuation">;</span>
<span class="token keyword">var</span> length<span class="token punctuation">;</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li><li><p>\u5728\u4F5C\u7528\u57DF\u9876\u90E8\u58F0\u660E\u53D8\u91CF\u3002\u8FD9\u5C06\u5E2E\u4F60\u907F\u514D\u53D8\u91CF\u58F0\u660E\u63D0\u5347\u76F8\u5173\u7684\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;doing stuff..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//..other stuff..</span>

  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;doing stuff..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//..other stuff..</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad - \u4E0D\u5FC5\u8981\u7684\u51FD\u6570\u8C03\u7528</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setFirstName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arguments<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  name <span class="token operator">=</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setFirstName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div></li></ul><h2 id="\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u63D0\u5347" aria-hidden="true">#</a> \u63D0\u5347</h2>`,5),an=a(`<li><p>\u53D8\u91CF\u58F0\u660E\u4F1A\u63D0\u5347\u81F3\u4F5C\u7528\u57DF\u9876\u90E8\uFF0C\u4F46\u8D4B\u503C\u4E0D\u4F1A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6211\u4EEC\u77E5\u9053\u8FD9\u6837\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF08\u5047\u8BBE\u8FD9\u91CC\u6CA1\u6709\u540D\u4E3A notDefined \u7684\u5168\u5C40\u53D8\u91CF\uFF09</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notDefined<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; throws a ReferenceError</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F46\u7531\u4E8E\u53D8\u91CF\u58F0\u660E\u63D0\u5347\u7684\u539F\u56E0\uFF0C\u5728\u4E00\u4E2A\u53D8\u91CF\u5F15\u7528\u540E\u518D\u521B\u5EFA\u5B83\u7684\u53D8\u91CF\u58F0\u660E\u5C06\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u3002</span>
<span class="token comment">// \u6CE8\uFF1A\u53D8\u91CF\u8D4B\u503C\u4E3A \`true\` \u4E0D\u4F1A\u63D0\u5347\u3002</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>declaredButNotAssigned<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>
  <span class="token keyword">var</span> declaredButNotAssigned <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u89E3\u91CA\u5668\u4F1A\u628A\u53D8\u91CF\u58F0\u660E\u63D0\u5347\u5230\u4F5C\u7528\u57DF\u9876\u90E8\uFF0C\u610F\u5473\u7740\u6211\u4EEC\u7684\u4F8B\u5B50\u5C06\u88AB\u91CD\u5199\u6210\uFF1A</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> declaredButNotAssigned<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>declaredButNotAssigned<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>
  declaredButNotAssigned <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li><li><p>\u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u4F1A\u63D0\u5347\u5B83\u4EEC\u7684\u53D8\u91CF\u540D\uFF0C\u4F46\u4E0D\u4F1A\u63D0\u5347\u51FD\u6570\u7684\u8D4B\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anonymous<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; TypeError anonymous is not a function</span>

  <span class="token keyword">var</span> <span class="token function-variable function">anonymous</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;anonymous function expression&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>\u547D\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u4F1A\u63D0\u5347\u53D8\u91CF\u540D\uFF0C\u4F46\u4E0D\u4F1A\u63D0\u5347\u51FD\u6570\u540D\u6216\u51FD\u6570\u4F53\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>named<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; TypeError named is not a function</span>

  <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; ReferenceError superPower is not defined</span>

  <span class="token keyword">var</span> <span class="token function-variable function">named</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Flying&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5F53\u51FD\u6570\u540D\u8DDF\u53D8\u91CF\u540D\u4E00\u6837\u65F6\uFF0C\u8868\u73B0\u4E5F\u662F\u5982\u6B64\u3002</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>named<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

  <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; TypeError named is not a function</span>

  <span class="token keyword">var</span> <span class="token function-variable function">named</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">named</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;named&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li><li><p>\u51FD\u6570\u58F0\u660E\u63D0\u5347\u5B83\u4EEC\u7684\u540D\u5B57\u548C\u51FD\u6570\u4F53\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; Flying</span>

  <span class="token keyword">function</span> <span class="token function">superPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Flying&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>`,4),pn=s("\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u5728 "),tn={href:"http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting",target:"_blank",rel:"noopener noreferrer"},en=s("JavaScript Scoping & Hoisting"),on=s(" by "),cn={href:"http://www.adequatelygood.com/",target:"_blank",rel:"noopener noreferrer"},ln=s("Ben Cherry"),un=s("."),rn=n("h2",{id:"\u6BD4\u8F83\u8FD0\u7B97\u7B26-\u7B49\u53F7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6BD4\u8F83\u8FD0\u7B97\u7B26-\u7B49\u53F7","aria-hidden":"true"},"#"),s(" \u6BD4\u8F83\u8FD0\u7B97\u7B26 & \u7B49\u53F7")],-1),kn=a(`<li><p>\u4F18\u5148\u4F7F\u7528 <code>===</code> \u548C <code>!==</code> \u800C\u4E0D\u662F <code>==</code> \u548C <code>!=</code>.</p></li><li><p>\u6761\u4EF6\u8868\u8FBE\u5F0F\u4F8B\u5982 <code>if</code> \u8BED\u53E5\u901A\u8FC7\u62BD\u8C61\u65B9\u6CD5 <code>ToBoolean</code> \u5F3A\u5236\u8BA1\u7B97\u5B83\u4EEC\u7684\u8868\u8FBE\u5F0F\u5E76\u4E14\u603B\u662F\u9075\u5B88\u4E0B\u9762\u7684\u89C4\u5219\uFF1A</p><ul><li><strong>\u5BF9\u8C61</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>true</strong></li><li><strong>Undefined</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>false</strong></li><li><strong>Null</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>false</strong></li><li><strong>\u5E03\u5C14\u503C</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>\u5E03\u5C14\u7684\u503C</strong></li><li><strong>\u6570\u5B57</strong> \u5982\u679C\u662F <strong>+0\u3001-0 \u6216 NaN</strong> \u88AB\u8BA1\u7B97\u4E3A <strong>false</strong>\uFF0C\u5426\u5219\u4E3A <strong>true</strong></li><li><strong>\u5B57\u7B26\u4E32</strong> \u5982\u679C\u662F\u7A7A\u5B57\u7B26\u4E32 <code>&#39;&#39;</code> \u88AB\u8BA1\u7B97\u4E3A <strong>false</strong>\uFF0C\u5426\u5219\u4E3A <strong>true</strong></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// true</span>
  <span class="token comment">// \u4E00\u4E2A\u6570\u7EC4\u5C31\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u88AB\u8BA1\u7B97\u4E3A true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>\u4F7F\u7528\u5FEB\u6377\u65B9\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li>`,3),bn=s("\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u5728 "),mn={href:"http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108",target:"_blank",rel:"noopener noreferrer"},dn=s("Truth Equality and JavaScript"),gn=s(" by Angus Croll."),vn=a(`<h2 id="\u5757" tabindex="-1"><a class="header-anchor" href="#\u5757" aria-hidden="true">#</a> \u5757</h2><ul><li><p>\u4F7F\u7528\u5927\u62EC\u53F7\u5305\u88F9\u6240\u6709\u7684\u591A\u884C\u4EE3\u7801\u5757\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li><li><p>\u5982\u679C\u901A\u8FC7 <code>if</code> \u548C <code>else</code> \u4F7F\u7528\u591A\u884C\u4EE3\u7801\u5757\uFF0C\u628A <code>else</code> \u653E\u5728 <code>if</code> \u4EE3\u7801\u5757\u5173\u95ED\u62EC\u53F7\u7684\u540C\u4E00\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">thing2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">thing3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">thing1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">thing2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">thing3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li></ul><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><ul><li><p>\u4F7F\u7528 <code>/** ... */</code> \u4F5C\u4E3A\u591A\u884C\u6CE8\u91CA\u3002\u5305\u542B\u63CF\u8FF0\u3001\u6307\u5B9A\u6240\u6709\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u548C\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token comment">// make() returns a new element</span>
<span class="token comment">// based on the passed in tag name</span>
<span class="token comment">//</span>
<span class="token comment">// @param {String} tag</span>
<span class="token comment">// @return {Element} element</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...stuff...</span>

  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">tag</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Element<span class="token punctuation">}</span></span> element
 */</span>
<span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...stuff...</span>

  <span class="token keyword">return</span> element<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></li><li><p>\u4F7F\u7528 <code>//</code> \u4F5C\u4E3A\u5355\u884C\u6CE8\u91CA\u3002\u5728\u8BC4\u8BBA\u5BF9\u8C61\u4E0A\u9762\u53E6\u8D77\u4E00\u884C\u4F7F\u7528\u5355\u884C\u6CE8\u91CA\u3002\u5728\u6CE8\u91CA\u524D\u63D2\u5165\u7A7A\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// is current tab</span>

<span class="token comment">// good</span>
<span class="token comment">// is current tab</span>
<span class="token keyword">var</span> active <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching type...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">var</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> type<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetching type...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// set the default type to &#39;no type&#39;</span>
  <span class="token keyword">var</span> type <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">&#39;no type&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> type<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li><li><p>\u7ED9\u6CE8\u91CA\u589E\u52A0 <code>FIXME</code> \u6216 <code>TODO</code> \u7684\u524D\u7F00\u53EF\u4EE5\u5E2E\u52A9\u5176\u4ED6\u5F00\u53D1\u8005\u5FEB\u901F\u4E86\u89E3\u8FD9\u662F\u4E00\u4E2A\u9700\u8981\u590D\u67E5\u7684\u95EE\u9898\uFF0C\u6216\u662F\u7ED9\u9700\u8981\u5B9E\u73B0\u7684\u529F\u80FD\u63D0\u4F9B\u4E00\u4E2A\u89E3\u51B3\u65B9\u5F0F\u3002\u8FD9\u5C06\u6709\u522B\u4E8E\u5E38\u89C1\u7684\u6CE8\u91CA\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u53EF\u64CD\u4F5C\u7684\u3002\u4F7F\u7528 <code>FIXME -- need to figure this out</code> \u6216\u8005 <code>TODO -- need to implement</code>\u3002</p></li><li><p>\u4F7F\u7528 <code>// FIXME:</code> \u6807\u6CE8\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// FIXME: shouldn&#39;t use a global here</span>
  total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>\u4F7F\u7528 <code>// TODO:</code> \u6807\u6CE8\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// TODO: total should be configurable by an options param</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul><h2 id="\u7A7A\u767D" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u767D" aria-hidden="true">#</a> \u7A7A\u767D</h2><ul><li><p>\u4F7F\u7528 2 \u4E2A\u7A7A\u683C\u4F5C\u4E3A\u7F29\u8FDB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
\u2219\u2219\u2219\u2219<span class="token keyword">var</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
\u2219<span class="token keyword">var</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
\u2219\u2219<span class="token keyword">var</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li><li><p>\u5728\u5927\u62EC\u53F7\u524D\u653E\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
dog<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;1 year&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">&#39;Bernese Mountain Dog&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
dog<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;1 year&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">breed</span><span class="token operator">:</span> <span class="token string">&#39;Bernese Mountain Dog&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li><li><p>\u5728\u63A7\u5236\u8BED\u53E5\uFF08<code>if</code>\u3001<code>while</code> \u7B49\uFF09\u7684\u5C0F\u62EC\u53F7\u524D\u653E\u4E00\u4E2A\u7A7A\u683C\u3002\u5728\u51FD\u6570\u8C03\u7528\u53CA\u58F0\u660E\u4E2D\uFF0C\u4E0D\u5728\u51FD\u6570\u7684\u53C2\u6570\u5217\u8868\u524D\u52A0\u7A7A\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isJedi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fight</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isJedi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">fight</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span> <span class="token punctuation">(</span><span class="token string">&#39;Swooosh!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Swooosh!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li><li><p>\u4F7F\u7528\u7A7A\u683C\u628A\u8FD0\u7B97\u7B26\u9694\u5F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> x<span class="token operator">=</span>y<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u5728\u6587\u4EF6\u672B\u5C3E\u63D2\u5165\u4E00\u4E2A\u7A7A\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">global</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">global</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\u21B5
\u21B5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">global</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\u21B5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>\u5728\u4F7F\u7528\u957F\u65B9\u6CD5\u94FE\u65F6\u8FDB\u884C\u7F29\u8FDB\u3002\u4F7F\u7528\u524D\u9762\u7684\u70B9 <code>.</code> \u5F3A\u8C03\u8FD9\u662F\u65B9\u6CD5\u8C03\u7528\u800C\u4E0D\u662F\u65B0\u8BED\u53E5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
    <span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.open&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> leds <span class="token operator">=</span> stage<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">&#39;.led&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">classed</span><span class="token punctuation">(</span><span class="token string">&#39;led&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:g&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;translate(&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>tron<span class="token punctuation">.</span>led<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> leds <span class="token operator">=</span> stage<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">&#39;.led&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:svg&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">classed</span><span class="token punctuation">(</span><span class="token string">&#39;led&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;width&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;svg:g&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;transform&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;translate(&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>radius <span class="token operator">+</span> margin<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>tron<span class="token punctuation">.</span>led<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></li><li><p>\u5728\u5757\u672B\u548C\u65B0\u8BED\u53E5\u524D\u63D2\u5165\u7A7A\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> baz<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> baz<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">bar</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> obj<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">bar</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></li></ul><h2 id="\u9017\u53F7" tabindex="-1"><a class="header-anchor" href="#\u9017\u53F7" aria-hidden="true">#</a> \u9017\u53F7</h2>`,7),fn=a(`<li><p>\u884C\u9996\u9017\u53F7: <strong>\u4E0D\u9700\u8981</strong>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> story <span class="token operator">=</span> <span class="token punctuation">[</span>
    once
  <span class="token punctuation">,</span> upon
  <span class="token punctuation">,</span> aTime
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> story <span class="token operator">=</span> <span class="token punctuation">[</span>
  once<span class="token punctuation">,</span>
  upon<span class="token punctuation">,</span>
  aTime
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Bob&#39;</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Parr&#39;</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">heroName</span><span class="token operator">:</span> <span class="token string">&#39;Mr. Incredible&#39;</span>
  <span class="token punctuation">,</span> <span class="token literal-property property">superPower</span><span class="token operator">:</span> <span class="token string">&#39;strength&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Parr&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">heroName</span><span class="token operator">:</span> <span class="token string">&#39;Mr. Incredible&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">superPower</span><span class="token operator">:</span> <span class="token string">&#39;strength&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li>`,1),hn=s("\u989D\u5916\u7684\u884C\u672B\u9017\u53F7\uFF1A"),yn=n("strong",null,"\u4E0D\u9700\u8981",-1),wn=s("\u3002\u8FD9\u6837\u505A\u4F1A\u5728 IE6/7 \u548C IE9 \u602A\u5F02\u6A21\u5F0F\u4E0B\u5F15\u8D77\u95EE\u9898\u3002\u540C\u6837\uFF0C\u591A\u4F59\u7684\u9017\u53F7\u5728\u67D0\u4E9B ES3 \u7684\u5B9E\u73B0\u91CC\u4F1A\u589E\u52A0\u6570\u7EC4\u7684\u957F\u5EA6\u3002\u5728 ES5 \u4E2D\u5DF2\u7ECF\u6F84\u6E05\u4E86 ("),_n={href:"http://es5.github.io/#D",target:"_blank",rel:"noopener noreferrer"},jn=s("source"),xn=s(")\uFF1A"),In=a(`<blockquote><p>Edition 5 clarifies the fact that a trailing comma at the end of an ArrayInitialiser does not add to the length of the array. This is not a semantic change from Edition 3 but some implementations may have previously misinterpreted this.</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Kevin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Flynn&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> heroes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;Batman&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Superman&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> hero <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Kevin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Flynn&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> heroes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;Batman&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;Superman&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u5206\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5206\u53F7" aria-hidden="true">#</a> \u5206\u53F7</h2>`,3),Sn=a(`<p><strong>\u4F7F\u7528\u5206\u53F7\u3002</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Skywalker&#39;</span>
  <span class="token keyword">return</span> name
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Skywalker&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good (\u9632\u6B62\u51FD\u6570\u5728\u4E24\u4E2A IIFE \u5408\u5E76\u65F6\u88AB\u5F53\u6210\u4E00\u4E2A\u53C2\u6570</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Skywalker&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,2),Nn={href:"http://stackoverflow.com/a/7365214/1712802",target:"_blank",rel:"noopener noreferrer"},Bn=s("\u4E86\u89E3\u66F4\u591A"),En=s("."),Jn=n("h2",{id:"\u7C7B\u578B\u8F6C\u6362",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7C7B\u578B\u8F6C\u6362","aria-hidden":"true"},"#"),s(" \u7C7B\u578B\u8F6C\u6362")],-1),Tn=a(`<li><p>\u5728\u8BED\u53E5\u5F00\u59CB\u65F6\u6267\u884C\u7C7B\u578B\u8F6C\u6362\u3002</p></li><li><p>\u5B57\u7B26\u4E32\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//  =&gt; this.reviewScore = 9;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> totalScore <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> totalScore <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39; total score&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> totalScore <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reviewScore <span class="token operator">+</span> <span class="token string">&#39; total score&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li><li><p>\u4F7F\u7528 <code>parseInt</code> \u8F6C\u6362\u6570\u5B57\u65F6\u603B\u662F\u5E26\u4E0A\u7C7B\u578B\u8F6C\u6362\u7684\u57FA\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> inputValue <span class="token operator">=</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token operator">+</span>inputValue<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li>`,3),Fn=s("\u5982\u679C\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0 "),Pn=n("code",null,"parseInt",-1),An=s(" \u6210\u4E3A\u4F60\u6240\u505A\u7684\u4E8B\u7684\u74F6\u9888\u800C\u9700\u8981\u4F7F\u7528\u4F4D\u64CD\u4F5C\u89E3\u51B3"),$n={href:"http://jsperf.com/coercion-vs-casting/3",target:"_blank",rel:"noopener noreferrer"},Cn=s("\u6027\u80FD\u95EE\u9898"),qn=s("\u65F6\uFF0C\u7559\u4E2A\u6CE8\u91CA\u8BF4\u6E05\u695A\u539F\u56E0\u548C\u4F60\u7684\u76EE\u7684\u3002"),Mn=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token doc-comment comment">/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> inputValue <span class="token operator">&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1),Vn=n("strong",null,"\u6CE8\uFF1A",-1),On=s(" \u5C0F\u5FC3\u4F7F\u7528\u4F4D\u64CD\u4F5C\u8FD0\u7B97\u7B26\u3002\u6570\u5B57\u4F1A\u88AB\u5F53\u6210 "),Dn={href:"http://es5.github.io/#x4.3.19",target:"_blank",rel:"noopener noreferrer"},Un=s("64 \u4F4D\u503C"),Hn=s("\uFF0C\u4F46\u662F\u4F4D\u64CD\u4F5C\u8FD0\u7B97\u7B26\u603B\u662F\u8FD4\u56DE 32 \u4F4D\u7684\u6574\u6570\uFF08"),zn={href:"http://es5.github.io/#x11.7",target:"_blank",rel:"noopener noreferrer"},Qn=s("source"),Wn=s("\uFF09\u3002\u4F4D\u64CD\u4F5C\u5904\u7406\u5927\u4E8E 32 \u4F4D\u7684\u6574\u6570\u503C\u65F6\u8FD8\u4F1A\u5BFC\u81F4\u610F\u6599\u4E4B\u5916\u7684\u884C\u4E3A\u3002"),Xn={href:"https://github.com/airbnb/javascript/issues/109",target:"_blank",rel:"noopener noreferrer"},Kn=s("\u8BA8\u8BBA"),Ln=s("\u3002\u6700\u5927\u7684 32 \u4F4D\u6574\u6570\u662F 2,147,483,647\uFF1A"),Rn=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">2147483647</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; 2147483647</span>
<span class="token number">2147483648</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; -2147483648</span>
<span class="token number">2147483649</span> <span class="token operator">&gt;&gt;</span> <span class="token number">0</span> <span class="token comment">//=&gt; -2147483647</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),Yn=a(`<li><p>\u5E03\u5C14:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> hasAge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> hasAge <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> hasAge <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>age<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>`,1),Gn=a(`<h2 id="\u547D\u540D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> \u547D\u540D\u89C4\u5219</h2><ul><li><p>\u907F\u514D\u5355\u5B57\u6BCD\u547D\u540D\u3002\u547D\u540D\u5E94\u5177\u5907\u63CF\u8FF0\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...stuff...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ..stuff..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>\u4F7F\u7528\u9A7C\u5CF0\u5F0F\u547D\u540D\u5BF9\u8C61\u3001\u51FD\u6570\u548C\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> OBJEcttsssss <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> this_is_my_object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> thisIsMyObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">thisIsMyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>\u4F7F\u7528\u5E15\u65AF\u5361\u5F0F\u547D\u540D\u6784\u9020\u51FD\u6570\u6216\u7C7B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bad <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">user</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nope&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> good <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yup&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li><li><p>\u4E0D\u8981\u4F7F\u7528\u4E0B\u5212\u7EBF\u524D/\u540E\u7F00\u3002</p></li></ul><blockquote><p>\u4E3A\u4EC0\u4E48\uFF1FJavaScript \u5E76\u6CA1\u6709\u79C1\u6709\u5C5E\u6027\u6216\u79C1\u6709\u65B9\u6CD5\u7684\u6982\u5FF5\u3002\u867D\u7136\u4F7F\u7528\u4E0B\u5212\u7EBF\u662F\u8868\u793A\u300C\u79C1\u6709\u300D\u7684\u4E00\u79CD\u5171\u8BC6\uFF0C\u4F46\u5B9E\u9645\u4E0A\u8FD9\u4E9B\u5C5E\u6027\u662F\u5B8C\u5168\u516C\u5F00\u7684\uFF0C\u5B83\u672C\u8EAB\u5C31\u662F\u4F60\u516C\u5171\u63A5\u53E3\u7684\u4E00\u90E8\u5206\u3002\u8FD9\u79CD\u4E60\u60EF\u6216\u8BB8\u4F1A\u5BFC\u81F4\u5F00\u53D1\u8005\u9519\u8BEF\u7684\u8BA4\u4E3A\u6539\u52A8\u5B83\u4E0D\u4F1A\u9020\u6210\u7834\u574F\u6216\u8005\u4E0D\u9700\u8981\u53BB\u6D4B\u8BD5\u3002\u957F\u8BDD\u77ED\u8BF4\uFF1A\u5982\u679C\u4F60\u60F3\u8981\u67D0\u5904\u4E3A\u300C\u79C1\u6709\u300D\uFF0C\u5B83\u5FC5\u987B\u4E0D\u80FD\u662F\u663E\u5F0F\u63D0\u51FA\u7684\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>__firstName__ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName_ <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>_firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token string">&#39;Panda&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,4),Zn=a(`<li><p>\u4E0D\u8981\u4FDD\u5B58 <code>this</code> \u7684\u5F15\u7528\u3002\u4F7F\u7528 Function#bind\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_this<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></li><li><p>\u7ED9\u51FD\u6570\u547D\u540D\u3002\u8FD9\u5728\u505A\u5806\u6808\u8F68\u8FF9\u65F6\u5F88\u6709\u5E2E\u52A9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>`,2),ns=n("strong",null,"\u6CE8\uFF1A",-1),ss=s(" IE8 \u53CA\u4EE5\u4E0B\u7248\u672C\u5BF9\u547D\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u5904\u7406\u6709\u4E9B\u602A\u5F02\u3002\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u5230 "),as={href:"http://kangax.github.io/nfe/",target:"_blank",rel:"noopener noreferrer"},ps=s("http://kangax.github.io/nfe/"),ts=s("\u3002"),es=a(`<li><p>\u5982\u679C\u4F60\u7684\u6587\u4EF6\u5BFC\u51FA\u4E00\u4E2A\u7C7B\uFF0C\u4F60\u7684\u6587\u4EF6\u540D\u5E94\u8BE5\u4E0E\u7C7B\u540D\u5B8C\u5168\u76F8\u540C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// file contents</span>
<span class="token keyword">class</span> <span class="token class-name">CheckBox</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> CheckBox<span class="token punctuation">;</span>

<span class="token comment">// in some other file</span>
<span class="token comment">// bad</span>
<span class="token keyword">var</span> CheckBox <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./checkBox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">var</span> CheckBox <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./check_box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> CheckBox <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./CheckBox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li>`,1),os=a(`<h2 id="\u5B58\u53D6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B58\u53D6\u5668" aria-hidden="true">#</a> \u5B58\u53D6\u5668</h2><ul><li><p>\u5C5E\u6027\u7684\u5B58\u53D6\u51FD\u6570\u4E0D\u662F\u5FC5\u987B\u7684\u3002</p></li><li><p>\u5982\u679C\u4F60\u9700\u8981\u5B58\u53D6\u51FD\u6570\u65F6\u4F7F\u7528 <code>getVal()</code> \u548C <code>setVal(&#39;hello&#39;)</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
dragon<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
dragon<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
dragon<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
dragon<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>\u5982\u679C\u5C5E\u6027\u662F\u5E03\u5C14\u503C\uFF0C\u4F7F\u7528 <code>isVal()</code> \u6216 <code>hasVal()</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dragon<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dragon<span class="token punctuation">.</span><span class="token function">hasAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>\u521B\u5EFA get() \u548C set() \u51FD\u6570\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u8981\u4FDD\u6301\u4E00\u81F4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Jedi</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options <span class="token operator">||</span> <span class="token punctuation">(</span>options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> lightsaber <span class="token operator">=</span> options<span class="token punctuation">.</span>lightsaber <span class="token operator">||</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;lightsaber&#39;</span><span class="token punctuation">,</span> lightsaber<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><h2 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h2><ul><li><p>\u7ED9\u5BF9\u8C61\u539F\u578B\u5206\u914D\u65B9\u6CD5\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u4E00\u4E2A\u65B0\u5BF9\u8C61\u8986\u76D6\u539F\u578B\u3002\u8986\u76D6\u539F\u578B\u5C06\u5BFC\u81F4\u7EE7\u627F\u51FA\u73B0\u95EE\u9898\uFF1A\u91CD\u8BBE\u539F\u578B\u5C06\u8986\u76D6\u539F\u6709\u539F\u578B\uFF01</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new jedi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fight</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fighting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">block</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;blocking&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">fight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fighting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">block</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;blocking&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></li><li><p>\u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE <code>this</code> \u6765\u5B9E\u73B0\u65B9\u6CD5\u94FE\u5F0F\u4F7F\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; true</span>
luke<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined</span>

<span class="token comment">// good</span>
<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>jumping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> luke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

luke<span class="token punctuation">.</span><span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li><li><p>\u5199\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 <code>toString()</code> \u65B9\u6CD5\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u786E\u4FDD\u5B83\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u4E14\u4E0D\u4F1A\u4EA7\u751F\u526F\u4F5C\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Jedi</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options <span class="token operator">||</span> <span class="token punctuation">(</span>options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> options<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&#39;no name&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Jedi</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Jedi - &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li></ul><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><ul><li><p>\u5F53\u7ED9\u4E8B\u4EF6\u9644\u52A0\u6570\u636E\u65F6\uFF08\u65E0\u8BBA\u662F DOM \u4E8B\u4EF6\u8FD8\u662F\u79C1\u6709\u4E8B\u4EF6\uFF09\uFF0C\u4F20\u5165\u4E00\u4E2A\u54C8\u5E0C\u800C\u4E0D\u662F\u539F\u59CB\u503C\u3002\u8FD9\u6837\u53EF\u4EE5\u8BA9\u540E\u9762\u7684\u8D21\u732E\u8005\u589E\u52A0\u66F4\u591A\u6570\u636E\u5230\u4E8B\u4EF6\u6570\u636E\u800C\u65E0\u9700\u627E\u51FA\u5E76\u66F4\u65B0\u4E8B\u4EF6\u7684\u6BCF\u4E00\u4E2A\u5904\u7406\u5668\u3002\u4F8B\u5982\uFF0C\u4E0D\u597D\u7684\u5199\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> listing<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> listingId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with listingId</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u66F4\u597D\u7684\u5199\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">listingId</span> <span class="token operator">:</span> listing<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;listingUpdated&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something with data.listingId</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul><h2 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h2>`,7),cs=s("\u6A21\u5757\u5E94\u8BE5\u4EE5 "),ls=n("code",null,"!",-1),us=s(" \u5F00\u59CB\u3002\u8FD9\u6837\u786E\u4FDD\u4E86\u5F53\u4E00\u4E2A\u4E0D\u597D\u7684\u6A21\u5757\u5FD8\u8BB0\u5305\u542B\u6700\u540E\u7684\u5206\u53F7\u65F6\uFF0C\u5728\u5408\u5E76\u4EE3\u7801\u5230\u751F\u4EA7\u73AF\u5883\u540E\u4E0D\u4F1A\u4EA7\u751F\u9519\u8BEF\u3002"),rs={href:"https://github.com/airbnb/javascript/issues/44#issuecomment-13063933",target:"_blank",rel:"noopener noreferrer"},is=s("\u8BE6\u7EC6\u8BF4\u660E"),ks=a(`<li><p>\u6587\u4EF6\u5E94\u8BE5\u4EE5\u9A7C\u5CF0\u5F0F\u547D\u540D\uFF0C\u5E76\u653E\u5728\u540C\u540D\u7684\u6587\u4EF6\u5939\u91CC\uFF0C\u4E14\u4E0E\u5BFC\u51FA\u7684\u540D\u5B57\u4E00\u81F4\u3002</p></li><li><p>\u589E\u52A0\u4E00\u4E2A\u540D\u4E3A <code>noConflict()</code> \u7684\u65B9\u6CD5\u6765\u8BBE\u7F6E\u5BFC\u51FA\u7684\u6A21\u5757\u4E3A\u524D\u4E00\u4E2A\u7248\u672C\u5E76\u8FD4\u56DE\u5B83\u3002</p></li><li><p>\u6C38\u8FDC\u5728\u6A21\u5757\u9876\u90E8\u58F0\u660E <code>&#39;use strict&#39;;</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// fancyInput/fancyInput.js</span>

<span class="token operator">!</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">global</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> previousFancyInput <span class="token operator">=</span> global<span class="token punctuation">.</span>FancyInput<span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">FancyInput</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  FancyInput<span class="token punctuation">.</span><span class="token function-variable function">noConflict</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">noConflict</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    global<span class="token punctuation">.</span>FancyInput <span class="token operator">=</span> previousFancyInput<span class="token punctuation">;</span>
    <span class="token keyword">return</span> FancyInput<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  global<span class="token punctuation">.</span>FancyInput <span class="token operator">=</span> FancyInput<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li>`,3),bs=n("h2",{id:"jquery",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jquery","aria-hidden":"true"},"#"),s(" jQuery")],-1),ms=a(`<li><p>\u4F7F\u7528 <code>$</code> \u4F5C\u4E3A\u5B58\u50A8 jQuery \u5BF9\u8C61\u7684\u53D8\u91CF\u540D\u524D\u7F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">var</span> $sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u7F13\u5B58 jQuery \u67E5\u8BE2\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">setSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...stuff...</span>

  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">setSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> $sidebar <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  $sidebar<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...stuff...</span>

  $sidebar<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li>`,2),ds=s("\u5BF9 DOM \u67E5\u8BE2\u4F7F\u7528\u5C42\u53E0 "),gs=n("code",null,"$('.sidebar ul')",-1),vs=s(" \u6216 \u7236\u5143\u7D20 > \u5B50\u5143\u7D20 "),fs=n("code",null,"$('.sidebar > ul')",-1),hs=s("\u3002 "),ys={href:"http://jsperf.com/jquery-find-vs-context-sel/16",target:"_blank",rel:"noopener noreferrer"},ws=s("jsPerf"),_s=a(`<li><p>\u5BF9\u6709\u4F5C\u7528\u57DF\u7684 jQuery \u5BF9\u8C61\u67E5\u8BE2\u4F7F\u7528 <code>find</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.sidebar &gt; ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
$sidebar<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>`,1);function js(xs,Is){const p=o("ExternalLinkIcon");return c(),l(u,null,[i,n("ul",null,[k,n("li",null,[n("p",null,[b,n("a",m,[d,t(p)]),g,n("a",v,[f,t(p)]),h]),y]),w]),_,n("ul",null,[j,n("li",null,[n("p",null,[x,n("a",I,[S,t(p)])]),N]),B]),E,n("ul",null,[J,n("li",null,[n("p",null,[T,n("a",F,[P,t(p)]),A,n("a",$,[C,t(p)]),q]),M]),n("li",null,[n("p",null,[V,n("a",O,[D,t(p)]),U]),H])]),z,n("ul",null,[Q,n("li",null,[n("p",null,[W,X,K,L,n("a",R,[Y,t(p)]),G]),Z]),nn]),sn,n("ul",null,[an,n("li",null,[n("p",null,[pn,n("a",tn,[en,t(p)]),on,n("a",cn,[ln,t(p)]),un])])]),rn,n("ul",null,[kn,n("li",null,[n("p",null,[bn,n("a",mn,[dn,t(p)]),gn])])]),vn,n("ul",null,[fn,n("li",null,[n("p",null,[hn,yn,wn,n("a",_n,[jn,t(p)]),xn])])]),In,n("ul",null,[n("li",null,[Sn,n("p",null,[n("a",Nn,[Bn,t(p)]),En])])]),Jn,n("ul",null,[Tn,n("li",null,[n("p",null,[Fn,Pn,An,n("a",$n,[Cn,t(p)]),qn]),Mn]),n("li",null,[n("p",null,[Vn,On,n("a",Dn,[Un,t(p)]),Hn,n("a",zn,[Qn,t(p)]),Wn,n("a",Xn,[Kn,t(p)]),Ln]),Rn]),Yn]),Gn,n("ul",null,[Zn,n("li",null,[n("p",null,[ns,ss,n("a",as,[ps,t(p)]),ts])]),es]),os,n("ul",null,[n("li",null,[n("p",null,[cs,ls,us,n("a",rs,[is,t(p)])])]),ks]),bs,n("ul",null,[ms,n("li",null,[n("p",null,[ds,gs,vs,fs,hs,n("a",ys,[ws,t(p)])])]),_s])],64)}var Ns=e(r,[["render",js],["__file","es5\u89C4\u8303.html.vue"]]);export{Ns as default};
