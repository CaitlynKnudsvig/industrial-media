const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/id_logo.svg?h=40',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/id_logo.svg?h=80 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/id_logo.svg?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/id_logo.svg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Industrial-Distribution/111265965577111' },
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/Industrial-Distribution-3338596' },
    { provider: 'twitter', href: 'http://www.twitter.com/indistwebsite' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/InDistribution' },
  ],
  gtm: {
    containerId: '<NOT_SET>',
  },
  wufoo: {
    userName: '<NOT_SET>',
  },
  magazines: {
    description: '',
  },
};
