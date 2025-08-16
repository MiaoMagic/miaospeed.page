import{_ as a,c as i,ae as n,o as l}from"./chunks/framework.ilBJtLV6.js";const A=JSON.parse('{"title":"ENV 配置说明","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"install/envConf.md","filePath":"install/envConf.md","lastUpdated":1755339300000}'),p={name:"install/envConf.md"};function e(h,s,t,k,r,d){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="env-配置说明" tabindex="-1">ENV 配置说明 <a class="header-anchor" href="#env-配置说明" aria-label="Permalink to &quot;ENV 配置说明&quot;">​</a></h1><p><strong>注意:该方式仅支持 MiaoSpeed v5 版本</strong></p><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># MiaoSpeed Pro 服务端配置的 .env 文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务器绑定地址（支持 TCP 地址如 0.0.0.0:8080 或 Unix 套接字如 /tmp/unix_socket）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">BIND</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">0.0.0.0:8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用于签署请求的 Token（必填，用于身份验证）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自定义 WebSocket 路径（例如 /connect 或 /ws）（可选，默认值：/connect）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">URL_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/connect</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许的 IP 范围，格式如 192.168.1.0/24,10.12.13.2（可选）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># （留空表示允许所有 IP [0.0.0.0/0 ::/0]）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ALLOW_IPS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 阻止的 IP 范围，格式如 192.168.1.0/24,10.12.13.2（可选）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># （留空表示禁用 IP 黑名单功能）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">BLOCK_IPS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 并发线程数，用于连接任务（默认值：64）（可选）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 对于低性能机器，建议线程数不要超过 16。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">CONNTHREAD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 速度限制（以字节每秒为单位，0 表示无限制）（可选）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">SPEEDLIMIT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 每次测速任务后的暂停时间（以秒为单位，默认值：0）（可选）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">PAUSESECOND</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用 MiaoKo 签名的 TLS 证书进行验证（可选）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：启用 MTLS（双向 TLS）后，将禁用自定义 CERT 和 KEY 配置，因为二者互斥。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">MTLS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁止所有测速请求（设置为 true 可禁用测速功能）（可选）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">NOSPEED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用任务权重机制（设置为 true 为测速任务应用权重）（可选）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">TASKWEIGHT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># MaxMind 数据库路径（多个数据库用逗号分隔）（可选）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：MMDB=test.mmdb,testcity.mmdb</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此设置将所有 GeoIP 查询重新路由到本地 MMDB 文件。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">MMDB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path/to/your.mmdb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自定义 TLS 证书和密钥文件路径（如果使用 MTLS，请留空）（可选）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：设置 CERT 和 KEY 将禁用 MTLS（双向 TLS），因为二者互斥。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># CERT=path/to/cert.pem</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># KEY=path/to/cert.key</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许的机器人 ID 白名单，多个 ID 用逗号分隔（例如 1111,2222,3333）（可选）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">WHITELIST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span></code></pre></div>`,3)]))}const D=a(p,[["render",e]]);export{A as __pageData,D as default};
