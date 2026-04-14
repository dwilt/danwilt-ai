// PostHog analytics
// 1. Sign up at https://posthog.com (free tier covers 1M events/month)
// 2. Copy your Project API key from Settings → Project → API Keys
// 3. Replace the POSTHOG_KEY value below
// 4. If your project is in the EU region, change api_host to 'https://eu.i.posthog.com'

(function () {
  const POSTHOG_KEY = 'phc_wAc9QbQxrFG89cQdStVSgToGdTmc79kBo4fvh6AmjUt9';
  const POSTHOG_HOST = 'https://us.i.posthog.com';

  // Skip analytics in local dev so you don't pollute production data
  const host = window.location.hostname;
  const isLocal = host === 'localhost' || host === '127.0.0.1' || host === '';
  if (isLocal) return;
  if (POSTHOG_KEY.includes('REPLACE_WITH_YOUR')) return;

  // Standard PostHog loader snippet
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only', // only create profiles for identified users
    capture_pageview: true,              // autocapture pageviews
    capture_pageleave: true,             // track time on page
    autocapture: true,                   // auto-track clicks, form submits, etc.
    disable_session_recording: true,     // flip to false later if you want session replay
  });
})();
