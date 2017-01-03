if (__DEV__) {
  module.hot.accept();
}

import './docs.styl';
import GitHub from 'github-api'

const gh = new GitHub()
const repo = gh.getRepo('swanky-docs', 'swanky')

repo.listReleases(function(err, res) {
  if (!err) {
    const tagHolder = document.getElementById('version')
    const tag = res[0].tag_name

    tagHolder.innerHTML = 'Swanky ' + tag
  }
})
