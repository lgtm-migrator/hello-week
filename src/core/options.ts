import { Options } from '../types';

export const defaultOptions: Options = {
    selector: '.hello-week',
    lang: 'en',
    langFolder: '../dist/langs/',
    format: 'DD/MM/YYYY',
    monthShort: false,
    weekShort: true,
    defaultDate: null,
    minDate: null,
    maxDate: null,
    disabledDaysOfWeek: null,
    disableDates: null,
    weekStart: 0,
    timezoneOffset: new Date().getTimezoneOffset(),
    daysSelected: null,
    daysHighlight: null,
    multiplePick: false,
    disablePastDays: false,
    todayHighlight: true,
    range: false,
    locked: false,
    rtl: false,
    nav: ['◀', '▶'],
    onLoad: () => {
        /** callback function */
    },
    onNavigation: () => {
        /** callback function */
    },
    onSelect: () => {
        /** callback function */
    },
    onClear: () => {
        /** callback function */
    },
};
