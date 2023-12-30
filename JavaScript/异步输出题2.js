async function async1() {
  console.log("async1 start");
  await async2();
  console.log("asyncl end");
}

function async2() {
  console.log("async2 start");
  return new Promise((resolve, reject) => {
    resolve();
    console.log("async2 promise");
  }).then(function () {
    console.log("promise777");
  });
}
console.log("script start");

setTimeout(function () {
  console.log(" setTimeout");
}, 0);
async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
})
  .then(function () {
    console.log("promise{
  "log": {
    "version": "1.2",
    "creator": {
      "name": "WebInspector",
      "version": "537.36"
    },
    "pages": [],
    "entries": [
      {
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "XMLHttpRequest.send",
                "scriptId": "67",
                "url": "https://lf-cdn-tos.bytescm.com/obj/static/secsdk/secsdk-lastest.umd.js",
                "lineNumber": 4,
                "columnNumber": 48132
              },
              {
                "functionName": "_0x1218ef",
                "scriptId": "71",
                "url": "https://lf-c-flwb.bytetos.com/obj/rc-client-security/c-webmssdk/1.0.0.20/webmssdk.es5.js",
                "lineNumber": 1,
                "columnNumber": 33962
              },
              {
                "functionName": "_0x5f1fc4",
                "scriptId": "71",
                "url": "https://lf-c-flwb.bytetos.com/obj/rc-client-security/c-webmssdk/1.0.0.20/webmssdk.es5.js",
                "lineNumber": 1,
                "columnNumber": 37338
              },
              {
                "functionName": "_0x4a3cc8",
                "scriptId": "71",
                "url": "https://lf-c-flwb.bytetos.com/obj/rc-client-security/c-webmssdk/1.0.0.20/webmssdk.es5.js",
                "lineNumber": 1,
                "columnNumber": 10999
              },
              {
                "functionName": "",
                "scriptId": "58",
                "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/5990.5ed80409.js",
                "lineNumber": 1,
                "columnNumber": 23929
              },
              {
                "functionName": "",
                "scriptId": "135",
                "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/6761.ee068bda.js",
                "lineNumber": 1,
                "columnNumber": 297676
              },
              {
                "functionName": "",
                "scriptId": "150",
                "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                "lineNumber": 1,
                "columnNumber": 23248
              },
              {
                "functionName": "",
                "scriptId": "150",
                "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                "lineNumber": 1,
                "columnNumber": 25265
              }
            ],
            "parent": {
              "description": "Promise.then",
              "callFrames": [
                {
                  "functionName": "onRequest",
                  "scriptId": "150",
                  "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                  "lineNumber": 1,
                  "columnNumber": 25245
                },
                {
                  "functionName": "i",
                  "scriptId": "150",
                  "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                  "lineNumber": 1,
                  "columnNumber": 21767
                }
              ],
              "parent": {
                "description": "setTimeout",
                "callFrames": [
                  {
                    "functionName": "send",
                    "scriptId": "150",
                    "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                    "lineNumber": 1,
                    "columnNumber": 21809
                  },
                  {
                    "functionName": "",
                    "scriptId": "150",
                    "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                    "lineNumber": 1,
                    "columnNumber": 20839
                  },
                  {
                    "functionName": "",
                    "scriptId": "47",
                    "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/6979.613b2902.js",
                    "lineNumber": 0,
                    "columnNumber": 140421
                  }
                ]
              }
            }
          }
        },
        "_priority": "High",
        "_resourceType": "xhr",
        "cache": {},
        "connection": "18020",
        "request": {
          "method": "GET",
          "url": "https://v26-web.douyinvod.com/e8273b80fdd2516b702f6e591f01e729/641d6a81/video/tos/cn/tos-cn-ve-15c001-alinc2/oEQhUFjqICFANlCBTUbzNA6e0HAfQrYgELIyUJ/?a=6383&ch=0&cr=0&dr=0&cd=0%7C0%7C0%7C0&cv=1&br=2772&bt=2772&cs=0&ds=3&ft=bvTKJbQQqUuIf_oZmo0OW_EklpPiXWY~2MVJEg9lV5bPD-I&mime_type=video_mp4&qs=0&rc=aDVoNTw0NDtmMzdmOTc4PEBpM21sNTg6ZjZrajMzNGkzM0BhMjEvYDMyNjYxYS41YWJeYSNxM14ucjRnaDZgLS1kLWFzcw%3D%3D&l=20230324161634499D475E5F26ED015556&btag=8000&testst=1679646900216",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Accept-Encoding",
              "value": "identity"
            },
            {
              "name": "Accept-Language",
              "value": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
            },
            {
              "name": "Cache-Control",
              "value": "no-cache"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Host",
              "value": "v26-web.douyinvod.com"
            },
            {
              "name": "Origin",
              "value": "https://www.douyin.com"
            },
            {
              "name": "Pragma",
              "value": "no-cache"
            },
            {
              "name": "Range",
              "value": "bytes=1-204801"
            },
            {
              "name": "Referer",
              "value": "https://www.douyin.com/"
            },
            {
              "name": "Sec-Fetch-Dest",
              "value": "empty"
            },
            {
              "name": "Sec-Fetch-Mode",
              "value": "cors"
            },
            {
              "name": "Sec-Fetch-Site",
              "value": "cross-site"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?0"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Windows\""
            }
          ],
          "queryString": [
            {
              "name": "a",
              "value": "6383"
            },
            {
              "name": "ch",
              "value": "0"
            },
            {
              "name": "cr",
              "value": "0"
            },
            {
              "name": "dr",
              "value": "0"
            },
            {
              "name": "cd",
              "value": "0%7C0%7C0%7C0"
            },
            {
              "name": "cv",
              "value": "1"
            },
            {
              "name": "br",
              "value": "2772"
            },
            {
              "name": "bt",
              "value": "2772"
            },
            {
              "name": "cs",
              "value": "0"
            },
            {
              "name": "ds",
              "value": "3"
            },
            {
              "name": "ft",
              "value": "bvTKJbQQqUuIf_oZmo0OW_EklpPiXWY~2MVJEg9lV5bPD-I"
            },
            {
              "name": "mime_type",
              "value": "video_mp4"
            },
            {
              "name": "qs",
              "value": "0"
            },
            {
              "name": "rc",
              "value": "aDVoNTw0NDtmMzdmOTc4PEBpM21sNTg6ZjZrajMzNGkzM0BhMjEvYDMyNjYxYS41YWJeYSNxM14ucjRnaDZgLS1kLWFzcw%3D%3D"
            },
            {
              "name": "l",
              "value": "20230324161634499D475E5F26ED015556"
            },
            {
              "name": "btag",
              "value": "8000"
            },
            {
              "name": "testst",
              "value": "1679646900216"
            }
          ],
          "cookies": [],
          "headersSize": 1059,
          "bodySize": 0
        },
        "response": {
          "status": 206,
          "statusText": "Partial Content",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Access-Control-Allow-Credentials",
              "value": "true"
            },
            {
              "name": "Access-Control-Allow-Headers",
              "value": "range"
            },
            {
              "name": "Access-Control-Allow-Methods",
              "value": "GET,HEAD,POST,OPTIONS"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "name": "Access-Control-Expose-Headers",
              "value": "Content-Length,Content-Range,content-type,expires,last-modified,via,x-cache,x-response-cache,x-response-sinfo,x-response-cinfo"
            },
            {
              "name": "Access-Control-Max-Age",
              "value": "3600"
            },
            {
              "name": "Age",
              "value": "590634"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=2592000"
            },
            {
              "name": "CloudServiceDiscount",
              "value": "CDN"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "204801"
            },
            {
              "name": "Content-MD5",
              "value": "YhozfmnavIKHjQOrBeU1KA=="
            },
            {
              "name": "Content-Range",
              "value": "bytes 1-204801/4903539"
            },
            {
              "name": "Content-Type",
              "value": "video/mp4"
            },
            {
              "name": "Date",
              "value": "Fri, 24 Mar 2023 08:34:59 GMT"
            },
            {
              "name": "ETag",
              "value": "\"621a337e69dabc82878d03ab05e53528\""
            },
            {
              "name": "Last-Modified",
              "value": "Fri, 17 Mar 2023 12:11:03 GMT"
            },
            {
              "name": "Server",
              "value": "openresty"
            },
            {
              "name": "Timing-Allow-Origin",
              "value": "*"
            },
            {
              "name": "X-CCDN-CacheTTL",
              "value": "2592000"
            },
            {
              "name": "X-CCDN-Expires",
              "value": "2001396"
            },
            {
              "name": "nginx-hit",
              "value": "1"
            },
            {
              "name": "server-timing",
              "value": "cdn-cache;desc=HIT, edge;dur=5"
            },
            {
              "name": "via",
              "value": "CHN-SH-CT8-CACHE30[5],CHN-SH-CT8-CACHE26[0,TCP_HIT,1],CHN-JSyangzhou-GLOBAL1-CACHE3[13],CHN-JSyangzhou-GLOBAL1-CACHE103[0,TCP_HIT,11],CHN-SH-GLOBAL1-CACHE45[106],CHN-SH-GLOBAL1-CACHE102[84,TCP_MISS,103]"
            },
            {
              "name": "x-amz-expiration",
              "value": "expiry-date=\"Sat, 22 Apr 2023 00:00:00 GMT\", rule-id=\"rule-30Days\""
            },
            {
              "name": "x-hcs-proxy-type",
              "value": "1"
            },
            {
              "name": "x-response-cache",
              "value": "edge_hit"
            },
            {
              "name": "x-response-cinfo",
              "value": "116.236.209.220"
            },
            {
              "name": "x-response-sinfo",
              "value": "61.172.228.199"
            },
            {
              "name": "x-tt-trace-tag",
              "value": "id=26;cdn-cache=hit;type=static"
            }
          ],
          "cookies": [],
          "content": {
            "size": 204801,
            "mimeType": "video/mp4"
          },
          "redirectURL": "",
          "headersSize": 1348,
          "bodySize": 204801,
          "_transferSize": 206149,
          "_error": null
        },
        "serverIPAddress": "127.0.0.1",
        "startedDateTime": "2023-03-24T08:35:00.220Z",
        "time": 81.96400001179427,
        "timings": {
          "blocked": 2.4449999803826215,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.07799999999999996,
          "wait": 20.020999968156218,
          "receive": 59.42000006325543,
          "_blocked_queueing": 1.5109999803826213,
          "_blocked_proxy": 0.128
        }
      },
      {
        "_initiator": {
          "type": "script",
          "stack": {
            "callFrames": [
              {
                "functionName": "XMLHttpRequest.send",
                "scriptId": "67",
                "url": "https://lf-cdn-tos.bytescm.com/obj/static/secsdk/secsdk-lastest.umd.js",
                "lineNumber": 4,
                "columnNumber": 48132
              },
              {
                "functionName": "_0x1218ef",
                "scriptId": "71",
                "url": "https://lf-c-flwb.bytetos.com/obj/rc-client-security/c-webmssdk/1.0.0.20/webmssdk.es5.js",
                "lineNumber": 1,
                "columnNumber": 33962
              },
              {
                "functionName": "_0x5f1fc4",
                "scriptId": "71",
                "url": "https://lf-c-flwb.bytetos.com/obj/rc-client-security/c-webmssdk/1.0.0.20/webmssdk.es5.js",
                "lineNumber": 1,
                "columnNumber": 37338
              },
              {
                "functionName": "_0x4a3cc8",
                "scriptId": "71",
                "url": "https://lf-c-flwb.bytetos.com/obj/rc-client-security/c-webmssdk/1.0.0.20/webmssdk.es5.js",
                "lineNumber": 1,
                "columnNumber": 10999
              },
              {
                "functionName": "",
                "scriptId": "58",
                "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/5990.5ed80409.js",
                "lineNumber": 1,
                "columnNumber": 23929
              },
              {
                "functionName": "",
                "scriptId": "135",
                "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/6761.ee068bda.js",
                "lineNumber": 1,
                "columnNumber": 297676
              },
              {
                "functionName": "",
                "scriptId": "150",
                "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                "lineNumber": 1,
                "columnNumber": 23248
              },
              {
                "functionName": "",
                "scriptId": "150",
                "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                "lineNumber": 1,
                "columnNumber": 25265
              }
            ],
            "parent": {
              "description": "Promise.then",
              "callFrames": [
                {
                  "functionName": "onRequest",
                  "scriptId": "150",
                  "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                  "lineNumber": 1,
                  "columnNumber": 25245
                },
                {
                  "functionName": "i",
                  "scriptId": "150",
                  "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                  "lineNumber": 1,
                  "columnNumber": 21767
                }
              ],
              "parent": {
                "description": "setTimeout",
                "callFrames": [
                  {
                    "functionName": "send",
                    "scriptId": "150",
                    "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                    "lineNumber": 1,
                    "columnNumber": 21809
                  },
                  {
                    "functionName": "",
                    "scriptId": "150",
                    "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/8818.24140959.js",
                    "lineNumber": 1,
                    "columnNumber": 20839
                  },
                  {
                    "functionName": "J",
                    "scriptId": "68",
                    "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                    "lineNumber": 0,
                    "columnNumber": 28572
                  },
                  {
                    "functionName": "Z",
                    "scriptId": "68",
                    "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                    "lineNumber": 0,
                    "columnNumber": 29472
                  },
                  {
                    "functionName": "",
                    "scriptId": "68",
                    "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                    "lineNumber": 0,
                    "columnNumber": 35866
                  },
                  {
                    "functionName": "t.send",
                    "scriptId": "68",
                    "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                    "lineNumber": 0,
                    "columnNumber": 35486
                  },
                  {
                    "functionName": "t.sliceEvent",
                    "scriptId": "68",
                    "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                    "lineNumber": 0,
                    "columnNumber": 34295
                  },
                  {
                    "functionName": "t.report",
                    "scriptId": "68",
                    "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                    "lineNumber": 0,
                    "columnNumber": 34046
                  },
                  {
                    "functionName": "",
                    "scriptId": "68",
                    "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                    "lineNumber": 0,
                    "columnNumber": 32973
                  }
                ],
                "parent": {
                  "description": "setTimeout",
                  "callFrames": [
                    {
                      "functionName": "t.event",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 32949
                    },
                    {
                      "functionName": "",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 32195
                    },
                    {
                      "functionName": "",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 2728
                    },
                    {
                      "functionName": "e._emit",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 2704
                    },
                    {
                      "functionName": "e.emit",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 2600
                    },
                    {
                      "functionName": "t.emit",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 59469
                    },
                    {
                      "functionName": "t.event",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 58164
                    },
                    {
                      "functionName": "e.callCmd",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 147192
                    },
                    {
                      "functionName": "e.processCmd",
                      "scriptId": "68",
                      "url": "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/collect.js?v=20220817",
                      "lineNumber": 0,
                      "columnNumber": 146734
                    },
                    {
                      "functionName": "",
                      "scriptId": "56",
                      "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/index.f0c2436e.js",
                      "lineNumber": 1,
                      "columnNumber": 192779
                    }
                  ],
                  "parent": {
                    "description": "requestIdleCallback",
                    "callFrames": [
                      {
                        "functionName": "i",
                        "scriptId": "56",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/index.f0c2436e.js",
                        "lineNumber": 1,
                        "columnNumber": 166796
                      },
                      {
                        "functionName": "value",
                        "scriptId": "56",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/index.f0c2436e.js",
                        "lineNumber": 1,
                        "columnNumber": 192668
                      },
                      {
                        "functionName": "He",
                        "scriptId": "236",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/7710.d8e1f6a0.js",
                        "lineNumber": 0,
                        "columnNumber": 63440
                      },
                      {
                        "functionName": "a",
                        "scriptId": "65",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/4996.5efdf957.js",
                        "lineNumber": 0,
                        "columnNumber": 96733
                      },
                      {
                        "functionName": "Rr",
                        "scriptId": "236",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/7710.d8e1f6a0.js",
                        "lineNumber": 0,
                        "columnNumber": 63553
                      },
                      {
                        "functionName": "Xo",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 60600
                      },
                      {
                        "functionName": "Nu",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 68788
                      },
                      {
                        "functionName": "Fi",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 114685
                      },
                      {
                        "functionName": "yc",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 99938
                      },
                      {
                        "functionName": "vc",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 99866
                      },
                      {
                        "functionName": "mc",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 99729
                      },
                      {
                        "functionName": "uc",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 96721
                      },
                      {
                        "functionName": "",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 46548
                      },
                      {
                        "functionName": "n.unstable_runWithPriority",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 140222
                      },
                      {
                        "functionName": "Da",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 46325
                      },
                      {
                        "functionName": "Ua",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 46493
                      },
                      {
                        "functionName": "Ia",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 46428
                      },
                      {
                        "functionName": "tc",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 94072
                      },
                      {
                        "functionName": "wu",
                        "scriptId": "52",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/509.178f6b11.js",
                        "lineNumber": 1,
                        "columnNumber": 65917
                      },
                      {
                        "functionName": "",
                        "scriptId": "57",
                        "url": "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/async/2325.58eaaf0b.js",
                        "lineNumber": 1,
                        "columnNumber": 1680
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "_priority": "High",
        "_resourceType": "xhr",
        "cache": {},
        "connection": "18214",
        "request": {
          "method": "POST",
          "url": "https://mcs.zijieapi.com/list",
          "httpVersion": "http/2.0",
          "headers": [
            {
              "name": ":authority",
              "value": "mcs.zijieapi.com"
            },
            {
              "name": ":method",
              "value": "POST"
            },
            {
              "name": ":path",
              "value": "/list"
            },
            {
              "name": ":scheme",
              "value": "https"
            },
            {
              "name": "accept",
              "value": "*/*"
            },
            {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            },
            {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
            },
            {
              "name": "cache-control",
              "value": "no-cache"
            },
            {
              "name": "content-length",
              "value": "1940"
            },
            {
              "name": "content-type",
              "value": "application/json; charset=UTF-8"
            },
            {
              "name": "origin",
              "value": "https://www.douyin.com"
            },
            {
              "name": "pragma",
              "value": "no-cache"
            },
            {
              "name": "referer",
              "value": "https://www.douyin.com/"
            },
            {
              "name": "sec-ch-ua",
              "value": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\""
            },
            {
              "name": "sec-ch-ua-mobile",
              "value": "?0"
            },
            {
              "name": "sec-ch-ua-platform",
              "value": "\"Windows\""
            },
            {
              "name": "sec-fetch-dest",
              "value": "empty"
            },
            {
              "name": "sec-fetch-mode",
              "value": "cors"
            },
            {
              "name": "sec-fetch-site",
              "value": "cross-site"
            },
            {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 1940,
          "postData": {
            "mimeType": "application/json; charset=UTF-8",
            "text": "[{\"events\":[{\"event\":\"comment_show\",\"params\":\"{\\\"enter_from\\\":\\\"recommend\\\",\\\"group_id\\\":\\\"7211136316535311656\\\",\\\"comment_time\\\":\\\"6天前\\\",\\\"x_timestamp\\\":1679646900199,\\\"event_index\\\":1679646080541}\",\"local_time_ms\":1679646900381,\"is_bav\":0,\"ab_sdk_version\":\"90093082,90093286,5484731,90093785,90093578,90092708,90082422,5517957,90081960,90093266,90093566,90093492,5459876,90082546,5646091,5573704,90094069,90093983,90093698,5659123,90094332,90094276,90094277,5550816,5731297,90094342,5727754,5713338,5695869,5493668,5626922,5765550,5777446,90094491,5773429,90094535,5796911,5619447,90094575,5578152,5726571,5663108,90094607,90094651\",\"session_id\":\"1c3b9706-46d2-43a4-a637-fd409821a968\"}],\"user\":{\"user_unique_id\":\"7197409455319090688\",\"user_type\":12,\"user_id\":\"52486846336\",\"user_is_auth\":true,\"user_is_login\":true,\"device_id\":\"7197409455319090688\",\"web_id\":\"7109395635716539907\"},\"header\":{\"app_id\":6383,\"app_channel\":\"\",\"os_name\":\"windows\",\"os_version\":\"10\",\"device_model\":\"\",\"language\":\"zh-CN\",\"platform\":\"web\",\"sdk_version\":\"5.0.46\",\"sdk_lib\":\"js\",\"timezone\":8,\"tz_offset\":-28800,\"resolution\":\"2048x1152\",\"browser\":\"Chrome\",\"browser_version\":\"111.0.0.0\",\"referrer\":\"https://www.google.com/\",\"referrer_host\":\"www.google.com\",\"width\":2048,\"height\":1152,\"screen_width\":2048,\"screen_height\":1152,\"tracer_data\":\"{\\\"$utm_from_url\\\":1}\",\"custom\":\"{\\\"pathname\\\":\\\"/\\\",\\\"is_client\\\":false,\\\"first_install_time\\\":1675777497,\\\"douyin_pc_seo_page_id\\\":\\\"993824081436352530\\\",\\\"in_piture_enable\\\":true,\\\"arch\\\":\\\"\\\",\\\"tce_cluster\\\":\\\"default\\\",\\\"browser_is_360\\\":\\\"0\\\",\\\"scm_version\\\":\\\"1.0.2.7489\\\",\\\"web_cpu_core\\\":16,\\\"web_memory_size\\\":8,\\\"session_init_time\\\":1679645088165,\\\"ms_token\\\":\\\"mrP90MUYIYialgGqAHx-0ZIxo5X3BqeENp-0eLbLV5avoDAAzH21_6ACRqV5jf3TwsmpMnOS5m0WjpkEd8L8Sj4SwhtluuDgD075vqG8WUOLwff7O5zR1pc=\\\",\\\"h265_hard_parse_supported\\\":true,\\\"web_wid\\\":\\\"\\\",\\\"GUID\\\":\\\"\\\",\\\"manufacturer\\\":\\\"\\\"}\"},\"local_time\":1679646900,\"verbose\":1}]"
          }
        },
        "response": {
          "status": 200,
          "statusText": "",
          "httpVersion": "http/2.0",
          "headers": [
            {
              "name": "access-control-allow-credentials",
              "value": "true"
            },
            {
              "name": "access-control-allow-methods",
              "value": "GET, OPTIONS, HEAD, PUT, POST"
            },
            {
              "name": "access-control-allow-origin",
              "value": "https://www.douyin.com"
            },
            {
              "name": "access-control-max-age",
              "value": "1800"
            },
            {
              "name": "cache-control",
              "value": "no-store, no-cache, must-revalidate"
            },
            {
              "name": "content-length",
              "value": "21"
            },
            {
              "name": "content-type",
              "value": "application/json; charset=utf-8"
            },
            {
              "name": "date",
              "value": "Fri, 24 Mar 2023 08:34:59 GMT"
            },
            {
              "name": "expires",
              "value": "0"
            },
            {
              "name": "pragma",
              "value": "no-cache"
            },
            {
              "name": "server",
              "value": "nginx"
            },
            {
              "name": "server-timing",
              "value": "cdn-cache;desc=MISS, edge;dur=2, origin;dur=24"
            },
            {
              "name": "server-timing",
              "value": "inner; dur=7"
            },
            {
              "name": "via",
              "value": "CHN-SDjinan-CUCC16-CACHE57[26],CHN-SDjinan-CUCC16-CACHE57[ovl,24]"
            },
            {
              "name": "x-tt-logid",
              "value": "20230324163459641833FD41A480466A0F"
            },
            {
              "name": "x-tt-trace-host",
              "value": "015a47335f0febf793f8b8236ec960b6889af844c669f8b7430ba773b9c9011119b1b6f909dcb9726c14fc74dbf74502759fb408423d5e059aaa9469bec0bca0fb0e32849e266df2e133a1a1e15cc96940be24ddc96a4cf008c74a814959a848642cbbec295fc30e7c6e832c75ecd340ec53801e26a01b102b350800040ea285bd"
            },
            {
              "name": "x-tt-trace-tag",
              "value": "id=26;cdn-cache=miss;type=dyn"
            }
          ],
          "cookies": [],
          "content": {
            "size": 21,
            "mimeType": "application/json"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": -1,
          "_transferSize": 699,
          "_error": null
        },
        "serverIPAddress": "127.0.0.1",
        "startedDateTime": "2023-03-24T08:35:00.413Z",
        "time": 204.4529999839142,
        "timings": {
          "blocked": 148.81299998363107,
          "dns": -1,
          "ssl": -1,
          "connect": -1,
          "send": 0.11399999999999999,
          "wait": 54.91600001205504,
          "receive": 0.6099999882280827,
          "_blocked_queueing": 148.09899998363107,
          "_blocked_proxy": 0.09900000000000009
        }
      },
      {
        "_initiator": {
          "type": "preflight",
          "url": "https://mcs.zijieapi.com/list",
          "requestId": "33220.7770"
        },
        "_priority": "High",
        "_resourceType": "preflight",
        "cache": {},
        "connection": "18214",
        "request": {
          "method": "OPTIONS",
          "url": "https://mcs.zijieapi.com/list",
          "httpVersion": "http/2.0",
          "headers": [
            {
              "name": ":authority",
              "value": "mcs.zijieapi.com"
            },
            {
              "name": ":method",
              "value": "OPTIONS"
            },
            {
              "name": ":path",
              "value": "/list"
            },
            {
              "name": ":scheme",
              "value": "https"
            },
            {
              "name": "accept",
              "value": "*/*"
            },
            {
              "name": "accept-encoding",
              "value": "gzip, deflate, br"
            },
            {
              "name": "accept-language",
              "value": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
            },
            {
              "name": "access-control-request-headers",
              "value": "content-type"
            },
            {
              "name": "access-control-request-method",
              "value": "POST"
            },
            {
              "name": "cache-control",
              "value": "no-cache"
            },
            {
              "name": "origin",
              "value": "https://www.douyin.com"
            },
            {
              "name": "pragma",
              "value": "no-cache"
            },
            {
              "name": "referer",
              "value": "https://www.douyin.com/"
            },
            {
              "name": "sec-fetch-dest",
              "value": "empty"
            },
            {
              "name": "sec-fetch-mode",
              "value": "cors"
            },
            {
              "name": "sec-fetch-site",
              "value": "cross-site"
            },
            {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "",
          "httpVersion": "http/2.0",
          "headers": [
            {
              "name": "access-control-allow-credentials",
              "value": "true"
            },
            {
              "name": "access-control-allow-headers",
              "value": "content-type"
            },
            {
              "name": "access-control-allow-methods",
              "value": "GET, OPTIONS, HEAD, PUT, POST"
            },
            {
              "name": "access-control-allow-origin",
              "value": "https://www.douyin.com"
            },
            {
              "name": "access-control-max-age",
              "value": "1800"
            },
            {
              "name": "content-length",
              "value": "0"
            },
            {
              "name": "date",
              "value": "Fri, 24 Mar 2023 08:34:59 GMT"
            },
            {
              "name": "server",
              "value": "nginx"
            },
            {
              "name": "server-timing",
              "value": "cdn-cache;desc=MISS, edge;dur=3, origin;dur=18"
            },
            {
              "name": "server-timing",
              "value": "inner; dur=2"
            },
            {
              "name": "via",
              "value": "CHN-SDjinan-CUCC16-CACHE57[21],CHN-SDjinan-CUCC16-CACHE57[ovl,18]"
            },
            {
              "name": "x-tt-logid",
              "value": "20230324163459C9D5487735E18C9D8CAB"
            },
            {
              "name": "x-tt-trace-host",
              "value": "015a47335f0febf793f8b8236ec960b6889af844c669f8b7430ba773b9c9011119b1b6f909dcb9726c14fc74dbf74502759fb408423d5e059aaa9469bec0bca0fb3d2663c7dd4c76d9571c28adebaff7b0f0101baf025daa718267ff55a3133ff4d5c231000908ab14c53bec89f1ca5875167247c71f5fc7868477d5eeb9ca5c9c"
            },
            {
              "name": "x-tt-trace-tag",
              "value": "id=26;cdn-cache=miss;type=dyn"
            }
          ],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "x-unknown"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": -1,
          "_transferSize": 0,
          "_error": null
        },
        "serverIPAddress": "127.0.0.1",
        "startedDateTime": "2023-03-24T08:35:00.415Z",
        "time": 146.1159999491647,
        "timings": {
          "blocked": 0.20300000000000007,
          "dns": -1,
          "ssl": 31.241,
          "connect": 100.27799999999999,
          "send": 0.14400000000000546,
          "wait": 44.79299998935312,
          "receive": 0.6979999598115683,
          "_blocked_queueing": -1,
          "_blocked_proxy": 0.11099999999999999
        }
      }
    ]
  }
}2");
  })
  .then(function () {
    console.log("promise3");
  });
console.log("script end");
/*
  
  script start
  async1 start
  async2 start
  async2 promise
  promise1
  script end
  
  
  **/

// script start
// async1 start
// async2 start
// async2 promise
// promise1
// script end
// asyncl end
// promise2
// promise3
//  setTimeout
