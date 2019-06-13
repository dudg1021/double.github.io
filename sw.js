/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","d13dede5562a6257d4ce5c6fb5482b59"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","1ea3111d505d17ec837347f6d7d99e50"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","901956262f15da38848e805c8524f5b8"],["/2018/12/25/大数据学习-初识Hadoop.html","a14ccf8b9227b599084c41fa28667a39"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","2e8c18f6a63467deac4371b4df3ebed4"],["/2019/03/08/使用Forking工作流提交作业.html","58fd7dae119458af9acc71f626e5e303"],["/2019/03/12/Assignment-1-Warmups.html","f38d76c27e59ab37c24eb3d09e22a720"],["/2019/03/17/Assignment-2-Breakout.html","96369d64f3aa1f4958f2b7547722b1fe"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","698ed9380eec153d5e95b608a12abba2"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","e32ad631967c873bac60b95ec2f11829"],["/2019/04/12/Assignment-3-Hangman.html","6de92be181363217b7845f2965444dfc"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","841c1e9cd59e6ded693624b5307b36e9"],["/2019/04/20/学习道路上的暂歇思考.html","b1ba30ca9b93ab4410034c362d51778f"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","cf1b20a7d79bae19d16fecc5a133a7ae"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","5f841567e1b64858043fd2225bedd64e"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","41bad41181b669012334f19467e47161"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","beeca2397294714dbb695fd1c011e8db"],["/2019/05/10/Commit-message-guide.html","e24e87ef89446a7f44cce3e4bbc928c5"],["/2019/05/19/《图解HTTP》读书笔记.html","0fbd76fed26c7e4ec56e601b80f785e5"],["/about/index.html","4dd9f727a1d16d1c372392bd15e5e468"],["/archives/2018/11/index.html","bf50e6eecd8dfbc9ea4752dbcf1ce53e"],["/archives/2018/12/index.html","166d24d624d64266b1c47d61f6e32047"],["/archives/2018/index.html","3add96d28690daa20a2939ff2abaac9f"],["/archives/2019/01/index.html","06a9b2c7b5d70d0872b54294829ebdb9"],["/archives/2019/03/index.html","408cb5a700f1b3b3ac373eca91326ef4"],["/archives/2019/04/index.html","73481f6d2d0c91e65fda3abf624fcbd1"],["/archives/2019/05/index.html","84809af6a337d466b9b09300e9032814"],["/archives/2019/index.html","21677d0c24d2ca6a5867924cc50cbef4"],["/archives/2019/page/2/index.html","d3accf2c6dce67bc8c3738d523793f04"],["/archives/index.html","6aea2ae22f07a09bf0357a5861839007"],["/archives/page/2/index.html","c2a4abee872a7b5b5eb1092fb59d0da9"],["/categories/Java-beginner/index.html","055afc5318f2bf6c61e212303ba1dc6b"],["/categories/Princeton-Algorithms/index.html","7d6f9067e63c108899b40ab0726a9459"],["/categories/Programming-Languages/index.html","4a8ac8fd7bb2cdb111102070e91575de"],["/categories/Vue/index.html","b6ebde4c352fe9d36e55ed1e8561d830"],["/categories/index.html","abb8788ce8ec731ef135c1697f8f52ba"],["/categories/人生苦旅/index.html","4f61a3ef9f9ef6952736d55fdf80d0e8"],["/categories/折腾/index.html","b920b31513a5c9b1168d7830f431467a"],["/categories/知识总结/index.html","e5436b69bc0be2c68df48d00e872ae9f"],["/categories/翻译/index.html","f01bc10c192f4f7902946730f053778d"],["/categories/读书笔记/index.html","dd636e05570b4c95077a63141e8b1bb9"],["/css/main.css","b672252398afd0f4f446b11c9b0004e7"],["/gallery/index.html","473383806c1318705736407d4a7e4a07"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","eef92a52799eea22ce1c6dd324d9505b"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","265623f18a0546fca691bc72bcb6cb4c"],["/page/3/index.html","8cc179587d0db94acfc9356088cf40b9"],["/page/4/index.html","070814ea1d556a5e66592f3f113a7590"],["/reading/index.html","71d4887a6a584867e20615a3db9e9d24"],["/sw-register.js","ee068b994709bb2652ea8ca30deed65c"],["/tags/Algorithms/index.html","1e7dfa7bc2be19d7a45f66097a13dc65"],["/tags/Emacs/index.html","b7f9c5fc6f67a5339e477843ab2d26e3"],["/tags/HTTP/index.html","d67b06c1de745f02d81a9743026acf5b"],["/tags/Hadoop/index.html","6402831ef483addbef7fb2a3ea7ff6d6"],["/tags/Java/index.html","a0a8338d535bef6e053cc6f35a728bde"],["/tags/JavaScript/index.html","e9f5f6892a87fad7d2551e6041f9891d"],["/tags/JavaWeb/index.html","285a2f28597a6fda262941b09c2596a4"],["/tags/Java基础/index.html","98e484589f9b6313c9ed17dce97924d7"],["/tags/Linux/index.html","28cd3dcd2f4f15ad6aa54dfc7a63d81d"],["/tags/Programming-Assignment/index.html","14700a38f086605cc24e0f292789905c"],["/tags/SML/index.html","bb619d14354052e6c5c9050189715361"],["/tags/coursera/index.html","42873564a1531d6e56235688c1731279"],["/tags/git/index.html","aa51e996cc39a4b7c8292afa3e1612e1"],["/tags/index.html","d3c4782d0bde7e0f088b5f8a640d0294"],["/tags/vue/index.html","0d739c6e83ffbcf757eef2f5e25c8490"],["/tags/个人总结/index.html","431601d05c7080b147409989c6dacf4e"],["/tags/前端/index.html","dd4f62dc65857577f4984f1ac302234b"],["/tags/大学生活/index.html","4c9f12fc513d97611224792744fa823a"],["/tags/大数据/index.html","470788ab08d4af967c1a7e443b27290c"],["/tags/总结/index.html","4eb7d2567abd689a8de3a7bf73ce48f1"],["/tags/折腾/index.html","e5c8e351af8988caf381ba036ead9381"],["/tags/数据结构/index.html","686bd29956006a08ed7358e419a57fd7"],["/tags/算法/index.html","1f223e65022aef00e9cc630b1f4490db"],["/tags/终端/index.html","361c69c49623f44af93c94a247a7c2ee"],["/tags/美化/index.html","eeccdc641050c9e7b3219c7c3afacb97"],["/tags/通天塔/index.html","00847223d762b26831d2f6306ca1bfaf"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
