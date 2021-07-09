import { i18n } from '../config/i18n';
import { I18nextProvider } from 'react-i18next';
import { theme } from '../theme/main';
import SsfwGlobalProvider from '../components/SsfwGlobalProvider';

function MyApp({ Component, pageProps }) {
    return (
        <SsfwGlobalProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
                <Component {...pageProps} />
            </I18nextProvider>
        </SsfwGlobalProvider>
    );
}

export default MyApp;
