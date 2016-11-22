const contentTmpl = './template/Content/index';

module.exports = {
  categoryOrder: {
    十大原则: 0,
    Principles: 0,
    设计基础: 1,
    'Design Fundamental': 1,
  },
  typeOrder: {
    General: 0,
    Layout: 1,
    Navigation: 2,
    'Data Entry': 3,
    'Data Display': 4,
    Feedback: 5,
    Other: 6,
  },
  docVersions: {},
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: './template/Home/index' },
    childRoutes: [{
      path: 'docs/practice/:children',
      component: contentTmpl,
    }, {
      path: 'docs/pattern/:children',
      component: contentTmpl,
    }, {
      path: 'docs/react/:children',
      component: contentTmpl,
    }, {
      path: 'changelog',
      component: contentTmpl,
    }, {
      path: 'components/:children/',
      component: contentTmpl,
    }, {
      path: 'docs/spec/:children',
      component: contentTmpl,
    }, {
      path: 'docs/resource/:children',
      component: contentTmpl,
    }],
  },
};
