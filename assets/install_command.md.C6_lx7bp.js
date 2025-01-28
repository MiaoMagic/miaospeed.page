import{_ as s,c as n,ae as e,o as p}from"./chunks/framework.ilBJtLV6.js";const m=JSON.parse('{"title":"MiaoSpeed 命令行参数说明","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"install/command.md","filePath":"install/command.md","lastUpdated":1738033411000}'),i={name:"install/command.md"};function l(t,a,o,c,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="miaospeed-命令行参数说明" tabindex="-1">MiaoSpeed 命令行参数说明 <a class="header-anchor" href="#miaospeed-命令行参数说明" aria-label="Permalink to &quot;MiaoSpeed 命令行参数说明&quot;">​</a></h1><h2 id="miaospeed-v4" tabindex="-1">MiaoSpeed v4 <a class="header-anchor" href="#miaospeed-v4" aria-label="Permalink to &quot;MiaoSpeed v4&quot;">​</a></h2><h3 id="全局命令" tabindex="-1">全局命令 <a class="header-anchor" href="#全局命令" aria-label="Permalink to &quot;全局命令&quot;">​</a></h3><h4 id="miaospeed" tabindex="-1"><code>./miaospeed</code> <a class="header-anchor" href="#miaospeed" aria-label="Permalink to &quot;\`./miaospeed\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  -version</span></span>
<span class="line"><span>        显示当前版本并退出程序</span></span></code></pre></div><hr><h3 id="服务模式" tabindex="-1">服务模式 <a class="header-anchor" href="#服务模式" aria-label="Permalink to &quot;服务模式&quot;">​</a></h3><h4 id="miaospeed-server" tabindex="-1"><code>./miaospeed server</code> <a class="header-anchor" href="#miaospeed-server" aria-label="Permalink to &quot;\`./miaospeed server\`&quot;">​</a></h4><p>启动服务模式，支持以下参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  -mtls</span></span>
<span class="line"><span>        启用 MiaoKo 签名的 TLS 证书验证</span></span>
<span class="line"><span>  -token string</span></span>
<span class="line"><span>        指定用于签署请求的令牌</span></span>
<span class="line"><span>  -connthread uint</span></span>
<span class="line"><span>        处理连接任务时的并发线程数 (默认 64)</span></span>
<span class="line"><span>  -mmdb string</span></span>
<span class="line"><span>        将所有 GeoIP 查询重定向到本地 MMDB 文件，例如: test.mmdb,testcity.mmdb</span></span>
<span class="line"><span>  -nospeed</span></span>
<span class="line"><span>        禁用所有测速请求</span></span>
<span class="line"><span>  -pausesecond uint</span></span>
<span class="line"><span>        每次测速任务后的暂停时间（秒）</span></span>
<span class="line"><span>  -speedlimit uint</span></span>
<span class="line"><span>        速度限制（以字节每秒为单位），0 表示无限制</span></span>
<span class="line"><span>  -verbose</span></span>
<span class="line"><span>        是否输出系统日志</span></span>
<span class="line"><span>  -whitelist string</span></span>
<span class="line"><span>        机器人 ID 白名单，格式如 1111,2222,3333</span></span></code></pre></div><hr><h3 id="脚本模式" tabindex="-1">脚本模式 <a class="header-anchor" href="#脚本模式" aria-label="Permalink to &quot;脚本模式&quot;">​</a></h3><h4 id="miaospeed-script" tabindex="-1"><code>./miaospeed script</code> <a class="header-anchor" href="#miaospeed-script" aria-label="Permalink to &quot;\`./miaospeed script\`&quot;">​</a></h4><p>运行脚本模式，支持以下参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  -file string</span></span>
<span class="line"><span>        指定要执行的脚本文件路径</span></span>
<span class="line"><span>  -verbose</span></span>
<span class="line"><span>        是否输出系统日志</span></span></code></pre></div><hr><h3 id="辅助工具模式" tabindex="-1">辅助工具模式 <a class="header-anchor" href="#辅助工具模式" aria-label="Permalink to &quot;辅助工具模式&quot;">​</a></h3><h4 id="miaospeed-misc" tabindex="-1"><code>./miaospeed misc</code> <a class="header-anchor" href="#miaospeed-misc" aria-label="Permalink to &quot;\`./miaospeed misc\`&quot;">​</a></h4><p>辅助工具模式，支持以下参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  -maxmind-update-license string</span></span>
<span class="line"><span>        指定用于更新 MaxMind 数据库的许可证密钥</span></span>
<span class="line"><span>  -verbose</span></span>
<span class="line"><span>        是否输出系统日志</span></span></code></pre></div><h2 id="miaospeed-pro-命令行参数说明" tabindex="-1">MiaoSpeed Pro 命令行参数说明 <a class="header-anchor" href="#miaospeed-pro-命令行参数说明" aria-label="Permalink to &quot;MiaoSpeed Pro 命令行参数说明&quot;">​</a></h2><h3 id="全局命令-1" tabindex="-1">全局命令 <a class="header-anchor" href="#全局命令-1" aria-label="Permalink to &quot;全局命令&quot;">​</a></h3><h4 id="miaospeed-pro" tabindex="-1"><code>./miaospeed.pro</code> <a class="header-anchor" href="#miaospeed-pro" aria-label="Permalink to &quot;\`./miaospeed.pro\`&quot;">​</a></h4><p>显示全局帮助信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  -version</span></span>
<span class="line"><span>        显示当前版本并退出程序</span></span></code></pre></div><hr><h3 id="服务模式-1" tabindex="-1">服务模式 <a class="header-anchor" href="#服务模式-1" aria-label="Permalink to &quot;服务模式&quot;">​</a></h3><h4 id="miaospeed-pro-server" tabindex="-1"><code>./miaospeed.pro server</code> <a class="header-anchor" href="#miaospeed-pro-server" aria-label="Permalink to &quot;\`./miaospeed.pro server\`&quot;">​</a></h4><p>启动服务模式，支持以下参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  -mtls</span></span>
<span class="line"><span>        启用 MiaoKo 签名的 TLS 证书验证</span></span>
<span class="line"><span>  -path string</span></span>
<span class="line"><span>        自定义 WebSocket 路径，默认路径: /connect (默认 &quot;/connect&quot;)</span></span>
<span class="line"><span>  -token string</span></span>
<span class="line"><span>        指定用于签署请求的令牌</span></span>
<span class="line"><span>  -connthread uint</span></span>
<span class="line"><span>        处理连接任务时的并发线程数 (默认 64)</span></span>
<span class="line"><span>  -nospeed</span></span>
<span class="line"><span>        禁用所有测速请求</span></span>
<span class="line"><span>  -pausesecond uint</span></span>
<span class="line"><span>        每次测速任务后的暂停时间（秒）</span></span>
<span class="line"><span>  -speedlimit uint</span></span>
<span class="line"><span>        速度限制（以字节每秒为单位），0 表示无限制</span></span>
<span class="line"><span>  -cert string</span></span>
<span class="line"><span>        设置自定义证书路径，例如: path/to/cert.pem</span></span>
<span class="line"><span>  -key string</span></span>
<span class="line"><span>        设置自定义证书密钥路径，例如: path/to/cert.key</span></span>
<span class="line"><span>  -allowip string</span></span>
<span class="line"><span>        允许的 IP 范围，格式如 192.168.1.0/24,10.12.13.2 (默认 &quot;0.0.0.0/0,::/0&quot;)</span></span>
<span class="line"><span>  -bind string</span></span>
<span class="line"><span>        绑定的地址，可以是 0.0.0.0:8080 或 /tmp/unix_socket (默认 &quot;0.0.0.0:8080&quot;)</span></span>
<span class="line"><span>  -blockip string</span></span>
<span class="line"><span>        阻止的 IP 范围，格式如 192.168.1.0/24,10.12.13.2</span></span>
<span class="line"><span>  -mmdb string</span></span>
<span class="line"><span>        将所有 GeoIP 查询重定向到本地 MMDB 文件，例如: test.mmdb,testcity.mmdb</span></span>
<span class="line"><span>  -tw</span></span>
<span class="line"><span>        启用任务权重机制</span></span>
<span class="line"><span>  -verbose</span></span>
<span class="line"><span>        是否输出系统日志</span></span>
<span class="line"><span>  -whitelist string</span></span>
<span class="line"><span>        机器人 ID 白名单，格式如 1111,2222,3333</span></span></code></pre></div><hr><h3 id="脚本模式-1" tabindex="-1">脚本模式 <a class="header-anchor" href="#脚本模式-1" aria-label="Permalink to &quot;脚本模式&quot;">​</a></h3><h4 id="miaospeed-pro-script" tabindex="-1"><code>./miaospeed.pro script</code> <a class="header-anchor" href="#miaospeed-pro-script" aria-label="Permalink to &quot;\`./miaospeed.pro script\`&quot;">​</a></h4><p>运行脚本模式，支持以下参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  -file string</span></span>
<span class="line"><span>        指定要执行的脚本文件路径</span></span>
<span class="line"><span>  -verbose</span></span>
<span class="line"><span>        是否输出系统日志</span></span></code></pre></div><hr><h3 id="辅助工具模式-1" tabindex="-1">辅助工具模式 <a class="header-anchor" href="#辅助工具模式-1" aria-label="Permalink to &quot;辅助工具模式&quot;">​</a></h3><h4 id="miaospeed-pro-misc" tabindex="-1"><code>./miaospeed.pro misc</code> <a class="header-anchor" href="#miaospeed-pro-misc" aria-label="Permalink to &quot;\`./miaospeed.pro misc\`&quot;">​</a></h4><p>辅助工具模式，支持以下参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  -maxmind-update-license string</span></span>
<span class="line"><span>        指定用于更新 MaxMind 数据库的许可证密钥</span></span>
<span class="line"><span>  -verbose</span></span>
<span class="line"><span>        是否输出系统日志</span></span></code></pre></div>`,40)]))}const u=s(i,[["render",l]]);export{m as __pageData,u as default};
