const cheerio = require('cheerio');
const cloudscraper = require('cloudscraper');
const request = require('request-promise-native');

class TorrentProvider {
  constructor(...args) {
    this.options = {
      name: 'Generic Torrent Provider',
      baseURL: 'https://example.com',
      TVCategory: '/tv/',
      stringSeparator: '%20',
      MoviesCategory: '/movies/',
      sortParams: '',
      selectors: {
        container: '.container',
        name: '.torrent-name',
        single: {
          link: 'a[href="/link-to-torrent-single"]',
          magnet: 'a[href^="magnet:?xt"]',
        },
        seeds: '.seeds',
        size: '.file-size',
      },
    };

    this.options = { ...this.options, ...args };
  }

  async getResults(searchTerms, cat = '') {
    try {
      searchTerms = this.formatSearchTerms(searchTerms);
      const torrents = [];
      console.log(`starting scrape on ${this.options.name}`);
      console.log(`${this.options.baseURL}${this.options.searchURL}${searchTerms}${cat}${this.options.sortParams}`);
      const page = await cloudscraper.get(
        `${this.options.baseURL}${this.options.searchURL}${searchTerms}${cat}${this.options.sortParams}`,
      );
      const name = this.getText(page, this.options.selectors.name);
      const size = this.filterSize(this.getText(page, this.options.selectors.size));
      const seeds = this.filterSeeds(this.getText(page, this.options.selectors.seeds));

      if (this.options.selectors.magnet) {
        const magnet = this.getAttr(page, this.options.selectors.magnet, 'href');
        if (name.length == size.length && size.length == magnet.length) {
          console.log(`found ${name.length} matches on ${this.options.name}`);
          name.map((el, i) => {
            torrents.push({
              id: i,
              name: el,
              size: size[i],
              seeds: this.transformNumber(seeds[i]),
              magnet: magnet[i],
            });
          });
        } else {
          throw new Error(
            `found mismatched array length when making data structure. names:${name.length}, sizes:${size.length}, magnets:${magnet.length}`,
          );
        }
      } else {
        const link = this.getAttr(page, this.options.selectors.single.link, 'href');
        if (name.length == size.length && size.length == link.length) {
          console.log(`found ${name.length} matches on _1337x`);
          name.map((el, i) => {
            torrents.push({
              id: 1337 + i,
              name: el,
              size: size[i],
              seeds: seeds[i],
              link: link[i],
            });
          });
        }
      }
      return torrents;
    } catch (error) {
      console.log(`error getting or parsing ${this.options.name} page`);
      console.log(error);
      return [];
    }
  }

  formatSearchTerms(terms) {
    return terms.toLowerCase().replace(/\ /g, this.options.stringSeparator);
  }

  async getWebPage(url) {
    try {
      const html = await request(url);
      return html;
    } catch (error) {
      console.log('error when getting webpage: ' + url);
      throw new Error(error);
    }
  }

  getText(html, selector) {
    const array = [];
    const $ = cheerio.load(html);
    $(selector).each((i, el) => {
      array.push($(el).text());
    });
    return array;
  }

  getAttr(html, selector, attribute) {
    const array = [];
    const $ = cheerio.load(html);
    $(selector).each((i, el) => {
      array.push($(el).attr(attribute));
    });

    return array;
  }

  transformNumber(string) {
    return string.replace(' K', '000');
  }

  async getMagnetFromSingle(link) {
    console.log('getting magnet from single page.');
    try {
      const page = await this.getWebPage(`${this.options.baseURL}${link}`);
      const magnet = this.getAttr(page, this.options.selectors.single.magnet, 'href');
      return magnet[0];
    } catch (error) {
      return `error getting ${this.options.name} magnet link... ${error}`;
    }
  }

  filterSize(size) {
    return size;
  }

  filterSeeds(seeds) {
    return seeds;
  }
}

class Zooqle extends TorrentProvider {
  constructor(...args) {
    super(...args);
    this.options = {
      name: 'Zooqle',
      baseURL: 'https://zooqle.com',
      searchURL: '/search?q=',
      TVCategory: '+category%3ATV',
      stringSeparator: '+',
      sortParams: '',
      MoviesCategory: '+category%3AMovies',
      selectors: {
        container: '.table-torrents tbody tr',
        name: '.table-torrents tbody tr a.small',
        magnet: '.table-torrents tbody tr a[title="Magnet link"]',
        seeds: '.table-torrents tbody tr div[title^="Seeders"] .progress-bar',
        size: '.table-torrents tbody tr td:nth-child(4)',
        single: null,
      },
    };
  }
}

class _1337x extends TorrentProvider {
  constructor(...args) {
    super(...args);
    this.options = {
      name: '1337x',
      baseURL: 'https://1337x.to',
      searchURL: '/sort-search/',
      sortParams: '/seeders/desc/1/',
      TVCategory: '/TV/seeders/desc/1/',
      MoviesCategory: '/Movies/seeders/desc/1/',
      stringSeparator: '%20',
      selectors: {
        container: '.box-info-detail.inner-table .table-list-wrap tbody tr',
        name: '.box-info-detail.inner-table .table-list-wrap tbody tr .name',
        single: {
          link: '.box-info-detail.inner-table .table-list-wrap tbody tr .name a[href^="/torrent"]',
          magnet: 'a[href^="magnet:?xt"]',
        },
        magnet: null,
        seeds: '.box-info-detail.inner-table .table-list-wrap tbody tr .seeds',
        size: '.box-info-detail.inner-table .table-list-wrap tbody tr .size',
      },
    };
  }

  filterSize(size) {
    return size.map(size => size.replace(/((\d){0,4}\.(\d){0,4}) ((K|M|G|T)B)((\d){0,6})/gi, '$1 $4'));
  }
}

const allEngines = [ _1337x];

module.exports = {
  TorrentProvider,
//  Zooqle,
  _1337x,
  allEngines,
};
