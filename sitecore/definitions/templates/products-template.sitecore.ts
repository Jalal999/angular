import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';
export default function (manifest: Manifest) {
  manifest.addTemplate({
    name: 'Products-Item-Template',
    fields: [
      {
        name: 'title', type: CommonFieldTypes.SingleLineText
      },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'price', type: CommonFieldTypes.Number },
      {
        name: 'description', type: CommonFieldTypes.RichText
      },
    ],
  });
}
