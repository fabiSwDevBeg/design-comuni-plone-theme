import searchIcon from 'bootstrap-italia/src/svg/it-search.svg';

import SearchRubricaView from 'design-uniba-volto/components/UnibaTheme/Blocks/SearchRubrica/View';
import SearchRubricaEdit from 'design-uniba-volto/components/UnibaTheme/Blocks/SearchRubrica/Edit';

import { cloneBlock } from 'design-uniba-volto/config/Blocks/ListingOptions';
const unibaBlocks = {
    searchRubrica: {
        id: 'searchRubrica',
        title: 'Ricerca nella rubrica',
        icon: searchIcon,
        group: 'search',
        view: SearchRubricaView,
        edit: SearchRubricaEdit,
        restricted: false,
        mostUsed: false,
        cloneData: cloneBlock,
        security: {
            addPermission: [],
            view: [],
        },
        sidebarTab: 1,
    },
}

const getUnibaBlocks = (config) => {
    return unibaBlocks;
};
export default getUnibaBlocks;