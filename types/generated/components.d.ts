import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    address: Attribute.Text & Attribute.Required;
    website_url: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    phone: Attribute.Text & Attribute.Required;
  };
}

export interface GlobalNavLinkGroup extends Schema.Component {
  collectionName: 'components_global_nav_link_groups';
  info: {
    displayName: 'NavLinkGroup';
    icon: 'code';
  };
  attributes: {
    NavLink: Attribute.Component<'global.nav-link', true>;
  };
}

export interface GlobalNavLink extends Schema.Component {
  collectionName: 'components_global_nav_links';
  info: {
    displayName: 'NavLink';
    icon: 'code';
    description: '';
  };
  attributes: {
    slug: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.DefaultTo<'home'>;
  };
}

export interface GlobalNavbar extends Schema.Component {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'code';
  };
  attributes: {
    NavLink: Attribute.Component<'global.nav-link', true>;
  };
}

export interface HomeHeroCarousel extends Schema.Component {
  collectionName: 'components_home_hero_carousels';
  info: {
    displayName: 'Hero Carousel';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.footer': GlobalFooter;
      'global.nav-link-group': GlobalNavLinkGroup;
      'global.nav-link': GlobalNavLink;
      'global.navbar': GlobalNavbar;
      'home.hero-carousel': HomeHeroCarousel;
    }
  }
}
