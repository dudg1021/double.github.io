/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","a02b9499fad1d1bf34cb304189269a0b"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","287f1f1b05adcdf2a15ca166dec7af09"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","3f66e74515c11501d8467673e271cb89"],["/2018/12/25/大数据学习-初识Hadoop.html","f08cb880115c48b167c6f8af674116cc"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","e20be918a590601c902afa7de9c3286b"],["/2019/03/08/使用Forking工作流提交作业.html","c51cbcf0d48b769d33c693efc8b0edb5"],["/2019/03/12/Assignment-1-Warmups.html","9b9b230b700d834aedcbf9b23f94c112"],["/2019/03/17/Assignment-2-Breakout.html","af20bb330ca9d814fc21b7bcc4034379"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","5220db03b85bac3a2a107e6e0ff3324b"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","43dd715b484c13c1500f752e83fccf9e"],["/2019/04/12/Assignment-3-Hangman.html","b487544da8f07ddff7a6038636032870"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","d5aa38957dc8503a27f236ac642dcb4d"],["/2019/04/20/学习道路上的暂歇思考.html","2f738fda10baf2ae2b7561ce4e69be37"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","46bbfda25c4f90602e1d1385e3163a50"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","ce48f5d8772f8311490d85e3e38b6ecb"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","0dc5f3ad1d1e3882fb1acb0b7fea2223"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","d639cd4889b5334bc1bc2dfc733eed42"],["/2019/05/10/Commit-message-guide.html","ec6ebb1111786ea73f8eb016465eb067"],["/2019/05/19/《图解HTTP》读书笔记.html","aec464b624006cc68a793a9ffe50b700"],["/about/index.html","e1409e02b0d9327f01fe59c077443348"],["/archives/2018/11/index.html","162e848818ff4117b4c20d06a5fed044"],["/archives/2018/12/index.html","a01c9a080f2339db0a91f8d29792c05c"],["/archives/2018/index.html","b68c2d6ddfd4fe6e0adf54e141a20c8f"],["/archives/2019/01/index.html","e25e7db430bfc21ba4b7fcf8fdf2c44a"],["/archives/2019/03/index.html","6d19ebb381a8f7c5ffbc494fc01ee7dc"],["/archives/2019/04/index.html","08473cf73b03051677a20d024b1ea304"],["/archives/2019/05/index.html","cacdcfbe066fd6fb259621f475bf2b7a"],["/archives/2019/index.html","4ba25b6d985a0e9e6e8b606d4b8efe60"],["/archives/2019/page/2/index.html","97cd4707e2507e9b491a03cbe870390d"],["/archives/index.html","923811da2ca9db3019aa85b82b67a8ea"],["/archives/page/2/index.html","59b1c154e47523594dcad737d9a91617"],["/categories/Java-beginner/index.html","2d22c5f504ca9ec46f5bbac9510a18e5"],["/categories/Princeton-Algorithms/index.html","42586a816764e5af5254cb6d7a0faa89"],["/categories/Programming-Languages/index.html","f78a36d3d1a65e8c6ed5354836409ad8"],["/categories/Vue/index.html","7eff145e68746eb88de7159ab5b9ebaa"],["/categories/index.html","ca331fc07a7bd6c1843aaad75ec9ab04"],["/categories/人生苦旅/index.html","099afd9d28a6da8a3db10d5d3893f619"],["/categories/折腾/index.html","e860a91e6beb977f044ee75514060efa"],["/categories/知识总结/index.html","9416f349b4d4d5460ae5c1e1137e639b"],["/categories/翻译/index.html","031cfb9ee4e6ee316261cca3031f393c"],["/categories/读书笔记/index.html","4187d317363a06a42c6c9bfd41ee8c99"],["/css/main.css","94faef3a2f60371bd41dbb0ed5636b57"],["/gallery/index.html","8e6fd0feae0bbfe4a03b3ee4cbc88c3e"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","3c670384bbd8d5aa218f16dd61e480ce"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","58ac4fa21eb2bd6337a894d417018522"],["/page/3/index.html","a9434992925e45fe10097dfd7ee03709"],["/page/4/index.html","70cc51c2a0363e75c75b307f53ab3958"],["/reading/index.html","b2740b9dac139b28090e13e11d607f11"],["/sw-register.js","2e8ce4d15bc129431ac501d553e82123"],["/tags/Emacs/index.html","db24291f0f20da15f356aafb83202ead"],["/tags/HTTP/index.html","e711cc6c9d19ea9e0ddb6ab786b8b133"],["/tags/Hadoop/index.html","e86d61a6c334e88081f9d0dd26785785"],["/tags/Java/index.html","04f67fb2bd2148b098d28a843d25bcf3"],["/tags/JavaScript/index.html","8928e603507f514a983503df161a9daa"],["/tags/JavaWeb/index.html","52294cd95d723bb56273877ee9ca4f5b"],["/tags/Java基础/index.html","a0d0418d5b123378314b5be70c22d3eb"],["/tags/Linux/index.html","e0e62533a662c822b48165303601ceec"],["/tags/Programming-Assignment/index.html","a8e470c00dbfd80a467c93e9ceccd9ad"],["/tags/SML/index.html","6e3ed5ee21a7ff0271b714a5a36f411c"],["/tags/algorithms/index.html","9cb621a0a100ee2a6988ba810a61753b"],["/tags/coursera/index.html","5193338b7e2237e3a9494f3eee8ebc97"],["/tags/git/index.html","76d5f14b22796a76473295817dbcb781"],["/tags/index.html","28259e0bb0b320316221471ec3bbd8c2"],["/tags/vue/index.html","ddff932ba2af1a82fd5cd92002104c13"],["/tags/个人总结/index.html","b980d103198934f4463d42b42dd62021"],["/tags/前端/index.html","80a46c4ee3267fa3aa4ecaad33e9509d"],["/tags/大学生活/index.html","183ce84a550cdfb0ba3812fa98754bfd"],["/tags/大数据/index.html","e5386d9ec1fae06f1f083f2d0f163b37"],["/tags/总结/index.html","8b82a4faab6576d3a331bb51b4e71e7d"],["/tags/折腾/index.html","11967654113f07cb9300389f5f04db24"],["/tags/数据结构/index.html","266d914bb5110e16a6c598fabca2a51c"],["/tags/算法/index.html","5486df700a73f8b1786bbcb68b8bdd11"],["/tags/终端/index.html","aba95c9c7206c864da2b3ddcb2271c58"],["/tags/美化/index.html","811dc7a0e32ca721ee55d552c46a2527"],["/tags/通天塔/index.html","13c01fcb2580131f80f3def1c4c53b82"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
