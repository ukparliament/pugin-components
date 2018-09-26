/*
 * SDK script - appInsights
 */
var appInsights = window.appInsights || function (a) {
  function b(a) {
    c[a] = function () {
      var b = arguments;
      c.queue.push(function () {
        c[a].apply(c, b)
      })
    }
  }
  var c = {
      config: a
    },
    d = document,
    e = window;
  setTimeout(function () {
    var b = d.createElement("script");
    b.src = a.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js", d.getElementsByTagName("script")[0].parentNode.appendChild(b)
  });
  try {
    c.cookie = d.cookie
  } catch (a) {}
  c.queue = [];
  for (var f = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; f.length;) b("track" + f.pop());
  if (b("setAuthenticatedUserContext"), b("clearAuthenticatedUserContext"), b("startTrackEvent"), b("stopTrackEvent"), b("startTrackPage"), b("stopTrackPage"), b("flush"), !a.disableExceptionTracking) {
    f = "onerror", b("_" + f);
    var g = e[f];
    e[f] = function (a, b, d, e, h) {
      var i = g && g(a, b, d, e, h);
      return !0 !== i && c["_" + f](a, b, d, e, h), i
    }
  }
  return c
}({
  instrumentationKey: "c0960a0f-30ad-4a9a-b508-14c6a4f61179",
  cookieDomain: ".parliament.uk"
});


/*
 * If the applicationinsights-request-id meta tag is present,
 * we add a function to the Appinsights queue which runs before our pageView
 * and allows us to track events through the whole stack.
 */
window.appInsights = appInsights, appInsights.queue && 0 === appInsights.queue.length;
appInsights.queue.push(function () {
  var requestIDNode = document.head.querySelector("meta[name=applicationinsights-request-id]");
  if (requestIDNode) {
    var parentID, firstChar, lastChar, generatedID, operationID;
    parentID = requestIDNode.content;
    firstChar = parentID.charAt(0);
    if (firstChar !== '|') {
      return;
    }
    lastChar = parentID.charAt(parentID.length - 1);
    if (lastChar !== '.' && lastChar !== '_') {
      parentID += '.';
    }
    generatedID = ukparliamentAppinsightsRandomIdGenerator();
    parentID += generatedID + '.';
    operationID = ukparliamentAppinsightsGetOperationId(parentID);
    appInsights.context.operation.id = operationID;
    appInsights.context.operation.parentID = parentID;
  }
});


/*
 * 5 chars of semi-randomness to make our page views unique within a request.
 */
function ukparliamentAppinsightsRandomIdGenerator() {
  var base64chars, result, random;
  base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  result = "";
  random = Math.random() * 1073741824; // 5 symbols in base64, almost maxint
  while (random > 0) {
    var char = base64chars.charAt(random % 64);
    result += char;
    random = Math.floor(random / 64);
  }
  return result;
}


/*
 * Returns the root ID from the '|' to the first '.', or '_' if any.
 */
function ukparliamentAppinsightsGetOperationId(id) {
  var dotPosition, underscorePosition, rootEnd, rootStart;
  dotPosition = id.indexOf('.');
  underscorePosition = id.indexOf('_');
  rootEnd = Math.min(dotPosition, underscorePosition);
  if (rootEnd < 0) {
    rootEnd = id.length;
  }
  rootStart = 1;
  return id.substr(rootStart, rootEnd - rootStart);
}

appInsights.trackPageView(document.title, window.location.href, {
  referrer: document.referrer
});