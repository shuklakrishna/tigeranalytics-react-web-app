import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          Learn React Krishna

          <script type="text/javascript" async=1>;(function(p,l,o,w,i,n,g){
  if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
  p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
  };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
  n.src=w;g.parentNode.insertBefore(n,g)}
}(
  window,
  document,
  "script",
  "https://1f016d42-2022-464a-9330-5a6a58815639.app.try-snowplow.com/try.js",
  "snowplow")
);


snowplow("newTracker", "try", "1f016d42-2022-464a-9330-5a6a58815639.app.try-snowplow.com", {
  appId: "try-snowplow", // you can specify your own app name here
  platform: "web",
  forceSecureTracker: true,
  contexts: {
    webPage: true, // this sets a unique id for each page view
    performanceTiming: true // this captures performance metrics like load times
  }
});

// send first heartbeat after 10 seconds, and every 10 seconds thereafter
snowplow("enableActivityTracking", 10, 10);
snowplow("enableLinkClickTracking"); 
snowplow("trackPageView"); 

</script>

      </header>
    </div>
  );
}

export default App;
