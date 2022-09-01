import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';
// const packageJson = require('../../../package.json');

/**
 * Adds the productList component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function productList(manifest: Manifest) {
  manifest.addComponent({
    name: 'ProductList',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      {
        name: 'products',
        type: CommonFieldTypes.ContentList,
        source: `data/content/Products`
      }
      ],
  });
}

