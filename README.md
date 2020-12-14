# speedlify

After you make a fast web site, keep it fast by measuring it over time. Read [Use Speedlify to Continuously Measure Site Performance](https://www.zachleat.com/web/speedlify/). Created by [@zachleat](https://www.zachleat.com/).

* Requires Node 12+
* Each file in `_data/sites/*.js` is a category and contains a list of sites for comparison.

## Run locally

_After cloning you’ll probably want to delete the initial `_data/sites/*.js` files and create your own file with a list of your own site URLs!_

```
npm install
npm run test-pages
npm run start
```

## Deploy to Netlify

Can run directly on Netlify (including your tests) and will save the results to a Netlify build cache (via Netlify Build Plugins, see `plugins/keep-data-cache/`).

_After cloning you’ll probably want to delete the initial `_data/sites/*.js` files and create your own file with a list of your own site URLs!_

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/zachleat/speedlify"><img src="https://www.netlify.com/img/deploy/button.svg" width="146" height="32"></a>

Speedlify will also save your data to `/results.zip` so that you can download later. Though this has proved to be unnecessary so far, it does serve as a fallback backup mechanism in case the Netlify cache is lost. Just look up your previous build URL and download the data to restore.

[![Netlify Status](https://api.netlify.com/api/v1/badges/69e4ddde-a3d4-4729-b2b1-72f43e427c76/deploy-status)](https://app.netlify.com/sites/boring-mcclintock-1e6a07/deploys)

### Build locally and Deploy from local

*Requires Netlify Dev

_If you have lots of sites and want to offload the build/deploy time to a machine you have follow these steps.

1. Clone you repo down, follow the steps in "Run locally" to get it to work
1. Connect your repo to your site 
1. Do a test by running `netlify build && netlify deploy`
1. When you're happy with that add to your cronjobs via `crontab -e`
1. Build and deploy as often as you'd like.  I'm going to do every hour at the 0th minute by addending this to `crontab -e`
   
   ```
   # Run Speedlify Below
   0 * * * * cd /home/jace/git/speedlify && netlify build && netlify deploy
   # 0 * * * * cd /home/jace/git/speedlify && netlify build > /home/jace/git/speedlify/.buildlog && netlify deploy
   # Run Speedlify Above
   ```
1. Review this all is deploying on https://netlify.com/
1. Update `crontab -e` to have `netlify build --prod` instead of `netlify build`

## Known Limitations

* If you change a URL to remove a redirect (to remove or add a `www.`, moved domains, etc), you probably want to delete the old URL’s data otherwise you’ll have two entries in the results list.
* When running on Netlify, a single category has a max limit on the number of sites it can test, upper bound on how many tests it can complete in the 15 minute Netlify build limit.
* The same URL cannot be listed in two different categories (yet).

## Pay for something better

Speedlify is intended as a stepping stone to more robust performance monitoring solutions like:

* [SpeedCurve](https://speedcurve.com/)
* [Calibre](https://calibreapp.com/)
* [DebugBear](https://www.debugbear.com/)
