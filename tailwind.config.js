import {getIconCollections, iconsPlugin} from '@egoist/tailwindcss-icons'

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        iconsPlugin({
            collections: getIconCollections([/** ... */]),
        }),
    ],
}