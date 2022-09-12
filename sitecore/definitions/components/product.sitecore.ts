import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the product component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function product(manifest: Manifest) {
  manifest.addComponent({
    name: 'Product',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'desc', type: CommonFieldTypes.MultiLineText },
      { name: 'amount', type: CommonFieldTypes.SingleLineText },

    ],
  });
}
