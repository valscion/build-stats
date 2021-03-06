'use strict';
const builds = require('../utils/builds');
const adapters = require('../adapters');

async function download({ cwd, host, user, repo }) {
  let buildsDir = await builds.getBuildDir(cwd, host, user, repo);
  let adapter = adapters[host];

  if (adapter) {
    await adapter.download(buildsDir, user, repo);
  } else {
    throw new Error(`Unknown CI service: ${host}`);
  }
}

module.exports = download;
