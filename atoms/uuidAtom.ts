import {atomWithStorage} from 'jotai/utils'
export const uuidAtom = atomWithStorage('bbl',{ bblid: '', email: '' });