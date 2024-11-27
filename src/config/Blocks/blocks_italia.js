import newsSVG from '@plone/volto/icons/news.svg';
import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';
import HighlightedContentView from 'design-uniba-volto/components/ItaliaTheme/Blocks/HighlightedContent/View';
import HighlightedContentEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/HighlightedContent/Edit';
import noteSvg from 'bootstrap-italia/src/svg/it-note.svg';
import calendarSvg from 'bootstrap-italia/src/svg/it-calendar.svg';

import alertSVG from '@plone/volto/icons/alert.svg';
import AlertView from 'design-uniba-volto/components/ItaliaTheme/Blocks/Alert/View';
import AlertEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/Alert/Edit';

import divideHorizontalSVG from '@plone/volto/icons/divide-horizontal.svg';
import ViewBreak from 'design-uniba-volto/components/ItaliaTheme/Blocks/Break/View';
import EditBreak from 'design-uniba-volto/components/ItaliaTheme/Blocks/Break/Edit';

import SearchSectionsView from 'design-uniba-volto/components/ItaliaTheme/Blocks/SearchSections/View';
import SearchSectionsEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/SearchSections/Edit';

import ArgumentsInEvidenceEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/ArgumentsInEvidence/Edit';
import ArgumentsInEvidenceView from 'design-uniba-volto/components/ItaliaTheme/Blocks/ArgumentsInEvidence/View';

import CalendarView from 'design-uniba-volto/components/ItaliaTheme/Blocks/Calendar/View';
import CalendarEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/Calendar/Edit';

import EventSearchView from 'design-uniba-volto/components/ItaliaTheme/Blocks/EventSearch/View';
import EventSearchEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/EventSearch/Edit';

import simpleTextCardSVG from 'design-uniba-volto/icons/card-semplice.svg';
import TextCardView from 'design-uniba-volto/components/ItaliaTheme/Blocks/TextCard/SimpleCard/View';
import TextCardEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/TextCard/SimpleCard/Edit';
import imageTextCardSVG from 'design-uniba-volto/icons/card-immagine.svg';
import TextCardWithImageView from 'design-uniba-volto/components/ItaliaTheme/Blocks/TextCard/CardWithImage/View';
import TextCardWithImageEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/TextCard/CardWithImage/Edit';

import listArrowsSVG from '@plone/volto/icons/list-arrows.svg';
import AccordionView from 'design-uniba-volto/components/ItaliaTheme/Blocks/Accordion/View';
import AccordionEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/Accordion/Edit';

import videoSVG from '@plone/volto/icons/video.svg';
import VideoGalleryView from 'design-uniba-volto/components/ItaliaTheme/Blocks/VideoGallery/View';
import VideoGalleryEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/VideoGallery/Edit';

import iconBlocksSVG from 'design-uniba-volto/icons/blocco-icone.svg';
import IconBlocksView from 'design-uniba-volto/components/ItaliaTheme/Blocks/IconBlocks/View';
import IconBlocksEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/IconBlocks/Edit';

import emailSVG from '@plone/volto/icons/email.svg';
import ContactsBlockView from 'design-uniba-volto/components/ItaliaTheme/Blocks/ContactsBlock/View';
import ContactsBlockEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/ContactsBlock/Edit';

import numbersBlockSVG from 'design-uniba-volto/icons/numeri.svg';
import NumbersBlockView from 'design-uniba-volto/components/ItaliaTheme/Blocks/NumbersBlock/View';
import NumbersBlockEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/NumbersBlock/Edit';

import BandiSearchView from 'design-uniba-volto/components/ItaliaTheme/Blocks/BandiSearch/View';
import BandiSearchEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/BandiSearch/Edit';

import UOSearchView from 'design-uniba-volto/components/ItaliaTheme/Blocks/UOSearch/View';
import UOSearchEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/UOSearch/Edit';

import flashSVG from '@plone/volto/icons/flash.svg';
import CTABlockView from 'design-uniba-volto/components/ItaliaTheme/Blocks/CTABlock/View';
import CTABlockEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/CTABlock/Edit';

import countDownSVG from 'design-uniba-volto/icons/count-down.svg';
import CountDownBlockView from 'design-uniba-volto/components/ItaliaTheme/Blocks/CountDown/View';
import CountDownBlockEdit from 'design-uniba-volto/components/ItaliaTheme/Blocks/CountDown/Edit';

import { cloneBlock } from 'design-uniba-volto/config/Blocks/ListingOptions';

const italiaBlocks = {
  highlitedContent: {
    id: 'highlitedContent',
    title: 'Contenuto in primo piano',
    icon: newsSVG,
    group: 'homePage',
    view: HighlightedContentView,
    edit: HighlightedContentEdit,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  searchSections: {
    id: 'searchSections',
    title: 'Ricerca nelle sezioni',
    icon: searchIcon,
    group: 'search',
    view: SearchSectionsView,
    edit: SearchSectionsEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  calendar: {
    id: 'calendar',
    title: 'Calendario',
    icon: calendarSvg,
    group: 'homePage',
    view: CalendarView,
    edit: CalendarEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  searchEvents: {
    id: 'searchEvents',
    title: 'Ricerca eventi',
    icon: searchIcon,
    group: 'search',
    view: EventSearchView,
    edit: EventSearchEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  searchBandi: {
    id: 'searchBandi',
    title: 'Ricerca bandi',
    icon: searchIcon,
    group: 'search',
    view: BandiSearchView,
    edit: BandiSearchEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  searchUO: {
    id: 'searchUO',
    title: 'Ricerca Unità Organizzative',
    icon: searchIcon,
    group: 'search',
    view: UOSearchView,
    edit: UOSearchEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  argumentsInEvidence: {
    id: 'argumentsInEvidence',
    title: 'Argomenti in evidenza',
    icon: noteSvg,
    group: 'homePage',
    view: ArgumentsInEvidenceView,
    edit: ArgumentsInEvidenceEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  break: {
    id: 'break',
    title: 'Interruzione di pagina',
    icon: divideHorizontalSVG,
    group: 'text',
    view: ViewBreak,
    edit: EditBreak,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
  },
  alert: {
    id: 'alert',
    title: 'Alert',
    icon: alertSVG,
    group: 'text',
    view: AlertView,
    edit: AlertEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },

  testo_riquadro_semplice: {
    id: 'testo_riquadro_semplice',
    title: 'Card semplice',
    icon: simpleTextCardSVG,
    group: 'text',
    view: TextCardView,
    edit: TextCardEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
  testo_riquadro_immagine: {
    id: 'testo_riquadro_immagine',
    title: 'Card con immagine',
    icon: imageTextCardSVG,
    group: 'text',
    view: TextCardWithImageView,
    edit: TextCardWithImageEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  accordion: {
    id: 'accordion',
    title: 'Accordion',
    icon: listArrowsSVG,
    group: 'text',
    view: AccordionView,
    edit: AccordionEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
    blockHasOwnFocusManagement: true,
  },
  numbersBlock: {
    id: 'numbersBlock',
    title: 'Blocco Numeri',
    icon: numbersBlockSVG,
    group: 'text',
    view: NumbersBlockView,
    edit: NumbersBlockEdit,
    restricted: false,
    cloneData: cloneBlock,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  iconBlocks: {
    id: 'iconBlocks',
    title: 'Blocchi con icone',
    icon: iconBlocksSVG,
    group: 'text',
    view: IconBlocksView,
    edit: IconBlocksEdit,
    restricted: false,
    mostUsed: true,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  contacts: {
    id: 'contacts',
    title: 'Contatti',
    icon: emailSVG,
    group: 'text',
    view: ContactsBlockView,
    edit: ContactsBlockEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },

  video_gallery: {
    id: 'video_gallery',
    title: 'Video Gallery',
    icon: videoSVG,
    group: 'media',
    view: VideoGalleryView,
    edit: VideoGalleryEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  cta_block: {
    id: 'cta_block',
    title: 'Blocco CTA',
    icon: flashSVG,
    group: 'common',
    view: CTABlockView,
    edit: CTABlockEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    blockHasOwnFocusManagement: true,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
  count_down: {
    id: 'count_down',
    title: 'Count Down',
    icon: countDownSVG,
    group: 'common',
    view: CountDownBlockView,
    edit: CountDownBlockEdit,
    restricted: false,
    mostUsed: false,
    cloneData: cloneBlock,
    security: {
      addPermission: [],
      view: [],
    },
    sidebarTab: 1,
  },
};

const getItaliaBlocks = (config) => {
  delete config.blocks.blocksConfig.teaser;
  config.blocks.blocksConfig.gridBlock.allowedBlocks =
    config.blocks.blocksConfig.gridBlock.allowedBlocks
      .filter((item) => !['slate', 'teaser'].includes(item))
      .concat(['text']);
  return italiaBlocks;
};
export default getItaliaBlocks;

