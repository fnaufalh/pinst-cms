import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'code';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    website_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalNavLink extends Struct.ComponentSchema {
  collectionName: 'components_global_nav_links';
  info: {
    description: '';
    displayName: 'NavLink';
    icon: 'code';
  };
  attributes: {
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'home'>;
  };
}

export interface GlobalNavLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_global_nav_link_groups';
  info: {
    displayName: 'NavLinkGroup';
    icon: 'code';
  };
  attributes: {
    NavLink: Schema.Attribute.Component<'global.nav-link', true>;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'code';
  };
  attributes: {
    NavLink: Schema.Attribute.Component<'global.nav-link', true>;
  };
}

export interface HomeHeroCarousel extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_carousels';
  info: {
    displayName: 'Hero Carousel';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.footer': GlobalFooter;
      'global.nav-link': GlobalNavLink;
      'global.nav-link-group': GlobalNavLinkGroup;
      'global.navbar': GlobalNavbar;
      'home.hero-carousel': HomeHeroCarousel;
    }
  }
}
