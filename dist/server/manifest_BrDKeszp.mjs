import { p as decodeKey } from './chunks/astro/server_Cq79GQn6.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DAU28L7D.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/jhonatangrajales/Desktop/softexlabs-landing/","cacheDir":"file:///home/jhonatangrajales/Desktop/softexlabs-landing/node_modules/.astro/","outDir":"file:///home/jhonatangrajales/Desktop/softexlabs-landing/dist/","srcDir":"file:///home/jhonatangrajales/Desktop/softexlabs-landing/src/","publicDir":"file:///home/jhonatangrajales/Desktop/softexlabs-landing/public/","buildClientDir":"file:///home/jhonatangrajales/Desktop/softexlabs-landing/dist/client/","buildServerDir":"file:///home/jhonatangrajales/Desktop/softexlabs-landing/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"nosotros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"ordo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ordo","isIndex":false,"type":"page","pattern":"^\\/ordo\\/?$","segments":[[{"content":"ordo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ordo.astro","pathname":"/ordo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"servicios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"verificacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/verificacion","isIndex":false,"type":"page","pattern":"^\\/verificacion\\/?$","segments":[[{"content":"verificacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/verificacion.astro","pathname":"/verificacion","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/smtp-verify","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/smtp-verify\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"smtp-verify","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/smtp-verify.ts","pathname":"/api/smtp-verify","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/jhonatangrajales/Desktop/softexlabs-landing/src/pages/verificacion.astro",{"propagation":"none","containsHead":true}],["/home/jhonatangrajales/Desktop/softexlabs-landing/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/home/jhonatangrajales/Desktop/softexlabs-landing/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/jhonatangrajales/Desktop/softexlabs-landing/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/home/jhonatangrajales/Desktop/softexlabs-landing/src/pages/ordo.astro",{"propagation":"none","containsHead":true}],["/home/jhonatangrajales/Desktop/softexlabs-landing/src/pages/servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/api/smtp-verify@_@ts":"pages/api/smtp-verify.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/ordo@_@astro":"pages/ordo.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/verificacion@_@astro":"pages/verificacion.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BrDKeszp.mjs","/home/jhonatangrajales/Desktop/softexlabs-landing/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/jhonatangrajales/Desktop/softexlabs-landing/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BwVKtvBv.mjs","/home/jhonatangrajales/Desktop/softexlabs-landing/src/pages/contacto.astro?astro&type=script&index=0&lang.ts":"_astro/contacto.astro_astro_type_script_index_0_lang.BEREcmvG.js","/home/jhonatangrajales/Desktop/softexlabs-landing/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.C0S25gIO.js","/home/jhonatangrajales/Desktop/softexlabs-landing/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BVdGLLy3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/jhonatangrajales/Desktop/softexlabs-landing/src/pages/contacto.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"contact-form\"),g=document.getElementById(\"whatsBtn\"),a=document.getElementById(\"sendBtn\"),c=document.getElementById(\"sendBtnText\"),m=document.getElementById(\"sendBtnLoading\"),i=document.getElementById(\"formSuccess\"),o=document.getElementById(\"formError\");function l(){const t=document.getElementById(\"name\").value||\"\",e=document.getElementById(\"email\").value||\"\",n=document.getElementById(\"phone\").value||\"\",s=document.getElementById(\"businessType\").value||\"\",r=document.getElementById(\"locations\").value||\"\",u=document.getElementById(\"message\").value||\"\";return{name:t,email:e,phone:n,businessType:s,locations:r,message:u}}d.addEventListener(\"submit\",async t=>{t.preventDefault(),i.classList.add(\"hidden\"),o.classList.add(\"hidden\"),a.disabled=!0,c.classList.add(\"hidden\"),m.classList.remove(\"hidden\");try{const e=l();(await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(e)})).ok?(i.classList.remove(\"hidden\"),d.reset()):o.classList.remove(\"hidden\")}catch(e){console.error(\"Error:\",e),o.classList.remove(\"hidden\")}finally{a.disabled=!1,c.classList.remove(\"hidden\"),m.classList.add(\"hidden\")}});g.addEventListener(\"click\",t=>{t.preventDefault();const e=l(),n=`Hola, me gustaría solicitar una demo de Ordo. Nombre: ${e.name} Email: ${e.email} Teléfono: ${e.phone} Tipo de negocio: ${e.businessType} Número de sedes: ${e.locations} Mensaje: ${e.message}`,s=`https://wa.me/573193636323?text=${encodeURIComponent(n)}`;window.open(s,\"_blank\")});"],["/home/jhonatangrajales/Desktop/softexlabs-landing/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","(function(){function e(n){n.key===\"Tab\"&&(document.documentElement.classList.add(\"user-is-tabbing\"),window.removeEventListener(\"keydown\",e))}window.addEventListener(\"keydown\",e)})();"],["/home/jhonatangrajales/Desktop/softexlabs-landing/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"menu-toggle\"),t=document.getElementById(\"mobile-menu\");e&&t&&e.addEventListener(\"click\",()=>{const n=t.classList.toggle(\"hidden\");e.setAttribute(\"aria-expanded\",String(!n))});"]],"assets":["/app.js","/favicon.svg","/index.html","/robots.txt","/site.webmanifest","/sitemap.xml","/styles.css","/sw.js","/build/tailwind.css","/images/Clientes.png","/images/Reportes.png","/images/calendario.png","/images/login.png","/images/multisede.png","/images/principal.png","/images/sedes.png","/og/ordo-og.avif","/og/ordo-og.png","/og/ordo-og.svg","/og/ordo-og.webp","/styles/global.css","/contacto/index.html","/nosotros/index.html","/ordo/index.html","/servicios/index.html","/verificacion/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"RbfdQtAUlNK9+JFz8AhdBx/OHGOpT+pm3tx55Gp5i4s=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/jhonatangrajales/Desktop/softexlabs-landing/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
