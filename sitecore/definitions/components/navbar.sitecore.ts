import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the navbar component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function navbar(manifest: Manifest) {
  manifest.addComponent({
    name: 'Navbar',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'imgCart', type: CommonFieldTypes.Image },
      { name: 'imgBar', type: CommonFieldTypes.Image },
    ],
  });
}
