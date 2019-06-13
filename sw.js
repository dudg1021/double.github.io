/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","973ec9ef38c340e89db7398f65c56769"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","0fec0225b26c2032c156f4b7c53a2b0a"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","6a17a1aa4b6bfe5527c57b61ee68507f"],["/2018/12/25/大数据学习-初识Hadoop.html","a5206e07008475add18f983da72306f5"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","7d25c548eae3fa9b923162a1162f9844"],["/2019/03/08/使用Forking工作流提交作业.html","b1772fa5e487a520c0e696d9e9491745"],["/2019/03/12/Assignment-1-Warmups.html","184c3b1a5d78dce2765139d742a1cd9c"],["/2019/03/17/Assignment-2-Breakout.html","8580a04224f77044a07aa961250d050c"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","0f3d4411692a00974233b7227b894f6b"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","4b1bb622350e55e96966bfe913771c8b"],["/2019/04/12/Assignment-3-Hangman.html","c3ab8e69594f78229c8cb12d48c0e886"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","2a8c9f67251b27289e4b42ebd1854d78"],["/2019/04/20/学习道路上的暂歇思考.html","72a00aaf7ca6800989920ed6846b8be6"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","95062741f61c5771e72ea724cb1bd216"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","31eed29ba16f9bbecfd66c6d5e38e788"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","9e4349a3d6f4ee7f2ac41a7118e781f1"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","f3da67f553c79c2258386819b889ef59"],["/2019/05/10/Commit-message-guide.html","6a822340a19d730a357488a9c6adefb5"],["/2019/05/19/《图解HTTP》读书笔记.html","920af6aa4438ff897b9edbe09ad82b3a"],["/about/index.html","781e430104fd2ef96941459f381b2d94"],["/archives/2018/11/index.html","34b09006c4dd4ae4c1f9510de136f9ff"],["/archives/2018/12/index.html","47de24bf80fca9f9509da6ec24ebbbaf"],["/archives/2018/index.html","10224a50180e1adc35afc4dd462c29dc"],["/archives/2019/01/index.html","27db9599e6bd13b967ddb41530edb94b"],["/archives/2019/03/index.html","b90a760a794a4f3bec8210ecb74e8f74"],["/archives/2019/04/index.html","e3e2b5cf845d015c5b81b11a69e4a869"],["/archives/2019/05/index.html","d53f2a60342aacc883449ffd257ecc87"],["/archives/2019/index.html","f3bf625243f7b1d67f609db3c58d67df"],["/archives/2019/page/2/index.html","24cf24f06f3223b1e8180893743c4fee"],["/archives/index.html","028fe48f8c556feef0b760bc5d1fe4c2"],["/archives/page/2/index.html","593170ef6f1fd10858766a64b1ff4491"],["/categories/Java-beginner/index.html","67746a0852a767ca34c740b9fc45d16a"],["/categories/Princeton-Algorithms/index.html","cbacc8a54560668b98aeb1078b96cbb0"],["/categories/Programming-Languages/index.html","8e9bdc0845dba0954480a5d85a930eb4"],["/categories/Vue/index.html","6e55bff5255a7c9561a59a6843a82961"],["/categories/index.html","263db863b0ce30ce30f9f3505a218b60"],["/categories/人生苦旅/index.html","48c24d24905066c0bd60eda76105b631"],["/categories/折腾/index.html","ca2bab636c914cac504500e340a94400"],["/categories/知识总结/index.html","09eb84af1259132d1c366ff53339a3cc"],["/categories/翻译/index.html","37706c53bde360f786f91c2f06270230"],["/categories/读书笔记/index.html","de30cbcf8807977252171bd5ab0ae1aa"],["/css/main.css","3c3a8ffd4e8268af8b6139397bce2cee"],["/gallery/index.html","f392a9a46725a38b68eb56f2980df153"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","342e4e7ede8290a2a4dee70394506c72"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c6cbcddfd7286a0c5e043a770d16e5d2"],["/page/3/index.html","69fcafea94ca7cf7016331558d225b16"],["/page/4/index.html","76a132799780690440fc85c027f549d3"],["/reading/index.html","ed7fd835583e4526b57cc647cbdad720"],["/sw-register.js","7d6dd2664deb1634aeb3956c7e45bc49"],["/tags/Algorithms/index.html","f82d40e6596df9337b186a012479d68b"],["/tags/Emacs/index.html","0c1b48c706d0c6c2518e174a5fe4ed86"],["/tags/HTTP/index.html","ddd324f02e2713a8a84b3750fa358645"],["/tags/Hadoop/index.html","13f09f9a72f2aba564e288703c0636dd"],["/tags/Java/index.html","bf3e95422cac508ee7f2c44f9866e406"],["/tags/JavaScript/index.html","97f6f876691b60c3b236935b60fda4b1"],["/tags/JavaWeb/index.html","7a4207f84c1f62505e4c3962bf5a82db"],["/tags/Java基础/index.html","2f0b04ad8ae4d3c42ee1f26f4d4f35de"],["/tags/Linux/index.html","73f22ef8a71a4cf7530fe7fd87aa3ee3"],["/tags/Programming-Assignment/index.html","6be0bc0487d550e5197bd44253bb3040"],["/tags/SML/index.html","f22624f4eb63b43b476b50a15a0a4b4d"],["/tags/coursera/index.html","9574c1532b11773d2258a195a47dff8c"],["/tags/git/index.html","7b65c77e3f9600ef0b1d912ab5aaeb8d"],["/tags/index.html","6db16c55164b2681b7e640d2fd82c7a3"],["/tags/vue/index.html","8c1dc00848f72bdfb2bdf041c4d7230d"],["/tags/个人总结/index.html","a675b41e018d89f3e8b6470c63d60904"],["/tags/前端/index.html","8f5e233dca2b73bae4340de167795837"],["/tags/大学生活/index.html","ed3519aaba07ee99f429476fccdb3f13"],["/tags/大数据/index.html","0554b97f9824a06fc53b5b1a2b304202"],["/tags/总结/index.html","c52b7680e1a29d86e3838c095f1a82bc"],["/tags/折腾/index.html","700b56a2fa00a64a98d9c30e52eb0f50"],["/tags/数据结构/index.html","7df4aee7217b5710e1ebfc161f30530e"],["/tags/算法/index.html","91ac6405f29786a9e5f6fc0657c3efae"],["/tags/终端/index.html","0f73184831cdfc57698bd4fb73ba01c6"],["/tags/美化/index.html","7740cc12d190ee3c00beb94d5a88a3a2"],["/tags/通天塔/index.html","6c6019a25bbfe6347a18b8e520cc7b35"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
