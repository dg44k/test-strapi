import type { Schema, Struct } from '@strapi/strapi';

export interface PageWidgetsHeroBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_widgets_hero_blocks';
  info: {
    displayName: 'Hero-block';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface PageWidgetsNewsListWidget extends Struct.ComponentSchema {
  collectionName: 'components_page_widgets_news_list_widgets';
  info: {
    displayName: 'news-list-widget';
  };
  attributes: {
    mock: Schema.Attribute.String;
  };
}

export interface PageWidgetsTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_page_widgets_text_with_images';
  info: {
    description: '';
    displayName: 'text-with-image';
    icon: '';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Text: Schema.Attribute.Blocks;
  };
}

export interface PageWidgetsTwoColumnsText extends Struct.ComponentSchema {
  collectionName: 'components_page_widgets_two_columns_texts';
  info: {
    displayName: 'two-columns-text';
  };
  attributes: {
    LeftColumn: Schema.Attribute.Blocks;
    RightColumn: Schema.Attribute.Blocks;
  };
}

export interface PageWidgetsWysiwygBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_widgets_wysiwyg_blocks';
  info: {
    description: '';
    displayName: 'wysiwyg-block';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    description: '';
    displayName: 'MenuItem';
  };
  attributes: {
    TitleMenuItem: Schema.Attribute.String & Schema.Attribute.Required;
    UrlMenuItem: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-widgets.hero-block': PageWidgetsHeroBlock;
      'page-widgets.news-list-widget': PageWidgetsNewsListWidget;
      'page-widgets.text-with-image': PageWidgetsTextWithImage;
      'page-widgets.two-columns-text': PageWidgetsTwoColumnsText;
      'page-widgets.wysiwyg-block': PageWidgetsWysiwygBlock;
      'shared.media': SharedMedia;
      'shared.menu-item': SharedMenuItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
