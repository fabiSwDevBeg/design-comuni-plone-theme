import loadable from '@loadable/component';

export const loadables = {
  'subsite-light-blue': loadable.lib(
    () => import('design-uniba-volto/config/Subsites/light-blue'),
  ),
  'subsite-light-pink': loadable.lib(
    () => import('design-uniba-volto/config/Subsites/light-pink'),
  ),
  'subsite-light-teal': loadable.lib(
    () => import('design-uniba-volto/config/Subsites/light-teal'),
  ),
  'subsite-light-yellow': loadable.lib(
    () => import('design-uniba-volto/config/Subsites/light-yellow'),
  ),
  'subsite-magenta': loadable.lib(
    () => import('design-uniba-volto/config/Subsites/magenta'),
  ),
  'subsite-teal': loadable.lib(
    () => import('design-uniba-volto/config/Subsites/teal'),
  ),
  'subsite-white': loadable.lib(
    () => import('design-uniba-volto/config/Subsites/white'),
  ),
  'subsite-yellow': loadable.lib(
    () => import('design-uniba-volto/config/Subsites/yellow'),
  ),
};
