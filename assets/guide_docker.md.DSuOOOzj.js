import{_ as i,c as a,ae as n,o as l}from"./chunks/framework.ilBJtLV6.js";const E=JSON.parse('{"title":"Docker部署","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/docker.md","filePath":"guide/docker.md","lastUpdated":1738015814000}'),t={name:"guide/docker.md"};function e(h,s,p,k,r,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="docker部署" tabindex="-1">Docker部署 <a class="header-anchor" href="#docker部署" aria-label="Permalink to &quot;Docker部署&quot;">​</a></h1><h2 id="docker-镜像" tabindex="-1">Docker 镜像 <a class="header-anchor" href="#docker-镜像" aria-label="Permalink to &quot;Docker 镜像&quot;">​</a></h2><p>Docker版本分为稳定版和beta版本，beta版本为最新版</p><h3 id="镜像分别为" tabindex="-1">镜像分别为： <a class="header-anchor" href="#镜像分别为" aria-label="Permalink to &quot;镜像分别为：&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oshaoli688/miaospeed:latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> oshaoli688/miaospeed:beta</span></span></code></pre></div><h3 id="curl下载镜像" tabindex="-1">Curl下载镜像： <a class="header-anchor" href="#curl下载镜像" aria-label="Permalink to &quot;Curl下载镜像：&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://download.static-resources.work/containers/ms_beta.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/miaospeed.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://download.static-resources.work/containers/frpc_latest.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/frpc_latest.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> load</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/miaospeed.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/miaospeed.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> load</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/frpc_latest.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/frpc_latest.tar.gz</span></span></code></pre></div><h2 id="docker部署-1" tabindex="-1">Docker部署 <a class="header-anchor" href="#docker部署-1" aria-label="Permalink to &quot;Docker部署&quot;">​</a></h2><p>默认端口：9966</p><h3 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-label="Permalink to &quot;全局变量&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MIAOSPEED_META              #启用META，默认不设置即可</span></span>
<span class="line"><span>MIAOSPEED_MTLS              #启用mtls,不启用不填写,启用:MIAOSPEED_MTLS=1</span></span>
<span class="line"><span>MIAOSPEED_TOKEN             #验证Token,例如：MIAOSPEED_TOKEN=xxxxx</span></span>
<span class="line"><span>MIAOSPEED_PATH              #设置miaospeed的websocket路径（仅限beta版本）</span></span>
<span class="line"><span>MIAOSPEED_WHITELIST         #白名单，格式:MIAOSPEED_WHITELIST=1111,2222,3333</span></span>
<span class="line"><span>MIAOSPEED_NOSPEED           #禁止测速,不启用不填写.启用:MIAOSPEED_NOSPEED=1</span></span>
<span class="line"><span>MIAOSPEED_CONNTHREAD        #线程池设定，默认为64线程，如内存低于4G建议设置32或以下，例如：MIAOSPEED_CONNTHREAD=32</span></span>
<span class="line"><span>MIAOSPEED_MMDB              #是否启用MMDB</span></span></code></pre></div><h3 id="启动命令" tabindex="-1">启动命令 <a class="header-anchor" href="#启动命令" aria-label="Permalink to &quot;启动命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 9966:9966</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name=miaospeed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MIAOSPEED_MTLS=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MIAOSPEED_TOKEN=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">toke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  moshaoli688/miaospeed:beta</span></span></code></pre></div><h3 id="docker-compose部署" tabindex="-1">Docker Compose部署 <a class="header-anchor" href="#docker-compose部署" aria-label="Permalink to &quot;Docker Compose部署&quot;">​</a></h3><p>默认端口：9966</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  miaospeed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">moshaoli688/miaospeed:beta</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9966:9966&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TZ=Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MIAOSPEED_META=1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MIAOSPEED_MTLS=1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MIAOSPEED_WHITELIST=xxx,xxx,xxx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    mem_limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2048m</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    logging</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;json-file&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        max-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;200m&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        max-file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span></span></code></pre></div><h3 id="启动命令-1" tabindex="-1">启动命令 <a class="header-anchor" href="#启动命令-1" aria-label="Permalink to &quot;启动命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre></div><h2 id="更新mmdb" tabindex="-1">更新MMDB <a class="header-anchor" href="#更新mmdb" aria-label="Permalink to &quot;更新MMDB&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 容器名字</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./miaospeed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> misc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -maxmind-update-license</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 你的key</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 容器名字</span></span></code></pre></div>`,20)]))}const F=i(t,[["render",e]]);export{E as __pageData,F as default};
