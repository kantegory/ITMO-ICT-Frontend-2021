const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');

export const moduleTheme = {
    state: () => ({
        theme: localStorage.theme?localStorage.theme:'light',
        activeTheme: 'light'
    }),
    mutations: {
        /**
         * Смена темы,
         * @constructor
         * @param {string} payload.theme новая тема
         * @return {object} data - токен JWT.
         */
        changeTheme (state, payload) {
            state.theme = payload.theme;
            localStorage.setItem('theme', payload.theme)
            if (state.theme==='auto') {
                state.activeTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark':'light';
            }

            if (state) {
                let lightMedia;
                let darkMedia;

                if (state.theme === 'auto') {
                    lightMedia = '(prefers-color-scheme: light)';
                    darkMedia = '(prefers-color-scheme: dark)';
                } else {
                    lightMedia = (state.theme === 'light') ? 'all' : 'not all';
                    darkMedia = (state.theme === 'dark') ? 'all' : 'not all';
                }

                [...lightStyles].forEach((link) => {
                    link.media = lightMedia;
                });

                [...darkStyles].forEach((link) => {
                    link.media = darkMedia;
                });
            }

        }
    },
    actions: { }
}